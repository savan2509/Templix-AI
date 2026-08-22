import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Schema from "@/components/seo/Schema";
import SocialShare from "@/components/SocialShare";
import AiToolWidget from "@/components/tools/AiToolWidget";
import { siteConfig } from "@/config/site";
import { buildCanonical } from "@/lib/canonical";
import {
  getLandingPageData,
  ALL_MASTER_LANDING_SLUGS,
} from "@/lib/landing-page-data";
import { getAiTool } from "@/data/ai-tools";
import {
  Sparkles,
  Zap,
  Lock,
  Download,
  CheckCircle2,
  ArrowRight,
  FileText,
  HelpCircle,
  TrendingUp,
  Layers,
  Globe,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  return ALL_MASTER_LANDING_SLUGS.map((slug) => ({
    locale: "en",
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = getLandingPageData(slug);

  if (!data) {
    return { title: "Page Not Found" };
  }

  const url = buildCanonical(locale, slug);

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [data.primaryKeyword, ...data.secondaryKeywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      type: "website",
      siteName: siteConfig.name,
      images: [{ url: `${siteConfig.url}/og-default.jpg`, width: 1200, height: 630, alt: data.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [`${siteConfig.url}/og-default.jpg`],
    },
  };
}

export default async function MasterLandingPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = getLandingPageData(slug);

  if (!data) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/${locale}/${slug}`;
  const aiTool = data.toolSlug ? getAiTool(data.toolSlug) : undefined;

  // Schema.org SoftwareApplication JSON-LD
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.h1,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: data.metaDescription,
    url: canonicalUrl,
  };

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      <Navbar />
      <Schema data={appSchema} />
      <Schema data={faqSchema} />

      <main className="flex-1 pb-20">
        {/* ── 1. Hero Section ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800/80 pt-10 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6" aria-label="Breadcrumb">
              <Link href={`/${locale}`} className="hover:text-blue-600">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href={`/${locale}/tools`} className="hover:text-blue-600">Tools</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{data.h1}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5" /> 100% Free AI Generator • No Sign-Up
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                  {data.h1}
                </h1>

                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {data.heroSubtitle}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> ATS Parsed
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Free PDF Export
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Zero Watermark
                  </div>
                </div>
              </div>

              {/* Embedded AI Tool Widget or Template Hero Launcher */}
              <div className="lg:col-span-6">
                {aiTool ? (
                  <AiToolWidget
                    slug={aiTool.slug}
                    inputLabel={aiTool.inputLabel}
                    inputPlaceholder={aiTool.inputPlaceholder}
                    outputLabel={aiTool.outputLabel}
                    options={aiTool.options}
                  />
                ) : (
                  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-xl space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold">{data.h1} Builder</h2>
                        <p className="text-xs text-zinc-500">Pick a template or start in live editor</p>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Create, edit, and download fully formatted {data.primaryKeyword} documents in seconds with automated tax calculations and ATS-compliant typography.
                    </p>
                    <Link
                      href={`/${locale}/templates/${data.categorySlug || "resumes"}`}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      Browse {data.h1} Templates <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-16">
          {/* ── 2. What is this Tool? ── */}
          <section className="space-y-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              What is the {data.h1}?
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {data.whatIsThis}
            </p>
          </section>

          {/* ── 3. Why Choose Templix AI? ── */}
          <section className="space-y-6 rounded-3xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-8">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                Why Choose Templix AI?
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Created to eliminate subscription paywalls and format friction.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
              {[
                { title: "ATS Optimized", desc: "100% HRXML Scannability" },
                { title: "AI Powered", desc: "Smart Rewriting Engine" },
                { title: "Professional Templates", desc: "Recruiter Tested Blueprints" },
                { title: "PDF Export", desc: "Vector Print Quality" },
                { title: "Word Export", desc: "Native Editable DOCX" },
                { title: "One Click Editing", desc: "Instant Live Preview" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl border border-blue-200/60 dark:border-blue-900/40 bg-white dark:bg-zinc-900 text-center space-y-1">
                  <div className="text-blue-600 dark:text-blue-400 font-extrabold text-lg">✔</div>
                  <h3 className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                  <p className="text-[10px] text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4. Key Benefits ── */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                Key Benefits of Using Our {data.h1}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Engineered for accuracy, speed, and privacy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Save Time", desc: "Generate completed documents in less than 2 minutes." },
                { title: "Professional Design", desc: "Clean typography and crisp alignment margins." },
                { title: "ATS Score 95+", desc: "Pass applicant tracking systems on the first scan." },
                { title: "Easy Editing", desc: "Live inline editor with instant drag & drop formatting." },
                { title: "No Design Skills Needed", desc: "Automated calculations and layout balancing." },
              ].map((b, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-blue-100/80 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">{b.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4. Features ── */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                Advanced Features
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Everything you need to produce high-converting document copy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.features.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    {f.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 5. How It Works ── */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                How It Works
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Generate your document in 4 easy steps.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.howItWorks.map((step) => (
                <div key={step.step} className="relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">{step.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 6. Who Can Use It? ── */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                Who Can Benefit From This Generator?
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Tailored for every industry and profession.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.whoCanUseIt.map((u, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 space-y-2">
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{u.role}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 7. Free Templates (20 Internal Links) ── */}
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                  Free {data.h1} Templates
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Select a pre-formatted template to customize live.
                </p>
              </div>
              <Link href={`/${locale}/templates/${data.categorySlug || "resumes"}`} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                View All Templates <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.relatedTemplates.map((t, i) => (
                <Link
                  key={i}
                  href={`/${locale}${t.href}`}
                  className="group p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 hover:shadow-md transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{t.category}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 line-clamp-1">{t.name}</h3>
                </Link>
              ))}
            </div>
          </section>

          {/* ── 8. Examples & Preview ── */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                {data.h1} Examples &amp; Sample Output
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                See what an AI-generated result looks like.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.examples.map((ex, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 text-zinc-100 font-mono text-xs leading-relaxed space-y-3 shadow-inner">
                  <div className="flex items-center gap-2 pb-2 border-b border-zinc-800 text-zinc-400 font-sans font-semibold text-xs">
                    <FileText className="h-4 w-4 text-blue-400" /> {ex.title}
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-zinc-300 text-xs leading-relaxed">{ex.content}</pre>
                </div>
              ))}
            </div>
          </section>

          {/* ── 9. User & Recruiter Testimonials ── */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                What Professionals &amp; Recruiters Say
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Trusted by thousands of job seekers, freelancers, and business owners worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Sarah Jenkins", role: "Senior Technical Recruiter", text: "Templix AI single-column HRXML blueprints parse cleanly in Workday and Taleo every single time. Best free tool on the market." },
                { name: "David Miller", role: "Freelance Software Engineer", text: "The invoice and contract generators saved me hours of administrative headache. The automatic tax calculation engine is brilliant." },
                { name: "Elena Rostova", role: "Marketing Consultant", text: "I generated my proposal deck and cover letter in less than 5 minutes. Downloaded crisp PDFs with zero watermarks!" },
              ].map((t, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3 shadow-sm">
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">★★★★★</div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 italic leading-relaxed">"{t.text}"</p>
                  <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{t.name}</p>
                    <p className="text-[11px] text-zinc-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 9. Frequently Asked Questions (8–10 FAQs) ── */}
          <section className="space-y-8 max-w-4xl">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Common questions about {data.primaryKeyword}.
              </p>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 10. Related AI Tools (5 Internal Links) ── */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Related AI Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {data.relatedAiTools.map((tool, i) => (
                <Link key={i} href={`/${locale}${tool.href}`} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-all space-y-1">
                  <h3 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-blue-500" /> {tool.name}
                  </h3>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-2">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── 11. Related Blogs (10 Internal Links) ── */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Guides & Helpful Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {data.relatedBlogs.map((b, i) => (
                <Link key={i} href={`/${locale}${b.href}`} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-blue-500 transition-all space-y-1">
                  <h3 className="font-semibold text-xs text-zinc-800 dark:text-zinc-200 hover:text-blue-600 line-clamp-2">{b.title}</h3>
                </Link>
              ))}
            </div>
          </section>

          {/* ── 12. Related Use Cases (10 Internal Links) ── */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Use Cases for Professionals & Businesses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {data.relatedUseCases.map((uc, i) => (
                <Link key={i} href={`/${locale}${uc.href}`} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-all space-y-1">
                  <h3 className="font-semibold text-xs text-zinc-800 dark:text-zinc-200 hover:text-blue-600 line-clamp-2">{uc.title}</h3>
                </Link>
              ))}
            </div>
          </section>

          {/* ── 13. Related Comparisons (10 Internal Links) ── */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Software Comparisons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {data.relatedComparisons.map((c, i) => (
                <Link key={i} href={`/${locale}${c.href}`} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-blue-500 transition-all space-y-1">
                  <h3 className="font-semibold text-xs text-zinc-800 dark:text-zinc-200 hover:text-blue-600 line-clamp-2">{c.title}</h3>
                </Link>
              ))}
            </div>
          </section>

          {/* ── 14. Final Call To Action ── */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-12 text-white shadow-xl space-y-6 text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Create Your Professional {data.h1} Now
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-blue-100">
              Join thousands of professionals, freelancers, and businesses generating ATS-compliant, recruiter-approved documents on Templix AI for free.
            </p>
            <div className="flex justify-center pt-2">
              <Link
                href={`/${locale}/tools`}
                className="inline-flex items-center gap-2 py-4 px-8 rounded-2xl bg-white text-blue-600 font-extrabold text-sm shadow-lg hover:bg-blue-50 transition-colors"
              >
                Generate Free Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Social Sharing */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-sm text-zinc-900 dark:text-white">Share this resource</h3>
              <p className="text-xs text-zinc-500">Help colleagues and friends access free professional document tools.</p>
            </div>
            <SocialShare title={`${data.h1} — Free Online Generator | Templix AI`} url={canonicalUrl} slug={slug} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
