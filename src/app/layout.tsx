import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AuthProvider from "@/providers/auth-provider";
import ThemeProvider from "@/providers/theme-provider";
import HtmlDirSync from "@/components/HtmlDirSync";
import Schema from "@/components/seo/Schema";
import { globalSchemas } from "@/data/schemas/organization";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",   // show text immediately with fallback font while custom font loads
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,    // mono is not used above-the-fold, defer it
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${siteConfig.url}/en`,
    languages: {
      "en": `${siteConfig.url}/en`,
      "x-default": `${siteConfig.url}/en`,
    },
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: "Templix AI",
  publisher: siteConfig.name,
  category: "productivity",
  verification: {
    google: "google-site-verification=jj_Pz_gmxSmTBC-Rq3wqBJtb6Yn3vaPnJ3dN8XyrDgE",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    site: "@savan2509",
    creator: "@savan2509",
    images: ["/og-default.jpg"],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "en";
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager — lazyOnload so it never blocks FCP, LCP, or initial crawl */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6FBWXVC');`,
          }}
        />
        {/* Resource hints — prioritize primary domain assets; defer third-party connections */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Theme meta: browsers use this to color the mobile browser chrome */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090b" />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50" suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6FBWXVC"
            height="0"
            width="0"
            className="hidden invisible"
          />
        </noscript>
        {/* Non render-blocking inline init scripts inside <body> prior to paint */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('templix-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <Script
          id="locale-dir-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=location.pathname.split('/')[1];if(s){document.documentElement.lang=s;document.documentElement.dir=(s==='ar')?'rtl':'ltr';}}catch(e){}})();`,
          }}
        />
        <HtmlDirSync />
        {/* Global JSON-LD: Organization, Person, LocalBusiness & WebSite schemas */}
        <Schema data={globalSchemas} />
        <AuthProvider>
          <ThemeProvider defaultTheme="system">
            {children}
          </ThemeProvider>
        </AuthProvider>
        <Analytics />
        {/* GA4 — mounted with lazyOnload so analytics never blocks FCP/LCP paint */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {/* Facebook Pixel — standard tracker for visitor retargeting */}
        <Script
          id="fb-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${process.env.NEXT_PUBLIC_FB_PIXEL_ID || "918237465019283"}');fbq('track','PageView');`,
          }}
        />
      </body>
    </html>
  );
}
