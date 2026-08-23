import { MetadataRoute } from "next";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { comparisonPosts } from "@/lib/blog/posts-comparisons";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { CATEGORIES } from "@/constants";
import { ALL_TOOLS } from "@/data/tools";
import { professionRoutes } from "@/features/templates/profession-content";
import { FAQ_TOPIC_SLUGS } from "@/data/faq-topics";
import { ALL_USE_CASE_SLUGS } from "@/lib/use-case-data";
import { ALL_MASTER_LANDING_SLUGS } from "@/lib/landing-page-data";
import { SERVICES_DATA } from "@/data/services";
import { CATEGORY_HUBS } from "@/data/categories";
import { PRODUCTS_DATA } from "@/data/products";
import { INDUSTRIES_DATA } from "@/data/industries";
import { siteConfig } from "@/config/site";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/**
 * Automated Modular Sitemap Architecture
 *
 * Implements Point 6 & Point 25:
 * Generates structured indexable URLs for templates, categories, tools,
 * use cases, industries, and blog guides with accurate lastmod and priority.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const contentDate = new Date(siteConfig.contentUpdated);

  const safeDate = (d: string | Date | undefined): Date => {
    if (!d) return contentDate;
    const parsed = new Date(d);
    return isNaN(parsed.getTime()) ? contentDate : parsed;
  };

  const entry = (
    path: string,
    opts: {
      lastModified?: Date;
      changeFrequency?: ChangeFrequency;
      priority?: number;
      images?: string[];
    } = {}
  ): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}/en${path}`,
    lastModified: opts.lastModified ?? contentDate,
    changeFrequency: opts.changeFrequency ?? "weekly",
    priority: opts.priority ?? 0.6,
    ...(opts.images && opts.images.length ? { images: opts.images } : {}),
  });

  // ── Static routes with hand-tuned crawl hints ───────────────────────────────
  const staticRoutes: Array<
    [string, Omit<NonNullable<Parameters<typeof entry>[1]>, "lastModified">]
  > = [
    ["", { changeFrequency: "daily", priority: 1.0, images: [`${baseUrl}/og-default.jpg`] }],
    ["/templates", { changeFrequency: "daily", priority: 0.9 }],
    ["/blog", { changeFrequency: "daily", priority: 0.8 }],
    ["/compare", { changeFrequency: "daily", priority: 0.8 }],
    ["/tools", { changeFrequency: "weekly", priority: 0.7 }],
    ["/services", { changeFrequency: "daily", priority: 0.8 }],
    ["/category", { changeFrequency: "daily", priority: 0.9 }],
    ["/products", { changeFrequency: "daily", priority: 0.9 }],
    ["/use-cases", { changeFrequency: "daily", priority: 0.8 }],
    ["/industries", { changeFrequency: "weekly", priority: 0.85 }],
    ["/about", { changeFrequency: "monthly", priority: 0.5 }],
    ["/contact", { changeFrequency: "monthly", priority: 0.5 }],
    ["/faq", { changeFrequency: "monthly", priority: 0.5 }],
    ["/privacy", { changeFrequency: "yearly", priority: 0.3 }],
    ["/terms", { changeFrequency: "yearly", priority: 0.3 }],
  ];

  // ── Deduplicated Template detail pages ──────────────────────────────────────
  const seenTemplates = new Set<string>();
  const templateEntries = allFallbackTemplates
    .filter((t) => {
      const key = `${t.categorySlug}/${t.slug}`;
      if (seenTemplates.has(key)) return false;
      seenTemplates.add(key);
      return true;
    })
    .map((t) =>
      entry(`/templates/${t.categorySlug}/${t.slug}`, {
        changeFrequency: "weekly",
        priority: 0.75,
        images: [`${baseUrl}/cat-${t.categorySlug}-cover.jpg`],
      })
    );

  const allEntries = [
    ...staticRoutes.map(([path, opts]) => entry(path, opts)),

    // Category listing pages
    ...CATEGORIES.map((cat) =>
      entry(`/templates/${cat.slug}`, {
        changeFrequency: "weekly",
        priority: 0.75,
        images: [`${baseUrl}${cat.image}`],
      })
    ),

    // Tools pages
    ...ALL_TOOLS.map((tool) =>
      entry(`/tools/${tool.slug}`, { changeFrequency: "monthly", priority: 0.65 })
    ),

    // Template detail pages
    ...templateEntries,

    // Industry pages
    ...INDUSTRIES_DATA.map((ind) =>
      entry(`/industries/${ind.slug}`, { changeFrequency: "weekly", priority: 0.8 })
    ),

    // Profession & Role Landing Pages (Programmatic Phase 2)
    ...professionRoutes().map(({ category, niche }) =>
      entry(`/templates/${category}/${niche}`, { changeFrequency: "weekly", priority: 0.8 })
    ),

    // Blog articles
    ...STATIC_BLOG_POSTS.map((post) =>
      entry(`/blog/${post.slug}`, {
        lastModified: safeDate(post.updatedAt ?? post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        images: post.image ? [`${baseUrl}${post.image}`] : undefined,
      })
    ),

    // Software Comparison pages
    ...comparisonPosts.map((post) =>
      entry(`/compare/${post.slug}`, {
        lastModified: safeDate(post.updatedAt ?? post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        images: post.image ? [`${baseUrl}${post.image}`] : undefined,
      })
    ),

    // Dedicated FAQ topic pages
    ...FAQ_TOPIC_SLUGS.map((slug) =>
      entry(`/faq/${slug}`, { changeFrequency: "monthly", priority: 0.6 })
    ),

    // Dedicated Use Case landing pages
    ...ALL_USE_CASE_SLUGS.map((slug) =>
      entry(`/use-cases/${slug}`, { changeFrequency: "weekly", priority: 0.8 })
    ),

    // Dedicated Master SEO Landing Pages
    ...ALL_MASTER_LANDING_SLUGS.map((slug) =>
      entry(`/${slug}`, { changeFrequency: "daily", priority: 0.9 })
    ),

    // Dedicated Automated Document & AI Service Landing Pages
    ...SERVICES_DATA.map((service) =>
      entry(`/services/${service.slug}`, { changeFrequency: "weekly", priority: 0.8 })
    ),

    // Dedicated Category Hub Pages
    ...CATEGORY_HUBS.map((cat) =>
      entry(`/category/${cat.slug}`, { changeFrequency: "weekly", priority: 0.9 })
    ),

    // Dedicated Product Pages
    ...PRODUCTS_DATA.map((prod) =>
      entry(`/products/${prod.slug}`, { changeFrequency: "weekly", priority: 0.9 })
    ),
  ];

  // Guaranteed global URL deduplication
  const seenUrls = new Set<string>();
  return allEntries.filter((item) => {
    if (seenUrls.has(item.url)) return false;
    seenUrls.add(item.url);
    return true;
  });
}
