import type { Metadata } from "next";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import { getDictionary } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Terms of Service",
    description:
      "The terms that govern your use of Templix AI's free document templates, editor, and export tools.",
    slug: "/terms",
    locale,
  }) as Metadata;
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale).terms;
  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.eyebrow}
      title={t.title}
      subtitle={t.subtitle}
      updated={t.updated}
    >
      <p>{t.intro}</p>

      <Section heading={t.s1Heading}>
        <p>{t.s1Body}</p>
      </Section>

      <Section heading={t.s2Heading}>
        <p>{t.s2Body}</p>
      </Section>

      <Section heading={t.s3Heading}>
        <p>{t.s3Body}</p>
      </Section>

      <Section heading={t.s4Heading}>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>{t.s4Item1}</li>
          <li>{t.s4Item2}</li>
          <li>{t.s4Item3}</li>
        </ul>
      </Section>

      <Section heading={t.s5Heading}>
        <p>{t.s5Body}</p>
      </Section>

      <Section heading={t.s6Heading}>
        <p>{t.s6Body}</p>
      </Section>

      <Section heading={t.s7Heading}>
        <p>{t.s7Body}</p>
      </Section>

      <Section heading={t.s8Heading}>
        <p>{t.s8Body}</p>
      </Section>

      <Section heading={t.s9Heading}>
        <p>
          {t.s9Before}
          <a href="mailto:contact@templix-ai.whitesparksoft.com" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">contact@templix-ai.whitesparksoft.com</a>{t.s9After}
        </p>
      </Section>
    </InfoPageShell>
  );
}
