// Single source of truth for the public domain, feeding canonical, Open Graph,
// sitemap, RSS and share URLs everywhere.
//
// The legacy NEXT_PUBLIC_APP_URL is deliberately not consulted. On top of that
// we reject any deployment-platform hostname: a canonical pointing at
// *.vercel.app tells Google the real page lives there, which de-indexes the
// custom domain. Preview deploys and a mis-set env var can no longer poison it.
export const PRODUCTION_URL = "https://templix-ai.whitesparksoft.com";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return PRODUCTION_URL;

  let host: string;
  let prodHost: string;
  try {
    host = new URL(raw).hostname.toLowerCase();
    prodHost = new URL(PRODUCTION_URL).hostname.toLowerCase();
  } catch {
    return PRODUCTION_URL; // not a valid absolute URL
  }

  // Only ever trust the EXACT production host. Anything else — a platform alias
  // (*.vercel.app), a look-alike brand domain (templix.ai), localhost, or a
  // stale/mis-set env var — falls back to PRODUCTION_URL, so canonical, OG,
  // sitemap and share URLs can never point off-domain and de-index the site.
  // To move domains, change PRODUCTION_URL above (one source of truth).
  return host === prodHost ? raw.replace(/\/+$/, "") : PRODUCTION_URL;
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
  contentUpdated: "2026-07-12",
};

export type SiteConfig = typeof siteConfig;
