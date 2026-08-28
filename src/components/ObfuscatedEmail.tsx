"use client";

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
  const fullEmail = `${user}@${domain}`;

  return (
    <a
      href={`mailto:${fullEmail}`}
      className={className}
      aria-label={ariaLabel || `Send email to ${fullEmail}`}
      title={fullEmail}
    >
      {typeof children === "function" ? (
        children(fullEmail)
      ) : children ? (
        children
      ) : label ? (
        <span>{label}</span>
      ) : (
        <span>{fullEmail}</span>
      )}
    </a>
  );
}
