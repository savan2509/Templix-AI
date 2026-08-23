import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import { PRODUCTS_DATA } from "@/data/products";
import Schema from "@/components/seo/Schema";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight, Layers } from "lucide-react";


interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Dedicated AI & Productivity Products",
    metaTitle: "Dedicated AI & Productivity Products | Templix AI",
    description: "Browse 30 dedicated Templix AI products — AI Resume Builder, ATS Checker, AI Invoice Generator, Contract Generator, PDF Editor, and AI Writing Tools.",
    slug: "/products",
    locale,
  }) as Metadata;
}

export default async function ProductsHubPage({ params }: PageProps) {
  const { locale } = await params;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Templix AI Products Hub",
    description: "Dedicated products for AI document generation, ATS resume checking, tax invoicing, legal contracts, and PDF editing.",
    url: `${siteConfig.url}/${locale}/products`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: PRODUCTS_DATA.length,
      itemListElement: PRODUCTS_DATA.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: p.title,
        url: `${siteConfig.url}/${locale}/products/${p.slug}`,
      })),
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-12 sm:py-16">
        <Schema data={[collectionSchema]} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Layers className="h-3.5 w-3.5" />
              Product Ecosystem
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Templix AI Product Suite ({PRODUCTS_DATA.length})
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Dedicated web tools and software products for document generation, resume optimization, billing automation, legal drafting, and PDF utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_DATA.map((prod) => (
              <div
                key={prod.slug}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {prod.categorySlug}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link href={`/${locale}/products/${prod.slug}`}>
                        {prod.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <Link
                    href={`/${locale}/products/${prod.slug}`}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline inline-flex items-center gap-1"
                  >
                    Launch Product Page
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

