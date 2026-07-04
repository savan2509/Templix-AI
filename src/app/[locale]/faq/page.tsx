import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell from "@/components/InfoPageShell";
import { faqData, faqSchema } from "@/data/faq";
import { getDictionary } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

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
  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.eyebrow}
      title={t.title}
      subtitle={t.subtitle}
    >
      {/* FAQ structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      <p className="pt-2">
        {t.stillHavePre}
        <Link href={`/${locale}/contact`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.contactLink}</Link>
        {t.stillHavePost}
      </p>
    </InfoPageShell>
  );
}
