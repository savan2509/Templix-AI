import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { PRODUCTION_URL } from "@/config/site";

// Locale prefixes the app still recognizes in incoming URLs. Only `en` is
// served now — the others exist purely so we can 308-redirect their old,
// English-content URLs onto /en (see the redirect block below) instead of
// 404ing them, consolidating every ranking signal on the English pages.
const locales = ["en", "es", "de", "fr", "ar"];
const RETIRED_LOCALES = ["es", "de", "fr", "ar"];
const defaultLocale = "en";

// Deployment-platform alias suffixes. A production request that lands on one of
// these (e.g. templix-ai.vercel.app) is permanently redirected to the custom
// domain so Google consolidates every ranking signal there instead of splitting
// them across two hostnames — the recurring "canonical split" problem.
const PLATFORM_ALIAS = /\.(vercel\.app|netlify\.app|onrender\.com)$/i;

export default async function proxy(req: NextRequest) {
  // ── Consolidate the platform alias onto the production domain (301/308) ──────
  // Gated on VERCEL_ENV === "production" so preview and development deployments,
  // which legitimately serve on *.vercel.app, are never redirected.
  const host = req.headers.get("host") || "";
  if (process.env.VERCEL_ENV === "production" && PLATFORM_ALIAS.test(host)) {
    const dest = new URL(req.nextUrl.pathname + req.nextUrl.search, PRODUCTION_URL);
    return NextResponse.redirect(dest, 308);
  }

  const { pathname } = req.nextUrl;
  let supabaseResponse = NextResponse.next({ request: req });

  // ── Passthrough: api routes, Next.js internals, static assets ───────────────
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return supabaseResponse;
  }

  // ── Self-heal Supabase auth code on the wrong path ──────────────────────────
  // Supabase email links land on whatever its "Site URL" points at. If that is
  // misconfigured (e.g. the site root instead of the callback), the confirmation
  // arrives as /?code=… and the session is never established. Route any stray
  // ?code= to the real callback so the user still ends up logged in.
  const authCode = req.nextUrl.searchParams.get("code");
  const tokenHash = req.nextUrl.searchParams.get("token_hash");
  if (authCode || tokenHash) {
    const localeSeg = locales.find(
      (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
    );
    const loc = localeSeg || defaultLocale;
    const callback = new URL("/api/auth/supabase/callback", req.url);
    if (authCode) callback.searchParams.set("code", authCode);
    if (tokenHash) {
      callback.searchParams.set("token_hash", tokenHash);
      const t = req.nextUrl.searchParams.get("type");
      if (t) callback.searchParams.set("type", t);
    }
    callback.searchParams.set("next", `/${loc}/dashboard`);
    return NextResponse.redirect(callback);
  }

  // ── Supabase Session Refresh ────────────────────────────────────────────────
  // Refresh the user's session cookie on every request so they stay logged in.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Track the session so the editor gate below can act on it. `sessionChecked`
  // stays false if Supabase is unreachable, so a transient outage never falsely
  // bounces a logged-in user to /login.
  let sessionChecked = false;
  let hasUser = false;

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createServerClient(supabaseUrl, supabaseKey, {
        cookies: {
          getAll() {
            return req.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              req.cookies.set(name, value)
            );
            supabaseResponse = NextResponse.next({ request: req });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          },
        },
      });

      // Best-effort session refresh, never blocks request on network/DB failure
      const { data } = await supabase.auth.getUser();
      hasUser = !!data.user;
      sessionChecked = true;
    } catch {
      // Continue if Supabase is unreachable
    }
  }

  // 0. Retire the non-English locales. Their pages only ever served English
  // content, so a /{es,de,fr,ar}/… URL is permanently redirected to its /en
  // equivalent. Google then drops the duplicate localized URLs and keeps /en.
  const retired = RETIRED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (retired) {
    const rest = pathname.replace(/^\/(?:es|de|fr|ar)(?=\/|$)/, "");
    const dest = new URL(`/en${rest}`, req.url);
    dest.search = req.nextUrl.search;
    return NextResponse.redirect(dest, 308);
  }

  // 1. Redirect bare paths (missing locale prefix) to the default locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Redirect to the locale-prefixed path in a SINGLE hop. The root "/" must
    // map to "/{locale}" with no trailing slash — appending pathname ("/")
    // produced "/en/", which Next then re-redirected to "/en", a needless
    // 2-hop chain on the site's most-linked URL. Other paths already start with
    // "/" so they carry through unchanged (e.g. "/templates" → "/en/templates").
    const targetPath = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    const redirectUrl = new URL(targetPath, req.url);
    // Preserve any search parameters or hash (e.g. for password resets)
    redirectUrl.search = req.nextUrl.search;
    return NextResponse.redirect(redirectUrl);
  }

  // ── Require login before the document editor ────────────────────────────────
  // Opening a template in the editor (/en/editor/…) needs an account so the work
  // can be saved. Gate it here with a real 307 — a page-level redirect() during
  // the streaming render only emits a client-side meta tag. Signed-out visitors
  // go to /login with a `next` that returns them to this exact editor URL
  // (template + prefilled fields preserved) the moment they authenticate. Placed
  // after locale consolidation so a retired-locale editor URL resolves to /en
  // first, keeping the login round-trip on the canonical locale.
  const editorMatch = pathname.match(/^\/([a-z]{2})\/editor(?:\/|$)/);
  if (editorMatch && sessionChecked && !hasUser) {
    const loc = editorMatch[1];
    const loginUrl = new URL(`/${loc}/login`, req.url);
    loginUrl.searchParams.set("next", pathname + req.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    // Run proxy on all paths except static files & system paths
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml).*)",
  ],
};
