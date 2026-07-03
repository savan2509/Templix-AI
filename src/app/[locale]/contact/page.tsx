import type { Metadata } from "next";
import Link from "next/link";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";
import { Mail, LifeBuoy, MessageSquare } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Contact Us",
    description:
      "Get in touch with the Templix AI team for support, feedback, or partnership inquiries. We usually reply within one business day.",
    slug: "/contact",
    locale,
  }) as Metadata;
}

const CHANNELS = [
  { icon: Mail, title: "General & Support", text: "Questions, bugs, or feedback about the product.", email: "support@templix.ai" },
  { icon: MessageSquare, title: "Partnerships", text: "Collaborations, press, and business inquiries.", email: "hello@templix.ai" },
  { icon: LifeBuoy, title: "Privacy & Legal", text: "Data requests and legal questions.", email: "privacy@templix.ai" },
];

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <InfoPageShell
      locale={locale}
      eyebrow="We&rsquo;re here to help"
      title="Contact Us"
      subtitle="Have a question, found a bug, or want to partner with us? Reach out — we usually reply within one business day."
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {CHANNELS.map((c) => (
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

      <Section heading="Before you email">
        <p>
          Many common questions are answered on our{" "}
          <Link href={`/${locale}/faq`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">FAQ page</Link>{" "}
          and in our{" "}
          <Link href={`/${locale}/blog`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">guides</Link>.
          For the fastest help, include the template name and a short description of the issue.
        </p>
      </Section>
    </InfoPageShell>
  );
}
