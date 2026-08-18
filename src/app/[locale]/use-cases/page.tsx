import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { buildCanonical } from "@/lib/canonical";
import { Sparkles, FileText, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url = buildCanonical(locale, "use-cases");

  return {
    title: "Document Use Cases & AI Blueprint Directory | Templix AI",
    description: "Browse 48+ tailored document use cases for resumes, invoices, proposals, legal contracts, and HR documents with free PDF exports.",
    alternates: {
      canonical: url,
    },
  };
}

const USE_CASE_CATEGORIES = [
  {
    name: "Resumes & CV Builders",
    desc: "ATS-friendly resumes for freshers, engineers, nurses, teachers, designers, and managers.",
    items: [
      { title: "Resume Builder for Freshers", slug: "resume-builder-for-freshers" },
      { title: "Resume Builder for Software Engineers", slug: "resume-builder-for-software-engineers" },
      { title: "Resume Builder for Students", slug: "resume-builder-for-students" },
      { title: "Resume Builder for Teachers", slug: "resume-builder-for-teachers" },
      { title: "Resume Builder for Nurses", slug: "resume-builder-for-nurses" },
      { title: "Resume Builder for Accountants", slug: "resume-builder-for-accountants" },
      { title: "Resume Builder for Graphic Designers", slug: "resume-builder-for-graphic-designers" },
      { title: "Resume Builder for Marketing Professionals", slug: "resume-builder-for-marketing-professionals" },
      { title: "Resume Builder for Sales Executives", slug: "resume-builder-for-sales-executives" },
      { title: "Resume Builder for Civil Engineers", slug: "resume-builder-for-civil-engineers" },
      { title: "Resume Builder for Mechanical Engineers", slug: "resume-builder-for-mechanical-engineers" },
      { title: "Resume Builder for MBA Graduates", slug: "resume-builder-for-mba-graduates" }
    ]
  },
  {
    name: "Invoices & Financial Billing",
    desc: "Tax-compliant PDF invoices for freelancers, small businesses, consultants, and retail.",
    items: [
      { title: "Invoice Generator for Freelancers", slug: "invoice-generator-for-freelancers" },
      { title: "Invoice Generator for Small Businesses", slug: "invoice-generator-for-small-business" },
      { title: "Invoice Generator for Consultants", slug: "invoice-generator-for-consultants" },
      { title: "Invoice Generator for Photographers", slug: "invoice-generator-for-photographers" },
      { title: "Invoice Generator for Designers", slug: "invoice-generator-for-designers" },
      { title: "Invoice Generator for Digital Agencies", slug: "invoice-generator-for-digital-agencies" },
      { title: "Invoice Generator for Developers", slug: "invoice-generator-for-developers" },
      { title: "Invoice Generator for Contractors", slug: "invoice-generator-for-contractors" },
      { title: "Invoice Generator for Restaurants", slug: "invoice-generator-for-restaurants" },
      { title: "Invoice Generator for Retail Stores", slug: "invoice-generator-for-retail-stores" },
      { title: "Invoice Generator for E-commerce Sellers", slug: "invoice-generator-for-ecommerce-sellers" },
      { title: "Free GST Invoice Generator India", slug: "gst-invoice-generator-india" }
    ]
  },
  {
    name: "Cover Letters & Proposals",
    desc: "Tailored job application letters and high-converting client proposal templates.",
    items: [
      { title: "AI Cover Letter Generator", slug: "cover-letter-generator" },
      { title: "Cover Letter for Freshers", slug: "cover-letter-for-freshers" },
      { title: "Cover Letter for Software Engineers", slug: "cover-letter-for-software-engineers" },
      { title: "Cover Letter for Internships", slug: "cover-letter-for-internships" },
      { title: "Cover Letter for Teachers", slug: "cover-letter-for-teachers" },
      { title: "Cover Letter for Nurses", slug: "cover-letter-for-nurses" },
      { title: "Business Proposal Generator for Startups", slug: "business-proposal-generator" },
      { title: "Proposal Generator for Marketing Agencies", slug: "proposal-generator-for-marketing-agencies" },
      { title: "Proposal Generator for IT Companies", slug: "proposal-generator-for-it-companies" },
      { title: "Proposal Generator for Consultants", slug: "proposal-generator-for-consultants" },
      { title: "Proposal Generator for Freelancers", slug: "proposal-generator-for-freelancers" }
    ]
  },
  {
    name: "Contracts, HR & Agreements",
    desc: "Legally compliant service contracts, NDAs, offer letters, and employee documents.",
    items: [
      { title: "Contract Generator for Freelancers", slug: "contract-generator" },
      { title: "Service Agreement Generator", slug: "service-agreement-generator" },
      { title: "Employment Contract Generator", slug: "employment-contract-generator" },
      { title: "Rental Agreement Generator", slug: "rental-agreement-generator" },
      { title: "NDA Generator", slug: "nda-generator" },
      { title: "HR Document Generator", slug: "hr-document-generator" },
      { title: "Offer Letter Generator", slug: "offer-letter-generator" },
      { title: "Experience Letter Generator", slug: "experience-letter-generator" },
      { title: "Appointment Letter Generator", slug: "appointment-letter-generator" },
      { title: "Internship Certificate Generator", slug: "internship-certificate-generator" },
      { title: "Salary Slip Generator", slug: "salary-slip-generator" },
      { title: "Meeting Notes Generator", slug: "meeting-notes-generator" },
      { title: "AI Letter Generator", slug: "ai-letter-generator" }
    ]
  }
];

export default async function UseCasesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Hero */}
        <div className="bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> 48 Specialized Industry Blueprints
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
              Document Use Cases &amp; Blueprint Directory
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
              Find step-by-step guides, sample document previews, and free ATS-friendly blueprints tailored for your exact profession or business workflow.
            </p>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
          {[...USE_CASE_CATEGORIES].reverse().map((cat, idx) => (
            <section key={idx} className="space-y-4">
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{cat.name}</h2>
                <p className="text-xs text-zinc-500 mt-1">{cat.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...cat.items].reverse().map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/use-cases/${item.slug}`}
                    className="group p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all flex justify-between items-center"
                  >
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
