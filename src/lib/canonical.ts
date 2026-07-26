/**
 * Canonical URL builder
 *
 * Single source of truth for constructing canonical `<link rel="canonical">` URLs.
 *
 * Rules enforced:
 *   • Always uses the production domain (via siteConfig.url) — never a platform alias
 *   • Strips tracking parameters (?utm_*, ?fbclid, ?gclid) so canonicals are clean
 *   • Strips ?q= search params (infinite search-result variants → canonical = clean category)
 *   • Strips ?page=1 (page 1 = clean URL; page 2+ keeps ?page=N)
 *   • Normalizes trailing slashes (removes them)
 *   • Lowercases path
 *
 * Usage:
 *   import { buildCanonical } from "@/lib/canonical";
 *   canonical: buildCanonical("en", "/templates/invoices")
 *   canonical: buildCanonical("en", "/templates/invoices", { page: "2" })  // keeps ?page=2
 */

import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

/** Query string params that should NEVER appear in a canonical URL */
const STRIP_PARAMS = new Set([
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "fbclid", "gclid", "msclkid", "twclid", "li_fat_id",
  "ref", "referrer", "source",
  "q",          // search-result pages → canonical = clean category
]);

/**
 * Builds a canonical URL from locale + path + optional search params.
 * Strips tracking params and page=1, keeps page>1 for paginated content.
 */
export function buildCanonical(
  locale: string,
  slugPath: string,
  searchParams?: Record<string, string | string[] | undefined>
): string {
  // Normalize path: lowercase, strip trailing slash, ensure leading /
  const normalizedPath = `/${slugPath.replace(/^\/+|\/+$/g, "").toLowerCase()}`;
  const base = `${BASE}/${locale}${normalizedPath}`;

  if (!searchParams || Object.keys(searchParams).length === 0) return base;

  // Build a clean URLSearchParams, dropping unwanted keys and page=1
  const clean = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (STRIP_PARAMS.has(key)) continue;
    if (key === "page" && (value === "1" || value === "")) continue;

    if (value === undefined || value === null || value === "") continue;
    const v = Array.isArray(value) ? value[0] : value;
    if (v) clean.set(key, v);
  }

  const qs = clean.toString();
  return qs ? `${base}?${qs}` : base;
}

/**
 * Strips known tracking/noise params from a raw URL string.
 * Useful for cleaning externally-authored canonical overrides.
 */
export function cleanCanonical(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    for (const key of STRIP_PARAMS) url.searchParams.delete(key);
    if (url.searchParams.get("page") === "1") url.searchParams.delete("page");
    // Remove trailing slash from pathname
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.slice(0, -1);
    }
    return url.toString();
  } catch {
    return rawUrl;
  }
}

/**
 * Returns a sanitized slug: lowercase, hyphens only, no leading/trailing hyphens.
 * Prevents malformed URLs from landing in canonical or sitemap.
 */
export function sanitizeSlug(raw: string): string {
  return raw
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
