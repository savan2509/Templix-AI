// Data repository for the 30 dedicated SEO Master Landing Pages on Templix AI.
// Each entry includes full metadata, 15 required content sections, 8-10 schema FAQs,
// and 50 internal links (20 Templates, 10 Blogs, 10 Use Cases, 10 Comparisons, 5 AI Tools).

export interface LandingPageData {
  slug: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  toolSlug?: string;
  categorySlug?: string;
  whatIsThis: string;
  keyBenefits: { title: string; desc: string; icon: string }[];
  features: { title: string; desc: string }[];
  howItWorks: { step: number; title: string; desc: string }[];
  whoCanUseIt: { role: string; desc: string }[];
  examples: { title: string; content: string }[];
  faqs: { q: string; a: string }[];
  relatedTemplates: { name: string; href: string; category: string }[];
  relatedBlogs: { title: string; href: string }[];
  relatedUseCases: { title: string; href: string }[];
  relatedComparisons: { title: string; href: string }[];
  relatedAiTools: { name: string; href: string; desc: string }[];
}

// ── Shared Helper Link Bundles ───────────────────────────────────────────────
const COMMON_COMPARISONS = [
  { title: "Templix AI vs Zety", href: "/compare/templix-ai-vs-zety" },
  { title: "Templix AI vs Resume.io", href: "/compare/templix-ai-vs-resume-io" },
  { title: "Templix AI vs Enhancv", href: "/compare/templix-ai-vs-enhancv" },
  { title: "Templix AI vs Novorésumé", href: "/compare/templix-ai-vs-novoresume" },
  { title: "Templix AI vs Kickresume", href: "/compare/templix-ai-vs-kickresume" },
  { title: "Templix AI vs ChatGPT for Documents", href: "/compare/templix-ai-vs-chatgpt" },
  { title: "Templix AI vs Canva Docs", href: "/compare/templix-ai-vs-canva-docs" },
  { title: "Templix AI vs Google Docs", href: "/compare/templix-ai-vs-google-docs" },
  { title: "Templix AI vs Smallpdf", href: "/compare/templix-ai-vs-smallpdf" },
  { title: "PDF vs Word: Which Format to Send", href: "/blog/pdf-vs-word-which-format" },
];

const COMMON_BLOGS = [
  { title: "How to Write an ATS-Friendly Resume in 2026", href: "/blog/how-to-write-ats-friendly-resume" },
  { title: "Invoice vs Receipt: Key Differences Explained", href: "/blog/invoice-vs-receipt" },
  { title: "Service Agreement vs Contract: What You Need to Know", href: "/blog/service-agreement-vs-contract" },
  { title: "How to Write a Winning Business Proposal", href: "/blog/how-to-write-business-proposal" },
  { title: "Freelance Hourly Rate Calculation Guide", href: "/blog/freelance-hourly-rate-guide" },
  { title: "Understanding Non-Disclosure Agreements (NDAs)", href: "/blog/nda-guide" },
  { title: "W-9 vs W-8BEN: Freelance Tax Forms", href: "/blog/w9-vs-w8ben" },
  { title: "How to Format Professional Business Letters", href: "/blog/business-letter-formatting-guide" },
  { title: "GST Invoice Rules and Tax Breakdown India", href: "/blog/gst-invoice-rules-india" },
  { title: "Top 10 Resume Mistakes That Turn Off Recruiters", href: "/blog/top-resume-mistakes-to-avoid" },
];

const COMMON_USE_CASES = [
  { title: "Resume Builder for Software Engineers", href: "/use-cases/resume-builder-for-software-engineers" },
  { title: "Resume Builder for Freshers & Graduates", href: "/use-cases/resume-builder-for-freshers" },
  { title: "Resume Builder for Students & Interns", href: "/use-cases/resume-builder-for-students" },
  { title: "Invoice Generator for Freelancers", href: "/use-cases/invoice-generator-for-freelancers" },
  { title: "Invoice Generator for Small Businesses", href: "/use-cases/invoice-generator-for-small-business" },
  { title: "Cover Letter Generator for Job Seekers", href: "/use-cases/cover-letter-generator" },
  { title: "Business Proposal Generator for Agencies", href: "/use-cases/business-proposal-generator" },
  { title: "Service Contract Generator for Consultants", href: "/use-cases/contract-generator" },
  { title: "GST Invoice Generator India", href: "/use-cases/gst-invoice-generator-india" },
  { title: "Resignation & Formal Letter Builder", href: "/use-cases/resignation-letter-generator" },
];

const COMMON_TOOLS = [
  { name: "AI Resume Builder", href: "/ai-resume-builder", desc: "Create ATS-optimized resumes instantly with AI" },
  { name: "ATS Resume Checker", href: "/ats-resume-checker", desc: "Analyze resume ATS compatibility & score" },
  { name: "AI Invoice Generator", href: "/ai-invoice-generator", desc: "Generate professional GST & business invoices" },
  { name: "AI Cover Letter Generator", href: "/ai-cover-letter-generator", desc: "Draft job-winning cover letters in seconds" },
  { name: "AI Contract Generator", href: "/ai-contract-generator", desc: "Draft legal agreements & service contracts" },
];

const COMMON_RESUME_TEMPLATES = [
  { name: "Modern Software Engineer Resume", href: "/templates/resumes/resume-software-engineer", category: "resumes" },
  { name: "Clean Executive CV Template", href: "/templates/resumes/resume-executive-clean", category: "resumes" },
  { name: "Creative Graphic Designer Resume", href: "/templates/resumes/resume-graphic-designer", category: "resumes" },
  { name: "ATS Simple Resume Template", href: "/templates/resumes/resume-simple-ats", category: "resumes" },
  { name: "Fresher & Student CV Layout", href: "/templates/resumes/resume-fresher-student", category: "resumes" },
  { name: "Minimalist Nursing Resume", href: "/templates/resumes/resume-nursing-minimal", category: "resumes" },
  { name: "Academic & Research CV", href: "/templates/resumes/resume-academic-cv", category: "resumes" },
  { name: "Sales & Marketing Resume", href: "/templates/resumes/resume-sales-marketing", category: "resumes" },
  { name: "Finance & Accountant Resume", href: "/templates/resumes/resume-finance-accountant", category: "resumes" },
  { name: "Project Manager Resume Template", href: "/templates/resumes/resume-project-manager", category: "resumes" },
  { name: "Architect & Engineer Resume", href: "/templates/resumes/resume-architect-engineer", category: "resumes" },
  { name: "Customer Success Manager Resume", href: "/templates/resumes/resume-customer-success", category: "resumes" },
  { name: "Data Scientist Resume Template", href: "/templates/resumes/resume-data-scientist", category: "resumes" },
  { name: "Legal Assistant & Attorney Resume", href: "/templates/resumes/resume-legal-attorney", category: "resumes" },
  { name: "Human Resources Resume Template", href: "/templates/resumes/resume-human-resources", category: "resumes" },
  { name: "Teacher & Educator Resume", href: "/templates/resumes/resume-teacher-educator", category: "resumes" },
  { name: "Consultant Professional Resume", href: "/templates/resumes/resume-consultant-prof", category: "resumes" },
  { name: "Product Manager Resume", href: "/templates/resumes/resume-product-manager", category: "resumes" },
  { name: "Retail & Operations Resume", href: "/templates/resumes/resume-retail-ops", category: "resumes" },
  { name: "Entry-Level Administrative Resume", href: "/templates/resumes/resume-admin-entry", category: "resumes" },
];

const COMMON_INVOICE_TEMPLATES = [
  { name: "Standard Freelance Invoice", href: "/templates/invoices/invoice-freelance", category: "invoices" },
  { name: "Contractor Hourly Invoice", href: "/templates/invoices/invoice-contractor", category: "invoices" },
  { name: "GST Tax Invoice (India)", href: "/templates/invoices/invoice-gst", category: "invoices" },
  { name: "Small Business Sales Invoice", href: "/templates/invoices/invoice-small-business", category: "invoices" },
  { name: "Web Developer Project Invoice", href: "/templates/invoices/invoice-web-developer", category: "invoices" },
  { name: "Consulting Services Invoice", href: "/templates/invoices/invoice-consulting", category: "invoices" },
  { name: "Cleaning Service Invoice", href: "/templates/invoices/invoice-cleaning", category: "invoices" },
  { name: "Photography & Studio Invoice", href: "/templates/invoices/invoice-photography", category: "invoices" },
  { name: "HVAC & Plumbing Invoice", href: "/templates/invoices/invoice-hvac", category: "invoices" },
  { name: "Milestone Payment Invoice", href: "/templates/invoices/invoice-milestone", category: "invoices" },
  { name: "Commercial Retainer Invoice", href: "/templates/invoices/invoice-retainer", category: "invoices" },
  { name: "Pro Forma Invoice Template", href: "/templates/invoices/invoice-proforma", category: "invoices" },
  { name: "Medical & Dental Practice Invoice", href: "/templates/invoices/invoice-medical", category: "invoices" },
  { name: "Auto Repair Shop Invoice", href: "/templates/invoices/invoice-autorepair", category: "invoices" },
  { name: "Legal Fees & Disbursements Invoice", href: "/templates/invoices/invoice-legal-fees", category: "invoices" },
  { name: "Rental & Lease Property Invoice", href: "/templates/invoices/invoice-rental-prop", category: "invoices" },
  { name: "Logistics & Freight Invoice", href: "/templates/invoices/invoice-logistics", category: "invoices" },
  { name: "Event Planning Services Invoice", href: "/templates/invoices/invoice-event-planning", category: "invoices" },
  { name: "Landscaping & Lawn Care Invoice", href: "/templates/invoices/invoice-landscaping", category: "invoices" },
  { name: "Digital Marketing Agency Invoice", href: "/templates/invoices/invoice-digital-marketing", category: "invoices" },
];

// Helper to create a comprehensive 15-section Landing Page entry
function createLandingEntry(
  slug: string,
  h1: string,
  primaryKeyword: string,
  secondaryKeywords: string[],
  metaTitle: string,
  metaDescription: string,
  toolSlug: string,
  categorySlug: string,
  type: "resume" | "invoice" | "proposal" | "contract" | "letter" | "writing"
): LandingPageData {
  const isResume = type === "resume";
  const isInvoice = type === "invoice";
  const isProposal = type === "proposal";
  const isContract = type === "contract";
  const isLetter = type === "letter";

  const templates = isInvoice || isProposal || isContract
    ? COMMON_INVOICE_TEMPLATES
    : COMMON_RESUME_TEMPLATES;

  return {
    slug,
    h1,
    primaryKeyword,
    secondaryKeywords,
    metaTitle,
    metaDescription,
    heroSubtitle: `Generate professional, recruiter-approved ${primaryKeyword} outputs instantly. No credit card required, zero watermarks, 100% ATS compliant.`,
    toolSlug,
    categorySlug,
    whatIsThis: `The ${h1} by Templix AI is an advanced, automated generation engine engineered to create structured, industry-compliant documents in seconds. Whether you need a polished resume, a legal contract, or an error-free commercial invoice, our AI tailors content, styling, and formatting directly for your domain.`,
    keyBenefits: [
      { title: "ATS & Format Optimized", desc: `Built to pass Applicant Tracking Systems and automated document parsers with 100% precision.`, icon: "Sparkles" },
      { title: "Instant AI Generation", desc: "Turn simple text notes or bullet points into complete, polished professional documents.", icon: "Zap" },
      { title: "Zero Data Logging", desc: "Your data stays private. We do not store or sell your confidential input to train public models.", icon: "Lock" },
      { title: "Export to PDF & Word", desc: "Download print-ready PDF files or editable DOCX formats with a single click.", icon: "Download" },
    ],
    features: [
      { title: "Real-time Live Preview", desc: "See your document update instantly on-screen as you type or adjust AI prompts." },
      { title: "Customizable Color Schemes", desc: "Choose from modern dark mode, executive navy, or clean corporate styling." },
      { title: "Built-in Tax & Math Calculators", desc: "Automated subtotal, tax rate, and net due math verification eliminates calculation errors." },
      { title: "Multi-Language Output", desc: "Translate your generated document into over 100 languages with full grammatical accuracy." },
    ],
    howItWorks: [
      { step: 1, title: "Select Template or Enter Prompt", desc: "Pick a starting template layout or describe your objective in plain English." },
      { step: 2, title: "AI Content Generation", desc: "Our AI engine writes polished paragraphs, action verb bullet points, and itemized data." },
      { step: 3, title: "Review & Customize", desc: "Tweak fonts, colors, line spacing, and fields using our live visual document editor." },
      { step: 4, title: "Export & Share", desc: "Download high-resolution PDF or Word documents instantly without watermark fees." },
    ],
    whoCanUseIt: [
      { role: "Freelancers & Contractors", desc: "Bill clients effortlessly and maintain professional branding across all touchpoints." },
      { role: "Job Seekers & Professionals", desc: "Land more interviews by delivering ATS-tailored resumes and tailored cover letters." },
      { role: "Small Business Owners", desc: "Streamline operations with legal contracts, proposals, invoices, and payment receipts." },
      { role: "HR & Recruitment Teams", desc: "Generate compliant offer letters, termination notices, and job descriptions in minutes." },
    ],
    examples: [
      { title: "Sample High-Impact Output", content: `Professional ${h1} document optimized for search engines and ATS screeners. Features clean typography, exact alignment, and verified structural hierarchy.` },
      { title: "Custom Prompt Result", content: `Input: "Senior Software Engineer with 6 years experience in distributed systems." Output: "Led cross-functional team of 8 engineers delivering 99.99% uptime for core payments API."` },
    ],
    faqs: [
      { q: `What is the ${h1}?`, a: `The ${h1} is a free AI-powered online generator by Templix AI that automates professional document creation in under two minutes.` },
      { q: `Is the ${h1} completely free?`, a: `Yes. Templix AI provides free access to generate, edit, and export documents with zero hidden fees or required credit cards.` },
      { q: `Will my document be ATS-friendly?`, a: `Absolutely. All generated structures strictly follow ATS parsing standards, using clean headings, standard fonts, and machine-readable text.` },
      { q: `Can I download my file in Word or PDF format?`, a: `Yes! You can download your finalized output as a print-ready PDF or an editable DOCX file.` },
      { q: `Is my personal data stored on Templix AI servers?`, a: `No. Templix AI prioritizes user privacy. Your document data is processed securely in your browser and is not sold or retained.` },
      { q: `How does the AI generator work?`, a: `Our AI analyzes your prompt or inputs, selects optimal industry terminology, and builds a formatted document automatically.` },
      { q: `Can I edit the generated document manually?`, a: `Yes. You can edit text, adjust table columns, change colors, and reorder sections anytime in our live editor.` },
      { q: `Does this generator support multiple currencies and tax rates?`, a: `Yes. It supports multi-currency inputs ($, €, £, ₹, etc.) and custom GST/VAT tax percentage calculations.` },
    ],
    relatedTemplates: templates,
    relatedBlogs: COMMON_BLOGS,
    relatedUseCases: COMMON_USE_CASES,
    relatedComparisons: COMMON_COMPARISONS,
    relatedAiTools: COMMON_TOOLS,
  };
}

// ── The 30 Master SEO Landing Pages Data Map ─────────────────────────────────
export const MASTER_LANDING_PAGES: Record<string, LandingPageData> = {
  "ai-resume-builder": createLandingEntry(
    "ai-resume-builder",
    "AI Resume Builder",
    "AI resume builder",
    ["ATS resume builder", "free resume builder", "online resume maker", "CV builder"],
    "Free AI Resume Builder – ATS-Friendly Resume Maker",
    "Create professional ATS-friendly resumes in minutes using AI. Download in PDF or Word for free.",
    "ai-resume-builder",
    "resumes",
    "resume"
  ),
  "ats-resume-checker": createLandingEntry(
    "ats-resume-checker",
    "ATS Resume Checker",
    "ATS resume checker",
    ["resume analyzer", "resume score checker", "ATS scanner", "resume optimization"],
    "Free ATS Resume Checker – Improve Resume Score",
    "Analyze your resume, improve ATS compatibility, and increase interview chances with our free AI checker.",
    "ats-resume-checker",
    "resumes",
    "resume"
  ),
  "resume-templates": createLandingEntry(
    "resume-templates",
    "Resume Templates",
    "resume templates",
    ["free resume templates", "ATS resume templates", "professional resume", "CV templates"],
    "Free Resume Templates – ATS-Friendly Resume Formats",
    "Browse 80+ free ATS-friendly resume templates. Customize in our free builder and download in PDF or Word.",
    "ai-resume-builder",
    "resumes",
    "resume"
  ),
  "resume-examples": createLandingEntry(
    "resume-examples",
    "Resume Examples",
    "resume examples",
    ["resume samples", "CV examples", "resume format", "job resume"],
    "Resume Examples & Samples for Every Job Title",
    "Explore 100+ recruiter-approved resume examples for software engineers, nurses, managers, freshers, and more.",
    "ai-resume-builder",
    "resumes",
    "resume"
  ),
  "cv-builder": createLandingEntry(
    "cv-builder",
    "CV Builder",
    "CV builder",
    ["online CV maker", "professional CV", "AI CV builder", "CV templates"],
    "Free CV Builder – Create Academic & Job CVs Online",
    "Build a professional curriculum vitae (CV) with AI guidance. Download in PDF or Word for free.",
    "ai-resume-builder",
    "resumes",
    "resume"
  ),
  "ai-cover-letter-generator": createLandingEntry(
    "ai-cover-letter-generator",
    "AI Cover Letter Generator",
    "AI cover letter generator",
    ["cover letter builder", "job application letter", "professional cover letter"],
    "AI Cover Letter Generator – Write Job-Winning Letters",
    "Generate personalized, professional cover letters instantly with AI.",
    "ai-cover-letter-generator",
    "letters",
    "letter"
  ),
  "cover-letter-templates": createLandingEntry(
    "cover-letter-templates",
    "Cover Letter Templates",
    "cover letter templates",
    ["free cover letter", "cover letter examples", "job cover letter"],
    "Free Cover Letter Templates – Professional Job Letters",
    "Browse free cover letter templates matching top resume designs. Download in PDF or Word.",
    "ai-cover-letter-generator",
    "letters",
    "letter"
  ),
  "ai-invoice-generator": createLandingEntry(
    "ai-invoice-generator",
    "AI Invoice Generator",
    "invoice generator",
    ["invoice maker", "online invoice generator", "PDF invoice", "business invoice"],
    "Free AI Invoice Generator – Create Professional Invoices",
    "Create GST-ready invoices in seconds with AI. Export as PDF or Word.",
    "ai-invoice-generator",
    "invoices",
    "invoice"
  ),
  "gst-invoice-generator": createLandingEntry(
    "gst-invoice-generator",
    "GST Invoice Generator",
    "GST invoice generator",
    ["GST bill generator", "tax invoice", "India GST invoice", "invoice software"],
    "Free GST Invoice Generator – Tax Ready Invoice Maker",
    "Create GST-compliant invoices with automatic tax breakdown (CGST, SGST, IGST). Export to PDF.",
    "ai-invoice-generator",
    "invoices",
    "invoice"
  ),
  "invoice-templates": createLandingEntry(
    "invoice-templates",
    "Invoice Templates",
    "invoice templates",
    ["free invoice templates", "Word invoice", "Excel invoice", "PDF invoice"],
    "Free Invoice Templates – Customizable Business Invoices",
    "Download 80+ free invoice templates for freelancers, contractors, small businesses, and agencies.",
    "ai-invoice-generator",
    "invoices",
    "invoice"
  ),
  "receipt-generator": createLandingEntry(
    "receipt-generator",
    "Receipt Generator",
    "receipt generator",
    ["payment receipt", "cash receipt", "receipt template", "online receipt maker"],
    "Free Receipt Generator – Create Payment Receipts",
    "Create printable payment receipts with AI in seconds.",
    "ai-receipt-generator",
    "invoices",
    "invoice"
  ),
  "quotation-generator": createLandingEntry(
    "quotation-generator",
    "Quotation Generator",
    "quotation generator",
    ["quote generator", "quotation template", "business quotation"],
    "Free Quotation Generator – Professional Business Quotes",
    "Generate accurate quotations for clients and businesses instantly.",
    "ai-quotation-generator",
    "quotations",
    "invoice"
  ),
  "estimate-generator": createLandingEntry(
    "estimate-generator",
    "Estimate Generator",
    "estimate generator",
    ["estimate template", "project estimate", "cost estimation"],
    "Free Estimate Generator – Fast Project Cost Estimator",
    "Build formal project estimates and quotes for client approval online.",
    "ai-quotation-generator",
    "quotations",
    "invoice"
  ),
  "purchase-order-generator": createLandingEntry(
    "purchase-order-generator",
    "Purchase Order Generator",
    "purchase order generator",
    ["purchase order template", "PO generator", "procurement document"],
    "Purchase Order Generator – Free PO Maker",
    "Generate professional purchase orders online with AI.",
    "purchase-order-generator",
    "invoices",
    "invoice"
  ),
  "business-proposal-generator": createLandingEntry(
    "business-proposal-generator",
    "Business Proposal Generator",
    "business proposal generator",
    ["proposal maker", "project proposal", "client proposal"],
    "AI Business Proposal Generator – Free Proposal Maker",
    "Generate business proposals, project proposals, and client proposals using AI.",
    "ai-proposal-generator",
    "proposals",
    "proposal"
  ),
  "proposal-templates": createLandingEntry(
    "proposal-templates",
    "Proposal Templates",
    "proposal templates",
    ["business proposal template", "project proposal template", "proposal examples"],
    "Free Proposal Templates – Download Project Proposals",
    "Browse 50+ free business proposal templates. Customize and export to PDF or Word.",
    "ai-proposal-generator",
    "proposals",
    "proposal"
  ),
  "ai-contract-generator": createLandingEntry(
    "ai-contract-generator",
    "AI Contract Generator",
    "contract generator",
    ["legal contract", "agreement generator", "business contract"],
    "AI Contract Generator – Create Legal Agreements",
    "Generate service agreements, freelance contracts, NDAs, and more with AI.",
    "ai-contract-generator",
    "contracts",
    "contract"
  ),
  "nda-generator": createLandingEntry(
    "nda-generator",
    "NDA Generator",
    "NDA generator",
    ["non disclosure agreement", "confidentiality agreement", "NDA template"],
    "Free NDA Generator – Create Non-Disclosure Agreements",
    "Create legally structured NDA templates in minutes.",
    "ai-nda-generator",
    "contracts",
    "contract"
  ),
  "service-agreement-generator": createLandingEntry(
    "service-agreement-generator",
    "Service Agreement Generator",
    "service agreement generator",
    ["service contract", "legal agreement", "client agreement"],
    "Free Service Agreement Generator – Freelance Contracts",
    "Draft legally sound service agreements and client contracts online.",
    "ai-contract-generator",
    "contracts",
    "contract"
  ),
  "rental-agreement-generator": createLandingEntry(
    "rental-agreement-generator",
    "Rental Agreement Generator",
    "rental agreement generator",
    ["lease agreement", "rent agreement", "property agreement"],
    "Free Rental Agreement Generator – Lease Contract Maker",
    "Create state-compliant rental and lease agreement documents easily.",
    "ai-contract-generator",
    "contracts",
    "contract"
  ),
  "offer-letter-generator": createLandingEntry(
    "offer-letter-generator",
    "Offer Letter Generator",
    "offer letter generator",
    ["employment offer", "HR templates", "employee offer letter"],
    "Free Job Offer Letter Generator – Formal HR Letters",
    "Generate professional employment offer letters with salary and start date details.",
    "ai-letter-generator",
    "letters",
    "letter"
  ),
  "experience-letter-generator": createLandingEntry(
    "experience-letter-generator",
    "Experience Letter Generator",
    "experience letter generator",
    ["experience certificate", "work experience letter", "HR documents"],
    "Free Experience Letter Generator – Work Certificates",
    "Generate official employee work experience certificates and letters.",
    "ai-letter-generator",
    "letters",
    "letter"
  ),
  "salary-slip-generator": createLandingEntry(
    "salary-slip-generator",
    "Salary Slip Generator",
    "salary slip generator",
    ["payslip generator", "payroll slip", "salary statement"],
    "Free Salary Slip Generator – Online Payslip Creator",
    "Build monthly employee salary slips with earnings and deduction breakdowns.",
    "ai-invoice-generator",
    "invoices",
    "invoice"
  ),
  "internship-certificate-generator": createLandingEntry(
    "internship-certificate-generator",
    "Internship Certificate Generator",
    "internship certificate generator",
    ["internship certificate", "completion certificate", "intern certificate"],
    "Free Internship Certificate Generator – Official Letters",
    "Draft formal internship completion certificates and letters for students.",
    "ai-letter-generator",
    "letters",
    "letter"
  ),
  "ai-letter-generator": createLandingEntry(
    "ai-letter-generator",
    "AI Letter Generator",
    "AI letter generator",
    ["formal letter generator", "business letter", "application letter"],
    "AI Letter Generator – Create Professional Letters",
    "Generate business letters, formal letters, and official letters using AI.",
    "ai-letter-generator",
    "letters",
    "letter"
  ),
  "ai-email-writer": createLandingEntry(
    "ai-email-writer",
    "AI Email Writer",
    "AI email writer",
    ["email generator", "business email writer", "professional email"],
    "AI Email Writer – Generate Professional Emails",
    "Write business emails, follow-ups, sales emails, and customer emails instantly.",
    "ai-email-writer",
    "letters",
    "writing"
  ),
  "ai-writer": createLandingEntry(
    "ai-writer",
    "AI Writer",
    "AI writer",
    ["AI writing assistant", "content generator", "AI text writer"],
    "Free AI Writer – Automated Content Generation Assistant",
    "Write polished articles, essays, copy, and reports instantly with AI.",
    "ai-paragraph-generator",
    "reports",
    "writing"
  ),
  "ai-blog-generator": createLandingEntry(
    "ai-blog-generator",
    "AI Blog Generator",
    "AI blog generator",
    ["AI article writer", "blog writer", "SEO content generator"],
    "AI Blog Generator – Write SEO Blog Posts Fast",
    "Generate complete blog posts optimized for search engines.",
    "ai-blog-generator",
    "reports",
    "writing"
  ),
  "ai-paragraph-generator": createLandingEntry(
    "ai-paragraph-generator",
    "AI Paragraph Generator",
    "AI paragraph generator",
    ["paragraph writer", "AI text generator", "content writer"],
    "AI Paragraph Generator – Create High-Quality Content",
    "Generate engaging paragraphs for blogs, essays, and websites.",
    "ai-paragraph-generator",
    "reports",
    "writing"
  ),
  "ai-content-generator": createLandingEntry(
    "ai-content-generator",
    "AI Content Generator",
    "AI content generator",
    ["AI content writer", "AI copywriter", "marketing content generator"],
    "Free AI Content Generator – Copy & Marketing Writer",
    "Generate engaging content for websites, blogs, ads, and social media with AI.",
    "ai-paragraph-generator",
    "reports",
    "writing"
  ),
};

export const ALL_MASTER_LANDING_SLUGS = Object.keys(MASTER_LANDING_PAGES);

export function getLandingPageData(slug: string): LandingPageData | undefined {
  return MASTER_LANDING_PAGES[slug];
}
