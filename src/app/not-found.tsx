import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileQuestion, Home, LayoutGrid } from "lucide-react";

// Global 404 page. Rendered for unmatched routes and for any notFound() call
// that doesn't have a closer not-found boundary.
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-zinc-950 px-4">
        <div className="text-center max-w-md">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
            <FileQuestion className="h-8 w-8" />
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Error 404
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get you
            back on track.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/10 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Back to home</span>
            </Link>
            <Link
              href="/en/templates"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <LayoutGrid className="h-4 w-4" />
              <span>Browse templates</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
