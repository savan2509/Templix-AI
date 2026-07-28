// contracts-extra4.ts — Full-page multi-section contract templates
const mkFullContract = (
  id: string,
  title: string,
  desc: string,
  color: string,
  fields: string[],
  heading: string,
  recitals: string,
  sections: { title: string; text: string }[]
): any => ({
  id,
  slug: id,
  title,
  description: desc,
  isPremium: false,
  categorySlug: "contracts",
  categoryName: "Contracts",
  content: {
    title,
    fields,
    layout: { header: heading, footer: "Executed as a legally binding contract under governing law. Copy retained by both parties." },
    styles: { primaryColor: color, secondaryColor: "#1e3a8a" },
    editorState: {
      type: "doc",
      content: [
        { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: heading }] },
        { type: "paragraph", content: [{ type: "text", text: recitals }] },
        ...sections.flatMap((sec, idx) => [
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: `${idx + 1}. ${sec.title}` }] },
          { type: "paragraph", content: [{ type: "text", text: sec.text }] }
        ]),
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures & Execution" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider / Party A: " }, { type: "text", text: "{{partyA}} — Signature: _______________________ Date: {{date}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client / Party B: " }, { type: "text", text: "{{partyB}} — Signature: _______________________ Date: {{date}}" }] }
      ]
    }
  }
});

export const contractsExtra4Templates: any[] = [
  mkFullContract(
    "freelance-contract",
    "Freelance Contract Template",
    "Free freelance contract template detailing scope of work, milestone deliverables, payment terms, and intellectual property transfer.",
    "#2563eb",
    ["partyA", "partyB", "date", "projectScope", "deliverables", "paymentSchedule", "totalFee", "ipRights"],
    "FREELANCE CONTRACT AGREEMENT",
    "This Freelance Contract Agreement is entered into on {{date}} between {{partyA}} (the Freelancer) and {{partyB}} (the Client).",
    [
      { title: "Scope of Work & Deliverables", text: "The Freelancer agrees to perform services according to the following scope: {{projectScope}}. Deliverables will be provided in accordance with the specified requirements: {{deliverables}}." },
      { title: "Compensation & Payment Schedule", text: "The Client agrees to pay the Freelancer a total project fee of {{totalFee}}. Payments shall be remitted according to the following schedule: {{paymentSchedule}}." },
      { title: "Intellectual Property Ownership", text: "Upon full and final payment of all invoice balances, the Freelancer transfers and assigns all copyright and ownership rights to the Client: {{ipRights}}." },
      { title: "Client Revisions & Approvals", text: "The total fee includes up to two rounds of reasonable revisions. Additional work outside the initial scope will be quoted separately before execution." },
      { title: "Confidentiality & Non-Disclosure", text: "Both parties agree to treat all business information, technical code, financial figures, and customer lists as strictly confidential and proprietary." },
      { title: "Term & Termination", text: "Either party may terminate this Contract upon 14 days written notice. The Freelancer shall be compensated for work completed up to the date of notice." },
      { title: "Governing Law & Jurisdiction", text: "This Contract shall be governed by, construed, and enforced in accordance with applicable commercial contract laws." }
    ]
  ),
  mkFullContract(
    "nda-agreement",
    "NDA Agreement Template",
    "Free Non-Disclosure Agreement (NDA) template for protecting confidential information, trade secrets, and proprietary data between business parties.",
    "#0f172a",
    ["partyA", "partyB", "date", "disclosingParty", "receivingParty", "confidentialInfo", "termYears", "jurisdiction"],
    "MUTUAL NON-DISCLOSURE AGREEMENT",
    "This Mutual Non-Disclosure Agreement is made effective on {{date}} between {{disclosingParty}} (Disclosing Party) and {{receivingParty}} (Receiving Party).",
    [
      { title: "Definition of Confidential Information", text: "Confidential Information includes all trade secrets, financial models, customer lists, software code, and business plans disclosed under this Agreement: {{confidentialInfo}}." },
      { title: "Obligations of Receiving Party", text: "The Receiving Party agrees to hold all Confidential Information in strict confidence and shall not disclose it to any third party without explicit written consent." },
      { title: "Permitted Purpose & Use", text: "Confidential Information disclosed hereunder shall be used solely for evaluating and executing potential joint business opportunities between the parties." },
      { title: "Exclusions from Confidentiality", text: "Confidential Information does not include data already in the public domain, legally received from third parties, or independently developed without reliance on disclosed data." },
      { title: "Term & Duration of Confidentiality", text: "The non-disclosure obligations set forth herein shall remain binding for a period of {{termYears}} years from the effective date of disclosure." },
      { title: "Return or Destruction of Materials", text: "Upon written request, the Receiving Party shall immediately return or destroy all physical and digital copies of disclosed confidential materials." },
      { title: "Governing Law & Remedies", text: "This Agreement shall be governed by the laws of {{jurisdiction}}. Injunctive relief may be sought for any actual or threatened breach." }
    ]
  ),
  mkFullContract(
    "contractor-agreement",
    "Contractor Agreement Template",
    "Free contractor agreement template for construction, maintenance, and technical contractors detailing project scope, compliance, and payment terms.",
    "#d97706",
    ["partyA", "partyB", "date", "contractorName", "projectSite", "scopeOfWork", "safetyCompliance", "contractValue", "paymentMilestones"],
    "INDEPENDENT CONTRACTOR AGREEMENT",
    "This Independent Contractor Agreement is entered into on {{date}} between {{partyA}} (the Principal) and {{contractorName}} (the Contractor) for work at {{projectSite}}.",
    [
      { title: "Project Site & Scope of Work", text: "The Contractor agrees to furnish all labor, materials, tools, and supervision required to complete the following work: {{scopeOfWork}}." },
      { title: "Contract Value & Milestone Payments", text: "The total contract value is {{contractValue}}. Payments will be issued based on certified project completion milestones: {{paymentMilestones}}." },
      { title: "Safety, Permits & Compliance", text: "The Contractor shall obtain all required trade licenses and municipal permits, maintaining full compliance with safety standards: {{safetyCompliance}}." },
      { title: "Independent Contractor Status", text: "The Contractor is an independent entity and not an employee of the Principal. The Contractor is solely responsible for its own taxes and insurance." },
      { title: "Warranties & Defects Period", text: "The Contractor warrants all workmanship and installed materials against defects for a minimum period of 12 months following final inspection." },
      { title: "Insurance & Indemnification", text: "The Contractor shall maintain commercial general liability insurance and hold the Principal harmless against all site injuries or third-party damage." },
      { title: "Termination & Governing Law", text: "Either party may terminate for cause upon 7 days written notice. This Agreement is governed by local commercial building laws." }
    ]
  ),
  mkFullContract(
    "website-development-contract",
    "Website Development Contract Template",
    "Free web development contract template for developers and clients specifying technical scope, milestones, code handoff, and warranty terms.",
    "#7c3aed",
    ["partyA", "partyB", "date", "clientName", "developerName", "projectSpecifications", "milestoneSchedule", "hostingHandover", "warrantyPeriod"],
    "WEBSITE DEVELOPMENT CONTRACT",
    "This Website Development Contract is made on {{date}} between {{developerName}} (the Developer) and {{clientName}} (the Client).",
    [
      { title: "Technical Specifications & Scope", text: "The Developer agrees to design, build, and test a web application adhering to the technical specifications outlined herein: {{projectSpecifications}}." },
      { title: "Project Milestones & Billing", text: "The project shall proceed across structured delivery phases. Milestone payments shall be remitted as follows: {{milestoneSchedule}}." },
      { title: "Testing, Handoff & Deployment", text: "Upon completion of acceptance testing, the Developer shall execute source code repository transfer and server deployment: {{hostingHandover}}." },
      { title: "Intellectual Property & Licensing", text: "Full copyright and ownership of custom code transfers to the Client upon final payment. Open-source elements retain their original licenses." },
      { title: "Post-Launch Bug Fix Warranty", text: "The Developer provides a post-launch warranty covering critical bug remediation for a duration of {{warrantyPeriod}} following release." },
      { title: "Client Content & Assets", text: "The Client is responsible for supplying all copy, high-resolution media, logos, and third-party API credentials required for production." },
      { title: "Governing Law & Jurisdiction", text: "This Contract shall be governed by software engineering industry standard commercial contract laws." }
    ]
  ),
  mkFullContract(
    "maintenance-agreement",
    "Maintenance Agreement Template",
    "Free equipment and software maintenance agreement template for service providers covering support response SLAs, preventive maintenance, and fees.",
    "#059669",
    ["partyA", "partyB", "date", "equipmentCovered", "maintenanceSchedule", "slaResponseTime", "monthlyFee", "termLength"],
    "SERVICE & MAINTENANCE AGREEMENT",
    "This Service & Maintenance Agreement is made on {{date}} between {{partyA}} (Service Provider) and {{partyB}} (Client) for maintenance of {{equipmentCovered}}.",
    [
      { title: "Scope of Maintenance Services", text: "The Provider will deliver routine preventive maintenance, system upgrades, and health checks according to the following cadence: {{maintenanceSchedule}}." },
      { title: "SLA Response Times & Uptime", text: "The Provider guarantees emergency support availability with guaranteed incident response times: {{slaResponseTime}}." },
      { title: "Monthly Retainer & Invoicing", text: "The Client agrees to pay a recurring fee of {{monthlyFee}} payable on the first day of each billing month for a term of {{termLength}}." },
      { title: "Exclusions & Extra Charges", text: "Services do not cover damage resulting from unauthorized modifications, physical disasters, or intentional misuse of covered hardware." },
      { title: "Confidentiality & Data Protection", text: "The Provider will maintain strict confidentiality concerning all client databases, network credentials, and internal IT infrastructure." },
      { title: "Term, Renewal & Cancellation", text: "This Agreement automatically renews for successive 12-month terms unless either party provides 30 days written notice prior to expiration." },
      { title: "Governing Law & Liability", text: "Liability under this Agreement is capped at total maintenance fees paid by the Client in the preceding six months." }
    ]
  ),
  mkFullContract(
    "employment-offer-agreement",
    "Employment Offer Agreement Template",
    "Free job offer letter and employment agreement template covering position title, compensation, benefits, start date, and contingency clauses.",
    "#2563eb",
    ["companyName", "candidateName", "date", "jobTitle", "annualSalary", "startDate", "benefitsSummary", "probationPeriod"],
    "EMPLOYMENT OFFER AGREEMENT",
    "This Employment Offer Agreement is issued on {{date}} by {{companyName}} (Employer) to {{candidateName}} (Employee).",
    [
      { title: "Position Title & Reporting", text: "The Employer is pleased to offer you the position of {{jobTitle}}. You will report directly to executive management at the corporate office." },
      { title: "Base Compensation & Pay Frequency", text: "Your starting base salary will be {{annualSalary}}, paid in accordance with standard payroll procedures and subject to statutory withholdings." },
      { title: "Benefits & Leave Entitlements", text: "You will be eligible to participate in standard company health, dental, and retirement programs: {{benefitsSummary}}." },
      { title: "Start Date & Probationary Term", text: "Your official employment commences on {{startDate}}. Employment is subject to an initial probationary review period of {{probationPeriod}}." },
      { title: "Workplace Policies & Confidentiality", text: "You agree to abide by all internal company handbook policies, IP assignment rules, and strict non-disclosure obligations." },
      { title: "At-Will / Notice Period Terms", text: "Either party may end the employment relationship with standard notice in accordance with local employment standards legislation." },
      { title: "Governing Employment Laws", text: "This offer agreement is governed by state and federal labor regulations." }
    ]
  ),
  mkFullContract(
    "internship-agreement",
    "Internship Agreement Template",
    "Free internship agreement template for student and graduate internships specifying learning objectives, stipend, duration, and workplace policies.",
    "#0891b2",
    ["companyName", "internName", "date", "internshipRole", "stipendAmount", "workHours", "learningObjectives", "durationWeeks"],
    "INTERNSHIP AGREEMENT",
    "This Internship Agreement is made on {{date}} between {{companyName}} (Host Company) and {{internName}} (Intern).",
    [
      { title: "Internship Role & Learning Objectives", text: "The Intern is engaged in the position of {{internshipRole}} to pursue practical learning objectives: {{learningObjectives}}." },
      { title: "Stipend & Schedule", text: "The Host Company will provide an educational stipend of {{stipendAmount}} for a weekly commitment of {{workHours}}." },
      { title: "Program Duration", text: "The internship program spans a total duration of {{durationWeeks}} weeks starting from the effective date." },
      { title: "Mentorship & Evaluations", text: "A designated senior staff mentor will conduct bi-weekly evaluation reviews to monitor learning growth and project deliverables." },
      { title: "Intellectual Property & Code of Conduct", text: "All work product generated during the internship belongs to the Host Company. The Intern agrees to observe workplace safety and professional conduct rules." },
      { title: "Confidentiality & Non-Disclosure", text: "The Intern agrees to keep all customer data, proprietary tools, and internal business communications strictly confidential." },
      { title: "Governing Law", text: "This Agreement is governed by applicable student internship and labor standards." }
    ]
  ),
  mkFullContract(
    "confidentiality-agreement",
    "Confidentiality Agreement Template",
    "Free bilateral confidentiality agreement template for protecting sensitive business data, intellectual property, and trade secrets.",
    "#334155",
    ["partyA", "partyB", "date", "purposeOfDisclosure", "confidentialInformation", "exclusions", "termPeriod", "governingLaw"],
    "CONFIDENTIALITY & PROPRIETARY RIGHTS AGREEMENT",
    "This Confidentiality Agreement is entered into on {{date}} between {{partyA}} and {{partyB}} for {{purposeOfDisclosure}}.",
    [
      { title: "Proprietary Data Protection", text: "Both parties agree that all disclosed technical specifications, financial audits, customer databases, and software architectures constitute {{confidentialInformation}}." },
      { title: "Non-Disclosure & Security Standard", text: "Each party shall protect disclosed information using the same degree of care it uses to protect its own high-security trade secrets." },
      { title: "Exclusions from Protection", text: "Obligations do not extend to data that is {{exclusions}}, or required to be disclosed under court order." },
      { title: "Term of Commitment", text: "The non-disclosure obligations set forth in this Agreement shall remain in full force for a duration of {{termPeriod}}." },
      { title: "Return of Confidential Records", text: "Upon completion of evaluation, all notes, digital files, and physical records shall be permanently deleted or returned." },
      { title: "No License Granted", text: "Nothing in this Agreement grants either party any patent, copyright, or trademark license under disclosed information." },
      { title: "Governing Jurisdiction", text: "This Agreement shall be interpreted under the laws of {{governingLaw}}." }
    ]
  ),
  mkFullContract(
    "purchase-agreement",
    "Purchase Agreement Template",
    "Free purchase and sale agreement template for goods, equipment, and business assets detailing items, price, delivery, and warranty.",
    "#16a34a",
    ["sellerName", "buyerName", "date", "itemDescription", "purchasePrice", "paymentMethod", "deliveryTerms", "inspectionPeriod"],
    "PURCHASE AND SALE AGREEMENT",
    "This Purchase and Sale Agreement is made on {{date}} between {{sellerName}} (Seller) and {{buyerName}} (Buyer).",
    [
      { title: "Items & Assets Sold", text: "The Seller agrees to sell, transfer, and deliver to the Buyer the following equipment and assets: {{itemDescription}}." },
      { title: "Purchase Price & Escrow", text: "The total purchase price is {{purchasePrice}}, payable via {{paymentMethod}} upon execution of this Agreement." },
      { title: "Delivery & Risk of Loss", text: "Title and risk of loss transfer to the Buyer in accordance with the agreed shipping terms: {{deliveryTerms}}." },
      { title: "Inspection & Right of Rejection", text: "The Buyer retains an inspection window of {{inspectionPeriod}} to verify item condition and compliance prior to final acceptance." },
      { title: "Seller Warranties & Title", text: "The Seller warrants that it holds clear title to all sold items, free and clear of all liens, mortgages, or security encumbrances." },
      { title: "Default & Remedies", text: "In the event of default, the non-defaulting party may recover direct damages and enforce specific performance." },
      { title: "Governing Commercial Law", text: "This Agreement is governed by Uniform Commercial Code (UCC) sales principles." }
    ]
  ),
  mkFullContract(
    "business-contract",
    "Business Contract Template",
    "Free general business contract template covering commercial transactions, responsibilities, liability limits, and dispute resolution.",
    "#1e293b",
    ["partyA", "partyB", "date", "businessPurpose", "obligationsA", "obligationsB", "contractValue", "terminationClause", "governingLaw"],
    "GENERAL BUSINESS CONTRACT",
    "This General Business Contract is executed on {{date}} between {{partyA}} and {{partyB}} for {{businessPurpose}}.",
    [
      { title: "Party A Obligations", text: "Party A agrees to fulfill the following commercial responsibilities: {{obligationsA}}." },
      { title: "Party B Obligations", text: "Party B agrees to fulfill the following commercial responsibilities: {{obligationsB}}." },
      { title: "Consideration & Contract Value", text: "In consideration of full performance, the total contract value is {{contractValue}}, billed in regular installments." },
      { title: "Mutual Indemnification", text: "Each party shall indemnify and defend the other against any liability arising from gross negligence or intentional misconduct." },
      { title: "Term & Early Termination", text: "This Contract remains valid until completed or terminated per terms: {{terminationClause}}." },
      { title: "Force Majeure", text: "Neither party shall be held liable for delay resulting from acts of God, war, pandemic, or government restrictions." },
      { title: "Governing Law & Disputes", text: "Disputes shall be settled via binding arbitration in accordance with {{governingLaw}}." }
    ]
  ),
  mkFullContract(
    "consulting-services-contract",
    "Consulting Services Contract Template",
    "Free consulting services agreement template for professional consultants and advisors covering advisory scope, daily/hourly rates, and deliverables.",
    "#4338ca",
    ["consultantName", "clientName", "date", "advisoryScope", "feeStructure", "billingCadence", "reimbursableExpenses", "confidentiality"],
    "CONSULTING SERVICES CONTRACT",
    "This Consulting Services Contract is entered into on {{date}} between {{consultantName}} (Consultant) and {{clientName}} (Client).",
    [
      { title: "Advisory Scope & Services", text: "The Consultant shall provide strategic management advisory services: {{advisoryScope}}." },
      { title: "Fee Structure & Invoicing", text: "The Client shall compensate the Consultant per the agreed rate structure: {{feeStructure}}, billed {{billingCadence}}." },
      { title: "Reimbursable Expenses", text: "Pre-approved out-of-pocket business travel, lodging, and specialized data API costs shall be reimbursed: {{reimbursableExpenses}}." },
      { title: "Independent Consultant Relationship", text: "The Consultant operates as an independent advisor and does not hold authority to legally bind the Client to third-party agreements." },
      { title: "Confidentiality & Data Protection", text: "The Consultant agrees to observe strict confidentiality: {{confidentiality}}." },
      { title: "Work Product Ownership", text: "All advisory reports, slide presentations, and analytical spreadsheets created specifically for the Client belong to the Client." },
      { title: "Governing Law & Severability", text: "This Contract is governed by commercial advisory contract laws." }
    ]
  )
];
