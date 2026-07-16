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
import Schema from "@/components/seo/Schema";
import FavoriteButton from "@/components/FavoriteButton";
import { createClient } from "@/lib/supabase/server";
import { CATEGORIES } from "@/constants";
import { FileText, ArrowRight, Home, Sparkles, AlertCircle } from "lucide-react";
import { SEOEngine } from "@/services/seo";
import { getDictionary, INTL_LOCALE } from "@/lib/i18n";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { siteConfig } from "@/config/site";
import { getCategoryFaqs, faqPageSchema } from "@/data/faq-category";
import { getTemplateCopy, getTemplateFaqs, getHubIntro, getCategoryDefinition } from "@/features/templates/template-content";

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
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
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

    // Titles ending in "Format" already name the document — appending
    // "Template" produced "GST Invoice Format Template".
    const docName = /\bformats?$/i.test(baseName) ? baseName : `${baseName} Template`;

    // The layout appends " | Templix AI" (13 chars), so the metaTitle must stay
    // under 47 for the rendered <title> to land in the 50-60 character budget.
    // Lead with the "No Sign-Up" differentiator (our biggest CTR hook vs Canva/
    // Zety), fitting the format keywords (PDF/Word) alongside it where the budget
    // allows, and falling back to the format-only variant for longer names.
    const candidates = [
      `Free ${docName} — PDF & No Sign-Up`,
      `Free ${docName} — No Sign-Up`,
      `Free ${docName} (PDF & Word)`,
      `Free ${docName} — PDF & Word`,
      `Free ${docName} 2026`,
      `Free ${docName}`,
      docName,
    ];
    const metaTitle =
      candidates.find((c) => c.length >= 37 && c.length <= 47) ??
      candidates.find((c) => c.length <= 47) ??
      docName;

    return SEOEngine.generateMetadata({
      title: `${baseName} Template | Customize & Download`,
      metaTitle,
      description: `Download a free ${baseName.toLowerCase()} template. Editable fields, PDF and Word export, no sign-up and no watermark. Fill it in and send it in minutes.`,
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

  // Lead with the "No Sign-Up" differentiator, then fall back to the format/year
  // variants searchers also use ("…PDF & Word", "…2026"). Only append what fits
  // inside the 47-char budget (the layout adds " | Templix AI"); longer titles
  // (e.g. niche/location variants) keep the bare, already-descriptive title.
  const withBoth = `${pageTitle} — PDF & No Sign-Up`;
  const withNoSignup = `${pageTitle} — No Sign-Up`;
  const withFormat = `${pageTitle} 2026 — PDF & Word`;
  const withYear = `${pageTitle} 2026`;
  const metaTitle =
    [withBoth, withNoSignup, withFormat, withYear].find((c) => c.length <= 47) ?? pageTitle;

  // Paginated pages self-canonicalize (page 2 → its own ?page=2 URL) so Google
  // crawls templates on pages 2+; page 1 keeps the clean category URL. A search
  // (?q=) result canonicalizes to the clean category to avoid infinite variants.
  const slugPath = `/templates${slug.length > 0 ? "/" + slug.join("/") : ""}`;
  const { page: pageParam } = await searchParams;
  const pageNum = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const canonical =
    pageNum > 1 ? `${siteConfig.url}/${locale}${slugPath}?page=${pageNum}` : undefined;

  return SEOEngine.generateMetadata({
    title: pageTitle,
    metaTitle,
    canonical,
    description: `Download free ${pageTitle.replace(/^Free /, "").toLowerCase()}. Editable, print-ready layouts that export to PDF and Word — no sign-up and no watermark.`,
    slug: slugPath,
    locale,
    categoryName: category || undefined,
    categorySlug: slug[0] || undefined,
    image: CATEGORIES.some((c) => c.slug === slug[0])
      ? `/cat-${slug[0]}-cover.jpg`
      : "/cat-all-docs-cover.jpg",
  }) as Metadata;
}

// ── Server component wrapper for FavoriteButton ───────────────────────────────
// Fetches the initial favorite state from Supabase server-side so the button
// renders with the correct filled/empty heart on first paint (no flicker).
async function FavoriteButtonWrapper({
  templateSlug,
  locale,
}: {
  templateSlug: string;
  locale: string;
}) {
  let initialFavorited = false;
  try {
    const supabase = await createClient();
    if (supabase) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from("favorites")
          .select("id")
          .eq("user_id", user.id)
          .eq("template_slug", templateSlug)
          .single();
        initialFavorited = !!data;
      }
    }
  } catch {
    // Silently skip — user simply starts with unfavorited state
  }
  return (
    <FavoriteButton
      templateSlug={templateSlug}
      locale={locale}
      initialFavorited={initialFavorited}
      size="md"
    />
  );
}

export default async function TemplatesPage({ params, searchParams }: PageProps) {
  const { locale, slug = [] } = await params;
  const { q = "", page = "1" } = await searchParams;

  const dict = getDictionary(locale);
  const t = dict.templates;
  const common = dict.common;

  // Templates merged into a near-identical equivalent. Their retired URLs
  // 301-redirect to the kept template so inbound links and rankings survive the
  // merge (freelance-contract → freelance-agreement, residential-lease → rental).
  const MERGED_TEMPLATE_REDIRECTS: Record<string, string> = {
    "freelance-contract": "freelance-agreement",
    "residential-lease-agreement": "rental-agreement",
  };
  const retiredSlug = slug.find((s) => s in MERGED_TEMPLATE_REDIRECTS);
  if (retiredSlug) {
    const target = allFallbackTemplates.find(
      (tpl) => tpl.slug === MERGED_TEMPLATE_REDIRECTS[retiredSlug],
    );
    if (target) {
      permanentRedirect(`/${locale}/templates/${target.categorySlug}/${target.slug}`);
    }
  }

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

  // A 2nd-level slug under a known category that is neither a real template nor a
  // recognized niche/location is a garbage URL (e.g. /templates/invoices/xyz-fake).
  // Return a real 404 instead of a soft-404 listing with a nonsense H1. Extend
  // these sets when new niche/country landing pages are intentionally added.
  const KNOWN_NICHES = new Set([
    "freelancer", "legal", "general", "small-business", "hourly", "contractor", "consulting",
  ]);
  const KNOWN_LOCATIONS = new Set(["usa", "canada", "uk", "india", "australia"]);
  if (categorySlug && isKnownCategory && !activeTemplate && nicheSlug) {
    const nicheOk = KNOWN_NICHES.has(nicheSlug) || KNOWN_LOCATIONS.has(nicheSlug);
    const locationOk = !locationSlug || KNOWN_LOCATIONS.has(locationSlug);
    if (!nicheOk || !locationOk) notFound();
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

    // Unique on-page copy + page-specific FAQs. Without these, ~180 detail
    // pages were the preview plus one sentence — indistinguishable to Google.
    const copy = getTemplateCopy(activeTemplate);
    const templateFaqs = getTemplateFaqs(activeTemplate);
    const templateFaqSchema = faqPageSchema(templateFaqs);

    // Freshness: visible "Updated …" + schema dateModified. Templates skew to
    // current-year ("…2026") searches, so a recent modified date helps.
    const updatedLabel = new Date(siteConfig.contentUpdated).toLocaleDateString(
      INTL_LOCALE[locale as keyof typeof INTL_LOCALE] ?? "en-US",
      { year: "numeric", month: "long" },
    );
    const templateSchemaWithDate = { ...templateSchemaJson, dateModified: siteConfig.contentUpdated };

    // HowTo schema built from the "How to use" steps — can win extended SERP
    // real estate for "how to …" template queries.
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: copy.howToHeading,
      step: copy.howTo.map((text, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        text,
      })),
    };

    return (
      <>
        <Navbar />
        <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-10 transition-colors">
          {/* JSON-LD: BreadcrumbList + SoftwareApplication + HowTo + FAQPage */}
          <Schema data={[breadcrumbsJson, templateSchemaWithDate, howToSchema, templateFaqSchema]} />

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
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {t.updatedLabel} {updatedLabel}
                </span>
              </div>
              <div className="flex items-start gap-4">
                <h1 className="flex-1 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  {/* Strip a trailing "Template" so the noun below never doubles
                      it, and skip the noun entirely when the title already ends
                      in "Format" ("GST Invoice Format", not "…Format Template"). */}
                  {(() => {
                    const base = activeTemplate.title.replace(/\s+Template$/i, "").trim();
                    return /\bformats?$/i.test(base) ? base : `${base} ${t.templateNoun}`;
                  })()}
                </h1>
                {/* Favorite button — shows correct initial state from server session */}
                <FavoriteButtonWrapper
                  templateSlug={activeTemplate.slug}
                  locale={locale}
                />
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {activeTemplate.description} {t.detailIntroExtra}
              </p>
            </div>

            {/* Client View Component */}
            <TemplateDetailView locale={locale} template={activeTemplate} />

            {/* ── Unique, page-specific copy ────────────────────────────────
                Turns a thin preview page into one that answers what the
                searcher actually asked. The field list below is drawn from the
                template's own fields, so no two pages read alike. */}
            <article className="pt-12 border-t border-zinc-200 dark:border-zinc-800 max-w-3xl space-y-8">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {copy.intro}
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {copy.whoForHeading}
                </h2>
                <ul className="space-y-2">
                  {copy.whoFor.map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {copy.includedHeading}
                </h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {copy.included.map((field) => (
                    <li key={field} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{field}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {copy.howToHeading}
                </h2>
                <ol className="list-none space-y-2.5">
                  {copy.howTo.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-[11px] font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {copy.tipsHeading}
                </h2>
                <ul className="space-y-2">
                  {copy.tips.map((tip) => (
                    <li key={tip} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Page-specific FAQs — the visible copy behind the FAQPage schema */}
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Frequently asked questions
                </h2>
                <div className="space-y-4">
                  {templateFaqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                      <h3 className="font-semibold text-zinc-900 dark:text-white">{faq.question}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

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

                <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">
                    Related Free Tools
                  </h4>
                  <ul className="space-y-2">
                    {internalLinking.relatedTools.map((tl) => (
                      <li key={tl.href}>
                        <Link href={tl.href} className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                          {tl.title}
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



  // The in-code catalog is the single source of truth for the template library:
  // the homepage counts it, the sitemap emits it, and the detail pages render
  // from it. This listing previously preferred the database whenever it held any
  // rows, which silently forked the site — a stale DB served old counts and old
  // preview content here while every other surface used the code. Start from the
  // catalog and only append database templates that don't exist in code, so
  // DB-managed additions still surface and nothing is ever hidden.
  let templates: any[] = [...allFallbackTemplates];

  try {
    if (isDbOnline && process.env.DATABASE_URL) {
      const dbTemplates = await db.template.findMany({ include: { category: true } });
      if (dbTemplates && dbTemplates.length > 0) {
        const known = new Set(templates.map((t) => t.slug));
        for (const t of dbTemplates) {
          if (known.has(t.slug)) continue; // code wins for a shared slug
          templates.push({
            id: t.id,
            slug: t.slug,
            title: t.title,
            description: t.description,
            isPremium: t.isPremium,
            categorySlug: t.category.slug,
            categoryName: t.category.name,
            content: t.content as any,
          });
        }
      }
    }
  } catch (err) {
    console.warn("DB unavailable — rendering the in-code template catalog.");
  }

  // Filter uniformly, whatever the source, so counts always agree with the
  // homepage and the sitemap.
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
    return `${siteConfig.url}${path}`;
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

  // Every category page used to render the homepage's four generic questions —
  // duplicate content across nine URLs, with no FAQPage schema. Use questions
  // written for this category, and emit the schema behind them.
  const categoryFaqs = getCategoryFaqs(categorySlug);
  const categoryFaqSchema = categoryFaqs ? faqPageSchema(categoryFaqs) : null;
  const categoryDef = getCategoryDefinition(categorySlug);

  // CollectionPage wrapping the templates as an ItemList — tells Google the
  // category is an ordered collection (helps understanding + sitelinks).
  const collectionSchema = paginatedTemplates.length > 0
    ? SEOEngine.generateCollectionSchema({
        name: `${categoryDisplayName || "Document"} Templates`,
        description: getHubIntro(categorySlug, nicheName, locationName) || t.hubSubtitle,
        url: siteUrl(`/${locale}/templates${slug.length > 0 ? "/" + slug.join("/") : ""}`),
        locale,
        items: paginatedTemplates.map((tpl) => ({
          name: tpl.title,
          url: siteUrl(`/${locale}/templates/${tpl.categorySlug}/${tpl.slug}`),
        })),
      })
    : null;

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-10 transition-colors">
        {/* JSON-LD: BreadcrumbList + FAQPage + CollectionPage(ItemList) */}
        <Schema data={[breadcrumbSchema, categoryFaqSchema, collectionSchema]} />

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
              {/* Unique per category / niche / country so ~200 listing URLs no
                  longer share one boilerplate subtitle. Bare hub keeps t.hubSubtitle. */}
              {getHubIntro(categorySlug, nicheName, locationName) || t.hubSubtitle}
            </p>
          </div>

          {/* Screen-reader h2 before the grid so the outline goes h1 → h2 →
              (sidebar + card h3s) with no skipped level. Placed before the grid
              because the sidebar's own h3 would otherwise follow the h1 directly. */}
          <h2 className="sr-only">{pageHeading}</h2>

          {/* grid-cols-1 clamps the single mobile column to the viewport
              (minmax(0,1fr)); without it the column is auto-sized and a wide
              child — e.g. the many-page pagination row — stretched it past the
              screen, dragging the sidebar into horizontal overflow. */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
                      <div className="cv-card aspect-[4/5] w-full border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden group-hover:opacity-95 transition-opacity">
                        <TemplateThumbnail template={temp} />

                        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-[8px] uppercase tracking-wider z-10 shadow-sm">
                          {common.free}
                        </span>
                        {/* Favorite heart — always visible: a hover-only control
                            is unreachable on touch devices. */}
                        <div className="absolute top-3 left-3 z-10">
                          <FavoriteButton
                            templateSlug={temp.slug}
                            locale={locale}
                            size="sm"
                          />
                        </div>
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

                        {/* Redirects to category/slug path representing specific preview page.
                            aria-label carries the template name so the link has real keyword
                            relevance instead of a generic "Preview Details". */}
                        <Link
                          href={`/${locale}/templates/${temp.categorySlug}/${temp.slug}`}
                          aria-label={`${t.previewDetails}: ${temp.title}`}
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
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
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

            {/* "What is a [document]?" — a definitional section (unique 80–110
                words per category) that helps the page rank as a topical page,
                not just a grid. Only rendered on real category pages. */}
            {categoryDef && (
              <section className="lg:col-span-4 pt-16 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  What is {categoryDef.term}?
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
                  {categoryDef.body}
                </p>
              </section>
            )}

            {/* Template Compliance & Structuring Standards */}
            {/* Spans the full grid width — without col-span-4 it lands in a single
                narrow sidebar-width cell instead of a full-width band below. */}
            <section className="lg:col-span-4 pt-16 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
              <div className="rounded-2xl bg-zinc-100 dark:bg-zinc-900/40 p-6 md:p-8 space-y-4">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {t.complianceHeading}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {t.complianceP1}<a href={`/${locale}/editor/new`} className="text-blue-600 dark:text-blue-400 hover:underline">{t.complianceEditorLink}</a>{t.complianceP2}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FAQ
        locale={locale}
        items={categoryFaqs ?? undefined}
        heading={categoryFaqs ? `${categoryDisplayName} — frequently asked questions` : undefined}
      />
      <Footer />
    </>
  );
}
