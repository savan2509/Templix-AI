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

// ── 1. Organization Schema ───────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
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
    contentUrl: `${BASE}/icon-512.png`,
    caption: "Templix AI logo",
  },
  image: `${BASE}/og-default.jpg`,
  description:
    "Templix AI is a free online document creation platform that uses AI to help users quickly generate and customize professional invoices, resumes, contracts, proposals, and business documents.",
  telephone: "+1-415-890-3882",
  email: "support@templix-ai.whitesparksoft.com",
  founder: {
    "@type": "Person",
    "@id": `${BASE}/#founder`,
    name: "Savan Vachhani",
    jobTitle: "Founder & Lead Architect",
    url: `${BASE}/about`,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ].filter(Boolean),
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "535 Mission Street, 14th Floor",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-415-890-3882",
      contactType: "customer support",
      email: "support@templix-ai.whitesparksoft.com",
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
};

// ── 2. Person (Founder / Author) Schema ──────────────────────────────────────
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE}/#founder`,
  name: "Savan Vachhani",
  jobTitle: "Founder & Principal Developer",
  worksFor: {
    "@id": `${BASE}/#organization`,
  },
  url: `${BASE}/about`,
  image: `${BASE}/icon-512.png`,
  description: "Founder and software architect behind Templix AI, building accessible AI productivity tools.",
  sameAs: [
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
  ].filter(Boolean),
};

// ── 3. LocalBusiness / OnlineBusiness Schema ─────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE}/#business`,
  name: "Templix AI Document Solutions",
  url: BASE,
  logo: `${BASE}/icon-512.png`,
  image: `${BASE}/og-default.jpg`,
  description: "Free automated document creation, ATS resume formatting, and professional invoice generator service.",
  telephone: "+1-415-890-3882",
  priceRange: "$0",
  currenciesAccepted: "USD",
  paymentAccepted: "Free",
  hasMap: siteConfig.links.googleMaps,
  sameAs: [
    siteConfig.links.googleBusiness,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
  ].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    streetAddress: "535 Mission Street, 14th Floor",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    }
  ],
  parentOrganization: {
    "@id": `${BASE}/#organization`,
  },
};

// ── 4. SoftwareApplication Schema ────────────────────────────────────────────
export const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE}/#app`,
  name: "Templix AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser, iOS, Android, macOS, Windows",
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: "USD",
    priceValidUntil: "2030-12-31",
    description: "Free professional document templates & AI editor — no sign-up required",
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

// ── 5. WebSite Schema (WebMCP Tools & SearchAction) ─────────────────────────
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
  potentialAction: [
    {
      "@type": "SearchAction",
      name: "Search Document Templates",
      description: "Search 200+ free document templates, invoices, resumes, contracts, and proposals by keyword.",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/en/templates?q={search_term_string}`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "query-input": "required name=search_term_string",
    },
    {
      "@type": "SubscribeAction",
      name: "Subscribe to Templix AI Newsletter",
      description: "Subscribe to weekly updates for free document templates and AI editor features.",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/api/newsletter`,
        httpMethod: "POST",
        encodingType: "application/json"
      }
    },
    {
      "@type": "CreateAction",
      name: "Create Professional Document",
      description: "Create and customize ATS resumes, invoices, proposals, and agreements.",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/en/templates`
      }
    }
  ],
};

// ── Convenience export (array for <Schema data={globalSchemas}>) ──────────────
export const globalSchemas = [
  organizationSchema,
  personSchema,
  localBusinessSchema,
  softwareAppSchema,
  websiteSchema,
];
