"use server";

import { db } from "@/lib/db";
import { getSearchService, SearchResultTemplate } from "./search";

export async function searchTemplates(
  query: string,
  categorySlug?: string | null
): Promise<SearchResultTemplate[]> {
  try {
    const searchService = getSearchService();
    return await searchService.search({
      query: query || undefined,
      categorySlug: categorySlug || undefined
    });
  } catch (error) {
    console.error("Search templates Server Action failure:", error);
    // Return basic fallback simulation if database connection is absent
    const mock = [
      {
        id: "invoice-freelancer",
        slug: "invoice-freelancer",
        title: "Professional Invoice",
        description: "Clean invoice template for freelancers and consultants, containing dynamic rows and tax details.",
        isPremium: false,
        categorySlug: "invoices",
        categoryName: "Invoices",
        status: "PUBLISHED"
      },
      {
        id: "resume-software-engineer",
        slug: "resume-software-engineer",
        title: "Software Engineer Resume",
        description: "ATS-friendly developer resume layout highlighting technical skills, experience, and projects.",
        isPremium: false,
        categorySlug: "resumes",
        categoryName: "Resumes & CVs",
        status: "PUBLISHED"
      },
      {
        id: "freelance-agreement",
        slug: "freelance-agreement",
        title: "Freelance Service Agreement",
        description: "Standard service contract detailing scope of work, timeline, and payment terms.",
        isPremium: true,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "employment-contract",
        slug: "employment-contract",
        title: "Employment Contract",
        description: "Standard employment contract template for HR and employers outlining salary, job role, and employment terms.",
        isPremium: true,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "freelance-contract",
        slug: "freelance-contract",
        title: "Freelance Contract",
        description: "Professional freelance contract template for freelancers and clients to define project scope and payment.",
        isPremium: false,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "independent-contractor-agreement",
        slug: "independent-contractor-agreement",
        title: "Independent Contractor Agreement",
        description: "Legally-sound independent contractor agreement for contract services, projects, and tax compliance.",
        isPremium: true,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "service-agreement",
        slug: "service-agreement",
        title: "Service Agreement",
        description: "Comprehensive service agreement template for agencies and businesses outlining service deliverables and SLA.",
        isPremium: false,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "nda-template",
        slug: "nda-template",
        title: "Non-Disclosure Agreement (NDA)",
        description: "Confidentiality and non-disclosure agreement template for startups and companies to protect proprietary information.",
        isPremium: false,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "consulting-agreement",
        slug: "consulting-agreement",
        title: "Consulting Agreement",
        description: "Consulting services contract template for professional consultants and advisors detailing payment and scope.",
        isPremium: true,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "rental-agreement",
        slug: "rental-agreement",
        title: "Rental Agreement",
        description: "Standard residential rental agreement template for landlords and tenants specifying rent, deposit, and terms.",
        isPremium: false,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "sales-contract",
        slug: "sales-contract",
        title: "Sales Contract",
        description: "Sales and purchase contract template for businesses and sales teams detailing goods description and delivery.",
        isPremium: false,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "partnership-agreement",
        slug: "partnership-agreement",
        title: "Partnership Agreement",
        description: "General partnership agreement template for business partners establishing ownership share and capital.",
        isPremium: true,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "vendor-agreement",
        slug: "vendor-agreement",
        title: "Vendor Agreement",
        description: "Standard vendor and supplier agreement template for companies detailing terms of supply and product list.",
        isPremium: false,
        categorySlug: "contracts",
        categoryName: "Contracts",
        status: "PUBLISHED"
      },
      {
        id: "business-proposal",
        slug: "business-proposal",
        title: "Business Proposal",
        description: "Business proposal template for businesses and startups to pitch ventures, products, or services to potential investors or partners.",
        isPremium: false,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "project-proposal",
        slug: "project-proposal",
        title: "Project Proposal",
        description: "Project proposal template for project managers outlining project scope, timeline, budget, and key milestones.",
        isPremium: false,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "marketing-proposal",
        slug: "marketing-proposal",
        title: "Marketing Proposal",
        description: "Strategic marketing proposal template for marketing agencies to pitch campaigns, branding, and growth strategies.",
        isPremium: true,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "web-design-proposal",
        slug: "web-design-proposal",
        title: "Web Design Proposal",
        description: "Creative web design proposal template for web designers outlining UI/UX design deliverables, pages, and website relaunch timeline.",
        isPremium: false,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "software-development-proposal",
        slug: "software-development-proposal",
        title: "Software Development Proposal",
        description: "Technical software development proposal template for developers and IT companies outlining technology stack, deliverables, and software architecture.",
        isPremium: true,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "consulting-proposal",
        slug: "consulting-proposal",
        title: "Consulting Proposal",
        description: "Professional consulting proposal template for consultants outlining consulting scope, diagnostic approach, and advisor fees.",
        isPremium: true,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "digital-marketing-proposal",
        slug: "digital-marketing-proposal",
        title: "Digital Marketing Proposal",
        description: "SEO and performance digital marketing proposal template for marketing professionals to pitch digital growth and campaign execution.",
        isPremium: false,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "construction-proposal",
        slug: "construction-proposal",
        title: "Construction Proposal",
        description: "Detailed construction and remodeling proposal template for contractors and builders detailing materials, labor estimates, and permits.",
        isPremium: false,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "event-proposal",
        slug: "event-proposal",
        title: "Event Proposal",
        description: "Beautiful event planning and management proposal template for event planners detailing catering, venue options, and theme designs.",
        isPremium: false,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "grant-proposal",
        slug: "grant-proposal",
        title: "Grant Proposal",
        description: "Standard grant proposal template for nonprofits and organizations to request funding, outlining project description and social impact.",
        isPremium: false,
        categorySlug: "proposals",
        categoryName: "Proposals",
        status: "PUBLISHED"
      },
      {
        id: "cover-letter",
        slug: "cover-letter",
        title: "Cover Letter",
        description: "Professional job application cover letter detailing experience, motivation, and hook.",
        isPremium: false,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "resignation-letter",
        slug: "resignation-letter",
        title: "Resignation Letter",
        description: "Formal resignation letter template for employees providing notice, last working day, and transition support details.",
        isPremium: false,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "recommendation-letter",
        slug: "recommendation-letter",
        title: "Recommendation Letter",
        description: "Letter of recommendation template for students and professionals highlighting character, work ethic, and achievements.",
        isPremium: true,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "offer-letter",
        slug: "offer-letter",
        title: "Offer Letter",
        description: "Formal job offer letter template for HR and recruiters detailing position, salary, start date, and benefits.",
        isPremium: true,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "business-letter",
        slug: "business-letter",
        title: "Business Letter",
        description: "Standard professional business letter template for corporate correspondence, inquiries, or formal notifications.",
        isPremium: false,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "complaint-letter",
        slug: "complaint-letter",
        title: "Complaint Letter",
        description: "Formal complaint letter template for consumers to report product issues, poor service, or request refunds.",
        isPremium: false,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "thank-you-letter",
        slug: "thank-you-letter",
        title: "Thank You Letter",
        description: "Professional thank you letter template for interview follow-ups, business partnerships, or mentorship appreciation.",
        isPremium: false,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "request-letter",
        slug: "request-letter",
        title: "Request Letter",
        description: "Formal request letter template for general users to request information, permissions, records, or meetings.",
        isPremium: false,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "appointment-letter",
        slug: "appointment-letter",
        title: "Appointment Letter",
        description: "Official appointment letter template for HR departments to confirm employment terms and schedule.",
        isPremium: false,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      },
      {
        id: "experience-letter",
        slug: "experience-letter",
        title: "Experience Letter",
        description: "Formal experience letter and certificate template for employees confirming dates of employment and performance summary.",
        isPremium: false,
        categorySlug: "letters",
        categoryName: "Letters",
        status: "PUBLISHED"
      }
    ];

    let filtered = mock;
    if (categorySlug) {
      filtered = filtered.filter((t) => t.categorySlug === categorySlug);
    }
    if (query) {
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    return filtered;
  }
}
