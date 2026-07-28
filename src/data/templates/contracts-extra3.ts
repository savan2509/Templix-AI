// contracts-extra3.ts — 10 additional full-page contract templates
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
    layout: { header: heading, footer: "Executed as a legally binding agreement. Retained by both parties." },
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
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Party A / Provider: " }, { type: "text", text: "{{partyA}} — Signature: _______________________ Date: {{date}}" }] },
        { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Party B / Client: " }, { type: "text", text: "{{partyB}} — Signature: _______________________ Date: {{date}}" }] }
      ]
    }
  }
});

export const contractsExtra3Templates: any[] = [
  mkFullContract(
    "web-design-contract",
    "Web Design Contract Template",
    "Free web design contract template covering scope, revisions, IP, payment milestones, and hosting handover — for web designers and agencies.",
    "#2563eb",
    ["partyA", "partyB", "date", "projectName", "deliverables", "revisions", "totalFee", "paymentSchedule", "ipTransfer", "hostingDetails"],
    "WEB DESIGN CONTRACT",
    "This Web Design Contract is executed on {{date}} between {{partyA}} (Designer) and {{partyB}} (Client) for {{projectName}}.",
    [
      { title: "Design Scope & Deliverables", text: "The Designer agrees to create visual mockups, Figma prototypes, and responsive web templates: {{deliverables}}." },
      { title: "Revision Policy", text: "The total fee includes {{revisions}} rounds of design revisions. Additional design iterations will be billed separately." },
      { title: "Fee & Payment Schedule", text: "The total fee for design services is {{totalFee}}, payable per the following milestone schedule: {{paymentSchedule}}." },
      { title: "Intellectual Property Handoff", text: "Upon receipt of final payment, full copyright and editable design files shall be transferred to the Client: {{ipTransfer}}." },
      { title: "Hosting & Technical Setup", text: "The Designer will assist with DNS configuration, domain connection, and hosting setup: {{hostingDetails}}." },
      { title: "Client Responsibilities", text: "The Client shall provide brand guidelines, copy, and high-resolution logo assets within 7 days of contract execution." },
      { title: "Governing Law", text: "This Contract shall be governed by digital design industry commercial regulations." }
    ]
  ),
  mkFullContract(
    "social-media-management-contract",
    "Social Media Management Contract Template",
    "Free social media management contract for agencies and freelancers covering monthly deliverables, content approval, reporting, and termination.",
    "#7c3aed",
    ["partyA", "partyB", "date", "channels", "monthlyDeliverables", "contentApproval", "monthlyFee", "reportingSchedule", "termNotice"],
    "SOCIAL MEDIA MANAGEMENT AGREEMENT",
    "This Social Media Management Agreement is made on {{date}} between {{partyA}} (Agency) and {{partyB}} (Client).",
    [
      { title: "Managed Platforms & Scope", text: "The Agency will manage and create original content for the following brand accounts: {{channels}}." },
      { title: "Monthly Deliverables & Posting", text: "The Agency agrees to deliver monthly posts, graphics, and video shorts: {{monthlyDeliverables}}." },
      { title: "Content Approval Workflow", text: "All weekly post schedules shall be submitted for Client approval: {{contentApproval}}." },
      { title: "Retainer & Invoicing", text: "The Client agrees to pay a recurring monthly management fee of {{monthlyFee}}." },
      { title: "Performance Reporting", text: "Analytics reports detailing engagement growth, reach, and follower conversion will be provided: {{reportingSchedule}}." },
      { title: "Termination & Offboarding", text: "Either party may terminate this agreement upon {{termNotice}} days written notice. All social account credentials shall be surrendered upon contract conclusion." },
      { title: "Governing Law", text: "This Agreement is governed by digital marketing services laws." }
    ]
  ),
  mkFullContract(
    "video-production-contract",
    "Video Production Contract Template",
    "Free video production contract for videographers and production companies — covers shoot schedule, deliverables, usage rights, and revision policy.",
    "#dc2626",
    ["partyA", "partyB", "date", "projectTitle", "shootDates", "rawFootage", "editedDeliverables", "usageRights", "totalFee", "depositAmount"],
    "VIDEO PRODUCTION AGREEMENT",
    "This Video Production Agreement is made on {{date}} between {{partyA}} (Producer) and {{partyB}} (Client) for {{projectTitle}}.",
    [
      { title: "Production Schedule & Shoot Dates", text: "The Producer will conduct location shooting on the following dates: {{shootDates}}." },
      { title: "Edited Deliverables", text: "Final deliverables include fully color-graded and sound-mixed video files: {{editedDeliverables}}." },
      { title: "Raw Footage Ownership", text: "Terms regarding raw video clips and project files: {{rawFootage}}." },
      { title: "Licensing & Usage Rights", text: "The Client is granted commercial distribution and broadcasting rights: {{usageRights}}." },
      { title: "Compensation & Deposit", text: "The total production fee is {{totalFee}}, with a deposit of {{depositAmount}} due prior to shooting." },
      { title: "Weather & Rescheduling", text: "In the event of severe weather or equipment failure, shoot dates will be rescheduled at no extra cost." },
      { title: "Governing Law", text: "This Agreement is governed by film and commercial media production laws." }
    ]
  ),
  mkFullContract(
    "coaching-contract",
    "Coaching Contract Template",
    "Free life coaching and business coaching contract — covers program structure, session frequency, payment, cancellation, and confidentiality.",
    "#059669",
    ["partyA", "partyB", "date", "programName", "sessionCount", "sessionFrequency", "programDuration", "totalFee", "paymentSchedule", "cancellationPolicy"],
    "COACHING AGREEMENT",
    "This Coaching Agreement is entered into on {{date}} between {{partyA}} (Coach) and {{partyB}} (Client) for {{programName}}.",
    [
      { title: "Coaching Program & Schedule", text: "The Coach will provide {{sessionCount}} 1-on-1 coaching sessions, scheduled {{sessionFrequency}} across a total duration of {{programDuration}}." },
      { title: "Client Responsibilities", text: "Coaching is a collaborative partnership. The Client agrees to actively complete assigned action items between sessions." },
      { title: "Program Fee & Payments", text: "The total program fee is {{totalFee}}, remitted according to the following schedule: {{paymentSchedule}}." },
      { title: "Cancellation & Rescheduling", text: "Sessions cancelled with less than 24 hours notice may be forfeited: {{cancellationPolicy}}." },
      { title: "Confidentiality", text: "The Coach agrees to maintain strict confidentiality concerning all personal and business discussions." },
      { title: "Limitation of Liability", text: "Coaching does not replace licensed medical, psychological, or legal counsel." },
      { title: "Governing Law", text: "This Agreement is governed by professional coaching advisory standards." }
    ]
  ),
  mkFullContract(
    "photography-contract",
    "Photography Contract Template",
    "Free photography contract for event and portrait photographers — covers shoot details, delivery timeline, usage rights, and model release.",
    "#0891b2",
    ["photographerName", "clientName", "date", "eventType", "eventDate", "deliveryTimeline", "imagesDelivered", "usageRights", "totalFee", "depositAmount"],
    "PHOTOGRAPHY AGREEMENT",
    "This Photography Agreement is made on {{date}} between {{photographerName}} (Photographer) and {{clientName}} (Client) for {{eventType}} on {{eventDate}}.",
    [
      { title: "Shoot & Event Coverage", text: "The Photographer will cover the event on {{eventDate}} and deliver high-resolution edited images: {{imagesDelivered}}." },
      { title: "Delivery Timeline", text: "Final digital galleries will be delivered within {{deliveryTimeline}} following the event date." },
      { title: "Usage & Printing Rights", text: "The Client receives personal and digital sharing rights: {{usageRights}}. Copyright remains with the Photographer." },
      { title: "Total Fee & Retainer Deposit", text: "The total fee is {{totalFee}}, with a retainer deposit of {{depositAmount}} required to reserve the date." },
      { title: "Model Release & Portfolio Use", text: "The Photographer retains the right to use selected gallery images for promotional portfolio display." },
      { title: "Cancellation & Refund Terms", text: "Retainer deposits are non-refundable in the event of client cancellation within 30 days of the event." },
      { title: "Governing Law", text: "This Agreement is governed by professional photography contract rules." }
    ]
  ),
  mkFullContract(
    "it-service-agreement",
    "IT Service Agreement Template",
    "Free IT service agreement for managed service providers and IT consultants — covers service scope, SLAs, response times, and monthly billing.",
    "#1e40af",
    ["partyA", "partyB", "date", "serviceScope", "slaResponseTime", "slaUptimeGuarantee", "exclusions", "monthlyFee", "contractTerm", "termNotice"],
    "IT SERVICE AGREEMENT",
    "This IT Service Agreement is made on {{date}} between {{partyA}} (MSP) and {{partyB}} (Client).",
    [
      { title: "Managed IT Services Scope", text: "The MSP will provide remote and on-site technical infrastructure support: {{serviceScope}}." },
      { title: "SLA Response Times & Uptime", text: "The MSP guarantees support response within {{slaResponseTime}} and a target uptime of {{slaUptimeGuarantee}}." },
      { title: "Monthly Retainer Billing", text: "The Client agrees to pay a monthly recurring service fee of {{monthlyFee}}." },
      { title: "Exclusions & Project Billing", text: "Services excluding routine maintenance are billed separately: {{exclusions}}." },
      { title: "Data Security & Backup Audits", text: "The MSP will conduct weekly encrypted cloud backups and patch management audits." },
      { title: "Contract Term & Termination", text: "This agreement spans {{contractTerm}} and may be terminated with {{termNotice}} days notice." },
      { title: "Governing Law", text: "This Agreement is governed by managed IT service contract laws." }
    ]
  ),
  mkFullContract(
    "marketing-services-contract",
    "Marketing Services Contract Template",
    "Free marketing services contract for digital marketing agencies covering campaign scope, deliverables, reporting, IP, and monthly retainer.",
    "#be185d",
    ["partyA", "partyB", "date", "campaignScope", "monthlyDeliverables", "reportingCadence", "adBudgetOwnership", "monthlyFee", "contractTerm", "ipOwnership"],
    "MARKETING SERVICES AGREEMENT",
    "This Marketing Services Agreement is made on {{date}} between {{partyA}} (Agency) and {{partyB}} (Client).",
    [
      { title: "Campaign Scope & Strategy", text: "The Agency will develop and execute digital marketing campaigns: {{campaignScope}}." },
      { title: "Monthly Deliverables", text: "Monthly deliverables include ad creatives, copy, and audience targeting: {{monthlyDeliverables}}." },
      { title: "Reporting Cadence", text: "Campaign ROI and performance metrics will be delivered: {{reportingCadence}}." },
      { title: "Ad Spend & Account Ownership", text: "Terms regarding ad account ownership and direct ad spend: {{adBudgetOwnership}}." },
      { title: "Monthly Fee & Retainer", text: "The Client agrees to pay a monthly retainer fee of {{monthlyFee}} over a contract term of {{contractTerm}}." },
      { title: "IP & Creative Rights", text: "All approved campaign graphics and copywriting belong to the Client: {{ipOwnership}}." },
      { title: "Governing Law", text: "This Agreement is governed by commercial advertising laws." }
    ]
  ),
  mkFullContract(
    "music-producer-contract",
    "Music Producer Contract Template",
    "Free music producer contract covering beat licensing, master ownership, royalty splits, exclusive vs non-exclusive rights, and credit requirements.",
    "#7c3aed",
    ["producerName", "artistName", "date", "trackTitle", "licensingType", "royaltySplit", "masterOwnership", "creditRequirements", "totalFee", "deliveryDate"],
    "MUSIC PRODUCTION AGREEMENT",
    "This Music Production Agreement is made on {{date}} between {{producerName}} (Producer) and {{artistName}} (Artist) for {{trackTitle}}.",
    [
      { title: "Track Title & License Type", text: "The Producer grants the Artist a license to the instrumental track {{trackTitle}}: {{licensingType}}." },
      { title: "Royalty Splits & Mechanicals", text: "Performance and publishing royalties shall be split as follows: {{royaltySplit}}." },
      { title: "Master Recording Ownership", text: "Terms regarding sound recording master ownership: {{masterOwnership}}." },
      { title: "Production Credit Requirements", text: "The Artist agrees to credit the Producer on all digital DSP releases: {{creditRequirements}}." },
      { title: "Producer Fee & Stem Delivery", text: "The total production fee is {{totalFee}}, payable prior to multi-track stem delivery on {{deliveryDate}}." },
      { title: "Warranties & Clearances", text: "The Producer warrants that all samples used in the beat are legally cleared or royalty-free." },
      { title: "Governing Law", text: "This Agreement is governed by music publishing and recording contract laws." }
    ]
  ),
  mkFullContract(
    "virtual-assistant-contract",
    "Virtual Assistant Contract Template",
    "Free virtual assistant contract covering services, hours per week, communication tools, data access, confidentiality, and hourly rate.",
    "#0369a1",
    ["partyA", "partyB", "date", "serviceScope", "hoursPerWeek", "communicationTools", "dataAccessPolicy", "hourlyRate", "billingSchedule", "termNotice"],
    "VIRTUAL ASSISTANT SERVICE AGREEMENT",
    "This Virtual Assistant Service Agreement is made on {{date}} between {{partyA}} (VA) and {{partyB}} (Client).",
    [
      { title: "Administrative Scope of Work", text: "The VA will provide executive administrative and operational support: {{serviceScope}}." },
      { title: "Weekly Hours & Response Times", text: "The VA is engaged for {{hoursPerWeek}} hours per week, communicating via {{communicationTools}}." },
      { title: "Hourly Rate & Billing Cadence", text: "The Client agrees to compensate the VA at {{hourlyRate}} per hour, billed {{billingSchedule}}." },
      { title: "Data Security & Access Policy", text: "Rules governing client password managers and system access: {{dataAccessPolicy}}." },
      { title: "Strict Confidentiality", text: "The VA agrees to hold all client emails, customer data, and internal files strictly confidential." },
      { title: "Termination Notice", text: "Either party may terminate this agreement upon {{termNotice}} days written notice." },
      { title: "Governing Law", text: "This Agreement is governed by independent administrative contractor laws." }
    ]
  ),
  mkFullContract(
    "event-planning-contract",
    "Event Planning Contract Template",
    "Free event planning contract for event planners and coordinators — covers scope, vendor coordination, budget management, cancellation, and fee structure.",
    "#f59e0b",
    ["plannerName", "clientName", "date", "eventDate", "eventType", "serviceScope", "estimatedBudget", "plannerFee", "cancellationPolicy", "forceManure"],
    "EVENT PLANNING AGREEMENT",
    "This Event Planning Agreement is made on {{date}} between {{plannerName}} (Planner) and {{clientName}} (Client) for {{eventType}} on {{eventDate}}.",
    [
      { title: "Event Coordination Scope", text: "The Planner will handle venue selection, vendor negotiations, and day-of coordination: {{serviceScope}}." },
      { title: "Estimated Event Budget", text: "The target overall event execution budget is {{estimatedBudget}}." },
      { title: "Planner Fee & Payment Terms", text: "The Planner's professional fee is {{plannerFee}}, paid in milestone installments." },
      { title: "Vendor Contracts & Liabilities", text: "All third-party vendor contracts (catering, audio, floral) shall be signed directly by the Client." },
      { title: "Cancellation & Refund Terms", text: "Terms governing event cancellation or postponement: {{cancellationPolicy}}." },
      { title: "Force Majeure", text: "The Planner is not liable for weather delays or venue closures beyond reasonable control." },
      { title: "Governing Law", text: "This Agreement is governed by hospitality and event management contract laws." }
    ]
  )
];
