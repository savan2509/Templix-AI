import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import ToolWidget from "@/components/tools/ToolWidget";
import AiToolWidget from "@/components/tools/AiToolWidget";
import Schema from "@/components/seo/Schema";
import { buildFaqSchema } from "@/lib/blog-seo";
import { ALL_TOOLS, getTool } from "@/data/tools";
import { getAiTool } from "@/data/ai-tools";
import { getLocalizedTool, FULLY_TRANSLATED_LOCALES } from "@/lib/i18n/content";

// Answer-Engine Optimization: give every tool page a short, honest FAQ so AI
// search (Google AI Overview, ChatGPT, Perplexity, etc.) and Google's Q&A rich
// result can directly answer "what is it / is it free / is it private / how".
function buildToolFaqs(
  tool: { title: string; description: string },
  isAi: boolean,
  howTo: string,
): { question: string; answer: string }[] {
  return [
    { question: `What is the ${tool.title}?`, answer: tool.description },
    {
      question: `Is the ${tool.title} free to use?`,
      answer: `Yes. The ${tool.title} is completely free with no sign-up, no watermark and no usage limits.`,
    },
    {
      question: "Is my data private?",
      answer: isAi
        ? "Your input is sent securely to generate the result and is not stored or used to train AI models."
        : "Everything runs directly in your browser — nothing is uploaded to a server, so your data stays on your device.",
    },
    { question: `How do I use the ${tool.title}?`, answer: howTo },
  ];
}
import { getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = getDictionary(locale).tools;
  const base = getTool(slug);
  if (!base) return { title: t.notFoundTitle };
  const tool = getLocalizedTool(base, locale);
  return SEOEngine.generateMetadata({
    title: `${tool.title}${t.metaTitleSuffix}`,
    description: tool.description,
    slug: `/tools/${tool.slug}`,
    locale,
    keywords: tool.keywords,
    // Every tool is translated in all locales → self-canonical + hreflang.
    hreflangLocales: FULLY_TRANSLATED_LOCALES,
  }) as Metadata;
}

export default async function ToolPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = getDictionary(locale).tools;
  const base = getTool(slug);
  if (!base) notFound();
  const tool = getLocalizedTool(base, locale);
  const aiTool = getAiTool(slug);

  // Related: prefer same-category tools, then fill from the rest.
  const related = ALL_TOOLS
    .filter((tl) => tl.slug !== tool.slug)
    .sort((a) => (a.category === tool.category ? -1 : 1))
    .slice(0, 4);

  const toolUrl = `${siteConfig.url}/${locale}/tools/${tool.slug}`;
  // Map our internal category to a schema.org applicationCategory so each tool's
  // SoftwareApplication is classified specifically (not a generic default).
  const APP_CATEGORY: Record<string, string> = {
    ai: "BusinessApplication",
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

  const faqs = buildToolFaqs(tool, !!aiTool, t.howToBody);
  const faqSchema = buildFaqSchema(faqs);

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.toolEyebrow}
      title={tool.title}
      subtitle={tool.description}
    >
      <Schema data={[softwareSchema, breadcrumbSchema, faqSchema]} />
      {aiTool ? (
        <AiToolWidget
          slug={aiTool.slug}
          inputLabel={aiTool.inputLabel}
          inputPlaceholder={aiTool.inputPlaceholder}
          outputLabel={aiTool.outputLabel}
          options={aiTool.options}
        />
      ) : (
        <ToolWidget slug={tool.slug} />
      )}

      <Section heading={t.howToHeading}>
        <p>
          {t.howToBody}
        </p>
      </Section>

      <Section heading="Frequently Asked Questions">
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{f.question}</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section heading={t.relatedHeading}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {related.map((tl) => (
            <li key={tl.slug}>
              <Link href={`/${locale}/tools/${tl.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                {getLocalizedTool(tl, locale).title}
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
