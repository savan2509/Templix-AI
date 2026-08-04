import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Schema from "@/components/seo/Schema";
import Footer from "@/components/Footer";
import { comparisonPosts } from "@/lib/blog/posts-comparisons";
import { resolvePostImage } from "@/lib/blog-data";
import { SEOEngine } from "@/services/seo";
import { siteConfig } from "@/config/site";
import { ArrowRight, ArrowLeft, Scale, Sparkles, CheckCircle2, ShieldCheck, Zap, ChevronLeft, ChevronRight } from "lucide-react";

function getPaginationRange(activePage: number, totalPages: number): (number | string)[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (activePage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }
  if (activePage >= totalPages - 3) {
    return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  return [1, "...", activePage - 1, activePage, activePage + 1, "...", totalPages];
}

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
}

const ITEMS_PER_PAGE = 12;

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const { category, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10));

  let pageTitle = "Software Comparisons & Alternatives (2026)";
  if (category && category !== "All") {
    pageTitle = `${category} Software Comparisons — Page ${currentPage}`;
  } else if (currentPage > 1) {
    pageTitle = `Software Comparisons — Page ${currentPage}`;
  }

  return SEOEngine.generateMetadata({
    title: pageTitle,
    description:
      "Compare Templix AI vs ChatGPT, Canva, Notion, Word, Google Docs, Adobe, Zety, and leading productivity tools. Feature-by-feature breakdowns and pricing comparisons.",
    slug: "/compare",
    locale,
  }) as Metadata;
}

export default async function CompareHubPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { category = "All", page = "1" } = await searchParams;

  const currentPage = Math.max(1, parseInt(page || "1", 10));

  const filterCategory = category.trim();
  const filteredPosts =
    filterCategory === "All"
      ? comparisonPosts
      : comparisonPosts.filter((p) => p.category.toLowerCase() === filterCategory.toLowerCase());

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${siteConfig.url}/${locale}/compare` },
    ],
  };

  const categories = [
    { key: "All", label: "All Comparisons" },
    { key: "AI Tools", label: "AI Writing & Productivity" },
    { key: "Resumes", label: "Resume & CV Builders" },
    { key: "Invoices", label: "Invoicing & Billing" },
    { key: "Contracts", label: "eSignature & Contracts" },
    { key: "Proposals", label: "Business Proposals" },
  ];

  // Helper to build URL for page/category query
  const getPageUrl = (targetPage: number, targetCat: string = filterCategory) => {
    const params = new URLSearchParams();
    if (targetCat !== "All") params.set("category", targetCat);
    if (targetPage > 1) params.set("page", targetPage.toString());
    const qs = params.toString();
    return `/${locale}/compare${qs ? `?${qs}` : ""}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-200">
      <Navbar />
      <Schema data={[breadcrumbSchema]} />

      <main className="flex-grow pt-12 pb-20">
        {/* ── Hero Header ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Scale className="h-4 w-4" />
            Software Comparison &amp; Alternatives Hub
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-4xl mx-auto leading-[1.15]">
            Templix AI vs <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Leading Document Tools</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2.5xl mx-auto leading-relaxed">
            In-depth commercial comparisons to help you choose the best document editor, ATS resume builder, PDF manager, and contract generator for your workflow.
          </p>

          {/* Quick Stats Banner */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400 shrink-0" />
              <div>
                <p className="text-lg font-extrabold text-zinc-900 dark:text-white">{comparisonPosts.length}+</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Comparisons</p>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <p className="text-lg font-extrabold text-zinc-900 dark:text-white">100% Free</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">No Paywalls</p>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-violet-600 dark:text-violet-400 shrink-0" />
              <div>
                <p className="text-lg font-extrabold text-zinc-900 dark:text-white">ATS Ready</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Standard HRXML</p>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
              <Zap className="h-8 w-8 text-amber-600 dark:text-amber-400 shrink-0" />
              <div>
                <p className="text-lg font-extrabold text-zinc-900 dark:text-white">Instant Math</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Auto Subtotal &amp; Tax</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Category Filter Tabs ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            {categories.map((cat) => {
              const isActive = filterCategory.toLowerCase() === cat.key.toLowerCase();
              return (
                <Link
                  key={cat.key}
                  href={getPageUrl(1, cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-blue-500"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Paginated Comparisons Grid ── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {paginatedPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/compare/${post.slug}`}
                  className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={resolvePostImage(post)}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                      {post.category}
                    </div>

                    <h2 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-snug transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                    <span>Read Full Comparison</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-4">
              <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">No comparisons found in this category.</p>
              <Link
                href={`/${locale}/compare`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                View All Comparisons
              </Link>
            </div>
          )}

          {/* ── Pagination Bar ── */}
          {totalPages > 1 && (
            <nav aria-label="Comparison pagination" className="flex items-center justify-center gap-2 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              {/* Previous Button */}
              {safePage > 1 ? (
                <Link
                  href={getPageUrl(safePage - 1)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Link>
              ) : (
                <span className="flex items-center gap-1 px-3 py-2 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 text-xs font-bold text-zinc-400 opacity-50 cursor-not-allowed">
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </span>
              )}

              {/* Page Numbers with Ellipsis (...) */}
              {getPaginationRange(safePage, totalPages).map((item, idx) => {
                if (item === "...") {
                  return (
                    <span
                      key={`ellipsis-${idx}`}
                      className="w-9 h-9 flex items-center justify-center text-xs font-bold text-zinc-400 select-none"
                    >
                      ...
                    </span>
                  );
                }
                const pageNum = Number(item);
                const isCurrent = pageNum === safePage;
                return (
                  <Link
                    key={pageNum}
                    href={getPageUrl(pageNum)}
                    className={`h-9 w-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all border ${
                      isCurrent
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-blue-500"
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}

              {/* Next Button */}
              {safePage < totalPages ? (
                <Link
                  href={getPageUrl(safePage + 1)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <span className="flex items-center gap-1 px-3 py-2 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 text-xs font-bold text-zinc-400 opacity-50 cursor-not-allowed">
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </span>
              )}
            </nav>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
