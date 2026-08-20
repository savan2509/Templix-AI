/**
 * Industry Landing Pages Data
 *
 * Implements Point 2 & Point 3:
 * Dedicated industry verticals targeting high-intent commercial queries:
 * /industries/construction, /industries/real-estate, /industries/healthcare, etc.
 */

export interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  description: string;
  iconName: string;
  metaTitle: string;
  metaDescription: string;
  featuredCategories: string[];
  recommendedTemplates: { title: string; slug: string; category: string }[];
  faqs: { question: string; answer: string }[];
}

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    slug: "construction",
    name: "Construction & Contractors",
    headline: "Professional Construction Invoices, Contracts, and Estimates",
    description: "Purpose-built document templates for general contractors, builders, electricians, plumbers, and trade professionals. Manage project milestones, bids, and change orders effortlessly.",
    iconName: "HardHat",
    metaTitle: "Construction Document Templates - Invoices, Contracts & Bids | Templix AI",
    metaDescription: "Free printable & editable construction invoices, contractor agreements, and project bid templates in PDF & Word. Instant download with Templix AI.",
    featuredCategories: ["invoices", "contracts", "proposals"],
    recommendedTemplates: [
      { title: "Contractor Invoice Template", slug: "invoice-contractor", category: "invoices" },
      { title: "Independent Contractor Agreement", slug: "independent-contractor-agreement", category: "contracts" },
      { title: "Project Proposal Template", slug: "project-proposal", category: "proposals" },
      { title: "HVAC Service Invoice", slug: "invoice-hvac-service", category: "invoices" },
      { title: "Plumbing Service Invoice", slug: "invoice-plumbing", category: "invoices" },
    ],
    faqs: [
      {
        question: "What should a construction invoice template include?",
        answer: "A standard construction invoice must include contractor license details, client info, itemized materials & labor breakdowns, milestone billing schedule, tax breakdown, and payment due terms.",
      },
      {
        question: "Can I customize contractor payment terms?",
        answer: "Yes, Templix AI allows you to specify progress billing, retainer fees, net-30 payment terms, and direct bank details.",
      },
      {
        question: "Are construction contract templates legally binding?",
        answer: "Our contractor agreements contain industry-standard clauses covering scope of work, warranty, liability limits, and dispute resolution.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property",
    headline: "Real Estate Agreements, Rental Contracts, and Commission Invoices",
    description: "Streamline lease agreements, property management notices, agent commission invoices, and client proposals with legal clarity.",
    iconName: "Building2",
    metaTitle: "Real Estate Templates - Rental Agreements & Commission Invoices | Templix AI",
    metaDescription: "Download free real estate document templates: lease agreements, property management invoices, and broker proposals in PDF & Word format.",
    featuredCategories: ["contracts", "invoices", "proposals"],
    recommendedTemplates: [
      { title: "Rental Agreement Template", slug: "rental-agreement", category: "contracts" },
      { title: "Rental Invoice Template", slug: "invoice-rental", category: "invoices" },
      { title: "Sales Contract Agreement", slug: "sales-contract", category: "contracts" },
      { title: "Business Proposal", slug: "business-proposal", category: "proposals" },
    ],
    faqs: [
      {
        question: "What documents do real estate landlords need?",
        answer: "Landlords require residential lease agreements, rental receipt templates, property inspection checklists, and security deposit return notices.",
      },
      {
        question: "How do I create a rental invoice?",
        answer: "Use our preformatted rental invoice template to input property address, tenant name, monthly rent amount, utility fees, and due date.",
      },
    ],
  },
  {
    slug: "freelancers",
    name: "Freelancers & Solopreneurs",
    headline: "Freelance Invoices, Service Agreements, and Client Proposals",
    description: "Designed for web designers, software developers, copywriters, and creative consultants. Protect your work and get paid faster.",
    iconName: "Laptop",
    metaTitle: "Freelancer Document Templates - Invoices, Proposals & Contracts | Templix AI",
    metaDescription: "All-in-one free templates for freelancers: hourly invoices, freelance service contracts, and winning project proposals.",
    featuredCategories: ["invoices", "contracts", "proposals", "resumes"],
    recommendedTemplates: [
      { title: "Freelancer Invoice Template", slug: "invoice-freelancer", category: "invoices" },
      { title: "Freelance Agreement Contract", slug: "freelance-agreement", category: "contracts" },
      { title: "Web Design Proposal", slug: "web-design-proposal", category: "proposals" },
      { title: "Graphic Designer Invoice", slug: "invoice-graphic-designer", category: "invoices" },
      { title: "Software Engineer Resume", slug: "resume-software-engineer", category: "resumes" },
    ],
    faqs: [
      {
        question: "How should a freelancer bill their clients?",
        answer: "Freelancers should use a structured invoice with clear payment milestones, hourly rates or fixed fees, late fee terms, and instant payment links.",
      },
      {
        question: "Why do freelancers need written contracts?",
        answer: "A written freelance agreement establishes copyright transfer conditions, project scope boundaries, revision limits, and payment protection.",
      },
    ],
  },
  {
    slug: "technology-it",
    name: "Technology & Software",
    headline: "Software Development Agreements, SLA Contracts, and Tech Resumes",
    description: "Comprehensive documentation for software engineers, SaaS companies, IT consultancies, and cybersecurity specialists.",
    iconName: "Code",
    metaTitle: "Tech & Software Document Templates - SOW, Contracts & Resumes | Templix AI",
    metaDescription: "Free technical proposal templates, software engineering resumes, NDA agreements, and master service agreements in PDF & DOCX.",
    featuredCategories: ["proposals", "contracts", "resumes", "invoices"],
    recommendedTemplates: [
      { title: "Software Development Proposal", slug: "software-development-proposal", category: "proposals" },
      { title: "NDA Non-Disclosure Agreement", slug: "nda-template", category: "contracts" },
      { title: "Software Engineer Resume", slug: "resume-software-engineer", category: "resumes" },
      { title: "Web Developer Invoice", slug: "invoice-web-developer", category: "invoices" },
    ],
    faqs: [
      {
        question: "What is an NDA template used for in software development?",
        answer: "A Non-Disclosure Agreement (NDA) protects proprietary code, system architecture, client trade secrets, and pending patent materials during development discussions.",
      },
      {
        question: "What is the best resume format for software engineers?",
        answer: "An ATS-compliant single-page format emphasizing technical stack, measurable system impact, and Git project links.",
      },
    ],
  },
  {
    slug: "consulting",
    name: "Consulting & Professional Services",
    headline: "Consulting Invoices, Retainer Agreements, and Executive Proposals",
    description: "High-caliber documentation for management consultants, financial advisors, legal professionals, and business strategists.",
    iconName: "Briefcase",
    metaTitle: "Consulting Document Templates - Retainers, Invoices & Reports | Templix AI",
    metaDescription: "Professional consulting agreement templates, hourly retainer invoices, and executive strategy proposals. Free download in PDF and Word.",
    featuredCategories: ["invoices", "contracts", "proposals", "reports"],
    recommendedTemplates: [
      { title: "Consulting Invoice Template", slug: "invoice-consulting", category: "invoices" },
      { title: "Consulting Agreement Contract", slug: "consulting-agreement", category: "contracts" },
      { title: "Consulting Proposal", slug: "consulting-proposal", category: "proposals" },
      { title: "Business Proposal", slug: "business-proposal", category: "proposals" },
    ],
    faqs: [
      {
        question: "How do consulting retainer agreements work?",
        answer: "A retainer agreement secures a predetermined number of advisory hours per month for a fixed fee, ensuring dedicated priority support.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical Services",
    headline: "Medical Service Invoices, Staffing Resumes, and Care Agreements",
    description: "Accurate, structured document templates for healthcare providers, nursing staff, private clinics, and medical consultants.",
    iconName: "HeartPulse",
    metaTitle: "Healthcare & Medical Document Templates | Templix AI",
    metaDescription: "Free healthcare templates: medical service billing invoices, registered nurse CVs, and care agreement templates in PDF & Word.",
    featuredCategories: ["invoices", "resumes", "contracts"],
    recommendedTemplates: [
      { title: "Registered Nurse Resume", slug: "resume-registered-nurse", category: "resumes" },
      { title: "Service Agreement", slug: "service-agreement", category: "contracts" },
      { title: "Business Proposal", slug: "business-proposal", category: "proposals" },
    ],
    faqs: [
      {
        question: "What should medical resumes emphasize?",
        answer: "Healthcare CVs should clearly list active state licenses, clinical certifications (BLS/ACLS), unit specialties, and patient care achievements.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  const norm = slug.toLowerCase().trim();
  return INDUSTRIES_DATA.find((ind) => ind.slug === norm);
}
