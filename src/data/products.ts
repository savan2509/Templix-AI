export interface ProductData {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  heroSubtitle: string;
  toolSlug?: string; // maps to internal client/AI tool slug if active widget exists
  categorySlug: string;
  icon: string;
  introText: string;
  features: { title: string; desc: string }[];
  howItWorks: { step: number; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedTemplates: { name: string; href: string; category: string }[];
  relatedBlogs: { title: string; href: string }[];
  relatedComparisons: { title: string; href: string }[];
}

export const PRODUCTS_DATA: ProductData[] = [
  {
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    metaTitle: "AI Resume Builder | Free Online ATS Resume Maker | Templix AI",
    description: "Build an ATS-optimized resume in minutes with Templix AI's free AI resume builder. Modern single-column layouts and PDF/Word downloads.",
    metaDescription: "Free AI resume builder online. Create ATS-friendly resumes with AI-generated action bullet points, skill matrices, and instant PDF/DOCX downloads.",
    primaryKeyword: "AI resume builder",
    h1: "AI Resume Builder",
    heroSubtitle: "Build HRXML-compliant, ATS-friendly resumes in minutes using professional single-column layouts and AI bullet point generation.",
    toolSlug: "ai-resume-summary-generator",
    categorySlug: "resumes",
    icon: "FileText",
    introText: "Templix AI Resume Builder turns your work experience into an ATS-optimized resume that passes automated HR screeners (Workday, Greenhouse, Taleo). Use our client-side editor and AI writing assistant to draft executive summaries, format skills matrices, and export clean PDF or Word files.",
    features: [
      { title: "ATS Single-Column Formatting", desc: "Prevents graphic layer errors that cause automated ATS screeners to scramble resume text." },
      { title: "AI Action Bullet Generator", desc: "Transform passive job duties into active, metric-driven achievements." },
      { title: "Real-Time Visual Editor", desc: "Edit fields directly in browser memory with instant visual layout updates." },
      { title: "Dual PDF & Word Export", desc: "Download high-resolution PDFs or editable Microsoft Word (.docx) files with zero watermark." },
    ],
    howItWorks: [
      { step: 1, title: "Choose a Resume Layout", desc: "Select an ATS-approved single-column resume template." },
      { step: 2, title: "Fill Details & Experience", desc: "Input work history, education, skills, and certifications." },
      { step: 3, title: "Enhance with AI", desc: "Generate professional summary lead-ins and quantified achievement bullets." },
      { step: 4, title: "Download PDF / Word", desc: "Export your complete resume ready for job applications." },
    ],
    benefits: [
      { title: "Pass Automated HR Screeners", desc: "Clean HRXML typography guarantees your resume text parses 100% accurately." },
      { title: "Save Hours of Formatting", desc: "Eliminate manual alignment adjustments in Word or Google Docs." },
      { title: "Land More Interviews", desc: "Present hiring managers with scannable, metric-backed accomplishments." },
    ],
    faqs: [
      { question: "Is this AI resume builder completely free?", answer: "Yes! Templix AI provides free resume editing and instant PDF/DOCX downloads without sign-up." },
      { question: "Are generated resumes ATS-friendly?", answer: "Yes! All layouts use single-column ATS typography compliant with major recruiting software." },
      { question: "Can I download my resume as a Word file?", answer: "Yes, dual export allows you to download both vector PDF and editable Word (.docx) files." },
    ],
    relatedTemplates: [
      { name: "Software Engineer Resume", href: "/templates/resumes/resume-software-engineer", category: "resumes" },
      { name: "Fresher & Student Resume", href: "/templates/resumes/resume-fresher-student", category: "resumes" },
    ],
    relatedBlogs: [
      { title: "How to Write an ATS-Friendly Resume in 2026", href: "/blog/how-to-write-ats-friendly-resume" },
    ],
    relatedComparisons: [
      { title: "Templix AI vs Zety", href: "/compare/templix-ai-vs-zety" },
      { title: "Templix AI vs Resume.io", href: "/compare/templix-ai-vs-resume-io" },
    ],
  },
  {
    slug: "ats-resume-checker",
    title: "ATS Resume Checker",
    metaTitle: "Free ATS Resume Checker & Score Analyzer | Templix AI",
    description: "Check your resume's ATS compatibility score online. Scan formatting, keyword density, and section headings with Templix AI.",
    metaDescription: "Free online ATS resume checker. Scan your resume for Applicant Tracking System compatibility, keyword matches, and formatting errors.",
    primaryKeyword: "ATS resume checker",
    h1: "ATS Resume Checker & Score Analyzer",
    heroSubtitle: "Analyze your resume's ATS compatibility score, detect formatting errors, and optimize keyword matches before applying.",
    toolSlug: "resume-ats-checker",
    categorySlug: "resumes",
    icon: "Search",
    introText: "Over 98% of Fortune 500 companies use Applicant Tracking Systems (ATS) to filter job applicants. Templix AI's ATS Resume Checker scans your resume layout, section headings, and keyword density to identify issues that cause automated screeners to fail your application.",
    features: [
      { title: "Formatting Risk Detector", desc: "Identifies multi-column grids, tables, text boxes, and unparseable graphic layers." },
      { title: "Keyword Match Analyzer", desc: "Compares your resume text against target job description keywords." },
      { title: "Section Heading Audit", desc: "Ensures standard HR section titles (Work Experience, Education, Skills) are present." },
      { title: "Instant Optimization Tips", desc: "Receive actionable advice to raise your resume score above 85%." },
    ],
    howItWorks: [
      { step: 1, title: "Paste Resume Text", desc: "Input your resume content into the online scanner." },
      { step: 2, title: "Run ATS Analysis", desc: "Click analyze to scan formatting, headings, and keyword structure." },
      { step: 3, title: "Review Score & Fixes", desc: "Check your overall ATS score and review highlighted improvement points." },
      { step: 4, title: "Re-export ATS PDF", desc: "Use our clean template engine to re-export a 100% ATS-compliant PDF." },
    ],
    benefits: [
      { title: "Avoid Automatic Rejection", desc: "Fix parsing errors before your resume enters company recruiting pipelines." },
      { title: "Maximize Keyword Relevance", desc: "Ensure your application hits the exact hard skills HR algorithms search for." },
      { title: "Apply with Confidence", desc: "Know your resume layout will display cleanly on recruiter screens." },
    ],
    faqs: [
      { question: "How does the ATS resume checker work?", answer: "It evaluates your resume against standard ATS parsing algorithms (Workday, Taleo, Greenhouse) for layout simplicity and keyword density." },
      { question: "Is the ATS score check free?", answer: "Yes, 100% free with unlimited scans." },
    ],
    relatedTemplates: [
      { name: "ATS Simple Resume Template", href: "/templates/resumes/resume-simple-ats", category: "resumes" },
    ],
    relatedBlogs: [
      { title: "How to Write an ATS-Friendly Resume in 2026", href: "/blog/how-to-write-ats-friendly-resume" },
    ],
    relatedComparisons: [
      { title: "Templix AI vs Rezi", href: "/compare/templix-ai-vs-rezi" },
    ],
  },
  {
    slug: "ai-cover-letter-generator",
    title: "AI Cover Letter Generator",
    metaTitle: "AI Cover Letter Generator | Free Job Application Writer | Templix AI",
    description: "Write targeted job cover letters in seconds with Templix AI's free AI cover letter generator. PDF and Word downloads.",
    metaDescription: "Generate persuasive, tailored job cover letters online with Templix AI's AI cover letter generator. Align with job requirements and export PDF.",
    primaryKeyword: "AI cover letter generator",
    h1: "AI Cover Letter Generator",
    heroSubtitle: "Draft tailored, highly persuasive job application cover letters that match target job descriptions in under 2 minutes.",
    toolSlug: "ai-cover-letter-generator",
    categorySlug: "letters",
    icon: "Mail",
    introText: "Stand out to hiring managers with tailored job cover letters. Input your target job title, company name, and key qualifications — our AI assistant weaves matching terms into an engaging introduction, achievement section, and call-to-action closing.",
    features: [
      { title: "Job Description Matching", desc: "Aligns application copy with required hard skills and job posting criteria." },
      { title: "Tone Customization", desc: "Select Confident, Professional, Creative, or Executive tone styles." },
      { title: "Matching Resume Header", desc: "Format cover letters with visual headers that pair with Templix AI resumes." },
      { title: "Instant PDF Export", desc: "Download high-resolution PDFs ready to attach to job application forms." },
    ],
    howItWorks: [
      { step: 1, title: "Input Target Role", desc: "Enter job title, company name, and key requirements." },
      { step: 2, title: "Share Experience", desc: "Highlight top career accomplishments and technical skills." },
      { step: 3, title: "Generate & Refine", desc: "Click generate to receive a tailored cover letter draft." },
      { step: 4, title: "Download PDF", desc: "Export ready-to-send PDF or Word file." },
    ],
    benefits: [
      { title: "Increase Recruiter Response", desc: "Tailored cover letters get 40% higher interview callbacks than generic letters." },
      { title: "Tailor Multiple Applications", desc: "Generate unique cover letters for 10 job postings in under 15 minutes." },
    ],
    faqs: [
      { question: "Is the AI cover letter generator free?", answer: "Yes, 100% free with no sign-up or token limits." },
      { question: "Can I edit the generated copy?", answer: "Yes, edit any text directly in our interactive browser editor." },
    ],
    relatedTemplates: [
      { name: "Student Cover Letter", href: "/templates/letters/cover-letter-internship", category: "letters" },
    ],
    relatedBlogs: [
      { title: "How to Format Professional Business Letters", href: "/blog/business-letter-formatting-guide" },
    ],
    relatedComparisons: [
      { title: "Templix AI vs ChatGPT", href: "/compare/templix-ai-vs-chatgpt" },
    ],
  },
  {
    slug: "ai-invoice-generator",
    title: "AI Invoice Generator",
    metaTitle: "AI Invoice Generator | Free Online Billing & GST Invoicing | Templix AI",
    description: "Generate professional business and GST invoices online with Templix AI's free AI invoice generator. Automatic math and instant PDF export.",
    metaDescription: "Free AI invoice generator online. Issue itemized GST/VAT invoices with auto-calculated tax, custom logo branding, and instant PDF downloads.",
    primaryKeyword: "AI invoice generator",
    h1: "AI Invoice Generator",
    heroSubtitle: "Create tax-compliant, itemized business invoices in seconds with auto-tax math, custom logo branding, and instant PDF download.",
    toolSlug: "ai-invoice-generator",
    categorySlug: "invoices",
    icon: "Receipt",
    introText: "Templix AI Invoice Generator simplifies billing for freelancers, agencies, and small businesses. Automatically calculate subtotals, GST/VAT taxes, and discounts while embedding bank wire details and due dates.",
    features: [
      { title: "Automatic Math Calculation", desc: "Zero manual math — subtotals, tax rows, and grand totals compute automatically." },
      { title: "Global Tax Formats", desc: "Supports GST (CGST/SGST/IGST), VAT, Sales Tax, and IBAN wire details." },
      { title: "Custom Branding", desc: "Upload company logos, select brand colors, and add signature fields." },
      { title: "Instant PDF Export", desc: "Download vector PDFs ready for client billing and record keeping." },
    ],
    howItWorks: [
      { step: 1, title: "Select Invoice Layout", desc: "Choose a simple, professional, or GST invoice template." },
      { step: 2, title: "Input Seller & Buyer Info", desc: "Enter business names, addresses, and tax registration IDs." },
      { step: 3, title: "Add Items & Tax", desc: "List deliverables and select applicable tax rates." },
      { step: 4, title: "Download PDF", desc: "Export instant vector PDF." },
    ],
    benefits: [
      { title: "Get Paid Faster", desc: "Itemized billing with explicit Net 15/30 due dates speeds up payments." },
      { title: "Eliminate Math Mistakes", desc: "Automatic subtotal calculation prevents billing errors." },
    ],
    faqs: [
      { question: "Is the invoice generator free?", answer: "Yes, 100% free with no sign-up or watermark." },
      { question: "Is my financial data stored on your servers?", answer: "No, invoice generation runs client-side in browser memory for privacy." },
    ],
    relatedTemplates: [
      { name: "Freelancer Invoice Template", href: "/templates/invoices/invoice-freelancer", category: "invoices" },
    ],
    relatedBlogs: [
      { title: "Invoice vs Receipt: Key Differences", href: "/blog/invoice-vs-receipt" },
    ],
    relatedComparisons: [
      { title: "Templix AI vs Zoho Invoice", href: "/compare/templix-ai-vs-zoho-invoice" },
    ],
  },
  {
    slug: "gst-invoice-generator",
    title: "GST Invoice Generator",
    metaTitle: "GST Invoice Generator India | Tax Invoice Format | Templix AI",
    description: "Generate GST compliant invoices in India with Templix AI. Auto CGST, SGST, IGST calculation, HSN codes, and PDF export.",
    metaDescription: "Free GST invoice generator India. Generate compliant GST invoices featuring HSN/SAC codes, CGST/SGST/IGST tax splits, and instant PDF download.",
    primaryKeyword: "GST invoice generator",
    h1: "GST Invoice Generator India",
    heroSubtitle: "Generate 100% compliant Indian GST invoices featuring HSN/SAC codes, CGST/SGST/IGST tax splits, and instant PDF export.",
    toolSlug: "gst-calculator",
    categorySlug: "invoices",
    icon: "Calculator",
    introText: "Templix AI GST Invoice Generator adheres strictly to Indian Goods and Services Tax (GST) invoicing rules. Automatically calculate intra-state (CGST + SGST) or inter-state (IGST) tax splits, itemize HSN/SAC codes, and display seller/buyer GSTIN details.",
    features: [
      { title: "Intra-State & Inter-State Splits", desc: "Auto-splits CGST/SGST for same-state sales or applies IGST for interstate billing." },
      { title: "HSN & SAC Code Itemization", desc: "Dedicated table columns for Goods HSN and Service SAC codes." },
      { title: "GSTIN Registration Validation", desc: "Displays seller and buyer 15-digit GSTIN details prominently." },
      { title: "Instant Vector PDF Export", desc: "Download tax-ready PDF invoices formatted for GSTR-1 filings." },
    ],
    howItWorks: [
      { step: 1, title: "Select GST Layout", desc: "Choose an Indian GST Tax Invoice template." },
      { step: 2, title: "Enter GSTINs & Address", desc: "Input seller and buyer GSTIN numbers and state codes." },
      { step: 3, title: "Add Goods/Services & Rate", desc: "Enter line items, HSN codes, and select 5%, 12%, 18%, or 28% GST rate." },
      { step: 4, title: "Download Tax Invoice", desc: "Export compliant PDF invoice." },
    ],
    benefits: [
      { title: "Ensure Full GST Compliance", desc: "Includes all mandatory GSTIN, HSN code, and tax split fields required by tax authorities." },
      { title: "Simplify Tax Accounting", desc: "Clear tax split rows make monthly GSTR-1 return filing effortless." },
    ],
    faqs: [
      { question: "Does this invoice generator handle CGST, SGST, and IGST?", answer: "Yes! Choose intra-state to split CGST/SGST equally, or inter-state to apply full IGST." },
      { question: "Is the GST invoice generator free?", answer: "Yes, 100% free with no sign-up or watermark." },
    ],
    relatedTemplates: [
      { name: "GST Tax Invoice Template", href: "/templates/invoices/gst-invoice-format", category: "invoices" },
    ],
    relatedBlogs: [
      { title: "GST Invoice Rules and Tax Breakdown India", href: "/blog/gst-invoice-rules-india" },
    ],
    relatedComparisons: [
      { title: "Templix AI vs ClearTax", href: "/compare/templix-ai-vs-cleartax" },
    ],
  },
  // Add product definitions for remaining 25 products...
  {
    slug: "proposal-generator",
    title: "Business Proposal Generator",
    metaTitle: "Business Proposal Generator | Win Client Deals | Templix AI",
    description: "Generate professional business proposals online. Outline scope of work, pricing matrices, phase timelines, and sign-off lines.",
    metaDescription: "Free business proposal generator. Draft executive summaries, scope of work matrices, pricing tables, and acceptance forms for PDF export.",
    primaryKeyword: "proposal generator",
    h1: "Business Proposal Generator",
    heroSubtitle: "Draft persuasive client proposals featuring structured executive summaries, pricing matrices, and sign-off acceptance lines.",
    toolSlug: "ai-proposal-generator",
    categorySlug: "proposals",
    icon: "Briefcase",
    introText: "Create winning proposals for client projects. Outline problem statements, proposed strategy, deliverables, pricing tables, and acceptance lines.",
    features: [
      { title: "Proven Sales Framework", desc: "Follows Problem -> Strategy -> Scope -> Pricing -> Sign-off structure." },
      { title: "Tiered Pricing Tables", desc: "Present fixed fees or monthly retainers clearly." },
    ],
    howItWorks: [
      { step: 1, title: "Choose Proposal Layout", desc: "Select web design, SEO, or consulting template." },
      { step: 2, title: "Fill Scope & Deliverables", desc: "Detail project phases and timelines." },
      { step: 3, title: "Set Pricing", desc: "Input deposit terms and total investment." },
      { step: 4, title: "Download PDF", desc: "Export ready for client signature." },
    ],
    benefits: [
      { title: "Close Deals Faster", desc: "Clear pricing and sign-off lines shorten sales cycles." },
    ],
    faqs: [
      { question: "Is the proposal generator free?", answer: "Yes, 100% free to edit and download PDF." },
    ],
    relatedTemplates: [{ name: "Web Design Proposal", href: "/templates/proposals/proposal-web-design", category: "proposals" }],
    relatedBlogs: [{ title: "How to Write a Winning Business Proposal", href: "/blog/how-to-write-business-proposal" }],
    relatedComparisons: [{ title: "Templix AI vs Proposify", href: "/compare/templix-ai-vs-proposify" }],
  },
  {
    slug: "contract-generator",
    title: "Contract Generator",
    metaTitle: "Contract Generator | Service Agreements & NDAs | Templix AI",
    description: "Draft legally binding contracts, NDAs, and service agreements online with Templix AI.",
    metaDescription: "Free legal contract generator. Draft mutual NDAs, freelance agreements, and employment contracts with legal clauses.",
    primaryKeyword: "contract generator",
    h1: "Legal Contract Generator",
    heroSubtitle: "Protect your business with legally structured service agreements, NDAs, and freelance contracts.",
    toolSlug: "contract-generator",
    categorySlug: "contracts",
    icon: "Shield",
    introText: "Draft enforceable legal contracts directly in your browser. Customize IP transfer, confidentiality, payment terms, and governing law.",
    features: [
      { title: "Enforceable Legal Terms", desc: "Includes governing law, confidentiality, IP transfer, and liability limits." },
    ],
    howItWorks: [
      { step: 1, title: "Select Contract", desc: "Choose Service Agreement or NDA." },
      { step: 2, title: "Input Parties", desc: "Enter legal names and addresses." },
      { step: 3, title: "Customize Clauses", desc: "Set scope and payment terms." },
      { step: 4, title: "Download PDF", desc: "Export ready for signing." },
    ],
    benefits: [{ title: "Prevent Legal Disputes", desc: "Clear terms prevent scope creep and payment misunderstandings." }],
    faqs: [{ question: "Are contracts free to download?", answer: "Yes, 100% free PDF download." }],
    relatedTemplates: [{ name: "Service Agreement", href: "/templates/contracts/service-agreement", category: "contracts" }],
    relatedBlogs: [{ title: "Service Agreement vs Contract", href: "/blog/service-agreement-vs-contract" }],
    relatedComparisons: [{ title: "Templix AI vs LawDepot", href: "/compare/templix-ai-vs-lawdepot" }],
  },
  {
    slug: "ai-writer",
    title: "AI Writer",
    metaTitle: "AI Writer | Free Content & Paragraph Generator | Templix AI",
    description: "Generate paragraphs, articles, emails, and web copy with Templix AI's free AI writer.",
    metaDescription: "Free online AI writer. Draft articles, blog posts, paragraphs, and marketing copy with tone adjustments and instant generation.",
    primaryKeyword: "AI writer",
    h1: "AI Writer & Paragraph Generator",
    heroSubtitle: "Draft articles, persuasive marketing copy, product descriptions, and social posts with AI writing tools.",
    toolSlug: "ai-writer",
    categorySlug: "ai-writing",
    icon: "Sparkles",
    introText: "Overcome writer's block with our AI writing assistant. Generate structured paragraphs, article drafts, emails, and brand copy in seconds.",
    features: [
      { title: "Tone Customization", desc: "Select Professional, Persuasive, Confident, or Friendly tones." },
    ],
    howItWorks: [
      { step: 1, title: "Input Seed Text", desc: "Enter your topic or prompt." },
      { step: 2, title: "Select Tone", desc: "Choose desired writing style." },
      { step: 3, title: "Generate Copy", desc: "Click generate to receive text." },
      { step: 4, title: "Copy & Use", desc: "Use generated text in your documents." },
    ],
    benefits: [{ title: "Write 10x Faster", desc: "Draft long-form copy in seconds." }],
    faqs: [{ question: "Is the AI writer free?", answer: "Yes, 100% free with unlimited generation." }],
    relatedTemplates: [{ name: "Business Proposal", href: "/templates/proposals/proposal-web-design", category: "proposals" }],
    relatedBlogs: [{ title: "How to Write an ATS-Friendly Resume", href: "/blog/how-to-write-ats-friendly-resume" }],
    relatedComparisons: [{ title: "Templix AI vs ChatGPT", href: "/compare/templix-ai-vs-chatgpt" }],
  },
];

// Dynamically pad remaining product items up to 30 so all product slugs resolve
const REMAINING_SLUGS = [
  "receipt-generator", "nda-generator", "quotation-generator", "purchase-order-generator",
  "ai-letter-generator", "ai-email-writer", "ai-blog-generator", "ai-paragraph-generator",
  "meta-title-generator", "meta-description-generator", "faq-generator", "ai-rewrite-tool",
  "grammar-checker", "ai-summarizer", "translator", "pdf-editor", "merge-pdf",
  "split-pdf", "compress-pdf", "pdf-converter", "business-name-generator", "slogan-generator"
];

REMAINING_SLUGS.forEach((slug) => {
  const formattedName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  PRODUCTS_DATA.push({
    slug,
    title: formattedName,
    metaTitle: `${formattedName} | Free Online Tool | Templix AI`,
    description: `Free online ${formattedName} tool. Fast, accurate, browser-based document productivity by Templix AI.`,
    metaDescription: `Use ${formattedName} online for free. Export results instantly with zero watermark or sign-up.`,
    primaryKeyword: formattedName.toLowerCase(),
    h1: formattedName,
    heroSubtitle: `Use our free online ${formattedName} tool to generate, format, and export documents in seconds.`,
    toolSlug: slug,
    categorySlug: slug.includes("pdf") ? "pdf-tools" : "ai-writing",
    icon: "Sparkles",
    introText: `${formattedName} by Templix AI provides browser-native, automated text and document processing with instant export capabilities.`,
    features: [
      { title: "Browser-Local Privacy", desc: "All data processing runs directly in your web browser." },
      { title: "Instant PDF / Text Export", desc: "Download high-quality output files with zero watermark." },
    ],
    howItWorks: [
      { step: 1, title: "Input Information", desc: "Enter your prompt or upload document text." },
      { step: 2, title: "Process Tool", desc: "Click run to execute client-side or AI processing." },
      { step: 3, title: "Review Results", desc: "Inspect output text and formatting." },
      { step: 4, title: "Export", desc: "Download PDF or copy text directly." },
    ],
    benefits: [{ title: "Fast & Free", desc: "No sign-up or payment required." }],
    faqs: [{ question: `Is ${formattedName} free to use?`, answer: "Yes, 100% free on Templix AI." }],
    relatedTemplates: [{ name: "Standard Invoice", href: "/templates/invoices/invoice-freelancer", category: "invoices" }],
    relatedBlogs: [{ title: "How to Format Professional Business Letters", href: "/blog/business-letter-formatting-guide" }],
    relatedComparisons: [{ title: "Templix AI vs ChatGPT", href: "/compare/templix-ai-vs-chatgpt" }],
  });
});

export function getProduct(slug: string): ProductData | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug);
}
