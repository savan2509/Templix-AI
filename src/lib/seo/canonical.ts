/**
 * Canonical URL Engine for Templix AI
 *
 * Single source of truth for constructing canonical `<link rel="canonical">` URLs.
 * Enforces production host fidelity, strips query noise/tracking parameters,
 * cleans pagination parameters, and sanitizes slug paths.
 */

import { siteConfig } from "@/config/site";

const BASE_URL = siteConfig.url;

/** Query string params that should NEVER appear in a canonical URL */
export const STRIP_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
  "msclkid",
  "twclid",
  "li_fat_id",
  "ref",
  "referrer",
  "source",
  "search",
  "q",
  "filter",
  "sort",
  "preview",
]);

/**
 * Universal canonical URL builder.
 *
 * @param path Relative path (e.g. "/templates/invoices/freelancer")
 * @param searchParams Optional query parameters
 * @param locale Optional locale (defaults to "en")
 * @returns Absolute canonical URL string
 */
export function getCanonicalUrl(
  path: string,
  searchParams?: Record<string, string | string[] | undefined>,
  locale: string = "en"
): string {
  const RETIRED_LOCALES = new Set(["es", "de", "fr", "ar"]);
  const targetLocale = !locale || RETIRED_LOCALES.has(locale.toLowerCase()) ? "en" : locale.toLowerCase();

  // Normalize path: lowercase, strip leading/trailing slashes
  const cleanPath = path.replace(/^\/+|\/+$/g, "").toLowerCase();
  const normalized = cleanPath ? `/${cleanPath}` : "";

  // If path already starts with targetLocale (e.g. "en/..."), don't duplicate
  const fullPath = normalized.startsWith(`/${targetLocale}`)
    ? normalized
    : `/${targetLocale}${normalized}`;

  const base = `${BASE_URL}${fullPath}`;

  if (!searchParams || Object.keys(searchParams).length === 0) {
    return base;
  }

  // Filter query parameters: strip tracking and page=1
  const clean = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    const k = key.toLowerCase();
    if (STRIP_PARAMS.has(k)) continue;
    if (k === "page" && (value === "1" || value === "0" || value === "" || !value)) continue;
    if (value === undefined || value === null || value === "") continue;

    const v = Array.isArray(value) ? value[0] : value;
    if (v) clean.set(k, v);
  }

  const qs = clean.toString();
  return qs ? `${base}?${qs}` : base;
}

/**
 * Strips tracking and search parameters from a raw URL.
 */
export function cleanCanonical(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    for (const key of STRIP_PARAMS) {
      url.searchParams.delete(key);
    }
    if (url.searchParams.get("page") === "1") {
      url.searchParams.delete("page");
    }
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.slice(0, -1);
    }
    return url.toString();
  } catch {
    return rawUrl;
  }
}

/**
 * Sanitizes slug strings for URL and SEO safety.
 */
export function sanitizeSlug(raw: string): string {
  return raw
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Determines whether a given query set should trigger noindex robots directive.
 * Search queries and deep filtered facets should NOT be indexed to avoid thin page dilution.
 */
export function shouldNoIndexQueryParams(
  searchParams?: Record<string, string | string[] | undefined>
): boolean {
  if (!searchParams) return false;
  const keys = Object.keys(searchParams).map((k) => k.toLowerCase());
  return keys.some((k) => k === "search" || k === "q" || k === "filter" || k === "sort");
}
