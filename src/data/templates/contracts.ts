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
          { type: "paragraph", content: [{ type: "text", text: "Compensation is billed at {{hourlyRate}}/hour or a fixed fee of {{fixedFee}} as agreed per project. Pre-approved expenses: {{expenses}}. Payment schedule: {{paymentSchedule}}." }] },
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
          { type: "paragraph", content: [{ type: "text", text: "The Photographer will provide {{shootingHours}} hours of coverage at {{eventLocation}} on {{eventDate}}, under the {{packageDetails}} package." }] },
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
  },
  {
    id: "commercial-lease-agreement",
    slug: "commercial-lease-agreement",
    title: "Commercial Lease Agreement Template",
    description: "Commercial lease agreement template for office, retail, and industrial space covering demised premises, base rent, CAM charges, lease term, and permitted use.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Commercial Lease Agreement Template",
      fields: ["landlordName", "landlordCompany", "landlordAddress", "landlordContact", "tenantName", "tenantCompany", "tenantAddress", "premisesAddress", "rentableSquareFeet", "permittedUse", "leaseTerm", "startDate", "leaseEndDate", "baseRent", "rentEscalation", "camCharges", "securityDeposit", "renewalOption", "landlordSignature", "tenantSignature"],
      layout: {
        header: "COMMERCIAL LEASE AGREEMENT",
        footer: "Binding upon the parties, their successors, and permitted assigns under applicable commercial tenancy law."
      },
      styles: {
        primaryColor: "#1e3a8a",
        secondaryColor: "#1e40af"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COMMERCIAL LEASE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Commercial Lease Agreement is made between {{landlordName}} of {{landlordCompany}} (the Landlord) and {{tenantName}} of {{tenantCompany}} (the Tenant) for the lease of commercial premises located at {{premisesAddress}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord: " }, { type: "text", text: "{{landlordName}}, {{landlordCompany}}, {{landlordAddress}} ({{landlordContact}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tenant: " }, { type: "text", text: "{{tenantName}}, {{tenantCompany}}, {{tenantAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Demised Premises" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Landlord leases to the Tenant approximately {{rentableSquareFeet}} of rentable space at {{premisesAddress}}, together with the non-exclusive right to use common areas of the building and parking." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Permitted Use" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Tenant shall use the premises solely for {{permittedUse}} and for no other purpose without the Landlord prior written consent. The Tenant shall comply with all zoning laws, certificates of occupancy, and building rules." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Lease Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "The lease term is {{leaseTerm}}, commencing {{startDate}} and expiring {{leaseEndDate}}, unless earlier terminated or extended in accordance with this Agreement." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Base Rent & Escalation" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Tenant shall pay base rent of {{baseRent}}, due in advance on the first day of each month. Base rent shall increase annually per the escalation schedule: {{rentEscalation}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Operating Expenses & CAM" }] },
          { type: "paragraph", content: [{ type: "text", text: "In addition to base rent, the Tenant shall pay its proportionate share of common area maintenance (CAM), taxes, and insurance as follows: {{camCharges}}. The Landlord shall reconcile actual expenses against estimates annually." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Security Deposit & Renewal" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Tenant shall deposit {{securityDeposit}} as security for performance of its obligations. Renewal option: {{renewalOption}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Landlord: " }, { type: "text", text: "{{landlordSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Tenant: " }, { type: "text", text: "{{tenantSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "loan-agreement",
    slug: "loan-agreement",
    title: "Loan Agreement Template",
    description: "Loan agreement template between lender and borrower covering principal amount, interest rate, repayment schedule, collateral, prepayment, and events of default.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Loan Agreement Template",
      fields: ["lenderName", "lenderCompany", "lenderAddress", "borrowerName", "borrowerAddress", "borrowerContact", "principalAmount", "interestRate", "loanTerm", "startDate", "maturityDate", "repaymentSchedule", "installmentAmount", "collateralDescription", "prepaymentTerms", "defaultTerms", "governingLaw", "lenderSignature", "borrowerSignature"],
      layout: {
        header: "LOAN AGREEMENT",
        footer: "This promissory obligation is legally enforceable upon default by the Borrower."
      },
      styles: {
        primaryColor: "#065f46",
        secondaryColor: "#047857"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "LOAN AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Loan Agreement is made between {{lenderName}} of {{lenderCompany}} (the Lender) and {{borrowerName}} (the Borrower), whereby the Lender agrees to advance funds to the Borrower on the terms set out below." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Lender: " }, { type: "text", text: "{{lenderName}}, {{lenderCompany}}, {{lenderAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Borrower: " }, { type: "text", text: "{{borrowerName}}, {{borrowerAddress}} ({{borrowerContact}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Principal Amount" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Lender agrees to lend the Borrower a principal sum of {{principalAmount}}, to be advanced on {{startDate}}. The Borrower acknowledges receipt of the principal and promises to repay it in full." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Interest" }] },
          { type: "paragraph", content: [{ type: "text", text: "Interest shall accrue on the outstanding principal at a rate of {{interestRate}} per annum, calculated on the reducing balance. Interest continues to accrue on any overdue amount until paid in full." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Repayment Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Borrower shall repay the loan over a term of {{loanTerm}}, maturing on {{maturityDate}}, in installments of {{installmentAmount}} per period. Repayment schedule: {{repaymentSchedule}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Prepayment" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{prepaymentTerms}} Any prepayment shall be applied first to accrued interest and then to outstanding principal." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Collateral & Security" }] },
          { type: "paragraph", content: [{ type: "text", text: "As security for the loan, the Borrower grants the Lender a security interest in the following collateral: {{collateralDescription}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Events of Default" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{defaultTerms}} Upon default, the entire unpaid balance of principal and accrued interest shall become immediately due and payable at the Lender option. This Agreement is governed by {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Lender: " }, { type: "text", text: "{{lenderSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Borrower: " }, { type: "text", text: "{{borrowerSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "subcontractor-agreement",
    slug: "subcontractor-agreement",
    title: "Subcontractor Agreement Template",
    description: "Subcontractor agreement template for construction and trades covering scope of work, flow-down obligations, payment schedule, insurance, indemnification, and lien waivers.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Subcontractor Agreement Template",
      fields: ["contractorName", "contractorCompany", "contractorAddress", "subcontractorName", "subcontractorCompany", "subcontractorAddress", "projectName", "projectSiteAddress", "scopeOfWork", "startDate", "completionDate", "contractPrice", "paymentSchedule", "retainagePercent", "insuranceRequirement", "indemnification", "lienWaiver", "contractorSignature", "subcontractorSignature"],
      layout: {
        header: "SUBCONTRACTOR AGREEMENT",
        footer: "Subcontractor obligations flow down from the prime contract between the Contractor and the project Owner."
      },
      styles: {
        primaryColor: "#b45309",
        secondaryColor: "#92400e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SUBCONTRACTOR AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Subcontractor Agreement is made between {{contractorName}} of {{contractorCompany}} (the Contractor) and {{subcontractorName}} of {{subcontractorCompany}} (the Subcontractor) for work on the {{projectName}} project." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{contractorName}}, {{contractorCompany}}, {{contractorAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subcontractor: " }, { type: "text", text: "{{subcontractorName}}, {{subcontractorCompany}}, {{subcontractorAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Work" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Subcontractor shall furnish all labor, materials, equipment, and supervision to perform the following work at {{projectSiteAddress}}: {{scopeOfWork}}, in strict accordance with the project plans and specifications." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Schedule" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Subcontractor shall commence work on {{startDate}} and achieve substantial completion by {{completionDate}}, coordinating its work with the Contractor and other trades on site." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Contract Price & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Contractor shall pay the Subcontractor {{contractPrice}} for the work. Progress payments follow: {{paymentSchedule}}. The Contractor may withhold retainage of {{retainagePercent}} until final acceptance." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Flow-Down Obligations" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Subcontractor is bound to the Contractor by the terms of the prime contract and assumes toward the Contractor all obligations the Contractor owes to the Owner with respect to this scope of work." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Insurance & Indemnification" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{insuranceRequirement}} {{indemnification}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Lien Waivers" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{lienWaiver}} The Subcontractor shall provide conditional and unconditional lien waivers with each payment application." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Contractor: " }, { type: "text", text: "{{contractorSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subcontractor: " }, { type: "text", text: "{{subcontractorSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "licensing-agreement",
    slug: "licensing-agreement",
    title: "Licensing Agreement Template",
    description: "Licensing agreement template covering grant of license, licensed property, territory, royalties, quality control, term, and termination for intellectual property deals.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Licensing Agreement Template",
      fields: ["licensorName", "licensorCompany", "licensorAddress", "licenseeName", "licenseeCompany", "licenseeAddress", "licensedProperty", "grantScope", "territory", "exclusivity", "licenseTerm", "startDate", "royaltyRate", "minimumRoyalty", "qualityControl", "terminationClause", "licensorSignature", "licenseeSignature"],
      layout: {
        header: "LICENSING AGREEMENT",
        footer: "All rights not expressly granted herein are reserved by the Licensor."
      },
      styles: {
        primaryColor: "#6d28d9",
        secondaryColor: "#5b21b6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "LICENSING AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Licensing Agreement is made between {{licensorName}} of {{licensorCompany}} (the Licensor) and {{licenseeName}} of {{licenseeCompany}} (the Licensee) concerning the licensed property described below." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensor: " }, { type: "text", text: "{{licensorName}}, {{licensorCompany}}, {{licensorAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensee: " }, { type: "text", text: "{{licenseeName}}, {{licenseeCompany}}, {{licenseeAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Licensed Property" }] },
          { type: "paragraph", content: [{ type: "text", text: "The licensed property consists of {{licensedProperty}}, including all associated trademarks, copyrights, and know-how owned or controlled by the Licensor." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Grant of License" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Licensor grants to the Licensee {{exclusivity}} license to {{grantScope}}. The license is non-transferable and may not be sublicensed without the Licensor prior written consent." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Territory & Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "The license is limited to the following territory: {{territory}}. The term runs for {{licenseTerm}}, commencing {{startDate}}, and renews only upon mutual written agreement." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Royalties" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Licensee shall pay the Licensor a royalty of {{royaltyRate}} on net sales of licensed products, subject to a minimum guaranteed royalty of {{minimumRoyalty}}. The Licensee shall render quarterly royalty statements and permit the Licensor to audit its records." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Quality Control" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{qualityControl}} The Licensee shall submit samples of licensed products for approval before commercial distribution to protect the goodwill of the licensed marks." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationClause}} Upon termination, the Licensee shall cease all use of the licensed property and dispose of remaining inventory only as the Licensor directs." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensor: " }, { type: "text", text: "{{licensorSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensee: " }, { type: "text", text: "{{licenseeSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "non-compete-agreement",
    slug: "non-compete-agreement",
    title: "Non-Compete Agreement Template",
    description: "Non-compete agreement template covering restricted activities, restricted period, geographic scope, non-solicitation, consideration, and remedies for departing employees.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Non-Compete Agreement Template",
      fields: ["companyName", "companyAddress", "employeeFullName", "employeeAddress", "employeeContact", "effectiveDate", "restrictedActivities", "restrictedPeriod", "geographicScope", "nonSolicitation", "consideration", "confidentialityClause", "remediesClause", "governingLaw", "employerSignature", "employeeSignature"],
      layout: {
        header: "NON-COMPETE AGREEMENT",
        footer: "Restrictive covenants are enforceable only to the extent reasonable under applicable law."
      },
      styles: {
        primaryColor: "#9f1239",
        secondaryColor: "#881337"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "NON-COMPETE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Non-Compete Agreement is made between {{companyName}} (the Company) and {{employeeFullName}} (the Employee), effective {{effectiveDate}}, in consideration of the Employee access to the Company confidential information and goodwill." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Company: " }, { type: "text", text: "{{companyName}}, {{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee: " }, { type: "text", text: "{{employeeFullName}}, {{employeeAddress}} ({{employeeContact}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Consideration" }] },
          { type: "paragraph", content: [{ type: "text", text: "In exchange for the covenants in this Agreement, the Company provides the Employee the following consideration: {{consideration}}. The Employee acknowledges this consideration is adequate and bargained-for." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Restricted Activities" }] },
          { type: "paragraph", content: [{ type: "text", text: "During the restricted period, the Employee shall not engage, directly or indirectly, in the following competing activities: {{restrictedActivities}}, whether as an owner, employee, contractor, or advisor." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Restricted Period" }] },
          { type: "paragraph", content: [{ type: "text", text: "The restrictions in this Agreement apply during employment and continue for {{restrictedPeriod}} following the termination of the Employee employment for any reason." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Geographic Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "The restrictions apply within the following geographic area: {{geographicScope}}, which the parties agree is reasonable and necessary to protect the Company legitimate business interests." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Non-Solicitation & Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{nonSolicitation}} {{confidentialityClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Remedies & Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{remediesClause}} The Company shall be entitled to injunctive relief for any breach. This Agreement is governed by {{governingLaw}}, and any unenforceable provision shall be reformed to the maximum enforceable extent." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Company: " }, { type: "text", text: "{{employerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee: " }, { type: "text", text: "{{employeeSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "joint-venture-agreement",
    slug: "joint-venture-agreement",
    title: "Joint Venture Agreement Template",
    description: "Joint venture agreement template covering venture purpose, capital contributions, profit and loss allocation, management and governance, and exit and dissolution terms.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Joint Venture Agreement Template",
      fields: ["ventureName", "party1Name", "party1Company", "party1Address", "party2Name", "party2Company", "party2Address", "venturePurpose", "effectiveDate", "party1Contribution", "party2Contribution", "profitAllocation", "managementStructure", "votingRights", "termDuration", "exitStrategy", "party1Signature", "party2Signature"],
      layout: {
        header: "JOINT VENTURE AGREEMENT",
        footer: "This joint venture does not create a general partnership beyond the stated business purpose."
      },
      styles: {
        primaryColor: "#0e7490",
        secondaryColor: "#155e75"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "JOINT VENTURE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Joint Venture Agreement is made between {{party1Name}} of {{party1Company}} and {{party2Name}} of {{party2Company}} to establish the joint venture known as {{ventureName}}, effective {{effectiveDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Venturer 1: " }, { type: "text", text: "{{party1Name}}, {{party1Company}}, {{party1Address}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Venturer 2: " }, { type: "text", text: "{{party2Name}}, {{party2Company}}, {{party2Address}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Purpose of the Venture" }] },
          { type: "paragraph", content: [{ type: "text", text: "The parties form this joint venture for the limited purpose of {{venturePurpose}}. The venture is confined to this purpose and neither party is authorized to bind the other outside its scope." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Capital Contributions" }] },
          { type: "paragraph", content: [{ type: "text", text: "Venturer 1 shall contribute {{party1Contribution}} and Venturer 2 shall contribute {{party2Contribution}}. Additional capital calls require the consent of both parties in proportion to their interests." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Profit & Loss Allocation" }] },
          { type: "paragraph", content: [{ type: "text", text: "Net profits and losses of the venture shall be allocated as follows: {{profitAllocation}}. Distributions shall be made only after reserves reasonably determined by the management committee." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Management & Governance" }] },
          { type: "paragraph", content: [{ type: "text", text: "The venture shall be managed as follows: {{managementStructure}}. Voting rights and major decisions: {{votingRights}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "The venture continues for {{termDuration}} unless extended or earlier dissolved by written agreement of the parties or by operation of this Agreement." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Exit & Dissolution" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{exitStrategy}} Upon dissolution, the assets of the venture shall be applied first to liabilities and then distributed to the parties in proportion to their capital accounts." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Venturer 1: " }, { type: "text", text: "{{party1Signature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Venturer 2: " }, { type: "text", text: "{{party2Signature}}" }] }
        ]
      }
    }
  },
  {
    id: "equipment-rental-agreement",
    slug: "equipment-rental-agreement",
    title: "Equipment Rental Agreement Template",
    description: "Equipment rental agreement template covering leased equipment, rental rate and period, delivery and return, maintenance, damage liability, and insurance for machinery hire.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Equipment Rental Agreement Template",
      fields: ["ownerName", "ownerCompany", "ownerAddress", "renterName", "renterCompany", "renterAddress", "equipmentDescription", "serialNumber", "rentalRate", "rentalPeriod", "startDate", "returnDate", "deliveryTerms", "securityDeposit", "maintenanceResponsibility", "damageLiability", "insuranceRequirement", "ownerSignature", "renterSignature"],
      layout: {
        header: "EQUIPMENT RENTAL AGREEMENT",
        footer: "Title to the equipment remains with the Owner at all times during the rental period."
      },
      styles: {
        primaryColor: "#c2410c",
        secondaryColor: "#9a3412"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "EQUIPMENT RENTAL AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Equipment Rental Agreement is made between {{ownerName}} of {{ownerCompany}} (the Owner) and {{renterName}} of {{renterCompany}} (the Renter) for the rental of the equipment described below." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Owner: " }, { type: "text", text: "{{ownerName}}, {{ownerCompany}}, {{ownerAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Renter: " }, { type: "text", text: "{{renterName}}, {{renterCompany}}, {{renterAddress}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Leased Equipment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Owner rents to the Renter the following equipment: {{equipmentDescription}} (Serial No. {{serialNumber}}). The Renter acknowledges receiving the equipment in good working condition." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Rental Rate & Period" }] },
          { type: "paragraph", content: [{ type: "text", text: "The rental rate is {{rentalRate}} for a rental period of {{rentalPeriod}}, running from {{startDate}} to {{returnDate}}. Rent is due in advance and is non-refundable for early return." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Delivery & Return" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{deliveryTerms}} The Renter shall return the equipment on {{returnDate}} in the same condition as received, ordinary wear and tear excepted, or pay overdue rental at the daily rate." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Security Deposit" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Renter shall pay a refundable security deposit of {{securityDeposit}}, which the Owner may apply against unpaid rent, cleaning, repair, or replacement costs." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Maintenance & Damage" }] },
          { type: "paragraph", content: [{ type: "text", text: "Maintenance responsibility: {{maintenanceResponsibility}}. Damage liability: {{damageLiability}} The Renter is liable for loss or damage from misuse or negligence." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Insurance" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{insuranceRequirement}} The Renter shall name the Owner as an additional insured and provide a certificate of insurance before the equipment is released." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Owner: " }, { type: "text", text: "{{ownerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Renter: " }, { type: "text", text: "{{renterSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "catering-contract",
    slug: "catering-contract",
    title: "Catering Services Contract Template",
    description: "Catering services contract template covering event details, menu and headcount, service staff, pricing and deposit, cancellation, and food safety for weddings and corporate events.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Catering Services Contract Template",
      fields: ["catererName", "catererCompany", "catererContact", "clientName", "clientContact", "eventName", "eventDate", "eventLocation", "guestCount", "menuDetails", "serviceStaff", "beverageService", "totalCost", "depositAmount", "balanceDueDate", "cancellationPolicy", "foodSafetyTerms", "catererSignature", "clientSignature"],
      layout: {
        header: "CATERING SERVICES CONTRACT",
        footer: "Final guest count and menu selections are due no later than the agreed cutoff before the event."
      },
      styles: {
        primaryColor: "#be185d",
        secondaryColor: "#9d174d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CATERING SERVICES CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Catering Services Contract is made between {{catererName}} of {{catererCompany}} (the Caterer) and {{clientName}} (the Client) for catering services at the event described below." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Caterer: " }, { type: "text", text: "{{catererName}}, {{catererCompany}} ({{catererContact}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}} ({{clientContact}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Event Details" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Caterer shall provide catering for {{eventName}} on {{eventDate}} at {{eventLocation}}, serving an estimated {{guestCount}} guests." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Menu & Headcount" }] },
          { type: "paragraph", content: [{ type: "text", text: "The agreed menu is: {{menuDetails}}. The final guaranteed guest count must be confirmed before the event and the Client is billed for the guaranteed count even if fewer guests attend." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Service Staff & Beverages" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Caterer shall provide the following service staff: {{serviceStaff}}. Beverage service: {{beverageService}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Pricing & Deposit" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total cost is {{totalCost}}. A non-refundable deposit of {{depositAmount}} is required to reserve the date, with the balance due by {{balanceDueDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Cancellation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationPolicy}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Food Safety & Compliance" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{foodSafetyTerms}} The Caterer warrants that all food is prepared and handled in compliance with applicable health codes and holds current food handling permits." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Caterer: " }, { type: "text", text: "{{catererSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "web-development-contract",
    slug: "web-development-contract",
    title: "Web Development Contract Template",
    description: "Web development contract template covering project scope, milestones and timeline, fees and payment, hosting and maintenance, IP ownership, and acceptance testing for websites.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Web Development Contract Template",
      fields: ["developerName", "developerCompany", "developerContact", "clientName", "clientCompanyName", "clientContact", "projectName", "projectScope", "technologyStack", "startDate", "launchDate", "milestones", "totalFee", "depositAmount", "paymentSchedule", "ownershipRights", "hostingMaintenance", "acceptanceTesting", "developerSignature", "clientSignature"],
      layout: {
        header: "WEB DEVELOPMENT CONTRACT",
        footer: "Source code ownership transfers to the Client upon receipt of final payment in full."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#3730a3"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEB DEVELOPMENT CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Web Development Contract is made between {{developerName}} of {{developerCompany}} (the Developer) and {{clientName}} of {{clientCompanyName}} (the Client) for the design and build of {{projectName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Developer: " }, { type: "text", text: "{{developerName}}, {{developerCompany}} ({{developerContact}})" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompanyName}} ({{clientContact}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Work" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Developer shall design, build, and deliver the website as follows: {{projectScope}}, using the following technology stack: {{technologyStack}}. Work outside this scope constitutes a change order billed separately." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Milestones & Timeline" }] },
          { type: "paragraph", content: [{ type: "text", text: "Development begins {{startDate}} with a target launch of {{launchDate}}. Key milestones: {{milestones}}. Client delays in providing content or approvals extend deadlines accordingly." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total project fee is {{totalFee}}, with a deposit of {{depositAmount}} due at signing. Remaining payments follow: {{paymentSchedule}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Acceptance Testing" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{acceptanceTesting}} The Client shall review each deliverable and provide written acceptance or a list of defects within the agreed review window, after which the deliverable is deemed accepted." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Intellectual Property" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{ownershipRights}} The Developer retains the right to reuse general skills, know-how, and third-party open-source components under their respective licenses." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Hosting & Maintenance" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hostingMaintenance}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Developer: " }, { type: "text", text: "{{developerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "severance-agreement",
    slug: "severance-agreement",
    title: "Severance Agreement Template",
    description: "Severance agreement template covering separation date, severance pay, benefits continuation, release of claims, return of property, and confidentiality for departing employees.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Severance Agreement Template",
      fields: ["companyName", "companyAddress", "hrRepresentative", "employeeFullName", "employeeAddress", "employeeContact", "separationDate", "severancePay", "severancePaymentTerms", "benefitsContinuation", "accruedPto", "releaseOfClaims", "returnOfProperty", "confidentialityClause", "revocationPeriod", "governingLaw", "employerSignature", "employeeSignature"],
      layout: {
        header: "SEVERANCE AGREEMENT",
        footer: "The employee may consider and revoke this release within the statutory review period before it becomes effective."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#1e293b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SEVERANCE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Severance Agreement and Release is made between {{companyName}} (the Company) and {{employeeFullName}} (the Employee) to set out the terms of the Employee separation from employment." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Parties" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Company: " }, { type: "text", text: "{{companyName}}, {{companyAddress}}. HR Contact: {{hrRepresentative}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee: " }, { type: "text", text: "{{employeeFullName}}, {{employeeAddress}} ({{employeeContact}})" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Separation Date" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Employee employment with the Company ends effective {{separationDate}}. The parties agree this Agreement is not an admission of wrongdoing by either party." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Severance Pay" }] },
          { type: "paragraph", content: [{ type: "text", text: "In consideration of the release below, the Company shall pay the Employee severance of {{severancePay}}, paid as follows: {{severancePaymentTerms}}, less lawful withholdings. The Company shall also pay out {{accruedPto}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Benefits Continuation" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{benefitsContinuation}} Information about continuation of group health coverage will be provided under separate cover." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Release of Claims" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{releaseOfClaims}} The Employee releases the Company from all claims arising out of the employment or its termination, to the fullest extent permitted by law." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Return of Property & Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{returnOfProperty}} {{confidentialityClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Review & Revocation" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Employee has the stated period to review this Agreement and may revoke it within {{revocationPeriod}} after signing. This Agreement is governed by {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Company: " }, { type: "text", text: "{{employerSignature}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Employee: " }, { type: "text", text: "{{employeeSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "contract-roommate",
    slug: "contract-roommate",
    title: "Roommate Agreement Template",
    description: "Shared-housing agreement covering rent split, deposit, utilities, chores, quiet hours, guests, and move-out notice.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Roommate Agreement",
      fields: ["primaryTenantName", "roommateName", "propertyAddress", "effectiveDate", "leaseTermMonths", "monthlyRent", "rentSplit", "securityDeposit", "depositSplit", "utilitiesSplitMethod", "choresSchedule", "quietHours", "guestPolicy", "moveOutNoticePeriod", "governingLaw"],
      layout: { header: "ROOMMATE AGREEMENT", footer: "Signed voluntarily by both roommates as a good-faith house agreement." },
      styles: { primaryColor: "#0f766e", secondaryColor: "#134e4a" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "ROOMMATE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This agreement is made on {{effectiveDate}} between {{primaryTenantName}} and {{roommateName}} (the Roommates) for the shared residence at {{propertyAddress}}, for a term of {{leaseTermMonths}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Rent" }] },
          { type: "paragraph", content: [{ type: "text", text: "Total monthly rent is {{monthlyRent}}, split {{rentSplit}}. Each roommate pays their share by the 1st of each month directly to the landlord or designated account." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Security Deposit" }] },
          { type: "paragraph", content: [{ type: "text", text: "The security deposit of {{securityDeposit}} is contributed {{depositSplit}} and refunded on the same basis after deductions for damage beyond normal wear." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Utilities & Shared Costs" }] },
          { type: "paragraph", content: [{ type: "text", text: "Electricity, water, internet and shared supplies are divided {{utilitiesSplitMethod}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. House Rules" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Chores: " }, { type: "text", text: "{{choresSchedule}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Quiet hours: " }, { type: "text", text: "{{quietHours}}" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Guests: " }, { type: "text", text: "{{guestPolicy}}" }] }] }
          ] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Moving Out" }] },
          { type: "paragraph", content: [{ type: "text", text: "A roommate who intends to leave must give {{moveOutNoticePeriod}} written notice and remains responsible for their share until a replacement is agreed. This agreement is governed by {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Roommate 1: " }, { type: "text", text: "{{primaryTenantName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Roommate 2: " }, { type: "text", text: "{{roommateName}}" }] }
        ]
      }
    }
  },
  {
    id: "contract-social-media",
    slug: "contract-social-media",
    title: "Social Media Management Contract Template",
    description: "Agreement for social media management services — platform scope, posting cadence, retainer, approvals, reporting, and content ownership.",
    isPremium: true,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Social Media Management Contract",
      fields: ["companyName", "clientName", "clientCompany", "effectiveDate", "endDate", "platformScope", "postsPerMonth", "monthlyRetainer", "contentApprovalProcess", "responseTimeSla", "reportingFrequency", "adSpendManagementFee", "contentOwnership", "terminationClause"],
      layout: { header: "SOCIAL MEDIA MANAGEMENT AGREEMENT", footer: "Either party may terminate per the notice terms below." },
      styles: { primaryColor: "#7c3aed", secondaryColor: "#4c1d95" },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOCIAL MEDIA MANAGEMENT AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This agreement is made on {{effectiveDate}} between {{companyName}} (the Agency) and {{clientName}} of {{clientCompany}} (the Client), running through {{endDate}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Agency will manage the Client's presence across {{platformScope}}, producing and scheduling {{postsPerMonth}} and engaging with the community during business days." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Client pays a monthly retainer of {{monthlyRetainer}}. Paid advertising is billed separately, plus an ad-spend management fee of {{adSpendManagementFee}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Approvals & Response Times" }] },
          { type: "paragraph", content: [{ type: "text", text: "Content follows this approval process: {{contentApprovalProcess}}. The Agency responds to Client requests within {{responseTimeSla}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Reporting & Ownership" }] },
          { type: "paragraph", content: [{ type: "text", text: "Performance reporting is delivered {{reportingFrequency}}. Content ownership: {{contentOwnership}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Term & Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationClause}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Agency: " }, { type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{clientName}}, {{clientCompany}}" }] }
        ]
      }
    }
  }
];
