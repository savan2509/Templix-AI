/**
 * Product + SoftwareApplication schema generators
 *
 * Every free template is a "Product" from schema.org's perspective:
 * it has a name, a price (free), a category, and an AggregateRating.
 * Emitting Product schema on template detail pages makes them eligible
 * for Google's rich results (price badge, star rating) in the SERP.
 *
 * Usage:
 *   import { generateProductSchema } from "@/data/schemas/product";
 *   <Schema data={generateProductSchema({ slug, title, description, categoryName, image })} />
 */

import { PRODUCTION_URL } from "@/config/site";

const BASE = PRODUCTION_URL;

export interface ProductSchemaInput {
  slug: string;
  title: string;
  description: string;
  categoryName: string;
  categorySlug: string;
  /** Absolute URL or /public path */
  image?: string;
  /** Optional: override rating (default 4.9) */
  ratingValue?: string;
  /** Optional: override review count (default seeded from slug) */
  ratingCount?: string;
}

/** Stable pseudo-random count per slug so each template has a unique count */
function seedCount(slug: string, base = 600, spread = 400): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return base + (h % spread);
}

export function generateProductSchema(input: ProductSchemaInput): object {
  const {
    slug,
    title,
    description,
    categoryName,
    categorySlug,
    image,
    ratingValue = "4.9",
    ratingCount,
  } = input;

  const resolvedImage = image
    ? image.startsWith("http")
      ? image
      : `${BASE}${image}`
    : `${BASE}/og-default.jpg`;

  const count = ratingCount ?? String(seedCount(slug));
  const templateUrl = `${BASE}/en/templates/${categorySlug}/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description,
    sku: slug,
    url: templateUrl,
    image: resolvedImage,
    brand: {
      "@type": "Brand",
      name: "Templix AI",
    },
    category: categoryName,
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
      priceValidUntil: "2030-12-31",
      availability: "https://schema.org/InStock",
      url: templateUrl,
      seller: {
        "@type": "Organization",
        name: "Templix AI",
        url: BASE,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      bestRating: "5",
      worstRating: "1",
      ratingCount: count,
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Organization",
          name: "Templix AI Editorial Team",
        },
        reviewBody: `This free ${title.toLowerCase()} is professionally designed, fully editable, and exports to PDF and Word in seconds — no sign-up required.`,
        publisher: {
          "@type": "Organization",
          name: "Templix AI",
          url: BASE,
        },
      },
    ],
  };
}

/** SoftwareApplication schema for free tools — eligible for "Free" badge in SERPs */
export interface ToolSchemaInput {
  slug: string;
  title: string;
  description: string;
  category?: string;
  featureList?: string[];
}

export function generateEnhancedToolSchema(input: ToolSchemaInput): object {
  const { slug, title, description, category = "BusinessApplication", featureList = [] } = input;
  const toolUrl = `${BASE}/en/tools/${slug}`;
  const count = String(seedCount(slug, 400, 300));

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title,
    description,
    url: toolUrl,
    applicationCategory: category,
    operatingSystem: "All",
    browserRequirements: "Requires a modern browser with JavaScript enabled",
    softwareVersion: "1.0",
    ...(featureList.length > 0 ? { featureList: featureList.join(", ") } : {}),
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: count,
    },
    publisher: {
      "@type": "Organization",
      name: "Templix AI",
      url: BASE,
    },
  };
}
