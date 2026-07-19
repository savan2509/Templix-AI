// Free client-side tools. Each is a self-contained calculator/generator page —
// no backend, no dependencies — that also serves as an SEO landing page.
// Pure data here (safe to import from sitemap/server); icons are mapped in the UI.

export interface ToolMeta {
  slug: string;
  title: string;      // page H1 / <title>
  short: string;      // card label
  description: string; // meta description + hero subtitle
  keywords: string[];
  icon: string;       // lucide icon name, mapped in the UI
  category: ToolCategoryKey; // groups the tool on the hub + in the navbar dropdown
}

export type ToolCategoryKey = "ai" | "pdf" | "resume" | "invoice" | "proposal" | "contract" | "letter";

export interface ToolCategory {
  key: ToolCategoryKey;
  icon: string;                    // lucide icon name for the section/dropdown
  label: Record<string, string>;   // localized category label
}

// Ordered to mirror the Templates dropdown. Each key is used as the section
// anchor id on /tools (e.g. /tools#pdf) that the navbar dropdown links to.
export const TOOL_CATEGORIES: ToolCategory[] = [
  { key: "pdf", icon: "FileStack", label: { en: "PDF Tools", es: "Herramientas PDF", de: "PDF-Tools", fr: "Outils PDF", ar: "أدوات PDF" } },
  { key: "resume", icon: "ClipboardCheck", label: { en: "Resume Tools", es: "Herramientas de CV", de: "Lebenslauf-Tools", fr: "Outils CV", ar: "أدوات السيرة الذاتية" } },
  { key: "invoice", icon: "Calculator", label: { en: "Invoice & Business", es: "Facturas y negocio", de: "Rechnung & Business", fr: "Facturation & business", ar: "الفواتير والأعمال" } },
  { key: "proposal", icon: "FileSignature", label: { en: "Proposals", es: "Propuestas", de: "Angebote", fr: "Propositions", ar: "المقترحات" } },
  { key: "contract", icon: "ShieldCheck", label: { en: "Contracts & Legal", es: "Contratos y legal", de: "Verträge & Recht", fr: "Contrats & juridique", ar: "العقود والقانون" } },
  { key: "letter", icon: "Mail", label: { en: "Letters", es: "Cartas", de: "Briefe", fr: "Lettres", ar: "الرسائل" } },
  { key: "ai", icon: "Sparkles", label: { en: "AI Tools", es: "Herramientas de IA", de: "KI-Tools", fr: "Outils IA", ar: "أدوات الذكاء الاصطناعي" } },
];

export const TOOLS: ToolMeta[] = [
  {
    slug: "gst-calculator",
    category: "invoice",
    title: "GST & Tax Calculator",
    short: "GST / Tax Calculator",
    description:
      "Free GST, VAT, and sales tax calculator. Add or remove tax from any amount and instantly see the net, tax, and gross totals.",
    keywords: ["gst calculator", "tax calculator", "vat calculator", "sales tax calculator", "add gst", "remove gst"],
    icon: "Percent",
  },
  {
    slug: "discount-calculator",
    category: "invoice",
    title: "Discount Calculator",
    short: "Discount Calculator",
    description:
      "Free discount calculator. Enter a price and a discount percentage to see the final price and exactly how much you save.",
    keywords: ["discount calculator", "percent off calculator", "sale price calculator", "how much do i save"],
    icon: "Tag",
  },
  {
    slug: "profit-margin-calculator",
    category: "invoice",
    title: "Profit Margin Calculator",
    short: "Profit Margin Calculator",
    description:
      "Free profit margin and markup calculator. Enter your cost and selling price to get profit, margin percentage, and markup percentage.",
    keywords: ["profit margin calculator", "markup calculator", "margin vs markup", "gross margin calculator"],
    icon: "TrendingUp",
  },
  {
    slug: "invoice-number-generator",
    category: "invoice",
    title: "Invoice Number Generator",
    short: "Invoice Number Generator",
    description:
      "Free invoice number generator. Build professional, sequential invoice numbers with a custom prefix, date, and padded counter.",
    keywords: ["invoice number generator", "invoice numbering", "invoice number format", "sequential invoice numbers"],
    icon: "Hash",
  },
  {
    slug: "hourly-rate-calculator",
    category: "invoice",
    title: "Freelance Hourly Rate Calculator",
    short: "Hourly Rate Calculator",
    description:
      "Free freelance hourly rate calculator. Find the hourly rate you need to charge to reach your income goal from your billable hours.",
    keywords: ["hourly rate calculator", "freelance rate calculator", "how much to charge per hour", "contractor rate"],
    icon: "Clock",
  },
  {
    slug: "notice-period-calculator",
    category: "invoice",
    title: "Notice Period Calculator",
    short: "Notice Period Calculator",
    description:
      "Free notice period calculator. Enter your resignation date and notice length to find your exact last working day, with an option to offset it using leave.",
    keywords: ["notice period calculator", "last working day calculator", "resignation date calculator", "notice period end date"],
    icon: "Clock",
  },
  {
    slug: "merge-pdf",
    category: "pdf",
    title: "Merge PDF Files",
    short: "Merge PDF",
    description:
      "Free online PDF merger. Combine two or more PDF files into a single document in your browser. Reorder pages, no upload, no watermark.",
    keywords: ["merge pdf", "combine pdf", "join pdf files", "pdf merger online free", "merge pdf without upload"],
    icon: "Combine",
  },
  {
    slug: "split-pdf",
    category: "pdf",
    title: "Split PDF Pages",
    short: "Split PDF",
    description:
      "Free online PDF splitter. Extract a page range from a PDF into a new file — right in your browser. No upload, no watermark, no sign-up.",
    keywords: ["split pdf", "extract pdf pages", "separate pdf pages", "pdf splitter online free", "delete pdf pages"],
    icon: "Scissors",
  },
  {
    slug: "jpg-to-pdf",
    category: "pdf",
    title: "JPG to PDF Converter (Any Image to PDF)",
    short: "Image to PDF",
    description:
      "Free image to PDF converter. Turn JPG, PNG, WEBP, GIF, BMP or AVIF images into a single PDF in your browser — one image per page. No upload, no watermark, no sign-up.",
    keywords: ["jpg to pdf", "image to pdf", "png to pdf", "webp to pdf", "convert images to pdf free", "photos to pdf", "gif to pdf"],
    icon: "FileImage",
  },
  {
    slug: "pdf-to-jpg",
    category: "pdf",
    title: "PDF to JPG Converter (JPG, PNG, WEBP)",
    short: "PDF to JPG",
    description:
      "Free PDF to image converter. Turn every page of a PDF into a downloadable high-quality JPG, PNG or WEBP image, right in your browser. No upload needed.",
    keywords: ["pdf to jpg", "pdf to image", "pdf to png", "pdf to webp", "convert pdf to jpg free", "pdf to jpeg", "export pdf pages as images"],
    icon: "Images",
  },
  {
    slug: "image-converter",
    category: "pdf",
    title: "Image Converter: PNG, JPG, WEBP & More",
    short: "Image Converter",
    description:
      "Free image converter — convert PNG to JPG, JPG to PNG, WEBP to PNG, PNG to WEBP, HEIC to JPG, GIF, BMP, AVIF and SVG to any format. Batch convert and adjust quality right in your browser. No upload, no watermark, no sign-up.",
    keywords: [
      "image converter", "convert image format free", "image format converter online",
      "png to jpg", "jpg to png", "webp to png", "png to webp", "jpg to webp", "webp to jpg",
      "heic to jpg", "gif to png", "avif to jpg", "bmp to jpg", "svg to png", "jpeg to png",
    ],
    icon: "FileImage",
  },
  {
    slug: "resume-ats-checker",
    category: "resume",
    title: "Resume ATS Score Checker",
    short: "Resume ATS Checker",
    description:
      "Free resume ATS checker. Paste your resume to get an instant ATS-readiness score with checks for sections, contact info, action verbs, and metrics.",
    keywords: ["ats resume checker", "resume score checker", "ats score checker free", "resume checker", "is my resume ats friendly"],
    icon: "ClipboardCheck",
  },
  {
    slug: "proposal-builder",
    category: "proposal",
    title: "Business Proposal Generator",
    short: "Proposal Builder",
    description:
      "Free business proposal generator. Fill in a short form and download a professional client proposal as PDF or Word — no sign-up, no watermark.",
    keywords: ["proposal generator", "business proposal template", "project proposal maker", "free proposal builder", "client proposal"],
    icon: "FileSignature",
  },
  {
    slug: "pricing-calculator",
    category: "proposal",
    title: "Project Pricing Calculator",
    short: "Pricing Calculator",
    description:
      "Free project pricing calculator. Add line items with quantities and rates, apply a discount and tax, and get an instant quote total.",
    keywords: ["pricing calculator", "project cost calculator", "quote calculator", "freelance pricing calculator", "estimate calculator"],
    icon: "Calculator",
  },
  {
    slug: "scope-generator",
    category: "proposal",
    title: "Scope of Work Generator",
    short: "Scope Generator",
    description:
      "Free scope of work generator. Turn a short form into a clear SOW covering objectives, in/out of scope, deliverables, and acceptance criteria.",
    keywords: ["scope of work generator", "sow template", "statement of work maker", "project scope generator", "free sow"],
    icon: "ListChecks",
  },
  {
    slug: "contract-generator",
    category: "contract",
    title: "Service Contract Generator",
    short: "Contract Generator",
    description:
      "Free service agreement generator. Fill in the parties, services, payment, and term to download a professional contract as PDF or Word.",
    keywords: ["contract generator", "service agreement template", "freelance contract maker", "free contract generator", "service contract"],
    icon: "FileText",
  },
  {
    slug: "nda-generator",
    category: "contract",
    title: "NDA Generator",
    short: "NDA Generator",
    description:
      "Free non-disclosure agreement (NDA) generator. Enter the parties, purpose, and term to download a ready-to-sign NDA as PDF or Word.",
    keywords: ["nda generator", "non disclosure agreement template", "free nda maker", "confidentiality agreement generator", "nda template"],
    icon: "ShieldCheck",
  },
  {
    slug: "terms-generator",
    category: "contract",
    title: "Terms & Conditions Generator",
    short: "Terms & Conditions",
    description:
      "Free terms and conditions generator. Create standard T&C for your website or app from a short form and download as PDF or Word.",
    keywords: ["terms and conditions generator", "terms of service generator", "free t&c generator", "website terms generator", "terms template"],
    icon: "Scale",
  },
  {
    slug: "letter-generator",
    category: "letter",
    title: "Business Letter Generator",
    short: "Letter Generator",
    description:
      "Free business letter generator. Enter sender, recipient, subject, and body to produce a properly formatted letter you can download or copy.",
    keywords: ["business letter generator", "formal letter maker", "letter template", "free letter generator", "professional letter"],
    icon: "Mail",
  },
  {
    slug: "resignation-letter-generator",
    category: "letter",
    title: "Resignation Letter Generator",
    short: "Resignation Letter",
    description:
      "Free resignation letter generator. Fill in your role, company, and last day to create a polite, professional resignation letter in seconds.",
    keywords: ["resignation letter generator", "resignation letter template", "how to write a resignation letter", "free resignation letter", "notice letter"],
    icon: "LogOut",
  },
  {
    slug: "recommendation-letter-generator",
    category: "letter",
    title: "Recommendation Letter Generator",
    short: "Recommendation Letter",
    description:
      "Free recommendation letter generator. Turn a candidate's strengths into a polished reference letter you can download as PDF or Word.",
    keywords: ["recommendation letter generator", "reference letter template", "letter of recommendation maker", "free recommendation letter", "reference letter"],
    icon: "Award",
  },
];

// AI tools live in ./ai-tools (they run a server-side LLM prompt). They share
// the ToolMeta shape, so every consumer — hub, detail page, sitemap — treats
// them uniformly via ALL_TOOLS. `import type` keeps this dependency one-way.
import { AI_TOOLS } from "./ai-tools";

export const ALL_TOOLS: ToolMeta[] = [...TOOLS, ...AI_TOOLS];

export function getTool(slug: string): ToolMeta | undefined {
  return ALL_TOOLS.find((t) => t.slug === slug);
}

export function toolsByCategory(key: ToolCategoryKey): ToolMeta[] {
  return ALL_TOOLS.filter((t) => t.category === key);
}
