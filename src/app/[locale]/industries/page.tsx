import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Schema from "@/components/seo/Schema";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { INDUSTRIES_DATA } from "@/data/industries";
import { generateSeoMetadata, generateItemListSchema, generateBreadcrumbSchema } from "@/lib/seo";
import {
  Building2,
  HardHat,
  Laptop,
  Code,
  Briefcase,
  HeartPulse,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface IndustriesHubProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: IndustriesHubProps): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: "Industry Document Templates & Commercial Forms",
    description:
      "Explore curated document solutions, contracts, invoices, and proposals tailored specifically for construction, real estate, tech, healthcare, consulting, and freelancers.",
    path: "/industries",
    locale,
    type: "industry",
    tags: ["industries", "business templates", "commercial agreements", "invoices by industry"],
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

export default async function IndustriesPage({ params }: IndustriesHubProps) {
  const { locale } = await params;

  const breadcrumbs = [
    { label: "Home", href: `/${locale}` },
    { label: "Industries", href: `/${locale}/industries` },
  ];

  const itemListSchema = generateItemListSchema({
    name: "Industry Document Solutions",
    description: "Industry specific document templates and commercial business forms",
    url: `/en/industries`,
    items: INDUSTRIES_DATA.map((ind, idx) => ({
      name: ind.name,
      url: `/en/industries/${ind.slug}`,
      position: idx + 1,
    })),
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/en" },
    { name: "Industries", url: "/en/industries" },
  ]);

  return (
    <>
      <Navbar />
      <Schema data={[itemListSchema, breadcrumbSchema]} />

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 py-10 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumb items={breadcrumbs} />

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
              <Sparkles className="h-3.5 w-3.5" />
              Tailored Industry Solutions
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Document Templates Built for Your Industry
            </h1>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
              Stop modifying generic templates. Select your industry vertical to access legally sound, pre-formatted invoices, agreements, and proposals ready for instant customization.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = ICON_MAP[ind.iconName] || Briefcase;
              return (
                <Link
                  key={ind.slug}
                  href={`/${locale}/industries/${ind.slug}`}
                  className="group relative flex flex-col justify-between p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/60 dark:hover:border-blue-500/60 shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {ind.name}
                    </h2>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3">
                      {ind.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        Popular Templates:
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {ind.recommendedTemplates.slice(0, 3).map((tmpl, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                          >
                            {tmpl.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Explore Industry Hub</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Trust Banner */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-8 md:p-12 text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
              Compliant, Professional & 100% Free
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              Every document is verified for format accuracy and includes export to PDF, Word DOCX, and live browser editing with our AI document assistant.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No Registration Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Instant PDF & DOCX Export
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Commercial Use Allowed
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
