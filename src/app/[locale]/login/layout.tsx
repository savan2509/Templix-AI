import type { Metadata } from "next";

// The login page is a client component and cannot export metadata itself, so
// this layout supplies a noindex directive (a sign-in form should not be indexed).
export const metadata: Metadata = {
  title: "Sign In",
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
