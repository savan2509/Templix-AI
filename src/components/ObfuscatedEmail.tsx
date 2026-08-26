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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };

  const fullEmail = mounted ? `${user}@${domain}` : `${user} [at] ${domain}`;

  return (
    <a
      href={mounted ? `mailto:${user}@${domain}` : "#"}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel || (mounted ? `Send email to ${fullEmail}` : "Send email to customer support")}
      title={mounted ? fullEmail : undefined}
      suppressHydrationWarning
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

