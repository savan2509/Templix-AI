import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const locales = ["en", "es", "de", "fr", "ar"];
const defaultLocale = "en";

export default async function proxy(req: NextRequest) {
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

  // ── Supabase Session Refresh ────────────────────────────────────────────────
  // Refresh the user's session cookie on every request so they stay logged in.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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
      await supabase.auth.getUser();
    } catch {
      // Continue if Supabase is unreachable
    }
  }

  // 1. Redirect bare paths (missing locale prefix) to the default locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const redirectUrl = new URL(
      `/${defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      req.url
    );
    // Preserve any search parameters or hash (e.g. for password resets)
    redirectUrl.search = req.nextUrl.search;
    return NextResponse.redirect(redirectUrl);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    // Run proxy on all paths except static files & system paths
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml).*)",
  ],
};
