import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { db } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchHero from "@/components/SearchHero";
import FAQ, { faqSchema } from "@/components/FAQ";
import { CATEGORIES } from "@/constants";
import { STATIC_BLOG_POSTS } from "@/lib/blog-data";
import { allFallbackTemplates } from "@/data/templates-fallback";
import {
  FileText,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

// Template slug → preview image mapping (images stored in /public)
const TEMPLATE_IMAGES: Record<string, string> = {
  "invoice-freelancer": "/invoice-template-preview.png",
  "resume-software-engineer": "/resume-template-preview.png",
  "freelance-agreement": "/contract-template-preview.png",
};

// ── Robust high-fidelity mock fallbacks ────────────────────────────────────
const fallbackTemplates = [
  {
    id: "invoice-freelancer",
    slug: "invoice-freelancer",
    title: "Professional Invoice",
    description: "Clean invoice template for freelancers and consultants, containing dynamic rows and tax details.",
    isPremium: false,
    category: { name: "Invoices", slug: "invoices" }
  },
  {
    id: "resume-software-engineer",
    slug: "resume-software-engineer",
    title: "Software Engineer Resume",
    description: "ATS-friendly developer resume layout highlighting technical skills, experience, and projects.",
    isPremium: false,
    category: { name: "Resumes & CVs", slug: "resumes" }
  },
  {
    id: "freelance-agreement",
    slug: "freelance-agreement",
    title: "Freelance Service Agreement",
    description: "Standard service contract detailing scope of work, timeline, and payment terms.",
    isPremium: true,
    category: { name: "Contracts", slug: "contracts" }
  }
];

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Templix AI | Free Invoice, Resume, Contract & Proposal Templates",
    es: "Templix AI | Plantillas Gratuitas de Facturas, Currículums, Contratos y Propuestas",
    de: "Templix AI | Kostenlose Vorlagen für Rechnungen, Lebensläufe, Verträge und Angebote",
    fr: "Templix AI | Modèles Gratuits de Factures, CV, Contrats et Propositions",
    ar: "Templix AI | قوالب مجانية للفواتير، السير الذاتية، العقود والمقترحات",
  };
  
  const descriptions = {
    en: "Create and download professional invoices, resumes, CVs, contract agreements, business proposals, and letters in minutes. Fully customizable template editor with AI assistance.",
    es: "Cree y descargue facturas, currículums, contratos, propuestas comerciales y cartas profesionales en minutos. Editor de plantillas personalizable con IA.",
    de: "Erstellen und laden Sie professionelle Rechnungen, Lebensläufe, Verträge, Angebote und Briefe in wenigen Minuten herunter. Anpassbarer Editor mit KI.",
    fr: "Créez et téléchargez des factures, des CV, des contrats, des propositions commerciales et des lettres professionnels en quelques minutes. Éditeur personnalisable avec IA.",
    ar: "قم بإنشاء وتنزيل الفواتير المهنية، السير الذاتية، العقود، المقترحات التجارية والرسائل في دقائق. محرر قوالب قابل للتخصيص بالكامل بمساعدة الذكاء الاصطناعي.",
  };

  const title = titles[locale as keyof typeof titles] || titles.en;
  const description = descriptions[locale as keyof typeof descriptions] || descriptions.en;

  return {
    title,
    description,
    alternates: {
      canonical: `https://templix.ai/${locale}`,
      languages: {
        en: "https://templix.ai/en",
        es: "https://templix.ai/es",
        de: "https://templix.ai/de",
        fr: "https://templix.ai/fr",
        ar: "https://templix.ai/ar",
      },
    },
    openGraph: {
      title: "Templix AI — Free Professional Templates & AI Document Editor",
      description: "Create invoices, resumes, contracts, proposals and business documents in minutes.",
      url: `https://templix.ai/${locale}`,
      siteName: "Templix AI",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Templix AI — Free Professional Templates & AI Document Editor",
      description: "Create invoices, resumes, contracts, proposals and business documents in minutes.",
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  let templates = fallbackTemplates;
  // Use real static blog posts (first 2) — always valid slugs
  let blogs = STATIC_BLOG_POSTS.slice(0, 2).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    image: p.image,
    category: p.category,
    createdAt: new Date(p.publishedAt),
  }));

  try {
    if (process.env.DATABASE_URL) {
      const [dbTemplates, dbBlogs] = await Promise.all([
        db.template.findMany({ take: 3, include: { category: true } }),
        db.blog.findMany({
          where: { published: true },
          take: 2,
          orderBy: { createdAt: "desc" }
        })
      ]);

      if (dbTemplates && dbTemplates.length > 0) {
        templates = dbTemplates.map((t: any) => ({
          id: t.id,
          slug: t.slug,
          title: t.title,
          description: t.description,
          isPremium: t.isPremium,
          category: { name: t.category.name, slug: t.category.slug }
        }));
      }

      if (dbBlogs && dbBlogs.length > 0) {
        blogs = dbBlogs.map((b: any) => ({
          id: b.id,
          slug: b.slug,
          title: b.title,
          description: b.description,
          image: STATIC_BLOG_POSTS.find((p) => p.slug === b.slug)?.image ?? "/blog/blog-create-invoice.jpg",
          category: "Guides",
          createdAt: b.createdAt,
        }));
      }
    }
  } catch (err) {
    console.warn("Home page database connection bypass, displaying initial seed fallbacks.");
  }

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-zinc-900/30 dark:via-zinc-950 dark:to-zinc-950">
          {/* Ambient Glows */}
          <div className="absolute top-[-10%] left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_50%)]" />
          <div className="absolute top-1/4 right-[10%] -z-10 h-[350px] w-[350px] rounded-full bg-blue-400/5 blur-[80px] dark:bg-blue-500/10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50/70 text-xs font-semibold text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400 shadow-sm" style={{animation: 'fadeIn 0.6s ease both'}}>
              <Sparkles className="h-3.5 w-3.5" />
              <span>Next-Gen Document AI Workspace</span>
            </div>

            {/* Main Brand Position Headline */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Free Professional Templates <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                  + AI Document Editor
                </span>
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Create invoices, resumes, contracts, proposals and business documents in minutes. Simply choose a template, customize, and export to PDF/Word.
              </p>
            </div>

            {/* Global Search Component */}
            <SearchHero locale={locale} />
          </div>
        </section>

        {/* Popular Categories — deferred paint until visible */}
        <section className="py-12 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 400px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 mb-8 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <span>Browse Categories</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${locale}/templates/${cat.slug}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-zinc-100/70 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {/* Cover image */}
                  <div className="relative h-28 w-full overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  {/* Label area */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="block font-bold text-white text-xs leading-tight drop-shadow">
                      {cat.name}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-white/70 mt-0.5 font-medium">
                      <span>{allFallbackTemplates.filter(t => t.categorySlug === cat.slug).length} templates</span>
                      <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* Featured Templates Grid — deferred paint until visible */}
        <section className="py-16 bg-zinc-50/50 dark:bg-zinc-900/20 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 600px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  Trending Document Blueprints
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                  Ready-to-use, professionally formatted layouts for immediate customization.
                </p>
              </div>
              <Link
                href={`/${locale}/templates`}
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {templates.map((temp) => (
                <div
                  key={temp.id}
                  className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border-b border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                    {TEMPLATE_IMAGES[temp.slug] ? (
                      <Image
                        src={TEMPLATE_IMAGES[temp.slug]}
                        alt={`${temp.title} preview`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200/50 dark:border-zinc-800 text-center w-full max-w-[200px] space-y-1">
                        <FileText className="h-8 w-8 text-blue-500 mx-auto" />
                        <p className="font-semibold text-xs text-zinc-800 dark:text-zinc-200 truncate">{temp.title}</p>
                        <p className="text-[10px] text-zinc-400">{temp.category.name}</p>
                      </div>
                    )}

                    {/* Subtle gradient overlay for depth */}
                    {TEMPLATE_IMAGES[temp.slug] && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                    )}

                    {temp.isPremium && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[9px] uppercase tracking-wider shadow-sm z-10">
                        Premium
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                        {temp.category.name}
                      </span>
                      <h3 className="font-bold text-zinc-900 dark:text-white text-lg">
                        {temp.title}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                        {temp.description}
                      </p>
                    </div>

                    <Link
                      href={`/${locale}/templates/${temp.slug}`}
                      className="w-full h-11 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-1 shadow-sm"
                    >
                      <span>Customize Template</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic 3 Pillars Section — deferred paint until visible */}
        <section className="py-16 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 500px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Engineered for Ultimate Document Productivity
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Combining high-quality layout directories, AI text processing, and print-ready downloads.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 space-y-4 text-center border border-zinc-100/60 dark:border-zinc-800">
                <div className="h-12 w-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-sm">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">1. Choose a Template</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Search and discover 1,000+ targeted templates across invoices, resumes, contracts, and covers optimized for global SEO search intent.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 space-y-4 text-center border border-zinc-100/60 dark:border-zinc-800">
                <div className="h-12 w-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto shadow-sm">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">2. AI-Powered Writing</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Adjust tone, rewrite paragraphs, and fix grammar mistakes instantly using our swappable AI provider model layer inside our visual Tiptap workspace.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 space-y-4 text-center border border-zinc-100/60 dark:border-zinc-800">
                <div className="h-12 w-12 rounded-2xl bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto shadow-sm">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">3. Export Instantly</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Compile your customized layouts directly on the client or server into pixel-perfect PDF files (`pdf-lib`) and MS Word formats (`docx`).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blogs Section — deferred paint until visible */}
        <section className="py-16 bg-zinc-50/50 dark:bg-zinc-900/20 border-t border-zinc-100 dark:border-zinc-900" style={{contentVisibility: 'auto', containIntrinsicSize: '0 500px'}}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  Document Writing Tips & Guidelines
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                  Increase compilation quality with detailed step-by-step guides.
                </p>
              </div>
              <Link
                href={`/${locale}/blog`}
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>View All Articles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogs.map((article) => (
                <Link
                  key={article.id}
                  href={`/${locale}/blog/${article.slug}`}
                  className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lg hover:border-blue-500/30 transition-all overflow-hidden"
                >
                  {/* Blog cover image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-xs text-zinc-400 font-medium">
                      {new Date(article.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                    <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs JSON-LD — native script tag per Next.js JSON-LD guide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
        />
        <FAQ locale={locale} />
      </main>

      <Footer />
    </>
  );
}
