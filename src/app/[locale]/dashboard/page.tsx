import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db, isDbOnline } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  Plus,
  Trash2,
  Download,
  Star,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// Standard mock documents fallback
const fallbackDocs = [
  {
    id: "mock-doc-1",
    title: "Project Development Invoice - Sarah",
    updatedAt: new Date("2026-06-28T12:00:00Z"),
  },
  {
    id: "mock-doc-2",
    title: "Software Engineer Resume CV",
    updatedAt: new Date("2026-06-27T09:30:00Z"),
  }
];

const fallbackFavorites = [
  {
    id: "invoice-freelancer",
    slug: "invoice-freelancer",
    title: "Professional Invoice",
    description: "Invoice template containing dynamic fields and tax lines.",
    categoryName: "Invoices"
  }
];

interface DashboardProps {
  params: Promise<{ locale: string }>;
}

export default async function DashboardPage({ params }: DashboardProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  let documents = fallbackDocs;
  let favorites = fallbackFavorites;

  try {
    if (isDbOnline && process.env.DATABASE_URL) {
      const [dbDocs, dbFavs] = await Promise.all([
        db.document.findMany({
          where: { userId: session.user.id },
          orderBy: { updatedAt: "desc" },
        }),
        db.favorite.findMany({
          where: { userId: session.user.id },
          include: { template: { include: { category: true } } },
        })
      ]);

      if (dbDocs) {
        documents = dbDocs.map((d: any) => ({
          id: d.id,
          title: d.title,
          updatedAt: d.updatedAt
        }));
      }

      if (dbFavs) {
        favorites = dbFavs.map((f: any) => ({
          id: f.template.id,
          slug: f.template.slug,
          title: f.template.title,
          description: f.template.description,
          categoryName: f.template.category.name
        }));
      }
    }
  } catch (err) {
    console.warn("DB fetch bypass in Dashboard, showing mock details.");
  }

  // Filter out any documents that have been marked deleted (for both mock files and database records)
  const cookieStore = await cookies();
  const deletedIds = cookieStore.get("deleted_docs")?.value?.split(",") || [];
  documents = documents.filter((doc) => !deletedIds.includes(doc.id));

  // Server action to delete document
  const deleteDocument = async (formData: FormData) => {
    "use server";
    const id = formData.get("id") as string;
    const loc = (formData.get("locale") as string) || "en";
    try {
      if (isDbOnline && process.env.DATABASE_URL) {
        try {
          await db.document.delete({
            where: { id }
          });
        } catch (dbErr) {
          console.warn("DB delete bypass or record not found:", (dbErr as Error).message);
        }
      }

      // Track deletion in cookies so that both mock files and database files disappear instantly in UI
      const cookieStore = await cookies();
      const current = cookieStore.get("deleted_docs")?.value || "";
      const updated = current ? `${current},${id}` : id;
      cookieStore.set("deleted_docs", updated, { path: "/" });

      revalidatePath(`/${loc}/dashboard`);
    } catch (err) {
      console.error("Failed to delete document", err);
    }
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-10 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Greeting Profile Card */}
          <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px] -z-10" />
            <div className="space-y-1">
              <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Workspace
              </span>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
                Welcome back, {session.user.name || session.user.email?.split("@")[0]}!
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Manage your customized files, bookmarks, or jump into templates.
              </p>
            </div>

            <Link
              href={`/${locale}/templates`}
              className="flex items-center gap-1.5 h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-500/10 transition-all shrink-0"
            >
              <Plus className="h-4 w-4" />
              <span>Create New Document</span>
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
              <span className="text-xs text-zinc-400 uppercase font-semibold">Saved Files</span>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1.5">{documents.length}</p>
            </div>
            <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
              <span className="text-xs text-zinc-400 uppercase font-semibold">Favorites</span>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1.5">{favorites.length}</p>
            </div>
            <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
              <span className="text-xs text-zinc-400 uppercase font-semibold">AI Assistant</span>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1.5">Unlimited Free</p>
            </div>
            <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
              <span className="text-xs text-zinc-400 uppercase font-semibold">Role Tier</span>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1.5">{session.user.role || "USER"}</p>
            </div>
          </div>

          {/* Main workspace listing */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Saved Documents */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <span>My Saved Documents</span>
              </h2>

              <div className="space-y-3">
                {documents.length === 0 ? (
                  <div className="p-10 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 text-center text-zinc-500">
                    <p className="text-sm">You do not have any saved documents yet.</p>
                  </div>
                ) : (
                  documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-sm flex items-center justify-between gap-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                    >
                      <div className="min-w-0 flex-1 space-y-1">
                        <Link
                          href={`/${locale}/editor/${doc.id}`}
                          className="font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block text-sm sm:text-base"
                        >
                          {doc.title}
                        </Link>
                        <p className="text-xs text-zinc-400">
                          Last edited: {new Date(doc.updatedAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/${locale}/editor/${doc.id}`}
                          className="h-9 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-semibold flex items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors"
                        >
                          Edit
                        </Link>

                        <form action={deleteDocument}>
                          <input type="hidden" name="id" value={doc.id} />
                          <input type="hidden" name="locale" value={locale} />
                          <button
                            type="submit"
                            className="p-2 border border-zinc-200 dark:border-zinc-800 hover:border-red-200 hover:bg-red-50 text-zinc-400 hover:text-red-500 dark:hover:bg-red-950/20 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </form>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right: Favorites & Quick actions */}
            <div className="space-y-6">
              {/* Favorites list */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                  <span>Favorite Templates</span>
                </h2>

                <div className="space-y-3">
                  {favorites.length === 0 ? (
                    <div className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 text-center text-zinc-400 text-sm">
                      No bookmarked templates.
                    </div>
                  ) : (
                    favorites.map((fav) => (
                      <Link
                        key={fav.id}
                        href={`/${locale}/templates/${fav.slug}`}
                        className="p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-md block hover:border-blue-500/30 transition-all space-y-1.5"
                      >
                        <span className="text-[9px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                          {fav.categoryName}
                        </span>
                        <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{fav.title}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed truncate">
                          {fav.description}
                        </p>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
