// Fallback template data — extracted from templates route for SSR performance.
// Keeping large static data out of the page module reduces Next.js cold-start parse time.
// Auto-generated: do not edit. Update via DB seed or prisma/seed.ts.

export const allFallbackTemplates = [
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
      fields: ["fullName", "jobTitle", "profilePhoto", "email", "phone", "location", "linkedin", "github", "portfolio", "summary", "careerSummary", "programmingLanguages", "frameworks", "databases", "cloudPlatforms", "devOpsTools", "versionControl", "softSkills", "companyName", "employmentType", "startDate", "endDate", "responsibilities", "achievements", "projectName", "projectDescription", "technologiesUsed", "githubLink", "liveDemo", "degree", "university", "graduationYear", "gpa", "certificationName", "organization", "year", "languagesKnown", "awardsAchievements", "hobbiesInterests"],
      layout: {
        header: "SOFTWARE ENGINEER CURRICULUM VITAE",
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
          { type: "paragraph", content: [{ type: "text", text: "Title: {{jobTitle}} | Photo: {{profilePhoto}} | Email: {{email}} | Phone: {{phone}} | Location: {{location}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "LinkedIn: {{linkedin}} | GitHub: {{github}} | Portfolio: {{portfolio}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional & Career Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{careerSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Technical Skills Breakdown" }] },
          { type: "paragraph", content: [{ type: "text", text: "Languages: {{programmingLanguages}} | Frameworks: {{frameworks}} | Databases: {{databases}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Cloud Platforms: {{cloudPlatforms}} | DevOps Tools: {{devOpsTools}} | Version Control: {{versionControl}} | Soft Skills: {{softSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Work & Employment Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} ({{employmentType}}) | Duration: {{startDate}} to {{endDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{responsibilities}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Key Achievements: {{achievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Software Projects Portfolio" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project: {{projectName}} | Tech Stack: {{technologiesUsed}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Details: {{projectDescription}} | Code: {{githubLink}} | Demo: {{liveDemo}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Academic & Education Background" }] },
          { type: "paragraph", content: [{ type: "text", text: "Degree: {{degree}} | University: {{university}} | Grad Year: {{graduationYear}} | GPA: {{gpa}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications & Languages" }] },
          { type: "paragraph", content: [{ type: "text", text: "Cert: {{certificationName}} ({{organization}} — {{year}}) | Languages: {{languagesKnown}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Awards & Hobbies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Awards: {{awardsAchievements}} | Interests: {{hobbiesInterests}}" }] }
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
      fields: ["fullName", "email", "phone", "linkedin", "summary", "sqlSkills", "excelSkills", "powerBi", "tableau", "python", "dataVisualization", "companyName", "jobTitle", "employmentType", "startDate", "endDate", "responsibilities", "achievements", "analyticsProjects", "certificationName", "organization", "year", "degree", "university", "graduationYear", "languagesKnown", "referenceName", "referencePosition", "referenceCompany", "referenceContact"],
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
          { type: "paragraph", content: [{ type: "text", text: "Contact: {{email}} | Phone: {{phone}} | LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Analytics Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Data & BI Tool Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "SQL Proficiency: {{sqlSkills}} | Excel Competency: {{excelSkills}} | Python: {{python}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "BI Software: Power BI ({{powerBi}}), Tableau ({{tableau}}) | Visualization: {{dataVisualization}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Analytics Professional Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} | Role: {{jobTitle}} ({{employmentType}}) | Duration: {{startDate}} to {{endDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{responsibilities}} | Key Achievements: {{achievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Data Analysis Projects Portfolio" }] },
          { type: "paragraph", content: [{ type: "text", text: "Analytics Projects: {{analyticsProjects}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications & Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "Cert: {{certificationName}} ({{organization}} — {{year}}) | Degree: {{degree}} | University: {{university}} ({{graduationYear}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Languages & Professional References" }] },
          { type: "paragraph", content: [{ type: "text", text: "Languages: {{languagesKnown}} | Reference: {{referenceName}} ({{referencePosition}} at {{referenceCompany}} — {{referenceContact}})" }] }
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
      fields: ["fullName", "email", "phone", "linkedin", "summary", "leadershipSkills", "pmMethodologies", "pmTools", "companyName", "jobTitle", "employmentType", "startDate", "endDate", "responsibilities", "achievements", "projectPortfolio", "pmpCertified", "scrumCertified", "degree", "university", "graduationYear", "languagesKnown", "awardsAchievements"],
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
          { type: "paragraph", content: [{ type: "text", text: "Contact: {{email}} | Phone: {{phone}} | LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Leadership & Management Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Management Skills & Software Tools" }] },
          { type: "paragraph", content: [{ type: "text", text: "Leadership: {{leadershipSkills}} | Methodologies: {{pmMethodologies}} | Tools: {{pmTools}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Management Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} | Role: {{jobTitle}} ({{employmentType}}) | Duration: {{startDate}} to {{endDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{responsibilities}} | Achievements: {{achievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Project Portfolio & Accomplishments" }] },
          { type: "paragraph", content: [{ type: "text", text: "Portfolio Details: {{projectPortfolio}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications & Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "Certifications: PMP ({{pmpCertified}}), Scrum ({{scrumCertified}}) | Degree: {{degree}} | School: {{university}} ({{graduationYear}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Languages & Special Awards" }] },
          { type: "paragraph", content: [{ type: "text", text: "Languages: {{languagesKnown}} | Awards: {{awardsAchievements}}" }] }
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
      fields: ["fullName", "profilePhoto", "email", "phone", "portfolio", "behanceProfile", "dribbbleProfile", "summary", "adobeCreativeSuite", "figma", "brandingExperience", "companyName", "jobTitle", "employmentType", "startDate", "endDate", "responsibilities", "achievements", "projectName", "projectDescription", "behanceLink", "awardsAchievements", "degree", "university", "graduationYear"],
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
          { type: "paragraph", content: [{ type: "text", text: "Photo: {{profilePhoto}} | Email: {{email}} | Phone: {{phone}} | Portfolio: {{portfolio}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Behance: {{behanceProfile}} | Dribbble: {{dribbbleProfile}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Creative & Design Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Design Software & Studio Skills" }] },
          { type: "paragraph", content: [{ type: "text", text: "Adobe Suite: {{adobeCreativeSuite}} | UI/UX Tools: {{figma}} | Branding: {{brandingExperience}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Creative Work Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} | Role: {{jobTitle}} ({{employmentType}}) | Duration: {{startDate}} to {{endDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{responsibilities}} | Achievements: {{achievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Design Projects & Case Studies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project: {{projectName}} | Details: {{projectDescription}} | Link: {{behanceLink}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Awards & Creative Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "Awards: {{awardsAchievements}} | Degree: {{degree}} | Institution: {{university}} ({{graduationYear}})" }] }
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
      fields: ["fullName", "email", "phone", "summary", "nursingLicenseNumber", "medicalCertifications", "clinicalSkills", "hospitalExperience", "patientCareExperience", "degree", "university", "graduationYear", "languagesKnown", "awardsAchievements"],
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
          { type: "paragraph", content: [{ type: "text", text: "Email: {{email}} | Phone: {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Nursing Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Nursing License & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "License #: {{nursingLicenseNumber}} | Certifications: {{medicalCertifications}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Skills & Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{clinicalSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Hospital & Patient Care Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Hospital Experience: {{hospitalExperience}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Patient Care: {{patientCareExperience}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education, Languages & Awards" }] },
          { type: "paragraph", content: [{ type: "text", text: "Education: {{degree}} from {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Languages: {{languagesKnown}} | Achievements: {{awardsAchievements}}" }] }
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
      fields: ["fullName", "email", "phone", "summary", "teachingSubjects", "gradeLevels", "classroomManagementSkills", "teachingExperience", "certificationName", "organization", "year", "degree", "university", "graduationYear", "workshopsAttended", "languagesKnown"],
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
          { type: "paragraph", content: [{ type: "text", text: "Email: {{email}} | Phone: {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Teaching Objective" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Classroom Scope & Skills" }] },
          { type: "paragraph", content: [{ type: "text", text: "Subjects Taught: {{teachingSubjects}} | Grade Levels: {{gradeLevels}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Classroom Management: {{classroomManagementSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Teaching Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{teachingExperience}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "Degree: {{degree}} | University: {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Certificate: {{certificationName}} ({{organization}} — {{year}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Workshops & Languages" }] },
          { type: "paragraph", content: [{ type: "text", text: "Workshops: {{workshopsAttended}} | Languages: {{languagesKnown}}" }] }
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
      fields: ["fullName", "email", "phone", "linkedin", "summary", "marketingSkills", "seoSkills", "semSkills", "googleAds", "metaAds", "emailMarketing", "crmTools", "campaignExperience", "companyName", "jobTitle", "employmentType", "startDate", "endDate", "responsibilities", "achievements", "degree", "university", "graduationYear", "certificationName", "organization", "year"],
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
          { type: "paragraph", content: [{ type: "text", text: "Contact: {{email}} | Phone: {{phone}} | LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Marketing Profile" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Marketing Competencies & Ad Tools" }] },
          { type: "paragraph", content: [{ type: "text", text: "Skills: {{marketingSkills}} | SEO: {{seoSkills}} | SEM: {{semSkills}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Advertising: Google Ads ({{googleAds}}), Meta Ads ({{metaAds}}) | Email: {{emailMarketing}} | CRM: {{crmTools}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Campaign & Leadership Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Major Campaigns: {{campaignExperience}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} | Role: {{jobTitle}} ({{employmentType}}) | Duration: {{startDate}} to {{endDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{responsibilities}} | Key Achievements: {{achievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Certifications" }] },
          { type: "paragraph", content: [{ type: "text", text: "Degree: {{degree}} | University: {{university}} ({{graduationYear}}) | Cert: {{certificationName}} ({{organization}} — {{year}})" }] }
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
      fields: ["fullName", "email", "phone", "summary", "customerSupportSkills", "crmSoftware", "communicationSkills", "problemSolving", "companyName", "jobTitle", "employmentType", "startDate", "endDate", "responsibilities", "achievements", "degree", "university", "graduationYear", "languagesKnown"],
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
          { type: "paragraph", content: [{ type: "text", text: "Email: {{email}} | Phone: {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Customer Support Objectives" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Service Core Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Skills: {{customerSupportSkills}} | Helpdesk CRM: {{crmSoftware}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Communication: {{communicationSkills}} | Problem Solving: {{problemSolving}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Customer Service History" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} | Role: {{jobTitle}} ({{employmentType}}) | Duration: {{startDate}} to {{endDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{responsibilities}} | Achievements: {{achievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education & Languages" }] },
          { type: "paragraph", content: [{ type: "text", text: "Degree: {{degree}} | University: {{university}} ({{graduationYear}}) | Languages: {{languagesKnown}}" }] }
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
      fields: ["fullName", "email", "phone", "summary", "accountingSoftware", "bookkeeping", "taxPreparation", "financialReporting", "payroll", "companyName", "jobTitle", "employmentType", "startDate", "endDate", "responsibilities", "achievements", "cpaCertified", "otherCertifications", "degree", "university", "graduationYear", "languagesKnown"],
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
          { type: "paragraph", content: [{ type: "text", text: "Email: {{email}} | Phone: {{phone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Finance Profile" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Accounting & Software Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Accounting Platforms: {{accountingSoftware}} | Bookkeeping: {{bookkeeping}} | Tax Preparation: {{taxPreparation}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Reporting: {{financialReporting}} | Payroll Management: {{payroll}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Accounting Work Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} | Role: {{jobTitle}} ({{employmentType}}) | Duration: {{startDate}} to {{endDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{responsibilities}} | Achievements: {{achievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Credentials & Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "CPA Status: {{cpaCertified}} | Other Certs: {{otherCertifications}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Degree: {{degree}} | University: {{university}} ({{graduationYear}}) | Languages: {{languagesKnown}}" }] }
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
      fields: ["fullName", "email", "phone", "linkedin", "summary", "salesSkills", "crmTools", "leadGen", "negotiationSkills", "salesAchievements", "companyName", "jobTitle", "employmentType", "startDate", "endDate", "responsibilities", "achievements", "degree", "university", "graduationYear", "certificationName", "organization", "year", "languagesKnown"],
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
          { type: "paragraph", content: [{ type: "text", text: "Email: {{email}} | Phone: {{phone}} | LinkedIn: {{linkedin}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Sales Objective" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{summary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sales Pipeline & CRM Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sales Skills: {{salesSkills}} | CRM Software: {{crmTools}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Lead Generation: {{leadGen}} | Negotiation Skills: {{negotiationSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sales Milestones & Achievements" }] },
          { type: "paragraph", content: [{ type: "text", text: "Track Record: {{salesAchievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sales Experience" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} | Role: {{jobTitle}} ({{employmentType}}) | Duration: {{startDate}} to {{endDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{responsibilities}} | Achievements: {{achievements}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education, Certifications & Languages" }] },
          { type: "paragraph", content: [{ type: "text", text: "Degree: {{degree}} | University: {{university}} ({{graduationYear}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Cert: {{certificationName}} ({{organization}} — {{year}}) | Languages: {{languagesKnown}}" }] }
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
      fields: ["freelancerName", "businessName", "freelancerAddress", "freelancerEmail", "freelancerPhone", "clientName", "clientCompanyName", "clientAddress", "clientEmail", "clientPhone", "projectTitle", "projectDescription", "deliverables", "timeline", "startDate", "endDate", "paymentTerms", "totalProjectFee", "depositAmount", "paymentSchedule", "lateFee", "ownershipRights", "confidentialityClause", "revisionsIncluded", "cancellationPolicy", "freelancerSignature", "clientSignature"],
      layout: {
        header: "FREELANCE AGREEMENT",
        footer: "Executed as a legally binding contract between Freelancer and Client."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#475569"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FREELANCE SERVICE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Freelancer: {{freelancerName}} ({{businessName}}) | Address: {{freelancerAddress}} | Contact: {{freelancerEmail}} | {{freelancerPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} ({{clientCompanyName}}) | Address: {{clientAddress}} | Contact: {{clientEmail}} | {{clientPhone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Project Scope & Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Title: {{projectTitle}} | Description: {{projectDescription}} | Key Deliverables: {{deliverables}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Timeline: {{timeline}} | Start Date: {{startDate}} | End Date: {{endDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Payment Terms & Late Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "Terms: {{paymentTerms}} | Total Fee: {{totalProjectFee}} | Deposit: {{depositAmount}} | Schedule: {{paymentSchedule}} | Late Fee Rate: {{lateFee}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. IP Ownership & NDA" }] },
          { type: "paragraph", content: [{ type: "text", text: "Ownership: {{ownershipRights}} | Confidentiality: {{confidentialityClause}} | Revisions: {{revisionsIncluded}} | Cancellation: {{cancellationPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorizing Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Freelancer Signature: {{freelancerSignature}} | Client Signature: {{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "employment-contract",
    slug: "employment-contract",
    title: "Employment Contract Template",
    description: "Standard corporate hiring contract mapping salary, reporting lines, benefit packages, and policies.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Employment Agreement",
      fields: ["companyLogo", "companyName", "companyAddress", "hrRepresentative", "hrEmail", "hrPhone", "employeeFullName", "employeeAddress", "employeeEmail", "employeePhone", "jobTitle", "department", "employmentType", "startDate", "endDate", "workLocation", "reportingManager", "salary", "bonus", "benefits", "payFrequency", "workingHours", "probationPeriod", "leavePolicy", "noticePeriod", "confidentialityClause", "nonCompeteClause", "employerSignature", "employeeSignature", "signatureDate"],
      layout: {
        header: "EMPLOYMENT AGREEMENT",
        footer: "Subject to governing labor laws. Copy retained by both parties."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1d4ed8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EMPLOYMENT CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Employer: {{companyName}} (Logo: {{companyLogo}}) | Address: {{companyAddress}} | Rep: {{hrRepresentative}} ({{hrEmail}} / {{hrPhone}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Employee: {{employeeFullName}} | Address: {{employeeAddress}} | Email: {{employeeEmail}} | Phone: {{employeePhone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Position, Scope & Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "Role: {{jobTitle}} | Dept: {{department}} | Status: {{employmentType}} | Location: {{workLocation}} | Manager: {{reportingManager}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Start Date: {{startDate}} | End Date: {{endDate}} | Weekly Hours: {{workingHours}} | Probation: {{probationPeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Remuneration & Benefits" }] },
          { type: "paragraph", content: [{ type: "text", text: "Base Salary: {{salary}} | Pay Frequency: {{payFrequency}} | Bonus Plan: {{bonus}} | Health & Benefits: {{benefits}} | Leave Policy: {{leavePolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Legal Terms & Covenants" }] },
          { type: "paragraph", content: [{ type: "text", text: "Notice Period: {{noticePeriod}} | Confidentiality: {{confidentialityClause}} | Non-Compete: {{nonCompeteClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorization Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Employer: {{employerSignature}} | Employee: {{employeeSignature}} | Date Signed: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "freelance-contract",
    slug: "freelance-contract",
    title: "Freelance Contract Template",
    description: "Detailed freelance agreement mapping client project specifications, late fees, and copyrights.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Freelance Services Contract",
      fields: ["freelancerName", "businessName", "freelancerAddress", "freelancerEmail", "freelancerPhone", "clientName", "clientCompanyName", "clientAddress", "clientEmail", "clientPhone", "projectTitle", "projectDescription", "deliverables", "timeline", "startDate", "endDate", "paymentTerms", "totalProjectFee", "depositAmount", "paymentSchedule", "lateFee", "ownershipRights", "confidentialityClause", "revisionsIncluded", "cancellationPolicy", "freelancerSignature", "clientSignature"],
      layout: {
        header: "FREELANCE CONTRACT",
        footer: "Governed by mutually agreed independent service terms."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#1e293b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FREELANCE SERVICES CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Freelancer: {{freelancerName}} ({{businessName}}) | Address: {{freelancerAddress}} | Contact: {{freelancerEmail}} | {{freelancerPhone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} ({{clientCompanyName}}) | Address: {{clientAddress}} | Contact: {{clientEmail}} | {{clientPhone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Works & Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Title: {{projectTitle}} | Description: {{projectDescription}} | Key Deliverables: {{deliverables}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Timeline: {{timeline}} | Start Date: {{startDate}} | End Date: {{endDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Payment Terms & Late Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "Terms: {{paymentTerms}} | Total Fee: {{totalProjectFee}} | Deposit: {{depositAmount}} | Schedule: {{paymentSchedule}} | Late Fee Rate: {{lateFee}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Intellectual Property & NDA" }] },
          { type: "paragraph", content: [{ type: "text", text: "Ownership: {{ownershipRights}} | Confidentiality: {{confidentialityClause}} | Revisions: {{revisionsIncluded}} | Cancellation: {{cancellationPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorizing Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Freelancer: {{freelancerSignature}} | Client: {{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "independent-contractor-agreement",
    slug: "independent-contractor-agreement",
    title: "Independent Contractor Agreement",
    description: "Detailed independent contractor agreement specifying service terms, tax compliance, and liability exclusions.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Independent Contractor Agreement",
      fields: ["contractorName", "contractorCompany", "contractorAddress", "contractorContact", "clientName", "clientCompanyName", "clientAddress", "servicesProvided", "projectDuration", "deliverables", "paymentTerms", "taxResponsibility", "insuranceRequirement", "independentContractorStatus", "confidentialityClause", "terminationClause", "disputeResolution", "contractorSignature", "clientSignature"],
      layout: {
        header: "INDEPENDENT CONTRACTOR AGREEMENT",
        footer: "Contractor is solely responsible for self-employment taxes and business insurances."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "INDEPENDENT CONTRACTOR AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contractor: {{contractorName}} | Company: {{contractorCompany}} | Address: {{contractorAddress}} | Contact: {{contractorContact}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} | Company: {{clientCompanyName}} | Address: {{clientAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Services & Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "Services Provided: {{servicesProvided}} | Duration: {{projectDuration}} | Deliverables: {{deliverables}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Compensation & Taxes" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Terms: {{paymentTerms}} | Tax Responsibility: {{taxResponsibility}} | Insurance Requirement: {{insuranceRequirement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Legal Status & Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "Status: {{independentContractorStatus}} | NDA: {{confidentialityClause}} | Termination: {{terminationClause}} | Dispute Resolution: {{disputeResolution}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorizing Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contractor Signature: {{contractorSignature}} | Client Signature: {{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "service-agreement",
    slug: "service-agreement",
    title: "Service Agreement Template",
    description: "Legal agreement mapping service level agreements (SLAs), provider obligations, and client responsibilities.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Service Agreement",
      fields: ["providerCompanyName", "providerAddress", "providerContactPerson", "clientName", "clientCompanyName", "clientAddress", "serviceDescription", "serviceScope", "serviceFrequency", "startDate", "endDate", "serviceFee", "paymentMethod", "paymentDueDate", "slaTerms", "cancellationPolicy", "liabilityLimit", "confidentialityClause", "providerSignature", "clientSignature"],
      layout: {
        header: "MASTER SERVICE AGREEMENT",
        footer: "Subject to the Service Level Agreement (SLA) metrics included herein."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#312e81"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MASTER SERVICE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Provider: {{providerCompanyName}} | Address: {{providerAddress}} | Contact: {{providerContactPerson}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} | Company: {{clientCompanyName}} | Address: {{clientAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Description of Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "Service Description: {{serviceDescription}} | Scope: {{serviceScope}} | Frequency: {{serviceFrequency}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Start Date: {{startDate}} | End Date: {{endDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Service Fees & Payment Rules" }] },
          { type: "paragraph", content: [{ type: "text", text: "Fee: {{serviceFee}} | Method: {{paymentMethod}} | Due Date: {{paymentDueDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Service Level & Cancellation Policies" }] },
          { type: "paragraph", content: [{ type: "text", text: "SLA Terms: {{slaTerms}} | Cancellation: {{cancellationPolicy}} | Liability: {{liabilityLimit}} | Confidentiality: {{confidentialityClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorizing Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Provider Signature: {{providerSignature}} | Client Signature: {{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "nda-template",
    slug: "nda-template",
    title: "Non-Disclosure Agreement (NDA) Template",
    description: "Standard confidentiality agreement layout to protect proprietary business data, trade secrets, and assets.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Non-Disclosure Agreement",
      fields: ["partyAName", "partyACompany", "partyAAddress", "partyBName", "partyBCompany", "partyBAddress", "effectiveDate", "purposeOfAgreement", "confidentialInformation", "exclusions", "agreementDuration", "obligations", "permittedDisclosures", "governingLaw", "partyASignature", "partyBSignature"],
      layout: {
        header: "CONFIDENTIALITY DEED",
        footer: "Governed under state laws. Signatures authenticate mutual obligations."
      },
      styles: {
        primaryColor: "#be123c",
        secondaryColor: "#881337"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MUTUAL NON-DISCLOSURE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "First Party (A): {{partyAName}} ({{partyACompany}}) | Address: {{partyAAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Second Party (B): {{partyBName}} ({{partyBCompany}}) | Address: {{partyBAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Agreement Purpose & Date" }] },
          { type: "paragraph", content: [{ type: "text", text: "Effective Date: {{effectiveDate}} | Purpose: {{purposeOfAgreement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Definition of Confidential Material" }] },
          { type: "paragraph", content: [{ type: "text", text: "Confidential Information: {{confidentialInformation}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Exclusions: {{exclusions}} | Duration: {{agreementDuration}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Obligations & Legal Remedies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Obligations: {{obligations}} | Permitted Disclosures: {{permittedDisclosures}} | Law: {{governingLaw}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorizing Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Party A: {{partyASignature}} | Party B: {{partyBSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "consulting-agreement",
    slug: "consulting-agreement",
    title: "Consulting Agreement Template",
    description: "Detailed consulting agreement mapping project scope, timelines, hourly or fixed rate fees.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Consulting Agreement",
      fields: ["consultantName", "consultantCompany", "consultantContact", "clientName", "clientCompanyName", "clientContact", "projectName", "scopeOfWork", "deliverables", "timeline", "hourlyRate", "fixedFee", "expenses", "paymentSchedule", "confidentialityClause", "intellectualProperty", "terminationClause", "consultantSignature", "clientSignature"],
      layout: {
        header: "CONSULTING CONTRACT",
        footer: "Independent consultant relationship template."
      },
      styles: {
        primaryColor: "#d97706",
        secondaryColor: "#78350f"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSULTING AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consultant: {{consultantName}} | Company: {{consultantCompany}} | Contact: {{consultantContact}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} | Company: {{clientCompanyName}} | Contact: {{clientContact}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Consulting & Work Title" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Title: {{projectName}} | Scope: {{scopeOfWork}} | Deliverables: {{deliverables}} | Timeline: {{timeline}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Fees, Fixed Rates & Expenses" }] },
          { type: "paragraph", content: [{ type: "text", text: "Hourly Rate: {{hourlyRate}} | Fixed Fee: {{fixedFee}} | Expenses: {{expenses}} | Schedule: {{paymentSchedule}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Legal Covenants & NDA" }] },
          { type: "paragraph", content: [{ type: "text", text: "Confidentiality: {{confidentialityClause}} | Intellectual Property: {{intellectualProperty}} | Termination: {{terminationClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorizing Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consultant Signature: {{consultantSignature}} | Client Signature: {{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "rental-agreement",
    slug: "rental-agreement",
    title: "Rental Agreement Template",
    description: "Property lease contract mapping monthly rents, security deposits, smoking policies, and utility rules.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Residential Rental Agreement",
      fields: ["landlordName", "landlordAddress", "landlordContact", "tenantName", "tenantAddress", "tenantPhone", "propertyAddress", "propertyType", "leaseStartDate", "leaseEndDate", "monthlyRent", "securityDeposit", "rentDueDate", "paymentMethod", "utilities", "maintenance", "petsPolicy", "smokingPolicy", "landlordSignature", "tenantSignature"],
      layout: {
        header: "LEASE AGREEMENT",
        footer: "This document is binding under local landlord-tenant regulations."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#064e3b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RESIDENTIAL LEASE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Landlord: {{landlordName}} | Address: {{landlordAddress}} | Phone: {{landlordContact}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Tenant: {{tenantName}} | Former Address: {{tenantAddress}} | Phone: {{tenantPhone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Property & Lease Duration" }] },
          { type: "paragraph", content: [{ type: "text", text: "Leased Address: {{propertyAddress}} | Type: {{propertyType}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Lease Period: {{leaseStartDate}} to {{leaseEndDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Monthly Rents & Security Deposits" }] },
          { type: "paragraph", content: [{ type: "text", text: "Rent Amount: {{monthlyRent}} | Deposit: {{securityDeposit}} | Due Date: {{rentDueDate}} | Method: {{paymentMethod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Utilities & Maintenance Policies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Utilities: {{utilities}} | Maintenance: {{maintenance}} | Pets: {{petsPolicy}} | Smoking: {{smokingPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Lease Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Landlord Signature: {{landlordSignature}} | Tenant Signature: {{tenantSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "sales-contract",
    slug: "sales-contract",
    title: "Sales Contract Template",
    description: "Standard business bill of sale mapping merchandise details, quantities, and return policies.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Commercial Sales Agreement",
      fields: ["sellerName", "sellerCompany", "sellerAddress", "buyerName", "buyerCompany", "buyerAddress", "productName", "quantity", "unitPrice", "totalAmount", "deliveryDate", "shippingMethod", "deliveryAddress", "paymentMethod", "paymentDueDate", "warrantyTerms", "returnPolicy", "governingLaw", "sellerSignature", "buyerSignature"],
      layout: {
        header: "BILL OF SALE",
        footer: "Merchandise title transfers to Buyer upon receipt of total contract value."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#7c2d12"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COMMERCIAL SALES CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Seller: {{sellerName}} ({{sellerCompany}}) | Address: {{sellerAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Buyer: {{buyerName}} ({{buyerCompany}}) | Address: {{buyerAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Merchandises details & Costs Breakdown" }] },
          { type: "paragraph", content: [{ type: "text", text: "Item: {{productName}} | Qty: {{quantity}} | Unit Price: {{unitPrice}} | Total: {{totalAmount}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Shipping & Payment Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "Delivery Date: {{deliveryDate}} | Method: {{shippingMethod}} | Destination: {{deliveryAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Method: {{paymentMethod}} | Payment Due Date: {{paymentDueDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Warranty & Legal Exclusions" }] },
          { type: "paragraph", content: [{ type: "text", text: "Warranty: {{warrantyTerms}} | Returns: {{returnPolicy}} | Law: {{governingLaw}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Sales Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Seller Signature: {{sellerSignature}} | Buyer Signature: {{buyerSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "partnership-agreement",
    slug: "partnership-agreement",
    title: "Partnership Agreement Template",
    description: "Standard business partnership contract outlining ownership ratios, capital investment, and exit terms.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Business Partnership Agreement",
      fields: ["partner1Name", "partner1Address", "partner1Ownership", "partner2Name", "partner2Address", "partner2Ownership", "businessName", "businessAddress", "industryType", "capitalContribution", "profitSharing", "partnerResponsibilities", "decisionMaking", "exitStrategy", "partner1Signature", "partner2Signature"],
      layout: {
        header: "PARTNERSHIP DEED",
        footer: "This partnership operates in mutual trust and alignment on common business goals."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#311042"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PARTNERSHIP AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Partner 1: {{partner1Name}} | Address: {{partner1Address}} | Ownership Share: {{partner1Ownership}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Partner 2: {{partner2Name}} | Address: {{partner2Address}} | Ownership Share: {{partner2Ownership}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Business Details" }] },
          { type: "paragraph", content: [{ type: "text", text: "Business Name: {{businessName}} | Address: {{businessAddress}} | Industry: {{industryType}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Financial Structure & Capital" }] },
          { type: "paragraph", content: [{ type: "text", text: "Capital Contribution: {{capitalContribution}} | Profit Sharing Terms: {{profitSharing}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Roles, Decisions & Exit Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{partnerResponsibilities}} | Decision Rule: {{decisionMaking}} | Exit Plan: {{exitStrategy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Partnership Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Partner 1 Signature: {{partner1Signature}} | Partner 2 Signature: {{partner2Signature}}" }] }
        ]
      }
    }
  },
  {
    id: "vendor-agreement",
    slug: "vendor-agreement",
    title: "Vendor Agreement Template",
    description: "Trade contract outlining merchandise quantities, quality controls, and client payouts.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Vendor Services Agreement",
      fields: ["vendorName", "vendorCompany", "vendorAddress", "clientName", "clientCompanyName", "clientAddress", "productsServices", "quantity", "deliverySchedule", "qualityStandards", "contractValue", "paymentTerms", "invoiceSchedule", "confidentialityClause", "terminationClause", "warrantyTerms", "liabilityLimit", "vendorSignature", "clientSignature"],
      layout: {
        header: "VENDOR CONTRACT",
        footer: "This contract defines the supply conditions between Client and Supplier."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#075985"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "VENDOR SERVICES AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Vendor: {{vendorName}} ({{vendorCompany}}) | Address: {{vendorAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} ({{clientCompanyName}}) | Address: {{clientAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Products & Delivery" }] },
          { type: "paragraph", content: [{ type: "text", text: "Services/Goods: {{productsServices}} | Qty: {{quantity}} | Delivery Schedule: {{deliverySchedule}} | Quality Rules: {{qualityStandards}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Payment Terms & Valuation" }] },
          { type: "paragraph", content: [{ type: "text", text: "Value: {{contractValue}} | Terms: {{paymentTerms}} | Invoice Schedule: {{invoiceSchedule}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Legal Terms & Guarantees" }] },
          { type: "paragraph", content: [{ type: "text", text: "Confidentiality: {{confidentialityClause}} | Termination: {{terminationClause}} | Warranty: {{warrantyTerms}} | Liability Cap: {{liabilityLimit}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorizing Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Vendor Signature: {{vendorSignature}} | Client Signature: {{clientSignature}}" }] }
        ]
      }
    }
  },

  {
    id: "business-proposal",
    slug: "business-proposal",
    title: "Business Proposal Template",
    description: "Startups and business project proposal layout pitching products, pricing tiers, and milestones.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Business Proposal",
      fields: ["companyLogo", "companyName", "businessAddress", "contactPerson", "emailAddress", "phoneNumber", "website", "clientName", "clientCompanyName", "clientAddress", "clientEmail", "clientPhone", "proposalTitle", "proposalNumber", "proposalDate", "validUntil", "executiveSummary", "businessOverview", "proposalObjective", "serviceName", "serviceDescription", "deliverables", "serviceCost", "tax", "discount", "totalPrice", "startDate", "completionDate", "milestones", "paymentTerms", "termsConditions", "companySignature", "clientSignature", "signatureDate"],
      layout: {
        header: "BUSINESS PROJECT PROPOSAL",
        footer: "This proposal is subject to pricing validation within the validity period."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#3b82f6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "BUSINESS PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Proposal Title: {{proposalTitle}} | Number: {{proposalNumber}} | Date: {{proposalDate}} | Valid Until: {{validUntil}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Proposed By: {{companyName}} ({{contactPerson}}) | Address: {{businessAddress}} | Contact: {{emailAddress}} | {{phoneNumber}} | {{website}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared For: {{clientName}} ({{clientCompanyName}}) | Address: {{clientAddress}} | Contact: {{clientEmail}} | {{clientPhone}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Executive Summary & Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Executive Summary: {{executiveSummary}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Business Overview: {{businessOverview}} | Objective: {{proposalObjective}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Services & Scope of Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "Service Name: {{serviceName}} | Description: {{serviceDescription}} | Deliverables: {{deliverables}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Estimated Schedule: Start {{startDate}} | Completion {{completionDate}} | Key Milestones: {{milestones}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Pricing & Payment Terms" }] },
          { type: "paragraph", content: [{ type: "text", text: "Cost: {{serviceCost}} | Tax: {{tax}} | Discount: {{discount}} | Total Proposal Investment: {{totalPrice}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Terms: {{paymentTerms}} | General Conditions: {{termsConditions}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Proposal Authorization" }] },
          { type: "paragraph", content: [{ type: "text", text: "Proposer Signature: {{companySignature}} | Client Acceptance: {{clientSignature}} | Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "project-proposal",
    slug: "project-proposal",
    title: "Project Proposal Template",
    description: "Detailed proposal structure detailing project goals, risk analysis, mitigation, resources, and budgets.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Project Proposal",
      fields: ["companyName", "companyLogo", "contactPerson", "clientName", "clientCompanyName", "projectTitle", "projectDescription", "goals", "objectives", "scope", "deliverables", "startDate", "endDate", "milestones", "estimatedCost", "resourcesRequired", "riskAssessment", "mitigationPlan", "proposalSignature", "signatureDate"],
      layout: {
        header: "PROJECT IMPLEMENTATION PROPOSAL",
        footer: "Confidential document for review by client sponsors only."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#0f766e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PROJECT PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Title: {{projectTitle}} | Proposer: {{companyName}} ({{contactPerson}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared For: {{clientName}} ({{clientCompanyName}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope & Core Objectives" }] },
          { type: "paragraph", content: [{ type: "text", text: "Description: {{projectDescription}} | Goals: {{goals}} | Objectives: {{objectives}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Scope: {{scope}} | Deliverables: {{deliverables}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Schedule & Key Milestones" }] },
          { type: "paragraph", content: [{ type: "text", text: "Duration: {{startDate}} to {{endDate}} | Milestones: {{milestones}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Resources & Estimated Budgets" }] },
          { type: "paragraph", content: [{ type: "text", text: "Required Resources: {{resourcesRequired}} | Estimated Total Cost: {{estimatedCost}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Risk Management Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Identified Risks: {{riskAssessment}} | Mitigation Strategy: {{mitigationPlan}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Approvals" }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{proposalSignature}} | Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "marketing-proposal",
    slug: "marketing-proposal",
    title: "Marketing Proposal Template",
    description: "Strategic marketing campaign layout covering SEO, PPC, social channels, and agency fees.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Marketing Proposal",
      fields: ["agencyName", "companyLogo", "contactDetails", "clientName", "clientCompanyName", "campaignName", "objectives", "targetAudience", "marketingChannels", "seoStrategy", "ppcStrategy", "socialMediaStrategy", "emailMarketingStrategy", "contentMarketingStrategy", "monthlyBudget", "adSpend", "agencyFee", "campaignStart", "campaignEnd", "kpiTraffic", "kpiLeads", "kpiSales", "proposalSignature"],
      layout: {
        header: "MARKETING CAMPAIGN PROPOSAL",
        footer: "Proposed KPIs are estimates based on initial market research metrics."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#6d28d9"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CAMPAIGN MARKETING PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Campaign Name: {{campaignName}} | Target: {{targetAudience}} | Channels: {{marketingChannels}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared By: {{agencyName}} ({{contactDetails}}) | Prepared For: {{clientName}} ({{clientCompanyName}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Strategy Overview & Channels" }] },
          { type: "paragraph", content: [{ type: "text", text: "Campaign Objectives: {{objectives}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Search Strategy (SEO): {{seoStrategy}} | Paid Ads (PPC): {{ppcStrategy}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Social Channels: {{socialMediaStrategy}} | Email Campaigns: {{emailMarketingStrategy}} | Content: {{contentMarketingStrategy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Monthly Budget & Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "Monthly Total Budget: {{monthlyBudget}} | Direct Ad Spend: {{adSpend}} | Agency Management Fee: {{agencyFee}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Schedule & KPI Projections" }] },
          { type: "paragraph", content: [{ type: "text", text: "Timeline: {{campaignStart}} to {{campaignEnd}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Target Traffic Growth: {{kpiTraffic}} | Projected Leads: {{kpiLeads}} | Target Sales Conversion: {{kpiSales}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorization Signature" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agency Signature: {{proposalSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "web-design-proposal",
    slug: "web-design-proposal",
    title: "Web Design Proposal Template",
    description: "Creative design proposal for developers showing design styles, CMS setups, timelines, and budgets.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Web Design Proposal",
      fields: ["companyName", "designerName", "website", "clientName", "clientCompanyName", "websiteType", "numberOfPages", "designStyle", "responsiveDesign", "cmsPlatform", "featureContactForm", "featureBlog", "featureEcommerce", "featureSeo", "featureAnalytics", "designPhaseTimeline", "developmentPhaseTimeline", "launchDate", "designCost", "developmentCost", "hostingCost", "maintenanceCost", "proposalSignature"],
      layout: {
        header: "WEBSITE DEVELOPMENT PROPOSAL",
        footer: "Standard design includes 30 days of post-launch technical support."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#be185d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEB DESIGN & DEVELOPMENT PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agency: {{companyName}} (Designer: {{designerName}}) | Portfolio: {{website}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared For: {{clientName}} ({{clientCompanyName}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Website Structure & CMS Platform" }] },
          { type: "paragraph", content: [{ type: "text", text: "Website Type: {{websiteType}} | Pages: {{numberOfPages}} | Style: {{designStyle}} | Responsive Layouts: {{responsiveDesign}} | CMS: {{cmsPlatform}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Key Integration Features" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contact Forms: {{featureContactForm}} | Blog: {{featureBlog}} | E-commerce Store: {{featureEcommerce}} | Built-in SEO: {{featureSeo}} | Analytics: {{featureAnalytics}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Design & Launch Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "Design Phase: {{designPhaseTimeline}} | Development Sprint: {{developmentPhaseTimeline}} | Target Launch: {{launchDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Pricing Breakdowns" }] },
          { type: "paragraph", content: [{ type: "text", text: "Design Work: {{designCost}} | Development: {{developmentCost}} | Annual Hosting: {{hostingCost}} | Monthly Maintenance: {{maintenanceCost}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Authorization Signature" }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{proposalSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "software-development-proposal",
    slug: "software-development-proposal",
    title: "Software Development Proposal Template",
    description: "Detailed tech stack proposal template showing software workflows, databases, discovery, and testing phases.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Software Development Proposal",
      fields: ["companyName", "contactPerson", "clientName", "clientCompanyName", "projectName", "problemStatement", "proposedSolution", "platform", "technologyStack", "database", "apisIntegration", "securityMeasures", "phaseDiscovery", "phaseUiUx", "phaseDevelopment", "phaseTesting", "phaseDeployment", "developmentCost", "supportCost", "startDate", "deliveryDate", "proposalSignature"],
      layout: {
        header: "TECHNICAL SOFTWARE PROPOSAL",
        footer: "Software architectures adhere to OWASP and standard cloud deployment security regulations."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0369a1"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOFTWARE DEVELOPMENT PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Name: {{projectName}} | Proposer: {{companyName}} ({{contactPerson}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared For: {{clientName}} ({{clientCompanyName}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Problem & Proposed Technical Solution" }] },
          { type: "paragraph", content: [{ type: "text", text: "Problem Statement: {{problemStatement}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Proposed Solution: {{proposedSolution}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Technology Stack & Security Architecture" }] },
          { type: "paragraph", content: [{ type: "text", text: "Platform Target: {{platform}} | Tech Stack: {{technologyStack}} | Database: {{database}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "APIs & Integrations: {{apisIntegration}} | Security Standards: {{securityMeasures}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Detailed Phase Execution Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Discovery Phase: {{phaseDiscovery}} | UI/UX Wireframing: {{phaseUiUx}} | Active Development: {{phaseDevelopment}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "QA & Testing: {{phaseTesting}} | Production Deployment: {{phaseDeployment}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Development Timelines & Budgets" }] },
          { type: "paragraph", content: [{ type: "text", text: "Active Project: {{startDate}} to {{deliveryDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dev Cost: {{developmentCost}} | Annual Maintenance Support: {{supportCost}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Proposer Authorization" }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{proposalSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "consulting-proposal",
    slug: "consulting-proposal",
    title: "Consulting Proposal Template",
    description: "Professional consulting strategy layout specifying business challenges, scope of work, and fee structures.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Consulting Proposal",
      fields: ["consultantName", "consultantCompany", "consultantContact", "clientName", "clientCompanyName", "businessChallenge", "objectives", "scopeOfWork", "deliverables", "hourlyRate", "fixedPrice", "expenses", "startDate", "completionDate", "proposalSignature"],
      layout: {
        header: "STRATEGY CONSULTING PROPOSAL",
        footer: "Independent consulting services. Out-of-pocket expenses billed at cost."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "STRATEGIC CONSULTING PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consultant: {{consultantName}} ({{consultantCompany}}) | Contact: {{consultantContact}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared For: {{clientName}} ({{clientCompanyName}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Business Challenge & Core Objectives" }] },
          { type: "paragraph", content: [{ type: "text", text: "Identified Challenge: {{businessChallenge}} | Objectives: {{objectives}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Scope of Work & Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consulting Scope: {{scopeOfWork}} | Key Deliverables: {{deliverables}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Schedule & Project Timelines" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consulting Duration: {{startDate}} to {{completionDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Professional Fees & Expenses" }] },
          { type: "paragraph", content: [{ type: "text", text: "Hourly Consultation: {{hourlyRate}} | Fixed Price Project: {{fixedPrice}} | Reimbursable Expenses: {{expenses}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Acceptance Signature" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consultant Signature: {{proposalSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "digital-marketing-proposal",
    slug: "digital-marketing-proposal",
    title: "Digital Marketing Proposal Template",
    description: "Detailed digital marketing campaign setup showing SEO channels, social ads spend, and lead targets.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Digital Marketing Proposal",
      fields: ["agencyName", "companyLogo", "clientName", "clientWebsite", "seoMarketing", "googleAdsSpend", "metaAdsSpend", "emailMarketingStrategy", "contentMarketingStrategy", "socialMediaManagement", "goalBrandAwareness", "goalLeadGeneration", "goalSales", "goalWebsiteTraffic", "monthlyBudget", "adSpend", "agencyFee", "campaignDuration", "proposalSignature"],
      layout: {
        header: "DIGITAL MARKETING INITIATIVE",
        footer: "Performance target metrics estimates based on initial keyword indices search volume."
      },
      styles: {
        primaryColor: "#ea580c",
        secondaryColor: "#c2410c"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DIGITAL MARKETING SERVICES PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared By: {{agencyName}} (Logo: {{companyLogo}}) | For Client: {{clientName}} (Website: {{clientWebsite}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Marketing Services & Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Search (SEO): {{seoMarketing}} | Google Search Ads: {{googleAdsSpend}} | Meta Social Ads: {{metaAdsSpend}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Email Marketing: {{emailMarketingStrategy}} | Content: {{contentMarketingStrategy}} | Social Management: {{socialMediaManagement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Key Campaign Goals & Performance Metrics" }] },
          { type: "paragraph", content: [{ type: "text", text: "Awareness Target: {{goalBrandAwareness}} | Lead Target: {{goalLeadGeneration}} | Sales Target: {{goalSales}} | Traffic: {{goalWebsiteTraffic}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Retainers & Campaign Timelines" }] },
          { type: "paragraph", content: [{ type: "text", text: "Monthly Total Retainer: {{monthlyBudget}} | Client Direct Ad Spend: {{adSpend}} | Agency Fee: {{agencyFee}} | Period: {{campaignDuration}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Authorization Signature" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agency Signature: {{proposalSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "construction-proposal",
    slug: "construction-proposal",
    title: "Construction Proposal Template",
    description: "Detailed construction and remodeling proposal mapping contractor license, materials, labor, and warranties.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Construction Services Proposal",
      fields: ["companyName", "licenseNumber", "clientName", "propertyAddress", "projectName", "scopeOfWork", "materialsList", "equipmentList", "laborHours", "materialCost", "laborCost", "equipmentCost", "totalCost", "startDate", "endDate", "warrantyDetails", "proposalSignature"],
      layout: {
        header: "BUILD & CONSTRUCTION PROPOSAL",
        footer: "Subject to structural permits, building codes, and inspections."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#047857"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSTRUCTION SERVICES PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contractor: {{companyName}} | License #: {{licenseNumber}} | Project Name: {{projectName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Client: {{clientName}} | Property Address: {{propertyAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Work & Material Spec" }] },
          { type: "paragraph", content: [{ type: "text", text: "Scope of Work: {{scopeOfWork}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Materials Used: {{materialsList}} | Equipment Required: {{equipmentList}} | Est. Labor: {{laborHours}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Cost Estimates & Pricing" }] },
          { type: "paragraph", content: [{ type: "text", text: "Materials Cost: {{materialCost}} | Labor Cost: {{laborCost}} | Equipment Cost: {{equipmentCost}} | Total Estimated Cost: {{totalCost}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Timelines & Structural Warranties" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Sprint: {{startDate}} to {{endDate}} | Contractor Warranty: {{warrantyDetails}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Contractor Signature" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contractor: {{proposalSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "event-proposal",
    slug: "event-proposal",
    title: "Event Proposal Template",
    description: "Structured event planning proposal showing guest counts, catering details, entertainment, and decor.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Event Planning Proposal",
      fields: ["companyName", "eventPlanner", "clientName", "eventName", "eventType", "eventDate", "venueLocation", "expectedGuests", "cateringDetails", "decorationDetails", "entertainmentDetails", "photographyDetails", "venueCost", "cateringCost", "decorationCost", "totalCost", "preparationSchedule", "proposalSignature"],
      layout: {
        header: "EVENT MANAGEMENT PROPOSAL",
        footer: "Catering and venue costs subject to headcount confirmation 14 days prior."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#9d174d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EVENT MANAGEMENT PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Organizer: {{companyName}} (Planner: {{eventPlanner}}) | Client Name: {{clientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Event Name: {{eventName}} | Type: {{eventType}} | Event Date: {{eventDate}} | Venue: {{venueLocation}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Guest Capacity & Event Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "Expected Guests: {{expectedGuests}} | Catering: {{cateringDetails}} | Decor Style: {{decorationDetails}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Entertainment: {{entertainmentDetails}} | Photo/Video: {{photographyDetails}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Cost Estimates & Totals" }] },
          { type: "paragraph", content: [{ type: "text", text: "Venue Booking: {{venueCost}} | Catering: {{cateringCost}} | Decor: {{decorationCost}} | Total Estimated Cost: {{totalCost}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Preparation Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "Preparation Roadmap: {{preparationSchedule}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Organizer Signature" }] },
          { type: "paragraph", content: [{ type: "text", text: "Planner: {{proposalSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "grant-proposal",
    slug: "grant-proposal",
    title: "Grant Proposal Template",
    description: "NGO and non-profit grant request template detailing funding details, objectives, and operational costs.",
    isPremium: true,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Grant Funding Proposal",
      fields: ["organizationName", "registrationNumber", "contactPerson", "contactEmail", "grantTitle", "fundingRequested", "projectOverview", "problemStatement", "objectives", "targetBeneficiaries", "expectedOutcomes", "personnelBudget", "equipmentBudget", "operationalCost", "totalBudget", "startDate", "endDate", "evaluationMetrics", "proposalSignature"],
      layout: {
        header: "GRANT APPLICATION PROPOSAL",
        footer: "Financial audits and registration certificates attached for validation."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#3730a3"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "GRANT APPLICATION PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Grant Title: {{grantTitle}} | Amount Requested: {{fundingRequested}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Applicant: {{organizationName}} (Reg #: {{registrationNumber}}) | Contact: {{contactPerson}} ({{contactEmail}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Problem Statement & Project Overview" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Overview: {{projectOverview}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Problem Statement: {{problemStatement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Objectives, Beneficiaries & Outcomes" }] },
          { type: "paragraph", content: [{ type: "text", text: "Objectives: {{objectives}} | Target Beneficiaries: {{targetBeneficiaries}} | Expected Outcomes: {{expectedOutcomes}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Detailed Budget Breakdown" }] },
          { type: "paragraph", content: [{ type: "text", text: "Personnel: {{personnelBudget}} | Equipment: {{equipmentBudget}} | Operations: {{operationalCost}} | Total Requested Budget: {{totalBudget}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Timelines & Evaluation Metrics" }] },
          { type: "paragraph", content: [{ type: "text", text: "Project Cycle: {{startDate}} to {{endDate}} | Success Metrics: {{evaluationMetrics}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Applicant Signature" }] },
          { type: "paragraph", content: [{ type: "text", text: "Authorized Applicant: {{proposalSignature}}" }] }
        ]
      }
    }
  },

  {
    id: "cover-letter",
    slug: "cover-letter",
    title: "Cover Letter Template",
    description: "Standard job application cover letter detailing experience, motivation, achievements, and target role.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Cover Letter",
      fields: ["fullName", "jobTitle", "senderAddress", "senderCity", "senderState", "senderZip", "senderCountry", "emailAddress", "phoneNumber", "linkedin", "portfolio", "recipientName", "companyName", "companyAddress", "recipientCity", "recipientState", "recipientZip", "letterDate", "letterSubject", "jobPosition", "jobReferenceNumber", "openingParagraph", "introduction", "whyInterested", "skillsExperience", "keyAchievements", "whyGoodFit", "closingParagraph", "complimentaryClosing", "signatureFullName"],
      layout: {
        header: "APPLICATION COVER LETTER",
        footer: "Enclosures: Resume & Professional Portfolio References."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#3b82f6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "Sender: {{fullName}} | {{jobTitle}} | Address: {{senderAddress}}, {{senderCity}}, {{senderState}} {{senderZip}}, {{senderCountry}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contact: {{emailAddress}} | {{phoneNumber}} | LinkedIn: {{linkedin}} | Web: {{portfolio}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{letterDate}} | Subject: {{letterSubject}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Recipient: {{recipientName}} | {{companyName}} | Address: {{companyAddress}}, {{recipientCity}}, {{recipientState}} {{recipientZip}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Re: Application for {{jobPosition}} (Ref: {{jobReferenceNumber}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{openingParagraph}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{introduction}} | {{whyInterested}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{skillsExperience}} | Achievements: {{keyAchievements}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{whyGoodFit}} | {{closingParagraph}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{complimentaryClosing}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "resignation-letter",
    slug: "resignation-letter",
    title: "Resignation Letter Template",
    description: "Formal letter template to notify employer of resignation and specify transition timelines.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Resignation Letter",
      fields: ["fullName", "employeeId", "jobTitle", "department", "companyName", "emailAddress", "phoneNumber", "letterDate", "letterSubject", "managerName", "lastWorkingDay", "noticePeriod", "reasonForResignation", "appreciationMessage", "transitionSupport", "closingMessage", "complimentaryClosing", "signatureFullName"],
      layout: {
        header: "FORMAL RESIGNATION LETTER",
        footer: "Copy filed with Human Resources Department."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "Employee: {{fullName}} (ID: {{employeeId}}) | Title: {{jobTitle}} | Dept: {{department}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company Name: {{companyName}} | Email: {{emailAddress}} | Phone: {{phoneNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{letterDate}} | Subject: {{letterSubject}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{managerName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Please accept this letter as formal notification that I am resigning from my position as {{jobTitle}} at {{companyName}}. My last working day will be {{lastWorkingDay}}, satisfying my {{noticePeriod}} notice period." }] },
          { type: "paragraph", content: [{ type: "text", text: "Reason (Optional): {{reasonForResignation}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Appreciation: {{appreciationMessage}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Transition: {{transitionSupport}} | {{closingMessage}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{complimentaryClosing}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "recommendation-letter",
    slug: "recommendation-letter",
    title: "Recommendation Letter Template",
    description: "Detailed professional reference letter for former employees or academic candidates.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Letter of Recommendation",
      fields: ["fullName", "jobTitle", "companyName", "emailAddress", "phoneNumber", "recipientName", "recipientOrganization", "recipientAddress", "candidateName", "relationship", "durationKnown", "candidateSkills", "candidateAchievements", "candidateStrengths", "candidateWorkEthic", "candidateCharacter", "recommendationStatement", "complimentaryClosing", "signatureFullName", "recommenderContactInfo"],
      layout: {
        header: "RECOMMENDATION LETTER",
        footer: "Shared in confidence for candidate evaluation only."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "Recommender: {{fullName}} | {{jobTitle}} at {{companyName}} | {{emailAddress}} | {{phoneNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Recipient: {{recipientName}} | {{recipientOrganization}} | Address: {{recipientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "It is my pleasure to recommend {{candidateName}} for your program or organization. I have known them in my capacity as {{relationship}} for a duration of {{durationKnown}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "Skills & Achievements: {{candidateSkills}} | Achievements: {{candidateAchievements}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Strengths & Ethic: {{candidateStrengths}} | Work Ethic: {{candidateWorkEthic}} | Character: {{candidateCharacter}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recommendationStatement}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{complimentaryClosing}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{signatureFullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contact Info: {{recommenderContactInfo}}" }] }
        ]
      }
    }
  },
  {
    id: "offer-letter",
    slug: "offer-letter",
    title: "Offer Letter Template",
    description: "Formal hiring offer letter template mapping compensation, reporting lines, benefit details, and deadlines.",
    isPremium: true,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Employment Offer Letter",
      fields: ["companyLogo", "companyName", "companyAddress", "hrManagerName", "candidateFullName", "candidateAddress", "candidateEmail", "jobPosition", "department", "employmentType", "startDate", "salary", "workingHours", "reportingManager", "benefitsPackage", "probationPeriod", "noticePeriod", "acceptanceDeadline", "hrSignature", "candidateSignature", "signatureDate"],
      layout: {
        header: "OFFER OF EMPLOYMENT",
        footer: "Subject to background reference verifications. Acme is an equal opportunity employer."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1d4ed8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EMPLOYMENT OFFER LETTER" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} (Logo: {{companyLogo}}) | Address: {{companyAddress}} | Manager: {{hrManagerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Candidate: {{candidateFullName}} | Address: {{candidateAddress}} | Email: {{candidateEmail}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Position, Schedule & Reporting" }] },
          { type: "paragraph", content: [{ type: "text", text: "Position Offered: {{jobPosition}} | Department: {{department}} | Status: {{employmentType}} | Start Date: {{startDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Reporting Manager: {{reportingManager}} | Working Hours: {{workingHours}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Remuneration & Benefits" }] },
          { type: "paragraph", content: [{ type: "text", text: "Base Salary: {{salary}} | Benefits: {{benefitsPackage}} | Probation: {{probationPeriod}} | Notice Period: {{noticePeriod}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Acceptance & Authorization" }] },
          { type: "paragraph", content: [{ type: "text", text: "This offer is valid until {{acceptanceDeadline}}. To accept, please sign and return." }] },
          { type: "paragraph", content: [{ type: "text", text: "HR Signature: {{hrSignature}} | Candidate Acceptance: {{candidateSignature}} | Date: {{signatureDate}}" }] }
        ]
      }
    }
  },
  {
    id: "business-letter",
    slug: "business-letter",
    title: "Business Letter Template",
    description: "Classic corporate formal letter structure for official communications, inquiries, and announcements.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Business Letter",
      fields: ["companyName", "contactPerson", "senderAddress", "emailAddress", "phoneNumber", "recipientName", "recipientCompany", "recipientAddress", "letterDate", "letterSubject", "referenceNumber", "letterOpening", "letterPurpose", "mainContent", "letterClosing", "complimentaryClosing", "signatureFullName", "designation"],
      layout: {
        header: "BUSINESS CORRESPONDENCE",
        footer: "Official document of the sender corporation."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#475569"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "Sender: {{companyName}} ({{contactPerson}}) | Address: {{senderAddress}} | Contact: {{emailAddress}} | {{phoneNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Recipient: {{recipientName}} ({{recipientCompany}}) | Address: {{recipientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{letterDate}} | Subject: {{letterSubject}} | Ref: {{referenceNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterOpening}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Purpose: {{letterPurpose}} | Content: {{mainContent}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterClosing}} | {{complimentaryClosing}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{signatureFullName}} | Title: {{designation}}" }] }
        ]
      }
    }
  },
  {
    id: "complaint-letter",
    slug: "complaint-letter",
    title: "Complaint Letter Template",
    description: "Formal complaint layout documenting transactional order issues, damaged goods, or service disruptions.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Complaint Letter",
      fields: ["fullName", "senderAddress", "emailAddress", "phoneNumber", "companyName", "customerServiceDept", "recipientAddress", "orderNumber", "purchaseDate", "productServiceName", "issueDescription", "resolutionRequested", "complimentaryClosing", "signatureFullName", "letterDate"],
      layout: {
        header: "FORMAL COMPLAINT RECORD",
        footer: "Requires a formal response within 14 business days."
      },
      styles: {
        primaryColor: "#be123c",
        secondaryColor: "#881337"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "Sender: {{fullName}} | Address: {{senderAddress}} | Email: {{emailAddress}} | Phone: {{phoneNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "To: {{companyName}} ({{customerServiceDept}}) | Address: {{recipientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{letterDate}} | Re: Service/Product Complaint" }] },
          { type: "paragraph", content: [{ type: "text", text: "Order Details: Order #: {{orderNumber}} | Date of Purchase: {{purchaseDate}} | Item: {{productServiceName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear Customer Support," }] },
          { type: "paragraph", content: [{ type: "text", text: "Issue: {{issueDescription}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Resolution Requested: {{resolutionRequested}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{complimentaryClosing}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "thank-you-letter",
    slug: "thank-you-letter",
    title: "Thank You Letter Template",
    description: "Appreciation and gratitude letter structure for business partners, recruiters, or networking mentors.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Thank You Letter",
      fields: ["fullName", "senderAddress", "emailAddress", "recipientName", "recipientCompany", "recipientAddress", "letterDate", "letterSubject", "appreciationMessage", "reasonForGratitude", "futureRelationship", "complimentaryClosing", "signatureFullName"],
      layout: {
        header: "LETTER OF APPRECIATION",
        footer: "With sincere thanks and professional regards."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#047857"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "Sender: {{fullName}} | Address: {{senderAddress}} | Email: {{emailAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Recipient: {{recipientName}} ({{recipientCompany}}) | Address: {{recipientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{letterDate}} | Subject: {{letterSubject}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{appreciationMessage}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Reason for Gratitude: {{reasonForGratitude}} | Future Outlook: {{futureRelationship}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{complimentaryClosing}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "request-letter",
    slug: "request-letter",
    title: "Request Letter Template",
    description: "Formal letter layout requesting records, permissions, budget reviews, or project sponsorships.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Formal Request Letter",
      fields: ["fullName", "senderAddress", "contactDetails", "recipientName", "recipientOrganization", "recipientAddress", "requestType", "purposeOfRequest", "reasonForRequest", "supportingInformation", "complimentaryClosing", "signatureFullName", "letterDate"],
      layout: {
        header: "FORMAL REQUEST FOR ACTION",
        footer: "Supporting documentation attached where applicable."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#3730a3"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "Sender: {{fullName}} | Address: {{senderAddress}} | Contact: {{contactDetails}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "To: {{recipientName}} | Organization: {{recipientOrganization}} | Address: {{recipientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{letterDate}} | Subject: Request for {{requestType}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Request Type: {{requestType}} | Purpose: {{purposeOfRequest}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Reason: {{reasonForRequest}} | Supporting Details: {{supportingInformation}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{complimentaryClosing}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Signature: {{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "appointment-letter",
    slug: "appointment-letter",
    title: "Appointment Letter Template",
    description: "Official job appointment letter outlining onboarding instructions, reporting dates, and compensation details.",
    isPremium: true,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Onboarding Appointment Letter",
      fields: ["companyLogo", "companyName", "hrManagerName", "employeeName", "employeeAddress", "employeeEmail", "jobPosition", "department", "startDate", "salary", "workLocation", "workingHours", "reportingManager", "employmentType", "probationPeriod", "leavePolicy", "hrSignature", "employeeSignature", "letterDate"],
      layout: {
        header: "APPOINTMENT CONFIRMATION",
        footer: "Please return signed duplicate copy to HR department upon onboarding."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0369a1"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "OFFICIAL APPOINTMENT LETTER" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} (Logo: {{companyLogo}}) | HR Rep: {{hrManagerName}} | Date: {{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Employee Appointee: {{employeeName}} | Address: {{employeeAddress}} | Email: {{employeeEmail}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Position details & Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "Role: {{jobPosition}} | Department: {{department}} | Status: {{employmentType}} | Location: {{workLocation}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Reporting Manager: {{reportingManager}} | Schedule: {{workingHours}} | Start Date: {{startDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Remuneration, Leave & Probation" }] },
          { type: "paragraph", content: [{ type: "text", text: "Salary: {{salary}} | Probation: {{probationPeriod}} | Leave Policy: {{leavePolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Agreement & Signatures" }] },
          { type: "paragraph", content: [{ type: "text", text: "HR Signature: {{hrSignature}} | Appointee Signature: {{employeeSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "experience-letter",
    slug: "experience-letter",
    title: "Experience Letter Template",
    description: "Official work experience certification template confirming tenure, titles, and performance quality.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Work Experience Certificate",
      fields: ["companyLogo", "companyName", "companyAddress", "employeeName", "employeeId", "jobTitle", "department", "joiningDate", "lastWorkingDate", "totalExperience", "responsibilities", "performanceSummary", "hrName", "designation", "companySeal", "hrSignature", "letterDate"],
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
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WORK EXPERIENCE CERTIFICATE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Company: {{companyName}} (Logo: {{companyLogo}}) | Address: {{companyAddress}} | Date: {{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "This is to certify that appointee {{employeeName}} (ID: {{employeeId}}) was employed with {{companyName}} in the capacity of {{jobTitle}} in the {{department}} Department." }] },
          { type: "paragraph", content: [{ type: "text", text: "Tenure: Joining Date: {{joiningDate}} | Last Working Date: {{lastWorkingDate}} | Total Experience: {{totalExperience}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Key Responsibilities: {{responsibilities}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Performance Review: {{performanceSummary}} | Seal: {{companySeal}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "HR Representative: {{hrName}} ({{designation}}) | Signature: {{hrSignature}}" }] }
        ]
      }
    }
  }

];