"use client";

import { useState, useEffect } from "react";
import { DollarSign } from "lucide-react";

interface AdBannerProps {
  position: "header" | "sidebar" | "inline" | "footer";
}

export default function AdBanner({ position }: AdBannerProps) {
  const [enabled, setEnabled] = useState(true);

  // Read config flag settings from site settings if configured
  useEffect(() => {
    // In production, we can query admin configuration APIs or local storage configs
    // const adminConfig = localStorage.getItem("admin_ads_config");
  }, []);

  if (!enabled) return null;

  // Determine sizing styles based on slot dimensions
  const getLayoutStyles = () => {
    switch (position) {
      case "header":
        return {
          dimensions: "w-full max-w-[728px] h-[90px]",
          label: "Leaderboard Header Ad (728x90)",
        };
      case "sidebar":
        return {
          dimensions: "w-[300px] h-[250px] md:h-[600px]",
          label: "Skyscraper Sidebar Ad (300x250/600)",
        };
      case "inline":
        return {
          dimensions: "w-full max-w-[468px] h-[60px] my-4 mx-auto",
          label: "Inline Article Banner Ad (468x60)",
        };
      case "footer":
        return {
          dimensions: "w-full max-w-[728px] h-[90px] mt-6",
          label: "Baseline Footer Ad (728x90)",
        };
    }
  };

  const layout = getLayoutStyles();

  return (
    <div
      className={`relative mx-auto rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center text-center p-2 select-none overflow-hidden transition-all ${layout.dimensions}`}
      data-ad-position={position}
    >
      {/* Decorative background stripes representing standard ad canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#00000003_25%,transparent_25%,transparent_50%,#00000003_50%,#00000003_75%,transparent_75%,transparent)] dark:bg-[linear-gradient(45deg,#ffffff02_25%,transparent_25%,transparent_50%,#ffffff02_50%,#ffffff02_75%,transparent_75%,transparent)] bg-[length:24px_24px] pointer-events-none" />

      <div className="z-10 space-y-1">
        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest bg-zinc-200/50 dark:bg-zinc-800/50 px-2 py-0.5 rounded">
          <DollarSign className="h-2.5 w-2.5" />
          <span>Advertisement</span>
        </span>
        <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-450">
          {layout.label}
        </p>
      </div>

      {/* AdSense fallback tag stubs */}
      {/* 
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}
    </div>
  );
}
