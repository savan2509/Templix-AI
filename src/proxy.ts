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

  // Extract locale and path details
  const pathParts = pathname.split("/");
  const currentLocale = pathParts[1] || defaultLocale;
  const subPath = pathParts.slice(2).join("/");

  // 2. Auth Guards
  const isAuthRoute = subPath === "login" || subPath === "register";
  const isProtectedRoute = subPath.startsWith("dashboard") || subPath.startsWith("editor");
  const isAdminRoute = subPath.startsWith("admin");

  const isLoggedIn = !!req.auth;

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL(`/${currentLocale}/dashboard`, req.url));
  }

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL(`/${currentLocale}/login`, req.url));
  }

  if (isAdminRoute) {
    const userRole = req.auth?.user?.role;
    if (userRole !== "ADMIN" && userRole !== "OWNER") {
      return NextResponse.redirect(new URL(`/${currentLocale}/dashboard`, req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Run middleware on all paths except static files & system paths
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml).*)",
  ],
};
