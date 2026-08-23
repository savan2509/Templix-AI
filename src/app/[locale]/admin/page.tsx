import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db, isDbOnline } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminSettingsClient from "@/components/AdminSettingsClient";
import { allFallbackTemplates } from "@/data/templates-fallback";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { runSeoHealthAudit } from "@/lib/seo/health-audit";
import {
  ShieldAlert,
  FileText,
  BookOpen,
  Layout,
  Globe2,
} from "lucide-react";

const fallbackCategories = [
  { slug: "invoices", name: "Invoices", templatesCount: 81 },
  { slug: "resumes", name: "Resumes & CVs", templatesCount: 69 },
  { slug: "contracts", name: "Contracts", templatesCount: 67 },
  { slug: "proposals", name: "Proposals", templatesCount: 57 },
  { slug: "letters", name: "Letters & Emails", templatesCount: 62 },
  { slug: "reports", name: "Reports", templatesCount: 50 },
];

const fallbackBlogs = [
  { slug: "how-to-write-freelance-invoice", title: "How to Write a Professional Invoice", published: true },
  { slug: "ats-resume-tips-for-developers", title: "Top ATS Resume Tips for Developers", published: true },
];

interface AdminProps {
  params: Promise<{ locale: string }>;
}

export default async function AdminPage({ params }: AdminProps) {
  const { locale } = await params;
  const session = await auth();

  // Route security guarded by role
  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  if (session.user.role !== "ADMIN" && session.user.role !== "OWNER") {
    redirect(`/${locale}/dashboard`);
  }

  let categories = fallbackCategories;
  let blogs = fallbackBlogs;

  try {
    if (isDbOnline) {
      const [dbCats, dbBlogs] = await Promise.all([
        db.category.findMany({
          include: { _count: { select: { templates: true } } },
        }),
        db.blog.findMany(),
      ]);

      if (dbCats && dbCats.length > 0) {
        categories = dbCats.map((c: any) => ({
          slug: c.slug,
          name: c.name,
          templatesCount: c._count?.templates || 0,
        }));
      }

      if (dbBlogs && dbBlogs.length > 0) {
        blogs = dbBlogs.map((b: any) => ({
          slug: b.slug,
          title: b.title,
          published: b.published,
        }));
      }
    }
  } catch (_err) {
    console.warn("DB load bypass in Admin Panel");
  }

  // Quick cached summary for high performance render (< 5ms)
  const healthAudit = runSeoHealthAudit();

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-10 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex items-center gap-4 relative overflow-hidden">
            <div className="h-12 w-12 rounded-2xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <span className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                Control Center
              </span>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl mt-1">
                Admin Panel & SEO Management
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Lightweight control center for template listings, SEO metadata, live health audits, and feature flags.
              </p>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/30 text-blue-500 rounded-xl">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase">SEO Health</span>
                <p className="text-xl font-bold mt-0.5 text-emerald-500">
                  {healthAudit.healthScorePercentage}%
                </p>
              </div>
            </div>

            <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 rounded-xl">
                <Layout className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase">Categories</span>
                <p className="text-xl font-bold mt-0.5">{categories.length}</p>
              </div>
            </div>

            <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-purple-50 dark:bg-purple-950/30 text-purple-500 rounded-xl">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase">Templates</span>
                <p className="text-xl font-bold mt-0.5">
                  {allFallbackTemplates.length}
                </p>
              </div>
            </div>

            <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-950/30 text-green-500 rounded-xl">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase">Published Blogs</span>
                <p className="text-xl font-bold mt-0.5">
                  {blogs.filter((b) => b.published).length || STATIC_BLOG_POSTS.length}
                </p>
              </div>
            </div>
          </div>

          {/* Admin client settings form with on-demand SEO data */}
          <AdminSettingsClient
            categories={categories}
            blogs={blogs}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
