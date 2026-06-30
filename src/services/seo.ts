export interface SEOPageData {
  title: string;
  description: string;
  slug: string;
  locale: string;
  categoryName?: string;
  categorySlug?: string;
  isTemplate?: boolean;
}

export interface InternalLinkingData {
  relatedTemplates: { title: string; href: string }[];
  relatedBlogs: { title: string; href: string }[];
  relatedCategories: { name: string; href: string }[];
}

export class SEOEngine {
  private static APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://templix.ai";

  /**
   * Generates standard head meta attributes (used in Next.js generateMetadata lifecycle)
   */
  static generateMetadata(data: SEOPageData) {
    const canonical = `${this.APP_URL}/${data.locale}${data.slug === "/" ? "" : data.slug}`;
    const fullTitle = `${data.title} | Templix AI`;

    return {
      title: fullTitle,
      description: data.description,
      alternates: {
        canonical: canonical,
        languages: {
          en: `${this.APP_URL}/en${data.slug === "/" ? "" : data.slug}`,
          es: `${this.APP_URL}/es${data.slug === "/" ? "" : data.slug}`,
          de: `${this.APP_URL}/de${data.slug === "/" ? "" : data.slug}`,
          fr: `${this.APP_URL}/fr${data.slug === "/" ? "" : data.slug}`,
          ar: `${this.APP_URL}/ar${data.slug === "/" ? "" : data.slug}`,
        },
      },
      openGraph: {
        title: fullTitle,
        description: data.description,
        url: canonical,
        siteName: "Templix AI",
        locale: data.locale,
        type: data.isTemplate ? "article" : "website",
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description: data.description,
      },
    };
  }

  /**
   * Generates JSON-LD Breadcrumbs structured data script
   */
  static generateBreadcrumbSchema(data: SEOPageData) {
    const items = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${this.APP_URL}/${data.locale}`,
      },
    ];

    if (data.categorySlug && data.categoryName) {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: data.categoryName,
        item: `${this.APP_URL}/${data.locale}/templates/${data.categorySlug}`,
      });

      if (data.isTemplate) {
        items.push({
          "@type": "ListItem",
          position: 3,
          name: data.title,
          item: `${this.APP_URL}/${data.locale}/templates/${data.categorySlug}${data.slug}`,
        });
      }
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };
  }

  /**
   * Injects Product / SoftwareApplication schema for template indexing
   */
  static generateTemplateSchema(data: SEOPageData) {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: data.title,
      operatingSystem: "All",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      description: data.description,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "820",
      },
    };
  }

  /**
   * Generates contextual internal linking directories
   */
  static generateInternalLinks(
    categorySlug: string,
    currentSlug: string,
    locale: string
  ): InternalLinkingData {
    // Generate programmatic, related links to maximize page authority pass-downs
    const templatesList = [
      { slug: "invoice-freelancer", title: "Professional Invoice", category: "invoices" },
      { slug: "resume-software-engineer", title: "Software Engineer Resume", category: "resumes" },
      { slug: "freelance-agreement", title: "Freelance Service Agreement", category: "contracts" },
      { slug: "employment-contract", title: "Employment Contract", category: "contracts" },
      { slug: "freelance-contract", title: "Freelance Contract", category: "contracts" },
      { slug: "independent-contractor-agreement", title: "Independent Contractor Agreement", category: "contracts" },
      { slug: "service-agreement", title: "Service Agreement", category: "contracts" },
      { slug: "nda-template", title: "Non-Disclosure Agreement (NDA)", category: "contracts" },
      { slug: "consulting-agreement", title: "Consulting Agreement", category: "contracts" },
      { slug: "rental-agreement", title: "Rental Agreement", category: "contracts" },
      { slug: "sales-contract", title: "Sales Contract", category: "contracts" },
      { slug: "partnership-agreement", title: "Partnership Agreement", category: "contracts" },
      { slug: "vendor-agreement", title: "Vendor Agreement", category: "contracts" },
      { slug: "business-proposal", title: "Business Proposal", category: "proposals" },
      { slug: "project-proposal", title: "Project Proposal", category: "proposals" },
      { slug: "marketing-proposal", title: "Marketing Proposal", category: "proposals" },
      { slug: "web-design-proposal", title: "Web Design Proposal", category: "proposals" },
      { slug: "software-development-proposal", title: "Software Development Proposal", category: "proposals" },
      { slug: "consulting-proposal", title: "Consulting Proposal", category: "proposals" },
      { slug: "digital-marketing-proposal", title: "Digital Marketing Proposal", category: "proposals" },
      { slug: "construction-proposal", title: "Construction Proposal", category: "proposals" },
      { slug: "event-proposal", title: "Event Proposal", category: "proposals" },
      { slug: "grant-proposal", title: "Grant Proposal", category: "proposals" },
      { slug: "cover-letter", title: "Cover Letter", category: "letters" },
      { slug: "resignation-letter", title: "Resignation Letter", category: "letters" },
      { slug: "recommendation-letter", title: "Recommendation Letter", category: "letters" },
      { slug: "offer-letter", title: "Offer Letter", category: "letters" },
      { slug: "business-letter", title: "Business Letter", category: "letters" },
      { slug: "complaint-letter", title: "Complaint Letter", category: "letters" },
      { slug: "thank-you-letter", title: "Thank You Letter", category: "letters" },
      { slug: "request-letter", title: "Request Letter", category: "letters" },
      { slug: "appointment-letter", title: "Appointment Letter", category: "letters" },
      { slug: "experience-letter", title: "Experience Letter", category: "letters" },
    ];

    const categoryTemplates = templatesList.filter(
      (t) => t.category === categorySlug && t.slug !== currentSlug
    );
    const otherTemplates = templatesList.filter(
      (t) => t.category !== categorySlug && t.slug !== currentSlug
    );
    const sortedTemplates = [...categoryTemplates, ...otherTemplates].slice(0, 8);

    const relatedTemplates = sortedTemplates.map((t) => ({
      title: t.title,
      href: `/${locale}/templates/${t.slug}`,
    }));

    const relatedBlogs = [
      { title: "How to Write a Professional Invoice for Freelance Work", href: `/${locale}/blog/how-to-write-freelance-invoice` },
      { title: "Top ATS Resume Tips for Software Engineers in 2026", href: `/${locale}/blog/ats-resume-tips-for-developers` },
      { title: "Ultimate Guide to Business Proposal Writing", href: `/${locale}/blog/business-proposal-writing-guide` },
      { title: "Top 10 Contract Clauses Every Freelancer Needs", href: `/${locale}/blog/freelancer-contract-clauses` },
      { title: "How to Write a Resignation Letter (with Examples)", href: `/${locale}/blog/how-to-write-resignation-letter` },
      { title: "Secrets to a Winning Cover Letter that Lands Interviews", href: `/${locale}/blog/winning-cover-letter-secrets` },
      { title: "Writing a Recommendation Letter: Step-by-Step Guide", href: `/${locale}/blog/writing-recommendation-letter` },
      { title: "Designing the Perfect Web Design Proposal", href: `/${locale}/blog/perfect-web-design-proposal` },
    ];

    const relatedCategories = [
      { name: "Invoices & Billings", href: `/${locale}/templates/invoices` },
      { name: "Resumes & CVs", href: `/${locale}/templates/resumes` },
      { name: "Agreements & Contracts", href: `/${locale}/templates/contracts` },
      { name: "Business Proposals", href: `/${locale}/templates/proposals` },
      { name: "Letters & Cover Letters", href: `/${locale}/templates/letters` },
    ];

    return {
      relatedTemplates,
      relatedBlogs,
      relatedCategories,
    };
  }
}
