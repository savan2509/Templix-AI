// Single source of truth for the public domain, feeding canonical, Open Graph,
// sitemap, RSS and share URLs everywhere.
//
// The legacy NEXT_PUBLIC_APP_URL is deliberately not consulted. On top of that
// we reject any deployment-platform hostname: a canonical pointing at
// *.vercel.app tells Google the real page lives there, which de-indexes the
// custom domain. Preview deploys and a mis-set env var can no longer poison it.
export const PRODUCTION_URL = "https://templix-ai.whitesparksoft.com";

const PLATFORM_HOSTS = [".vercel.app", ".netlify.app", ".onrender.com", "localhost"];

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return PRODUCTION_URL;

  let host: string;
  try {
    host = new URL(raw).hostname.toLowerCase();
  } catch {
    return PRODUCTION_URL; // not a valid absolute URL
  }

  if (PLATFORM_HOSTS.some((h) => host === h.replace(/^\./, "") || host.endsWith(h))) {
    return PRODUCTION_URL;
  }
  return raw.replace(/\/+$/, ""); // no trailing slash — we always append paths
}

const APP_URL = resolveSiteUrl();

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
  // Content freshness stamp shown on template pages ("Updated …") and emitted as
  // schema.org dateModified. Bump when the template library is refreshed — keeps
  // it deterministic across builds instead of a per-request new Date().
  contentUpdated: "2026-07-01",
};

export type SiteConfig = typeof siteConfig;
