import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { db, isDbOnline } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TemplateDetailView from "@/components/TemplateDetailView";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import { CATEGORIES } from "@/constants";
import { FileText, ArrowRight, Home, Sparkles, AlertCircle } from "lucide-react";
import { SEOEngine } from "@/services/seo";
import { getDictionary } from "@/lib/i18n";
import { allFallbackTemplates } from "@/data/templates-fallback";

// Template slug → preview image mapping
const TEMPLATE_IMAGES: Record<string, string> = {
  "invoice-freelancer":          "/invoice-freelancer-preview.png",
  "invoice-small-business":      "/invoice-small-business-preview.svg",
  "invoice-consulting":          "/invoice-consulting-preview.svg",
  "invoice-contractor":          "/invoice-contractor-preview.svg",
  "invoice-graphic-designer":    "/invoice-graphic-designer-preview.svg",
  "invoice-web-developer":       "/invoice-web-developer-preview.svg",
  "invoice-cleaning-service":    "/invoice-cleaning-service-preview.svg",
  "invoice-photography":         "/invoice-photography-preview.svg",
  "invoice-hvac-service":        "/invoice-hvac-service-preview.svg",
  "invoice-plumbing":            "/invoice-plumbing-preview.svg",
  "invoice-timesheet":           "/invoice-timesheet-preview.svg",
  "invoice-milestone":           "/invoice-milestone-preview.svg",
  "invoice-receipt":             "/invoice-receipt-preview.svg",
  "invoice-rental":              "/invoice-rental-preview.svg",
  "invoice-estimate":            "/invoice-estimate-preview.svg",
  "invoice-purchase-order":      "/invoice-purchase-order-preview.svg",
  "resume-software-engineer":    "/resume-template-preview.png",
  "resume-data-analyst":         "/resume-data-analyst-preview.svg",
  "resume-project-manager":      "/resume-project-manager-preview.svg",
  "resume-graphic-designer":     "/resume-graphic-designer-preview.svg",
  "resume-registered-nurse":     "/resume-registered-nurse-preview.svg",
  "resume-teacher":              "/resume-teacher-preview.svg",
  "resume-marketing-manager":    "/resume-marketing-manager-preview.svg",
  "resume-customer-service":     "/resume-customer-service-preview.svg",
  "resume-accountant":           "/resume-accountant-preview.svg",
  "resume-sales-representative": "/resume-sales-representative-preview.svg",
  "freelance-agreement":         "/contract-freelance-agreement-preview.svg",
  "employment-contract":         "/contract-employment-preview.svg",
  "freelance-contract":          "/contract-freelance-contract-preview.svg",
  "independent-contractor-agreement": "/contract-independent-contractor-preview.svg",
  "service-agreement":           "/contract-service-agreement-preview.svg",
  "nda-template":                "/contract-nda-preview.svg",
  "consulting-agreement":        "/contract-consulting-agreement-preview.svg",
  "rental-agreement":            "/contract-rental-preview.svg",
  "sales-contract":              "/contract-sales-preview.svg",
  "partnership-agreement":       "/contract-partnership-preview.svg",
  "vendor-agreement":            "/contract-vendor-preview.svg",
  "business-proposal":           "/proposal-business-preview.svg",
  "project-proposal":            "/proposal-project-preview.svg",
  "marketing-proposal":           "/proposal-marketing-preview.svg",
  "web-design-proposal":          "/proposal-web-design-preview.svg",
  "software-development-proposal": "/proposal-software-development-preview.svg",
  "consulting-proposal":          "/proposal-consulting-preview.svg",
  "digital-marketing-proposal":   "/proposal-digital-marketing-preview.svg",
  "construction-proposal":        "/proposal-construction-preview.svg",
  "event-proposal":               "/proposal-event-preview.svg",
  "grant-proposal":               "/proposal-grant-preview.svg",
  "cover-letter":                "/letter-cover-preview.svg",
  "resignation-letter":          "/letter-resignation-preview.svg",
  "recommendation-letter":       "/letter-recommendation-preview.svg",
  "offer-letter":                "/letter-offer-preview.svg",
  "business-letter":             "/letter-business-preview.svg",
  "complaint-letter":            "/letter-complaint-preview.svg",
  "thank-you-letter":            "/letter-thank-you-preview.svg",
  "request-letter":              "/letter-request-preview.svg",
  "appointment-letter":          "/letter-appointment-preview.svg",
  "experience-letter":           "/letter-experience-preview.svg",
};

// Category-level fallback images — now using rich illustrated covers
const CATEGORY_IMAGES: Record<string, string> = {
  "invoices":      "/cat-invoices-cover.jpg",
  "resumes":       "/cat-resumes-cover.jpg",
  "contracts":     "/cat-contracts-cover.jpg",
  "proposals":     "/cat-proposals-cover.jpg",
  "letters":       "/cat-letters-cover.jpg",
  "cover-letters": "/cat-letters-cover.jpg",
  "reports":        "/cat-reports-cover.jpg",
  "business-plans": "/cat-business-plans-cover.jpg",
  "quotations":     "/cat-quotations-cover.jpg",
};

function getTemplateImage(slug: string, categorySlug: string): string | null {
  return TEMPLATE_IMAGES[slug] ?? CATEGORY_IMAGES[categorySlug] ?? null;
}

interface PageProps {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

// Capitalize helper
const capitalize = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Next.js Dynamic SEO Metadata Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const locale = resolvedParams.locale || "en";
  const lastSegment = slug[slug.length - 1] || "";

  // 1. Check if rendering a template detail preview
  const isTemplateDetail = allFallbackTemplates.some((t) => t.slug === lastSegment);

  if (isTemplateDetail) {
    const template = allFallbackTemplates.find((t) => t.slug === lastSegment)!;
    // Titles may already end in "Template"; strip it so we never double it up.
    const baseName = template.title.replace(/\s+Template$/i, "").trim();
    return SEOEngine.generateMetadata({
      title: `${baseName} Template | Customize & Download`,
      description: `Free customizable ${baseName.toLowerCase()} template. Fill in variables, edit blocks with AI, and download PDF or Word format in minutes.`,
      slug: `/templates/${template.categorySlug}/${template.slug}`,
      locale,
      categoryName: template.categoryName,
      categorySlug: template.categorySlug,
      image: CATEGORIES.some((c) => c.slug === template.categorySlug)
        ? `/cat-${template.categorySlug}-cover.jpg`
        : undefined,
      isTemplate: true,
    }) as Metadata;
  }

  // 2. Otherwise render category list metadata
  const category = slug[0] ? capitalize(slug[0]) : "";
  const niche = slug[1] ? capitalize(slug[1]) : "";
  const location = slug[2] ? slug[2].toUpperCase() : "";
  const subdivision = slug[3] ? capitalize(slug[3]) : "";
  const experience = slug[4] ? capitalize(slug[4]) : "";

  // Singular, grammatically correct adjective per category — "Invoice Templates",
  // not "Invoices Templates" — matching how people actually search.
  const SINGULAR: Record<string, string> = {
    invoices: "Invoice", resumes: "Resume", contracts: "Contract", proposals: "Proposal",
    letters: "Letter", reports: "Report", "business-plans": "Business Plan",
    quotations: "Quotation", "cover-letters": "Cover Letter",
  };
  const categoryAdjective = slug[0] ? (SINGULAR[slug[0]] || category.replace(/Templates?$/i, "").trim()) : "";

  let pageTitle = "Free Business Document Templates";
  if (category) {
    const parts = [
      "Free",
      experience,
      niche,
      categoryAdjective,
      "Templates",
      location ? `in ${location}` : "",
      subdivision
    ].filter(Boolean);
    pageTitle = parts.join(" ");
  }

  return SEOEngine.generateMetadata({
    title: pageTitle,
    description: `Download, edit, and create ${pageTitle.toLowerCase()}. Access clean, print-ready, professional layouts. Customize with our built-in AI document editor.`,
    slug: `/templates${slug.length > 0 ? "/" + slug.join("/") : ""}`,
    locale,
    categoryName: category || undefined,
    categorySlug: slug[0] || undefined,
    image: CATEGORIES.some((c) => c.slug === slug[0])
      ? `/cat-${slug[0]}-cover.jpg`
      : "/cat-all-docs-cover.jpg",
  }) as Metadata;
}

export default async function TemplatesPage({ params, searchParams }: PageProps) {
  const { locale, slug = [] } = await params;
  const { q = "", page = "1" } = await searchParams;

  const dict = getDictionary(locale);
  const t = dict.templates;
  const common = dict.common;

  // Canonicalize the short /templates/<slug> URL to /templates/<category>/<slug>
  // so the same page isn't served on two URLs (splitting crawl budget / link equity).
  if (slug.length === 1 && !CATEGORIES.some((c) => c.slug === slug[0])) {
    const canonicalTemplate = allFallbackTemplates.find((t) => t.slug === slug[0]);
    if (canonicalTemplate) {
      permanentRedirect(`/${locale}/templates/${canonicalTemplate.categorySlug}/${canonicalTemplate.slug}`);
    }
  }

  const categorySlug = slug[0] || null;
  const nicheSlug = slug[1] || null;
  const locationSlug = slug[2] || null;
  const subdivisionSlug = slug[3] || null;
  const experienceSlug = slug[4] || null;

  const lastSegment = slug[slug.length - 1] || null;

  // 1. Detect if target matches a single template preview
  let activeTemplate: any = null;
  if (lastSegment) {
    activeTemplate = allFallbackTemplates.find((t) => t.slug === lastSegment) || null;

    if (isDbOnline && process.env.DATABASE_URL) {
      try {
        const dbTemplate = await db.template.findUnique({
          where: { slug: lastSegment },
          include: { category: true }
        });
        if (dbTemplate) {
          activeTemplate = {
            id: dbTemplate.id,
            slug: dbTemplate.slug,
            title: dbTemplate.title,
            description: dbTemplate.description,
            isPremium: dbTemplate.isPremium,
            categorySlug: dbTemplate.category.slug,
            categoryName: dbTemplate.category.name,
            content: dbTemplate.content as any
          };
        }
      } catch (err) {
        console.warn("DB error fetching template detail, using mock fallback.");
      }
    }
  }

  // Return a real 404 for a garbage top-level path (e.g. /templates/random-xyz)
  // that is neither a known category nor a known template — avoids indexable
  // soft-404 / doorway pages. Valid category listings and their long-tail niche
  // pages (/templates/invoices/...) remain intentionally rendered.
  const isKnownCategory = categorySlug ? CATEGORIES.some((c) => c.slug === categorySlug) : true;
  if (categorySlug && !isKnownCategory && !activeTemplate) {
    notFound();
  }

  // If active template detail view, render preview template detail screen
  if (activeTemplate) {
    const breadcrumbsJson = SEOEngine.generateBreadcrumbSchema({
      title: activeTemplate.title,
      description: activeTemplate.description,
      slug: `/${activeTemplate.slug}`,
      locale,
      categoryName: activeTemplate.categoryName,
      categorySlug: activeTemplate.categorySlug,
      isTemplate: true,
    });

    const templateSchemaJson = SEOEngine.generateTemplateSchema({
      title: activeTemplate.title,
      description: activeTemplate.description,
      slug: `/${activeTemplate.slug}`,
      locale,
    });

    const internalLinking = SEOEngine.generateInternalLinks(
      activeTemplate.categorySlug,
      activeTemplate.slug,
      locale
    );

    return (
      <>
        <Navbar />
        <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-10 transition-colors">
          {/* JSON-LD structured data — native script tag per Next.js JSON-LD guide */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJson).replace(/</g, "\\u003c") }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(templateSchemaJson).replace(/</g, "\\u003c") }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-medium">
              <Link href={`/${locale}`} className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                <Home className="h-3 w-3" />
                <span>{common.homeBreadcrumb}</span>
              </Link>
              <span>/</span>
              <Link href={`/${locale}/templates`} className="hover:text-blue-500 transition-colors">
                {t.templatesBreadcrumb}
              </Link>
              <span>/</span>
              <Link href={`/${locale}/templates/${activeTemplate.categorySlug}`} className="hover:text-blue-500 transition-colors">
                {common.categoryNames[activeTemplate.categorySlug as keyof typeof common.categoryNames] ?? activeTemplate.categoryName}
              </Link>
              <span>/</span>
              <span className="text-zinc-600 dark:text-zinc-300 font-semibold truncate max-w-[120px]">
                {activeTemplate.title}
              </span>
            </nav>

            {/* Header detail */}
            <div className="space-y-2.5 max-w-4xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  {common.categoryNames[activeTemplate.categorySlug as keyof typeof common.categoryNames] ?? activeTemplate.categoryName}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">
                  {common.free}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                {/* Titles may already end in "Template"; strip it so the noun below never doubles it. */}
                {activeTemplate.title.replace(/\s+Template$/i, "").trim()} {t.templateNoun}
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {activeTemplate.description} {t.detailIntroExtra}
              </p>
            </div>

            {/* Client View Component */}
            <TemplateDetailView locale={locale} template={activeTemplate} />

            {/* Contextual Internal Linking Grids */}
            <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                {t.exploreRelatedResources}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">
                    {t.relatedTemplates}
                  </h4>
                  <ul className="space-y-2">
                    {internalLinking.relatedTemplates.map((t) => (
                      <li key={t.href}>
                        <Link href={t.href} className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                          {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">
                    {t.writingGuidesBlog}
                  </h4>
                  <ul className="space-y-2">
                    {internalLinking.relatedBlogs.map((b) => (
                      <li key={b.href}>
                        <Link href={b.href} className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                          {b.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">
                    {t.popularCategories}
                  </h4>
                  <ul className="space-y-2">
                    {internalLinking.relatedCategories.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // 2. Otherwise default: render Category/Templates listing page
  const categoryName = categorySlug ? capitalize(categorySlug) : "";
  const nicheName = nicheSlug ? capitalize(nicheSlug) : "";
  const locationName = locationSlug ? locationSlug.toUpperCase() : "";
  const subdivisionName = subdivisionSlug ? capitalize(subdivisionSlug) : "";
  const experienceName = experienceSlug ? capitalize(experienceSlug) : "";

  // Singular adjective per category so the H1 reads "Free Invoice Templates",
  // not the grammatically wrong "Free Invoices Templates".
  const SINGULAR_HEADING: Record<string, string> = {
    invoices: "Invoice", resumes: "Resume", contracts: "Contract", proposals: "Proposal",
    letters: "Letter", reports: "Report", "business-plans": "Business Plan",
    quotations: "Quotation", "cover-letters": "Cover Letter",
  };
  let pageHeading = t.hubHeading;
  if (categoryName) {
    const adjective = (categorySlug && SINGULAR_HEADING[categorySlug]) || categoryName.replace(/Templates?$/i, "").trim();
    const parts = [
      t.freeWord,
      experienceName,
      nicheName,
      adjective,
      t.templatesWord,
      locationName ? `${t.inWord} ${locationName}` : "",
      subdivisionName
    ].filter(Boolean);
    pageHeading = parts.join(" ");
  }



  // Load list from db or fallback
  let templates: any[] = [];
  let isFallbackUsed = false;

  try {
    if (isDbOnline && process.env.DATABASE_URL) {
      let catId: string | null = null;
      if (categorySlug) {
        const cat = await db.category.findUnique({ where: { slug: categorySlug } });
        if (cat) catId = cat.id;
      }

      const dbTemplates = await db.template.findMany({
        where: {
          ...(catId ? { categoryId: catId } : {}),
          ...(q ? {
            OR: [
              { title: { contains: q, mode: "insensitive" } },
              { description: { contains: q, mode: "insensitive" } }
            ]
          } : {})
        },
        include: { category: true }
      });

      if (dbTemplates && dbTemplates.length > 0) {
        templates = dbTemplates.map((t) => ({
          id: t.id,
          slug: t.slug,
          title: t.title,
          description: t.description,
          isPremium: t.isPremium,
          categorySlug: t.category.slug,
          categoryName: t.category.name,
          content: t.content as any
        }));
      } else {
        isFallbackUsed = true;
      }
    } else {
      isFallbackUsed = true;
    }
  } catch (err) {
    console.warn("DB Query bypass in Templates page list, rendering fallbacks.");
    isFallbackUsed = true;
  }

  if (isFallbackUsed) {
    templates = allFallbackTemplates;
    if (categorySlug) {
      templates = templates.filter((t) => t.categorySlug === categorySlug);
    }
    if (q) {
      templates = templates.filter(
        (t) =>
          t.title.toLowerCase().includes(q.toLowerCase()) ||
          t.description.toLowerCase().includes(q.toLowerCase())
      );
    }
  }

  // Paginate templates
  const itemsPerPage = 12;
  const totalItems = templates.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.max(1, parseInt(page || "1", 10));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTemplates = templates.slice(startIndex, startIndex + itemsPerPage);

  const categoryDisplayName = categorySlug
    ? (common.categoryNames[categorySlug as keyof typeof common.categoryNames] ?? categoryName)
    : categoryName;

  const relatedSearches = categorySlug
    ? [
        { label: `${categoryDisplayName} ${t.rsForFreelancers}`, url: `/${locale}/templates/${categorySlug}/freelancer` },
        { label: `${t.rsLegal} ${categoryDisplayName}`, url: `/${locale}/templates/${categorySlug}/legal` },
        { label: `${categoryDisplayName} ${t.inWord} USA`, url: `/${locale}/templates/${categorySlug}/general/usa` },
        { label: `${categoryDisplayName} ${t.inWord} Canada`, url: `/${locale}/templates/${categorySlug}/general/canada` },
      ]
    : [
        { label: t.rsInvoiceTemplates, url: `/${locale}/templates/invoices` },
        { label: t.rsResumeLayouts, url: `/${locale}/templates/resumes` },
        { label: t.rsFreelancerAgreements, url: `/${locale}/templates/contracts/freelancer` },
        { label: t.rsMarketingProposals, url: `/${locale}/templates/proposals` },
      ];

  const breadcrumbElements = [
    { name: "Home", item: `/${locale}` },
    { name: "Templates", item: `/${locale}/templates` },
  ];

  if (categorySlug) {
    breadcrumbElements.push({ name: categoryName, item: `/${locale}/templates/${categorySlug}` });
  }
  if (nicheSlug) {
    breadcrumbElements.push({ name: nicheName, item: `/${locale}/templates/${categorySlug}/${nicheSlug}` });
  }

  function siteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL || "https://templix-ai.vercel.app"}${path}`;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements.map((elem, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": elem.name,
      "item": `${siteUrl(elem.item)}`
    }))
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-10 transition-colors">
        {/* JSON-LD structured data — native script tag per Next.js JSON-LD guide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            <Link href={`/${locale}`} className="hover:text-blue-500 flex items-center gap-1 transition-colors">
              <Home className="h-3 w-3" />
              <span>{common.homeBreadcrumb}</span>
            </Link>
            <span>/</span>
            <Link href={`/${locale}/templates`} className="hover:text-blue-500 transition-colors">
              {t.templatesBreadcrumb}
            </Link>
            {categorySlug && (
              <>
                <span>/</span>
                <Link
                  href={`/${locale}/templates/${categorySlug}`}
                  className="hover:text-blue-500 transition-colors truncate max-w-[120px]"
                >
                  {categoryDisplayName}
                </Link>
              </>
            )}
            {nicheSlug && (
              <>
                <span>/</span>
                <span className="text-zinc-600 dark:text-zinc-300 font-semibold truncate max-w-[120px]">
                  {nicheName}
                </span>
              </>
            )}
          </nav>

          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {pageHeading}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-3xl">
              {t.hubSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* ── Sidebar ── */}
            <aside className="lg:col-span-1 space-y-5">

              {/* All Documents card */}
              <Link
                href={`/${locale}/templates`}
                className={`group flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                  !categorySlug
                    ? "border-blue-400/60 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-600/40 shadow-sm"
                    : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-400/50 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <div className="relative h-12 w-16 shrink-0 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
                  <Image src="/cat-all-docs-cover.jpg" alt="All documents" fill className="object-cover" sizes="64px" />
                </div>
                <div className="min-w-0">
                  <p className={`font-bold text-sm truncate ${ !categorySlug ? "text-blue-600 dark:text-blue-400" : "text-zinc-800 dark:text-zinc-200" }`}>
                    {t.allDocuments}
                  </p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">{allFallbackTemplates.length} {common.templatesLabel}</p>
                </div>
                {!categorySlug && (
                  <span className="ml-auto shrink-0 w-1.5 h-6 rounded-full bg-blue-500" />
                )}
              </Link>

              {/* Category cards */}
              <div className="space-y-2.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 px-1">{t.documentTypes}</p>
                {CATEGORIES.map((cat) => {
                  const isActive = categorySlug === cat.slug;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/${locale}/templates/${cat.slug}`}
                      className={`group flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                        isActive
                          ? "border-blue-400/60 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-600/40 shadow-sm"
                          : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-400/50 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="relative h-12 w-16 shrink-0 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={cat.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <p className={`font-bold text-sm truncate ${ isActive ? "text-blue-600 dark:text-blue-400" : "text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400" } transition-colors`}>
                          {common.categoryNames[cat.slug as keyof typeof common.categoryNames] ?? cat.name}
                        </p>
                        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">{common.categoryDescriptions[cat.slug as keyof typeof common.categoryDescriptions] ?? cat.description}</p>
                        <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                          {allFallbackTemplates.filter((tpl) => tpl.categorySlug === cat.slug).length} {common.templatesLabel}
                        </p>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <span className="ml-auto shrink-0 w-1.5 h-6 rounded-full bg-blue-500" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Related Searches box */}
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                <h3 className="font-bold text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  {t.relatedSearchesTitle}
                </h3>
                <div className="flex flex-col gap-2">
                  {relatedSearches.map((rel) => (
                    <Link
                      key={rel.label}
                      href={rel.url}
                      className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-500" />
                      {rel.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <section className="lg:col-span-3 space-y-6">
              {templates.length === 0 ? (
                <div className="p-12 text-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-3">
                  <AlertCircle className="h-10 w-10 text-zinc-400 mx-auto" />
                  <h3 className="font-bold text-zinc-800 dark:text-zinc-200">{t.noTemplatesFound}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    {t.noTemplatesDesc}
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                  {paginatedTemplates.map((temp) => {
                    return (
                    <div
                      key={temp.id}
                      className="group flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {/* Card Thumbnail — a mini of the live document preview so
                          the cover matches the detail page for every module */}
                      <div className="aspect-[4/5] w-full border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden group-hover:opacity-95 transition-opacity">
                        <TemplateThumbnail template={temp} />

                        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-[8px] uppercase tracking-wider z-10 shadow-sm">
                          {common.free}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                            {common.categoryNames[temp.categorySlug as keyof typeof common.categoryNames] ?? temp.categoryName}
                          </span>
                          <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                            {temp.title}
                          </h3>
                          <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed line-clamp-2">
                            {temp.description}
                          </p>
                        </div>

                        {/* Redirects to category/slug path representing specific preview page */}
                        <Link
                          href={`/${locale}/templates/${temp.categorySlug}/${temp.slug}`}
                          className="w-full h-10 rounded-xl bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-800 text-white font-semibold text-xs flex items-center justify-center gap-1 shadow-sm transition-colors"
                        >
                          <span>{t.previewDetails}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ); })}

                </div>

                {/* Simple Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-8">
                    {Array.from({ length: totalPages }).map((_, idx) => {
                      const p = idx + 1;
                      const isActive = p === currentPage;
                      const queryParams = new URLSearchParams();
                      if (q) queryParams.set("q", q);
                      queryParams.set("page", String(p));
                      const urlPath = slug.length > 0 ? `/templates/${slug.join("/")}` : "/templates";
                      return (
                        <Link
                          key={p}
                          href={`/${locale}${urlPath}?${queryParams.toString()}`}
                          className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all border ${
                            isActive
                              ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                              : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300"
                          }`}
                        >
                          {p}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </>
            )}
            </section>

            {/* Template Compliance & Structuring Standards */}
            <section className="pt-16 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
              <div className="rounded-2xl bg-zinc-100 dark:bg-zinc-900/40 p-6 md:p-8 space-y-4">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {t.complianceHeading}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {t.complianceP1}<a href={`/${locale}/editor/new`} className="text-blue-600 dark:text-blue-400 hover:underline">{t.complianceEditorLink}</a>{t.complianceP2}<a href="https://www.adobe.com/acrobat/about-pdf.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{t.compliancePdfLink}</a>{t.complianceP3}<a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{t.complianceSchemaLink}</a>{t.complianceP4}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FAQ locale={locale} />
      <Footer />
    </>
  );
}
