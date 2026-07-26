import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell from "@/components/InfoPageShell";
import Schema from "@/components/seo/Schema";
import { faqData, faqSchema } from "@/data/faq";
import { getAllFaqTopics } from "@/data/faq-topics";
import { getDictionary } from "@/lib/i18n";
import { ChevronDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about Templix AI — free templates, the editor, AI rewrites, PDF/DOCX exports, and pricing.",
    slug: "/faq",
    locale,
  }) as Metadata;
}

export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale).faqPage;
  const topics = getAllFaqTopics();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteConfig.url}/${locale}/faq` },
    ],
  };

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.eyebrow}
      title={t.title}
      subtitle={t.subtitle}
    >
      {/* FAQ + Breadcrumb structured data for rich results */}
      <Schema data={[faqSchema, breadcrumbSchema]} />

      {/* ── General Q&As ── */}
      <div className="space-y-3">
        {faqData.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-zinc-900 dark:text-white">
              <span>{item.question}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
              {item.answer}
            </p>
          </details>
        ))}
      </div>

      {/* ── Topic pages hub ── */}
      <div className="pt-6 space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          In-Depth FAQ Topics
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          Detailed answers to specific questions — 10–15 Q&As per topic.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/${locale}/faq/${topic.slug}`}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all group flex items-start justify-between gap-3"
            >
              <div>
                <p className="font-semibold text-sm text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {topic.h1}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                  {topic.metaDescription}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      <p className="pt-2">
        {t.stillHavePre}
        <Link href={`/${locale}/contact`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.contactLink}</Link>
        {t.stillHavePost}
      </p>
    </InfoPageShell>
  );
}

