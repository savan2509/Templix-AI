// Profession landing-page content. Each entry gives a category+niche URL (e.g.
// /templates/invoices/photographer) genuinely-unique copy — a bespoke subtitle,
// 3 profession-specific sections, and profession FAQs — so the page carries real
// information gain instead of being a keyword-swapped duplicate of the category
// listing (which Google penalises as a doorway page). Split into per-batch files
// only to keep them small; merged here into one lookup.
import { professionContentA } from "./profession-content-a";
import { professionContentB } from "./profession-content-b";
import { professionContentC } from "./profession-content-c";
import { professionContentD } from "./profession-content-d";
import { professionContentE } from "./profession-content-e";
import { professionContentF } from "./profession-content-f";

export interface ProfessionEntry {
  profession: string;                               // plural display noun
  category: string;                                 // owning category slug
  metaTitle: string;                                // <title> (<=47 chars)
  subtitle: string;                                 // replaces the generic listing subtitle
  sections: { heading: string; body: string }[];    // unique long-form copy
  faqs: { question: string; answer: string }[];      // profession-specific Q&A
}

const PROFESSION_CONTENT: Record<string, ProfessionEntry> = {
  ...professionContentA,
  ...professionContentB,
  ...professionContentC,
  ...professionContentD,
  ...professionContentE,
  ...professionContentF,
};

/** All profession slugs (for the route allowlist + sitemap). */
export const PROFESSION_SLUGS = Object.keys(PROFESSION_CONTENT);

/**
 * Content for a `/templates/{category}/{niche}` page — only when the niche is a
 * known profession AND it belongs to that category, so a profession never leaks
 * onto the wrong category's URL.
 */
export function getProfessionContent(
  categorySlug: string | null | undefined,
  nicheSlug: string | null | undefined,
): ProfessionEntry | undefined {
  if (!categorySlug || !nicheSlug) return undefined;
  const entry = PROFESSION_CONTENT[nicheSlug];
  return entry && entry.category === categorySlug ? entry : undefined;
}

/**
 * Retrieve all profession & role landing page entries belonging to a given category.
 * Used for programmatic hub interlinking on /category/[slug] and /templates/[category].
 */
export function getProfessionsByCategory(
  categorySlug: string | null | undefined
): { slug: string; entry: ProfessionEntry }[] {
  if (!categorySlug) return [];
  // Normalize plural/singular mappings if needed
  const normalized = categorySlug.endsWith("s") ? categorySlug : `${categorySlug}s`;
  return Object.entries(PROFESSION_CONTENT)
    .filter(([_, e]) => e.category === categorySlug || e.category === normalized)
    .map(([slug, entry]) => ({ slug, entry }));
}

/** [category, niche] pairs for every profession page — used to build the sitemap. */
export function professionRoutes(): { category: string; niche: string }[] {
  return Object.entries(PROFESSION_CONTENT).map(([niche, e]) => ({ category: e.category, niche }));
}
