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
];

export function getTool(slug: string): ToolMeta | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
