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
            email: "support@templix-ai.whitesparksoft.com",
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
        <Section heading="Editorial Board & Security Compliance">
          <p className="mb-4">
            Every template blueprint and article published on Templix AI is subject to strict peer review by certified domain specialists:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-6">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Victoria Hayes, JD</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Legal & Contract Advisory</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">E-SIGN Act (15 U.S.C. ch. 96) & commercial agreement models.</p>
              </div>
              <a href="https://linkedin.com/in/victoria-hayes-jd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline pt-2">
                LinkedIn &rarr;
              </a>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Marcus Vance, CISSP</h4>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Security & Privacy Audit</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">ISO 27001 controls, SOC2 compliance & zero client data logging.</p>
              </div>
              <a href="https://linkedin.com/in/marcus-vance-cissp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline pt-2">
                LinkedIn &rarr;
              </a>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Elena Rostova, SHRM-SCP</h4>
                <p className="text-xs text-violet-600 dark:text-violet-400 font-semibold">HR & ATS Parser Specialist</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">HR Open Standards &amp; HRXML resume parsing rules &amp; corporate HR compliance.</p>
              </div>
              <a href="https://linkedin.com/in/elena-rostova-shrm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold text-violet-600 dark:text-violet-400 hover:underline pt-2">
                LinkedIn &rarr;
              </a>
            </div>
          </div>
        </Section>

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
