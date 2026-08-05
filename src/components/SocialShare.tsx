"use client";

import { useState, useEffect } from "react";
import { Share2, Check, Link2, MessageSquare } from "lucide-react";

interface SocialShareProps {
  title?: string;
  url?: string;
  className?: string;
}

export default function SocialShare({
  title = "Templix AI — Free Professional Document Templates & AI Editor",
  url,
  className = "",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || "https://templix-ai.whitesparksoft.com/en");

  useEffect(() => {
    if (url) {
      setCurrentUrl(url);
    } else if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const shareUrl = currentUrl;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mr-1">
        <Share2 className="h-3.5 w-3.5" />
        <span>Share:</span>
      </span>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X / Twitter"
        title="Share on X / Twitter"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 hover:scale-105 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-sky-500 shadow-sm"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-600 shadow-sm"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.49 1.49 0 0 0-1.49 1.49c0 .82.67 1.49 1.49 1.49a1.49 1.49 0 0 0 1.49-1.49c0-.82-.67-1.49-1.49-1.49Z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        title="Share on Facebook"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 hover:scale-105 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-indigo-600 shadow-sm"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 hover:scale-105 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-500 shadow-sm"
      >
        <MessageSquare className="h-4 w-4" />
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        aria-label="Copy page link to clipboard"
        title="Copy link to clipboard"
        className="flex items-center gap-1.5 px-3 py-1.5 h-9 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-bold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400">Link Copied!</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5 text-zinc-400" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
