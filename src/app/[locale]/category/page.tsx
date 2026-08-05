import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import { CATEGORY_HUBS } from "@/data/categories";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";
import { Sparkles, ArrowRight, LayoutGrid, Layers, ShieldCheck, Zap } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Document & Tool Categories",
    metaTitle: "Document & Tool Categories | Templix AI",
    description: "Browse Templix AI document categories: Resume, Invoice, Proposal, Contract, Letter, Report, HR, PDF Tools, and AI Writing Tools.",
    slug: "/category",
    locale,
  }) as Metadata;
}

export default async function CategoryHubsPage({ params }: PageProps) {
  const { locale } = await params;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Templix AI Document & Tool Categories",
    description: "Categories for business document templates, legal contracts, resumes, PDF tools, and AI writing tools.",
    url: `${siteConfig.url}/${locale}/category`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: CATEGORY_HUBS.length,
      itemListElement: CATEGORY_HUBS.map((c, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: c.name,
        url: `${siteConfig.url}/${locale}/category/${c.slug}`,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-12 sm:py-16">
      <Schema data={[collectionSchema]} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <LayoutGrid className="h-3.5 w-3.5" />
            SEO Category Hubs
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Document &amp; Tool Category Hubs
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Explore broad document ecosystems — invoices, resumes, proposals, legal agreements, reports, PDF utilities, and AI writing tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORY_HUBS.map((cat) => (
            <div
              key={cat.slug}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <LayoutGrid className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/${locale}/category/${cat.slug}`}>
                      {cat.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <Link
                  href={`/${locale}/category/${cat.slug}`}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline inline-flex items-center gap-1"
                >
                  Explore Category Hub
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
