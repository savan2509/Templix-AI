import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Schema from "@/components/seo/Schema";
import Breadcrumb from "@/components/seo/Breadcrumb";
import FAQ from "@/components/FAQ";
import RelatedContent from "@/components/seo/RelatedContent";
import { INDUSTRIES_DATA, getIndustryBySlug } from "@/data/industries";
import {
  generateSeoMetadata,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateItemListSchema,
  getRelatedGuides,
  getRelatedTools,
  getRelatedTemplates,
} from "@/lib/seo";
import {
  Building2,
  HardHat,
  Laptop,
  Code,
  Briefcase,
  HeartPulse,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Edit3,
} from "lucide-react";

interface IndustryPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return generateSeoMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${slug}`,
    locale,
    category: industry.name,
    type: "industry",
    tags: [industry.slug, ...industry.featuredCategories, "templates", "forms"],
  });
}

const ICON_MAP: Record<string, any> = {
  Building2,
  HardHat,
  Laptop,
  Code,
  Briefcase,
  HeartPulse,
};

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { locale, slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const Icon = ICON_MAP[industry.iconName] || Briefcase;

  const breadcrumbs = [
    { label: "Home", href: `/${locale}` },
    { label: "Industries", href: `/${locale}/industries` },
    { label: industry.name, href: `/${locale}/industries/${industry.slug}` },
  ];

  // Generate Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/en" },
    { name: "Industries", url: "/en/industries" },
    { name: industry.name, url: `/en/industries/${industry.slug}` },
  ]);

  const faqSchema = generateFAQSchema(industry.faqs);

  const templateListSchema = generateItemListSchema({
    name: `${industry.name} Templates`,
    description: `Curated document templates for ${industry.name}`,
    url: `/en/industries/${industry.slug}`,
    items: industry.recommendedTemplates.map((tmpl, idx) => ({
      name: tmpl.title,
      url: `/en/templates/${tmpl.category}/${tmpl.slug}`,
      position: idx + 1,
    })),
  });

  // Automated internal linking resources
  const relatedTemplates = getRelatedTemplates(industry.slug, industry.featuredCategories[0] || "invoices", 6);
  const relatedGuides = getRelatedGuides(industry.slug, 4);
  const relatedTools = getRelatedTools(industry.slug, 3);

  return (
    <>
      <Navbar />
      <Schema data={[breadcrumbSchema, faqSchema, templateListSchema].filter(Boolean)} />

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 py-10 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumb items={breadcrumbs} />

          {/* Hero Section */}
          <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-14 shadow-sm overflow-hidden">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                <Icon className="h-4 w-4" />
                Industry Documentation Suite
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
                {industry.headline}
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {industry.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href={`/${locale}/templates`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-sm transition-all hover:scale-105"
                >
                  <Sparkles className="h-4 w-4" />
                  Browse All {industry.name} Templates
                </Link>
                <Link
                  href={`/${locale}/editor/invoice-freelancer`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                >
                  <Edit3 className="h-4 w-4" />
                  Launch AI Document Editor
                </Link>
              </div>
            </div>
          </div>

          {/* Recommended Templates Grid */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Essential {industry.name} Templates
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Click any template to preview, customize, and export to PDF or DOCX.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.recommendedTemplates.map((tmpl, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/50 shadow-xs hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                        {tmpl.category}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Free
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tmpl.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                      Pre-formatted for {industry.name.toLowerCase()} requirements. Includes printable PDF and editable DOCX formats.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                    <Link
                      href={`/${locale}/templates/${tmpl.category}/${tmpl.slug}`}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:underline"
                    >
                      <span>Preview Template</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href={`/${locale}/editor/${tmpl.slug}`}
                      className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-blue-600 hover:text-white transition-colors"
                      title="Edit template directly"
                    >
                      <Edit3 className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Content / Automated Internal Links (Points 11, 12, 22) */}
          <RelatedContent
            relatedTemplates={relatedTemplates}
            relatedGuides={relatedGuides}
            relatedTools={relatedTools}
            title={`${industry.name} Guides & Recommended Tools`}
          />

          {/* FAQs Section */}
          {industry.faqs && industry.faqs.length > 0 && (
            <section className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-12 shadow-xs">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Frequently Asked Questions about {industry.name} Documents
              </h2>
              <FAQ locale={locale} items={industry.faqs} />

            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
