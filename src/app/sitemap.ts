import { MetadataRoute } from "next";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { CATEGORIES } from "@/constants";
import { TOOLS } from "@/data/tools";

import { siteConfig } from "@/config/site";

const LOCALES = ["en", "es", "de", "fr", "ar"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  // Anchor lastmod to a stable content date, not build time — a fresh `new Date()`
  // on every deploy would falsely signal that every page changed and erode crawl
  // trust. Pages with a real per-item date (blog posts) override this below.
  const contentDate = new Date(siteConfig.contentUpdated);

  // One entry per canonical page. `url` is the English (x-default) variant and
  // `alternates.languages` links every locale so search engines understand the
  // multilingual structure (emits <xhtml:link rel="alternate" hreflang="…">).
  const entry = (
    path: string,
    opts: {
      lastModified?: Date;
      changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
      priority?: number;
      // English-only content (blog posts, tools, template details): emit just the
      // /en URL with no hreflang, matching the page's consolidated canonical.
      // Listing localized alternates here would re-introduce the duplicate signal.
      enOnly?: boolean;
    } = {}
  ): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}/en${path}`,
    lastModified: opts.lastModified ?? contentDate,
    changeFrequency: opts.changeFrequency ?? "weekly",
    priority: opts.priority ?? 0.6,
    ...(opts.enOnly
      ? {}
      : {
          alternates: {
            languages: Object.fromEntries([
              ...LOCALES.map((l) => [l, `${baseUrl}/${l}${path}`]),
              // x-default points at the English variant so search engines have a
              // fallback for unmatched locales (recommended by Google's hreflang spec).
              ["x-default", `${baseUrl}/en${path}`],
            ]),
          },
        }),
  });

  const entries: MetadataRoute.Sitemap = [];

  // Top-level routes
  entries.push(entry("", { changeFrequency: "daily", priority: 1.0 }));
  entries.push(entry("/templates", { changeFrequency: "daily", priority: 0.9 }));
  entries.push(entry("/blog", { changeFrequency: "daily", priority: 0.8 }));

  // Free tools hub + each tool
  entries.push(entry("/tools", { changeFrequency: "weekly", priority: 0.7 }));
  for (const tool of TOOLS) {
    entries.push(entry(`/tools/${tool.slug}`, { changeFrequency: "monthly", priority: 0.6, enOnly: true }));
  }

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

  // Template detail pages (canonical /{category}/{slug} shape) — English-only
  // content, so consolidated onto the /en URL (no per-locale alternates).
  for (const t of allFallbackTemplates) {
    entries.push(
      entry(`/templates/${t.categorySlug}/${t.slug}`, {
        changeFrequency: "weekly",
        priority: 0.6,
        enOnly: true,
      })
    );
  }

  // Blog articles — English-only content, consolidated onto the /en URL.
  for (const post of STATIC_BLOG_POSTS) {
    entries.push(
      entry(`/blog/${post.slug}`, {
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        enOnly: true,
      })
    );
  }

  return entries;
}
