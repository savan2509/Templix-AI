import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, PRODUCTS_DATA } from "@/data/products";
import { getProfessionsByCategory } from "@/features/templates/profession-content";
import { SEOEngine } from "@/services/seo";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Zap,
  HelpCircle,
  Layers,
  FileText,
  Briefcase,
  LayoutGrid,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const locales = ["en"];
  return locales.flatMap((locale) =>
    PRODUCTS_DATA.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return { title: "Product Not Found", robots: { index: false } };
  }

  return SEOEngine.generateMetadata({
    title: product.title,
    metaTitle: product.metaTitle,
    description: product.metaDescription || product.description,
    slug: `/products/${product.slug}`,
    locale,
  }) as Metadata;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/${locale}/products/${product.slug}`;

  // Fetch relevant role and industry variants for this product's category
  const roleVariants = getProfessionsByCategory(product.categorySlug);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    browserRequirements: "Requires a modern browser with JavaScript enabled",
    description: product.description,
    url: canonicalUrl,
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "820",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/${locale}/products` },
      { "@type": "ListItem", position: 3, name: product.title, item: canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-8 sm:py-12">
        <Schema data={[productSchema, breadcrumbSchema, faqSchema]} />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to All Products
            </Link>
            <Link
              href={`/${locale}/category/${product.categorySlug.replace(/s$/, "")}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              View Parent Category Hub &rarr;
            </Link>
          </div>

          {/* Hero Section */}
          <section className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Dedicated Software Product
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {product.h1}
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {product.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href={product.toolSlug ? `/${locale}/tools/${product.toolSlug}` : `/${locale}/templates/${product.categorySlug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Zap className="h-4 w-4" />
                Launch {product.title} Now
              </Link>
            </div>
          </section>

          {/* Intro */}
          <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Product Overview
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {product.introText}
            </p>
          </section>

          {/* Features */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center">
              Key Features &amp; Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white">{f.title}</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Role & Industry Variants Interlinking */}
          {roleVariants.length > 0 && (
            <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    Industry &amp; Role Tailored Templates
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Explore Specific Role &amp; Profession Landing Pages
                  </h2>
                </div>
                <Link
                  href={`/${locale}/category/${product.categorySlug.replace(/s$/, "")}`}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Category Hub &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {roleVariants.slice(0, 6).map(({ slug: variantSlug, entry }) => (
                  <Link
                    key={variantSlug}
                    href={`/${locale}/templates/${product.categorySlug}/${variantSlug}`}
                    className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 hover:border-blue-500 hover:bg-white dark:hover:bg-zinc-900 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">
                        {entry.profession}
                      </span>
                      <h3 className="font-bold text-xs text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {entry.metaTitle}
                      </h3>
                    </div>
                    <span className="mt-3 text-[11px] font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                      Use Template &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Templates */}
          {product.relatedTemplates && product.relatedTemplates.length > 0 && (
            <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Featured Document Templates for {product.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.relatedTemplates.map((t, i) => (
                  <Link
                    key={i}
                    href={`/${locale}${t.href}`}
                    className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-between"
                  >
                    <span>{t.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* How it Works */}
          <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.howItWorks.map((step) => (
                <div key={step.step} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 space-y-2">
                  <span className="h-7 w-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-white">{step.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {product.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 space-y-2">
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">{faq.question}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
