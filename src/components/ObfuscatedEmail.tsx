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
  user = "whitesparktechnologies",
  domain = "gmail.com",
  className = "",
  label,
  ariaLabel,
  children,
}: ObfuscatedEmailProps) {
  const emailAddress = `${user}@${domain}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <a
      href={`mailto:${emailAddress}`}
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
