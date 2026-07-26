/**
 * Dynamic FAQ Topic Pages
 * Route: /[locale]/faq/[topic]
 *
 * Each topic is a dedicated SEO page with:
 *  - Unique metadata (title, description, canonical)
 *  - FAQPage JSON-LD schema for rich results
 *  - BreadcrumbList schema
 *  - Internal links to templates, tools, and related blog posts
 *  - Related FAQ topics for cross-linking
 *
 * Data source: src/data/faq-topics.ts (35 topics, 10–15 Q&As each)
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronDown, ArrowLeft, HelpCircle, ExternalLink } from "lucide-react";
import { SEOEngine } from "@/services/seo";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";
import {
  getFaqTopic,
  getFaqTopicSchema,
  getAllFaqTopics,
  FAQ_TOPIC_SLUGS,
} from "@/data/faq-topics";

interface PageProps {
  params: Promise<{ locale: string; topic: string }>;
}

// ── Static generation ─────────────────────────────────────────────────────────

export async function generateStaticParams(): Promise<{ locale: string; topic: string }[]> {
  const locales = ["en", "es", "de", "fr", "ar"];
  return locales.flatMap((locale) =>
    FAQ_TOPIC_SLUGS.map((topic) => ({ locale, topic }))
  );
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, topic } = await params;
  const faqTopic = getFaqTopic(topic);

  if (!faqTopic) {
    return { title: "FAQ Not Found", robots: { index: false } };
  }

  return SEOEngine.generateMetadata({
    title: faqTopic.h1,
    metaTitle: faqTopic.metaTitle,
    description: faqTopic.metaDescription,
    slug: `/faq/${topic}`,
    locale,
  }) as Metadata;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FaqTopicPage({ params }: PageProps) {
  const { locale, topic } = await params;
  const faqTopic = getFaqTopic(topic);

  if (!faqTopic) notFound();

  // Build JSON-LD schemas
  const faqPageSchema = getFaqTopicSchema(faqTopic);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteConfig.url}/${locale}/faq` },
      { "@type": "ListItem", position: 3, name: faqTopic.h1, item: `${siteConfig.url}/${locale}/faq/${topic}` },
    ],
  };

  // Gather related FAQ topics for cross-linking
  const relatedTopics = faqTopic.relatedFaqs
    ?.map((slug) => getAllFaqTopics().find((t) => t.slug === slug))
    .filter(Boolean) ?? [];

  return (
    <>
      {/* JSON-LD: FAQPage + BreadcrumbList */}
      <Schema data={[faqPageSchema, breadcrumbSchema]} />

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <Link href={`/${locale}`} className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href={`/${locale}/faq`} className="hover:text-blue-500 transition-colors">
            FAQ
          </Link>
          <span>/</span>
          <span className="text-zinc-700 dark:text-zinc-300 truncate max-w-[200px]">
            {faqTopic.h1}
          </span>
        </div>
      </nav>

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-12 transition-colors">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">

          {/* ── Page header ── */}
          <header className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold">
              <HelpCircle className="h-4 w-4" />
              <span>FAQ</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
              {faqTopic.h1}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed max-w-2xl">
              {faqTopic.intro}
            </p>
          </header>

          {/* ── Q&A accordion ── */}
          <section aria-label="Frequently Asked Questions">
            <div className="space-y-3">
              {faqTopic.questions.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 open:shadow-sm transition-shadow"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="font-semibold text-zinc-900 dark:text-white leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 mt-0.5 text-zinc-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ── Internal links ── */}
          {faqTopic.internalLinks.length > 0 && (
            <section className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-950/20 p-6 space-y-3">
              <h2 className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                Free Templates & Tools
              </h2>
              <ul className="flex flex-wrap gap-3">
                {faqTopic.internalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-white dark:bg-zinc-900 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      {link.text}
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Related FAQs ── */}
          {relatedTopics.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                Related FAQ Topics
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedTopics.map((rt) => rt && (
                  <Link
                    key={rt.slug}
                    href={`/${locale}/faq/${rt.slug}`}
                    className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all group"
                  >
                    <p className="font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-sm">
                      {rt.h1}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                      {rt.metaDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── Back link ── */}
          <div className="pt-2">
            <Link
              href={`/${locale}/faq`}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all FAQs
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
