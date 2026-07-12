import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell from "@/components/InfoPageShell";
import { TOOLS, TOOL_CATEGORIES, toolsByCategory } from "@/data/tools";
import { getDictionary } from "@/lib/i18n";
import { Percent, Tag, TrendingUp, Hash, Clock, Combine, Scissors, FileImage, Images, ClipboardCheck, FileSignature, Calculator, ListChecks, FileText, ShieldCheck, Scale, Mail, LogOut, Award, FileStack, ArrowRight, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Percent, Tag, TrendingUp, Hash, Clock, Combine, Scissors, FileImage, Images, ClipboardCheck, FileSignature, Calculator, ListChecks, FileText, ShieldCheck, Scale, Mail, LogOut, Award, FileStack };

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale).tools;
  return SEOEngine.generateMetadata({
    title: t.metaTitle,
    description: t.metaDescription,
    slug: "/tools",
    locale,
  }) as Metadata;
}

export default async function ToolsHubPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale).tools;
  const categories = TOOL_CATEGORIES.map((c) => ({ ...c, tools: toolsByCategory(c.key) })).filter((c) => c.tools.length > 0);
  const label = (rec: Record<string, string>) => rec[locale] || rec.en;

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.hubEyebrow}
      title={t.hubTitle}
      subtitle={t.hubSubtitle}
    >
      {/* Quick category nav */}
      <nav className="flex flex-wrap gap-2" aria-label={t.hubTitle}>
        {categories.map((cat) => {
          const CatIcon = ICONS[cat.icon] ?? FileStack;
          return (
            <a
              key={cat.key}
              href={`#${cat.key}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:border-blue-400/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <CatIcon className="h-3.5 w-3.5" />
              {label(cat.label)}
              <span className="text-xs text-zinc-400">{cat.tools.length}</span>
            </a>
          );
        })}
      </nav>

      {categories.map((cat) => {
        const CatIcon = ICONS[cat.icon] ?? FileStack;
        return (
          <section key={cat.key} id={cat.key} className="scroll-mt-24 pt-2">
            <h2 className="flex items-center gap-2.5 text-xl font-extrabold text-zinc-900 dark:text-white mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <CatIcon className="h-4 w-4" />
              </span>
              {label(cat.label)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.tools.map((tool) => {
                const Icon = ICONS[tool.icon] ?? Percent;
                return (
                  <Link
                    key={tool.slug}
                    href={`/${locale}/tools/${tool.slug}`}
                    className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:border-blue-400/60 hover:shadow-md transition-all"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{tool.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {t.openTool}
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      <p className="pt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {t.needDocPre}
        <Link href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.needDocLink}</Link>
        {t.needDocPost}
      </p>
    </InfoPageShell>
  );
}
