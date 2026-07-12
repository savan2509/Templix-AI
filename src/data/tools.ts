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
}

export const TOOLS: ToolMeta[] = [
  {
    slug: "gst-calculator",
    title: "GST & Tax Calculator",
    short: "GST / Tax Calculator",
    description:
      "Free GST, VAT, and sales tax calculator. Add or remove tax from any amount and instantly see the net, tax, and gross totals.",
    keywords: ["gst calculator", "tax calculator", "vat calculator", "sales tax calculator", "add gst", "remove gst"],
    icon: "Percent",
  },
  {
    slug: "discount-calculator",
    title: "Discount Calculator",
    short: "Discount Calculator",
    description:
      "Free discount calculator. Enter a price and a discount percentage to see the final price and exactly how much you save.",
    keywords: ["discount calculator", "percent off calculator", "sale price calculator", "how much do i save"],
    icon: "Tag",
  },
  {
    slug: "profit-margin-calculator",
    title: "Profit Margin Calculator",
    short: "Profit Margin Calculator",
    description:
      "Free profit margin and markup calculator. Enter your cost and selling price to get profit, margin percentage, and markup percentage.",
    keywords: ["profit margin calculator", "markup calculator", "margin vs markup", "gross margin calculator"],
    icon: "TrendingUp",
  },
  {
    slug: "invoice-number-generator",
    title: "Invoice Number Generator",
    short: "Invoice Number Generator",
    description:
      "Free invoice number generator. Build professional, sequential invoice numbers with a custom prefix, date, and padded counter.",
    keywords: ["invoice number generator", "invoice numbering", "invoice number format", "sequential invoice numbers"],
    icon: "Hash",
  },
  {
    slug: "hourly-rate-calculator",
    title: "Freelance Hourly Rate Calculator",
    short: "Hourly Rate Calculator",
    description:
      "Free freelance hourly rate calculator. Find the hourly rate you need to charge to reach your income goal from your billable hours.",
    keywords: ["hourly rate calculator", "freelance rate calculator", "how much to charge per hour", "contractor rate"],
    icon: "Clock",
  },
  {
    slug: "merge-pdf",
    title: "Merge PDF Files",
    short: "Merge PDF",
    description:
      "Free online PDF merger. Combine two or more PDF files into a single document in your browser. Reorder pages, no upload, no watermark.",
    keywords: ["merge pdf", "combine pdf", "join pdf files", "pdf merger online free", "merge pdf without upload"],
    icon: "Combine",
  },
  {
    slug: "split-pdf",
    title: "Split PDF Pages",
    short: "Split PDF",
    description:
      "Free online PDF splitter. Extract a page range from a PDF into a new file — right in your browser. No upload, no watermark, no sign-up.",
    keywords: ["split pdf", "extract pdf pages", "separate pdf pages", "pdf splitter online free", "delete pdf pages"],
    icon: "Scissors",
  },
  {
    slug: "jpg-to-pdf",
    title: "JPG to PDF Converter",
    short: "JPG to PDF",
    description:
      "Free JPG to PDF converter. Turn JPG and PNG images into a single PDF in your browser — one image per page. No upload, no watermark.",
    keywords: ["jpg to pdf", "image to pdf", "png to pdf", "convert jpg to pdf free", "photos to pdf"],
    icon: "FileImage",
  },
  {
    slug: "pdf-to-jpg",
    title: "PDF to JPG Converter",
    short: "PDF to JPG",
    description:
      "Free PDF to JPG converter. Turn every page of a PDF into a downloadable high-quality JPG image, right in your browser. No upload needed.",
    keywords: ["pdf to jpg", "pdf to image", "convert pdf to jpg free", "pdf to jpeg", "export pdf pages as images"],
    icon: "Images",
  },
  {
    slug: "resume-ats-checker",
    title: "Resume ATS Score Checker",
    short: "Resume ATS Checker",
    description:
      "Free resume ATS checker. Paste your resume to get an instant ATS-readiness score with checks for sections, contact info, action verbs, and metrics.",
    keywords: ["ats resume checker", "resume score checker", "ats score checker free", "resume checker", "is my resume ats friendly"],
    icon: "ClipboardCheck",
  },
];

export function getTool(slug: string): ToolMeta | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
