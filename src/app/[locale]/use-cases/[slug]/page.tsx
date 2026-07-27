import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";
import { getUseCaseBySlug, build11SectionHtml, ALL_USE_CASE_SLUGS } from "@/lib/use-case-data";
import { ArrowLeft, Clock, Sparkles, FileText, CheckCircle2, Home } from "lucide-react";

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  return ALL_USE_CASE_SLUGS.map((slug) => ({
    locale: "en",
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return { title: "Use Case Not Found" };
  }

  const url = `${siteConfig.url}/${locale}/use-cases/${slug}`;

  return {
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    keywords: [useCase.primaryKeyword, ...useCase.secondaryKeywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: useCase.metaTitle,
      description: useCase.metaDescription,
      url,
      type: "article",
      siteName: siteConfig.name,
      images: [{ url: useCase.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: useCase.metaTitle,
      description: useCase.metaDescription,
      images: [useCase.image],
    },
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  const htmlContent = build11SectionHtml(useCase);
  const canonicalUrl = `${siteConfig.url}/${locale}/use-cases/${slug}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: useCase.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: useCase.metaDescription,
    url: canonicalUrl,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      <Navbar />
      <Schema data={schemaData} />

      <main className="flex-1 pb-16">
        {/* Header Hero */}
        <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6" aria-label="Breadcrumb">
              <Link href={`/${locale}`} className="hover:text-emerald-500 flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <span>/</span>
              <Link href={`/${locale}/use-cases`} className="hover:text-emerald-500">
                Use Cases
              </Link>
              <span>/</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-medium truncate max-w-[200px] sm:max-w-xs">
                {useCase.title}
              </span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Use Case Guide &amp; Generator
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
              {useCase.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
              {useCase.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 border-t border-zinc-200 dark:border-zinc-800/80 pt-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>{useCase.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Free PDF Export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
          <div
            className="prose prose-zinc dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-zinc-200 dark:prose-h2:border-zinc-800 prose-h2:pb-2
              prose-p:leading-relaxed prose-p:text-zinc-700 dark:prose-p:text-zinc-300
              prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
              prose-table:w-full prose-table:my-6 prose-table:text-sm
              prose-th:bg-zinc-100 dark:prose-th:bg-zinc-900 prose-th:p-3 prose-th:text-left
              prose-td:p-3 prose-td:border-b prose-td:border-zinc-200 dark:prose-td:border-zinc-800"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Navigation Back */}
          <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
            <Link
              href={`/${locale}/use-cases`}
              className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Use Cases
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
