import fs from "fs";
import path from "path";
import { allFallbackTemplates } from "../src/data/templates-fallback";
import { STATIC_BLOG_POSTS } from "../src/lib/blog-data";
import { comparisonPosts } from "../src/lib/blog/posts-comparisons";
import { ALL_USE_CASE_SLUGS, getUseCaseBySlug } from "../src/lib/use-case-data";
import { CATEGORIES } from "../src/constants/index";

const PUBLIC_DIR = path.join(process.cwd(), "public");

interface Bug {
  category: "SEO" | "Developer" | "Design";
  severity: "High" | "Medium" | "Low";
  title: string;
  description: string;
  location: string;
}

const bugs: Bug[] = [];

console.log("🔍 Starting Comprehensive Site-Wide Audit (SEO, Developer, Design)...\n");

// 1. Audit Templates Data
console.log("📁 1. Auditing Templates Data...");
allFallbackTemplates.forEach((template, idx) => {
  if (!template.title || !template.slug || !template.categorySlug) {
    bugs.push({
      category: "Developer",
      severity: "High",
      title: "Missing Template Core Fields",
      description: `Template at index ${idx} is missing title, slug, or categorySlug`,
      location: "src/data/templates-fallback.ts",
    });
  }
  if (!template.content || !template.content.editorState || !template.content.editorState.content) {
    bugs.push({
      category: "Developer",
      severity: "High",
      title: "Missing Template Document Content",
      description: `Template ${template.slug} lacks editorState content blocks`,
      location: `src/data/templates/${template.categorySlug}.ts`,
    });
  }
  if (!template.description || template.description.length < 20) {
    bugs.push({
      category: "SEO",
      severity: "Medium",
      title: "Short/Missing Template Description",
      description: `Template ${template.slug} has short description (${template.description?.length || 0} chars)`,
      location: `src/data/templates/${template.categorySlug}.ts`,
    });
  }
});

// 2. Audit Blog Posts & Images
console.log("📁 2. Auditing Blog Posts & Assets...");
STATIC_BLOG_POSTS.forEach((post) => {
  if (!post.title || !post.slug || !post.description || !post.publishedAt) {
    bugs.push({
      category: "SEO",
      severity: "High",
      title: "Incomplete Blog Metadata",
      description: `Blog post '${post.slug}' missing essential metadata fields`,
      location: "src/lib/blog-data.ts",
    });
  }
  const imgPath = path.join(PUBLIC_DIR, "blog", `blog-${post.slug}.jpg`);
  if (!fs.existsSync(imgPath)) {
    bugs.push({
      category: "Design",
      severity: "High",
      title: "Missing Blog Hero Artwork Image",
      description: `Image file missing: public/blog/blog-${post.slug}.jpg`,
      location: "public/blog/",
    });
  }
});

// 3. Audit Comparison Posts & Images
console.log("📁 3. Auditing Software Comparison Pages & Assets...");
comparisonPosts.forEach((comp) => {
  if (!comp.title || !comp.slug) {
    bugs.push({
      category: "SEO",
      severity: "High",
      title: "Incomplete Comparison Metadata",
      description: `Comparison '${comp.slug}' missing title or slug`,
      location: "src/lib/blog/posts-comparisons.ts",
    });
  }
  const imgPath = path.join(PUBLIC_DIR, "compare", `compare-${comp.slug}.jpg`);
  if (!fs.existsSync(imgPath)) {
    bugs.push({
      category: "Design",
      severity: "High",
      title: "Missing Comparison Visual Card Image",
      description: `Image file missing: public/compare/compare-${comp.slug}.jpg`,
      location: "public/compare/",
    });
  }
});

// 4. Audit Category Cover Images
console.log("📁 4. Auditing Category Cover Images...");
CATEGORIES.forEach((cat) => {
  const imgPath = path.join(PUBLIC_DIR, `cat-${cat.slug}-cover.jpg`);
  if (!fs.existsSync(imgPath)) {
    bugs.push({
      category: "Design",
      severity: "Medium",
      title: "Missing Category Cover Artwork",
      description: `Category cover image missing: public/cat-${cat.slug}-cover.jpg`,
      location: "public/",
    });
  }
});

// 5. Audit Use Cases Metadata
console.log("📁 5. Auditing Use Cases Spoke Pages...");
ALL_USE_CASE_SLUGS.forEach((slug) => {
  const uc = getUseCaseBySlug(slug);
  if (!uc || !uc.title || !uc.slug || !uc.primaryKeyword) {
    bugs.push({
      category: "SEO",
      severity: "Medium",
      title: "Incomplete Use Case Metadata",
      description: `Use case '${slug}' missing target audience or primary keyword`,
      location: "src/lib/use-case-data.ts",
    });
  }
});

console.log("\n========================================================");
console.log(`📊 Audit Results: ${bugs.length} Issues Discovered`);
console.log("========================================================\n");

if (bugs.length > 0) {
  bugs.forEach((b, idx) => {
    console.log(`Bug #${idx + 1} [${b.category}] [Severity: ${b.severity}]`);
    console.log(`Title: ${b.title}`);
    console.log(`Location: ${b.location}`);
    console.log(`Details: ${b.description}`);
    console.log("--------------------------------------------------------");
  });
} else {
  console.log("🎉 0 Data or Asset Integrity Bugs Found! Site data is 100% clean.");
}
