import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { db, isDbOnline } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchHero from "@/components/SearchHero";
import FAQ from "@/components/FAQ";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import Schema from "@/components/seo/Schema";
import { faqSchema } from "@/data/faq";
import { CATEGORIES } from "@/constants";
import { getDictionary, INTL_LOCALE } from "@/lib/i18n";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { allFallbackTemplates } from "@/data/templates-fallback";
import {
  FileText,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const SITE_URL = siteConfig.url;

// ── Robust high-fidelity mock fallbacks ────────────────────────────────────
const fallbackTemplates = [
  {
    id: "invoice-freelancer",
    slug: "invoice-freelancer",
    title: "Freelancer Invoice Template",
    description: "Clean invoice template for freelancers and consultants, containing dynamic rows and tax details.",
    isPremium: false,
    category: { name: "Invoices", slug: "invoices" }
  },
  {
    id: "resume-software-engineer",
    slug: "resume-software-engineer",
    title: "Software Engineer Resume",
    description: "ATS-friendly developer resume layout highlighting technical skills, experience, and projects.",
    isPremium: false,
    category: { name: "Resumes & CVs", slug: "resumes" }
  },
  {
    id: "freelance-agreement",
    slug: "freelance-agreement",
    title: "Freelance Service Agreement",
    description: "Standard service contract detailing scope of work, timeline, and payment terms.",
    isPremium: true,
    category: { name: "Contracts", slug: "contracts" }
  }
];

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  
  // Brand is appended by the root layout's `%s | Templix AI` template, so it
  // must NOT be included here (otherwise the brand appears twice in the title).
  // Keep the English <title> under Google's ~60-char budget once the root
  // layout appends " | Templix AI" (13 chars). "Free Invoice, Resume & Contract
  // Templates" (41) + brand = 54. Proposals still lead the H1, description and
  // their own pages. Other locales keep the fuller phrase (language-inherent).
  // Every locale kept short enough that " | Templix AI" (13 chars, appended by
  // the root layout) still lands under Google's ~60–65 char SERP budget. German
  // and Spanish are language-inherently longer, so they drop "& Angebote/…" and
  // lead with three document types, mirroring the English title.
  const titles = {
    en: "Free Invoice, Resume & Contract Templates",
    es: "Plantillas Gratis: Facturas y Currículums",
    de: "Kostenlose Vorlagen: Rechnungen & Lebensläufe",
    fr: "Modèles Gratuits : Factures, CV et Contrats",
    ar: "قوالب مجانية: فواتير وسير ذاتية وعقود",
  };
  
  // Kept under 160 characters so the snippet isn't truncated in search results.
  const descriptions = {
    en: "Create and download free invoices, resumes, contracts, proposals and letters in minutes. Customize online with AI and export to PDF or Word — no sign-up.",
    es: "Crea y descarga facturas, currículums, contratos, propuestas y cartas gratis en minutos. Personaliza online con IA y exporta a PDF o Word, sin registro.",
    de: "Kostenlose Rechnungen, Lebensläufe, Verträge, Angebote und Briefe in Minuten erstellen. Online mit KI anpassen und als PDF oder Word exportieren.",
    fr: "Créez et téléchargez gratuitement factures, CV, contrats, propositions et lettres en minutes. Personnalisez avec l'IA, exportez en PDF ou Word.",
    ar: "أنشئ ونزّل فواتير وسِيَرًا ذاتية وعقودًا ومقترحات ورسائل مجانية في دقائق. عدّلها عبر الإنترنت بمساعدة الذكاء الاصطناعي وصدّرها بصيغة PDF أو Word.",
  };

  const title = titles[locale as keyof typeof titles] || titles.en;
  const description = descriptions[locale as keyof typeof descriptions] || descriptions.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        de: `${SITE_URL}/de`,
        fr: `${SITE_URL}/fr`,
        ar: `${SITE_URL}/ar`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      // Keep the OG/Twitter title aligned with the document <title> (brand
      // appended, since OG titles aren't run through the layout's template) so
      // the page presents one consistent message in search and social.
      title: `${title} | Templix AI`,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: "Templix AI",
      type: "website",
      locale: locale === "ar" ? "ar_AR" : locale === "es" ? "es_ES" : locale === "de" ? "de_DE" : locale === "fr" ? "fr_FR" : "en_US",
      images: [{ url: `${SITE_URL}/og-default.jpg`, width: 1200, height: 630, alt: "Templix AI" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Templix AI`,
      description,
      images: ["/og-default.jpg"],
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.home;
  const c = dict.common;
  const categoryName = (slug: string) =>
    c.categoryNames[slug as keyof typeof c.categoryNames] ?? slug;

  let templates = fallbackTemplates;
  // Use real static blog posts (first 2) — always valid slugs
  let blogs = STATIC_BLOG_POSTS.slice(0, 2).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    image: p.image,
    category: p.category,
    createdAt: new Date(p.publishedAt),
  }));

  try {
    if (isDbOnline && process.env.DATABASE_URL) {
      const [dbTemplates, dbBlogs] = await Promise.all([
        db.template.findMany({ take: 3, include: { category: true } }),
        db.blog.findMany({
          where: { published: true },
          take: 2,
          orderBy: { createdAt: "desc" }
        })
      ]);

      if (dbTemplates && dbTemplates.length > 0) {
        templates = dbTemplates.map((t: any) => ({
          id: t.id,
          slug: t.slug,
          title: t.title,
          description: t.description,
          isPremium: t.isPremium,
          category: { name: t.category.name, slug: t.category.slug }
        }));
      }

      if (dbBlogs && dbBlogs.length > 0) {
        blogs = dbBlogs.map((b: any) => ({
          id: b.id,
          slug: b.slug,
          title: b.title,
          description: b.description,
          image: STATIC_BLOG_POSTS.find((p) => p.slug === b.slug)?.image ?? "/blog/blog-create-invoice.jpg",
          category: "Guides",
          createdAt: b.createdAt,
        }));
      }
    }
  } catch (err) {
    console.warn("Home page database connection bypass, displaying initial seed fallbacks.");
  }

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-zinc-900/30 dark:via-zinc-950 dark:to-zinc-950">
          {/* Ambient Glows */}
          <div className="absolute top-[-10%] left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_50%)]" />
          <div className="absolute top-1/4 right-[10%] -z-10 h-[350px] w-[350px] rounded-full bg-blue-400/5 blur-[80px] dark:bg-blue-500/10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50/70 text-xs font-semibold text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400 shadow-sm" style={{animation: 'fadeIn 0.6s ease both'}}>
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Brand Position Headline */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                {t.heroTitleLine1}<br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                  {t.heroTitleLine2}
                </span>
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                {t.heroSubtitle}
              </p>
            </div>

            {/* Global Search Component */}
            <SearchHero locale={locale} />

            {/* StartupBase Launch Badge */}
            <div className="flex justify-center pt-2" style={{animation: 'fadeIn 0.8s ease 0.3s both'}}>
              <a
                href="https://startupbase.io/products/templix-ai?utm_source=startupbase&utm_medium=badge&utm_campaign=launch-badge-light"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Launched on StartupBase"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://statics.startupbase.io/site/badges/launched-on-sb.svg"
                  alt="Launched on StartupBase"
                  height={55}
                  style={{ height: "55px", width: "auto" }}
                />
              </a>
            </div>
          </div>
        </section>

        {/* Popular Categories — deferred paint until visible */}
        <section className="py-12 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 400px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 mb-8 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <span>{t.categoriesHeading}</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${locale}/templates/${cat.slug}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-zinc-100/70 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {/* Cover image */}
                  <div className="relative h-28 w-full overflow-hidden">
                    <Image
                      src={cat.image}
                      // Decorative cover — the link's visible label + count already
                      // name it, so empty alt avoids a duplicate screen-reader announce.
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  {/* Label area */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="block font-bold text-white text-xs leading-tight drop-shadow">
                      {categoryName(cat.slug)}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-white/70 mt-0.5 font-medium">
                      <span>{allFallbackTemplates.filter(ft => ft.categorySlug === cat.slug).length} {c.templatesLabel}</span>
                      <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* Featured Templates Grid — deferred paint until visible */}
        <section className="py-16 bg-zinc-50/50 dark:bg-zinc-900/20 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 600px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {t.featuredHeading}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                  {t.featuredSubtitle}
                </p>
              </div>
              <Link
                href={`/${locale}/templates`}
                className="shrink-0 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>{c.viewAll}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {templates.map((temp) => (
                <div
                  key={temp.id}
                  className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {/* Thumbnail — mini of the live document preview so the cover
                      matches the detail page for every module */}
                  <div className="cv-card aspect-[4/5] w-full border-b border-zinc-100 dark:border-zinc-800 relative overflow-hidden group-hover:opacity-95 transition-opacity">
                    <TemplateThumbnail
                      template={{
                        slug: temp.slug,
                        categorySlug: temp.category?.slug,
                        title: temp.title,
                        categoryName: temp.category?.name,
                        content:
                          (temp as any).content ??
                          allFallbackTemplates.find((a) => a.slug === temp.slug)?.content,
                      }}
                    />
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-[9px] uppercase tracking-wider shadow-sm z-10">
                      {c.free}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                        {c.categoryNames[temp.category.slug as keyof typeof c.categoryNames] ?? temp.category.name}
                      </span>
                      <h3 className="font-bold text-zinc-900 dark:text-white text-lg">
                        {temp.title}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                        {temp.description}
                      </p>
                    </div>

                    <Link
                      href={`/${locale}/templates/${temp.category?.slug ? `${temp.category.slug}/` : ""}${temp.slug}`}
                      className="w-full h-11 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-1 shadow-sm"
                    >
                      <span>{c.customizeTemplate}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic 3 Pillars Section — deferred paint until visible */}
        <section className="py-16 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 500px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t.pillarsHeading}
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {t.pillarsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 space-y-4 text-center border border-zinc-100/60 dark:border-zinc-800">
                <div className="h-12 w-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-sm">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{t.pillar1Title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {t.pillar1Desc}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 space-y-4 text-center border border-zinc-100/60 dark:border-zinc-800">
                <div className="h-12 w-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto shadow-sm">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{t.pillar2Title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {t.pillar2Desc}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 space-y-4 text-center border border-zinc-100/60 dark:border-zinc-800">
                <div className="h-12 w-12 rounded-2xl bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto shadow-sm">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{t.pillar3Title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {t.pillar3Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Templix AI Section (100% Free & AI Powered) */}
        <section className="py-16 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 600px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                {t.whyBadge}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                {t.whyHeading}
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
                {t.whySubtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">{t.why1Title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                  {t.why1Desc}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">{t.why2Title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                  {t.why2Desc}
                </p>
              </div>

              {/* Feature 2.5 (Zap/Speed) */}
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">{t.why3Title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                  {t.why3Desc}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">{t.why4Title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                  {t.why4Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blogs Section — deferred paint until visible */}
        <section className="py-16 bg-zinc-50/50 dark:bg-zinc-900/20 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 500px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {t.blogsHeading}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                  {t.blogsSubtitle}
                </p>
              </div>
              <Link
                href={`/${locale}/blog`}
                className="shrink-0 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>{c.viewAllArticles}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogs.map((article) => (
                <Link
                  key={article.id}
                  href={`/${locale}/blog/${article.slug}`}
                  className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lg hover:border-blue-500/30 transition-all overflow-hidden"
                >
                  {/* Blog cover image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-xs text-zinc-400 font-medium">
                      {new Date(article.createdAt).toLocaleDateString(INTL_LOCALE[locale as keyof typeof INTL_LOCALE] ?? "en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                    <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {c.readArticle} <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Standards & Compliance Section */}
        <section className="py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t.complianceHeading}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto text-sm leading-relaxed">
              {t.complianceText1}<a href={`/${locale}/templates/invoices`} className="text-blue-600 dark:text-blue-400 hover:underline">{t.complianceInvoiceLink}</a>{t.complianceText2}<a href={`/${locale}/templates/resumes`} className="text-blue-600 dark:text-blue-400 hover:underline">{t.complianceResumeLink}</a>{t.complianceText3}<a href={`/${locale}/templates/contracts`} className="text-blue-600 dark:text-blue-400 hover:underline">{t.complianceContractLink}</a>{t.complianceText4}
            </p>
          </div>
        </section>

        {/* JSON-LD: Organization + WebSite (SearchAction) + WebApplication (free
            Offer) + FAQPage — the brand entity, sitelinks searchbox and CTR.

            These three are SINGLETON entities: they describe the site itself, not
            the page being viewed, so they must always point at the canonical /en
            root — never at the rendering locale. Emitting `/{locale}` declared
            five competing brand entities (one per locale) on pages that all
            canonicalize to /en, and advertised five SearchAction endpoints whose
            URLs robots.txt blocks (`/*?q=`), which Google then reported under
            "Blocked by robots.txt". */}
        <Schema
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Templix AI",
              url: `${SITE_URL}/en`,
              logo: `${SITE_URL}/icon-512.png`,
              description:
                "Free professional document templates and an AI-powered editor for invoices, resumes, contracts, proposals and letters.",
              sameAs: ["https://twitter.com/templix_ai"],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Templix AI",
              url: `${SITE_URL}/en`,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE_URL}/en/templates?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Templix AI",
              url: `${SITE_URL}/en`,
              applicationCategory: "BusinessApplication",
              operatingSystem: "All",
              description:
                "Free document templates and an AI-powered editor for invoices, resumes, contracts, proposals and letters — customize online and export to PDF or Word.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "820" },
            },
            faqSchema,
          ]}
        />
        <FAQ locale={locale} />
      </main>

      <Footer />
    </>
  );
}
