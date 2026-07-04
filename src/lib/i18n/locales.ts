// Locale primitives kept in their own module so namespace dictionaries can
// import the `Locale` type without creating a cycle through ./index.

export const LOCALES = ["en", "es", "de", "fr", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

/** A dictionary namespace: the same shape `T` provided for every locale. */
export type Dict<T> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Normalize any string to a supported Locale (English fallback). */
export function toLocale(value: string | undefined | null): Locale {
  return value && isLocale(value) ? value : "en";
}

/** BCP-47 tag for `Intl` APIs (e.g. Date/Number formatting) per locale. */
export const INTL_LOCALE: Dict<string> = {
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
  ar: "ar",
};
