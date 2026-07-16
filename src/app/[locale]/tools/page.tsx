import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell from "@/components/InfoPageShell";
import Schema from "@/components/seo/Schema";
import { ALL_TOOLS, TOOL_CATEGORIES, toolsByCategory } from "@/data/tools";
import { getLocalizedTool } from "@/lib/i18n/content";
import { getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { Percent, Tag, TrendingUp, Hash, Clock, Combine, Scissors, FileImage, Images, ClipboardCheck, FileSignature, Calculator, ListChecks, FileText, ShieldCheck, Scale, Mail, LogOut, Award, FileStack, Sparkles, PenLine, SpellCheck, Wand2, Palette, Languages, ScrollText, MessageSquare, Briefcase, Megaphone, Quote, Newspaper, Search, AlignLeft, Users, ArrowRight, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Percent, Tag, TrendingUp, Hash, Clock, Combine, Scissors, FileImage, Images, ClipboardCheck, FileSignature, Calculator, ListChecks, FileText, ShieldCheck, Scale, Mail, LogOut, Award, FileStack, Sparkles, PenLine, SpellCheck, Wand2, Palette, Languages, ScrollText, MessageSquare, Briefcase, Megaphone, Quote, Newspaper, Search, AlignLeft, Users };

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

  // Dynamic JSON-LD: a CollectionPage wrapping every tool as an ordered ItemList
  // (built from TOOLS, so it stays in sync as tools are added) + a BreadcrumbList.
  const toolsUrl = `${siteConfig.url}/${locale}/tools`;
  const collectionSchema = SEOEngine.generateCollectionSchema({
    name: t.hubTitle,
    description: t.hubSubtitle,
    url: toolsUrl,
    locale,
    items: ALL_TOOLS.map((tool) => ({ name: tool.title, url: `${siteConfig.url}/${locale}/tools/${tool.slug}` })),
  });
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: t.toolEyebrow, item: toolsUrl },
    ],
  };

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.hubEyebrow}
      title={t.hubTitle}
      subtitle={t.hubSubtitle}
    >
      {/* JSON-LD: CollectionPage(ItemList of all tools) + BreadcrumbList */}
      <Schema data={[collectionSchema, breadcrumbSchema]} />

      {/* Quick category nav */}
      <nav className="flex flex-wrap gap-2" aria-label={t.hubTitle}>
        {categories.map((cat) => {
          const CatIcon = ICONS[cat.icon] ?? FileStack;
          const isAi = cat.key === "ai";
          return (
            <a
              key={cat.key}
              href={`#${cat.key}`}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                isAi
                  ? "border-violet-300 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 hover:border-violet-400"
                  : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 hover:border-blue-400/60 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <CatIcon className="h-3.5 w-3.5" />
              {label(cat.label)}
              <span className={`text-xs ${isAi ? "text-violet-400" : "text-zinc-400"}`}>{cat.tools.length}</span>
            </a>
          );
        })}
      </nav>

      {categories.map((cat) => {
        const CatIcon = ICONS[cat.icon] ?? FileStack;
        const isAi = cat.key === "ai";
        return (
          <section key={cat.key} id={cat.key} className="scroll-mt-24 pt-2">
            <h2 className="flex items-center gap-2.5 text-xl font-extrabold text-zinc-900 dark:text-white mb-4">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${isAi ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white" : "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"}`}>
                <CatIcon className="h-4 w-4" />
              </span>
              {label(cat.label)}
              {isAi && (
                <span className="rounded-full bg-violet-100 dark:bg-violet-950/60 px-2 py-0.5 text-xs font-bold text-violet-700 dark:text-violet-300 ring-1 ring-violet-300/50 dark:ring-violet-800">
                  AI
                </span>
              )}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.tools.map((baseTool) => {
                const tool = getLocalizedTool(baseTool, locale);
                const Icon = ICONS[tool.icon] ?? Percent;
                return (
                  <Link
                    key={tool.slug}
                    href={`/${locale}/tools/${tool.slug}`}
                    className={`group relative rounded-2xl border bg-white dark:bg-zinc-900 p-5 transition-all ${isAi ? "border-violet-200 dark:border-violet-900/60 hover:border-violet-400 hover:shadow-md hover:shadow-violet-500/10" : "border-zinc-200 dark:border-zinc-800 hover:border-blue-400/60 hover:shadow-md"}`}
                  >
                    {isAi && (
                      <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                        AI
                      </span>
                    )}
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl mb-3 ${isAi ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white" : "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className={`font-bold text-zinc-900 dark:text-white transition-colors ${isAi ? "group-hover:text-violet-600 dark:group-hover:text-violet-400" : "group-hover:text-blue-600 dark:group-hover:text-blue-400"}`}>
                      {tool.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{tool.description}</p>
                    <span className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${isAi ? "text-violet-600 dark:text-violet-400" : "text-blue-600 dark:text-blue-400"}`}>
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
