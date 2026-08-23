import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryHub, CATEGORY_HUBS } from "@/data/categories";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { getProfessionsByCategory } from "@/features/templates/profession-content";
import { SEOEngine } from "@/services/seo";
import Schema from "@/components/seo/Schema";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  CheckCircle,
  LayoutGrid,
  Briefcase,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const locales = ["en"];
  return locales.flatMap((locale) =>
    CATEGORY_HUBS.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const category = getCategoryHub(slug);
  if (!category) {
    notFound();
  }

  return SEOEngine.generateMetadata({
    title: category.title,
    metaTitle: category.metaTitle,
    description: category.metaDescription || category.description,
    slug: `/category/${category.slug}`,
    locale,
  }) as Metadata;
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const category = getCategoryHub(slug);

  if (!category) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/${locale}/category/${category.slug}`;

  // Fetch templates for this category
  const matchingTemplates = allFallbackTemplates.filter(
    (t) => t.categorySlug === category.categorySlug
  ).slice(0, 12);

  // Fetch all role and industry variants for this category
  const roleVariants = getProfessionsByCategory(category.categorySlug);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.description,
    url: canonicalUrl,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: matchingTemplates.length + roleVariants.length,
      itemListElement: [
        ...roleVariants.map((rv, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: rv.entry.metaTitle || `${rv.entry.profession} ${category.name}`,
          url: `${siteConfig.url}/${locale}/templates/${category.categorySlug}/${rv.slug}`,
        })),
        ...matchingTemplates.map((t, i) => ({
          "@type": "ListItem",
          position: roleVariants.length + i + 1,
          name: t.title,
          url: `${siteConfig.url}/${locale}/templates/${t.categorySlug}/${t.slug}`,
        })),
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-8 sm:py-12">
        <Schema data={[collectionSchema, faqSchema]} />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <Link
              href={`/${locale}/category`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to All Categories
            </Link>
          </div>

          {/* Hero Section */}
          <section className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <LayoutGrid className="h-3.5 w-3.5" />
              SEO Category Hub
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {category.h1}
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {category.heroSubtitle}
            </p>
          </section>

          {/* Features Matrix */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.features.map((f, i) => (
              <div key={i} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-2 shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white">{f.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </section>

          {/* Role & Industry Variants Section (Phase 2 Programmatic Landing Pages) */}
          {roleVariants.length > 0 && (
            <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    Targeted Role &amp; Industry Variants
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white">
                    {category.name} by Profession &amp; Industry ({roleVariants.length})
                  </h2>
                </div>
                <Link
                  href={`/${locale}/templates/${category.categorySlug}`}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Browse all {category.name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {roleVariants.map(({ slug: variantSlug, entry }) => (
                  <Link
                    key={variantSlug}
                    href={`/${locale}/templates/${category.categorySlug}/${variantSlug}`}
                    className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 p-4 hover:border-blue-500/60 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                          {entry.profession}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <h3 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {entry.metaTitle || `${entry.profession} ${category.name}`}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                        {entry.subtitle}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                      <span>Instant PDF &amp; Word</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold group-hover:underline">Open Landing Page &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Featured Templates Grid */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Featured {category.name} ({matchingTemplates.length})
              </h2>
              <Link href={`/${locale}/templates/${category.categorySlug}`} className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                View All {category.name} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matchingTemplates.map((t) => (
                <div key={t.id} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-3 relative">
                      <TemplateThumbnail template={t} />
                    </div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1">
                      {t.description}
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/templates/${t.categorySlug}/${t.slug}`}
                    className="mt-4 block w-full text-center py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-600 hover:text-white text-xs font-bold transition-colors"
                  >
                    Use Template
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Related Product Tools */}
          <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Dedicated {category.name} Products &amp; Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.relatedProducts.map((p, i) => (
                <Link
                  key={i}
                  href={p.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs font-bold text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-all"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {p.name}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {category.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 space-y-2">
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">{faq.question}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
