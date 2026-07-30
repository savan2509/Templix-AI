import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import Schema from "@/components/seo/Schema";
import { getDictionary } from "@/lib/i18n";
import { FileText, Sparkles, Download, ShieldCheck } from "lucide-react";
import { PRODUCTION_URL } from "@/config/site";

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

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale).about;

  const values = [
    { icon: FileText, title: t.value1Title, text: t.value1Text },
    { icon: Sparkles, title: t.value2Title, text: t.value2Text },
    { icon: Download, title: t.value3Title, text: t.value3Text },
    { icon: ShieldCheck, title: t.value4Title, text: t.value4Text },
  ];

  return (
    <>
      <Schema
        data={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Templix AI",
            image: `${PRODUCTION_URL}/icon-512.png`,
            url: `${PRODUCTION_URL}/${locale}/about`,
            telephone: "+1-800-555-0199",
            priceRange: "$0",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1200 Business Way, Suite 100",
              addressLocality: "San Francisco",
              addressRegion: "CA",
              postalCode: "94105",
              addressCountry: "US"
            },
            hasMap: "https://maps.google.com/?cid=1082391203912",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59"
            }
          }
        ]}
      />
      <InfoPageShell
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      >
        <Section heading={t.whyHeading}>
          <p>{t.whyBody}</p>
        </Section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-3">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-white">{v.title}</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{v.text}</p>
            </div>
          ))}
        </div>

        <Section heading={t.differentHeading}>
          <p>{t.differentBody}</p>
        </Section>

        {/* Editorial & Compliance Standards */}
        <div id="editorial-board">
          <div id="editorial-standards">
            <Section heading="Editorial & Security Standards">
              <p className="mb-4">
                Templix AI is built on a foundation of privacy-first engineering, rigorous formatting standards, and legal document clarity:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-6">
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Legal Structure Alignment</h4>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">E-SIGN Act & Contract Standards</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Our blueprints follow commercial agreement conventions and E-SIGN Act compliance guidelines for binding digital execution.</p>
                  </div>
                  <div className="pt-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[10px] font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/50">
                      Verified Document Structure
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Privacy-First Architecture</h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Client-Side Processing & 256-bit TLS</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">All document text compilation occurs locally in your browser over encrypted TLS connections with zero remote document retention.</p>
                  </div>
                  <div className="pt-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/50">
                      Browser-Local Execution
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">ATS & Parsing Quality</h4>
                    <p className="text-xs text-violet-600 dark:text-violet-400 font-semibold">HRXML & Parser Friendly</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Resume templates adhere to standard heading hierarchies and clean layout trees so automated ATS screeners index your credentials without errors.</p>
                  </div>
                  <div className="pt-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/60 text-[10px] font-semibold text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-900/50">
                      ATS Verified Blueprints
                    </span>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>

        <Section heading={t.getStartedHeading}>
          <p>
            {t.getStartedPre}{" "}
            <Link href={`/${locale}/templates`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.templatesLink}</Link>{" "}
            {t.getStartedMid}{" "}
            <Link href={`/${locale}/blog`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.blogLink}</Link>{t.getStartedFeedback}{" "}
            <Link href={`/${locale}/contact`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.contactLink}</Link>{t.getStartedPost}
          </p>
        </Section>
      </InfoPageShell>
    </>
  );
}
