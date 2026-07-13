// English is the only served locale — es/de/fr/ar were retired and 308-redirect
// to /en (see proxy.ts). The language switcher hides itself while this has a
// single entry; re-add locales here (and in proxy.ts) to bring it back.
export const SUPPORTED_LOCALES = [
  { code: "en", name: "English", dir: "ltr" },
] as const;

export const DEFAULT_LOCALE = "en" as const;

// `count` mirrors the real number of templates in each category
// (allFallbackTemplates, 203 total). The homepage/listing render counts LIVE by
// filtering that data, so this field is a documentation aid — keep it in sync
// when templates are added so it never contradicts what the site actually shows.
export const CATEGORIES = [
  {
    slug: "invoices",
    name: "Invoices",
    description: "Billing, receipts & payment requests",
    image: "/cat-invoices-cover.jpg",
    count: 33,
    accent: "blue",
  },
  {
    slug: "resumes",
    name: "Resumes & CVs",
    description: "Job applications & career profiles",
    image: "/cat-resumes-cover.jpg",
    count: 26,
    accent: "violet",
  },
  {
    slug: "contracts",
    name: "Contracts",
    description: "Agreements, NDAs & service terms",
    image: "/cat-contracts-cover.jpg",
    count: 24,
    accent: "teal",
  },
  {
    slug: "proposals",
    name: "Proposals",
    description: "Business pitches & project scopes",
    image: "/cat-proposals-cover.jpg",
    count: 24,
    accent: "orange",
  },
  {
    slug: "letters",
    name: "Letters & Emails",
    description: "Cover letters, formal emails & memos",
    image: "/cat-letters-cover.jpg",
    count: 29,
    accent: "emerald",
  },
  {
    slug: "reports",
    name: "Reports",
    description: "Business, project & annual reports",
    image: "/cat-reports-cover.jpg",
    count: 23,
    accent: "rose",
  },
  {
    slug: "business-plans",
    name: "Business Plans",
    description: "Startup plans, strategy & financials",
    image: "/cat-business-plans-cover.jpg",
    count: 22,
    accent: "amber",
  },
  {
    slug: "quotations",
    name: "Quotations",
    description: "Price quotes, estimates & bids",
    image: "/cat-quotations-cover.jpg",
    count: 22,
    accent: "cyan",
  },
] as const;


export const EXPORT_FORMATS = {
  PDF: "pdf",
  DOCX: "docx",
  TXT: "txt",
} as const;
