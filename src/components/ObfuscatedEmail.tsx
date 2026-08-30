"use client";

import React, { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  label?: string;
  ariaLabel?: string;
  children?: React.ReactNode | ((email: string) => React.ReactNode);
}

/**
 * ObfuscatedEmail
 *
 * Protects email addresses from spam harvesters and web scrapers.
 * - Server HTML does not contain plaintext email or raw mailto: link.
 * - Dynamically constructs mailto link only after client hydration or user interaction.
 */
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
    const address = `${user}@${domain}`;
    window.location.href = `mailto:${address}`;
    e.preventDefault();
  };

  const displayEmail = mounted ? `${user}@${domain}` : `${user} [at] ${domain}`;

  return (
    <a
      href={mounted ? `mailto:${user}@${domain}` : "#"}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel || (mounted ? `Send email to support` : "Contact support")}
      title="Click to send email"
    >
      {typeof children === "function" ? (
        children(displayEmail)
      ) : children ? (
        children
      ) : label ? (
        <span>{label}</span>
      ) : (
        <span>{displayEmail}</span>
      )}
    </a>
  );
}
