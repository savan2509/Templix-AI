import { MetadataRoute } from "next";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { CATEGORIES } from "@/constants";
import { ALL_TOOLS } from "@/data/tools";

import { siteConfig } from "@/config/site";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  // Anchor lastmod to a stable content date, not build time — a fresh `new Date()`
  // on every deploy would falsely signal that every page changed and erode crawl
  // trust. Pages with a real per-item date (blog posts) override this below.
  const contentDate = new Date(siteConfig.contentUpdated);

  // Parse a date defensively: a malformed string yields `Invalid Date`, which
  // Next.js would silently emit as a broken <lastmod>. Fall back to the stable
  // content date instead so every entry always carries a valid timestamp.
  const safeDate = (d: string | Date): Date => {
    const parsed = new Date(d);
    return isNaN(parsed.getTime()) ? contentDate : parsed;
  };

  // One entry per canonical page. Only English (/en) is served now — the other
  // locales were retired and 308-redirect to /en (see proxy.ts) — so there are
  // no hreflang alternates to emit; a single-locale site doesn't need them.
  const entry = (
    path: string,
    opts: {
      lastModified?: Date;
      changeFrequency?: ChangeFrequency;
      priority?: number;
      images?: string[];
      // Locales this URL is translated for (excluding en). Emits hreflang
      // alternates so Google clusters the language versions together.
      hreflang?: readonly string[];
    } = {}
  ): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}/en${path}`,
    lastModified: opts.lastModified ?? contentDate,
    changeFrequency: opts.changeFrequency ?? "weekly",
    priority: opts.priority ?? 0.6,
    // Image sitemap extension — helps the page's cover/OG image surface in
    // Google Images and rich results. Absolute URLs only.
    ...(opts.images && opts.images.length ? { images: opts.images } : {}),
    // hreflang cluster — x-default is the /en URL; each translated locale gets
    // its own alternate so all language versions are discovered together.
    ...(opts.hreflang && opts.hreflang.length
      ? {
          alternates: {
            languages: {
              en: `${baseUrl}/en${path}`,
              ...Object.fromEntries(opts.hreflang.map((l) => [l, `${baseUrl}/${l}${path}`])),
            },
          },
        }
      : {}),
  });

  // Tools + categories are translated in every locale (see src/lib/i18n/content).
  const TRANSLATED_LOCALES = ["es", "fr", "de", "ar"] as const;

  // Only indexable, canonical routes belong here — auth, login, dashboard,
  // editor, admin, confirm/reset and other app surfaces are intentionally
  // excluded so Google's index stays limited to real content pages.

  // ── Static routes with hand-tuned crawl hints ───────────────────────────────
  const staticRoutes: Array<
    [string, Omit<NonNullable<Parameters<typeof entry>[1]>, "lastModified">]
  > = [
    ["", { changeFrequency: "daily", priority: 1.0, images: [`${baseUrl}/og-default.jpg`] }],
    ["/templates", { changeFrequency: "daily", priority: 0.9 }],
    ["/blog", { changeFrequency: "daily", priority: 0.8 }],
    ["/tools", { changeFrequency: "weekly", priority: 0.7 }],
    ["/about", { changeFrequency: "monthly", priority: 0.5 }],
    ["/contact", { changeFrequency: "monthly", priority: 0.5 }],
    ["/faq", { changeFrequency: "monthly", priority: 0.5 }],
    ["/privacy", { changeFrequency: "yearly", priority: 0.3 }],
    ["/terms", { changeFrequency: "yearly", priority: 0.3 }],
  ];

  // Template detail pages are the primary SEO landing pages, so they get a
  // higher priority than tool pages. Dedupe on category+slug defensively — a
  // duplicate pair in the source data would otherwise emit duplicate <url>s.
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
        priority: 0.7,
        images: [`${baseUrl}/cat-${t.categorySlug}-cover.jpg`],
      })
    );
    

  // ── Data-driven routes ──────────────────────────────────────────────────────
  // Derived straight from the content sources, so new categories, tools,
  // templates and posts appear in the sitemap automatically with no edits here.
  return [
    ...staticRoutes.map(([path, opts]) => entry(path, opts)),

    // Category listing pages. (Category page titles aren't localized yet — a
    // later batch — so they consolidate on /en for now; no hreflang.)
    ...CATEGORIES.map((cat) =>
      entry(`/templates/${cat.slug}`, {
        changeFrequency: "weekly",
        priority: 0.7,
        images: [`${baseUrl}${cat.image}`],
      })
    ),

    // One entry per free tool (the /tools hub is a static route above) — tools
    // are fully translated, so emit hreflang alternates.
    ...ALL_TOOLS.map((tool) =>
      entry(`/tools/${tool.slug}`, {
        changeFrequency: "monthly",
        priority: 0.6,
        hreflang: TRANSLATED_LOCALES,
      })
    ),

    // Template detail pages (canonical /{category}/{slug} shape)
    ...templateEntries,

    // Blog articles — <lastmod> reflects the last edit: prefer `updatedAt`, fall
    // back to the publish date, and guard against a malformed value.
    ...STATIC_BLOG_POSTS.map((post) =>
      entry(`/blog/${post.slug}`, {
        lastModified: safeDate(post.updatedAt ?? post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        images: post.image ? [`${baseUrl}${post.image}`] : undefined,
      })
    ),
  ];
}
