export interface CategoryHubData {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  heroSubtitle: string;
  categorySlug: string; // maps to internal fallback template category
  icon: string;
  features: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedProducts: { name: string; href: string }[];
}

export const CATEGORY_HUBS: CategoryHubData[] = [
  {
    slug: "resume",
    name: "Resume Templates",
    title: "Free Resume Templates & AI Resume Builder",
    metaTitle: "Free Resume Templates & AI Resume Builder | Templix AI",
    description: "Browse 70+ professional, ATS-friendly resume templates. Customize online and export to PDF or Word.",
    metaDescription: "Free resume templates and AI resume builder. Download ATS-friendly resume formats for software engineers, students, nurses, and managers.",
    primaryKeyword: "resume templates",
    h1: "Free Resume Templates & AI Builder",
    heroSubtitle: "Build HRXML-compliant, ATS-friendly resumes in minutes using professional layouts and AI bullet point generation.",
    categorySlug: "resumes",
    icon: "FileText",
    features: [
      { title: "ATS Single-Column Typography", desc: "Designed to parse cleanly into Greenhouse, Workday, and Taleo HR screeners." },
      { title: "AI Bullet Enhancer", desc: "Transform job duties into impact metrics with built-in LLM assistance." },
      { title: "Dual Vector PDF & Word Export", desc: "Export crisp PDFs or editable Microsoft Word (.docx) files with no watermark." },
    ],
    faqs: [
      { question: "Are these resume templates ATS-friendly?", answer: "Yes! All Templix AI resume templates use single-column, HRXML-standard typography that parses seamlessly across Workday, Greenhouse, and Taleo." },
      { question: "Can I download my resume in Word and PDF formats?", answer: "Yes, you can export your completed resume as an editable Microsoft Word (.docx) or print-ready PDF file." },
    ],
    relatedProducts: [
      { name: "AI Resume Builder", href: "/products/ai-resume-builder" },
      { name: "ATS Resume Checker", href: "/products/ats-resume-checker" },
      { name: "AI Cover Letter Generator", href: "/products/ai-cover-letter-generator" },
    ],
  },
  {
    slug: "invoice",
    name: "Invoice Templates",
    title: "Free Invoice Templates & AI Invoice Generator",
    metaTitle: "Free Invoice Templates & AI Invoice Generator | Templix AI",
    description: "Browse professional invoice templates, GST invoices, freelancer invoices, and AI invoice tools. Download Word, PDF, and Excel templates for free.",
    metaDescription: "Free invoice templates and online invoice generator. Download GST/VAT invoice formats for freelancers, agencies, consultants, and retail.",
    primaryKeyword: "invoice templates",
    h1: "Free Invoice Templates & Generator",
    heroSubtitle: "Issue tax-compliant GST/VAT invoices with auto-calculated subtotals, custom logo branding, and instant PDF download.",
    categorySlug: "invoices",
    icon: "Receipt",
    features: [
      { title: "Auto Subtotals & Tax Math", desc: "Zero calculation errors — line totals, discounts, and GST/VAT compute automatically." },
      { title: "Global Tax Formats", desc: "Pre-configured for GST (CGST/SGST/IGST), VAT, Sales Tax, and international IBAN wire details." },
      { title: "Custom Branding & Terms", desc: "Upload company logos and set Net 15/30 payment terms easily." },
    ],
    faqs: [
      { question: "Can I calculate GST and VAT automatically?", answer: "Yes! Simply enter line items and select your tax rate — subtotals and grand totals calculate instantly." },
      { question: "Is sign-up required to create invoices?", answer: "No! Templix AI provides free invoice generation and instant PDF downloads with zero sign-up." },
    ],
    relatedProducts: [
      { name: "AI Invoice Generator", href: "/products/ai-invoice-generator" },
      { name: "GST Invoice Generator", href: "/products/gst-invoice-generator" },
      { name: "Receipt Generator", href: "/products/receipt-generator" },
    ],
  },
  {
    slug: "proposal",
    name: "Proposal Templates",
    title: "Free Business Proposal Templates",
    metaTitle: "Free Business Proposal Templates & Generator | Templix AI",
    description: "Win clients with free business proposal templates for web design, SEO, marketing, and consulting.",
    metaDescription: "Download professional business proposal templates. Executive summaries, scope of work matrices, milestone pricing tables, and PDF export.",
    primaryKeyword: "proposal templates",
    h1: "Free Business Proposal Templates",
    heroSubtitle: "Draft high-converting client proposals featuring structured executive summaries, pricing matrices, and sign-off acceptance lines.",
    categorySlug: "proposals",
    icon: "Briefcase",
    features: [
      { title: "Proven Closing Structure", desc: "Follows proven sales frameworks: Problem -> Strategy -> Scope -> Pricing -> Sign-off." },
      { title: "Milestone Pricing Tables", desc: "Present fixed project fees, monthly retainers, or tiered pricing options clearly." },
      { title: "Digital Acceptance Line", desc: "Include formal signature lines to accelerate contract approval." },
    ],
    faqs: [
      { question: "How do proposal templates help close deals?", answer: "By providing structured pricing tables, clear deliverable scopes, and formal signature lines that reduce client approval friction." },
      { question: "Can I export proposals to PDF?", answer: "Yes, export clean vector PDFs ready for client review and signing." },
    ],
    relatedProducts: [
      { name: "Proposal Generator", href: "/products/proposal-generator" },
      { name: "Quotation Generator", href: "/products/quotation-generator" },
    ],
  },
  {
    slug: "contract",
    name: "Contract Templates",
    title: "Free Legal Contract & Agreement Templates",
    metaTitle: "Free Legal Contract & Agreement Templates | Templix AI",
    description: "Draft legally binding contracts, service agreements, NDAs, and employment contracts online.",
    metaDescription: "Free legal contract templates. Draft mutual NDAs, freelance service agreements, and employment contracts with enforceable legal clauses.",
    primaryKeyword: "contract templates",
    h1: "Free Contract & Agreement Templates",
    heroSubtitle: "Protect your business with legally structured service agreements, NDAs, and freelance contracts.",
    categorySlug: "contracts",
    icon: "Shield",
    features: [
      { title: "Enforceable Legal Clauses", desc: "Includes governing law, confidentiality, IP transfer, and liability limit provisions." },
      { title: "Confidentiality & NDA Protection", desc: "Protect proprietary code, trade secrets, and client data." },
      { title: "100% Client-Side Privacy", desc: "Draft legal terms in total privacy. Confidential contract agreements stay in browser memory." },
    ],
    faqs: [
      { question: "Are generated contracts legally binding?", answer: "Yes, provided the contract contains essential legal elements and is signed by authorized representatives." },
      { question: "Is PDF export free for contracts?", answer: "Yes, 100% free with no sign-up or watermark." },
    ],
    relatedProducts: [
      { name: "Contract Generator", href: "/products/contract-generator" },
      { name: "NDA Generator", href: "/products/nda-generator" },
    ],
  },
  {
    slug: "letter",
    name: "Letter Templates",
    title: "Free Business Letter & Cover Letter Templates",
    metaTitle: "Free Business Letter & Cover Letter Templates | Templix AI",
    description: "Download formal business letter templates, offer letters, resignation letters, and cover letters.",
    metaDescription: "Professional business letter templates. Draft formal offer letters, cover letters, resignation letters, and experience certificates.",
    primaryKeyword: "letter templates",
    h1: "Free Business & Cover Letter Templates",
    heroSubtitle: "Format professional business letters, offer letters, and job application cover letters with proper margins.",
    categorySlug: "letters",
    icon: "Mail",
    features: [
      { title: "Formal Letter Margins", desc: "Pre-formatted according to standard corporate business letter margins." },
      { title: "Job Application Alignment", desc: "Weave job description keywords into cover letters easily." },
      { title: "Instant PDF Download", desc: "Export high-resolution PDFs formatted for printing or emailing." },
    ],
    faqs: [
      { question: "What types of letter templates are included?", answer: "Offer Letters, Resignation Letters, Cover Letters, Experience Certificates, Recommendation Letters, and Formal Business Letters." },
      { question: "Can I customize the letterhead?", answer: "Yes, upload company logos and edit sender/recipient address fields." },
    ],
    relatedProducts: [
      { name: "AI Letter Generator", href: "/products/ai-letter-generator" },
      { name: "AI Cover Letter Generator", href: "/products/ai-cover-letter-generator" },
    ],
  },
  {
    slug: "report",
    name: "Report Templates",
    title: "Free Business Report Templates",
    metaTitle: "Free Business Report Templates & Generator | Templix AI",
    description: "Create corporate sales reports, project status reports, marketing KPIs, and audit reports.",
    metaDescription: "Free business report templates. Generate sales reports, SEO reports, marketing KPI updates, and financial summaries.",
    primaryKeyword: "report templates",
    h1: "Free Business Report Templates",
    heroSubtitle: "Present data clearly with corporate report templates featuring callout metrics, tables, and executive summaries.",
    categorySlug: "reports",
    icon: "BarChart",
    features: [
      { title: "Structured Metric Tables", desc: "Organize financial totals, project milestones, and KPI metrics cleanly." },
      { title: "Executive Summaries", desc: "Synthesize operational findings into concise lead paragraphs." },
      { title: "Dual Export Options", desc: "Download vector PDFs or editable Word (.docx) files for team collaboration." },
    ],
    faqs: [
      { question: "What reports can I generate?", answer: "Sales Reports, SEO Reports, Financial Summaries, Project Status Updates, and Audit Reports." },
      { question: "Can I export reports to Word?", answer: "Yes, all reports export cleanly to Microsoft Word (.docx) and PDF." },
    ],
    relatedProducts: [
      { name: "AI Writer", href: "/products/ai-writer" },
      { name: "AI Summarizer", href: "/products/ai-summarizer" },
    ],
  },
  {
    slug: "hr",
    name: "HR Templates",
    title: "Free HR & Workplace Document Templates",
    metaTitle: "Free HR & Workplace Document Templates | Templix AI",
    description: "Standardize employee onboarding with offer letters, experience certificates, and HR forms.",
    metaDescription: "Free HR document templates. Offer letters, appointment certificates, experience certificates, and employment forms.",
    primaryKeyword: "HR document templates",
    h1: "Free HR & Workplace Templates",
    heroSubtitle: "Simplify employee administration with compliance-ready offer letters, experience certificates, and onboarding paperwork.",
    categorySlug: "letters",
    icon: "Users",
    features: [
      { title: "Standardized HR Wording", desc: "Drafted around standard labor practices to ensure clarity on salary, probation, and notice." },
      { title: "Corporate Branding", desc: "Add company logos, official seal images, and signature blocks." },
      { title: "Instant PDF Export", desc: "Download official PDFs ready for executive sign-off and issuance." },
    ],
    faqs: [
      { question: "What HR letters are available?", answer: "Offer Letters, Experience Certificates, Appointment Letters, Relieving Letters, and Warning Letters." },
      { question: "Is sign-up required?", answer: "No, 100% free with no sign-up or subscription needed." },
    ],
    relatedProducts: [
      { name: "AI Letter Generator", href: "/products/ai-letter-generator" },
      { name: "Contract Generator", href: "/products/contract-generator" },
    ],
  },
  {
    slug: "pdf-tools",
    name: "PDF Tools",
    title: "Free Online PDF Tools & Editors",
    metaTitle: "Free Online PDF Tools & Editors | Templix AI",
    description: "Edit, merge, split, compress, and convert PDF files online with Templix AI.",
    metaDescription: "Free online PDF tools. Edit PDF text, merge PDF files, split pages, compress file size, and convert documents.",
    primaryKeyword: "PDF tools",
    h1: "Free Online PDF Tools",
    heroSubtitle: "Compile, edit, and export PDF documents directly in your browser with zero watermark.",
    categorySlug: "invoices",
    icon: "FileSpreadsheet",
    features: [
      { title: "Zero Watermark", desc: "Export clean documents with no forced platform branding." },
      { title: "100% Client-Side Memory", desc: "Processing runs locally in your browser — your files are never uploaded." },
      { title: "Vector Precision", desc: "Crisp vector text that looks sharp on displays and physical prints." },
    ],
    faqs: [
      { question: "Are my PDF files safe?", answer: "Yes! PDF tools run client-side in your web browser. Files are never stored on external cloud servers." },
      { question: "Is there a watermark on PDF exports?", answer: "No, exports are 100% clean with zero watermark." },
    ],
    relatedProducts: [
      { name: "PDF Editor", href: "/products/pdf-editor" },
      { name: "Merge PDF", href: "/products/merge-pdf" },
      { name: "Compress PDF", href: "/products/compress-pdf" },
    ],
  },
  {
    slug: "ai-writing",
    name: "AI Writing Tools",
    title: "Free AI Writing Tools & Article Generators",
    metaTitle: "Free AI Writing Tools & Article Generators | Templix AI",
    description: "Generate blog posts, paragraphs, essays, meta tags, product copy, and emails with AI.",
    metaDescription: "Free AI writing tools. Write articles, essays, meta descriptions, product copy, slogans, and LinkedIn summaries with AI.",
    primaryKeyword: "AI writing tools",
    h1: "Free AI Writing & Copywriting Tools",
    heroSubtitle: "Draft articles, persuasive marketing copy, product descriptions, and social posts with AI tools.",
    categorySlug: "reports",
    icon: "Sparkles",
    features: [
      { title: "Engineered Prompts", desc: "Designed specifically for articles, essays, product copy, and SEO meta tags." },
      { title: "Tone Customization", desc: "Switch between Professional, Persuasive, Confident, or Friendly tones." },
      { title: "Unlimited Drafts", desc: "Generate copy drafts without token limits or paywalls." },
    ],
    faqs: [
      { question: "What AI writing tools are available?", answer: "AI Article Writer, AI Essay Writer, Paragraph Generator, Meta Description Generator, Product Copy Writer, and AI Summarizer." },
      { question: "Is AI copy generation free?", answer: "Yes, 100% free with unlimited generation." },
    ],
    relatedProducts: [
      { name: "AI Writer", href: "/products/ai-writer" },
      { name: "AI Blog Generator", href: "/products/ai-blog-generator" },
      { name: "AI Rewrite Tool", href: "/products/ai-rewrite-tool" },
    ],
  },
];

export function getCategoryHub(slug: string): CategoryHubData | undefined {
  return CATEGORY_HUBS.find((c) => c.slug === slug);
}
