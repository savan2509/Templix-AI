import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell from "@/components/InfoPageShell";
import Schema from "@/components/seo/Schema";
import { faqData, faqSchema } from "@/data/faq";
import { getAllFaqTopics } from "@/data/faq-topics";
import { INDIVIDUAL_FAQS } from "@/data/faq-individual";
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

  const categoriesMap = [
    { key: "resumes", title: "📄 Resume FAQs (30)", items: INDIVIDUAL_FAQS.filter(f => f.category === "resumes") },
    { key: "invoices", title: "🧾 Invoice FAQs (25)", items: INDIVIDUAL_FAQS.filter(f => f.category === "invoices") },
    { key: "cover-letters", title: "✉️ Cover Letter FAQs (15)", items: INDIVIDUAL_FAQS.filter(f => f.category === "cover-letters") },
    { key: "proposals", title: "💼 Proposal FAQs (15)", items: INDIVIDUAL_FAQS.filter(f => f.category === "proposals") },
    { key: "contracts", title: "📜 Contracts FAQs (15)", items: INDIVIDUAL_FAQS.filter(f => f.category === "contracts") },
    { key: "hr", title: "👥 HR FAQs (15)", items: INDIVIDUAL_FAQS.filter(f => f.category === "hr") },
    { key: "pdf", title: "📁 PDF FAQs (15)", items: INDIVIDUAL_FAQS.filter(f => f.category === "pdf") },
    { key: "ai-tools", title: "✨ AI Tools FAQs (20)", items: INDIVIDUAL_FAQS.filter(f => f.category === "ai-tools") },
  ];

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.eyebrow}
      title={t.title}
      subtitle="Comprehensive knowledge base & answers to 150+ document, resume, contract, and AI questions."
    >
      {/* FAQ + Breadcrumb structured data for rich results */}
      <Schema data={[faqSchema, breadcrumbSchema]} />

      {/* ── 150 Individual FAQ Pages Grouped by Category ── */}
      <div className="space-y-10 pt-4">
        {categoriesMap.map((catGroup) => (
          <section key={catGroup.key} className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
              {catGroup.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {catGroup.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${locale}/faq/${item.slug}`}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3.5 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-sm transition-all group flex items-center justify-between gap-2"
                >
                  <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.question}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="pt-6">
        {t.stillHavePre}
        <Link href={`/${locale}/contact`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.contactLink}</Link>
        {t.stillHavePost}
      </p>
    </InfoPageShell>
  );
}

