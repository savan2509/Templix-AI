/**
 * Image SEO & Open Graph Metadata Utility
 *
 * Enforces structured alt texts, dimensions, and dynamic OG share image fallbacks.
 */

import { siteConfig } from "@/config/site";

export interface ImageSeoOptions {
  title: string;
  category?: string;
  format?: string;
  type?: "template" | "tool" | "blog" | "category" | "industry" | "feature";
}

/**
 * Generates rich, search-engine-friendly image alt text.
 * E.g. "Free Freelancer Invoice Template in PDF and Word - Templix AI"
 */
export function generateImageAlt(options: ImageSeoOptions): string {
  const { title, category, format = "PDF and Word", type = "template" } = options;

  if (type === "template") {
    if (category) {
      return `Free ${title} - Editable ${category} Template in ${format} - ${siteConfig.name}`;
    }
    return `Free ${title} - Editable Document Template in ${format} - ${siteConfig.name}`;
  }

  if (type === "tool") {
    return `${title} - Free Online Tool by ${siteConfig.name}`;
  }

  if (type === "category") {
    return `Professional ${title} Document Collection - ${siteConfig.name}`;
  }

  if (type === "industry") {
    return `${title} Documentation Templates and Forms - ${siteConfig.name}`;
  }

  if (type === "blog") {
    return `${title} Guide Cover - ${siteConfig.name}`;
  }

  return `${title} - ${siteConfig.name}`;
}

/**
 * Builds standard Open Graph & Twitter image objects for Next.js metadata.
 */
export function buildOgImages(imageUrl?: string, altText?: string) {
  const url = imageUrl
    ? imageUrl.startsWith("http")
      ? imageUrl
      : `${siteConfig.url}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`
    : `${siteConfig.url}/og-default.jpg`;

  return [
    {
      url,
      width: 1200,
      height: 630,
      alt: altText || `${siteConfig.name} - Free Templates & AI Document Editor`,
      type: "image/jpeg",
    },
  ];
}
