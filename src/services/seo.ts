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

  /**
   * Automatically parses and injects high-authority external links and related internal links
   * into HTML content dynamically (without custom layout config)
   */
  static injectLinks(html: string, locale: string): string {
    if (!html) return "";

    // Split HTML into tags and text nodes to avoid injecting inside tag attributes/names
    const segments = html.split(/(<[^>]+>)/g);
    
    let invoiceTemplatesReplaced = false;
    let resumeTemplatesReplaced = false;
    let contractTemplatesReplaced = false;
    let proposalTemplatesReplaced = false;
    let letterTemplatesReplaced = false;
    let editorReplaced = false;
    
    let wikiInvoiceReplaced = false;
    let wikiResumeReplaced = false;
    let wikiContractReplaced = false;
    let wikiProposalReplaced = false;
    let schemaOrgReplaced = false;
    let w3Replaced = false;

    const processed = segments.map((seg) => {
      if (seg.startsWith("<")) {
        return seg;
      }
      
      let text = seg;
      
      // 1. Internal Links
      if (!invoiceTemplatesReplaced && text.toLowerCase().includes("invoice templates")) {
        text = text.replace(/invoice templates/i, `<a href="/${locale}/templates/invoices" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">invoice templates</a>`);
        invoiceTemplatesReplaced = true;
      }
      if (!resumeTemplatesReplaced && text.toLowerCase().includes("resume templates")) {
        text = text.replace(/resume templates/i, `<a href="/${locale}/templates/resumes" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">resume templates</a>`);
        resumeTemplatesReplaced = true;
      }
      if (!contractTemplatesReplaced && text.toLowerCase().includes("contract templates")) {
        text = text.replace(/contract templates/i, `<a href="/${locale}/templates/contracts" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">contract templates</a>`);
        contractTemplatesReplaced = true;
      }
      if (!proposalTemplatesReplaced && text.toLowerCase().includes("proposal templates")) {
        text = text.replace(/proposal templates/i, `<a href="/${locale}/templates/proposals" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">proposal templates</a>`);
        proposalTemplatesReplaced = true;
      }
      if (!letterTemplatesReplaced && text.toLowerCase().includes("cover letter templates")) {
        text = text.replace(/cover letter templates/i, `<a href="/${locale}/templates/letters" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">cover letter templates</a>`);
        letterTemplatesReplaced = true;
      }
      if (!editorReplaced && text.toLowerCase().includes("document editor")) {
        text = text.replace(/document editor/i, `<a href="/${locale}/editor" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">document editor</a>`);
        editorReplaced = true;
      }

      // 2. External Links (Authority links)
      if (!wikiInvoiceReplaced && text.toLowerCase().includes("billing document")) {
        text = text.replace(/billing document/i, `<a href="https://en.wikipedia.org/wiki/Invoice" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">billing document</a>`);
        wikiInvoiceReplaced = true;
      }
      if (!wikiResumeReplaced && text.toLowerCase().includes("curriculum vitae")) {
        text = text.replace(/curriculum vitae/i, `<a href="https://en.wikipedia.org/wiki/Resume" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">curriculum vitae</a>`);
        wikiResumeReplaced = true;
      }
      if (!wikiContractReplaced && text.toLowerCase().includes("legal record")) {
        text = text.replace(/legal record/i, `<a href="https://en.wikipedia.org/wiki/Contract" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">legal record</a>`);
        wikiContractReplaced = true;
      }
      if (!wikiProposalReplaced && text.toLowerCase().includes("business proposal")) {
        text = text.replace(/business proposal/i, `<a href="https://en.wikipedia.org/wiki/Proposal_(business)" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">business proposal</a>`);
        wikiProposalReplaced = true;
      }
      if (!schemaOrgReplaced && text.toLowerCase().includes("json-ld")) {
        text = text.replace(/json-ld/i, `<a href="https://schema.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">JSON-LD</a>`);
        schemaOrgReplaced = true;
      }
      if (!w3Replaced && text.toLowerCase().includes("html format")) {
        text = text.replace(/html format/i, `<a href="https://www.w3.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">HTML format</a>`);
        w3Replaced = true;
      }

      return text;
    });

    let result = processed.join("");

    const hasInternalLink = invoiceTemplatesReplaced || resumeTemplatesReplaced || contractTemplatesReplaced || proposalTemplatesReplaced || letterTemplatesReplaced || editorReplaced;
    const hasExternalLink = wikiInvoiceReplaced || wikiResumeReplaced || wikiContractReplaced || wikiProposalReplaced || schemaOrgReplaced || w3Replaced;

    if (!hasInternalLink) {
      result += `<p class="mt-6 text-sm text-zinc-500 border-t border-zinc-100 dark:border-zinc-800/50 pt-4">For more ready-to-use layouts, check out our collection of free <a href="/${locale}/templates" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">document templates</a> to speed up your paperwork.</p>`;
    }
    if (!hasExternalLink) {
      result += `<p class="mt-2 text-sm text-zinc-500">To learn more about professional document and markup standards, visit the official <a href="https://www.w3.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">W3C Organization website</a>.</p>`;
    }

    return result;
  }
}
