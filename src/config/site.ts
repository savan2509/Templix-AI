export const siteConfig = {
  name: "Templix AI",
  description: "Free Professional Templates + AI Document Editor. Create invoices, resumes, contracts, proposals and business documents in minutes.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "https://templix.ai/og-default.jpg",
  links: {
    github: "https://github.com/your-username/templix-ai",
  },
  locales: ["en", "es", "de", "fr", "ar"],
  defaultLocale: "en",
  themeColor: "#2563eb",
};

export type SiteConfig = typeof siteConfig;
