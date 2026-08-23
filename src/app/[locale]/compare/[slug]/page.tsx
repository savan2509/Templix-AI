import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";
import Schema from "@/components/seo/Schema";
import { comparisonPosts } from "@/lib/blog/posts-comparisons";
import { resolvePostImage } from "@/lib/blog-data";
import { SEOEngine } from "@/services/seo";
import { siteConfig } from "@/config/site";
import { ArrowLeft, Clock, Calendar, Scale, Sparkles, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const locales = ["en", "es", "de", "fr", "ar"];
  return locales.flatMap((locale) =>
    comparisonPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = comparisonPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return SEOEngine.generateMetadata({
    title: post.title,
    metaTitle: post.metaTitle,
    description: post.metaDescription || post.description,
    slug: `/compare/${post.slug}`,
    locale,
    image: post.image,
  }) as Metadata;
}

export default async function CompareDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = comparisonPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/${locale}/compare/${slug}`;

  // Structured schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${siteConfig.url}/${locale}/compare` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${resolvePostImage(post)}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.png` } },
  };

  // Other related comparisons
  const otherComparisons = comparisonPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-200">
      <Navbar />
      <Schema data={[breadcrumbSchema, articleSchema]} />

      {/* ── Breadcrumb Navigation ── */}
      <nav aria-label="Breadcrumb" className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <Link href={`/${locale}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href={`/${locale}/compare`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Compare
          </Link>
          <span>/</span>
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold truncate max-w-[240px]">
            {post.title}
          </span>
        </div>
      </nav>

      <main className="flex-grow py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back link */}
          <Link
            href={`/${locale}/compare`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Comparisons
          </Link>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Scale className="h-3.5 w-3.5" />
              Software Comparison Page
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white leading-[1.18] tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                Updated {post.updatedAt || post.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-zinc-400" />
                {post.readTime} min read
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <Image
              src={resolvePostImage(post)}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* High-Converting CTA Banner */}
          <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 dark:from-blue-950/40 dark:via-indigo-950/40 dark:to-violet-950/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <p className="font-extrabold text-zinc-900 dark:text-white text-base flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                Try Templix AI Free — No Credit Card Needed
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Generate ATS resumes, tax-calculated invoices, legal contracts, and business proposals in seconds.
              </p>
            </div>

            <Link
              href={`/${locale}/tools`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shrink-0 shadow-sm"
            >
              <span>Explore All Free Tools</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Comparison Body Content */}
          <article className="prose dark:prose-invert max-w-none rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-10 shadow-sm">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Social Share */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <SocialShare title={post.title} url={pageUrl} />
          </div>

          {/* Related Comparisons Grid */}
          <section className="pt-8 space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              More Software Comparisons
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherComparisons.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${locale}/compare/${rel.slug}`}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:border-blue-500 dark:hover:border-blue-500 transition-all group flex flex-col justify-between"
                >
                  <p className="font-semibold text-xs text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                    {rel.title}
                  </p>
                  <div className="pt-3 mt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-bold">
                    <span>Compare</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
