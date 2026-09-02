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
 * - Dynamically constructs the mailto: href and interactive link on client mount.
 * - Fallback text renders gracefully across SSR and hydrated DOM.
 */
export default function ObfuscatedEmail({
  user = "whitesparktechnologies",
  domain = "gmail.com",
  className = "",
  label,
  ariaLabel,
  children,
}: ObfuscatedEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const emailAddress = `${user}@${domain}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <a
      href={mounted ? `mailto:${emailAddress}` : "#"}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel || `Send email to ${emailAddress}`}
      title="Click to send email via mailto:"
    >
      {typeof children === "function" ? (
        children(emailAddress)
      ) : children ? (
        children
      ) : label ? (
        <span>{label}</span>
      ) : (
        <span>{emailAddress}</span>
      )}
    </a>
  );
}

