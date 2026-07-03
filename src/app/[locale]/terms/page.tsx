import type { Metadata } from "next";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Terms of Service",
    description:
      "The terms that govern your use of Templix AI's free document templates, editor, and export tools.",
    slug: "/terms",
    locale,
  }) as Metadata;
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <InfoPageShell
      locale={locale}
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="Please read these terms carefully. They govern your use of Templix AI."
      updated="July 3, 2026"
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Templix AI. By
        using the service, you agree to these Terms. If you do not agree, please do not use the service.
      </p>

      <Section heading="1. Use of the Service">
        <p>
          Templix AI provides professionally designed document templates and an editor that you can use
          to create, customize, and export documents. You may use the service for personal and
          commercial purposes, free of charge.
        </p>
      </Section>

      <Section heading="2. Your Content">
        <p>
          You retain all rights to the content and documents you create. You are responsible for the
          accuracy and legality of the information you enter. We do not claim ownership of your documents.
        </p>
      </Section>

      <Section heading="3. Templates & License">
        <p>
          The templates we provide are licensed to you for use in your own documents. You may not resell,
          redistribute, or repackage the raw templates themselves as a competing template library.
        </p>
      </Section>

      <Section heading="4. Acceptable Use">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Do not use the service for unlawful, fraudulent, or harmful purposes.</li>
          <li>Do not attempt to disrupt, reverse-engineer, or gain unauthorized access to the service.</li>
          <li>Do not use the service to create documents that infringe others&rsquo; rights.</li>
        </ul>
      </Section>

      <Section heading="5. No Legal Advice">
        <p>
          Contract, agreement, and letter templates are provided for convenience and do not constitute
          legal advice. For legally binding documents, consult a qualified professional in your
          jurisdiction.
        </p>
      </Section>

      <Section heading="6. Disclaimer & Limitation of Liability">
        <p>
          The service is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum
          extent permitted by law, Templix AI is not liable for any indirect or consequential damages
          arising from your use of the service.
        </p>
      </Section>

      <Section heading="7. Termination">
        <p>
          We may suspend or terminate access if these Terms are violated. You may stop using the service
          and delete your account at any time.
        </p>
      </Section>

      <Section heading="8. Changes to These Terms">
        <p>
          We may revise these Terms periodically. Continued use after changes means you accept the
          updated Terms.
        </p>
      </Section>

      <Section heading="9. Contact">
        <p>
          Questions about these Terms? Email{" "}
          <a href="mailto:legal@templix.ai" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">legal@templix.ai</a>.
        </p>
      </Section>
    </InfoPageShell>
  );
}
