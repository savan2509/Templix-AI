import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import { SERVICES_DATA } from "@/data/services";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,
  Clock,
  Briefcase,
  Layers,
} from "lucide-react";


import { CATALOG_STATS } from "@/lib/catalog-stats";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "AI Document & Writing Services",
    metaTitle: "AI Document & Writing Services | Templix AI",
    description: "Explore Templix AI's automated document services — resume writing, invoice creation, contract drafting, proposal writing, and AI content generation.",
    slug: "/services",
    locale,
  }) as Metadata;
}

export default async function ServicesHubPage({ params }: PageProps) {
  const { locale } = await params;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Templix AI Document & Writing Services",
    description: "Automated document generation and AI writing services for invoices, resumes, contracts, proposals, and business reports.",
    url: `${siteConfig.url}/${locale}/services`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: SERVICES_DATA.length,
      itemListElement: SERVICES_DATA.map((s, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: s.title,
        url: `${siteConfig.url}/${locale}/services/${s.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/${locale}/services` },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-12 sm:py-16">
        <Schema data={[collectionSchema, breadcrumbSchema]} />


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Automated Document Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            AI Document &amp; Content Writing Services
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Generate, customize, and export professional business documents in seconds. Powered by client-side browser engines and AI assistance — 100% free with no sign-up required.
          </p>
        </div>

        {/* Feature Badges Highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <p className="font-bold text-sm text-zinc-900 dark:text-white">Browser Privacy</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">100% client-side memory</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0" />
            <div>
              <p className="font-bold text-sm text-zinc-900 dark:text-white">ATS &amp; Tax Compliant</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">HRXML &amp; GST/VAT rules</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <Zap className="h-6 w-6 text-amber-500 shrink-0" />
            <div>
              <p className="font-bold text-sm text-zinc-900 dark:text-white">Instant Export</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Vector PDF &amp; Word .docx</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400 shrink-0" />
            <div>
              <p className="font-bold text-sm text-zinc-900 dark:text-white">No Account Needed</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Zero mandatory sign-up</p>
            </div>
          </div>
        </div>

        {/* Services Grid (10 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full">
                    Free Online Service
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/${locale}/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {service.secondaryKeywords.slice(0, 3).map((kw, i) => (
                    <span key={i} className="text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline inline-flex items-center gap-1">
                  Access Service
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">PDF &amp; DOCX</span>
              </div>
            </div>
          ))}
        </div>

        {/* Structural Value Banner */}
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white max-w-2xl mx-auto">
            Need Custom Document Templates or Specialized Formats?
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Explore our library of {CATALOG_STATS.totalTemplatesRounded} customizable templates across invoices, resumes, contracts, proposals, and letters or use our free AI writing tools.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={`/${locale}/templates`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Briefcase className="h-4 w-4" />
              Browse All Templates
            </Link>
            <Link
              href={`/${locale}/tools`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <Layers className="h-4 w-4" />
              Explore Free AI Tools
            </Link>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </>
  );
}

