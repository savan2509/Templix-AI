import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { db } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TemplateDetailView from "@/components/TemplateDetailView";
import { CATEGORIES } from "@/constants";
import { FileText, ArrowRight, Home, Sparkles, AlertCircle } from "lucide-react";
import { SEOEngine } from "@/services/seo";

// Template slug → preview image mapping
const TEMPLATE_IMAGES: Record<string, string> = {
  "invoice-freelancer":          "/invoice-freelancer-preview.png",
  "invoice-small-business":      "/invoice-small-business-preview.svg",
  "invoice-consulting":          "/invoice-consulting-preview.svg",
  "invoice-contractor":          "/invoice-contractor-preview.svg",
  "invoice-graphic-designer":    "/invoice-graphic-designer-preview.svg",
  "invoice-web-developer":       "/invoice-web-developer-preview.svg",
  "invoice-cleaning-service":    "/invoice-cleaning-service-preview.svg",
  "invoice-photography":         "/invoice-photography-preview.svg",
  "invoice-hvac-service":        "/invoice-hvac-service-preview.svg",
  "invoice-plumbing":            "/invoice-plumbing-preview.svg",
  "invoice-timesheet":           "/invoice-timesheet-preview.svg",
  "invoice-milestone":           "/invoice-milestone-preview.svg",
  "invoice-receipt":             "/invoice-receipt-preview.svg",
  "invoice-rental":              "/invoice-rental-preview.svg",
  "invoice-estimate":            "/invoice-estimate-preview.svg",
  "invoice-purchase-order":      "/invoice-purchase-order-preview.svg",
  "resume-software-engineer":    "/resume-template-preview.png",
  "resume-data-analyst":         "/resume-data-analyst-preview.svg",
  "resume-project-manager":      "/resume-project-manager-preview.svg",
  "resume-graphic-designer":     "/resume-graphic-designer-preview.svg",
  "resume-registered-nurse":     "/resume-registered-nurse-preview.svg",
  "resume-teacher":              "/resume-teacher-preview.svg",
  "resume-marketing-manager":    "/resume-marketing-manager-preview.svg",
  "resume-customer-service":     "/resume-customer-service-preview.svg",
  "resume-accountant":           "/resume-accountant-preview.svg",
  "resume-sales-representative": "/resume-sales-representative-preview.svg",
  "freelance-agreement":         "/contract-template-preview.png",
  "business-proposal":           "/proposal-template-preview.png",
  "cover-letter":                "/cover-letter-template-preview.png",
};

// Category-level fallback images — now using rich illustrated covers
const CATEGORY_IMAGES: Record<string, string> = {
  "invoices":      "/cat-invoices-cover.jpg",
  "resumes":       "/cat-resumes-cover.jpg",
  "contracts":     "/cat-contracts-cover.jpg",
  "proposals":     "/cat-proposals-cover.jpg",
  "letters":       "/cat-letters-cover.jpg",
  "cover-letters": "/cat-letters-cover.jpg",
};

function getTemplateImage(slug: string, categorySlug: string): string | null {
  return TEMPLATE_IMAGES[slug] ?? CATEGORY_IMAGES[categorySlug] ?? null;
}

// Robust fallback template list with full content JSON matching seed
const allFallbackTemplates = [
  {
    id: "invoice-freelancer",
    slug: "invoice-freelancer",
    title: "Freelancer Invoice Template",
    description: "Professional invoice layout for freelancers, designers, and developers to bill clients for flat-rate project work.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Freelancer Invoice Template",
      fields: ["companyName", "companyEmail", "clientName", "clientEmail", "invoiceNumber", "invoiceDate", "dueDate", "amountDue"],
      layout: {
        header: "FREELANCER INVOICE",
        footer: "Thank you for your business!"
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#1e1b4b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FREELANCER INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "From: {{companyName}} ({{companyEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "To: {{clientName}} ({{clientEmail}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Due Date: {{dueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Project Amount Due: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-small-business",
    slug: "invoice-small-business",
    title: "Small Business Invoice Template",
    description: "Classic invoice format for retail stores, boutique shops, and local business products and services.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Small Business Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "invoiceDate", "dueDate", "amountDue"],
      layout: {
        header: "SMALL BUSINESS INVOICE",
        footer: "Terms: Due within 30 days. Returns accepted with receipt."
      },
      styles: {
        primaryColor: "#e11d48",
        secondaryColor: "#4c0519"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SMALL BUSINESS INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Business Name: {{companyName}} | Billed To: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Amount Due: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-consulting",
    slug: "invoice-consulting",
    title: "Consulting Invoice Template",
    description: "Professional hourly or retainer billing format for consultants and management strategists.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Consulting Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "invoiceDate", "dueDate", "amountDue"],
      layout: {
        header: "CONSULTING INVOICE",
        footer: "Please send payment via bank wire transfer. Net 15 terms."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#064e3b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSULTING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consultant: {{companyName}} | Client: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Due: {{dueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consulting Services Total: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-contractor",
    slug: "invoice-contractor",
    title: "Contractor Invoice Template",
    description: "Itemized billing format for contractors, carpenters, and construction projects mapping labor and materials.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Contractor Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "dueDate", "amountDue"],
      layout: {
        header: "CONTRACTOR INVOICE",
        footer: "Warranties apply as specified in master services construction contracts."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#431407"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONTRACTOR BILLING" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contractor: {{companyName}} | Client: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Due: {{dueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Labor & Materials Total: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-graphic-designer",
    slug: "invoice-graphic-designer",
    title: "Graphic Designer Invoice Template",
    description: "Creative styled invoice template tailored for visual designers, illustrators, and branding agencies.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Graphic Designer Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "invoiceDate", "amountDue"],
      layout: {
        header: "DESIGN SERVICES INVOICE",
        footer: "All raw design assets delivered upon receipt of full payment."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#4d0728"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DESIGN INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Designer: {{companyName}} | Client: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Branding & Asset Design Services: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-web-developer",
    slug: "invoice-web-developer",
    title: "Web Developer Invoice Template",
    description: "Detailed billing layout for web developers, programmers, and software development agencies.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Web Developer Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "dueDate", "amountDue"],
      layout: {
        header: "DEVELOPER BILLING STATEMENT",
        footer: "Code repositories and deployment logs shared post transaction confirmation."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEB DEVELOPMENT BILLING" }] },
          { type: "paragraph", content: [{ type: "text", text: "Developer: {{companyName}} | Client: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Due: {{dueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Development hours & deployments: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-cleaning-service",
    slug: "invoice-cleaning-service",
    title: "Cleaning Service Invoice Template",
    description: "Clear cleaning and janitorial services invoice layout for commercial and residential cleaning.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Cleaning Service Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "invoiceDate", "amountDue"],
      layout: {
        header: "CLEANING SERVICE STATEMENT",
        footer: "Thank you for letting us clean your environment!"
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0c4a6e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CLEANING SERVICE STATEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Cleaning Provider: {{companyName}} | Billed To: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sanitization & Janitorial Services: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-photography",
    slug: "invoice-photography",
    title: "Photography Invoice Template",
    description: "Elegant billing template for professional photographers, studio shoots, and digital retouching.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Photography Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "invoiceDate", "amountDue"],
      layout: {
        header: "PHOTOGRAPHY INVOICE",
        footer: "High-resolution digital gallery links delivered upon payment."
      },
      styles: {
        primaryColor: "#d97706",
        secondaryColor: "#451a03"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PHOTOGRAPHY SERVICES BILLING" }] },
          { type: "paragraph", content: [{ type: "text", text: "Photographer: {{companyName}} | Client: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Session Fee & Retouching: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-hvac-service",
    slug: "invoice-hvac-service",
    title: "HVAC Service Invoice Template",
    description: "HVAC repair, maintenance, and technical installations service invoice layout.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "HVAC Service Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "dueDate", "amountDue"],
      layout: {
        header: "HVAC SERVICE STATEMENT",
        footer: "Heating and cooling technicians certification guarantees apply."
      },
      styles: {
        primaryColor: "#dc2626",
        secondaryColor: "#450a0a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "HVAC TECHNICAL SERVICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Technician Firm: {{companyName}} | Client: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Service Invoice #: {{invoiceNumber}} | Due: {{dueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "HVAC System Parts & Installation Cost: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-plumbing",
    slug: "invoice-plumbing",
    title: "Plumbing Invoice Template",
    description: "Professional plumbing repair, pipe installations, and service technician billing format.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Plumbing Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "serviceDate", "dueDate", "pipeLocation", "amountDue"],
      layout: {
        header: "PLUMBING SERVICE STATEMENT",
        footer: "Thank you for choosing our plumbing services! Net 15 terms."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PLUMBING SERVICE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Plumber: {{companyName}} | Billed To: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Service Date: {{serviceDate}} | Due: {{dueDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Service Location / Pipe Location: {{pipeLocation}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Labor & Material Cost: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-timesheet",
    slug: "invoice-timesheet",
    title: "Timesheet Invoice Template",
    description: "Hour-by-hour timesheet billing invoice for contractors, virtual assistants, and staff billing by logged time.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Timesheet Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "billingPeriodStart", "billingPeriodEnd", "hourlyRate", "totalHours", "amountDue"],
      layout: {
        header: "TIMESHEET BILLING INVOICE",
        footer: "Hours logged are verified by project management software."
      },
      styles: {
        primaryColor: "#8b5cf6",
        secondaryColor: "#4c1d95"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TIMESHEET BILLING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Provider: {{companyName}} | Billed To: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Billing Period: {{billingPeriodStart}} — {{billingPeriodEnd}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Hours Logged: {{totalHours}} hrs @ {{hourlyRate}}/hr" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Amount Due: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-milestone",
    slug: "invoice-milestone",
    title: "Milestone Invoice Template",
    description: "Project-based milestone billing for software teams, agencies, and consultants billed per delivery phase.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Milestone Invoice Template",
      fields: ["companyName", "clientName", "invoiceNumber", "contractRef", "milestoneNumber", "milestoneName", "milestoneStatus", "amountDue"],
      layout: {
        header: "MILESTONE RELEASE BILLING",
        footer: "Billed in accordance with signed Master Service Agreement schedules."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MILESTONE RELEASE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agency: {{companyName}} | Project Client: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Contract Ref: {{contractRef}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Milestone {{milestoneNumber}}: {{milestoneName}} — Status: {{milestoneStatus}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Milestone Release Amount: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-receipt",
    slug: "invoice-receipt",
    title: "Receipt Template",
    description: "Official payment receipt template confirming a completed transaction with full paid balance and zero amount due.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Receipt Template",
      fields: ["companyName", "payerName", "receiptNumber", "paymentDate", "paymentMethod", "transactionId", "amountPaid"],
      layout: {
        header: "OFFICIAL PAYMENT RECEIPT",
        footer: "Thank you for your payment! Balance due: $0.00."
      },
      styles: {
        primaryColor: "#10b981",
        secondaryColor: "#065f46"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PAYMENT RECEIPT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Issued By: {{companyName}} | Received From: {{payerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Receipt #: {{receiptNumber}} | Payment Date: {{paymentDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Method: {{paymentMethod}} | Transaction ID: {{transactionId}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Amount Paid: {{amountPaid}} | Balance Due: $0.00" }] }
        ]
      }
    }
  },
  {
    id: "invoice-rental",
    slug: "invoice-rental",
    title: "Rental Invoice Template",
    description: "Monthly rental billing statement for landlords and property managers to invoice tenants for rent and fees.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Rental Invoice Template",
      fields: ["landlordName", "tenantName", "propertyAddress", "unitNumber", "invoiceNumber", "rentalPeriod", "baseRent", "additionalFees", "amountDue"],
      layout: {
        header: "RENTAL PAYMENT STATEMENT",
        footer: "Late payments are subject to a 10% penalty after 5 days."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#4c1d95"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RENTAL STATEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Landlord: {{landlordName}} | Tenant: {{tenantName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Property: {{propertyAddress}}, Unit {{unitNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Rental Period: {{rentalPeriod}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Base Rent: {{baseRent}} | Additional Fees: {{additionalFees}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Amount Due: {{amountDue}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-estimate",
    slug: "invoice-estimate",
    title: "Estimate Template",
    description: "Professional cost estimate and quote template for contractors, designers, and service businesses before project start.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Estimate Template",
      fields: ["companyName", "clientName", "estimateNumber", "issueDate", "validUntil", "projectDescription", "estimatedTotal"],
      layout: {
        header: "COST ESTIMATE & QUOTE",
        footer: "Estimate pricing is valid for 30 days from date of issue."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0c4a6e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COST ESTIMATE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared By: {{companyName}} | Estimate For: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Estimate #: {{estimateNumber}} | Issue Date: {{issueDate}} | Valid Until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Description: {{projectDescription}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Estimated Total Cost: {{estimatedTotal}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-purchase-order",
    slug: "invoice-purchase-order",
    title: "Purchase Order Template",
    description: "Commercial purchase order invoice for B2B goods ordering, supplier billing, and inventory procurement.",
    isPremium: true,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Purchase Order Template",
      fields: ["supplierName", "buyerName", "poNumber", "orderDate", "deliveryAddress", "paymentTerms", "goodsDescription", "totalCost"],
      layout: {
        header: "COMMERCIAL PURCHASE ORDER",
        footer: "Subject to standard B2B commercial terms and shipping conditions."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#0f172a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PURCHASE ORDER" }] },
          { type: "paragraph", content: [{ type: "text", text: "Supplier: {{supplierName}} | Buyer/Ship-to: {{buyerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "PO #: {{poNumber}} | Order Date: {{orderDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Delivery Address: {{deliveryAddress}} | Payment Terms: {{paymentTerms}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Goods Description: {{goodsDescription}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Commercial Total: {{totalCost}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-software-engineer",
    slug: "resume-software-engineer",
    title: "Software Engineer Resume Template",
    description: "ATS-friendly developer resume layout highlighting technical skills, languages, software projects, and work history.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Software Engineer Resume Template",
      fields: ["fullName", "email", "phone", "github", "linkedin", "jobTitle", "summary"],
      layout: {
        header: "CURRICULUM VITAE",
        footer: "References available upon request."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#1e293b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | github.com/{{github}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-data-analyst",
    slug: "resume-data-analyst",
    title: "Data Analyst Resume Template",
    description: "Data professional resume highlighting SQL, Python, metrics visualization, and database query experience.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Data Analyst Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "jobTitle", "summary"],
      layout: {
        header: "DATA ANALYST PORTFOLIO",
        footer: "Additional certifications shared upon request."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skillset" }] },
          { type: "paragraph", content: [{ type: "text", text: "SQL (PostgreSQL), Python (Pandas, NumPy), Tableau, Power BI, Excel, ETL Pipelines." }] }
        ]
      }
    }
  },
  {
    id: "resume-project-manager",
    slug: "resume-project-manager",
    title: "Project Manager Resume Template",
    description: "Structured resume layout showing project scope, agile methodologies, and scrum certifications.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Project Manager Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "jobTitle", "summary"],
      layout: {
        header: "PROJECT MANAGER PROFILE",
        footer: "PMP Certified. Agile Methodology Expert."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#0f172a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Project Methodologies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agile, Scrum, Kanban, Prince2, Budget Allocation, Risk Mitigation, Team Management." }] }
        ]
      }
    }
  },
  {
    id: "resume-graphic-designer",
    slug: "resume-graphic-designer",
    title: "Graphic Designer Resume Template",
    description: "Creative resume layout highlighting branding, illustration, UI design, and visual art portfolios.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Graphic Designer Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "jobTitle", "summary"],
      layout: {
        header: "CREATIVE RESUME",
        footer: "View full online design portfolio at personal website."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#4d0728"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Design Software Expertise" }] },
          { type: "paragraph", content: [{ type: "text", text: "Adobe Photoshop, Illustrator, Figma, InDesign, Premiere Pro, After Effects." }] }
        ]
      }
    }
  },
  {
    id: "resume-registered-nurse",
    slug: "resume-registered-nurse",
    title: "Registered Nurse Resume Template",
    description: "Clinical resume format highlighting nurse licensing, emergency care, and patient advocacy.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Registered Nurse Resume Template",
      fields: ["fullName", "email", "phone", "jobTitle", "summary"],
      layout: {
        header: "CLINICAL NURSE CV",
        footer: "Registered Nurse (RN) License in good standing."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#064e3b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Patient Care, Emergency Room Triage, ICU Support, Medication Administration, EHR." }] }
        ]
      }
    }
  },
  {
    id: "resume-teacher",
    slug: "resume-teacher",
    title: "Teacher Resume Template",
    description: "Academic educator resume template focusing on lesson plans, student guidance, and classroom management.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Teacher Resume Template",
      fields: ["fullName", "email", "phone", "jobTitle", "summary"],
      layout: {
        header: "EDUCATOR PROFILE",
        footer: "State Certified Educator. References available."
      },
      styles: {
        primaryColor: "#d97706",
        secondaryColor: "#451a03"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Teaching Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Curriculum Planning, Classroom Management, Student Assessments, Remote Learning, Parent-Teacher conferences." }] }
        ]
      }
    }
  },
  {
    id: "resume-marketing-manager",
    slug: "resume-marketing-manager",
    title: "Marketing Manager Resume Template",
    description: "Metrics-focused marketing resume showing ROI performance, SEO growth, and digital ads campaigns.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Marketing Manager Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "jobTitle", "summary"],
      layout: {
        header: "MARKETING PROFESSIONAL CV",
        footer: "ROI metrics documented in online campaign case studies."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#2e1065"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Marketing Skills" }] },
          { type: "paragraph", content: [{ type: "text", text: "Search Engine Optimization (SEO), Paid Ads (Google/Meta), Content Strategy, ROI Analytics." }] }
        ]
      }
    }
  },
  {
    id: "resume-customer-service",
    slug: "resume-customer-service",
    title: "Customer Service Resume Template",
    description: "Support roles resume template highlighting ticketing software, SLAs, and customer retention metrics.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Customer Service Resume Template",
      fields: ["fullName", "email", "phone", "jobTitle", "summary"],
      layout: {
        header: "CUSTOMER SUPPORT SPECIALIST",
        footer: "Available for shifts. Bilingual support agent."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#1e1b4b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Support Qualifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "Zendesk, Intercom, Live Chat, SLA compliance, Phone Support, CRM Logging, Conflict Resolution." }] }
        ]
      }
    }
  },
  {
    id: "resume-accountant",
    slug: "resume-accountant",
    title: "Accountant Resume Template",
    description: "Finance resume layout detailing corporate taxes, audits, general ledgers, and accounting programs.",
    isPremium: true,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Accountant Resume Template",
      fields: ["fullName", "email", "phone", "jobTitle", "summary"],
      layout: {
        header: "ACCOUNTING & FINANCE PROFILE",
        footer: "CPA Candidate. Audit Ready."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Financial Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "QuickBooks, Xero, GAAP Standards, Tax Compliance, Audit coordination, General Ledger." }] }
        ]
      }
    }
  },
  {
    id: "resume-sales-representative",
    slug: "resume-sales-representative",
    title: "Sales Representative Resume Template",
    description: "Sales representative resume mapping CRM tracking, pipeline growth, and closing ratios.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Sales Representative Resume Template",
      fields: ["fullName", "email", "phone", "linkedin", "jobTitle", "summary"],
      layout: {
        header: "SALES PROFESSIONAL PROFILE",
        footer: "Consistent over-achiever in pipeline sales targets."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#431407"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sales Pipeline Expertise" }] },
          { type: "paragraph", content: [{ type: "text", text: "Salesforce CRM, Cold Outreach, Deal Negotiation, Pipeline Management, Account Management." }] }
        ]
      }
    }
  },
  {
    id: "freelance-agreement",
    slug: "freelance-agreement",
    title: "Freelance Service Agreement",
    description: "Standard service contract detailing scope of work, timeline, and payment terms.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Freelance Service Agreement",
      fields: ["contractDate", "clientName", "freelancerName", "projectName", "paymentAmount", "projectScope"],
      layout: {
        header: "MUTUAL AGREEMENT",
        footer: "Executed as an agreement by both signing parties."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#475569"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "FREELANCE SERVICE AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Agreement is entered into on " },
              { type: "text", text: "{{contractDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " (hereinafter referred to as 'Client') and " },
              { type: "text", text: "{{freelancerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " (hereinafter referred to as 'Freelancer')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Scope of Work" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Freelancer agrees to perform services for the project: " },
              { type: "text", text: "{{projectName}}", marks: [{ type: "italic" }] },
              { type: "text", text: ". The specific deliverables include: {{projectScope}}." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Payment Terms" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "In exchange for services rendered, Client agrees to pay Freelancer a flat project fee of " },
              { type: "text", text: "{{paymentAmount}}", marks: [{ type: "bold" }] },
              { type: "text", text: " upon completion of final project review." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "employment-contract",
    slug: "employment-contract",
    title: "Employment Contract",
    description: "Standard employment contract template for HR and employers outlining salary, job role, and employment terms.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Employment Contract",
      fields: ["employerName", "employeeName", "jobTitle", "startDate", "salary", "reportingManager"],
      layout: {
        header: "EMPLOYMENT AGREEMENT",
        footer: "This agreement is subject to the employment standards act."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#3b82f6"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "EMPLOYMENT CONTRACT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Employment Contract (the 'Agreement') is made effective as of " },
              { type: "text", text: "{{startDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{employerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Employer') and " },
              { type: "text", text: "{{employeeName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Employee')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Position and Duties" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Employee shall serve in the position of " },
              { type: "text", text: "{{jobTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: " and shall report directly to " },
              { type: "text", text: "{{reportingManager}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". Employee agrees to perform all duties associated with this role to the best of their ability." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Compensation" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "In consideration for the services rendered, Employee shall receive an annual base salary of " },
              { type: "text", text: "{{salary}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", payable in accordance with the Employer's standard payroll schedule." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "freelance-contract",
    slug: "freelance-contract",
    title: "Freelance Contract",
    description: "Professional freelance contract template for freelancers and clients to define project scope and payment.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Freelance Contract",
      fields: ["clientName", "freelancerName", "projectName", "paymentAmount", "projectScope", "contractDate"],
      layout: {
        header: "FREELANCE CONTRACT",
        footer: "Both parties agree to the terms outline in this document."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "FREELANCE CONTRACT AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Freelance Contract is entered into on " },
              { type: "text", text: "{{contractDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Client') and " },
              { type: "text", text: "{{freelancerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Freelancer')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Project Services" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Freelancer agrees to perform services for the project named " },
              { type: "text", text: "{{projectName}}", marks: [{ type: "italic" }] },
              { type: "text", text: ". The scope of services includes: " },
              { type: "text", text: "{{projectScope}}" },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Compensation" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The Client agrees to pay Freelancer a project fee of " },
              { type: "text", text: "{{paymentAmount}}", marks: [{ type: "bold" }] },
              { type: "text", text: " upon completion and delivery of the project." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "independent-contractor-agreement",
    slug: "independent-contractor-agreement",
    title: "Independent Contractor Agreement",
    description: "Legally-sound independent contractor agreement for contract services, projects, and tax compliance.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Independent Contractor Agreement",
      fields: ["clientName", "contractorName", "servicesDescription", "hourlyRate", "effectiveDate"],
      layout: {
        header: "INDEPENDENT CONTRACTOR AGREEMENT",
        footer: "Contractor is solely responsible for all tax liabilities."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "INDEPENDENT CONTRACTOR AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Agreement is made effective as of " },
              { type: "text", text: "{{effectiveDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Company') and " },
              { type: "text", text: "{{contractorName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Contractor')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Services" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Contractor shall perform the following services for Company: " },
              { type: "text", text: "{{servicesDescription}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Rate of Pay" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Company shall pay Contractor at the rate of " },
              { type: "text", text: "{{hourlyRate}}", marks: [{ type: "bold" }] },
              { type: "text", text: " for services performed under this Agreement." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "3. Relationship" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The relationship of Contractor to Company is that of an independent contractor, and nothing in this Agreement shall be construed to create an employer-employee relationship." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "service-agreement",
    slug: "service-agreement",
    title: "Service Agreement",
    description: "Comprehensive service agreement template for agencies and businesses outlining service deliverables and SLA.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Service Agreement",
      fields: ["providerName", "clientName", "servicesScope", "fee", "effectiveDate"],
      layout: {
        header: "SERVICE AGREEMENT",
        footer: "Governed by the state regulations."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#312e81"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "MASTER SERVICE AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Service Agreement is made effective on " },
              { type: "text", text: "{{effectiveDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", between " },
              { type: "text", text: "{{providerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Provider') and " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Client')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Scope of Services" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Provider agrees to perform the services detailed in the scope of work: " },
              { type: "text", text: "{{servicesScope}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Fees and Payments" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Client shall pay Provider the service fee of " },
              { type: "text", text: "{{fee}}", marks: [{ type: "bold" }] },
              { type: "text", text: " for the duration of this Agreement." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "nda-template",
    slug: "nda-template",
    title: "Non-Disclosure Agreement (NDA)",
    description: "Confidentiality and non-disclosure agreement template for startups and companies to protect proprietary information.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Non-Disclosure Agreement",
      fields: ["disclosingParty", "receivingParty", "effectiveDate", "purposeDescription"],
      layout: {
        header: "CONFIDENTIALITY AGREEMENT",
        footer: "All terms remain in effect for 3 years post termination."
      },
      styles: {
        primaryColor: "#dc2626",
        secondaryColor: "#991b1b"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "MUTUAL NON-DISCLOSURE AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This NDA is entered into on " },
              { type: "text", text: "{{effectiveDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", between " },
              { type: "text", text: "{{disclosingParty}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Disclosing Party') and " },
              { type: "text", text: "{{receivingParty}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Receiving Party')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Confidential Information" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The parties wish to exchange certain confidential information for the sole purpose of evaluating: " },
              { type: "text", text: "{{purposeDescription}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Obligation of Confidentiality" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Receiving Party shall keep all disclosed information strictly confidential and shall not disclose it to any third party without prior written consent." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "consulting-agreement",
    slug: "consulting-agreement",
    title: "Consulting Agreement",
    description: "Consulting services contract template for professional consultants and advisors detailing payment and scope.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Consulting Agreement",
      fields: ["consultantName", "clientName", "consultingFee", "scopeOfServices", "effectiveDate"],
      layout: {
        header: "CONSULTING SERVICES AGREEMENT",
        footer: "Consultant represents that they have the requisite expertise to perform."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1d4ed8"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "CONSULTING SERVICES AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Consulting Agreement is effective as of " },
              { type: "text", text: "{{effectiveDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Client') and " },
              { type: "text", text: "{{consultantName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Consultant')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Consulting Services" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Consultant agrees to provide consulting and advisory services related to: " },
              { type: "text", text: "{{scopeOfServices}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Compensation" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Client shall pay Consultant a consulting fee of " },
              { type: "text", text: "{{consultingFee}}", marks: [{ type: "bold" }] },
              { type: "text", text: " for services rendered under this agreement." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "rental-agreement",
    slug: "rental-agreement",
    title: "Rental Agreement",
    description: "Standard residential rental agreement template for landlords and tenants specifying rent, deposit, and terms.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Rental Agreement",
      fields: ["landlordName", "tenantName", "propertyAddress", "monthlyRent", "depositAmount", "leaseStart"],
      layout: {
        header: "RESIDENTIAL RENTAL AGREEMENT",
        footer: "This document is subject to local landlord-tenant law."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#047857"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "RESIDENTIAL RENTAL AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Rental Agreement is entered into on " },
              { type: "text", text: "{{leaseStart}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{landlordName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Landlord') and " },
              { type: "text", text: "{{tenantName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Tenant')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Property" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Landlord leases to Tenant the residential property located at: " },
              { type: "text", text: "{{propertyAddress}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Rent and Deposit" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Tenant shall pay Landlord a monthly rent of " },
              { type: "text", text: "{{monthlyRent}}", marks: [{ type: "bold" }] },
              { type: "text", text: " and a security deposit of " },
              { type: "text", text: "{{depositAmount}}", marks: [{ type: "bold" }] },
              { type: "text", text: " prior to move-in." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "sales-contract",
    slug: "sales-contract",
    title: "Sales Contract",
    description: "Sales and purchase contract template for businesses and sales teams detailing goods description and delivery.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Sales Contract",
      fields: ["sellerName", "buyerName", "goodsDescription", "purchasePrice", "deliveryDate"],
      layout: {
        header: "CONTRACT FOR SALE OF GOODS",
        footer: "Risk of loss passes to Buyer upon delivery."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#c2410c"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "CONTRACT FOR SALE OF GOODS" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Sales Contract is entered into on " },
              { type: "text", text: "{{deliveryDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", by and between " },
              { type: "text", text: "{{sellerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Seller') and " },
              { type: "text", text: "{{buyerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Buyer')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Goods Sold" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Seller agrees to sell and Buyer agrees to purchase the following goods: " },
              { type: "text", text: "{{goodsDescription}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Purchase Price" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The total purchase price for the goods is " },
              { type: "text", text: "{{purchasePrice}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", payable upon delivery." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "partnership-agreement",
    slug: "partnership-agreement",
    title: "Partnership Agreement",
    description: "General partnership agreement template for business partners establishing ownership share and capital.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Partnership Agreement",
      fields: ["partnerOne", "partnerTwo", "businessName", "ownershipShare", "capitalContribution"],
      layout: {
        header: "PARTNERSHIP AGREEMENT",
        footer: "Executed as a legal partnership under state laws."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#6d28d9"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "PARTNERSHIP AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Partnership Agreement is made to form a partnership under the business name " },
              { type: "text", text: "{{businessName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " between the following partners: " },
              { type: "text", text: "{{partnerOne}}", marks: [{ type: "bold" }] },
              { type: "text", text: " and " },
              { type: "text", text: "{{partnerTwo}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Capital Contribution" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The partners agree to contribute an initial capital of " },
              { type: "text", text: "{{capitalContribution}}", marks: [{ type: "bold" }] },
              { type: "text", text: " to start business operations." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Ownership Share" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The ownership share of the partnership profits and losses shall be distributed as follows: " },
              { type: "text", text: "{{ownershipShare}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    id: "vendor-agreement",
    slug: "vendor-agreement",
    title: "Vendor Agreement",
    description: "Standard vendor and supplier agreement template for companies detailing terms of supply and product list.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Vendor Agreement",
      fields: ["companyName", "vendorName", "productDescription", "paymentTerms", "deliverySchedule"],
      layout: {
        header: "VENDOR AGREEMENT",
        footer: "This agreement may be terminated by either party with 30 days notice."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "VENDOR AGREEMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This Vendor Agreement is made between " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Company') and " },
              { type: "text", text: "{{vendorName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " ('Vendor')." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Products Supplied" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Vendor agrees to supply Company with the following products: " },
              { type: "text", text: "{{productDescription}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Payment and Delivery" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Company shall pay Vendor according to the payment terms: " },
              { type: "text", text: "{{paymentTerms}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", and Vendor shall deliver according to schedule: " },
              { type: "text", text: "{{deliverySchedule}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "business-proposal",
    slug: "business-proposal",
    title: "Business Proposal",
    description: "Business proposal template for businesses and startups to pitch ventures, products, or services to potential investors or partners.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Business Project Proposal",
      fields: ["clientCompany", "proposalDate", "solutionTitle", "estimatedTimeline", "totalInvestment"],
      layout: {
        header: "PROJECT PROPOSAL",
        footer: "We look forward to working with you."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e293b"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "BUSINESS PROJECT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Prepared for: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Date: " },
              { type: "text", text: "{{proposalDate}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Executive Summary" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We are pleased to submit this proposal for our solution: " },
              { type: "text", text: "{{solutionTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". Our approach is designed to meet your specific timelines of {{estimatedTimeline}} and optimize performance." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Total Estimated Investment: " },
              { type: "text", text: "{{totalInvestment}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    id: "project-proposal",
    slug: "project-proposal",
    title: "Project Proposal",
    description: "Project proposal template for project managers outlining project scope, timeline, budget, and key milestones.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Project Proposal",
      fields: ["projectName", "managerName", "clientName", "projectObjective", "timeline", "budget"],
      layout: {
        header: "PROJECT CHARTER & PROPOSAL",
        footer: "Confidential document for internal and select client review."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0369a1"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "PROJECT PROPOSAL: {{projectName}}" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Prepared by: " },
              { type: "text", text: "{{managerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Project Objective" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The primary objective of this project is: " },
              { type: "text", text: "{{projectObjective}}" }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Estimated Timeline & Budget" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The project is scheduled to run over a period of " },
              { type: "text", text: "{{timeline}}", marks: [{ type: "bold" }] },
              { type: "text", text: " with an allocated total budget of " },
              { type: "text", text: "{{budget}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "marketing-proposal",
    slug: "marketing-proposal",
    title: "Marketing Proposal",
    description: "Strategic marketing proposal template for marketing agencies to pitch campaigns, branding, and growth strategies.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Marketing Strategy Proposal",
      fields: ["agencyName", "clientCompany", "campaignObjective", "channels", "monthlyRetainer"],
      layout: {
        header: "MARKETING CAMPAIGN PITCH",
        footer: "Proposal valid for 30 days from presentation."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#9d174d"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "MARKETING CAMPAIGN PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Created by: " },
              { type: "text", text: "{{agencyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Prepared for: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Campaign Objective" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Our campaign will focus on increasing brand awareness and driving conversions through: " },
              { type: "text", text: "{{campaignObjective}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Target Channels" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The primary channels of execution will include: " },
              { type: "text", text: "{{channels}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "3. Retainer & Investment" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The proposed services will be executed under a monthly retainer of " },
              { type: "text", text: "{{monthlyRetainer}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "web-design-proposal",
    slug: "web-design-proposal",
    title: "Web Design Proposal",
    description: "Creative web design proposal template for web designers outlining UI/UX design deliverables, pages, and website relaunch timeline.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Website UI/UX Design Proposal",
      fields: ["designerName", "clientCompany", "websiteName", "numberPages", "projectCost", "completionTime"],
      layout: {
        header: "WEBSITE RELAUNCH PROPOSAL",
        footer: "All designs undergo two feedback iterations."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#4c1d95"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "WEB DESIGN & DEVELOPMENT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Presented by: " },
              { type: "text", text: "{{designerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Project Scope & Website" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We propose a fully responsive redesign of " },
              { type: "text", text: "{{websiteName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", covering approximately " },
              { type: "text", text: "{{numberPages}}", marks: [{ type: "bold" }] },
              { type: "text", text: " unique pages." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Cost & Timeline" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The total project cost is estimated at " },
              { type: "text", text: "{{projectCost}}", marks: [{ type: "bold" }] },
              { type: "text", text: " with an expected completion timeline of " },
              { type: "text", text: "{{completionTime}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "software-development-proposal",
    slug: "software-development-proposal",
    title: "Software Development Proposal",
    description: "Technical software development proposal template for developers and IT companies outlining technology stack, deliverables, and software architecture.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Software System Development Proposal",
      fields: ["developerCompany", "clientCompany", "softwareTitle", "techStack", "developmentFee", "deliverySchedule"],
      layout: {
        header: "TECHNICAL PROJECT PITCH",
        footer: "Includes 3 months of post-launch SLA support."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#0284c7"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "SOFTWARE DEVELOPMENT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Presented by: " },
              { type: "text", text: "{{developerCompany}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Software Architecture & Deliverables" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We propose to build the software application named " },
              { type: "text", text: "{{softwareTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". The project will utilize the following tech stack: " },
              { type: "text", text: "{{techStack}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Pricing & Delivery" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The development fee is " },
              { type: "text", text: "{{developmentFee}}", marks: [{ type: "bold" }] },
              { type: "text", text: " and will be delivered according to the schedule: " },
              { type: "text", text: "{{deliverySchedule}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "consulting-proposal",
    slug: "consulting-proposal",
    title: "Consulting Proposal",
    description: "Professional consulting proposal template for consultants outlining consulting scope, diagnostic approach, and advisor fees.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Consulting & Advisory Proposal",
      fields: ["consultantName", "clientCompany", "consultingObjective", "methodology", "consultingFee"],
      layout: {
        header: "BUSINESS STRATEGY CONSULTING PITCH",
        footer: "Ensuring maximum operational output and transformation."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e3a8a"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "PROFESSIONAL CONSULTING PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Consultant: " },
              { type: "text", text: "{{consultantName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Prepared for: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Diagnostic Objective & Scope" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The primary objective of this engagement is to: " },
              { type: "text", text: "{{consultingObjective}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Methodology" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Our approach will consist of the following framework: " },
              { type: "text", text: "{{methodology}}", marks: [{ type: "italic" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "3. Advisor Fees" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The consulting fee for the entire engagement is " },
              { type: "text", text: "{{consultingFee}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "digital-marketing-proposal",
    slug: "digital-marketing-proposal",
    title: "Digital Marketing Proposal",
    description: "SEO and performance digital marketing proposal template for marketing professionals to pitch digital growth and campaign execution.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Digital Performance Marketing Proposal",
      fields: ["proName", "clientCompany", "marketingChannels", "targetKPIs", "adSpend", "fee"],
      layout: {
        header: "DIGITAL MARKETING SERVICES PITCH",
        footer: "KPI target metrics evaluated monthly."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#065f46"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "DIGITAL MARKETING SERVICES PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Prepared by: " },
              { type: "text", text: "{{proName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Prepared for: " },
              { type: "text", text: "{{clientCompany}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Channels & Target KPIs" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We will target marketing on the following channels: " },
              { type: "text", text: "{{marketingChannels}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", focusing on achieving critical KPIs: " },
              { type: "text", text: "{{targetKPIs}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Ad Spend & Agency Fee" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The suggested monthly ad spend budget is " },
              { type: "text", text: "{{adSpend}}", marks: [{ type: "bold" }] },
              { type: "text", text: " with an agency management fee of " },
              { type: "text", text: "{{fee}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "construction-proposal",
    slug: "construction-proposal",
    title: "Construction Proposal",
    description: "Detailed construction and remodeling proposal template for contractors and builders detailing materials, labor estimates, and permits.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Construction Project Bid Proposal",
      fields: ["contractorName", "clientName", "siteAddress", "scopeOfWork", "materialsCost", "laborCost", "totalPrice"],
      layout: {
        header: "CONSTRUCTION BID PROPOSAL",
        footer: "Bid is subject to standard construction permits."
      },
      styles: {
        primaryColor: "#d97706",
        secondaryColor: "#92400e"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "CONSTRUCTION PROJECT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Contractor: " },
              { type: "text", text: "{{contractorName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Site Address & Scope of Work" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This construction proposal is for the site located at: " },
              { type: "text", text: "{{siteAddress}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". The scope of remodeling/construction work covers: " },
              { type: "text", text: "{{scopeOfWork}}" },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Cost Estimates" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The estimated cost breakdown includes: Materials Cost: " },
              { type: "text", text: "{{materialsCost}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", and Labor Estimate: " },
              { type: "text", text: "{{laborCost}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". The total bid price is " },
              { type: "text", text: "{{totalPrice}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "event-proposal",
    slug: "event-proposal",
    title: "Event Proposal",
    description: "Beautiful event planning and management proposal template for event planners detailing catering, venue options, and theme designs.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Event Organization & Coordination Proposal",
      fields: ["plannerName", "clientName", "eventName", "eventDate", "venueOptions", "budget"],
      layout: {
        header: "EVENT COORDINATION PITCH",
        footer: "We turn your dream events into reality."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#701a75"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "EVENT PLANNING PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Planner: " },
              { type: "text", text: "{{plannerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | For Client: " },
              { type: "text", text: "{{clientName}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Event Summary & Venue" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We propose to manage the event " },
              { type: "text", text: "{{eventName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", scheduled for " },
              { type: "text", text: "{{eventDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". Suggested venue choices include: " },
              { type: "text", text: "{{venueOptions}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Budget & Coordination" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The coordinated event budget is set at " },
              { type: "text", text: "{{budget}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "grant-proposal",
    slug: "grant-proposal",
    title: "Grant Proposal",
    description: "Standard grant proposal template for nonprofits and organizations to request funding, outlining project description and social impact.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Funding & Grant Request Proposal",
      fields: ["organizationName", "fundingAgency", "projectTitle", "fundingRequested", "communityImpact"],
      layout: {
        header: "GRANT APPLICATION PROPOSAL",
        footer: "Ensuring transparency and social value creation."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#064e3b"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "GRANT APPLICATION & PROJECT PROPOSAL" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Requesting Organization: " },
              { type: "text", text: "{{organizationName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | Submitted to: " },
              { type: "text", text: "{{fundingAgency}}", marks: [{ type: "bold" }] }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "1. Project Title & Mission" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This proposal requests funding for the project: " },
              { type: "text", text: "{{projectTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". The primary social impact is: " },
              { type: "text", text: "{{communityImpact}}" },
              { type: "text", text: "." }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "2. Funding Requested" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The total funding amount requested is " },
              { type: "text", text: "{{fundingRequested}}", marks: [{ type: "bold" }] },
              { type: "text", text: " to cover project execution." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "cover-letter",
    slug: "cover-letter",
    title: "Cover Letter",
    description: "Professional job application cover letter detailing experience, motivation, and hook.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Job Application Cover Letter",
      fields: ["fullName", "recipientName", "companyName", "targetRole", "experienceYears"],
      layout: {
        header: "APPLICATION LETTER",
        footer: "Sincerely, [Full Name]"
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#475569"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "APPLICATION COVER LETTER" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "I am writing to express my strong interest in the " },
              { type: "text", text: "{{targetRole}}", marks: [{ type: "bold" }] },
              { type: "text", text: " position. I bring over " },
              { type: "text", text: "{{experienceYears}}", marks: [{ type: "bold" }] },
              { type: "text", text: " years of dedicated experience and skills." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "resignation-letter",
    slug: "resignation-letter",
    title: "Resignation Letter",
    description: "Formal resignation letter template for employees providing notice, last working day, and transition support details.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Formal Resignation Letter",
      fields: ["employeeName", "managerName", "companyName", "lastDay", "roleTitle"],
      layout: {
        header: "RESIGNATION NOTICE",
        footer: "Wishing the company continued success."
      },
      styles: {
        primaryColor: "#1e293b",
        secondaryColor: "#475569"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "RESIGNATION LETTER" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{managerName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Please accept this letter as formal notification that I am resigning from my position as " },
              { type: "text", text: "{{roleTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: " at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". My last working day will be " },
              { type: "text", text: "{{lastDay}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Thank you for the support and opportunities provided during my tenure. I am committed to assisting with the transition of my duties." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Sincerely," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{employeeName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    id: "recommendation-letter",
    slug: "recommendation-letter",
    title: "Recommendation Letter",
    description: "Letter of recommendation template for students and professionals highlighting character, work ethic, and achievements.",
    isPremium: true,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Letter of Recommendation",
      fields: ["writerName", "writerRole", "candidateName", "recipientName", "relationship", "keyStrengths"],
      layout: {
        header: "LETTER OF RECOMMENDATION",
        footer: "Available for further questions if necessary."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0f172a"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "LETTER OF RECOMMENDATION" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "It is my absolute pleasure to recommend " },
              { type: "text", text: "{{candidateName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " for your organization. I have known them in my capacity as a " },
              { type: "text", text: "{{writerRole}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", and our relationship was " },
              { type: "text", text: "{{relationship}}", marks: [{ type: "italic" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "During our time together, they demonstrated exceptional skills and strengths, particularly in " },
              { type: "text", text: "{{keyStrengths}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". I highly recommend them without reservation." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Sincerely," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{writerName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    id: "offer-letter",
    slug: "offer-letter",
    title: "Offer Letter",
    description: "Formal job offer letter template for HR and recruiters detailing position, salary, start date, and benefits.",
    isPremium: true,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Job Offer Letter",
      fields: ["companyName", "candidateName", "jobTitle", "salaryAmount", "startDate", "reportingManager"],
      layout: {
        header: "OFFER OF EMPLOYMENT",
        footer: "Please sign and return a copy to confirm acceptance."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#3b82f6"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "JOB OFFER LETTER" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{candidateName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "On behalf of " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", we are thrilled to offer you the position of " },
              { type: "text", text: "{{jobTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". In this role, you will report directly to " },
              { type: "text", text: "{{reportingManager}}", marks: [{ type: "bold" }] },
              { type: "text", text: " starting on " },
              { type: "text", text: "{{startDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We are offering an annual starting salary of " },
              { type: "text", text: "{{salaryAmount}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", paid on a regular payroll cycle. We are excited about the prospect of you joining our team." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "business-letter",
    slug: "business-letter",
    title: "Business Letter",
    description: "Standard professional business letter template for corporate correspondence, inquiries, or formal notifications.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Formal Business Letter",
      fields: ["senderName", "senderCompany", "recipientName", "recipientCompany", "subjectLine", "letterBody"],
      layout: {
        header: "BUSINESS CORRESPONDENCE",
        footer: "Confidentiality Notice applies."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "From: " },
              { type: "text", text: "{{senderName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | " },
              { type: "text", text: "{{senderCompany}}" }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "To: " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " | " },
              { type: "text", text: "{{recipientCompany}}" }
            ]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "Subject: {{subjectLine}}" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{letterBody}}" }
            ]
          }
        ]
      }
    }
  },
  {
    id: "complaint-letter",
    slug: "complaint-letter",
    title: "Complaint Letter",
    description: "Formal complaint letter template for consumers to report product issues, poor service, or request refunds.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Consumer Complaint Letter",
      fields: ["consumerName", "companyName", "purchaseDate", "productName", "issueDescription", "desiredResolution"],
      layout: {
        header: "CUSTOMER COMPLAINT DEPT",
        footer: "Supporting documents and receipts attached."
      },
      styles: {
        primaryColor: "#dc2626",
        secondaryColor: "#991b1b"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "FORMAL COMPLAINT LETTER" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "To Customer Relations at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "I am writing to report an issue regarding the product/service " },
              { type: "text", text: "{{productName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " purchased on " },
              { type: "text", text: "{{purchaseDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The primary issue encountered is: {{issueDescription}}." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "To resolve this problem, I would appreciate: " },
              { type: "text", text: "{{desiredResolution}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Sincerely," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{consumerName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    id: "thank-you-letter",
    slug: "thank-you-letter",
    title: "Thank You Letter",
    description: "Professional thank you letter template for interview follow-ups, business partnerships, or mentorship appreciation.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Professional Thank You Letter",
      fields: ["senderName", "recipientName", "interactionDate", "topicDiscussed", "companyName"],
      layout: {
        header: "LETTER OF APPRECIATION",
        footer: "Looking forward to staying in touch."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#047857"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "LETTER OF APPRECIATION" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Thank you so much for taking the time to meet with me on " },
              { type: "text", text: "{{interactionDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". I thoroughly enjoyed our conversation about " },
              { type: "text", text: "{{topicDiscussed}}", marks: [{ type: "bold" }] },
              { type: "text", text: " at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "I appreciate your insights and look forward to our next interaction." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Best regards," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{senderName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    id: "request-letter",
    slug: "request-letter",
    title: "Request Letter",
    description: "Formal request letter template for general users to request information, permissions, records, or meetings.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Official Request Letter",
      fields: ["requesterName", "recipientName", "requestSubject", "detailExplanation", "deadlineDate"],
      layout: {
        header: "LETTER OF REQUEST",
        footer: "Thank you for your prompt consideration."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#312e81"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "REQUEST LETTER: {{requestSubject}}" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{recipientName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "I am writing to formally request your assistance or permission regarding: " },
              { type: "text", text: "{{detailExplanation}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "If possible, I would appreciate it if this request could be reviewed by " },
              { type: "text", text: "{{deadlineDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Sincerely," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "{{requesterName}}", marks: [{ type: "bold" }] }
            ]
          }
        ]
      }
    }
  },
  {
    id: "appointment-letter",
    slug: "appointment-letter",
    title: "Appointment Letter",
    description: "Official appointment letter template for HR departments to confirm employment terms and schedule.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Employment Appointment Letter",
      fields: ["companyName", "employeeName", "jobTitle", "salary", "appointmentDate", "reportingManager"],
      layout: {
        header: "EMPLOYMENT APPOINTMENT",
        footer: "Welcome to the organization!"
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#1e293b"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "LETTER OF APPOINTMENT" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Dear " },
              { type: "text", text: "{{employeeName}}", marks: [{ type: "bold" }] },
              { type: "text", text: "," }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "We are pleased to appoint you as " },
              { type: "text", text: "{{jobTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: " at " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: ". Your appointment is effective from " },
              { type: "text", text: "{{appointmentDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: " under the supervision of " },
              { type: "text", text: "{{reportingManager}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Your monthly compensation is set at " },
              { type: "text", text: "{{salary}}", marks: [{ type: "bold" }] },
              { type: "text", text: ", subject to applicable taxes and standard company policies." }
            ]
          }
        ]
      }
    }
  },
  {
    id: "experience-letter",
    slug: "experience-letter",
    title: "Experience Letter",
    description: "Formal experience letter and certificate template for employees confirming dates of employment and performance summary.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Work Experience Certificate",
      fields: ["companyName", "employeeName", "jobTitle", "startDate", "endDate", "performanceSummary"],
      layout: {
        header: "TO WHOM IT MAY CONCERN",
        footer: "We wish them all the best in future endeavors."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "WORK EXPERIENCE CERTIFICATE" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "This is to certify that " },
              { type: "text", text: "{{employeeName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " was employed with " },
              { type: "text", text: "{{companyName}}", marks: [{ type: "bold" }] },
              { type: "text", text: " in the capacity of " },
              { type: "text", text: "{{jobTitle}}", marks: [{ type: "bold" }] },
              { type: "text", text: " from " },
              { type: "text", text: "{{startDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: " to " },
              { type: "text", text: "{{endDate}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "During their tenure, they demonstrated key abilities and were described as: " },
              { type: "text", text: "{{performanceSummary}}", marks: [{ type: "bold" }] },
              { type: "text", text: "." }
            ]
          }
        ]
      }
    }
  }
];

interface PageProps {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
}

// Capitalize helper
const capitalize = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Next.js Dynamic SEO Metadata Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const locale = resolvedParams.locale || "en";
  const lastSegment = slug[slug.length - 1] || "";

  // 1. Check if rendering a template detail preview
  const isTemplateDetail = allFallbackTemplates.some((t) => t.slug === lastSegment);

  if (isTemplateDetail) {
    const template = allFallbackTemplates.find((t) => t.slug === lastSegment)!;
    return SEOEngine.generateMetadata({
      title: `${template.title} Template | Customize & Download`,
      description: `Free customizable ${template.title.toLowerCase()} layout. Fill in variables, edit blocks with AI, and download PDF or Word format in minutes.`,
      slug: `/templates/${template.categorySlug}/${template.slug}`,
      locale,
      categoryName: template.categoryName,
      categorySlug: template.categorySlug,
      isTemplate: true,
    }) as Metadata;
  }

  // 2. Otherwise render category list metadata
  const category = slug[0] ? capitalize(slug[0]) : "";
  const niche = slug[1] ? capitalize(slug[1]) : "";
  const location = slug[2] ? slug[2].toUpperCase() : "";
  const subdivision = slug[3] ? capitalize(slug[3]) : "";
  const experience = slug[4] ? capitalize(slug[4]) : "";

  let pageTitle = "Free Business Document Templates";
  if (category) {
    const parts = [
      "Free",
      experience,
      niche,
      category.replace("Templates", "").trim(),
      "Templates",
      location ? `in ${location}` : "",
      subdivision
    ].filter(Boolean);
    pageTitle = parts.join(" ");
  }

  return SEOEngine.generateMetadata({
    title: pageTitle,
    description: `Download, edit, and create ${pageTitle.toLowerCase()}. Access clean, print-ready, professional layouts. Customize with our built-in AI document editor.`,
    slug: `/templates${slug.length > 0 ? "/" + slug.join("/") : ""}`,
    locale,
    categoryName: category || undefined,
    categorySlug: slug[0] || undefined,
  }) as Metadata;
}

export default async function TemplatesPage({ params, searchParams }: PageProps) {
  const { locale, slug = [] } = await params;
  const { q = "" } = await searchParams;

  const categorySlug = slug[0] || null;
  const nicheSlug = slug[1] || null;
  const locationSlug = slug[2] || null;
  const subdivisionSlug = slug[3] || null;
  const experienceSlug = slug[4] || null;

  const lastSegment = slug[slug.length - 1] || null;

  // 1. Detect if target matches a single template preview
  let activeTemplate: any = null;
  if (lastSegment) {
    activeTemplate = allFallbackTemplates.find((t) => t.slug === lastSegment) || null;

    if (process.env.DATABASE_URL) {
      try {
        const dbTemplate = await db.template.findUnique({
          where: { slug: lastSegment },
          include: { category: true }
        });
        if (dbTemplate) {
          activeTemplate = {
            id: dbTemplate.id,
            slug: dbTemplate.slug,
            title: dbTemplate.title,
            description: dbTemplate.description,
            isPremium: dbTemplate.isPremium,
            categorySlug: dbTemplate.category.slug,
            categoryName: dbTemplate.category.name,
            content: dbTemplate.content as any
          };
        }
      } catch (err) {
        console.warn("DB error fetching template detail, using mock fallback.");
      }
    }
  }

  // If active template detail view, render preview template detail screen
  if (activeTemplate) {
    const breadcrumbsJson = SEOEngine.generateBreadcrumbSchema({
      title: activeTemplate.title,
      description: activeTemplate.description,
      slug: `/${activeTemplate.slug}`,
      locale,
      categoryName: activeTemplate.categoryName,
      categorySlug: activeTemplate.categorySlug,
      isTemplate: true,
    });

    const templateSchemaJson = SEOEngine.generateTemplateSchema({
      title: activeTemplate.title,
      description: activeTemplate.description,
      slug: `/${activeTemplate.slug}`,
      locale,
    });

    const internalLinking = SEOEngine.generateInternalLinks(
      activeTemplate.categorySlug,
      activeTemplate.slug,
      locale
    );

    return (
      <>
        <Navbar />
        <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-10 transition-colors">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJson) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(templateSchemaJson) }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-medium">
              <Link href={`/${locale}`} className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                <Home className="h-3 w-3" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <Link href={`/${locale}/templates`} className="hover:text-blue-500 transition-colors">
                Templates
              </Link>
              <span>/</span>
              <Link href={`/${locale}/templates/${activeTemplate.categorySlug}`} className="hover:text-blue-500 transition-colors">
                {activeTemplate.categoryName}
              </Link>
              <span>/</span>
              <span className="text-zinc-655 dark:text-zinc-300 font-semibold truncate max-w-[120px]">
                {activeTemplate.title}
              </span>
            </nav>

            {/* Header detail */}
            <div className="space-y-2.5 max-w-4xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  {activeTemplate.categoryName}
                </span>
                {activeTemplate.isPremium && (
                  <span className="px-2 py-0.5 rounded-md bg-amber-500 text-white text-xs font-bold uppercase tracking-wider">
                    Premium
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                {activeTemplate.title} Template
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {activeTemplate.description} Adjust fields in the controller to customize variables dynamically. Open in our visual tiptap document workspace to edit text blocks, trigger AI assistant rewrites, and export as PDF/Word.
              </p>
            </div>

            {/* Client View Component */}
            <TemplateDetailView locale={locale} template={activeTemplate} />

            {/* Contextual Internal Linking Grids */}
            <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                Explore Related Resources
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">
                    Related Templates
                  </h4>
                  <ul className="space-y-2">
                    {internalLinking.relatedTemplates.map((t) => (
                      <li key={t.href}>
                        <Link href={t.href} className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                          {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">
                    Writing Guides & Blog Articles
                  </h4>
                  <ul className="space-y-2">
                    {internalLinking.relatedBlogs.map((b) => (
                      <li key={b.href}>
                        <Link href={b.href} className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                          {b.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">
                    Popular Categories
                  </h4>
                  <ul className="space-y-2">
                    {internalLinking.relatedCategories.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // 2. Otherwise default: render Category/Templates listing page
  const categoryName = categorySlug ? capitalize(categorySlug) : "";
  const nicheName = nicheSlug ? capitalize(nicheSlug) : "";
  const locationName = locationSlug ? locationSlug.toUpperCase() : "";
  const subdivisionName = subdivisionSlug ? capitalize(subdivisionSlug) : "";
  const experienceName = experienceSlug ? capitalize(experienceSlug) : "";

  let pageHeading = "Free Professional Business Templates";
  if (categoryName) {
    const parts = [
      "Free",
      experienceName,
      nicheName,
      categoryName.replace("Templates", "").trim(),
      "Templates",
      locationName ? `in ${locationName}` : "",
      subdivisionName
    ].filter(Boolean);
    pageHeading = parts.join(" ");
  }



  // Load list from db or fallback
  let templates: any[] = [];
  let isFallbackUsed = false;

  try {
    if (process.env.DATABASE_URL) {
      let catId: string | null = null;
      if (categorySlug) {
        const cat = await db.category.findUnique({ where: { slug: categorySlug } });
        if (cat) catId = cat.id;
      }

      const dbTemplates = await db.template.findMany({
        where: {
          ...(catId ? { categoryId: catId } : {}),
          ...(q ? {
            OR: [
              { title: { contains: q, mode: "insensitive" } },
              { description: { contains: q, mode: "insensitive" } }
            ]
          } : {})
        },
        include: { category: true }
      });

      if (dbTemplates && dbTemplates.length > 0) {
        templates = dbTemplates.map((t) => ({
          id: t.id,
          slug: t.slug,
          title: t.title,
          description: t.description,
          isPremium: t.isPremium,
          categorySlug: t.category.slug,
          categoryName: t.category.name,
          content: t.content as any
        }));
      } else {
        isFallbackUsed = true;
      }
    } else {
      isFallbackUsed = true;
    }
  } catch (err) {
    console.warn("DB Query bypass in Templates page list, rendering fallbacks.");
    isFallbackUsed = true;
  }

  if (isFallbackUsed) {
    templates = allFallbackTemplates;
    if (categorySlug) {
      templates = templates.filter((t) => t.categorySlug === categorySlug);
    }
    if (q) {
      templates = templates.filter(
        (t) =>
          t.title.toLowerCase().includes(q.toLowerCase()) ||
          t.description.toLowerCase().includes(q.toLowerCase())
      );
    }
  }

  const relatedSearches = categorySlug
    ? [
        { label: `${categoryName} for Freelancers`, url: `/${locale}/templates/${categorySlug}/freelancer` },
        { label: `Legal ${categoryName}`, url: `/${locale}/templates/${categorySlug}/legal` },
        { label: `${categoryName} in USA`, url: `/${locale}/templates/${categorySlug}/general/usa` },
        { label: `${categoryName} in Canada`, url: `/${locale}/templates/${categorySlug}/general/canada` },
      ]
    : [
        { label: "Invoice Templates", url: `/${locale}/templates/invoices` },
        { label: "Resume CV Layouts", url: `/${locale}/templates/resumes` },
        { label: "Freelancer Agreements", url: `/${locale}/templates/contracts/freelancer` },
        { label: "Marketing Proposals", url: `/${locale}/templates/proposals` },
      ];

  const breadcrumbElements = [
    { name: "Home", item: `/${locale}` },
    { name: "Templates", item: `/${locale}/templates` },
  ];

  if (categorySlug) {
    breadcrumbElements.push({ name: categoryName, item: `/${locale}/templates/${categorySlug}` });
  }
  if (nicheSlug) {
    breadcrumbElements.push({ name: nicheName, item: `/${locale}/templates/${categorySlug}/${nicheSlug}` });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements.map((elem, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": elem.name,
      "item": `${siteUrl(elem.item)}`
    }))
  };

  function siteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL || "https://templix.ai"}${path}`;
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950/20 py-10 transition-colors">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <nav className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            <Link href={`/${locale}`} className="hover:text-blue-500 flex items-center gap-1 transition-colors">
              <Home className="h-3 w-3" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href={`/${locale}/templates`} className="hover:text-blue-500 transition-colors">
              Templates
            </Link>
            {categorySlug && (
              <>
                <span>/</span>
                <Link
                  href={`/${locale}/templates/${categorySlug}`}
                  className="hover:text-blue-500 transition-colors truncate max-w-[120px]"
                >
                  {categoryName}
                </Link>
              </>
            )}
            {nicheSlug && (
              <>
                <span>/</span>
                <span className="text-zinc-600 dark:text-zinc-300 font-semibold truncate max-w-[120px]">
                  {nicheName}
                </span>
              </>
            )}
          </nav>

          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {pageHeading}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-3xl">
              Choose from our curated library of dynamic templates. Seamlessly custom-tailor fields, styles, and values inside our built-in interactive editor canvas.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* ── Sidebar ── */}
            <aside className="lg:col-span-1 space-y-5">

              {/* All Documents card */}
              <Link
                href={`/${locale}/templates`}
                className={`group flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                  !categorySlug
                    ? "border-blue-400/60 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-600/40 shadow-sm"
                    : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-400/50 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <div className="relative h-12 w-16 shrink-0 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
                  <Image src="/cat-all-docs-cover.jpg" alt="All documents" fill className="object-cover" sizes="64px" />
                </div>
                <div className="min-w-0">
                  <p className={`font-bold text-sm truncate ${ !categorySlug ? "text-blue-600 dark:text-blue-400" : "text-zinc-800 dark:text-zinc-200" }`}>
                    All Documents
                  </p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">166+ templates</p>
                </div>
                {!categorySlug && (
                  <span className="ml-auto shrink-0 w-1.5 h-6 rounded-full bg-blue-500" />
                )}
              </Link>

              {/* Category cards */}
              <div className="space-y-2.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 px-1">Document Types</p>
                {CATEGORIES.map((cat) => {
                  const isActive = categorySlug === cat.slug;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/${locale}/templates/${cat.slug}`}
                      className={`group flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                        isActive
                          ? "border-blue-400/60 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-600/40 shadow-sm"
                          : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-400/50 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="relative h-12 w-16 shrink-0 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <p className={`font-bold text-sm truncate ${ isActive ? "text-blue-600 dark:text-blue-400" : "text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400" } transition-colors`}>
                          {cat.name}
                        </p>
                        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">{cat.description}</p>
                        <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">{cat.count}+ templates</p>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <span className="ml-auto shrink-0 w-1.5 h-6 rounded-full bg-blue-500" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Related Searches box */}
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm space-y-3">
                <h3 className="font-bold text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  Related Searches
                </h3>
                <div className="flex flex-col gap-2">
                  {relatedSearches.map((rel) => (
                    <Link
                      key={rel.label}
                      href={rel.url}
                      className="text-xs font-medium text-zinc-600 dark:text-zinc-450 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-500" />
                      {rel.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <section className="lg:col-span-3 space-y-6">
              {templates.length === 0 ? (
                <div className="p-12 text-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-3">
                  <AlertCircle className="h-10 w-10 text-zinc-400 mx-auto" />
                  <h3 className="font-bold text-zinc-850 dark:text-zinc-200">No templates found</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    We could not find templates matching the search parameters or filter queries. Try resetting your search.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {templates.map((temp) => {
                    const customPreview = TEMPLATE_IMAGES[temp.slug] || null;
                    return (
                    <div
                      key={temp.id}
                      className="group flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {/* Card Thumbnail */}
                      <div className="aspect-[4/3] w-full bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                        {customPreview ? (
                          <Image
                            src={customPreview}
                            alt={`${temp.title} template preview`}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          /* Dynamic CSS Document Preview Fallback */
                          <div className="w-full h-full p-5 flex flex-col justify-between select-none bg-zinc-50 dark:bg-zinc-900/35 transition-colors">
                            {/* Document Header Mock */}
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <div className="h-3 w-16 rounded bg-zinc-300 dark:bg-zinc-700" />
                                <div className="h-2 w-10 rounded bg-zinc-200 dark:bg-zinc-800" />
                              </div>
                              <span 
                                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border text-center"
                                style={{ 
                                  color: temp.content?.styles?.primaryColor || "#3b82f6", 
                                  borderColor: `${temp.content?.styles?.primaryColor || "#3b82f6"}30`,
                                  backgroundColor: `${temp.content?.styles?.primaryColor || "#3b82f6"}10`
                                }}
                              >
                                {temp.content?.layout?.header || temp.categoryName || "Document"}
                              </span>
                            </div>

                            {/* Category Specific Layout Content Mock */}
                            <div className="flex-1 my-3 flex flex-col justify-center">
                              {temp.categorySlug === "resumes" ? (
                                /* Resume Layout */
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800 shrink-0" />
                                    <div className="space-y-1 flex-1">
                                      <div className="h-2.5 w-1/2 rounded bg-zinc-300 dark:bg-zinc-700" style={{ backgroundColor: temp.content?.styles?.primaryColor }} />
                                      <div className="h-1.5 w-1/3 rounded bg-zinc-200 dark:bg-zinc-800" />
                                    </div>
                                  </div>
                                  <div className="space-y-1 pt-1 border-t border-zinc-150 dark:border-zinc-850">
                                    <div className="h-1.5 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                                    <div className="h-1.5 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
                                  </div>
                                </div>
                              ) : temp.categorySlug === "contracts" ? (
                                /* Contract Layout */
                                <div className="space-y-2.5">
                                  <div className="space-y-1.5">
                                    <div className="h-2 w-1/3 rounded bg-zinc-300 dark:bg-zinc-700" style={{ backgroundColor: temp.content?.styles?.primaryColor }} />
                                    <div className="h-1.5 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                                    <div className="h-1.5 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
                                  </div>
                                  <div className="flex gap-4 pt-1">
                                    <div className="flex-1 h-3 rounded border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950" />
                                    <div className="flex-1 h-3 rounded border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950" />
                                  </div>
                                </div>
                              ) : temp.categorySlug === "proposals" ? (
                                /* Proposal Layout */
                                <div className="space-y-2 border border-zinc-150 dark:border-zinc-850 rounded-xl p-2.5 bg-white dark:bg-zinc-950 shadow-sm">
                                  <div className="h-2.5 w-2/3 rounded bg-zinc-300 dark:bg-zinc-700" style={{ backgroundColor: temp.content?.styles?.primaryColor }} />
                                  <div className="space-y-1">
                                    <div className="h-1.5 w-full rounded bg-zinc-200 dark:bg-zinc-850" />
                                    <div className="h-1.5 w-4/5 rounded bg-zinc-200 dark:bg-zinc-850" />
                                  </div>
                                </div>
                              ) : temp.categorySlug === "letters" ? (
                                /* Letter Layout */
                                <div className="space-y-2">
                                  <div className="space-y-1">
                                    <div className="h-1.5 w-1/4 rounded bg-zinc-250 dark:bg-zinc-800" style={{ backgroundColor: temp.content?.styles?.primaryColor }} />
                                    <div className="h-1.5 w-1/3 rounded bg-zinc-200 dark:bg-zinc-850" />
                                  </div>
                                  <div className="space-y-1.5 pt-1">
                                    <div className="h-1.5 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                                    <div className="h-1.5 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                                    <div className="h-1.5 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
                                  </div>
                                </div>
                              ) : (
                                /* Default / Invoice Layout */
                                <div className="space-y-2 w-full">
                                  <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-950 shadow-sm">
                                    <div className="h-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-150 dark:border-zinc-850 px-2 flex items-center justify-between">
                                      <div className="h-1.5 w-12 rounded bg-zinc-250 dark:bg-zinc-750" />
                                      <div className="h-1.5 w-4 rounded bg-zinc-250 dark:bg-zinc-750" />
                                    </div>
                                    <div className="p-2 flex items-center justify-between gap-4">
                                      <div className="h-1.5 w-20 rounded bg-zinc-200 dark:bg-zinc-800" />
                                      <div className="h-1.5 w-8 rounded bg-zinc-300 dark:bg-zinc-700" style={{ backgroundColor: temp.content?.styles?.primaryColor }} />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Document Footer Mock */}
                            <div className="flex justify-between items-end border-t border-zinc-150 dark:border-zinc-800/80 pt-2 text-[8px] text-zinc-400 dark:text-zinc-500">
                              <span>{temp.isPremium ? "Premium Template" : "Free Layout"}</span>
                              <span className="font-bold text-xs" style={{ color: temp.content?.styles?.primaryColor || "#3b82f6" }}>
                                {temp.categorySlug === "invoices" ? (temp.isPremium ? "$$$" : "$4,500") : "• • •"}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Gradient overlay */}
                        {customPreview && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                        )}

                        {temp.isPremium && (
                          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[8px] uppercase tracking-wider z-10 shadow-sm">
                            Premium
                          </span>
                        )}
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                            {temp.categoryName}
                          </span>
                          <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                            {temp.title}
                          </h3>
                          <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed truncate-2-lines">
                            {temp.description}
                          </p>
                        </div>

                        {/* Redirects to category/slug path representing specific preview page */}
                        <Link
                          href={`/${locale}/templates/${temp.categorySlug}/${temp.slug}`}
                          className="w-full h-10 rounded-xl bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-850 dark:hover:bg-zinc-800 text-white font-semibold text-xs flex items-center justify-center gap-1 shadow-sm transition-colors"
                        >
                          <span>Preview Details</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ); })}

                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <FAQ locale={locale} />
      <Footer />
    </>
  );
}
