import { MetadataRoute } from "next";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { CATEGORIES } from "@/constants";

const LOCALES = ["en", "es", "de", "fr", "ar"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://templix.ai";

  // One entry per canonical page. `url` is the English (x-default) variant and
  // `alternates.languages` links every locale so search engines understand the
  // multilingual structure (emits <xhtml:link rel="alternate" hreflang="…">).
  const entry = (
    path: string,
    opts: {
      lastModified?: Date;
      changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
      priority?: number;
    } = {}
  ): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}/en${path}`,
    lastModified: opts.lastModified ?? new Date(),
    changeFrequency: opts.changeFrequency ?? "weekly",
    priority: opts.priority ?? 0.6,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `${baseUrl}/${l}${path}`])
      ),
    },
  });

  const entries: MetadataRoute.Sitemap = [];

  // Top-level routes
  entries.push(entry("", { changeFrequency: "daily", priority: 1.0 }));
  entries.push(entry("/templates", { changeFrequency: "daily", priority: 0.9 }));
  entries.push(entry("/blog", { changeFrequency: "daily", priority: 0.8 }));

  // Static info / legal pages
  entries.push(entry("/about", { changeFrequency: "monthly", priority: 0.5 }));
  entries.push(entry("/contact", { changeFrequency: "monthly", priority: 0.5 }));
  entries.push(entry("/faq", { changeFrequency: "monthly", priority: 0.5 }));
  entries.push(entry("/privacy", { changeFrequency: "yearly", priority: 0.3 }));
  entries.push(entry("/terms", { changeFrequency: "yearly", priority: 0.3 }));

  // Category listing pages
  for (const cat of CATEGORIES) {
    entries.push(entry(`/templates/${cat.slug}`, { changeFrequency: "weekly", priority: 0.7 }));
  }

  // Template detail pages (canonical /{category}/{slug} shape)
  for (const t of allFallbackTemplates) {
    entries.push(
      entry(`/templates/${t.categorySlug}/${t.slug}`, {
        changeFrequency: "weekly",
        priority: 0.6,
      })
    );
  }

  // Blog articles
  for (const post of STATIC_BLOG_POSTS) {
    entries.push(
      entry(`/blog/${post.slug}`, {
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    );
  }

  return entries;
}
