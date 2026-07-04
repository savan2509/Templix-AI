import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import { getDictionary } from "@/lib/i18n";
import { FileText, Sparkles, Download, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "About Us",
    description:
      "Templix AI helps builders, creators, and consultants create professional invoices, resumes, contracts, and proposals in seconds — free.",
    slug: "/about",
    locale,
  }) as Metadata;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale).about;

  const values = [
    { icon: FileText, title: t.value1Title, text: t.value1Text },
    { icon: Sparkles, title: t.value2Title, text: t.value2Text },
    { icon: Download, title: t.value3Title, text: t.value3Text },
    { icon: ShieldCheck, title: t.value4Title, text: t.value4Text },
  ];

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.eyebrow}
      title={t.title}
      subtitle={t.subtitle}
    >
      <Section heading={t.whyHeading}>
        <p>{t.whyBody}</p>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-3">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-white">{v.title}</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{v.text}</p>
          </div>
        ))}
      </div>

      <Section heading={t.differentHeading}>
        <p>{t.differentBody}</p>
      </Section>

      <Section heading={t.getStartedHeading}>
        <p>
          {t.getStartedPre}{" "}
          <Link href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.templatesLink}</Link>{" "}
          {t.getStartedMid}{" "}
          <Link href={`/${locale}/blog`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.blogLink}</Link>{t.getStartedFeedback}{" "}
          <Link href={`/${locale}/contact`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.contactLink}</Link>{t.getStartedPost}
        </p>
      </Section>
    </InfoPageShell>
  );
}
