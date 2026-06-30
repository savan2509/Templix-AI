export const SUPPORTED_LOCALES = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "de", name: "Deutsch", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
] as const;

export const DEFAULT_LOCALE = "en" as const;

export const CATEGORIES = [
  {
    slug: "invoices",
    name: "Invoices",
    description: "Billing, receipts & payment requests",
    image: "/cat-invoices-cover.jpg",
    count: 48,
    accent: "blue",
  },
  {
    slug: "resumes",
    name: "Resumes & CVs",
    description: "Job applications & career profiles",
    image: "/cat-resumes-cover.jpg",
    count: 36,
    accent: "violet",
  },
  {
    slug: "contracts",
    name: "Contracts",
    description: "Agreements, NDAs & service terms",
    image: "/cat-contracts-cover.jpg",
    count: 29,
    accent: "teal",
  },
  {
    slug: "proposals",
    name: "Proposals",
    description: "Business pitches & project scopes",
    image: "/cat-proposals-cover.jpg",
    count: 22,
    accent: "orange",
  },
  {
    slug: "letters",
    name: "Letters & Emails",
    description: "Cover letters, formal emails & memos",
    image: "/cat-letters-cover.jpg",
    count: 31,
    accent: "emerald",
  },
] as const;


export const EXPORT_FORMATS = {
  PDF: "pdf",
  DOCX: "docx",
  TXT: "txt",
} as const;
