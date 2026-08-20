import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db, isDbOnline } from "@/lib/db";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { CATEGORIES } from "@/constants";
import { ALL_TOOLS } from "@/data/tools";
import { INDUSTRIES_DATA } from "@/data/industries";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { runSeoHealthAudit } from "@/lib/seo/health-audit";
import { getSeoAnalyticsData } from "@/lib/seo/analytics";

/**
 * GET /api/admin/seo
 * Retrieves SEO data across all entities, health audit, and opportunities.
 */
export async function GET() {
  const session = await auth();
  if (!session?.user || (session.user.role !== "ADMIN" && session.user.role !== "OWNER")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const healthAudit = runSeoHealthAudit();
    const analytics = getSeoAnalyticsData();

    // Default template pages
    const templateItems = allFallbackTemplates.map((t) => ({
      id: t.slug,
      slug: t.slug,
      title: t.title,
      type: "Template",
      category: t.categorySlug,
      url: `/en/templates/${t.categorySlug}/${t.slug}`,
      metaTitle: `${t.title} - Free Download | Templix AI`,
      metaDescription: t.description,
      canonicalUrl: `https://templix-ai.whitesparksoft.com/en/templates/${t.categorySlug}/${t.slug}`,
      focusKeyword: `${t.title.toLowerCase()} template`,
      seoContent: `Comprehensive ${t.title} suitable for business and personal use.`,
      faqs: [
        { question: `How to customize this ${t.title}?`, answer: "Open in the AI editor to edit fields live." },
        { question: "Is this template free?", answer: "Yes, 100% free with no watermark." },
      ],
      isIndexed: true,
    }));

    // Category pages
    const categoryItems = CATEGORIES.map((c: any) => ({
      id: c.slug,
      slug: c.slug,
      title: c.name,
      type: "Category",
      category: c.slug,
      url: `/en/templates/${c.slug}`,
      metaTitle: `${c.name} Templates - Free Download | Templix AI`,
      metaDescription: c.description || `Browse free professional ${c.name} templates.`,
      canonicalUrl: `https://templix-ai.whitesparksoft.com/en/templates/${c.slug}`,
      focusKeyword: `${c.name?.toLowerCase() || c.slug} templates`,
      seoContent: `Explore our collection of ${c.name} documents.`,
      faqs: [
        { question: `What documents are in ${c.name}?`, answer: `Various professional templates for ${c.name}.` },
      ],
      isIndexed: true,
    }));


    // Industry pages
    const industryItems = INDUSTRIES_DATA.map((ind) => ({
      id: ind.slug,
      slug: ind.slug,
      title: ind.name,
      type: "Industry",
      category: ind.slug,
      url: `/en/industries/${ind.slug}`,
      metaTitle: ind.metaTitle,
      metaDescription: ind.metaDescription,
      canonicalUrl: `https://templix-ai.whitesparksoft.com/en/industries/${ind.slug}`,
      focusKeyword: `${ind.name.toLowerCase()} templates`,
      seoContent: ind.description,
      faqs: ind.faqs,
      isIndexed: true,
    }));

    // Tool items
    const toolItems = ALL_TOOLS.map((tl) => ({
      id: tl.slug,
      slug: tl.slug,
      title: tl.title,
      type: "Tool",
      category: tl.category,
      url: `/en/tools/${tl.slug}`,
      metaTitle: `${tl.title} - Free Online Tool | Templix AI`,
      metaDescription: tl.description,
      canonicalUrl: `https://templix-ai.whitesparksoft.com/en/tools/${tl.slug}`,
      focusKeyword: tl.title.toLowerCase(),
      seoContent: `Online utility for ${tl.title}.`,
      faqs: [
        { question: `Is ${tl.title} free?`, answer: "Yes, completely free with zero limits." },
      ],
      isIndexed: true,
    }));

    // Blog items
    const blogItems = STATIC_BLOG_POSTS.slice(0, 10).map((b) => ({
      id: b.slug,
      slug: b.slug,
      title: b.title,
      type: "Blog",
      category: b.category || "Guide",
      url: `/en/blog/${b.slug}`,
      metaTitle: `${b.title} | Templix AI`,
      metaDescription: b.description,
      canonicalUrl: `https://templix-ai.whitesparksoft.com/en/blog/${b.slug}`,
      focusKeyword: b.title.toLowerCase(),
      seoContent: b.description,
      faqs: [],
      isIndexed: true,
    }));

    return NextResponse.json({
      success: true,
      data: {
        templates: templateItems,
        categories: categoryItems,
        industries: industryItems,
        tools: toolItems,
        blogs: blogItems,
        healthAudit,
        analytics,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to fetch SEO admin data", details: err?.message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/seo
 * Updates or saves SEO metadata for a given page.
 */
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user || (session.user.role !== "ADMIN" && session.user.role !== "OWNER")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, type, metaTitle, metaDescription, canonicalUrl, focusKeyword, seoContent, faqs, isIndexed } = body;

    if (!id || !type) {
      return NextResponse.json({ error: "Missing required identifier or type" }, { status: 400 });
    }

    // If database is available, persist updates
    if (isDbOnline) {
      if (type === "Template") {

        await db.template.upsert({
          where: { slug: id },
          update: {
            metaTitle,
            metaDescription,
            canonicalUrl,
            seoContent,
            faq: faqs,
            noIndex: !isIndexed,
          },
          create: {
            slug: id,
            title: metaTitle || id,
            description: metaDescription || "",
            content: {},
            categoryId: "invoices",
            metaTitle,
            metaDescription,
            canonicalUrl,
            seoContent,
            faq: faqs,
            noIndex: !isIndexed,
          },
        });
      } else if (type === "Category") {
        await db.category.upsert({
          where: { slug: id },
          update: {
            metaTitle,
            metaDescription,
            seoContent,
            faq: faqs,
            noIndex: !isIndexed,
          },
          create: {
            slug: id,
            name: metaTitle || id,
            description: metaDescription || "",
            metaTitle,
            metaDescription,
            seoContent,
            faq: faqs,
            noIndex: !isIndexed,
          },
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `SEO metadata updated successfully for ${type} [${id}]`,
      saved: {
        id,
        type,
        metaTitle,
        metaDescription,
        canonicalUrl,
        focusKeyword,
        seoContent,
        faqs,
        isIndexed,
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to update SEO settings", details: err?.message },
      { status: 500 }
    );
  }
}
