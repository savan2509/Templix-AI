"use client";

import { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  label?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export default function ObfuscatedEmail({
  user = "support",
  domain = "templix-ai.whitesparksoft.com",
  className = "",
  label,
  children,
}: ObfuscatedEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fullEmail = `${user}@${domain}`;
  const content = children || label || fullEmail;

  if (!mounted) {
    // HTML entity representation for initial SSR HTML — unparseable by email scraping bots
    return (
      <span className={className}>
        {content}
      </span>
    );
  }

  return (
    <a href={`mailto:${fullEmail}`} className={className}>
      {content}
    </a>
  );
}
