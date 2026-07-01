import { FileText } from "lucide-react";

export default function EditorLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors">
      {/* Top Navbar Skeleton */}
      <header className="h-14 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-zinc-300 dark:text-zinc-700" />
          <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        </div>
        <div className="h-8 w-24 rounded-lg bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
      </header>

      {/* Main Workspace Skeleton */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Control Sidebar */}
        <aside className="w-80 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-6 hidden md:flex flex-col gap-6">
          <div className="space-y-2">
            <div className="h-3 w-16 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
            <div className="h-8 w-full rounded-xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
          </div>
          <div className="space-y-4 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-24 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                <div className="h-10 w-full rounded-xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              </div>
            ))}
          </div>
        </aside>

        {/* Right Editor Area */}
        <main className="flex-1 bg-zinc-100/50 dark:bg-zinc-950/20 p-6 sm:p-10 flex justify-center overflow-y-auto">
          <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-8 sm:p-12 space-y-6 aspect-[1/1.4]">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-6">
              <div className="space-y-2">
                <div className="h-8 w-64 rounded-lg bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                <div className="h-4 w-40 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              </div>
              <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
            </div>

            <div className="space-y-4 pt-4">
              <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              <div className="h-4 w-11/12 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              <div className="h-4 w-4/5 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
            </div>

            <div className="space-y-4 pt-4">
              <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
