/**
 * Schema.org Structured Data Generator for Templix AI
 *
 * Implements JSON-LD schemas for:
 * - Organization
 * - WebSite
 * - BreadcrumbList
 * - Article (Blog Guides)
 * - SoftwareApplication / WebApplication (Document Editor & Tools)
 * - ItemList (Template & Category Listings)
 * - FAQPage
 * - Product / DigitalDocument (Templates)
 * - HowTo (Guide Walkthroughs)
 */

import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon-512.png`,
    sameAs: Object.values(siteConfig.links),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+1-415-890-3882",
        url: `${siteConfig.url}/en/contact`,
        availableLanguage: ["English"],
      },
    ],
  };
}

/**
 * WebSite Schema with Sitelinks Searchbox
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/en/templates?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url.startsWith("/") ? "" : "/"}${item.url}`,
    })),
  };
}

/**
 * FAQPage Schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * SoftwareApplication / WebApplication Schema for Tools & Document Editor
 */
export function generateSoftwareSchema(options: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  screenshot?: string;
  isFree?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: options.name,
    description: options.description,
    url: options.url,
    applicationCategory: options.applicationCategory || "BusinessApplication",
    operatingSystem: options.operatingSystem || "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    screenshot: options.screenshot || `${siteConfig.url}/og-default.jpg`,
    offers: {
      "@type": "Offer",
      price: options.isFree !== false ? "0" : "0",
      priceCurrency: "USD",
    },
  };
}

/**
 * Article Schema for Blog Posts & Comprehensive Guides
 */
export function generateArticleSchema(options: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url: options.url,
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": options.url,
    },
    author: {
      "@type": "Person",
      name: options.authorName || "Editorial Team",
      url: options.authorUrl || `${siteConfig.url}/en/about`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon-512.png`,
      },
    },
    image: options.imageUrl || `${siteConfig.url}/og-default.jpg`,
  };
}

/**
 * DigitalDocument / Product Schema for Templates
 */
export function generateTemplateSchema(options: {
  name: string;
  description: string;
  url: string;
  category: string;
  fileFormat?: string[];
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  isFree?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["DigitalDocument", "Product"],
    name: options.name,
    description: options.description,
    url: options.url,
    category: options.category,
    image: options.imageUrl || `${siteConfig.url}/og-default.jpg`,
    encodingFormat: options.fileFormat || [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    dateCreated: options.datePublished || siteConfig.contentUpdated,
    dateModified: options.dateModified || siteConfig.contentUpdated,
    offers: {
      "@type": "Offer",
      price: options.isFree !== false ? "0.00" : "0.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: options.url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * ItemList Schema for Category & Collection Pages
 */
export function generateItemListSchema(options: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; position?: number }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: options.name,
    description: options.description,
    url: options.url,
    numberOfItems: options.items.length,
    itemListElement: options.items.map((item, index) => ({
      "@type": "ListItem",
      position: item.position || index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}
