"use client";

import { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  label?: string;
  ariaLabel?: string;
  showIcon?: boolean;
  children?: React.ReactNode | ((email: string) => React.ReactNode);
}

export default function ObfuscatedEmail({
  user = "support",
  domain = "templix-ai.whitesparksoft.com",
  className = "",
  label,
  ariaLabel,
  children,
}: ObfuscatedEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fullEmail = mounted ? `${user}@${domain}` : `${user} [at] ${domain}`;

  return (
    <a
      href={`mailto:${user}@${domain}`}
      className={className}
      aria-label={ariaLabel || `Send email to ${user}@${domain}`}
      title={`${user}@${domain}`}
    >
      {typeof children === "function" ? (
        children(fullEmail)
      ) : children ? (
        children
      ) : label ? (
        <span>{label}</span>
      ) : (
        <span suppressHydrationWarning>{fullEmail}</span>
      )}
    </a>
  );
}

