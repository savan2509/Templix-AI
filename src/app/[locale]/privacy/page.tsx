import type { Metadata } from "next";
import { SEOEngine } from "@/services/seo";
import { getDictionary } from "@/lib/i18n";
import InfoPageShell, { Section } from "@/components/InfoPageShell";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Privacy Policy",
    description:
      "How Templix AI collects, uses, and protects your data. Read our privacy practices for the free document template and editor platform.",
    slug: "/privacy",
    locale,
  }) as Metadata;
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale).privacy;
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
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>{t.s1Item1Label}</strong> — {t.s1Item1Text}</li>
          <li><strong>{t.s1Item2Label}</strong> — {t.s1Item2Text}</li>
          <li><strong>{t.s1Item3Label}</strong> — {t.s1Item3Text}</li>
        </ul>
        <p>{t.s1NoSellPre} <strong>{t.s1NoSellEmphasis}</strong> {t.s1NoSellPost}</p>
      </Section>

      <Section heading={t.s2Heading}>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>{t.s2Item1}</li>
          <li>{t.s2Item2}</li>
          <li>{t.s2Item3}</li>
          <li>{t.s2Item4}</li>
        </ul>
      </Section>

      <Section heading={t.s3Heading}>
        <p>{t.s3Body}</p>
      </Section>

      <Section heading={t.s4Heading}>
        <p>{t.s4Body}</p>
      </Section>

      <Section heading={t.s5Heading}>
        <p>{t.s5Body}</p>
      </Section>

      <Section heading={t.s6Heading}>
        <p>
          {t.s6Body}{" "}
          <a href="mailto:whitesparktechnologies@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">whitesparktechnologies@gmail.com</a>.
        </p>
      </Section>

      <Section heading={t.s7Heading}>
        <p>{t.s7Body}</p>
      </Section>

      <Section heading={t.s8Heading}>
        <p>
          {t.s8Body}{" "}
          <a href="mailto:whitesparktechnologies@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">whitesparktechnologies@gmail.com</a>.
        </p>
      </Section>
    </InfoPageShell>
  );
}
