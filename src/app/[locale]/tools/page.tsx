import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell from "@/components/InfoPageShell";
import { TOOLS } from "@/data/tools";
import { getDictionary } from "@/lib/i18n";
import { Percent, Tag, TrendingUp, Hash, Clock, ArrowRight, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Percent, Tag, TrendingUp, Hash, Clock };

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
  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.hubEyebrow}
      title={t.hubTitle}
      subtitle={t.hubSubtitle}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TOOLS.map((tool) => {
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
              <h2 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tool.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{tool.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                {t.openTool}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          );
        })}
      </div>

      <p className="pt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {t.needDocPre}
        <Link href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.needDocLink}</Link>
        {t.needDocPost}
      </p>
    </InfoPageShell>
  );
}
