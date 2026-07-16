// Localized content layer. The English strings live in the data files
// (src/data/*, src/constants); these per-locale maps override the visible
// title/description for translated locales. A missing entry falls back to
// English, and pages without a translation consolidate on /en (see seo.ts),
// so partial coverage never creates duplicate-content across locales.
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { ar } from "./ar";

const CONTENT: Record<string, any> = { es, fr, de, ar };

// The locales that have a translated content layer beyond English.
export const CONTENT_LOCALES = ["es", "fr", "de", "ar"] as const;

// hreflang cluster for surfaces translated in EVERY content locale (tools +
// categories). English plus the four translated locales.
export const FULLY_TRANSLATED_LOCALES = ["en", "es", "fr", "de", "ar"];

/** Localized tool fields ({} for English or a missing entry). */
export function localizedToolFields(
  slug: string,
  locale: string,
): { title?: string; short?: string; description?: string } {
  return CONTENT[locale]?.tools?.[slug] ?? {};
}

/** Localized category fields ({} for English or a missing entry). */
export function localizedCategoryFields(
  slug: string,
  locale: string,
): { name?: string; description?: string } {
  return CONTENT[locale]?.categories?.[slug] ?? {};
}

/** A tool with its title/short/description localized (English fallback). */
export function getLocalizedTool<
  T extends { slug: string; title: string; short: string; description: string },
>(tool: T, locale: string): T {
  const loc = localizedToolFields(tool.slug, locale);
  return {
    ...tool,
    title: loc.title ?? tool.title,
    short: loc.short ?? tool.short,
    description: loc.description ?? tool.description,
  };
}
