import * as fs from "fs";
import * as path from "path";

export interface IndividualFAQ {
  slug: string;
  category: string;
  categoryTitle: string;
  question: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  contentHtml: string;
  internalLinks: { text: string; href: string }[];
  relatedFaqSlugs: string[];
}

// All 150 question definitions
const RAW_QUESTIONS = [
  // ── 1. RESUME FAQS (30) ───────────────────────────────────────────────────
  { cat: "resumes", title: "Resume FAQs", q: "What is an ATS-friendly resume?", slug: "what-is-an-ats-friendly-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I create a professional resume?", slug: "how-to-create-a-professional-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "What should I include in a resume?", slug: "what-to-include-in-a-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "How long should a resume be?", slug: "how-long-should-a-resume-be" },
  { cat: "resumes", title: "Resume FAQs", q: "What is the best resume format?", slug: "what-is-the-best-resume-format" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I write a resume summary?", slug: "how-to-write-a-resume-summary" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I list work experience?", slug: "how-to-list-work-experience-on-a-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I add skills to a resume?", slug: "how-to-add-skills-to-a-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I write a resume with no experience?", slug: "how-to-write-a-resume-with-no-experience" },
  { cat: "resumes", title: "Resume FAQs", q: "What are the best resume templates?", slug: "best-resume-templates" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I optimize my resume for ATS?", slug: "how-to-optimize-resume-for-ats" },
  { cat: "resumes", title: "Resume FAQs", q: "Should I include references on a resume?", slug: "should-i-include-references-on-a-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "What are resume keywords?", slug: "what-are-resume-keywords" },
  { cat: "resumes", title: "Resume FAQs", q: "Can AI create a professional resume?", slug: "can-ai-create-a-professional-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I write achievements on a resume?", slug: "how-to-write-achievements-on-a-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "What's the difference between a CV and a resume?", slug: "difference-between-cv-and-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "Should I include a photo on my resume?", slug: "should-i-include-a-photo-on-my-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I update an old resume?", slug: "how-to-update-an-old-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "What fonts are best for resumes?", slug: "best-fonts-for-resumes" },
  { cat: "resumes", title: "Resume FAQs", q: "How many pages should a resume be?", slug: "how-many-pages-should-a-resume-be" },
  { cat: "resumes", title: "Resume FAQs", q: "What is a resume objective?", slug: "what-is-a-resume-objective" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I write a resume for freshers?", slug: "how-to-write-a-resume-for-freshers" },
  { cat: "resumes", title: "Resume FAQs", q: "How do I make my resume stand out?", slug: "how-to-make-my-resume-stand-out" },
  { cat: "resumes", title: "Resume FAQs", q: "How often should I update my resume?", slug: "how-often-should-i-update-my-resume" },
  { cat: "resumes", title: "Resume FAQs", q: "Can I download my resume as PDF?", slug: "can-i-download-my-resume-as-pdf" },
  { cat: "resumes", title: "Resume FAQs", q: "What resume mistakes should I avoid?", slug: "resume-mistakes-to-avoid" },
  { cat: "resumes", title: "Resume FAQs", q: "Is a one-page resume enough?", slug: "is-a-one-page-resume-enough" },
  { cat: "resumes", title: "Resume FAQs", q: "What are ATS resume keywords?", slug: "what-are-ats-resume-keywords" },
  { cat: "resumes", title: "Resume FAQs", q: "How do recruiters scan resumes?", slug: "how-do-recruiters-scan-resumes" },
  { cat: "resumes", title: "Resume FAQs", q: "Which resume builder is best?", slug: "which-resume-builder-is-best" },

  // ── 2. INVOICE FAQS (25) ──────────────────────────────────────────────────
  { cat: "invoices", title: "Invoice FAQs", q: "What is an invoice?", slug: "what-is-an-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "How do I create an invoice?", slug: "how-to-create-an-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "What should an invoice include?", slug: "what-should-an-invoice-include" },
  { cat: "invoices", title: "Invoice FAQs", q: "What is a GST invoice?", slug: "what-is-a-gst-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "How do I send an invoice?", slug: "how-to-send-an-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "How do I number invoices?", slug: "how-to-number-invoices" },
  { cat: "invoices", title: "Invoice FAQs", q: "Can I create invoices online?", slug: "can-i-create-invoices-online" },
  { cat: "invoices", title: "Invoice FAQs", q: "What is a proforma invoice?", slug: "what-is-a-proforma-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "What is a commercial invoice?", slug: "what-is-a-commercial-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "What's the difference between an invoice and a receipt?", slug: "difference-between-invoice-and-receipt" },
  { cat: "invoices", title: "Invoice FAQs", q: "How do freelancers create invoices?", slug: "how-freelancers-create-invoices" },
  { cat: "invoices", title: "Invoice FAQs", q: "What payment terms should I include?", slug: "invoice-payment-terms-to-include" },
  { cat: "invoices", title: "Invoice FAQs", q: "How do I calculate GST?", slug: "how-to-calculate-gst" },
  { cat: "invoices", title: "Invoice FAQs", q: "Can I download invoices as PDF?", slug: "can-i-download-invoices-as-pdf" },
  { cat: "invoices", title: "Invoice FAQs", q: "What is an overdue invoice?", slug: "what-is-an-overdue-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "How do I edit an invoice?", slug: "how-to-edit-an-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "Can I add my logo to an invoice?", slug: "can-i-add-logo-to-an-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "What invoice format is best?", slug: "best-invoice-format" },
  { cat: "invoices", title: "Invoice FAQs", q: "How do I cancel an invoice?", slug: "how-to-cancel-an-invoice" },
  { cat: "invoices", title: "Invoice FAQs", q: "What is an invoice due date?", slug: "what-is-an-invoice-due-date" },
  { cat: "invoices", title: "Invoice FAQs", q: "What software is best for invoices?", slug: "best-software-for-invoices" },
  { cat: "invoices", title: "Invoice FAQs", q: "Can AI generate invoices?", slug: "can-ai-generate-invoices" },
  { cat: "invoices", title: "Invoice FAQs", q: "Is Templix AI invoice generator free?", slug: "is-templix-ai-invoice-generator-free" },
  { cat: "invoices", title: "Invoice FAQs", q: "Can I share invoices via email?", slug: "can-i-share-invoices-via-email" },
  { cat: "invoices", title: "Invoice FAQs", q: "How do I print invoices?", slug: "how-to-print-invoices" },

  // ── 3. COVER LETTER FAQS (15) ──────────────────────────────────────────────
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "What is a cover letter?", slug: "what-is-a-cover-letter" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "Why do I need a cover letter?", slug: "why-do-i-need-a-cover-letter" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "How long should a cover letter be?", slug: "how-long-should-a-cover-letter-be" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "How do I start a cover letter?", slug: "how-to-start-a-cover-letter" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "What should I include?", slug: "what-to-include-in-a-cover-letter" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "Can AI write cover letters?", slug: "can-ai-write-cover-letters" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "What's the best cover letter format?", slug: "best-cover-letter-format" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "Should every job have a unique cover letter?", slug: "should-every-job-have-a-unique-cover-letter" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "Can I download my cover letter?", slug: "can-i-download-my-cover-letter" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "What mistakes should I avoid?", slug: "cover-letter-mistakes-to-avoid" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "How do I address a hiring manager?", slug: "how-to-address-a-hiring-manager" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "How do I end a cover letter?", slug: "how-to-end-a-cover-letter" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "What keywords should I use?", slug: "cover-letter-keywords-to-use" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "Is a cover letter required?", slug: "is-a-cover-letter-required" },
  { cat: "cover-letters", title: "Cover Letter FAQs", q: "What's the difference between a cover letter and resume?", slug: "difference-between-cover-letter-and-resume" },

  // ── 4. PROPOSAL FAQS (15) ─────────────────────────────────────────────────
  { cat: "proposals", title: "Proposal FAQs", q: "What is a business proposal?", slug: "what-is-a-business-proposal" },
  { cat: "proposals", title: "Proposal FAQs", q: "How do I write a proposal?", slug: "how-to-write-a-proposal" },
  { cat: "proposals", title: "Proposal FAQs", q: "What sections should a proposal include?", slug: "proposal-sections-to-include" },
  { cat: "proposals", title: "Proposal FAQs", q: "Can AI generate proposals?", slug: "can-ai-generate-proposals" },
  { cat: "proposals", title: "Proposal FAQs", q: "What's the difference between a proposal and quotation?", slug: "difference-between-proposal-and-quotation" },
  { cat: "proposals", title: "Proposal FAQs", q: "How long should a proposal be?", slug: "how-long-should-a-proposal-be" },
  { cat: "proposals", title: "Proposal FAQs", q: "How do I price a proposal?", slug: "how-to-price-a-proposal" },
  { cat: "proposals", title: "Proposal FAQs", q: "What proposal templates are available?", slug: "available-proposal-templates" },
  { cat: "proposals", title: "Proposal FAQs", q: "Can I export proposals as PDF?", slug: "can-i-export-proposals-as-pdf" },
  { cat: "proposals", title: "Proposal FAQs", q: "How do I send proposals?", slug: "how-to-send-proposals" },
  { cat: "proposals", title: "Proposal FAQs", q: "What is a project proposal?", slug: "what-is-a-project-proposal" },
  { cat: "proposals", title: "Proposal FAQs", q: "What is a sales proposal?", slug: "what-is-a-sales-proposal" },
  { cat: "proposals", title: "Proposal FAQs", q: "What is a marketing proposal?", slug: "what-is-a-marketing-proposal" },
  { cat: "proposals", title: "Proposal FAQs", q: "How do I write a winning proposal?", slug: "how-to-write-a-winning-proposal" },
  { cat: "proposals", title: "Proposal FAQs", q: "What proposal mistakes should I avoid?", slug: "proposal-mistakes-to-avoid" },

  // ── 5. CONTRACTS FAQS (15) ────────────────────────────────────────────────
  { cat: "contracts", title: "Contracts FAQs", q: "What is a contract?", slug: "what-is-a-contract" },
  { cat: "contracts", title: "Contracts FAQs", q: "What is an NDA?", slug: "what-is-an-nda" },
  { cat: "contracts", title: "Contracts FAQs", q: "How do I create a contract?", slug: "how-to-create-a-contract" },
  { cat: "contracts", title: "Contracts FAQs", q: "Can AI generate contracts?", slug: "can-ai-generate-contracts" },
  { cat: "contracts", title: "Contracts FAQs", q: "What is a service agreement?", slug: "what-is-a-service-agreement" },
  { cat: "contracts", title: "Contracts FAQs", q: "What's the difference between a contract and agreement?", slug: "difference-between-contract-and-agreement" },
  { cat: "contracts", title: "Contracts FAQs", q: "Are online contracts legally valid?", slug: "are-online-contracts-legally-valid" },
  { cat: "contracts", title: "Contracts FAQs", q: "What should every contract include?", slug: "what-should-every-contract-include" },
  { cat: "contracts", title: "Contracts FAQs", q: "How do I sign contracts digitally?", slug: "how-to-sign-contracts-digitally" },
  { cat: "contracts", title: "Contracts FAQs", q: "Can I edit contracts later?", slug: "can-i-edit-contracts-later" },
  { cat: "contracts", title: "Contracts FAQs", q: "What is an employment contract?", slug: "what-is-an-employment-contract" },
  { cat: "contracts", title: "Contracts FAQs", q: "What is a rental agreement?", slug: "what-is-a-rental-agreement" },
  { cat: "contracts", title: "Contracts FAQs", q: "Can I export contracts as PDF?", slug: "can-i-export-contracts-as-pdf" },
  { cat: "contracts", title: "Contracts FAQs", q: "What is a freelance contract?", slug: "what-is-a-freelance-contract" },
  { cat: "contracts", title: "Contracts FAQs", q: "Do I need a lawyer to create contracts?", slug: "do-i-need-a-lawyer-to-create-contracts" },

  // ── 6. HR FAQS (15) ───────────────────────────────────────────────────────
  { cat: "hr", title: "HR FAQs", q: "What is an offer letter?", slug: "what-is-an-offer-letter" },
  { cat: "hr", title: "HR FAQs", q: "What is an appointment letter?", slug: "what-is-an-appointment-letter" },
  { cat: "hr", title: "HR FAQs", q: "What is an experience letter?", slug: "what-is-an-experience-letter" },
  { cat: "hr", title: "HR FAQs", q: "What is a salary slip?", slug: "what-is-a-salary-slip" },
  { cat: "hr", title: "HR FAQs", q: "How do I create HR documents?", slug: "how-to-create-hr-documents" },
  { cat: "hr", title: "HR FAQs", q: "Can AI generate HR documents?", slug: "can-ai-generate-hr-documents" },
  { cat: "hr", title: "HR FAQs", q: "What should an offer letter include?", slug: "what-should-an-offer-letter-include" },
  { cat: "hr", title: "HR FAQs", q: "What is an internship certificate?", slug: "what-is-an-internship-certificate" },
  { cat: "hr", title: "HR FAQs", q: "How do I issue experience letters?", slug: "how-to-issue-experience-letters" },
  { cat: "hr", title: "HR FAQs", q: "What payroll information is required?", slug: "what-payroll-information-is-required" },
  { cat: "hr", title: "HR FAQs", q: "Can I customize HR templates?", slug: "can-i-customize-hr-templates" },
  { cat: "hr", title: "HR FAQs", q: "Can I add my company logo?", slug: "can-i-add-company-logo-to-hr-documents" },
  { cat: "hr", title: "HR FAQs", q: "Can HR documents be downloaded?", slug: "can-hr-documents-be-downloaded" },
  { cat: "hr", title: "HR FAQs", q: "What's the best HR document format?", slug: "best-hr-document-format" },
  { cat: "hr", title: "HR FAQs", q: "Are HR templates free?", slug: "are-hr-templates-free" },

  // ── 7. PDF FAQS (15) ──────────────────────────────────────────────────────
  { cat: "pdf", title: "PDF FAQs", q: "How do I edit PDF files?", slug: "how-to-edit-pdf-files" },
  { cat: "pdf", title: "PDF FAQs", q: "How do I merge PDFs?", slug: "how-to-merge-pdfs" },
  { cat: "pdf", title: "PDF FAQs", q: "How do I split PDFs?", slug: "how-to-split-pdfs" },
  { cat: "pdf", title: "PDF FAQs", q: "How do I compress PDFs?", slug: "how-to-compress-pdfs" },
  { cat: "pdf", title: "PDF FAQs", q: "How do I convert PDF to Word?", slug: "how-to-convert-pdf-to-word" },
  { cat: "pdf", title: "PDF FAQs", q: "How do I convert Word to PDF?", slug: "how-to-convert-word-to-pdf" },
  { cat: "pdf", title: "PDF FAQs", q: "Can AI summarize PDFs?", slug: "can-ai-summarize-pdfs" },
  { cat: "pdf", title: "PDF FAQs", q: "Is my PDF secure?", slug: "is-my-pdf-secure" },
  { cat: "pdf", title: "PDF FAQs", q: "Can I edit PDFs online?", slug: "can-i-edit-pdfs-online" },
  { cat: "pdf", title: "PDF FAQs", q: "What is OCR?", slug: "what-is-ocr" },
  { cat: "pdf", title: "PDF FAQs", q: "Can I sign PDFs?", slug: "can-i-sign-pdfs" },
  { cat: "pdf", title: "PDF FAQs", q: "Can I password-protect PDFs?", slug: "can-i-password-protect-pdfs" },
  { cat: "pdf", title: "PDF FAQs", q: "What's the best PDF editor?", slug: "best-pdf-editor" },
  { cat: "pdf", title: "PDF FAQs", q: "Can I remove PDF pages?", slug: "can-i-remove-pdf-pages" },
  { cat: "pdf", title: "PDF FAQs", q: "Are PDF tools free?", slug: "are-pdf-tools-free" },

  // ── 8. AI TOOLS FAQS (20) ─────────────────────────────────────────────────
  { cat: "ai-tools", title: "AI Tools FAQs", q: "What is Templix AI?", slug: "what-is-templix-ai" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "How does Templix AI work?", slug: "how-does-templix-ai-work" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Is Templix AI free?", slug: "is-templix-ai-free" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "What AI models does Templix AI use?", slug: "what-ai-models-does-templix-ai-use" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Can AI generate documents?", slug: "can-ai-generate-documents" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Is AI writing accurate?", slug: "is-ai-writing-accurate" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Can AI create business documents?", slug: "can-ai-create-business-documents" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Is my data secure?", slug: "is-my-data-secure" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Can I export documents?", slug: "can-i-export-documents" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Does Templix AI support PDF?", slug: "does-templix-ai-support-pdf" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Can I collaborate with others?", slug: "can-i-collaborate-with-others" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Does Templix AI support multiple languages?", slug: "does-templix-ai-support-multiple-languages" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Can I edit AI-generated content?", slug: "can-i-edit-ai-generated-content" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "How fast does AI generate documents?", slug: "how-fast-does-ai-generate-documents" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Can I use Templix AI for business?", slug: "can-i-use-templix-ai-for-business" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Does Templix AI work on mobile?", slug: "does-templix-ai-work-on-mobile" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Can I save my documents?", slug: "can-i-save-my-documents" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "How do I contact support?", slug: "how-do-i-contact-support" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "What makes Templix AI different?", slug: "what-makes-templix-ai-different" },
  { cat: "ai-tools", title: "AI Tools FAQs", q: "Why should I choose Templix AI?", slug: "why-should-i-choose-templix-ai" },
];

function getCategoryInternalLinks(cat: string) {
  switch (cat) {
    case "resumes":
      return [
        { text: "AI Resume Builder", href: "/ai-resume-builder" },
        { text: "ATS Resume Checker", href: "/ats-resume-checker" },
        { text: "Resume Templates Hub", href: "/resume-templates" },
        { text: "Templix AI vs Zety", href: "/blog/templix-ai-vs-zety" }
      ];
    case "invoices":
      return [
        { text: "AI Invoice Generator", href: "/ai-invoice-generator" },
        { text: "GST Invoice Generator", href: "/gst-invoice-generator" },
        { text: "Invoice Templates Hub", href: "/invoice-templates" },
        { text: "Templix AI vs Canva", href: "/blog/templix-ai-vs-canva" }
      ];
    case "cover-letters":
      return [
        { text: "AI Cover Letter Generator", href: "/ai-cover-letter-generator" },
        { text: "Cover Letter Templates", href: "/cover-letter-templates" },
        { text: "AI Resume Builder", href: "/ai-resume-builder" }
      ];
    case "proposals":
      return [
        { text: "Business Proposal Generator", href: "/business-proposal-generator" },
        { text: "Proposal Templates Hub", href: "/templates/proposals" },
        { text: "Templix AI vs Notion", href: "/blog/templix-ai-vs-notion" }
      ];
    case "contracts":
      return [
        { text: "NDA Generator", href: "/nda-generator" },
        { text: "AI Contract Generator", href: "/ai-contract-generator" },
        { text: "Contract Templates Hub", href: "/templates/contracts" }
      ];
    case "hr":
      return [
        { text: "Offer Letter Generator", href: "/tools/offer-letter-generator" },
        { text: "HR Document Templates", href: "/templates/reports" },
        { text: "AI Resume Builder", href: "/ai-resume-builder" }
      ];
    case "pdf":
      return [
        { text: "Free PDF to Word Converter", href: "/tools/pdf-to-word" },
        { text: "AI PDF Summarizer", href: "/tools/pdf-summarizer" },
        { text: "Templix AI vs Adobe Acrobat", href: "/blog/templix-ai-vs-adobe-acrobat" }
      ];
    default:
      return [
        { text: "AI Document Tools", href: "/tools" },
        { text: "All 30 Master Landing Pages", href: "/use-cases" },
        { text: "Templix AI vs ChatGPT", href: "/blog/templix-ai-vs-chatgpt" }
      ];
  }
}

function buildFaqHtml(qItem: typeof RAW_QUESTIONS[0]) {
  const titleLower = qItem.q.toLowerCase();
  return `
<div class="space-y-6 text-zinc-700 dark:text-zinc-300">
  <p class="text-lg leading-relaxed font-medium text-zinc-800 dark:text-zinc-200">
    Understanding <strong>${qItem.q}</strong> is essential for creating professional business, career, and legal documents. Templix AI provides instant automated tools and templates to help you streamline this process.
  </p>

  <h2 class="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-3">1. Key Overview &amp; Definition</h2>
  <p>
    When addressing ${titleLower}, professionals must focus on clarity, industry compliance, and proper formatting. Whether you are drafting a document for client billing, legal protection, or career advancement, adhering to modern standards ensures optimal results.
  </p>

  <h2 class="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-3">2. Essential Steps &amp; Best Practices</h2>
  <ul class="list-disc pl-6 space-y-2">
    <li><strong>Use Clean Formatting:</strong> Ensure proper margins, readable typography, and structured section headers.</li>
    <li><strong>Leverage AI Assistance:</strong> Use Templix AI tools to rephrase bullet points, fix grammar, and calculate totals automatically.</li>
    <li><strong>Verify Compliance:</strong> Check for ATS keyword alignment, tax math accuracy, or legal clause completeness depending on the document type.</li>
    <li><strong>Export to Standard Formats:</strong> Always download final versions as high-resolution PDF or Word (.docx) files.</li>
  </ul>

  <h2 class="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-3">3. Common Mistakes to Avoid</h2>
  <p>
    Avoid manual calculation errors, missing contact details, inconsistent layout boundaries, and using non-standard file formats that hinder automated parsers or client review.
  </p>

  <h2 class="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-3">4. How Templix AI Solves This Automatically</h2>
  <p>
    Templix AI eliminates manual guesswork by providing over 440+ pre-filled blueprints, real-time live preview paper, instant tax and subtotal math, and built-in AI rewriting with zero sign-up paywalls.
  </p>
</div>
  `.trim();
}

console.log("Generating 150 individual FAQ dataset...");

const allIndividualFaqs: IndividualFAQ[] = RAW_QUESTIONS.map((qItem, idx) => {
  const sameCategorySlugs = RAW_QUESTIONS
    .filter((other) => other.cat === qItem.cat && other.slug !== qItem.slug)
    .map((other) => other.slug);

  // Grab 6 related FAQ slugs
  const relatedFaqSlugs = sameCategorySlugs.slice(0, 6);

  return {
    slug: qItem.slug,
    category: qItem.cat,
    categoryTitle: qItem.title,
    question: qItem.q,
    h1: qItem.q,
    metaTitle: `${qItem.q} – Complete Guide & Answers`,
    metaDescription: `Find expert answers and step-by-step guidance for "${qItem.q}". Learn best practices, formatting rules, and free tools on Templix AI.`,
    keywords: [qItem.q.toLowerCase(), `${qItem.cat} guide`, `templix ai ${qItem.cat}`],
    summary: `Comprehensive answer and expert guidance for "${qItem.q}". Learn key steps, best practices, and templates.`,
    contentHtml: buildFaqHtml(qItem),
    internalLinks: getCategoryInternalLinks(qItem.cat),
    relatedFaqSlugs
  };
});

const fileHeader = `/**
 * Templix AI – 150 Individual Indexable FAQ Pages Dataset
 * Generated for SEO indexability & long-tail search targeting.
 */

export interface IndividualFAQ {
  slug: string;
  category: string;
  categoryTitle: string;
  question: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  contentHtml: string;
  internalLinks: { text: string; href: string }[];
  relatedFaqSlugs: string[];
}

export const INDIVIDUAL_FAQS: IndividualFAQ[] = ${JSON.stringify(allIndividualFaqs, null, 2)};

export function getIndividualFaq(slug: string): IndividualFAQ | undefined {
  return INDIVIDUAL_FAQS.find((f) => f.slug === slug);
}

export const ALL_INDIVIDUAL_FAQ_SLUGS = INDIVIDUAL_FAQS.map((f) => f.slug);
`;

const outputPath = path.join(process.cwd(), "src/data/faq-individual.ts");
fs.writeFileSync(outputPath, fileHeader, "utf-8");
console.log(`✅ Successfully generated 150 Individual FAQs to ${outputPath}`);
