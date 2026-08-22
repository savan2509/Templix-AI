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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };

  const fullEmail = `${user}@${domain}`;

  return (
    <a
      href="#"
      onClick={handleClick}
      className={className}
      aria-label="Send email"
      title="Contact via email"
    >
      {children || (
        label ? (
          <span>{label}</span>
        ) : (
          <span>{mounted ? fullEmail : `${user} [at] ${domain}`}</span>
        )
      )}
    </a>
  );
}
