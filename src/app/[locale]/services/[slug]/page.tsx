import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, SERVICES_DATA } from "@/data/services";
import { SEOEngine } from "@/services/seo";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Zap,
  ArrowLeft,
  FileText,
  HelpCircle,
  Layers,
  ChevronDown,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const locales = ["en"];
  return locales.flatMap((locale) =>
    SERVICES_DATA.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service Not Found", robots: { index: false } };
  }

  return SEOEngine.generateMetadata({
    title: service.title,
    metaTitle: service.metaTitle,
    description: service.metaDescription || service.description,
    slug: `/services/${service.slug}`,
    locale,
  }) as Metadata;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/${locale}/services/${service.slug}`;

  // ── JSON-LD Schemas ─────────────────────────────────────────────────────────
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.primaryKeyword,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Templix AI",
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon-512.png`,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((f, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: f.title,
          description: f.desc,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/${locale}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-8 sm:py-12">
      <Schema data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Services
          </Link>
        </div>

        {/* ── 1. Hero Section ── */}
        <section className="space-y-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Automated AI Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            {service.h1}
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {service.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={`/${locale}/templates`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Zap className="h-4 w-4" />
              {service.ctaText}
            </Link>
            <Link
              href={`/${locale}/tools`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold text-base hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <Layers className="h-4 w-4" />
              Try Free AI Tools
            </Link>
          </div>
        </section>

        {/* ── 2. Introduction Section ── */}
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            About This Service
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {service.introText}
          </p>
        </section>

        {/* ── 3. Why Choose Templix AI Section ── */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Why Choose Templix AI
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Built for speed, privacy, and publication-ready quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whyChooseUs.map((w, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-2 shadow-sm"
              >
                <div className="h-9 w-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                  {w.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Key Features Grid ── */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Service Capabilities &amp; Features
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Everything included in our automated document workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((f, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. How It Works Step-by-Step Flow ── */}
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              4 simple steps from template choice to instant export.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.howItWorks.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 space-y-2"
              >
                <span className="h-7 w-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  {step.step}
                </span>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Target Industries & Professions ── */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Who Should Use This Service
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Tailored workflows for diverse professions and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.targetIndustries.map((t, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-1.5 shadow-sm"
              >
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  {t.role}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. FAQ Section ── */}
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 p-4 space-y-2"
              >
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. Related Services & Inter-Cluster Links ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-3 shadow-sm">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-2">
              Related Services
            </h3>
            <div className="space-y-2">
              {service.relatedServices.map((rs, i) => (
                <Link
                  key={i}
                  href={rs.href}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline block"
                >
                  &rarr; {rs.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-3 shadow-sm">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-2">
              Popular Templates
            </h3>
            <div className="space-y-2">
              {service.relatedTemplates.map((rt, i) => (
                <Link
                  key={i}
                  href={rt.href}
                  className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 block truncate"
                >
                  &rarr; {rt.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-3 shadow-sm">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-2">
              Free AI Tools
            </h3>
            <div className="space-y-2">
              {service.relatedTools.map((tool, i) => (
                <Link
                  key={i}
                  href={tool.href}
                  className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 block truncate"
                >
                  &rarr; {tool.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. Bottom CTA Section ── */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white space-y-4 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Start Generating Professional Documents?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Choose a template or use our free AI writing assistant. Instant PDF &amp; Word exports with zero account required.
          </p>
          <div className="pt-2">
            <Link
              href={`/${locale}/templates`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors shadow"
            >
              Start Generating Documents Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
