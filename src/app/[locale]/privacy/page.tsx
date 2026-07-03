import type { Metadata } from "next";
import { SEOEngine } from "@/services/seo";
import InfoPageShell, { Section } from "@/components/InfoPageShell";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return SEOEngine.generateMetadata({
    title: "Privacy Policy",
    description:
      "How Templix AI collects, uses, and protects your data. Read our privacy practices for the free document template and editor platform.",
    slug: "/privacy",
    locale,
  }) as Metadata;
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <InfoPageShell
      locale={locale}
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Your privacy matters. This policy explains what we collect, why, and the choices you have."
      updated="July 3, 2026"
    >
      <p>
        This Privacy Policy describes how Templix AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
        information when you use our website, document templates, and editor. By using the service you
        agree to the practices described here.
      </p>

      <Section heading="1. Information We Collect">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Account data</strong> — if you sign in, we store your email address and name from your Google, GitHub, or email sign-in.</li>
          <li><strong>Documents you create</strong> — templates you customize are stored so you can return to them. You may delete them at any time.</li>
          <li><strong>Usage data</strong> — basic, aggregated analytics such as pages viewed, used to improve the product.</li>
        </ul>
        <p>We do <strong>not</strong> sell your personal data, and we never require payment to use the templates or editor.</p>
      </Section>

      <Section heading="2. How We Use Information">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To provide and maintain the template editor and your saved documents.</li>
          <li>To authenticate you and keep your account secure.</li>
          <li>To improve performance, fix bugs, and develop new features.</li>
          <li>To send you a sign-in (magic) link when you request one.</li>
        </ul>
      </Section>

      <Section heading="3. AI Processing">
        <p>
          When you use the AI rewrite assistant, the text you submit is sent securely to a third-party
          AI provider solely to generate your requested rewrite. It is not used to train models and is
          not retained by us beyond delivering the result.
        </p>
      </Section>

      <Section heading="4. Cookies">
        <p>
          We use essential cookies to keep you signed in and to remember your theme preference. We do
          not use advertising cookies. You can clear cookies in your browser at any time.
        </p>
      </Section>

      <Section heading="5. Data Retention & Security">
        <p>
          We retain your account and documents until you delete them or ask us to. We apply reasonable
          technical and organizational safeguards to protect your data, though no method of transmission
          over the internet is 100% secure.
        </p>
      </Section>

      <Section heading="6. Your Rights">
        <p>
          Depending on your location, you may have the right to access, correct, export, or delete your
          personal data. To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@templix.ai" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">privacy@templix.ai</a>.
        </p>
      </Section>

      <Section heading="7. Changes to This Policy">
        <p>
          We may update this policy from time to time. Material changes will be reflected by the
          &ldquo;Last updated&rdquo; date above.
        </p>
      </Section>

      <Section heading="8. Contact">
        <p>
          Questions about privacy? Email{" "}
          <a href="mailto:privacy@templix.ai" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">privacy@templix.ai</a>.
        </p>
      </Section>
    </InfoPageShell>
  );
}
