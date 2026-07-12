import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGetInTouch from "@/components/BlogGetInTouch";
import BlogReadPopup from "@/components/BlogReadPopup";
import Schema from "@/components/seo/Schema";
import { db } from "@/lib/db";
import {
  getBlogPost,
  getRelatedPosts,
  STATIC_BLOG_POSTS,
  type BlogPost,
} from "@/lib/blog-data";
import { SEOEngine } from "@/services/seo";
import {
  withHeadingIds,
  extractFaqs,
  buildFaqSchema,
  getBlogFaqs,
  readingTime,
  wordCount,
} from "@/lib/blog-seo";
import { siteConfig } from "@/config/site";
import { getTool } from "@/data/tools";
import { getDictionary, INTL_LOCALE } from "@/lib/i18n";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  Home,
  Tag,
  Share2,
  Sparkles,
  FileText,
  PenLine,
  Wrench,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    // Bare title — the root layout appends "| Templix AI" via its title template.
    return { title: "Article Not Found", robots: { index: false } };
  }
  return SEOEngine.generateMetadata({
    title: post.title,
    metaTitle: post.metaTitle,
    description: post.metaDescription || post.description,
    keywords: post.keywords,
    canonical: post.canonicalUrl,
    image: post.image,
    slug: `/blog/${slug}`,
    locale,
    isBlogPost: true,
    publishedTime: post.publishedAt,
  }) as Metadata;
}

// ── Static generation hint ────────────────────────────────────────────────────
export async function generateStaticParams() {
  return STATIC_BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

// ── Helpers ───────────────────────────────────────────────────────────────────
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

const CATEGORY_ACCENT: Record<string, string> = {
  Invoices:  "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-900",
  Resumes:   "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400 border-violet-200 dark:border-violet-900",
  Contracts: "bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 border-teal-200 dark:border-teal-900",
  Proposals: "bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400 border-orange-200 dark:border-orange-900",
  Letters:   "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",
  "AI Tools":"bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400 border-pink-200 dark:border-pink-900",
  Guides:    "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-900",
};

const CATEGORY_GRADIENT: Record<string, string> = {
  Invoices:  "from-blue-600 to-indigo-600",
  Resumes:   "from-violet-600 to-purple-600",
  Contracts: "from-teal-600 to-cyan-600",
  Proposals: "from-orange-500 to-amber-500",
  Letters:   "from-emerald-600 to-green-600",
  "AI Tools":"from-pink-600 to-rose-600",
  Guides:    "from-amber-500 to-yellow-500",
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = getDictionary(locale).blog;
  const c = getDictionary(locale).common;

  // Try DB first, fall back to static
  let post: BlogPost | null = null;

  try {
    if (process.env.DATABASE_URL) {
      const dbPost = await db.blog.findUnique({ where: { slug } });
      if (dbPost && (dbPost as any).published) {
        post = {
          id: dbPost.id,
          slug: dbPost.slug,
          title: dbPost.title,
          description: dbPost.description,
          category: "Guides",
          tags: [],
          readTime: 6,
          publishedAt: (dbPost.createdAt as Date).toISOString().slice(0, 10),
          image: "/blog/blog-business-proposal.jpg", // generic fallback for DB posts
          content: dbPost.content,
        };

      }
    }
  } catch {
    // silently fall back
  }

  if (!post) post = getBlogPost(slug) ?? null;

  // Return a real 404 for unknown articles (avoids an indexable soft-404).
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const gradient = CATEGORY_GRADIENT[post.category] ?? "from-blue-600 to-indigo-600";

  // Free tools relevant to the article's topic — a contextual internal link to
  // our best link-magnet utilities. Falls back to a general set for Guides/AI.
  const TOOLS_BY_CATEGORY: Record<string, string[]> = {
    Invoices: ["invoice-number-generator", "gst-calculator", "pricing-calculator"],
    Resumes: ["resume-ats-checker", "pdf-to-jpg", "merge-pdf"],
    Contracts: ["contract-generator", "nda-generator", "terms-generator"],
    Proposals: ["proposal-builder", "pricing-calculator", "scope-generator"],
    Letters: ["letter-generator", "resignation-letter-generator", "recommendation-letter-generator"],
    "AI Tools": ["resume-ats-checker", "merge-pdf", "pdf-to-jpg"],
  };
  const relatedTools = (TOOLS_BY_CATEGORY[post.category] ?? ["merge-pdf", "gst-calculator", "resume-ats-checker"])
    .map((s) => getTool(s))
    .filter((tl): tl is NonNullable<typeof tl> => Boolean(tl));

  // Resolve links first, then add anchors — so the ids match what renders.
  const linkedHtml = SEOEngine.injectLinks(post.content, locale);
  const { html: articleHtml, toc } = withHeadingIds(linkedHtml);
  // Every article gets an FAQ. If the post already ships its own "Frequently
  // Asked Questions" section, use those; otherwise generate a category-specific
  // set to render below the article + emit FAQPage schema.
  const inlineFaqs = extractFaqs(articleHtml);
  const generatedFaqs = inlineFaqs.length > 0 ? [] : getBlogFaqs(post);
  const faqs = inlineFaqs.length > 0 ? inlineFaqs : generatedFaqs;
  const minutes = readingTime(post.content);
  const words = wordCount(post.content);

  // A 1- or 2-entry table of contents is noise, so short posts keep the plain
  // two-column layout. Placement classes are written out per branch because
  // Tailwind only ships classes it can see as literal strings.
  const hasToc = toc.length >= 3;
  const gridClass = hasToc
    ? "grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[16rem_minmax(0,1fr)_20rem]"
    : "grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]";
  const articleClass = hasToc
    ? "min-w-0 lg:col-start-1 lg:row-start-2 xl:col-start-2 xl:row-start-1"
    : "min-w-0 lg:col-start-1 lg:row-start-1";
  const asideClass = hasToc
    ? "space-y-6 lg:col-start-2 lg:row-start-1 lg:row-span-2 xl:col-start-3 xl:row-span-1"
    : "space-y-6 lg:col-start-2 lg:row-start-1";

  // JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "Templix AI", url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: "Templix AI",
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    url: `${siteConfig.url}/${locale}/blog/${slug}`,
    mainEntityOfPage: `${siteConfig.url}/${locale}/blog/${slug}`,
    articleSection: post.category,
    wordCount: words,
    timeRequired: `PT${minutes}M`,
    keywords: post.tags.join(", "),
    // Voice-search: point assistants at the headline + summary of the article.
    // The classes below tag the exact elements those selectors resolve to.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-title", ".speakable-summary"],
    },
  };

  // Only emit FAQPage when the post actually has a Q&A section — an empty
  // mainEntity is a structured-data error in Search Console.
  const faqSchema = faqs.length > 0 ? buildFaqSchema(faqs) : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/${locale}/blog/${slug}` },
    ],
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-white dark:bg-zinc-950 min-h-screen">
        {/* JSON-LD: Article + BreadcrumbList (+ FAQPage when the post has Q&A) */}
        <Schema data={[articleSchema, breadcrumbSchema, faqSchema]} />

        {/* ── Hero ── */}
        {/* `isolate` keeps the background layers inside this section's own
            stacking context so the page's white background can't paint over
            the hero (which made the white heading invisible in light mode). */}
        <section className="relative isolate overflow-hidden pt-14 pb-16">
          {/* Abstract background image with category gradient overlay */}
          <div className="absolute inset-0 z-0">
            {/* Decorative, sits under a 90%-opaque gradient — never needs a 4K
                source. Cap the requested width and drop quality to protect LCP. */}
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
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`} />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/70 font-medium flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="h-3 w-3" /> {c.homeBreadcrumb}
              </Link>
              <span>/</span>
              <Link href={`/${locale}/blog`} className="hover:text-white transition-colors">{t.blogBreadcrumb}</Link>
              <span>/</span>
              <span className="text-white/90 truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border bg-white/20 text-white border-white/30`}>
                {post.category}
              </span>
              <span className="text-white/70 text-xs flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {formatDate(post.publishedAt, locale)}
              </span>
              <span className="text-white/70 text-xs flex items-center gap-1">
                <Clock className="h-3 w-3" /> {minutes} {t.minRead}
              </span>
              <span className="text-white/70 text-xs flex items-center gap-1">
                <PenLine className="h-3 w-3" /> {t.byline}
              </span>
            </div>

            {/* Title — .speakable-title is referenced by the Article schema's
                SpeakableSpecification for voice assistants. */}
            <h1 className="speakable-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>

            {/* Description — .speakable-summary, the second speakable selector. */}
            <p className="speakable-summary text-white/80 text-base leading-relaxed max-w-2xl">
              {post.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 text-white/80 text-[11px] font-medium">
                  <Tag className="h-2.5 w-2.5" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cover Image Panel ── */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-0 mb-2">
          <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* ── Body Layout ── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className={gridClass}>

            {/* ── Table of contents ──
                Generated from the article's own H2s. Helps readers skim and
                gives Google jump-to-section links. Becomes a sticky left rail
                once there is room for a third column (xl); above that width it
                sits over the article, as it did before. `self-start` is what
                lets `sticky` work — a stretched grid item has nowhere to stick. */}
            {hasToc && (
              <nav
                aria-label={t.tocTitle}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/50 lg:col-start-1 lg:row-start-1 xl:col-start-1 xl:row-start-1 xl:sticky xl:top-24 xl:self-start xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto"
              >
                <p className="mb-3 flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  {t.tocTitle}
                </p>
                <ol className="space-y-1.5">
                  {toc.map((item, i) => (
                    <li key={item.id} className="flex gap-2.5 text-sm">
                      <span className="shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <a
                        href={`#${item.id}`}
                        className="text-zinc-600 hover:text-blue-600 hover:underline dark:text-zinc-400 dark:hover:text-blue-400"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* ── Article Content ── */}
            <article className={articleClass}>
              {/* Back link */}
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> {t.backToBlog}
              </Link>

              {/* Prose content */}
              <div
                className="prose-article"
                dangerouslySetInnerHTML={{ __html: articleHtml }}
              />

              {/* Generated FAQ — only for posts that don't already ship their own
                  FAQ section. The FAQPage schema above covers whichever set. */}
              {generatedFaqs.length > 0 && (
                <section className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {generatedFaqs.map((faq) => (
                      <div key={faq.question} className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h3 className="font-semibold text-zinc-900 dark:text-white">{faq.question}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Share row */}
              <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">{t.foundHelpful}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.shareNetwork}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-zinc-400" />
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/${locale}/blog/${slug}`)}`}
                    target="_blank" rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/${locale}/blog/${slug}`)}`}
                    target="_blank" rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* CTA block */}
              <div className={`mt-10 rounded-2xl bg-gradient-to-r ${gradient} p-7 text-white space-y-4 shadow-lg`}>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 opacity-80" />
                  <span className="text-sm font-bold uppercase tracking-wider opacity-80">{t.freeTemplatesLabel}</span>
                </div>
                <h3 className="text-xl font-extrabold">{t.ctaPracticeHeading}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t.ctaPracticeText}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/${locale}/templates`}
                    className="px-5 py-2.5 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors shadow"
                  >
                    {t.browseAllTemplates}
                  </Link>
                  <Link
                    href={`/${locale}/templates/${
                      post.category === "Invoices" ? "invoices"
                      : post.category === "Resumes" ? "resumes"
                      : post.category === "Contracts" ? "contracts"
                      : post.category === "Proposals" ? "proposals"
                      : post.category === "Letters" ? "letters"
                      : post.category === "AI Tools" ? "resumes"
                      : "invoices"
                    }`}
                    className="px-5 py-2.5 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-1"
                  >
                    {t.templatesCta[post.category as keyof typeof t.templatesCta] ?? t.templatesCta.Invoices} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className={asideClass}>

              {/* Article info card */}
              <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{t.aboutArticle}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-600 dark:text-zinc-400">{formatDate(post.publishedAt, locale)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-600 dark:text-zinc-400">{minutes} {t.minuteRead}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-zinc-400" />
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${CATEGORY_ACCENT[post.category] ?? ""}`}>{post.category}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 pt-1 border-t border-zinc-100 dark:border-zinc-800">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{t.freeTemplatesLabel}</h3>
                {[
                  { name: t.templatesCta.Invoices, href: `/${locale}/templates/invoices` },
                  { name: t.templatesCta.Resumes, href: `/${locale}/templates/resumes` },
                  { name: t.templatesCta.Contracts, href: `/${locale}/templates/contracts` },
                  { name: t.templatesCta.Proposals, href: `/${locale}/templates/proposals` },
                  { name: t.templatesCta.Letters, href: `/${locale}/templates/letters` },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <FileText className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-blue-500 transition-colors" />
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                  </Link>
                ))}
              </div>

              {/* Free tools — contextual to the article topic */}
              {relatedTools.length > 0 && (
                <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{t.freeToolsLabel}</h3>
                  {relatedTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${locale}/tools/${tool.slug}`}
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                    >
                      <Wrench className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-blue-500 transition-colors" />
                      {tool.short}
                      <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Authority Resources */}
              <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{t.authorityResources}</h3>
                {[
                  { name: t.authoritySchema, href: "https://schema.org" },
                  { name: t.authorityW3C, href: "https://www.w3.org" },
                  { name: t.authorityWikipedia, href: "https://en.wikipedia.org/wiki/Invoice" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <FileText className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-blue-500 transition-colors" />
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                  </a>
                ))}
              </div>

              {/* Related posts — hidden if none */}
              {related.length > 0 && (
                <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{t.relatedArticles}</h3>
                  <div className="space-y-3">
                    {related.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/${locale}/blog/${rel.slug}`}
                        className="group block space-y-1"
                      >
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </p>
                        <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5" /> {readingTime(rel.content)} {t.min}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* ── More Articles ── */}
          <div className="mt-16 pt-10 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{t.moreArticles}</h2>
              <Link href={`/${locale}/blog`} className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                {c.viewAll} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {STATIC_BLOG_POSTS.filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/${locale}/blog/${p.slug}`}
                    className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="relative h-36 w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-sm ${CATEGORY_ACCENT[p.category] ?? ""}`}>
                          {p.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold text-zinc-900 dark:text-white text-sm leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-xs text-zinc-400 flex items-center gap-1 pt-1 border-t border-zinc-100 dark:border-zinc-800">
                        <Clock className="h-2.5 w-2.5" /> {readingTime(p.content)} {t.minRead}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <BlogGetInTouch articleTitle={post.title} />
      <BlogReadPopup />

      <Footer />
    </>
  );
}
