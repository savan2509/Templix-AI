import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/lib/i18n";
import { Mail } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale).contact;
  return SEOEngine.generateMetadata({
    title: t.metaTitle,
    description: t.metaDescription,
    slug: "/contact",
    locale,
  }) as Metadata;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale).contact;

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.eyebrow}
      title={t.title}
      subtitle={t.subtitle}
    >
      {/* Message form is the primary action — the old mailto cards duplicated
          it three times and buried the form below the fold. */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <div className="mb-7 flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              It lands straight in our inbox and we reply to the email you give us —
              usually within one business day.
            </p>
          </div>
        </div>

        <ContactForm />

        <div className="mt-7 border-t border-zinc-100 pt-5 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Prefer your own mail client? Write to{" "}
            <a
              href="mailto:contact@templix-ai.whitesparksoft.com"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              contact@templix-ai.whitesparksoft.com
            </a>
          </p>
        </div>
      </div>

      <Section heading={t.beforeEmailHeading}>
        <p>
          {t.beforeEmailPre}
          <Link href={`/${locale}/faq`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.faqLink}</Link>
          {t.beforeEmailMid}
          <Link href={`/${locale}/blog`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.guidesLink}</Link>
          {t.beforeEmailPost}
        </p>
      </Section>
    </InfoPageShell>
  );
}
