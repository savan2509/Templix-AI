"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Heart } from "lucide-react";

interface Props {
  templateSlug: string;
  locale: string;
  initialFavorited?: boolean;
  size?: "sm" | "md";
}

// Heart button that toggles a template as a favorite.
// Requires Supabase auth — redirects to login if not signed in.
export default function FavoriteButton({
  templateSlug,
  locale,
  initialFavorited = false,
  size = "md",
}: Props) {
  const router = useRouter();
  const supabase = createClient();
  const [favorited, setFavorited] = useState(initialFavorited);
  const [loading, setLoading] = useState(false);

  // Keep in sync when the server-rendered value changes (e.g. after navigation).
  useEffect(() => {
    setFavorited(initialFavorited);
  }, [initialFavorited]);

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Check auth first (Supabase not configured → send to login)
    if (!supabase) {
      router.push(`/${locale}/login`);
      return;
    }
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push(`/${locale}/login`);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateSlug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setFavorited(data.favorited);
    } catch {
      // Silently fail — UI stays consistent
    } finally {
      setLoading(false);
    }
  };

  // Sized up: the old 3.5/4 heart in a 7/9 box was hard to see and a small
  // touch target (well under the ~44px recommended minimum on the detail page).
  const iconSize = size === "sm" ? "h-5 w-5" : "h-6 w-6";
  const btnSize = size === "sm"
    ? "h-10 w-10 rounded-xl"
    : "h-12 w-12 rounded-2xl";

  // Rendered on the server too: returning null until mount made the heart pop in
  // late (and vanish entirely on cards that only reveal it on hover).
  return (
    <button
      id={`favorite-btn-${templateSlug}`}
      onClick={handleToggle}
      disabled={loading}
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
      title={favorited ? "Remove from favorites" : "Save to favorites"}
      className={`inline-flex items-center justify-center ${btnSize} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400/40 ${
        favorited
          ? "bg-red-50 dark:bg-red-950/30 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 border border-red-200 dark:border-red-800/50"
          : "bg-white dark:bg-zinc-800 text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 border border-zinc-200 dark:border-zinc-700 hover:border-red-200 dark:hover:border-red-800/50"
      } ${loading ? "opacity-60 cursor-not-allowed scale-95" : "hover:scale-110 active:scale-95"}`}
    >
      <Heart
        className={`${iconSize} transition-all duration-200 ${favorited ? "fill-red-500 stroke-red-500" : "fill-transparent"}`}
      />
    </button>
  );
}
