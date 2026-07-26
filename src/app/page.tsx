import HomePage, { generateMetadata as generateLocaleMetadata } from "./[locale]/page";

interface PageProps {
  params?: Promise<any>;
  searchParams?: Promise<any>;
}

export async function generateMetadata(props: PageProps) {
  return generateLocaleMetadata({
    params: Promise.resolve({ locale: "en" }),
  });
}

export default async function RootPage() {
  return <HomePage params={Promise.resolve({ locale: "en" })} />;
}
