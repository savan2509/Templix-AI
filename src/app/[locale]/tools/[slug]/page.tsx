import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import ToolWidget from "@/components/tools/ToolWidget";
import Schema from "@/components/seo/Schema";
import { TOOLS, getTool } from "@/data/tools";
import { getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

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

  const toolUrl = `${siteConfig.url}/${locale}/tools/${tool.slug}`;
  // Map our internal category to a schema.org applicationCategory so each tool's
  // SoftwareApplication is classified specifically (not a generic default).
  const APP_CATEGORY: Record<string, string> = {
    pdf: "UtilitiesApplication",
    resume: "BusinessApplication",
    invoice: "FinanceApplication",
    proposal: "BusinessApplication",
    contract: "BusinessApplication",
    letter: "BusinessApplication",
  };
  const softwareSchema = SEOEngine.generateToolSchema({
    name: tool.title,
    description: tool.description,
    url: toolUrl,
    category: APP_CATEGORY[tool.category],
  });
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: t.toolEyebrow, item: `${siteConfig.url}/${locale}/tools` },
      { "@type": "ListItem", position: 3, name: tool.title, item: toolUrl },
    ],
  };

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.toolEyebrow}
      title={tool.title}
      subtitle={tool.description}
    >
      <Schema data={[softwareSchema, breadcrumbSchema]} />
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
