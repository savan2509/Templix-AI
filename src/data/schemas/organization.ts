/**
 * Organization, Person, LocalBusiness & WebSite JSON-LD schemas
 *
 * Emitted on every page via the root layout. They provide structured data for:
 *   • Identity Schema: Organization & Person (Founder)
 *   • Local / Online Business Schema (Contact, opening hours, geographic area)
 *   • SoftwareApplication Schema
 *   • WebSite + SearchAction Schema
 */

import { siteConfig, PRODUCTION_URL } from "@/config/site";

const BASE = PRODUCTION_URL;

export const globalSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
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
      },
      image: `${BASE}/og-default.jpg`,
      description:
        "Templix AI is a free online document creation platform providing professional templates for invoices, resumes, contracts, and proposals.",
      telephone: "+1-415-890-3882",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+1-415-890-3882",
        url: `${BASE}/en/contact`,
        availableLanguage: ["English"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "535 Mission Street, 14th Floor",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94105",
        addressCountry: "US",
      },
      sameAs: [
        siteConfig.links.twitter,
        siteConfig.links.linkedin,
        siteConfig.links.github,
      ].filter(Boolean),
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Templix AI",
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE}/en/templates?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE}/#app`,
      name: "Templix AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser, iOS, Android, macOS, Windows",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
    },
  ],
};
