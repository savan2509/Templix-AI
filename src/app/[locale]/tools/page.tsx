import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell from "@/components/InfoPageShell";
import { TOOLS } from "@/data/tools";
import { Percent, Tag, TrendingUp, Hash, Clock, ArrowRight, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Percent, Tag, TrendingUp, Hash, Clock };

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Free Business Tools & Calculators",
    description:
      "Free online tools for freelancers and businesses: GST/tax calculator, discount calculator, profit margin calculator, invoice number generator, and hourly rate calculator.",
    slug: "/tools",
    locale,
  }) as Metadata;
}

export default async function ToolsHubPage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <InfoPageShell
      locale={locale}
      eyebrow="Free Tools"
      title="Business Tools & Calculators"
      subtitle="Fast, free, no sign-up calculators for invoicing, pricing, and freelancing — everything runs right in your browser."
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
                Open tool
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          );
        })}
      </div>

      <p className="pt-4 text-sm text-zinc-500 dark:text-zinc-400">
        Need a document too? Browse our free{" "}
        <Link href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">document templates</Link>{" "}
        — invoices, resumes, contracts, proposals, and more.
      </p>
    </InfoPageShell>
  );
}
