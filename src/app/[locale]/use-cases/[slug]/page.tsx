import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";
import { getUseCaseBySlug, build14SectionHtml, ALL_USE_CASE_SLUGS, type UseCaseData } from "@/lib/use-case-data";
import { ArrowLeft, Clock, Sparkles, CheckCircle2, Home, ArrowRight, Layers } from "lucide-react";

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  return ALL_USE_CASE_SLUGS.map((slug) => ({
    locale: "en",
    slug,
  }));
}

function getHubLandingPage(useCase: UseCaseData) {
  const s = useCase.slug.toLowerCase();
  const c = useCase.category;

  if (s.includes("resume") || c === "Resumes") {
    return { title: "AI Resume Builder", href: "/ai-resume-builder", desc: "Create ATS-friendly resumes in minutes with AI" };
  }
  if (s.includes("invoice") || c === "Invoices") {
    return { title: "AI Invoice Generator", href: "/ai-invoice-generator", desc: "Generate professional tax-calculated invoices instantly" };
  }
  if (s.includes("cover-letter") || c === "Letters") {
    return { title: "AI Cover Letter Generator", href: "/ai-cover-letter-generator", desc: "Write tailored cover letters for any job application" };
  }
  if (s.includes("proposal") || c === "Proposals") {
    return { title: "AI Business Proposal Generator", href: "/business-proposal-generator", desc: "Create winning client proposals and pitch decks" };
  }
  if (s.includes("contract") || s.includes("nda") || c === "Contracts") {
    return { title: "AI Contract Generator", href: "/ai-contract-generator", desc: "Draft legally binding contracts and NDAs effortlessly" };
  }
  return { title: "AI Document Tools", href: "/tools", desc: "Explore all free AI document creation tools" };
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

  const htmlContent = build14SectionHtml(useCase);
  const canonicalUrl = `${siteConfig.url}/${locale}/use-cases/${slug}`;
  const parentHub = getHubLandingPage(useCase);

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: parentHub.title, item: `${siteConfig.url}/${locale}${parentHub.href}` },
      { "@type": "ListItem", position: 3, name: "Use Cases", item: `${siteConfig.url}/${locale}/use-cases` },
      { "@type": "ListItem", position: 4, name: useCase.title, item: canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      <Navbar />
      <Schema data={[schemaData, breadcrumbSchema]} />

      <main className="flex-1 pb-16">
        {/* Header Hero */}
        <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Breadcrumbs connecting Spoke back to Hub */}
            <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6 flex-wrap" aria-label="Breadcrumb">
              <Link href={`/${locale}`} className="hover:text-blue-500 flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <span>/</span>
              <Link href={`/${locale}${parentHub.href}`} className="hover:text-blue-500 font-semibold text-blue-600 dark:text-blue-400">
                {parentHub.title}
              </Link>
              <span>/</span>
              <Link href={`/${locale}/use-cases`} className="hover:text-blue-500">
                Use Cases
              </Link>
              <span>/</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-medium truncate max-w-[200px] sm:max-w-xs">
                {useCase.title}
              </span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Industry &amp; Audience Use Case
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
              {useCase.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
              {useCase.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 border-t border-zinc-200 dark:border-zinc-800/80 pt-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>{useCase.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>100% Free PDF Export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-10">
          {/* Prominent Parent Hub Banner — Connects Spoke to Landing Page Hub */}
          <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 dark:from-blue-950/40 dark:via-indigo-950/40 dark:to-violet-950/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" /> Master Tool Hub
              </div>
              <p className="font-extrabold text-zinc-900 dark:text-white text-base">
                Try the Primary {parentHub.title}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                {parentHub.desc}
              </p>
            </div>

            <Link
              href={`/${locale}${parentHub.href}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shrink-0 shadow-sm"
            >
              <span>Launch {parentHub.title}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div
            className="prose prose-zinc dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-zinc-200 dark:prose-h2:border-zinc-800 prose-h2:pb-2
              prose-p:leading-relaxed prose-p:text-zinc-700 dark:prose-p:text-zinc-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-table:w-full prose-table:my-6 prose-table:text-sm
              prose-th:bg-zinc-100 dark:prose-th:bg-zinc-900 prose-th:p-3 prose-th:text-left
              prose-td:p-3 prose-td:border-b prose-td:border-zinc-200 dark:prose-td:border-zinc-800"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Hub-and-Spoke Back Links */}
          <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap justify-between items-center gap-4">
            <Link
              href={`/${locale}/use-cases`}
              className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Use Cases
            </Link>

            <Link
              href={`/${locale}${parentHub.href}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>Explore {parentHub.title} Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
