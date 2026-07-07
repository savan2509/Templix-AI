import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es", "de", "fr", "ar"];
const defaultLocale = "en";

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ── Passthrough: api routes, Next.js internals, static assets ───────────────
  // IMPORTANT: /api/auth/* must be excluded here so next-auth route handlers
  // can respond correctly. Wrapping the middleware with auth() was causing
  // next-auth to intercept its own /api/auth/session endpoint and return a
  // 404 HTML page instead of JSON when the DB was offline.
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // 1. Redirect bare paths (missing locale prefix) to the default locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        req.url
      )
    );
  }

  // Login is disabled: the app is fully usable anonymously (browse templates,
  // customize in the editor, export). Account-only routes (/login, /dashboard,
  // /admin) redirect to the home page so nothing dead-ends on a sign-in screen.
  const pathParts = pathname.split("/");
  const currentLocale = pathParts[1] || defaultLocale;
  const subPath = pathParts.slice(2).join("/");

  const accountOnly =
    subPath === "login" ||
    subPath === "register" ||
    subPath.startsWith("dashboard") ||
    subPath.startsWith("admin");

  if (accountOnly) {
    return NextResponse.redirect(new URL(`/${currentLocale}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run middleware on all paths except static files & system paths
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml).*)",
  ],
};
