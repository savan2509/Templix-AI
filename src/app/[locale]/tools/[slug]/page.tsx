import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import ToolWidget from "@/components/tools/ToolWidget";
import { TOOLS, getTool } from "@/data/tools";
import { getDictionary } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = getDictionary(locale).tools;
  const tool = getTool(slug);
  if (!tool) return { title: t.notFoundTitle };
  return SEOEngine.generateMetadata({
    title: `${tool.title}${t.metaTitleSuffix}`,
    description: tool.description,
    slug: `/tools/${tool.slug}`,
    locale,
    keywords: tool.keywords,
  }) as Metadata;
}

export default async function ToolPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = getDictionary(locale).tools;
  const tool = getTool(slug);
  if (!tool) notFound();

  const related = TOOLS.filter((tl) => tl.slug !== tool.slug).slice(0, 4);

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.toolEyebrow}
      title={tool.title}
      subtitle={tool.description}
    >
      <ToolWidget slug={tool.slug} />

      <Section heading={t.howToHeading}>
        <p>
          {t.howToBody}
        </p>
      </Section>

      <Section heading={t.relatedHeading}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {related.map((tl) => (
            <li key={tl.slug}>
              <Link href={`/${locale}/tools/${tl.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                {tl.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="pt-2">
          {t.orCreatePre}
          <Link href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.orCreateLink}</Link>
          {t.orCreatePost}
        </p>
      </Section>
    </InfoPageShell>
  );
}
