import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Schema from "@/components/seo/Schema";
import { CATEGORIES } from "@/constants";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { ALL_TOOLS } from "@/data/tools";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { comparisonPosts } from "@/lib/blog/posts-comparisons";
import { PRODUCTS_DATA } from "@/data/products";
import { SERVICES_DATA } from "@/data/services";
import { INDUSTRIES_DATA } from "@/data/industries";
import { ALL_USE_CASE_SLUGS } from "@/lib/use-case-data";
import { ALL_MASTER_LANDING_SLUGS } from "@/lib/landing-page-data";
import { siteConfig } from "@/config/site";
import {
  FolderTree,
  FileText,
  Wrench,
  Sparkles,
  BookOpen,
  ArrowRight,
  GitCompare,
  Building2,
  ShieldCheck,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = siteConfig.url;

  return {
    title: "HTML Sitemap & Complete Document Directory",
    description: "Browse the complete directory of free document templates, AI document tools, software comparisons, career use cases, and professional writing guides.",
    alternates: {
      canonical: `${siteUrl}/${locale}/sitemap`,
      languages: {
        en: `${siteUrl}/en/sitemap`,
        "x-default": `${siteUrl}/en/sitemap`,
      },
    },
    openGraph: {
      title: "Templix AI Sitemap & Document Directory",
      description: "Complete index of free professional document templates, AI document editors, resume checkers, and career blueprints.",
      url: `${siteUrl}/${locale}/sitemap`,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: `${siteUrl}/og-default.jpg`, width: 1200, height: 630, alt: "Templix AI Complete Sitemap" }],
    },
  };
}

export default async function SitemapPage({ params }: PageProps) {
  const { locale } = await params;
  const siteUrl = siteConfig.url;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: "HTML Sitemap", item: `${siteUrl}/${locale}/sitemap` },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Templix AI Directory & HTML Sitemap",
    description: "Comprehensive navigation tree for all templates, document categories, comparison pages, and writing resources.",
    url: `${siteUrl}/${locale}/sitemap`,
  };

  // Group templates by category
  const templatesByCategory = CATEGORIES.map((cat) => {
    const list = allFallbackTemplates.filter((t) => t.categorySlug === cat.slug);
    return {
      ...cat,
      templates: list,
    };
  });

  return (
    <>
      <Schema data={[breadcrumbSchema, collectionSchema]} />
      <Navbar />

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Section */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300 shadow-xs">
              <FolderTree className="h-4 w-4" />
              <span>Full Site Navigation &amp; Index</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              HTML Sitemap &amp; Template Directory
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Explore the complete hierarchy of Templix AI. Direct 1-click links to all {allFallbackTemplates.length}+ document templates, {ALL_TOOLS.length}+ online tools, {STATIC_BLOG_POSTS.length}+ drafting guides, and comparison resources.
            </p>
          </div>

          {/* Quick Jump Bar */}
          <div className="flex flex-wrap gap-2 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs text-xs font-semibold">
            <a href="#templates" className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-100">
              Templates ({allFallbackTemplates.length})
            </a>
            <a href="#tools" className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200">
              Tools ({ALL_TOOLS.length})
            </a>
            <a href="#comparisons" className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200">
              Comparisons ({comparisonPosts.length})
            </a>
            <a href="#guides" className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200">
              Blog &amp; Guides ({STATIC_BLOG_POSTS.length})
            </a>
            <a href="#products" className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200">
              Products &amp; Services ({PRODUCTS_DATA.length + SERVICES_DATA.length})
            </a>
            <a href="#use-cases" className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200">
              Use Cases ({ALL_USE_CASE_SLUGS.length})
            </a>
          </div>

          {/* Section 1: Template Categories & Individual Templates */}
          <section id="templates" className="space-y-8 scroll-mt-24">
            <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Document Template Categories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templatesByCategory.map((cat) => (
                <div
                  key={cat.slug}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-4 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/${locale}/templates/${cat.slug}`}
                      className="font-bold text-lg text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {cat.name}
                    </Link>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {cat.templates.length}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {cat.description}
                  </p>

                  <ul className="space-y-2 text-xs font-medium max-h-56 overflow-y-auto pr-1">
                    {cat.templates.slice(0, 10).map((tpl) => (
                      <li key={tpl.slug}>
                        <Link
                          href={`/${locale}/templates/${tpl.categorySlug}/${tpl.slug}`}
                          className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 block truncate transition-colors"
                        >
                          • {tpl.title}
                        </Link>
                      </li>
                    ))}
                    {cat.templates.length > 10 && (
                      <li className="pt-1">
                        <Link
                          href={`/${locale}/templates/${cat.slug}`}
                          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                        >
                          View all {cat.templates.length} {cat.name.toLowerCase()} &rarr;
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Online Tools & Calculators */}
          <section id="tools" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <Wrench className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Online Productivity Tools ({ALL_TOOLS.length})
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {ALL_TOOLS.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${locale}/tools/${tool.slug}`}
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-400 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all truncate"
                >
                  {tool.title || tool.short}
                </Link>
              ))}
            </div>
          </section>

          {/* Section 3: Software Comparisons */}
          <section id="comparisons" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <GitCompare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Software &amp; Tool Comparisons ({comparisonPosts.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {comparisonPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/compare/${post.slug}`}
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-purple-400 hover:bg-purple-50/40 dark:hover:bg-purple-950/20 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all truncate"
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </section>

          {/* Section 4: Master AI Landing Pages & Generators */}
          <section className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <Sparkles className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                AI Generators &amp; Master Landing Pages
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {ALL_MASTER_LANDING_SLUGS.map((slug) => (
                <Link
                  key={slug}
                  href={`/${locale}/${slug}`}
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-400 hover:bg-amber-50/40 dark:hover:bg-amber-950/20 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all truncate capitalize"
                >
                  {slug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </section>

          {/* Section 5: Blog & Writing Guides */}
          <section id="guides" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <BookOpen className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Document Guides &amp; Career Articles ({STATIC_BLOG_POSTS.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {STATIC_BLOG_POSTS.slice(0, 32).map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-sky-400 hover:bg-sky-50/40 dark:hover:bg-sky-950/20 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all truncate"
                >
                  {post.title}
                </Link>
              ))}
            </div>
            {STATIC_BLOG_POSTS.length > 32 && (
              <div className="pt-2 text-center">
                <Link
                  href={`/${locale}/blog`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  <span>Browse All {STATIC_BLOG_POSTS.length} Guides in Blog Hub</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </section>

          {/* Section 6: Products, Services & Industry Solutions */}
          <section id="products" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <Building2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Industry Solutions, Products &amp; AI Services
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {INDUSTRIES_DATA.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/${locale}/industries/${ind.slug}`}
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-400 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all truncate"
                >
                  {ind.name}
                </Link>
              ))}
              {PRODUCTS_DATA.map((prod) => (
                <Link
                  key={prod.slug}
                  href={`/${locale}/products/${prod.slug}`}
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-400 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all truncate"
                >
                  {prod.title}
                </Link>
              ))}
              {SERVICES_DATA.map((srv) => (
                <Link
                  key={srv.slug}
                  href={`/${locale}/services/${srv.slug}`}
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-400 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all truncate"
                >
                  {srv.title}
                </Link>
              ))}
            </div>
          </section>


          {/* Section 7: Company, Trust & Security */}
          <section className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-4">
            <h2 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>Company, Trust &amp; Legal Policies</span>
            </h2>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
              <Link href={`/${locale}/about`} className="hover:text-blue-600">About Templix AI</Link>
              <Link href={`/${locale}/contact`} className="hover:text-blue-600">Contact Support</Link>
              <Link href={`/${locale}/faq`} className="hover:text-blue-600">Help &amp; FAQ Center</Link>
              <Link href={`/${locale}/privacy`} className="hover:text-blue-600">Privacy Policy</Link>
              <Link href={`/${locale}/terms`} className="hover:text-blue-600">Terms of Service</Link>
              <Link href="/sitemap.xml" className="hover:text-blue-600">XML Sitemap</Link>
              <Link href="/robots.txt" className="hover:text-blue-600">Robots.txt</Link>
              <Link href="/.well-known/security.txt" className="hover:text-blue-600">Security.txt</Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
