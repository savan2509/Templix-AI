import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import { getDictionary } from "@/lib/i18n";
import { Mail, LifeBuoy, MessageSquare } from "lucide-react";

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

  const channels = [
    { icon: Mail, title: t.channelSupportTitle, text: t.channelSupportText, email: "support@templix.ai" },
    { icon: MessageSquare, title: t.channelPartnershipsTitle, text: t.channelPartnershipsText, email: "hello@templix.ai" },
    { icon: LifeBuoy, title: t.channelLegalTitle, text: t.channelLegalText, email: "privacy@templix.ai" },
  ];

  return (
    <InfoPageShell
      locale={locale}
      eyebrow={t.eyebrow}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {channels.map((c) => (
          <a
            key={c.email}
            href={`mailto:${c.email}`}
            className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:border-blue-400/60 hover:shadow-md transition-all"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-3">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-white">{c.title}</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{c.text}</p>
            <p className="mt-3 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline break-all">{c.email}</p>
          </a>
        ))}
      </div>

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
  );
}
