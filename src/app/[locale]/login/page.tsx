import { redirect } from "next/navigation";

// Login is disabled — the app is fully usable without an account. Any request
// to the sign-in page is sent to the home page.
export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}`);
}
