import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const fallbackBlogs = [
  {
    slug: "how-to-write-freelance-invoice",
    title: "How to Write a Professional Invoice for Freelance Work",
    description: "A comprehensive guide showing how to write invoices that clients pay immediately.",
    createdAt: new Date("2026-06-15")
  },
  {
    slug: "ats-resume-tips-for-developers",
    title: "Top ATS Resume Tips for Software Engineers in 2026",
    description: "Learn how to optimize your technology CV to pass automated applicant tracking filters.",
    createdAt: new Date("2026-06-20")
  }
];

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://templix.ai";

  let blogs = fallbackBlogs;
  try {
    if (process.env.DATABASE_URL) {
      const dbBlogs = await db.blog.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: 10
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
