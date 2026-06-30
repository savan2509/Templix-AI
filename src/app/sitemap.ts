import { MetadataRoute } from "next";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://templix.ai";
  const locales = ["en", "es", "de", "fr", "ar"];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Base paths per locale
  const routes = ["", "/templates", "/blog"];
  for (const route of routes) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  // Category pages
  const categories = ["invoices", "resumes", "contracts", "proposals", "letters"];
  for (const cat of categories) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/templates/${cat}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  // Seeded template detail pages
  const templates = [
    { slug: "invoice-freelancer", category: "invoices" },
    { slug: "invoice-small-business", category: "invoices" },
    { slug: "invoice-consulting", category: "invoices" },
    { slug: "invoice-contractor", category: "invoices" },
    { slug: "invoice-graphic-designer", category: "invoices" },
    { slug: "invoice-web-developer", category: "invoices" },
    { slug: "invoice-cleaning-service", category: "invoices" },
    { slug: "invoice-photography", category: "invoices" },
    { slug: "invoice-hvac-service", category: "invoices" },
    { slug: "invoice-plumbing", category: "invoices" },
    { slug: "invoice-timesheet", category: "invoices" },
    { slug: "invoice-milestone", category: "invoices" },
    { slug: "invoice-receipt", category: "invoices" },
    { slug: "invoice-rental", category: "invoices" },
    { slug: "invoice-estimate", category: "invoices" },
    { slug: "invoice-purchase-order", category: "invoices" },
    { slug: "resume-software-engineer", category: "resumes" },
    { slug: "resume-data-analyst", category: "resumes" },
    { slug: "resume-project-manager", category: "resumes" },
    { slug: "resume-graphic-designer", category: "resumes" },
    { slug: "resume-registered-nurse", category: "resumes" },
    { slug: "resume-teacher", category: "resumes" },
    { slug: "resume-marketing-manager", category: "resumes" },
    { slug: "resume-customer-service", category: "resumes" },
    { slug: "resume-accountant", category: "resumes" },
    { slug: "resume-sales-representative", category: "resumes" },
    { slug: "freelance-agreement", category: "contracts" },
    { slug: "employment-contract", category: "contracts" },
    { slug: "freelance-contract", category: "contracts" },
    { slug: "independent-contractor-agreement", category: "contracts" },
    { slug: "service-agreement", category: "contracts" },
    { slug: "nda-template", category: "contracts" },
    { slug: "consulting-agreement", category: "contracts" },
    { slug: "rental-agreement", category: "contracts" },
    { slug: "sales-contract", category: "contracts" },
    { slug: "partnership-agreement", category: "contracts" },
    { slug: "vendor-agreement", category: "contracts" },
    { slug: "business-proposal", category: "proposals" },
    { slug: "project-proposal", category: "proposals" },
    { slug: "marketing-proposal", category: "proposals" },
    { slug: "web-design-proposal", category: "proposals" },
    { slug: "software-development-proposal", category: "proposals" },
    { slug: "consulting-proposal", category: "proposals" },
    { slug: "digital-marketing-proposal", category: "proposals" },
    { slug: "construction-proposal", category: "proposals" },
    { slug: "event-proposal", category: "proposals" },
    { slug: "grant-proposal", category: "proposals" },
    { slug: "cover-letter", category: "letters" },
    { slug: "resignation-letter", category: "letters" },
    { slug: "recommendation-letter", category: "letters" },
    { slug: "offer-letter", category: "letters" },
    { slug: "business-letter", category: "letters" },
    { slug: "complaint-letter", category: "letters" },
    { slug: "thank-you-letter", category: "letters" },
    { slug: "request-letter", category: "letters" },
    { slug: "appointment-letter", category: "letters" },
    { slug: "experience-letter", category: "letters" },
  ];
  for (const t of templates) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/templates/${t.category}/${t.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  // Blog posts — all static articles
  for (const post of STATIC_BLOG_POSTS) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
