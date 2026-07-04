const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://templix-ai.vercel.app";

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
