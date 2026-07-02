// Auto-enriched contract templates. Each document is intentionally distinct so no
// two contracts render alike. Preserves id/slug/title/description/isPremium/
// categorySlug/categoryName/content.title/content.layout/content.styles from the
// fallback source; only content.fields and content.editorState.content are rewritten.

export const contractsTemplates = [
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
          { type: "paragraph", content: [{ type: "text", text: "This Freelance Service Agreement is made between {{freelancerName}} of {{businessName}} (the Freelancer) and {{clientName}} of {{clientCompanyName}} (the Client) for the engagement titled {{projectTitle}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Freelancer: " }, { type: "text", text: "{{freelancerName}}, {{businessName}}, {{freelancerAddress}} ({{freelancerEmail}} / {{freelancerPhone}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompanyName}}, {{clientAddress}} ({{clientEmail}} / {{clientPhone}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Work" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Freelancer agrees to perform the following work: {{projectDescription}}. Deliverables include {{deliverables}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Services commence on {{startDate}} and conclude by {{endDate}}, following an estimated schedule of {{timeline}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total project fee is {{totalProjectFee}}, with a deposit of {{depositAmount}} due at signing. Invoices follow {{paymentSchedule}} on {{paymentTerms}} terms. Overdue balances accrue a late fee of {{lateFee}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Revisions" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{revisionsIncluded}} Additional revision rounds beyond those included will be quoted separately before work proceeds." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Ownership & Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{ownershipRights}} {{confidentialityClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Cancellation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Freelancer: " }, { type: "text", text: "{{freelancerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Employment Agreement is made between {{companyName}} (the Employer) and {{employeeFullName}} (the Employee) and sets out the terms under which the Employee will be engaged." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employer: " }, { type: "text", text: "{{companyName}} {{companyLogo}}, {{companyAddress}}. HR Contact: {{hrRepresentative}} ({{hrEmail}} / {{hrPhone}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee: " }, { type: "text", text: "{{employeeFullName}}, {{employeeAddress}} ({{employeeEmail}} / {{employeePhone}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Position & Duties" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Employee is hired as {{jobTitle}} in the {{department}} department on a {{employmentType}} basis, based at {{workLocation}} and reporting to {{reportingManager}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term & Hours" }] },
          { type: "paragraph", content: [{ type: "text", text: "Employment begins on {{startDate}} and continues until {{endDate}}. Standard working hours are {{workingHours}}, subject to an initial probation period of {{probationPeriod}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Compensation & Benefits" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Employee will receive a base salary of {{salary}}, paid {{payFrequency}}, plus {{bonus}}. Benefits include {{benefits}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Leave" }] },
          { type: "paragraph", content: [{ type: "text", text: "Leave entitlement: {{leavePolicy}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination & Restrictive Covenants" }] },
          { type: "paragraph", content: [{ type: "text", text: "Either party may end this agreement with {{noticePeriod}}. Confidentiality: {{confidentialityClause}} Non-compete: {{nonCompeteClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employer: " }, { type: "text", text: "{{employerSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee: " }, { type: "text", text: "{{employeeSignature}} — Date: {{signatureDate}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Freelance Services Contract is entered into by {{freelancerName}} operating as {{businessName}} (the Contractor) and {{clientName}} of {{clientCompanyName}} (the Client) for delivery of {{projectTitle}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{freelancerName}}, {{businessName}}, {{freelancerAddress}} ({{freelancerEmail}} / {{freelancerPhone}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompanyName}}, {{clientAddress}} ({{clientEmail}} / {{clientPhone}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Services & Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Contractor will provide: {{projectDescription}}. Agreed deliverables are {{deliverables}}, produced independently and without supervision by the Client." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "The engagement runs from {{startDate}} to {{endDate}} over an estimated {{timeline}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Payment & Late Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total fee: {{totalProjectFee}}. Deposit: {{depositAmount}}. Billing follows {{paymentSchedule}} on {{paymentTerms}} terms, and late payments incur {{lateFee}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Copyright & Revisions" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{ownershipRights}} {{revisionsIncluded}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Confidentiality & Cancellation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{confidentialityClause}} {{cancellationPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{freelancerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Independent Contractor Agreement is made between {{contractorName}} of {{contractorCompany}} (the Contractor) and {{clientName}} of {{clientCompanyName}} (the Client), who wish to engage the Contractor as an independent business." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{contractorName}}, {{contractorCompany}}, {{contractorAddress}} ({{contractorContact}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompanyName}}, {{clientAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Contractor will provide {{servicesProvided}} over a period of {{projectDuration}}, delivering {{deliverables}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Independent Status" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{independentContractorStatus}} Nothing in this agreement creates an employment, partnership, or agency relationship." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Compensation & Taxes" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment terms: {{paymentTerms}}. {{taxResponsibility}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Insurance & Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{insuranceRequirement}} {{confidentialityClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination & Disputes" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationClause}} {{disputeResolution}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{contractorSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Master Service Agreement is made between {{providerCompanyName}} (the Provider) and {{clientName}} of {{clientCompanyName}} (the Client) to govern the ongoing supply of services described below." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{providerCompanyName}}, {{providerAddress}}, attn. {{providerContactPerson}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompanyName}}, {{clientAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Provider will deliver {{serviceDescription}}. Scope of work: {{serviceScope}}, performed on a {{serviceFrequency}} basis." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This agreement is effective from {{startDate}} through {{endDate}} and renews only by written agreement of both parties." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The service fee is {{serviceFee}}, payable via {{paymentMethod}}, due {{paymentDueDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Service Levels" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{slaTerms}} The Provider will report on performance against these targets on request." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Liability, Confidentiality & Cancellation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{liabilityLimit}} {{confidentialityClause}} {{cancellationPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{providerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Mutual Non-Disclosure Agreement is made between {{partyAName}} of {{partyACompany}} and {{partyBName}} of {{partyBCompany}}, effective {{effectiveDate}}, in connection with {{purposeOfAgreement}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Disclosing/Receiving Party A: " }, { type: "text", text: "{{partyAName}}, {{partyACompany}}, {{partyAAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Disclosing/Receiving Party B: " }, { type: "text", text: "{{partyBName}}, {{partyBCompany}}, {{partyBAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Definition of Confidential Information" }] },
          { type: "paragraph", content: [{ type: "text", text: "Confidential Information includes {{confidentialInformation}}, whether disclosed orally, in writing, or electronically, and whether or not marked confidential." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Obligations of the Receiving Party" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{obligations}} Each party will use the Confidential Information solely for the stated purpose and protect it with at least reasonable care." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Exclusions" }] },
          { type: "paragraph", content: [{ type: "text", text: "The obligations do not apply to {{exclusions}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Permitted Disclosures" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{permittedDisclosures}} Disclosure compelled by law is permitted only after prompt notice to the other party." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Term & Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This agreement remains in force for {{agreementDuration}} and is governed by {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Party A: " }, { type: "text", text: "{{partyASignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Party B: " }, { type: "text", text: "{{partyBSignature}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Consulting Agreement is made between {{consultantName}} of {{consultantCompany}} (the Consultant) and {{clientName}} of {{clientCompanyName}} (the Client) for advisory services on {{projectName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Consultant: " }, { type: "text", text: "{{consultantName}}, {{consultantCompany}} ({{consultantContact}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompanyName}} ({{clientContact}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Engagement" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Consultant will advise on {{scopeOfWork}} and produce {{deliverables}} according to the timeline of {{timeline}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Fees & Expenses" }] },
          { type: "paragraph", content: [{ type: "text", text: "Compensation is billed at {{hourlyRate}} or a fixed fee of {{fixedFee}} as agreed per project. Pre-approved expenses: {{expenses}}. Payment schedule: {{paymentSchedule}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Intellectual Property" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{intellectualProperty}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{confidentialityClause}} The Consultant will not use Client information for any purpose beyond this engagement." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Consultant: " }, { type: "text", text: "{{consultantSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
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
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RESIDENTIAL RENTAL AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Rental Agreement is made between {{landlordName}} (the Landlord) and {{tenantName}} (the Tenant) for the tenancy of the property at {{propertyAddress}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord: " }, { type: "text", text: "{{landlordName}}, {{landlordAddress}} ({{landlordContact}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tenant: " }, { type: "text", text: "{{tenantName}}, {{tenantAddress}} ({{tenantPhone}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Premises & Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Landlord leases the {{propertyType}} at {{propertyAddress}} to the Tenant from {{leaseStartDate}} to {{leaseEndDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Rent & Security Deposit" }] },
          { type: "paragraph", content: [{ type: "text", text: "Rent of {{monthlyRent}} is due on the {{rentDueDate}}, paid via {{paymentMethod}}. A refundable security deposit of {{securityDeposit}} is held against damage and unpaid rent." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Utilities & Maintenance" }] },
          { type: "paragraph", content: [{ type: "text", text: "Utilities: {{utilities}}. Maintenance: {{maintenance}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Pets" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{petsPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Smoking" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{smokingPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord: " }, { type: "text", text: "{{landlordSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tenant: " }, { type: "text", text: "{{tenantSignature}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Sales Contract is made between {{sellerName}} of {{sellerCompany}} (the Seller) and {{buyerName}} of {{buyerCompany}} (the Buyer) for the sale of the goods described below." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Seller: " }, { type: "text", text: "{{sellerName}}, {{sellerCompany}}, {{sellerAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Buyer: " }, { type: "text", text: "{{buyerName}}, {{buyerCompany}}, {{buyerAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Goods & Price" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Seller agrees to sell {{quantity}} units of {{productName}} at {{unitPrice}} per unit, for a total purchase price of {{totalAmount}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Delivery" }] },
          { type: "paragraph", content: [{ type: "text", text: "Goods will be delivered by {{deliveryDate}} to {{deliveryAddress}} via {{shippingMethod}}. Risk of loss passes to the Buyer on delivery." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "Payment is due {{paymentDueDate}} via {{paymentMethod}}. Title to the goods transfers only upon receipt of the full amount." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Warranty & Returns" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{warrantyTerms}} {{returnPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This contract is governed by {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Seller: " }, { type: "text", text: "{{sellerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Buyer: " }, { type: "text", text: "{{buyerSignature}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Partnership Agreement is made between {{partner1Name}} and {{partner2Name}} to establish and operate {{businessName}} as a general partnership." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Partners" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Partner 1: " }, { type: "text", text: "{{partner1Name}}, {{partner1Address}} — {{partner1Ownership}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Partner 2: " }, { type: "text", text: "{{partner2Name}}, {{partner2Address}} — {{partner2Ownership}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. The Business" }] },
          { type: "paragraph", content: [{ type: "text", text: "The partnership will operate as {{businessName}} at {{businessAddress}} in the {{industryType}} sector." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Capital Contributions" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{capitalContribution}} Additional capital calls require the consent of both partners." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Profits & Losses" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{profitSharing}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Duties & Decision-Making" }] },
          { type: "paragraph", content: [{ type: "text", text: "Responsibilities: {{partnerResponsibilities}}. Decision-making: {{decisionMaking}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Withdrawal & Dissolution" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{exitStrategy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Partner 1: " }, { type: "text", text: "{{partner1Signature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Partner 2: " }, { type: "text", text: "{{partner2Signature}}" }] }
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
          { type: "paragraph", content: [{ type: "text", text: "This Vendor Agreement is made between {{vendorName}} of {{vendorCompany}} (the Vendor) and {{clientName}} of {{clientCompanyName}} (the Client) for the supply of goods and services described below." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Vendor: " }, { type: "text", text: "{{vendorName}}, {{vendorCompany}}, {{vendorAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompanyName}}, {{clientAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Supply & Delivery" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Vendor will supply {{productsServices}} in a quantity of {{quantity}} according to the delivery schedule of {{deliverySchedule}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Quality Standards" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{qualityStandards}} Goods failing inspection may be rejected and returned at the Vendor expense." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Contract Value & Invoicing" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total contract value is {{contractValue}}, invoiced per {{invoiceSchedule}} on {{paymentTerms}} terms." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Warranty & Liability" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{warrantyTerms}} {{liabilityLimit}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Confidentiality & Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{confidentialityClause}} {{terminationClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Vendor: " }, { type: "text", text: "{{vendorSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "residential-lease-agreement",
    slug: "residential-lease-agreement",
    title: "Residential Lease Agreement Template",
    description: "Legally structured residential lease agreement template for landlords and tenants covering rent, deposit, term, and property rules.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Residential Lease Agreement Template",
      fields: ["landlordName", "landlordContact", "tenantName", "tenantPhone", "propertyAddress", "propertyType", "leaseTerm", "startDate", "leaseEndDate", "monthlyRent", "securityDeposit", "rentDueDate", "lateFee", "paymentMethod", "utilities", "maintenance", "petsPolicy", "smokingPolicy", "landlordSignature", "tenantSignature"],
      layout: {
        header: "RESIDENTIAL LEASE AGREEMENT",
        footer: "This agreement is governed by local tenancy and housing laws."
      },
      styles: {
        primaryColor: "#0369a1",
        secondaryColor: "#0c4a6e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RESIDENTIAL LEASE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Lease Agreement is made between {{landlordName}} (the Landlord) and {{tenantName}} (the Tenant) for occupancy of the residence at {{propertyAddress}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord: " }, { type: "text", text: "{{landlordName}} ({{landlordContact}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tenant: " }, { type: "text", text: "{{tenantName}} ({{tenantPhone}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Premises & Lease Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Landlord rents the {{propertyType}} at {{propertyAddress}} for a term of {{leaseTerm}}, beginning {{startDate}} and ending {{leaseEndDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Rent" }] },
          { type: "paragraph", content: [{ type: "text", text: "Monthly rent of {{monthlyRent}} is due on the {{rentDueDate}}, payable via {{paymentMethod}}. Rent received after the grace period is subject to a late fee of {{lateFee}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Security Deposit" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Tenant pays a security deposit of {{securityDeposit}}, refundable within the statutory period after move-out less any deductions for damage beyond normal wear." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Utilities & Maintenance" }] },
          { type: "paragraph", content: [{ type: "text", text: "Utilities: {{utilities}}. Maintenance: {{maintenance}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Pets & Smoking" }] },
          { type: "paragraph", content: [{ type: "text", text: "Pets: {{petsPolicy}} Smoking: {{smokingPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord: " }, { type: "text", text: "{{landlordSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tenant: " }, { type: "text", text: "{{tenantSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "influencer-collaboration-agreement",
    slug: "influencer-collaboration-agreement",
    title: "Influencer Collaboration Agreement Template",
    description: "Social media influencer contract template covering deliverables, usage rights, disclosure, exclusivity, and payment terms for brand deals.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Influencer Collaboration Agreement Template",
      fields: ["brandName", "brandContact", "influencerName", "influencerHandle", "campaignName", "deliverables", "campaignDates", "contentApproval", "disclosureRequirements", "exclusivity", "usageRights", "compensation", "paymentSchedule", "cancellationPolicy", "brandSignature", "influencerSignature"],
      layout: {
        header: "INFLUENCER COLLABORATION AGREEMENT",
        footer: "Sponsored content must comply with advertising disclosure regulations."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#831843"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "INFLUENCER COLLABORATION AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Collaboration Agreement is made between {{brandName}} (the Brand) and {{influencerName}} (the Creator) for the sponsored campaign {{campaignName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Brand: " }, { type: "text", text: "{{brandName}} ({{brandContact}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Creator: " }, { type: "text", text: "{{influencerName}}, {{influencerHandle}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Content Deliverables" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Creator will produce and publish {{deliverables}} during the campaign window of {{campaignDates}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Content Approval" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{contentApproval}} The Brand may request one round of revisions before posting." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Advertising Disclosure" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{disclosureRequirements}} All sponsored posts must clearly label the paid partnership in line with advertising regulations." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Exclusivity" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{exclusivity}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Usage Rights" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{usageRights}} The Brand may repurpose the content across its owned channels for the agreed license period." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Compensation" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Creator will be paid {{compensation}} per the schedule: {{paymentSchedule}}. Cancellation: {{cancellationPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Brand: " }, { type: "text", text: "{{brandSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Creator: " }, { type: "text", text: "{{influencerSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "photography-services-contract",
    slug: "photography-services-contract",
    title: "Photography Services Contract Template",
    description: "Photography contract template for weddings, events, and portraits covering shoot details, deliverables, image rights, and cancellation terms.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Photography Services Contract Template",
      fields: ["photographerName", "studioName", "clientName", "clientPhone", "eventName", "eventDate", "eventLocation", "shootingHours", "packageDetails", "deliverables", "deliveryTimeline", "imageRights", "totalFee", "deposit", "balanceDue", "cancellationPolicy", "photographerSignature", "clientSignature"],
      layout: {
        header: "PHOTOGRAPHY SERVICES CONTRACT",
        footer: "Final images delivered within 30 days of the event date."
      },
      styles: {
        primaryColor: "#9333ea",
        secondaryColor: "#581c87"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "PHOTOGRAPHY SERVICES CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Photography Services Contract is made between {{photographerName}} of {{studioName}} (the Photographer) and {{clientName}} (the Client) for coverage of {{eventName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Photographer: " }, { type: "text", text: "{{photographerName}}, {{studioName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}} ({{clientPhone}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Event & Coverage" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Photographer will provide {{shootingHours}} of coverage at {{eventLocation}} on {{eventDate}}, under the {{packageDetails}} package." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Deliverables & Delivery" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Client will receive {{deliverables}}, delivered within {{deliveryTimeline}} of the event date." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Image Rights" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{imageRights}} The Photographer retains copyright and may use selected images for portfolio and promotion unless otherwise agreed." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Fees & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total fee is {{totalFee}}. A non-refundable deposit of {{deposit}} reserves the date, with the balance of {{balanceDue}} due before delivery." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Cancellation & Rescheduling" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Photographer: " }, { type: "text", text: "{{photographerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
        ]
      }
    }
  }
];
