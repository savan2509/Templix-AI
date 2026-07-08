import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { siteConfig } from "@/config/site";

// Fallback: the full set of static articles, newest first (used when the DB is offline).
const fallbackBlogs = [...STATIC_BLOG_POSTS]
  .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
  .slice(0, 20)
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    createdAt: new Date(p.publishedAt),
  }));

export async function GET() {
  const baseUrl = siteConfig.url;

  let blogs = fallbackBlogs;
  try {
    if (process.env.DATABASE_URL) {
      const dbBlogs = await db.blog.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: 20
      });
      if (dbBlogs && dbBlogs.length > 0) blogs = dbBlogs;
    }
  } catch (err) {
    console.warn("DB Query bypass in RSS feed.");
  }

  const blogItemsXml = blogs
    .map((blog) => {
      const url = `${baseUrl}/en/blog/${blog.slug}`;
      return `
        <item>
          <title><![CDATA[${blog.title}]]></title>
          <link>${url}</link>
          <guid isPermaLink="true">${url}</guid>
          <description><![CDATA[${blog.description}]]></description>
          <pubDate>${new Date(blog.createdAt).toUTCString()}</pubDate>
        </item>
      `;
    })
    .join("");

  const rssFeedXml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Templix AI Blog Feed</title>
        <link>${baseUrl}/en/blog</link>
        <description>Guides and tips for writing better documents, invoices, resumes, contracts, and proposals in minutes.</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
        ${blogItemsXml}
      </channel>
    </rss>
  `;

  return new NextResponse(rssFeedXml, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600"
    }
  });
}
