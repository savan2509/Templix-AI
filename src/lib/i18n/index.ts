// Lightweight, dependency-free i18n dictionary layer.
//
// Why not a library: the app already owns its `[locale]` routing, RTL handling
// (HtmlDirSync), hreflang + localized metadata. The only missing piece was a
// translation layer for UI copy — this provides it as plain, synchronous,
// tree-shakeable TS modules that work in both Server and Client Components
// (no async, no context, no provider needed).
//
// Usage (server component):   const t = getDictionary(locale); … {t.home.heroTitle}
// Usage (client component):   const locale = usePathname().split("/")[1] || "en";
//                             const t = getDictionary(locale);
//
// Each namespace lives in ./dictionaries/<ns>.ts and exports an object keyed by
// locale. `getDictionary` resolves every namespace to the requested locale,
// falling back to English for unknown locales.

import { toLocale } from "./locales";
import { common } from "./dictionaries/common";
import { footer } from "./dictionaries/footer";
import { search } from "./dictionaries/search";
import { home } from "./dictionaries/home";
import { faqSection } from "./dictionaries/faqSection";
import { about } from "./dictionaries/about";
import { contact } from "./dictionaries/contact";
import { faqPage } from "./dictionaries/faqPage";
import { tools } from "./dictionaries/tools";
import { privacy } from "./dictionaries/privacy";
import { terms } from "./dictionaries/terms";
import { blog } from "./dictionaries/blog";
import { templates } from "./dictionaries/templates";

export { LOCALES, isLocale, toLocale, INTL_LOCALE } from "./locales";
export type { Locale } from "./locales";

/**
 * Resolve every UI-copy namespace to the given locale. Cheap synchronous object
 * lookups — safe to call in render on the server or the client.
 */
export function getDictionary(rawLocale: string | undefined | null) {
  const l = toLocale(rawLocale);
  return {
    common: common[l],
    footer: footer[l],
    search: search[l],
    home: home[l],
    faqSection: faqSection[l],
    about: about[l],
    contact: contact[l],
    faqPage: faqPage[l],
    tools: tools[l],
    privacy: privacy[l],
    terms: terms[l],
    blog: blog[l],
    templates: templates[l],
  };
}

export type Dictionary = ReturnType<typeof getDictionary>;
