"use client";

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
  const fullEmail = `${user}@${domain}`;
  const content = children || label || fullEmail;

  return (
    <a href={`mailto:${fullEmail}`} className={className}>
      {content}
    </a>
  );
}
