import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { db, isDbOnline } from "@/lib/db";
import { STATIC_BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from "@/lib/blog-data";
import { SEOEngine } from "@/services/seo";
import { readingTime } from "@/lib/blog-seo";
import { siteConfig } from "@/config/site";
import { getDictionary, INTL_LOCALE } from "@/lib/i18n";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  TrendingUp,
  Sparkles,
  Tag,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Free Document Templates Blog — Guides, Tips & Resources",
    description:
      "Explore expert guides on invoices, resumes, contracts, proposals, and more. Professional writing tips and document templates from Templix AI.",
    slug: "/blog",
    locale,
  }) as Metadata;
}

// Accent colour map per category
const CATEGORY_ACCENT: Record<string, string> = {
  Invoices:  "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-900/50",
  Resumes:   "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400 border-violet-200 dark:border-violet-900/50",
  Contracts: "bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 border-teal-200 dark:border-teal-900/50",
  Proposals: "bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400 border-orange-200 dark:border-orange-900/50",
  Letters:   "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50",
  "AI Tools":"bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400 border-pink-200 dark:border-pink-900/50",
  Guides:    "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-900/50",
};

const CATEGORY_DOT: Record<string, string> = {
  Invoices:  "bg-blue-500",
  Resumes:   "bg-violet-500",
  Contracts: "bg-teal-500",
  Proposals: "bg-orange-500",
  Letters:   "bg-emerald-500",
  "AI Tools":"bg-pink-500",
  Guides:    "bg-amber-500",
};

function formatDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(
    INTL_LOCALE[locale as keyof typeof INTL_LOCALE] ?? "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
}

export default async function BlogListingPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { category = "All" } = await searchParams;
  const t = getDictionary(locale).blog;
  const c = getDictionary(locale).common;

  // Load from DB if available, always fall back to static data
  let posts: BlogPost[] = STATIC_BLOG_POSTS;
  try {
    if (isDbOnline && process.env.DATABASE_URL) {
      const dbPosts = await db.blog.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
      });
      if (dbPosts && dbPosts.length > 0) {
        posts = dbPosts.map((p: any) => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          description: p.description,
          category: "Guides",
          tags: [],
          readTime: 6,
          publishedAt: p.createdAt.toISOString().slice(0, 10),
          image: "/blog/blog-business-proposal.jpg", // generic fallback for DB posts
          content: p.content,
        }));
      }
    }
  } catch {
    // silently fall back to static data
  }

  // Category filter
  const filtered =
    category === "All"
      ? posts
      : posts.filter((p) => p.category === category);

  // If filtering by category, show ALL posts in that category (no featured exclusion)
  const featured = posts.find((p) => p.featured) ?? posts[0] ?? null;
  const grid = category === "All" && featured
    ? filtered.filter((p) => p.slug !== featured.slug)
    : filtered;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/${locale}/blog` },
    ],
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-white dark:bg-zinc-950 min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* ── Hero Banner ── */}
        {/* `isolate` keeps the background layers inside this section's own
            stacking context — otherwise a negative z-index escapes and the
            page's white background paints over the hero (invisible white text
            in light mode). */}
        <section className="relative isolate overflow-hidden border-b border-zinc-200 dark:border-zinc-900 pt-20 pb-16">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Decorative, sits under an ~80%-opaque overlay — cap the requested
                width and quality so mobile never downloads a 4K background. */}
            <Image
              src="/blog/blog-hero-bg.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              quality={55}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-950/80 dark:bg-zinc-950/85 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-400 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>{t.heroBadge}</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md">
              {t.heroTitle}
            </h1>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {t.heroSubtitle}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm text-zinc-400">
              <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-blue-400" />{posts.length} {t.statArticles}</span>
              <span className="w-px h-4 bg-zinc-700" />
              <span className="flex items-center gap-1.5"><TrendingUp className="h-4 w-4 text-blue-400" />{t.statWeekly}</span>
              <span className="w-px h-4 bg-zinc-700" />
              <span className="flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-blue-400" />{t.statFree}</span>
            </div>
          </div>
        </section>

        {/* ── Category Filter Chips ── */}
        <section className="sticky top-16 z-30 border-b border-zinc-100 dark:border-zinc-900 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
              {BLOG_CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={`/${locale}/blog${cat === "All" ? "" : `?category=${encodeURIComponent(cat)}`}`}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    category === cat
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-500/20"
                      : "bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {cat !== "All" && (
                    <span className={`w-1.5 h-1.5 rounded-full ${CATEGORY_DOT[cat] ?? "bg-zinc-400"} ${category === cat ? "bg-white" : ""}`} />
                  )}
                  {t.categories[cat] ?? cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* ── Featured Article ── */}
          {category === "All" && featured && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5 flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5" /> {t.featuredLabel}
              </p>
              <Link
                href={`/${locale}/blog/${featured.slug}`}
                className="group relative flex flex-col md:flex-row gap-0 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Cover Image */}
                <div className="md:w-64 lg:w-80 shrink-0 relative h-56 md:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-7 flex-1 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${CATEGORY_ACCENT[featured.category] ?? "bg-zinc-100 text-zinc-600"}`}>
                        {featured.category}
                      </span>
                      <span className="text-xs text-zinc-400 flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {formatDate(featured.publishedAt, locale)}
                      </span>
                      <span className="text-xs text-zinc-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {readingTime(featured.content)} {t.minRead}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-zinc-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                      {featured.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    <span>{t.readFullArticle}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── Articles Grid ── */}
          <div>
            {category !== "All" && (
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
                {filtered.length} {filtered.length !== 1 ? t.articlePlural : t.articleSingular} {t.inWord} {t.categories[category as keyof typeof t.categories] ?? category}
              </p>
            )}
            {category === "All" && (
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
                {t.allArticles}
              </p>
            )}

            {filtered.length === 0 ? (
              <div className="py-20 text-center text-zinc-400 dark:text-zinc-500 space-y-3">
                <BookOpen className="h-10 w-10 mx-auto opacity-40" />
                <p className="text-sm font-medium">{t.emptyState}</p>
                <Link href={`/${locale}/blog`} className="text-xs text-blue-500 underline">{c.viewAllArticles}</Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(category === "All" ? grid : filtered).map((post) => (
                  <Link
                    key={post.id}
                    href={`/${locale}/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {/* Cover image */}
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Category badge over image */}
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-sm ${CATEGORY_ACCENT[post.category] ?? "bg-zinc-100/80 text-zinc-600"}`}>
                          {post.category}
                        </span>
                      </div>
                      {/* Subtle gradient at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/60 dark:from-zinc-900/60 to-transparent" />
                    </div>

                    <div className="p-5 flex flex-col flex-1 space-y-3">
                      {/* Meta — category badge removed here (already shown over image) */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] text-zinc-400 flex items-center gap-1 ml-auto">
                          <Clock className="h-2.5 w-2.5" /> {readingTime(post.content)} {t.min}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-zinc-900 dark:text-white text-base leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed line-clamp-3 flex-1">
                        {post.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                            <Tag className="h-2 w-2" />{tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800">
                        <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                          <Calendar className="h-2.5 w-2.5" /> {formatDate(post.publishedAt, locale)}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {t.read} <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ── Newsletter / CTA Banner ── */}
          <div className="rounded-3xl border border-blue-200 dark:border-blue-900/40 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 text-center text-white space-y-5 shadow-xl shadow-blue-500/10">
            <Sparkles className="h-8 w-8 mx-auto opacity-80" />
            <h2 className="text-2xl md:text-3xl font-extrabold">
              {t.ctaHeading}
            </h2>
            <p className="text-blue-100 text-sm max-w-lg mx-auto leading-relaxed">
              {t.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`/${locale}/templates`}
                className="px-6 py-3 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors shadow-md"
              >
                {c.browseTemplates}
              </Link>
              <Link
                href={`/${locale}/templates/invoices`}
                className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                {t.ctaInvoiceTemplates}
              </Link>
            </div>
          </div>

          {/* SEO & Professional Document Writing Guides */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12 space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              {t.seoHeading}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t.seoText1}<a href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline">{t.seoTemplatesLink}</a>{t.seoText2}<a href="https://en.wikipedia.org/wiki/Invoice" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{t.seoWikiLink}</a>{t.seoText3}<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{t.seoLinkedInLink}</a>{t.seoText4}
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
