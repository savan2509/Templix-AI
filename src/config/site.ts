// Single source of truth for the public domain. Only NEXT_PUBLIC_SITE_URL may
// override it — the legacy NEXT_PUBLIC_APP_URL is intentionally NOT consulted so
// a stale vercel.app value can never poison canonical/OG/sitemap/share URLs.
const APP_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://templix-ai.whitesparksoft.com";

export const siteConfig = {
  name: "Templix AI",
  description: "Free Professional Templates + AI Document Editor. Create invoices, resumes, contracts, proposals and business documents in minutes.",
  url: APP_URL,
  // Absolute URL derived from the real deployment domain — must never hardcode a
  // domain the site isn't served from, or OG/canonical point at a dead host.
  ogImage: `${APP_URL}/og-default.jpg`,
  links: {
    github: "https://github.com/your-username/templix-ai",
  },
  locales: ["en", "es", "de", "fr", "ar"],
  defaultLocale: "en",
  themeColor: "#2563eb",
};

export type SiteConfig = typeof siteConfig;
