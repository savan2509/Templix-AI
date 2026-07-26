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

  if (!mounted) {
    // Render obfuscated HTML entities on server (e.g., support&#64;templix-ai.whitesparksoft.com)
    // Email harvesting bots searching raw HTML for email patterns will fail to detect it.
    return (
      <span
        className={className}
        dangerouslySetInnerHTML={{
          __html: children
            ? typeof children === "string"
              ? children.replace(/@/g, "&#64;").replace(/\./g, "&#46;")
              : ""
            : label
            ? label.replace(/@/g, "&#64;").replace(/\./g, "&#46;")
            : `${user}&#64;${domain.replace(/\./g, "&#46;")}`,
        }}
      />
    );
  }

  const content = children || label || fullEmail;

  return (
    <a href={`mailto:${fullEmail}`} className={className}>
      {content}
    </a>
  );
}
