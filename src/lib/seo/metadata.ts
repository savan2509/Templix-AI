/**
 * Global Dynamic SEO Metadata Generator for Next.js 16 Pages
 *
 * Implements Point 1 of SEO Foundation:
 * Generates: title, description, keywords, canonical URL, Open Graph, Twitter metadata,
 * robots directives, and alternates/hreflang dynamically per route.
 */

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getCanonicalUrl } from "./canonical";
import { generatePageKeywords } from "./keywords";
import { buildOgImages } from "./image-seo";

export interface PageSeoProps {
  title: string;
  description: string;
  path: string;
  locale?: string;
  category?: string;
  tags?: string[];
  type?: "template" | "tool" | "use-case" | "industry" | "blog" | "category" | "page";
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  searchParams?: Record<string, string | string[] | undefined>;
}

/**
 * Universal dynamic metadata generator function
 */
export function generateSeoMetadata(props: PageSeoProps): Metadata {
  const {
    title,
    description,
    path,
    locale = "en",
    category,
    tags = [],
    type = "page",
    image,
    imageAlt,
    keywords: customKeywords,
    canonicalUrl: customCanonical,
    publishedTime,
    modifiedTime,
    noIndex = false,
    noFollow = false,
    searchParams,
  } = props;

  // Determine canonical URL
  const canonical = customCanonical || getCanonicalUrl(path, searchParams, locale);
  const enCanonical = getCanonicalUrl(path, undefined, "en");

  // Determine keywords
  const keywords =
    customKeywords && customKeywords.length > 0
      ? customKeywords
      : generatePageKeywords({ title, category, tags, type });

  // Open Graph & Twitter Image setup
  const ogImages = buildOgImages(image, imageAlt || title);

  // Check if search parameters should trigger noindex
  const hasFilterParams = searchParams && (searchParams.search || searchParams.q || searchParams.filter);
  const shouldBlockIndexing = noIndex || !!hasFilterParams;

  // Formatted Document Title (Note: root layout has `%s | Templix AI` template)
  const metaTitle = title.includes("Templix AI") ? title : title;
  const brandedTitle = title.includes("Templix AI") ? title : `${title} | ${siteConfig.name}`;

  return {
    title: metaTitle,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        en: enCanonical,
        "x-default": enCanonical,
      },
    },
    robots: {
      index: !shouldBlockIndexing,
      follow: !noFollow,
      googleBot: {
        index: !shouldBlockIndexing,
        follow: !noFollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: type === "blog" ? "article" : "website",
      locale: "en_US",
      url: canonical,
      siteName: siteConfig.name,
      title: brandedTitle,
      description,
      images: ogImages,
      ...(type === "blog" && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
            authors: [`${siteConfig.url}/en/about`],
            section: category || "Business",
            tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      site: siteConfig.twitterSite,
      creator: siteConfig.twitterHandle,
      images: [ogImages[0].url],
    },
  };
}
