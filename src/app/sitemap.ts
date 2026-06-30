import { MetadataRoute } from "next";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { allFallbackTemplates } from "@/data/templates-fallback";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://templix.ai";
  const locales = ["en", "es", "de", "fr", "ar"];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Base paths per locale
  const routes = ["", "/templates", "/blog"];
  for (const route of routes) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  // Category pages
  const categories = ["invoices", "resumes", "contracts", "proposals", "letters"];
  for (const cat of categories) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/templates/${cat}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  // Seeded template detail pages - dynamically generated
  for (const t of allFallbackTemplates) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/templates/${t.categorySlug}/${t.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  // Blog posts — all static articles
  for (const post of STATIC_BLOG_POSTS) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
