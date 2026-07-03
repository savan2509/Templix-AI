import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import { FileText, Sparkles, Download, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "About Us",
    description:
      "Templix AI helps builders, creators, and consultants create professional invoices, resumes, contracts, and proposals in seconds — free.",
    slug: "/about",
    locale,
  }) as Metadata;
}

const VALUES = [
  { icon: FileText, title: "180+ Templates", text: "Professionally designed layouts across 8 document categories." },
  { icon: Sparkles, title: "AI-Assisted", text: "Rewrite, adjust tone, and polish your text in one click." },
  { icon: Download, title: "Free Exports", text: "Download to PDF, DOCX, or print — no signup, no watermark." },
  { icon: ShieldCheck, title: "Privacy-First", text: "Your documents are yours. We never sell your data." },
];

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <InfoPageShell
      locale={locale}
      eyebrow="Our Story"
      title="About Templix AI"
      subtitle="We make professional document creation effortless — beautiful templates, live editing, and AI, all free."
    >
      <Section heading="Why we built Templix AI">
        <p>
          Creating a clean invoice, a standout resume, or a solid contract shouldn&rsquo;t require
          expensive software or design skills. We built Templix AI so anyone — freelancers, small
          businesses, students, and consultants — can start from a polished template, customize it in a
          live editor, and export a print-ready document in minutes.
        </p>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {VALUES.map((v) => (
          <div key={v.title} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-3">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-white">{v.title}</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{v.text}</p>
          </div>
        ))}
      </div>

      <Section heading="What makes us different">
        <p>
          Every template is more than a static file — it&rsquo;s a structured document you can edit
          block by block, fill with your details, translate, and restyle. Our AI assistant helps you
          write better copy, and everything exports cleanly to the formats you actually need.
        </p>
      </Section>

      <Section heading="Get started">
        <p>
          Browse our free{" "}
          <Link href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">document templates</Link>{" "}
          or read practical guides on our{" "}
          <Link href={`/${locale}/blog`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">blog</Link>.
          Have feedback? We&rsquo;d love to hear from you on our{" "}
          <Link href={`/${locale}/contact`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">contact page</Link>.
        </p>
      </Section>
    </InfoPageShell>
  );
}
