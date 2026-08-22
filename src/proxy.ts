import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { PRODUCTION_URL } from "@/config/site";
import { ALL_MASTER_LANDING_SLUGS } from "@/lib/landing-page-data";

// Locale prefixes the app still recognizes in incoming URLs. Only `en` is served;
// es/fr/de/ar are RETIRED — they 308-redirect to /en (see the block below). They
// were briefly un-retired to pilot localization, but only the UI + tools were
// translated while templates and blog posts stayed English, so Google indexed
// them as half-translated duplicates and drained crawl budget on a subdomain that
// can't spare it. Retiring consolidates every ranking signal on /en. Re-enable a
// locale only once its content is genuinely translated (its files still exist in
// src/lib/i18n/content).
const locales = ["en", "es", "de", "fr", "ar"];
const RETIRED_LOCALES = ["es", "de", "fr", "ar"];
const defaultLocale = "en";

// Deployment-platform alias suffixes. A production request that lands on one of
// these (e.g. templix-ai.vercel.app) is permanently redirected to the custom
// domain so Google consolidates every ranking signal there instead of splitting
// them across two hostnames — the recurring "canonical split" problem.
const PLATFORM_ALIAS = /\.(vercel\.app|netlify\.app|onrender\.com)$/i;

export default async function proxy(req: NextRequest) {
  // ── Consolidate platform aliases, www subdomains, and HTTP onto production domain (301) ──
  const hostHeader = (req.headers.get("host") || "").toLowerCase();
  const forwardedHost = (req.headers.get("x-forwarded-host") || "").toLowerCase();
  const nextHost = (req.nextUrl.hostname || "").toLowerCase();
  const proto = req.headers.get("x-forwarded-proto") || "";
  const prodHost = new URL(PRODUCTION_URL).hostname.toLowerCase();

  const isLocalhost =
    hostHeader.includes("localhost") ||
    hostHeader.includes("127.0.0.1") ||
    forwardedHost.includes("localhost") ||
    forwardedHost.includes("127.0.0.1") ||
    nextHost.includes("localhost") ||
    nextHost === "127.0.0.1";

  const isPlatformAlias = PLATFORM_ALIAS.test(hostHeader) || PLATFORM_ALIAS.test(forwardedHost) || PLATFORM_ALIAS.test(nextHost);
  const isWwwSubdomain =
    hostHeader.startsWith("www.") ||
    forwardedHost.startsWith("www.") ||
    nextHost.startsWith("www.") ||
    (hostHeader.length > 0 && hostHeader !== prodHost && hostHeader.includes(prodHost)) ||
    (forwardedHost.length > 0 && forwardedHost !== prodHost && forwardedHost.includes(prodHost));
  const isHttp = proto === "http";

  // Unconditionally redirect any www. subdomain, platform alias, or HTTP request to production domain using 301 (never redirect localhost)
  if (!isLocalhost && (isWwwSubdomain || isPlatformAlias || (isHttp && (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production")))) {
    const cleanPath = req.nextUrl.pathname === "/" ? "/en" : req.nextUrl.pathname;
    const dest = new URL(cleanPath + req.nextUrl.search, PRODUCTION_URL);
    return NextResponse.redirect(dest, 301);
  }

  const { pathname } = req.nextUrl;

  // Consolidate bare root `/` onto canonical locale `/en` (301 Moved Permanently)
  if (pathname === "/") {
    const baseUrl = isLocalhost ? req.url : PRODUCTION_URL;
    const dest = new URL(`/en${req.nextUrl.search}`, baseUrl);
    return NextResponse.redirect(dest, 301);
  }
  let supabaseResponse = NextResponse.next({ request: req });

  // ── Passthrough: api routes, Next.js internals, static assets ───────────────
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico" ||
    pathname === "/ads.txt"
  ) {
    return supabaseResponse;
  }

  // ── Self-heal Supabase auth code on the wrong path ──────────────────────────
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
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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

      const { data } = await supabase.auth.getUser();
      hasUser = !!data.user;
      sessionChecked = true;
    } catch {
      // Continue if Supabase is unreachable
    }
  }

  const VALID_BARE_ROUTES = [
    "templates", "blog", "compare", "tools", "about", "contact",
    "privacy", "terms", "faq", "login", "editor",
    "dashboard", "admin", "confirm", "reset", "auth",
    "services", "products", "category", "industries", "use-cases",
    ...ALL_MASTER_LANDING_SLUGS
  ];

  // Helper to build clean search params (strips page=1 and empty page)
  const cleanSearch = (searchParams: URLSearchParams): string => {
    const clean = new URLSearchParams(searchParams);
    if (clean.get("page") === "1" || clean.get("page") === "0" || clean.get("page") === "") {
      clean.delete("page");
    }
    const str = clean.toString();
    return str ? `?${str}` : "";
  };

  // 0. Retire non-English locales (301 Moved Permanently to /en/...)
  const retired = RETIRED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (retired) {
    const rest = pathname.replace(/^\/(?:es|de|fr|ar)(?=\/|$)/, "");
    const dest = new URL(`/en${rest}${cleanSearch(req.nextUrl.searchParams)}`, req.url);
    return NextResponse.redirect(dest, 301);
  }

  // 1. Known bare routes redirect to default locale /en. Invalid paths pass through directly so Next.js renders HTTP 404 without redirecting.
  const isKnownBareRoute = VALID_BARE_ROUTES.some(
    (r) => pathname === `/${r}` || pathname.startsWith(`/${r}/`)
  );

  if (isKnownBareRoute) {
    const targetPath = `/${defaultLocale}${pathname}${cleanSearch(req.nextUrl.searchParams)}`;
    const redirectUrl = new URL(targetPath, req.url);
    return NextResponse.redirect(redirectUrl, 301);
  }

  // 1b. Clean redundant page=1 parameter or trailing slash from URLs (301 Moved Permanently)
  const hasTrailingSlash = pathname.length > 1 && pathname.endsWith("/");
  const hasZeroPage = req.nextUrl.searchParams.get("page") === "1" || req.nextUrl.searchParams.get("page") === "0";

  if (hasTrailingSlash || hasZeroPage) {
    const cleanPath = hasTrailingSlash ? pathname.replace(/\/+$/, "") : pathname;
    const cleanQs = cleanSearch(req.nextUrl.searchParams);
    const dest = new URL(cleanPath + cleanQs, req.url);
    return NextResponse.redirect(dest, 301);
  }

  // Redirect legacy /blog/templix-ai-vs-* URLs to /compare/templix-ai-vs-* (308 Permanent Redirect)
  const legacyVsMatch = pathname.match(/^\/([a-z]{2})\/blog\/(templix-ai-vs-[a-z0-9-]+)$/);
  if (legacyVsMatch) {
    const loc = legacyVsMatch[1];
    const slug = legacyVsMatch[2];
    const dest = new URL(`/${loc}/compare/${slug}${cleanSearch(req.nextUrl.searchParams)}`, req.url);
    return NextResponse.redirect(dest, 308);
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

  // Inject canonical Link header to inform audit tools and search bots of authoritative domain
  const canonicalPath = pathname === "/" ? "/en" : pathname;
  supabaseResponse.headers.set("Link", `<${PRODUCTION_URL}${canonicalPath}>; rel="canonical"`);

  return supabaseResponse;
}

export const config = {
  matcher: [
    // Run proxy on all paths except static files & system paths
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml).*)",
  ],
};
