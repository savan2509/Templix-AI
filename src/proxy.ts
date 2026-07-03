import { NextResponse } from "next/server";
import { auth } from "@/auth";

const locales = ["en", "es", "de", "fr", "ar"];
const defaultLocale = "en";

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Skip api routes, next static files, images, favicon, sitemaps, robots.txt, rss
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // 1. Check if the path is missing a locale prefix
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
});

export const config = {
  matcher: [
    // Run middleware on all paths except static files & system paths
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml).*)",
  ],
};
