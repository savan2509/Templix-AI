// 40 New High-Intent 2026 Templates (5 per Category across all 8 Categories)
// Invoices, Resumes, Contracts, Proposals, Letters, Reports, Business Plans, Quotations

export const trending2026Templates = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. INVOICES (5 Templates)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "invoice-subscription-saas",
    slug: "invoice-subscription-saas",
    title: "SaaS & Cloud Software Subscription Invoice",
    description: "Itemize recurring user seats, API consumption tiers, and enterprise cloud software subscription billing.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "SaaS Subscription Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "dueDate", "subscriptionPlan", "billingCycle",
        "companyName", "companyAddress", "companyEmail", "clientName", "clientCompanyName", "clientAddress",
        "seatCount", "seatRate", "seatsSubtotal", "apiOverages", "subtotal", "taxPercent", "taxAmount", "total",
        "paymentMethod", "paymentLink"
      ],
      layout: { header: "RECURRING SAAS SUBSCRIPTION INVOICE", footer: "Thank you for subscribing to our cloud platform." },
      styles: { primaryColor: "#2563eb", secondaryColor: "#1e40af", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CLOUD SUBSCRIPTION INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due Date: {{dueDate}} | Plan: {{subscriptionPlan}} ({{billingCycle}})" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Provider: " },
            { type: "text", text: "{{companyName}}, {{companyAddress}} ({{companyEmail}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Subscriber: " },
            { type: "text", text: "{{clientName}}, {{clientCompanyName}}, {{clientAddress}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Subscription Line Items" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Plan / Feature" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Quantity" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Unit Rate" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Enterprise User Seats" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{seatCount}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{seatRate}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{seatsSubtotal}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "API Query & Compute Overages" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{apiOverages}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{apiOverages}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Tax ({{taxPercent}}): {{taxAmount}} | Total Due: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Method: {{paymentMethod}} | Instant Payment URL: {{paymentLink}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-event-planner",
    slug: "invoice-event-planner",
    title: "Event Planner & Wedding Coordinator Invoice",
    description: "Itemize venue coordination, vendor management, floral production, and day-of event staffing fees.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Event Planning & Coordination Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "dueDate", "eventName", "eventDate", "venueLocation",
        "plannerName", "plannerAddress", "plannerEmail", "clientName", "clientAddress",
        "coordinationFee", "vendorMgmtFee", "staffingFee", "subtotal", "taxPercent", "taxAmount", "total", "paymentTerms"
      ],
      layout: { header: "EVENT PRODUCTION & COORDINATION INVOICE", footer: "Thank you for letting us orchestrate your special event." },
      styles: { primaryColor: "#ec4899", secondaryColor: "#be185d", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EVENT COORDINATION INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due: {{dueDate}} | Event: {{eventName}} ({{eventDate}} at {{venueLocation}})" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Event Producer: " },
            { type: "text", text: "{{plannerName}}, {{plannerAddress}} ({{plannerEmail}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client: " },
            { type: "text", text: "{{clientName}}, {{clientAddress}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Event Services & Line Items" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Service Description" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Principal Event Planning & Production Management" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{coordinationFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Vendor Coordination & Vendor Liaison Services" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{vendorMgmtFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Day-Of Event Lead Coordinators & Assistant Staff" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{staffingFee}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Tax: {{taxAmount}} | Total Balance Due: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Terms: {{paymentTerms}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-fitness-trainer",
    slug: "invoice-fitness-trainer",
    title: "Personal Fitness Trainer & Gym Coaching Invoice",
    description: "Bill private training sessions, workout program design, and custom dietary consultation packages.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Personal Fitness Training Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "dueDate", "trainerName", "trainerAddress", "trainerPhone",
        "clientName", "sessionCount", "sessionRate", "dietPlanFee", "subtotal", "taxPercent", "taxAmount", "total", "paymentMethod"
      ],
      layout: { header: "PERSONAL FITNESS & COACHING INVOICE", footer: "Dedicated to your health and wellness goals." },
      styles: { primaryColor: "#10b981", secondaryColor: "#047857", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FITNESS COACHING INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due: {{dueDate}}" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Trainer: " },
            { type: "text", text: "{{trainerName}}, {{trainerAddress}} ({{trainerPhone}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client: " },
            { type: "text", text: "{{clientName}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Coaching Sessions & Programs" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Sessions" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "1-on-1 Personal Training Sessions" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{sessionCount}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{sessionRate}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{coachingFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Customized Nutrition & Macro Meal Plan" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "1" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{dietPlanFee}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{dietPlanFee}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Total Balance Due: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Accepted Payment: {{paymentMethod}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-subcontractor-construction",
    slug: "invoice-subcontractor-construction",
    title: "Subcontractor Construction & Trade Labor Invoice",
    description: "Itemize trade craft hours, heavy equipment rentals, materials, and jobsite milestone releases.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Construction Subcontractor Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "dueDate", "jobsiteAddress", "generalContractor", "tradeSpecialty",
        "subcontractorName", "subcontractorAddress", "laborHours", "laborRate", "laborCost", "materialsCost",
        "equipmentCost", "subtotal", "taxAmount", "total", "lienWaiverStatus"
      ],
      layout: { header: "SUBCONTRACTOR TRADE INVOICE", footer: "Conditional lien waiver attached upon payment receipt." },
      styles: { primaryColor: "#d97706", secondaryColor: "#b45309", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CONSTRUCTION TRADE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due: {{dueDate}} | Project Site: {{jobsiteAddress}}" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Subcontractor: " },
            { type: "text", text: "{{subcontractorName}}, {{subcontractorAddress}} (Trade: {{tradeSpecialty}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "General Contractor: " },
            { type: "text", text: "{{generalContractor}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Labor & Materials Breakdown" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Quantity/Hours" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Skilled Trade Field Labor" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{laborHours}} hrs" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{laborRate}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{laborCost}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Jobsite Materials & Supplies" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 Lot" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{materialsCost}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{materialsCost}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Total Balance Due: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Lien Waiver Status: {{lienWaiverStatus}}" }] }
        ]
      }
    }
  },
  {
    id: "invoice-freelance-translator",
    slug: "invoice-freelance-translator",
    title: "Freelance Translator & Localization Invoice",
    description: "Itemize per-word document translation, localization QA testing, and certified legal proofreading.",
    isPremium: false,
    categorySlug: "invoices",
    categoryName: "Invoices",
    content: {
      title: "Translation & Localization Invoice",
      fields: [
        "invoiceNumber", "invoiceDate", "dueDate", "sourceLanguage", "targetLanguage", "documentTitle",
        "translatorName", "translatorAddress", "translatorEmail", "clientName", "clientAddress",
        "wordCount", "ratePerWord", "translationFee", "proofreadingFee", "subtotal", "taxAmount", "total", "paymentMethod"
      ],
      layout: { header: "CERTIFIED TRANSLATION & LOCALIZATION INVOICE", footer: "Professional linguistic accuracy guaranteed." },
      styles: { primaryColor: "#6366f1", secondaryColor: "#4338ca", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "TRANSLATION SERVICE INVOICE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Invoice #: {{invoiceNumber}} | Date: {{invoiceDate}} | Due: {{dueDate}} | Pair: {{sourceLanguage}} → {{targetLanguage}}" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Linguist: " },
            { type: "text", text: "{{translatorName}}, {{translatorAddress}} ({{translatorEmail}})" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client: " },
            { type: "text", text: "{{clientName}}, {{clientAddress}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Document Translation Line Items" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Deliverable / File" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Words" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Per Word" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Document Localization: {{documentTitle}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{wordCount}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{ratePerWord}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{translationFee}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Linguistic QA & Certified Proofreading" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "1 File" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{proofreadingFee}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{proofreadingFee}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Total Balance Due: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment Rails: {{paymentMethod}}" }] }
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. RESUMES & CVS (5 Templates)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "resume-cybersecurity-analyst",
    slug: "resume-cybersecurity-analyst",
    title: "Cybersecurity Analyst & SOC Engineer Resume",
    description: "Single-column ATS resume tailored for threat hunting, incident response, SIEM telemetry, and vulnerability remediation.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Cybersecurity Analyst Resume",
      fields: [
        "fullName", "jobTitle", "email", "phone", "location", "linkedinUrl",
        "professionalSummary", "skillsList", "experienceCompany1", "experienceRole1", "experienceDates1", "experienceBullets1",
        "educationDegree", "educationSchool", "certificationsList"
      ],
      layout: { header: "CYBERSECURITY & THREAT INTELLIGENCE SPECIALIST", footer: "Security Cleared • ATS Parse Verified" },
      styles: { primaryColor: "#0f172a", secondaryColor: "#334155", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}} | {{linkedinUrl}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{professionalSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Core Technical Competencies" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{skillsList}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Security Engineering Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{experienceRole1}} — {{experienceCompany1}} ({{experienceDates1}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{experienceBullets1}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Certifications & Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{certificationsList}} | {{educationDegree}}, {{educationSchool}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-ai-prompt-engineer",
    slug: "resume-ai-prompt-engineer",
    title: "AI & Machine Learning Prompt Engineer Resume",
    description: "Showcase LLM evaluation, RAG pipeline integration, few-shot prompting, and model fine-tuning achievements.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "AI Prompt Engineer Resume",
      fields: [
        "fullName", "jobTitle", "email", "phone", "location", "githubUrl",
        "professionalSummary", "aiSkills", "experienceCompany1", "experienceRole1", "experienceDates1", "experienceBullets1",
        "educationDegree", "educationSchool"
      ],
      layout: { header: "AI SYSTEMS & PROMPT ARCHITECT", footer: "Vector Embeddings • RAG Pipeline Expert" },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#5b21b6", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}} | {{githubUrl}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Professional Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{professionalSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "AI & LLM Skill Set" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{aiSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Prompt Engineering & RAG Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{experienceRole1}} — {{experienceCompany1}} ({{experienceDates1}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{experienceBullets1}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{educationDegree}}, {{educationSchool}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-clinical-pharmacist",
    slug: "resume-clinical-pharmacist",
    title: "Clinical Pharmacist & Healthcare Specialist Resume",
    description: "Format clinical pharmacology rotations, drug therapy monitoring, patient counseling, and state pharmacy board licensure.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Clinical Pharmacist Resume",
      fields: [
        "fullName", "jobTitle", "email", "phone", "location", "licenseNumber",
        "professionalSummary", "clinicalSkills", "experienceCompany1", "experienceRole1", "experienceDates1", "experienceBullets1",
        "pharmacyDegree", "pharmacySchool"
      ],
      layout: { header: "DOCTOR OF PHARMACY (PHARMD)", footer: "State Board Licensed • HIPAA Compliant" },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}, PharmD" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | License #: {{licenseNumber}} | {{email}} | {{phone}} | {{location}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Clinical Practice Profile" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{professionalSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Pharmacotherapy & Clinical Skills" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{clinicalSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Hospital & Clinical Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{experienceRole1}} — {{experienceCompany1}} ({{experienceDates1}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{experienceBullets1}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Doctor of Pharmacy Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{pharmacyDegree}}, {{pharmacySchool}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-executive-chef",
    slug: "resume-executive-chef",
    title: "Executive Chef & Culinary Director Resume",
    description: "Highlight kitchen team leadership, seasonal menu design, food cost control, and fine-dining guest satisfaction.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Executive Chef Resume",
      fields: [
        "fullName", "jobTitle", "email", "phone", "location", "portfolioUrl",
        "professionalSummary", "culinarySkills", "experienceCompany1", "experienceRole1", "experienceDates1", "experienceBullets1",
        "culinaryDegree", "culinarySchool"
      ],
      layout: { header: "EXECUTIVE CULINARY LEADER", footer: "ServSafe Certified Master Chef" },
      styles: { primaryColor: "#854d0e", secondaryColor: "#713f12", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | {{email}} | {{phone}} | {{location}} | {{portfolioUrl}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Culinary Leadership Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{professionalSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Culinary & Kitchen Management Expertise" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{culinarySkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Culinary Leadership Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{experienceRole1}} — {{experienceCompany1}} ({{experienceDates1}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{experienceBullets1}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Culinary Arts Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{culinaryDegree}}, {{culinarySchool}}" }] }
        ]
      }
    }
  },
  {
    id: "resume-civil-site-engineer",
    slug: "resume-civil-site-engineer",
    title: "Civil Site Engineer & Construction Manager Resume",
    description: "Format structural inspections, civil grading, OSHA jobsite safety, CAD design, and subcontractor management.",
    isPremium: false,
    categorySlug: "resumes",
    categoryName: "Resumes & CVs",
    content: {
      title: "Civil Site Engineer Resume",
      fields: [
        "fullName", "jobTitle", "email", "phone", "location", "peLicense",
        "professionalSummary", "engineeringSkills", "experienceCompany1", "experienceRole1", "experienceDates1", "experienceBullets1",
        "engineeringDegree", "engineeringSchool"
      ],
      layout: { header: "PROFESSIONAL CIVIL & STRUCTURAL ENGINEER", footer: "OSHA 30 Certified • Licensed Professional Engineer" },
      styles: { primaryColor: "#475569", secondaryColor: "#334155", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{fullName}}, PE" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}} | PE License: {{peLicense}} | {{email}} | {{phone}} | {{location}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Engineering Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{professionalSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Civil & Structural Engineering Skills" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{engineeringSkills}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Project & Site Engineering Experience" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "{{experienceRole1}} — {{experienceCompany1}} ({{experienceDates1}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{experienceBullets1}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Education" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{engineeringDegree}}, {{engineeringSchool}}" }] }
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. CONTRACTS (5 Templates)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "contract-ai-licensing-agreement",
    slug: "contract-ai-licensing-agreement",
    title: "AI & Machine Learning Model Licensing Agreement",
    description: "Define proprietary weights licensing, zero-data retention clauses, API compute usage rights, and IP protection.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "AI Model Licensing Agreement",
      fields: [
        "agreementDate", "licensorName", "licensorAddress", "licenseeName", "licenseeAddress",
        "modelName", "licenseScope", "retentionTerms", "licenseFee", "governingLaw"
      ],
      layout: { header: "ARTIFICIAL INTELLIGENCE MODEL LICENSE", footer: "Strict Zero-Data Retention & IP Warranty" },
      styles: { primaryColor: "#4338ca", secondaryColor: "#3730a3", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "AI MODEL LICENSING AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{agreementDate}}, by and between {{licensorName}} (\"Licensor\") and {{licenseeName}} (\"Licensee\")." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Grant of License" }] },
          { type: "paragraph", content: [{ type: "text", text: "Licensor grants Licensee a non-exclusive, worldwide license to integrate and deploy model weights and API endpoints for {{modelName}} subject to {{licenseScope}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Zero-Data Retention & Privacy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Licensor warrants that all inference queries submitted by Licensee shall be processed with strict zero-data retention: {{retentionTerms}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "Licensee agrees to pay the license fee of {{licenseFee}}. This agreement is governed by the laws of {{governingLaw}}." }] }
        ]
      }
    }
  },
  {
    id: "contract-influencer-brand-deal",
    slug: "contract-influencer-brand-deal",
    title: "Influencer & Brand Sponsorship Contract",
    description: "Stipulate post deliverables, content approval schedules, FTC disclosure compliance, and exclusivity windows.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Influencer Sponsorship Agreement",
      fields: [
        "contractDate", "brandName", "brandAddress", "influencerName", "influencerHandle",
        "deliverableScope", "postSchedule", "exclusivityPeriod", "compensationFee", "ftcComplianceClause"
      ],
      layout: { header: "INFLUENCER MARKETING & SPONSORSHIP CONTRACT", footer: "FTC Endorsement Compliant Agreement" },
      styles: { primaryColor: "#db2777", secondaryColor: "#9d174d", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "BRAND SPONSORSHIP AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{contractDate}} | Brand: {{brandName}} | Creator: {{influencerName}} (@{{influencerHandle}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Deliverables & Posting Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Influencer agrees to produce and publish the following sponsored content: {{deliverableScope}} in accordance with {{postSchedule}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Exclusivity & FTC Disclosures" }] },
          { type: "paragraph", content: [{ type: "text", text: "During the {{exclusivityPeriod}} exclusivity window, Creator will not promote competing products. All posts must include {{ftcComplianceClause}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Compensation" }] },
          { type: "paragraph", content: [{ type: "text", text: "Brand will compensate Influencer the total fee of {{compensationFee}} following content approval and publication." }] }
        ]
      }
    }
  },
  {
    id: "contract-sublease-commercial",
    slug: "contract-sublease-commercial",
    title: "Commercial Office Sublease Agreement",
    description: "Define office space premises, shared utility apportionment, security deposit escrow, and master lease compliance.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Commercial Office Sublease Agreement",
      fields: [
        "subleaseDate", "sublessorName", "subtenantName", "propertyAddress", "suiteNumber",
        "termStart", "termEnd", "monthlyRent", "securityDeposit", "utilityShare"
      ],
      layout: { header: "COMMERCIAL OFFICE SUBLEASE", footer: "Subject to Master Lease Agreement" },
      styles: { primaryColor: "#334155", secondaryColor: "#1e293b", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COMMERCIAL SUBLEASE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Executed on {{subleaseDate}} by {{sublessorName}} (\"Sublessor\") and {{subtenantName}} (\"Subtenant\")." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Premises & Lease Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sublessor leases Suite {{suiteNumber}} located at {{propertyAddress}} commencing {{termStart}} and expiring {{termEnd}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Rent & Security Deposit" }] },
          { type: "paragraph", content: [{ type: "text", text: "Monthly rent is {{monthlyRent}} due on the 1st of each calendar month. Subtenant deposits {{securityDeposit}} as a damage bond." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Shared Utilities & Building Rules" }] },
          { type: "paragraph", content: [{ type: "text", text: "Subtenant will pay {{utilityShare}} of monthly internet, electrical, and janitorial maintenance charges." }] }
        ]
      }
    }
  },
  {
    id: "contract-photography-session",
    slug: "contract-photography-session",
    title: "Portrait & Commercial Photography Service Agreement",
    description: "Cover session shoot hours, image copyright licenses, print release limits, and non-refundable deposit terms.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Photography Service Agreement",
      fields: [
        "agreementDate", "photographerName", "clientName", "shootDate", "shootLocation",
        "packageDetails", "depositAmount", "finalBalance", "copyrightTerms"
      ],
      layout: { header: "PHOTOGRAPHY SERVICE & IP CONTRACT", footer: "Images Protected by Copyright Law" },
      styles: { primaryColor: "#475569", secondaryColor: "#1e293b", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PHOTOGRAPHY SERVICE CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{agreementDate}} | Photographer: {{photographerName}} | Client: {{clientName}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Session Scope & Location" }] },
          { type: "paragraph", content: [{ type: "text", text: "The photo shoot will take place on {{shootDate}} at {{shootLocation}} including: {{packageDetails}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Fees & Retainer" }] },
          { type: "paragraph", content: [{ type: "text", text: "A non-refundable retainer of {{depositAmount}} reserves the date. The remaining balance of {{finalBalance}} is due on the shoot day." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Copyright & Reproduction Rights" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{copyrightTerms}}." }] }
        ]
      }
    }
  },
  {
    id: "contract-co-founder-equity-vesting",
    slug: "contract-co-founder-equity-vesting",
    title: "Startup Co-Founder Equity Vesting Agreement",
    description: "Structure 4-year equity vesting, 1-year cliff, intellectual property assignment, and founder departure buyout rights.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Co-Founder Equity Vesting Agreement",
      fields: [
        "effectiveDate", "startupName", "founder1Name", "founder2Name",
        "equitySplit", "vestingSchedule", "cliffPeriod", "ipAssignmentClause", "governingLaw"
      ],
      layout: { header: "FOUNDERS' EQUITY VESTING AGREEMENT", footer: "Standard 4-Year Vesting with 1-Year Cliff" },
      styles: { primaryColor: "#1e3a8a", secondaryColor: "#172554", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CO-FOUNDER EQUITY & VESTING AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Effective {{effectiveDate}}, between {{founder1Name}} and {{founder2Name}} as co-founders of {{startupName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Equity Allocation & Vesting" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founders agree to an initial equity split of {{equitySplit}}, subject to a {{vestingSchedule}} vesting schedule with a {{cliffPeriod}} cliff." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Intellectual Property Assignment" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{ipAssignmentClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Departure & Buyback Rights" }] },
          { type: "paragraph", content: [{ type: "text", text: "Unvested equity is subject to automatic company repurchase. Governed under the laws of {{governingLaw}}." }] }
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. PROPOSALS (5 Templates)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "proposal-cybersecurity-audit",
    slug: "proposal-cybersecurity-audit",
    title: "Cybersecurity Penetration Testing & Audit Proposal",
    description: "Pitch vulnerability scanning, penetration testing, compliance remediation, and executive security roadmaps.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Cybersecurity Audit & Pen-Test Proposal",
      fields: [
        "proposalDate", "securityFirm", "clientCompany", "auditScope", "testingMethodology",
        "timelineWeeks", "investmentAmount", "deliverablesList"
      ],
      layout: { header: "ENTERPRISE CYBERSECURITY ASSESSMENT PROPOSAL", footer: "Confidential Security Audit Pitch" },
      styles: { primaryColor: "#0f172a", secondaryColor: "#1e293b", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CYBERSECURITY ASSESSMENT PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Prepared by: {{securityFirm}} | Prepared for: {{clientCompany}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Executive Assessment Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{auditScope}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Testing Methodology & Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Methodology: {{testingMethodology}} | Estimated Completion: {{timelineWeeks}} weeks." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Deliverables & Investment" }] },
          { type: "paragraph", content: [{ type: "text", text: "Deliverables: {{deliverablesList}} | Total Investment: {{investmentAmount}}" }] }
        ]
      }
    }
  },
  {
    id: "proposal-podcast-sponsorship",
    slug: "proposal-podcast-sponsorship",
    title: "Podcast & Media Sponsorship Pitch Proposal",
    description: "Present audience demographics, monthly download metrics, dynamic ad insertion rates, and host-read sponsor packages.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Podcast Sponsorship Media Kit Proposal",
      fields: [
        "proposalDate", "podcastName", "hostName", "monthlyDownloads", "audienceDemographics",
        "sponsorBrand", "packageOption1", "packageOption2", "totalSponsorshipRate"
      ],
      layout: { header: "PODCAST ADVERTISING & MEDIA PROPOSAL", footer: "Reach an engaged, high-intent audience" },
      styles: { primaryColor: "#9333ea", secondaryColor: "#7e22ce", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{podcastName}} — Sponsorship Proposal" }] },
          { type: "paragraph", content: [{ type: "text", text: "Host: {{hostName}} | Prepared for: {{sponsorBrand}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Audience Reach & Metrics" }] },
          { type: "paragraph", content: [{ type: "text", text: "Monthly Listener Base: {{monthlyDownloads}} downloads | Key Demographic: {{audienceDemographics}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Sponsorship Packages & Placements" }] },
          { type: "paragraph", content: [{ type: "text", text: "Package A (Pre-Roll + Mid-Roll): {{packageOption1}} | Package B (Dedicated Episode Feature): {{packageOption2}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total Sponsorship Investment: {{totalSponsorshipRate}}" }] }
        ]
      }
    }
  },
  {
    id: "proposal-commercial-interior-design",
    slug: "proposal-commercial-interior-design",
    title: "Commercial & Office Interior Architecture Proposal",
    description: "Propose space planning, 3D architectural rendering, ergonomic FF&E procurement, and renovation supervision.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Commercial Interior Design Proposal",
      fields: [
        "proposalDate", "designFirm", "clientCompany", "facilitySquareFootage",
        "designConcept", "phasesRoadmap", "designFee", "estimatedBudget"
      ],
      layout: { header: "COMMERCIAL WORKSPACE DESIGN PROPOSAL", footer: "Innovative, functional workspace architecture." },
      styles: { primaryColor: "#78716c", secondaryColor: "#44403c", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "OFFICE INTERIOR DESIGN PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Architect: {{designFirm}} | Client: {{clientCompany}} | Date: {{proposalDate}} | Area: {{facilitySquareFootage}} sq. ft." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Design Concept & Space Planning" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{designConcept}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Project Phases & Implementation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{phasesRoadmap}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Professional Design Fee: {{designFee}} | Projected FF&E Budget: {{estimatedBudget}}" }] }
        ]
      }
    }
  },
  {
    id: "proposal-saas-implementation",
    slug: "proposal-saas-implementation",
    title: "Enterprise SaaS Cloud Migration & Implementation Proposal",
    description: "Detail data migration pipelines, custom API integrations, employee change management, and phased cutover schedules.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "SaaS Cloud Implementation Proposal",
      fields: [
        "proposalDate", "consultancyName", "enterpriseClient", "currentArchitecture",
        "targetSolution", "migrationPhases", "implementationFee", "goLiveDate"
      ],
      layout: { header: "ENTERPRISE CLOUD IMPLEMENTATION PROPOSAL", footer: "Seamless SaaS Migration & User Adoption" },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SAAS CLOUD IMPLEMENTATION PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Consultant: {{consultancyName}} | Enterprise Client: {{enterpriseClient}} | Date: {{proposalDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Current State & Cloud Architecture" }] },
          { type: "paragraph", content: [{ type: "text", text: "Legacy Baseline: {{currentArchitecture}} | Target Architecture: {{targetSolution}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Migration Roadmap & Milestone Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{migrationPhases}} | Projected Go-Live Target: {{goLiveDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Fixed Implementation Fee: {{implementationFee}}" }] }
        ]
      }
    }
  },
  {
    id: "proposal-event-management",
    slug: "proposal-event-management",
    title: "Corporate Summit & Gala Event Production Proposal",
    description: "Pitch keynote stage management, audiovisual livestreaming, catering coordination, and attendee registration logistics.",
    isPremium: false,
    categorySlug: "proposals",
    categoryName: "Proposals",
    content: {
      title: "Corporate Event Production Proposal",
      fields: [
        "proposalDate", "productionAgency", "corporateClient", "eventName", "attendeeCount",
        "programOverview", "budgetBreakdown", "totalProductionFee"
      ],
      layout: { header: "CORPORATE SUMMIT & GALA PROPOSAL", footer: "Exceptional Event Production Experiences" },
      styles: { primaryColor: "#e11d48", secondaryColor: "#9f1239", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EVENT PRODUCTION PROPOSAL" }] },
          { type: "paragraph", content: [{ type: "text", text: "Agency: {{productionAgency}} | Client: {{corporateClient}} | Event: {{eventName}} ({{attendeeCount}} Attendees)" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Event Concept & Logistics Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{programOverview}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Budget & Production Investment" }] },
          { type: "paragraph", content: [{ type: "text", text: "Budget Schedule: {{budgetBreakdown}} | Total Production Investment: {{totalProductionFee}}" }] }
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. LETTERS & EMAILS (5 Templates)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "letter-job-offer-acceptance",
    slug: "letter-job-offer-acceptance",
    title: "Formal Job Offer Acceptance Letter",
    description: "Accept an employment offer in writing, confirming agreed starting date, salary package, and onboarding readiness.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters & Emails",
    content: {
      title: "Job Offer Acceptance Letter",
      fields: [
        "letterDate", "candidateName", "candidateAddress", "hiringManagerName",
        "companyName", "companyAddress", "positionTitle", "startingDate", "agreedSalary"
      ],
      layout: { header: "OFFICIAL EMPLOYMENT OFFER ACCEPTANCE", footer: "Professional Career Correspondence" },
      styles: { primaryColor: "#15803d", secondaryColor: "#166534", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hiringManagerName}}\n{{companyName}}\n{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{hiringManagerName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "It is with great pleasure that I formally accept your offer of employment as {{positionTitle}} with {{companyName}}. I am excited to contribute to the organization's ongoing growth and innovation." }] },
          { type: "paragraph", content: [{ type: "text", text: "As discussed, I confirm my official start date will be {{startingDate}} with an annual starting compensation of {{agreedSalary}}. Please inform me of any prerequisite documentation or onboarding paperwork needed prior to my first day." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely,\n{{candidateName}}\n{{candidateAddress}}" }] }
        ]
      }
    }
  },
  {
    id: "letter-salary-increment-request",
    slug: "letter-salary-increment-request",
    title: "Salary Increment & Promotion Review Request Letter",
    description: "Request a formal compensation review backed by recent performance milestones, revenue impact, and industry benchmarks.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters & Emails",
    content: {
      title: "Salary Increment Request Letter",
      fields: [
        "letterDate", "employeeName", "employeeTitle", "managerName", "companyName",
        "tenureDuration", "keyAchievements", "targetSalaryRequest"
      ],
      layout: { header: "FORMAL COMPENSATION REVIEW REQUEST", footer: "Confidential HR Correspondence" },
      styles: { primaryColor: "#0369a1", secondaryColor: "#075985", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{managerName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally request a review of my current compensation as {{employeeTitle}} at {{companyName}}. Over the past {{tenureDuration}}, my scope of responsibility and impact have expanded significantly." }] },
          { type: "paragraph", content: [{ type: "text", text: "Key milestones delivered during this period include:\n{{keyAchievements}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Based on these business outcomes and current industry market benchmarks, I respectfully request an adjustment of my annual compensation to {{targetSalaryRequest}}. I would appreciate the opportunity to discuss this briefly during our next review." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely,\n{{employeeName}}" }] }
        ]
      }
    }
  },
  {
    id: "letter-internship-recommendation",
    slug: "letter-internship-recommendation",
    title: "Academic & Internship Recommendation Letter",
    description: "Write a glowing reference letter for a student or junior intern detailing work ethic, project results, and character.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters & Emails",
    content: {
      title: "Internship Recommendation Letter",
      fields: [
        "letterDate", "recommenderName", "recommenderTitle", "studentName", "internshipRole",
        "skillsDemonstrated", "organizationName"
      ],
      layout: { header: "OFFICIAL LETTER OF RECOMMENDATION", footer: "Academic & Professional Reference" },
      styles: { primaryColor: "#3b82f6", secondaryColor: "#1d4ed8", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "To Whom It May Concern," }] },
          { type: "paragraph", content: [{ type: "text", text: "It is my pleasure to strongly recommend {{studentName}}, who served as {{internshipRole}} at {{organizationName}} under my direct supervision." }] },
          { type: "paragraph", content: [{ type: "text", text: "During their tenure, {{studentName}} consistently exhibited outstanding initiative, problem-solving capability, and technical proficiency, including: {{skillsDemonstrated}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "I am confident that {{studentName}} will be an invaluable asset to your institution or team. Please feel free to contact me if you require any additional information." }] },
          { type: "paragraph", content: [{ type: "text", text: "Warm regards,\n{{recommenderName}}\n{{recommenderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "letter-vendor-contract-termination",
    slug: "letter-vendor-contract-termination",
    title: "Formal Vendor Contract Termination Notice Letter",
    description: "Issue a legally compliant contract termination notice citing agreement clause numbers, final cutoff dates, and handover instructions.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters & Emails",
    content: {
      title: "Vendor Contract Termination Notice",
      fields: [
        "letterDate", "companyName", "vendorName", "contractTitle", "contractExecutionDate",
        "terminationClause", "effectiveDate", "finalPaymentNote"
      ],
      layout: { header: "OFFICIAL NOTICE OF CONTRACT TERMINATION", footer: "Formal Commercial Notice" },
      styles: { primaryColor: "#b91c1c", secondaryColor: "#991b1b", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "To: {{vendorName}}\nFrom: {{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "RE: Notice of Termination — {{contractTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Please accept this letter as formal notification that {{companyName}} is terminating the {{contractTitle}} dated {{contractExecutionDate}}, in accordance with {{terminationClause}} of the Agreement." }] },
          { type: "paragraph", content: [{ type: "text", text: "The effective termination date will be {{effectiveDate}}. Please submit all pending final invoices and initiate the transfer of company data and assets per {{finalPaymentNote}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely,\n{{companyName}} Authorized Representative" }] }
        ]
      }
    }
  },
  {
    id: "letter-client-appreciation-followup",
    slug: "letter-client-appreciation-followup",
    title: "Post-Project Client Appreciation & Referral Letter",
    description: "Thank clients upon successful project delivery, request a testimonial or review, and introduce ongoing retainer options.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters & Emails",
    content: {
      title: "Client Appreciation & Follow-Up Letter",
      fields: [
        "letterDate", "agencyName", "clientName", "projectName", "projectOutcomes", "reviewLink"
      ],
      layout: { header: "CLIENT APPRECIATION & VALUE FOLLOW-UP", footer: "Dedicated to long-term client success" },
      styles: { primaryColor: "#059669", secondaryColor: "#047857", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{clientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "On behalf of the entire team at {{agencyName}}, I want to express our sincere appreciation for the opportunity to partner with you on {{projectName}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "We are thrilled with the outcomes achieved together: {{projectOutcomes}}. If you have 60 seconds, we would be grateful for a brief review at {{reviewLink}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "We look forward to supporting your upcoming milestones in the future.\nWarmly,\n{{agencyName}}" }] }
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. REPORTS (5 Templates)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "report-cybersecurity-incident",
    slug: "report-cybersecurity-incident",
    title: "Cybersecurity Incident Response & Post-Mortem Report",
    description: "Document security incident timeline, root-cause vulnerability analysis, containment steps, and long-term mitigation.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Cybersecurity Incident Post-Mortem",
      fields: [
        "reportDate", "incidentId", "severityLevel", "leadInvestigator", "executiveSummary",
        "detectionTimeline", "rootCause", "containmentActions", "preventiveMeasures"
      ],
      layout: { header: "SECURITY INCIDENT RESPONSE & ROOT CAUSE AUDIT", footer: "Strictly Confidential Security Audit" },
      styles: { primaryColor: "#991b1b", secondaryColor: "#7f1d1d", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SECURITY INCIDENT AUDIT REPORT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Incident ID: {{incidentId}} | Severity: {{severityLevel}} | Date: {{reportDate}} | Lead: {{leadInvestigator}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Incident Detection & Containment Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Timeline: {{detectionTimeline}} | Actions Taken: {{containmentActions}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Root Cause Analysis & Preventive Measures" }] },
          { type: "paragraph", content: [{ type: "text", text: "Root Cause: {{rootCause}} | Ongoing Safeguards: {{preventiveMeasures}}" }] }
        ]
      }
    }
  },
  {
    id: "report-sustainability-esg",
    slug: "report-sustainability-esg",
    title: "Corporate Sustainability & ESG Compliance Report",
    description: "Track carbon footprint metrics, renewable energy usage, diversity governance, and corporate social responsibility milestones.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "ESG Sustainability Report",
      fields: [
        "reportYear", "companyName", "esgOfficer", "carbonReductionMetric",
        "renewableEnergyPercent", "socialInitiatives", "governanceAuditSummary"
      ],
      layout: { header: "ANNUAL SUSTAINABILITY & ESG COMPLIANCE REPORT", footer: "Commitment to Environmental & Social Governance" },
      styles: { primaryColor: "#047857", secondaryColor: "#065f46", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{companyName}} — Annual ESG Report" }] },
          { type: "paragraph", content: [{ type: "text", text: "Reporting Year: {{reportYear}} | Prepared by: {{esgOfficer}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Environmental Performance" }] },
          { type: "paragraph", content: [{ type: "text", text: "Carbon Emissions Delta: {{carbonReductionMetric}} | Renewable Grid Energy: {{renewableEnergyPercent}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Social & Governance Highlights" }] },
          { type: "paragraph", content: [{ type: "text", text: "Community & Workforce: {{socialInitiatives}} | Corporate Governance Audit: {{governanceAuditSummary}}" }] }
        ]
      }
    }
  },
  {
    id: "report-product-launch-postmortem",
    slug: "report-product-launch-postmortem",
    title: "Product Launch Retrospective & KPI Post-Mortem Report",
    description: "Evaluate user acquisition, day-1 conversion funnels, infrastructure latency, and product iteration priorities.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Product Launch Retrospective Report",
      fields: [
        "reportDate", "productName", "productLead", "launchDate",
        "targetKpisVsActual", "acquisitionMetrics", "topCustomerFeedback", "nextSprintPriorities"
      ],
      layout: { header: "PRODUCT LAUNCH RETROSPECTIVE", footer: "Data-Driven Continuous Iteration" },
      styles: { primaryColor: "#6366f1", secondaryColor: "#4f46e5", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{productName}} — Launch Retrospective" }] },
          { type: "paragraph", content: [{ type: "text", text: "Date: {{reportDate}} | Product Lead: {{productLead}} | Launch Date: {{launchDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Core KPIs vs Target Benchmark" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{targetKpisVsActual}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. User Acquisition & Conversion Funnels" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{acquisitionMetrics}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Customer Feedback & Immediate Action Items" }] },
          { type: "paragraph", content: [{ type: "text", text: "Feedback Themes: {{topCustomerFeedback}} | Sprint Roadmap: {{nextSprintPriorities}}" }] }
        ]
      }
    }
  },
  {
    id: "report-employee-training-evaluation",
    slug: "report-employee-training-evaluation",
    title: "Employee Onboarding & Training ROI Evaluation Report",
    description: "Measure completion rates, skill assessment improvements, trainee feedback, and onboarding timeline efficiency.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Employee Training Evaluation Report",
      fields: [
        "reportDate", "programName", "hrLead", "cohortSize",
        "completionRate", "assessmentScores", "traineeFeedbackSummary", "programCostVsRoi"
      ],
      layout: { header: "CORPORATE LEARNING & DEVELOPMENT AUDIT", footer: "People & Culture Performance Metrics" },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "L&D TRAINING PROGRAM EVALUATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Program: {{programName}} | Date: {{reportDate}} | Lead: {{hrLead}} | Cohort Size: {{cohortSize}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Program Completion & Skill Metrics" }] },
          { type: "paragraph", content: [{ type: "text", text: "Completion Rate: {{completionRate}} | Average Competency Score: {{assessmentScores}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Feedback & ROI Assessment" }] },
          { type: "paragraph", content: [{ type: "text", text: "Participant Feedback: {{traineeFeedbackSummary}} | Economic ROI: {{programCostVsRoi}}" }] }
        ]
      }
    }
  },
  {
    id: "report-inventory-warehouse-audit",
    slug: "report-inventory-warehouse-audit",
    title: "Warehouse Logistics & Inventory Audit Report",
    description: "Audit stock SKU counts, shrinkage discrepancies, turnover velocity, and warehouse capacity utilization.",
    isPremium: false,
    categorySlug: "reports",
    categoryName: "Reports",
    content: {
      title: "Warehouse Inventory Audit Report",
      fields: [
        "auditDate", "facilityLocation", "auditorName", "totalSkuCount",
        "discrepancyRate", "fastMovingItems", "deadStockValue", "warehouseCapacityPercent"
      ],
      layout: { header: "SUPPLY CHAIN & INVENTORY AUDIT", footer: "Accurate Logistics Inventory Control" },
      styles: { primaryColor: "#475569", secondaryColor: "#334155", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WAREHOUSE INVENTORY AUDIT" }] },
          { type: "paragraph", content: [{ type: "text", text: "Facility: {{facilityLocation}} | Auditor: {{auditorName}} | Date: {{auditDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Inventory Valuation & Discrepancies" }] },
          { type: "paragraph", content: [{ type: "text", text: "Audited SKUs: {{totalSkuCount}} | Discrepancy Rate: {{discrepancyRate}} | Dead Stock Value: {{deadStockValue}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Warehouse Capacity & Velocity" }] },
          { type: "paragraph", content: [{ type: "text", text: "Top Velocity SKUs: {{fastMovingItems}} | Storage Capacity Utilization: {{warehouseCapacityPercent}}" }] }
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7. BUSINESS PLANS (5 Templates)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "business-plan-ai-saas-startup",
    slug: "business-plan-ai-saas-startup",
    title: "AI SaaS & Cloud B2B Startup Business Plan",
    description: "Plan TAM/SAM market sizing, PLG user acquisition, gross margins, unit economics, and 3-year ARR projections.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "AI SaaS Startup Business Plan",
      fields: [
        "startupName", "founderNames", "planDate", "executiveSummary", "problemSolution",
        "marketSizeTam", "pricingTiers", "goToManyStrategy", "proFormaYear3Arr", "fundingRequirement"
      ],
      layout: { header: "VENTURE-READY AI SAAS BUSINESS PLAN", footer: "Proprietary Startup Strategy & Financial Model" },
      styles: { primaryColor: "#2563eb", secondaryColor: "#1d4ed8", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{startupName}} — Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founders: {{founderNames}} | Date: {{planDate}} | Target Raise: {{fundingRequirement}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Executive Summary" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{executiveSummary}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Market Opportunity & Product" }] },
          { type: "paragraph", content: [{ type: "text", text: "Problem/Solution: {{problemSolution}} | TAM: {{marketSizeTam}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Business Model & Financial Forecast" }] },
          { type: "paragraph", content: [{ type: "text", text: "Monetization: {{pricingTiers}} | GTM Strategy: {{goToManyStrategy}} | Year 3 Target ARR: {{proFormaYear3Arr}}" }] }
        ]
      }
    }
  },
  {
    id: "business-plan-boutique-fitness-studio",
    slug: "business-plan-boutique-fitness-studio",
    title: "Boutique Fitness Studio & Gym Business Plan",
    description: "Map membership tiers, leasehold improvements, class schedule capacity, and breakeven member count.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Boutique Fitness Studio Business Plan",
      fields: [
        "studioName", "founderName", "planDate", "conceptOverview",
        "targetMarket", "membershipModel", "equipmentBudget", "breakevenMembers", "startupCapital"
      ],
      layout: { header: "BOUTIQUE FITNESS STUDIO BUSINESS PLAN", footer: "Healthy Living & Community Wellness" },
      styles: { primaryColor: "#ec4899", secondaryColor: "#be185d", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{studioName}} — Studio Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Owner: {{founderName}} | Date: {{planDate}} | Required Capital: {{startupCapital}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Studio Concept & Community Offering" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{conceptOverview}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Target Demographics & Membership Tiers" }] },
          { type: "paragraph", content: [{ type: "text", text: "Market: {{targetMarket}} | Pricing Structure: {{membershipModel}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Buildout & Financial Projections" }] },
          { type: "paragraph", content: [{ type: "text", text: "Equipment & Fit-Out: {{equipmentBudget}} | Breakeven Target: {{breakevenMembers}} active members." }] }
        ]
      }
    }
  },
  {
    id: "business-plan-specialty-coffee-roastery",
    slug: "business-plan-specialty-coffee-roastery",
    title: "Specialty Coffee Roastery & Cafe Business Plan",
    description: "Detail green bean sourcing, wholesale cafe supply contracts, retail foot traffic projections, and equipment payback.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Specialty Coffee Roastery Business Plan",
      fields: [
        "roasteryName", "founderName", "planDate", "brandMission",
        "sourcingDirectTrade", "retailAndWholesaleChannels", "initialCapitalCost", "year1ProjectedRevenue"
      ],
      layout: { header: "SPECIALTY COFFEE ROASTERY & CAFE PLAN", footer: "Direct-Trade Artisan Coffee Roasting" },
      styles: { primaryColor: "#78350f", secondaryColor: "#451a03", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{roasteryName}} — Roastery Business Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founder: {{founderName}} | Date: {{planDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Brand Mission & Green Bean Sourcing" }] },
          { type: "paragraph", content: [{ type: "text", text: "Mission: {{brandMission}} | Sourcing Pipeline: {{sourcingDirectTrade}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Revenue Streams & Financial Forecast" }] },
          { type: "paragraph", content: [{ type: "text", text: "Sales Channels: {{retailAndWholesaleChannels}} | Capex: {{initialCapitalCost}} | Year 1 Revenue: {{year1ProjectedRevenue}}" }] }
        ]
      }
    }
  },
  {
    id: "business-plan-digital-health-clinic",
    slug: "business-plan-digital-health-clinic",
    title: "Telehealth & Digital Medical Practice Business Plan",
    description: "Outline telemedicine platform compliance, licensed physician network, subscription care models, and patient CAC.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Telehealth Practice Business Plan",
      fields: [
        "clinicName", "medicalDirector", "planDate", "clinicalVision",
        "regulatoryCompliance", "patientSubscriptionModel", "growthStrategy", "targetLaunchBudget"
      ],
      layout: { header: "TELEHEALTH & VIRTUAL CLINIC BUSINESS PLAN", footer: "HIPAA Compliant Digital Healthcare" },
      styles: { primaryColor: "#0891b2", secondaryColor: "#0e7490", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{clinicName}} — Virtual Clinic Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Medical Director: {{medicalDirector}} | Date: {{planDate}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Clinical Scope & Regulatory Framework" }] },
          { type: "paragraph", content: [{ type: "text", text: "Care Model: {{clinicalVision}} | Compliance: {{regulatoryCompliance}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Monetization & Acquisition Strategy" }] },
          { type: "paragraph", content: [{ type: "text", text: "Revenue Model: {{patientSubscriptionModel}} | Acquisition Roadmap: {{growthStrategy}} | Capital: {{targetLaunchBudget}}" }] }
        ]
      }
    }
  },
  {
    id: "business-plan-sustainable-fashion-brand",
    slug: "business-plan-sustainable-fashion-brand",
    title: "Direct-to-Consumer Sustainable Fashion Business Plan",
    description: "Structure ethical fabric supply chain, direct-to-consumer e-commerce margins, social influencer marketing, and inventory turns.",
    isPremium: false,
    categorySlug: "business-plans",
    categoryName: "Business Plans",
    content: {
      title: "Sustainable Fashion Brand Business Plan",
      fields: [
        "brandName", "founderName", "planDate", "brandIdentity",
        "ethicalSupplyChain", "ecommerceUnitEconomics", "launchMarketingPlan", "fundingGoal"
      ],
      layout: { header: "D2C SUSTAINABLE FASHION BRAND PLAN", footer: "Ethical Manufacturing & Eco-Conscious Apparel" },
      styles: { primaryColor: "#15803d", secondaryColor: "#14532d", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "{{brandName}} — D2C Brand Plan" }] },
          { type: "paragraph", content: [{ type: "text", text: "Founder: {{founderName}} | Date: {{planDate}} | Target Seed: {{fundingGoal}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Brand Identity & Circular Supply Chain" }] },
          { type: "paragraph", content: [{ type: "text", text: "Aesthetics: {{brandIdentity}} | Supply Chain: {{ethicalSupplyChain}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. E-Commerce Unit Economics & GTM" }] },
          { type: "paragraph", content: [{ type: "text", text: "Gross Margins: {{ecommerceUnitEconomics}} | Marketing Funnels: {{launchMarketingPlan}}" }] }
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 8. QUOTATIONS (5 Templates)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "quotation-solar-panel-installation",
    slug: "quotation-solar-panel-installation",
    title: "Residential & Commercial Solar Panel Installation Quote",
    description: "Quote photovoltaic panel wattages, inverter hardware, net metering permits, and 25-year warranty terms.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Solar Panel Installation Quotation",
      fields: [
        "quoteNumber", "quoteDate", "validUntil", "installerName", "installerAddress",
        "clientName", "propertyAddress", "systemCapacityKw", "hardwareCost", "installationLabor",
        "federalTaxCredit", "subtotal", "taxAmount", "netCost", "warrantyTerms"
      ],
      layout: { header: "SOLAR ENERGY SYSTEM INSTALLATION QUOTE", footer: "25-Year Equipment & Workmanship Warranty" },
      styles: { primaryColor: "#ea580c", secondaryColor: "#c2410c", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOLAR ENERGY INSTALLATION QUOTE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}} | Date: {{quoteDate}} | Valid Until: {{validUntil}}" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Installer: " },
            { type: "text", text: "{{installerName}}, {{installerAddress}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client Site: " },
            { type: "text", text: "{{clientName}}, {{propertyAddress}} (System: {{systemCapacityKw}} kW)" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Hardware, Permits & Installation Breakdown" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Description" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Tier-1 Photovoltaic Panels & Hybrid Inverters" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{hardwareCost}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Structural Racking, Electrical Permitting & Utility Grid Interconnect" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{installationLabor}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Estimated Clean Energy Tax Credit Savings" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{federalTaxCredit}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Net Total: {{netCost}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Warranty: {{warrantyTerms}}" }] }
        ]
      }
    }
  },
  {
    id: "quotation-commercial-painting-renovation",
    slug: "quotation-commercial-painting-renovation",
    title: "Commercial Painting & Facade Renovation Quotation",
    description: "Quote surface pressure washing, exterior primer coating, high-durability acrylic finishes, and scaffolding.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Commercial Painting Quotation",
      fields: [
        "quoteNumber", "quoteDate", "validUntil", "contractorName", "contractorAddress",
        "clientName", "siteAddress", "squareFootage", "surfacePrepCost", "paintMaterialCost",
        "laborCost", "subtotal", "taxAmount", "total", "paymentTerms"
      ],
      layout: { header: "COMMERCIAL PAINTING & RESTORATION QUOTE", footer: "Licensed & Insured Professional Painting Contractors" },
      styles: { primaryColor: "#0284c7", secondaryColor: "#0369a1", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COMMERCIAL PAINTING QUOTE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}} | Date: {{quoteDate}} | Valid Until: {{validUntil}}" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Contractor: " },
            { type: "text", text: "{{contractorName}}, {{contractorAddress}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client Facility: " },
            { type: "text", text: "{{clientName}}, {{siteAddress}} (Area: {{squareFootage}} sq. ft.)" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Scope & Materials" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Surface Power Wash, Caulking & Primer Prep" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{surfacePrepCost}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Commercial Acrylic Coatings & Direct Labor" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{laborCost}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Total Investment: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Terms: {{paymentTerms}}" }] }
        ]
      }
    }
  },
  {
    id: "quotation-managed-it-support",
    slug: "quotation-managed-it-support",
    title: "Monthly Managed IT Support & Helpdesk Quotation",
    description: "Quote 24/7 server monitoring, helpdesk ticketing seats, cloud backup endpoints, and network security management.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Managed IT Services Quotation",
      fields: [
        "quoteNumber", "quoteDate", "validUntil", "mspName", "mspAddress",
        "clientName", "endpointCount", "perEndpointRate", "backupAddonRate",
        "monthlySubtotal", "annualTotal", "slaResponseTime"
      ],
      layout: { header: "MANAGED IT SERVICES & SLA QUOTE", footer: "Enterprise 99.9% Uptime Guarantee" },
      styles: { primaryColor: "#3b82f6", secondaryColor: "#1d4ed8", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "MANAGED IT SERVICES QUOTE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}} | Date: {{quoteDate}} | Valid Until: {{validUntil}}" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Provider: " },
            { type: "text", text: "{{mspName}}, {{mspAddress}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client: " },
            { type: "text", text: "{{clientName}} ({{endpointCount}} User Endpoints)" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Managed Support Tier Breakdown" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Service" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Monthly Cost" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "24/7 Monitoring & Desktop Helpdesk ({{endpointCount}} seats @ {{perEndpointRate}})" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{monthlySubtotal}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Encrypted Cloud Disaster Recovery & Backup" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{backupAddonRate}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Monthly Fee: {{monthlySubtotal}} | Annualized Commitment: {{annualTotal}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Guaranteed SLA Response: {{slaResponseTime}}" }] }
        ]
      }
    }
  },
  {
    id: "quotation-catering-event-menu",
    slug: "quotation-catering-event-menu",
    title: "Corporate & Banquet Catering Menu Quotation",
    description: "Quote per-plate banquet courses, cocktail bar staffing, tableware rentals, and dietary restriction management.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Banquet Catering Quotation",
      fields: [
        "quoteNumber", "quoteDate", "validUntil", "catererName", "catererAddress",
        "clientName", "guestCount", "menuTier", "perPlateRate", "barServiceFee",
        "subtotal", "serviceGratuity", "total", "depositTerms"
      ],
      layout: { header: "BANQUET & EVENT CATERING QUOTATION", footer: "Exquisite Culinary Presentation & Service" },
      styles: { primaryColor: "#b45309", secondaryColor: "#92400e", layoutVariant: 2, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EVENT CATERING QUOTATION" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}} | Date: {{quoteDate}} | Valid Until: {{validUntil}}" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Caterer: " },
            { type: "text", text: "{{catererName}}, {{catererAddress}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client: " },
            { type: "text", text: "{{clientName}} (Guest Count: {{guestCount}} | Menu: {{menuTier}})" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Catering Line Items" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Item" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Guests" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Rate" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Plated 3-Course Banquet Dinner" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{guestCount}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{perPlateRate}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{subtotal}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Open Bar Package & Bartender Staffing" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{guestCount}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{barServiceFee}}" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{barServiceFee}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Service & Gratuity: {{serviceGratuity}} | Total: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Deposit & Terms: {{depositTerms}}" }] }
        ]
      }
    }
  },
  {
    id: "quotation-event-audio-visual-staging",
    slug: "quotation-event-audio-visual-staging",
    title: "Live Event Audio-Visual & Stage Lighting Quotation",
    description: "Quote line array PA speaker systems, 4K LED video walls, wireless microphone kits, and on-site AV technicians.",
    isPremium: false,
    categorySlug: "quotations",
    categoryName: "Quotations",
    content: {
      title: "Audio-Visual & Staging Quotation",
      fields: [
        "quoteNumber", "quoteDate", "validUntil", "avProductionCompany", "clientCompany",
        "eventName", "venueLocation", "audioLightingCost", "ledWallRental", "technicianLabor",
        "subtotal", "taxAmount", "total", "cancellationTerms"
      ],
      layout: { header: "LIVE EVENT AV PRODUCTION & STAGING QUOTE", footer: "Broadcast Quality Audio-Visual Production" },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#6d28d9", layoutVariant: 1, headingStyle: 0 },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EVENT AV PRODUCTION QUOTE" }] },
          { type: "paragraph", content: [{ type: "text", text: "Quote #: {{quoteNumber}} | Date: {{quoteDate}} | Valid: {{validUntil}} | Event: {{eventName}} ({{venueLocation}})" }] },
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "AV Provider: " },
            { type: "text", text: "{{avProductionCompany}}" }
          ]},
          { type: "paragraph", content: [
            { type: "text", marks: [{ type: "bold" }], text: "Client: " },
            { type: "text", text: "{{clientCompany}}" }
          ]},
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Equipment Rental & Production Services" }] },
          { type: "table", content: [
            { type: "table_row", content: [
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Gear & Services" }] }] },
              { type: "table_header", content: [{ type: "paragraph", content: [{ type: "text", text: "Amount" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Line-Array Sound Reinforcement & Wireless Mic Packages" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{audioLightingCost}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "4K Modular LED Video Wall & Switching Racks" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{ledWallRental}}" }] }] }
            ]},
            { type: "table_row", content: [
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "Live Event Sound & Video Lead Engineers" }] }] },
              { type: "table_cell", content: [{ type: "paragraph", content: [{ type: "text", text: "{{technicianLabor}}" }] }] }
            ]}
          ]},
          { type: "paragraph", content: [{ type: "text", text: "Subtotal: {{subtotal}} | Total Due: {{total}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Terms: {{cancellationTerms}}" }] }
        ]
      }
    }
  }
];
