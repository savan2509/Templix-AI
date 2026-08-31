import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import ContactForm from "@/components/ContactForm";
import Schema from "@/components/seo/Schema";
import { getDictionary } from "@/lib/i18n";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { PRODUCTION_URL, siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale).contact;
  return SEOEngine.generateMetadata({
    title: t.metaTitle,
    description: t.metaDescription,
    slug: "/contact",
    locale,
  }) as Metadata;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale).contact;

  return (
    <>
      <Schema
        data={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Templix AI",
            image: `${PRODUCTION_URL}/icon-512.png`,
            url: `${PRODUCTION_URL}/${locale}/contact`,
            telephone: "+1-415-890-3882",
            priceRange: "$0",
            address: {
              "@type": "PostalAddress",
              streetAddress: "535 Mission Street, 14th Floor",
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
      {/* Message form is the primary action — the old mailto cards duplicated
          it three times and buried the form below the fold. */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <div className="mb-7 flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
              It lands straight in our inbox and we reply to the email you give us —
              usually within one business day.
            </p>
          </div>
        </div>

        <ContactForm />

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-100 pt-5 dark:border-zinc-800">
          <ObfuscatedEmail
            user="whitesparktechnologies"
            domain="gmail.com"
            className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-colors"
            ariaLabel="Email customer support team directly at whitesparktechnologies@gmail.com"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shrink-0">
              <Mail className="h-4 w-4" />
            </span>
            <div className="min-w-0 text-left">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-500/80">Direct Email Desk</span>
              <span className="block truncate text-xs font-semibold">whitesparktechnologies&#64;gmail.com</span>
            </div>
          </ObfuscatedEmail>

          <a
            href="tel:+14158903882"
            className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
            aria-label="Call +1 (415) 890-3882"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shrink-0">
              <Phone className="h-4 w-4" />
            </span>
            <div className="min-w-0 text-left">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-600/80">Phone Support</span>
              <span className="block truncate text-xs font-semibold">+1 (415) 890-3882</span>
            </div>
          </a>
        </div>
      </div>

      {/* Google Maps Embed Location Map */}
      <Section heading="Google Maps Location & Business Office">
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Visit or locate our primary operations center on Google Maps:
        </p>
        <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <iframe
            title="Templix AI Headquarters Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808580858085%3A0x1082391203912!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">535 Mission Street, 14th Floor, San Francisco, CA 94105</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Templix AI Global Operations Center</p>
            </div>
          </div>
          <a
            href={siteConfig.links.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
            aria-label="Open Templix AI Google Business Profile in Google Maps"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </Section>

      <Section heading={t.beforeEmailHeading}>
        <p>
          {t.beforeEmailPre}
          <Link href={`/${locale}/faq`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.faqLink}</Link>
          {t.beforeEmailMid}
          <Link href={`/${locale}/blog`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">{t.guidesLink}</Link>
          {t.beforeEmailPost}
        </p>
      </Section>
    </InfoPageShell>
  </>
);
}
