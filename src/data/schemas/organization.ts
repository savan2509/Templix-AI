/**
 * Organization + WebSite JSON-LD schemas
 *
 * These are emitted on every page via the root layout. They tell Google:
 *   • Who runs the site (Organization)
 *   • What the site is (WebSite + SearchAction for sitelinks search box)
 *   • How to reach the organization (ContactPoint, address, email)
 *   • Which social profiles are authoritative (SameAs)
 *
 * Keep this file as the single source of truth — do NOT duplicate these
 * properties inline in individual pages.
 */

import { siteConfig, PRODUCTION_URL } from "@/config/site";

const BASE = PRODUCTION_URL;

// ── Organization ─────────────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "SoftwareApplication"],
  "@id": `${BASE}/#organization`,
  name: "Templix AI",
  alternateName: "Templix",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    "@id": `${BASE}/#logo`,
    url: `${BASE}/icon-512.png`,
    width: 512,
    height: 512,
    contentUrl: `${BASE}/icon-512.png`,
    caption: "Templix AI logo",
  },
  image: `${BASE}/og-default.jpg`,
  description:
    "Templix AI is a free online document creation platform that uses AI to help users quickly generate and customize professional invoices, resumes, contracts, proposals, and other business documents for export to PDF or Word.",
  telephone: "+1-800-555-0199",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1200 Business Way, Suite 100",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-800-555-0199",
      contactType: "customer support",
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.facebook,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
    siteConfig.links.youtube,
  ].filter(Boolean),
  // SoftwareApplication facet (Templix AI is itself a web app)
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  browserRequirements: "Requires a modern browser with JavaScript enabled",
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: "USD",
    priceValidUntil: "2030-12-31",
    description: "Free professional document templates — no sign-up required",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1247",
    reviewCount: "820",
  },
};

// ── WebSite ───────────────────────────────────────────────────────────────────
// The SearchAction enables Google's Sitelinks Search Box in SERPs — users can
// search templates directly from the search result page before visiting.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Templix AI",
  description:
    "Free professional document templates — invoices, resumes, contracts, proposals and more. AI-powered editor, PDF & Word export, no sign-up.",
  publisher: {
    "@id": `${BASE}/#organization`,
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/en/templates?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ── Convenience export (array for <Schema data={globalSchemas}>) ──────────────
export const globalSchemas = [organizationSchema, websiteSchema];
