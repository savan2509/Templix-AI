import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import ToolWidget from "@/components/tools/ToolWidget";
import { TOOLS, getTool } from "@/data/tools";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool not found" };
  return SEOEngine.generateMetadata({
    title: `${tool.title} — Free Online Tool`,
    description: tool.description,
    slug: `/tools/${tool.slug}`,
    locale,
    keywords: tool.keywords,
  }) as Metadata;
}

export default async function ToolPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const related = TOOLS.filter((t) => t.slug !== tool.slug).slice(0, 4);

  return (
    <InfoPageShell
      locale={locale}
      eyebrow="Free Tool"
      title={tool.title}
      subtitle={tool.description}
    >
      <ToolWidget slug={tool.slug} />

      <Section heading="How to use this tool">
        <p>
          Enter your values above and the result updates instantly — nothing is sent to a server, so
          it&rsquo;s fast and completely private. Use it as many times as you like, free and without an
          account.
        </p>
      </Section>

      <Section heading="Related free tools">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {related.map((t) => (
            <li key={t.slug}>
              <Link href={`/${locale}/tools/${t.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="pt-2">
          Or create a document with our free{" "}
          <Link href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">templates</Link>.
        </p>
      </Section>
    </InfoPageShell>
  );
}
