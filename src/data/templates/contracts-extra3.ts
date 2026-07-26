// contracts-extra3.ts — 10 additional contract templates (Week 2)
const mkContract = (id: string, title: string, desc: string, color: string, fields: string[], heading: string, rows: string[][]): any => ({
  id, slug: id, title, description: desc, isPremium: false, categorySlug: "contracts", categoryName: "Contracts",
  content: { title, fields, layout: { header: heading }, styles: { primaryColor: color, secondaryColor: "#1e3a8a" },
    editorState: { type: "doc", content: [
      { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: heading }] },
      { type: "paragraph", content: [{ type: "text", text: "This agreement is entered into between {{partyA}} and {{partyB}} on {{date}}." }] },
      ...rows.map(([h, body]) => ({
        type: "paragraph", content: [
          { type: "text", marks: [{ type: "bold" }], text: h + ": " },
          { type: "text", text: body }
        ]
      })),
      { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Signed by: " }, { type: "text", text: "{{partyA}} _____________ Date: _____   {{partyB}} _____________ Date: _____" }] }
    ] }
  }
});

export const contractsExtra3Templates: any[] = [
  mkContract("web-design-contract", "Web Design Contract Template", "Free web design contract template covering scope, revisions, IP, payment milestones, and hosting handover — for web designers and agencies.", "#2563eb", ["partyA","partyB","date","projectName","deliverables","revisions","totalFee","paymentSchedule","ipTransfer","hostingDetails"],
    "WEB DESIGN CONTRACT", [["Project", "{{projectName}}"], ["Deliverables", "{{deliverables}}"], ["Revisions", "{{revisions}} rounds included"], ["Total Fee", "{{totalFee}} — paid as: {{paymentSchedule}}"], ["IP Transfer", "{{ipTransfer}}"], ["Hosting", "{{hostingDetails}}"]]),
  mkContract("social-media-management-contract", "Social Media Management Contract Template", "Free social media management contract for agencies and freelancers covering monthly deliverables, content approval, reporting, and termination.", "#7c3aed", ["partyA","partyB","date","channels","monthlyDeliverables","contentApproval","monthlyFee","reportingSchedule","termNotice"],
    "SOCIAL MEDIA MANAGEMENT AGREEMENT", [["Channels Managed", "{{channels}}"], ["Monthly Deliverables", "{{monthlyDeliverables}}"], ["Content Approval", "{{contentApproval}}"], ["Monthly Fee", "{{monthlyFee}}"], ["Reporting", "{{reportingSchedule}}"], ["Termination", "{{termNotice}} days written notice"]]),
  mkContract("video-production-contract", "Video Production Contract Template", "Free video production contract for videographers and production companies — covers shoot schedule, deliverables, usage rights, and revision policy.", "#dc2626", ["partyA","partyB","date","projectTitle","shootDates","rawFootage","editedDeliverables","usageRights","totalFee","depositAmount"],
    "VIDEO PRODUCTION AGREEMENT", [["Project", "{{projectTitle}}"], ["Shoot Dates", "{{shootDates}}"], ["Deliverables", "{{editedDeliverables}}"], ["Raw Footage", "{{rawFootage}}"], ["Usage Rights", "{{usageRights}}"], ["Total Fee", "{{totalFee}} — Deposit: {{depositAmount}}"]]),
  mkContract("coaching-contract", "Coaching Contract Template", "Free life coaching and business coaching contract — covers program structure, session frequency, payment, cancellation, and confidentiality.", "#059669", ["partyA","partyB","date","programName","sessionCount","sessionFrequency","programDuration","totalFee","paymentSchedule","cancellationPolicy"],
    "COACHING AGREEMENT", [["Program", "{{programName}}"], ["Sessions", "{{sessionCount}} sessions, {{sessionFrequency}}"], ["Duration", "{{programDuration}}"], ["Total Fee", "{{totalFee}} — paid as: {{paymentSchedule}}"], ["Cancellation Policy", "{{cancellationPolicy}}"]]),
  mkContract("photography-contract", "Photography Contract Template", "Free photography contract for event and portrait photographers — covers shoot details, delivery timeline, usage rights, and model release.", "#0891b2", ["photographerName","clientName","date","eventType","eventDate","deliveryTimeline","imagesDelivered","usageRights","totalFee","depositAmount"],
    "PHOTOGRAPHY AGREEMENT", [["Event Type", "{{eventType}} — {{eventDate}}"], ["Images", "{{imagesDelivered}} edited images"], ["Delivery", "Within {{deliveryTimeline}}"], ["Usage Rights", "{{usageRights}}"], ["Fee", "{{totalFee}} — Deposit: {{depositAmount}}"]]),
  mkContract("it-service-agreement", "IT Service Agreement Template", "Free IT service agreement for managed service providers and IT consultants — covers service scope, SLAs, response times, and monthly billing.", "#1e40af", ["partyA","partyB","date","serviceScope","slaResponseTime","slaUptimeGuarantee","exclusions","monthlyFee","contractTerm","termNotice"],
    "IT SERVICE AGREEMENT", [["Services", "{{serviceScope}}"], ["Response Time SLA", "{{slaResponseTime}}"], ["Uptime Guarantee", "{{slaUptimeGuarantee}}"], ["Exclusions", "{{exclusions}}"], ["Monthly Fee", "{{monthlyFee}}"], ["Term", "{{contractTerm}} — {{termNotice}} days termination notice"]]),
  mkContract("marketing-services-contract", "Marketing Services Contract Template", "Free marketing services contract for digital marketing agencies covering campaign scope, deliverables, reporting, IP, and monthly retainer.", "#be185d", ["partyA","partyB","date","campaignScope","monthlyDeliverables","reportingCadence","adBudgetOwnership","monthlyFee","contractTerm","ipOwnership"],
    "MARKETING SERVICES AGREEMENT", [["Campaign Scope", "{{campaignScope}}"], ["Monthly Deliverables", "{{monthlyDeliverables}}"], ["Reporting", "{{reportingCadence}}"], ["Ad Budget", "{{adBudgetOwnership}}"], ["Monthly Fee", "{{monthlyFee}}"], ["IP Ownership", "{{ipOwnership}}"]]),
  mkContract("music-producer-contract", "Music Producer Contract Template", "Free music producer contract covering beat licensing, master ownership, royalty splits, exclusive vs non-exclusive rights, and credit requirements.", "#7c3aed", ["producerName","artistName","date","trackTitle","licensingType","royaltySplit","masterOwnership","creditRequirements","totalFee","deliveryDate"],
    "MUSIC PRODUCTION AGREEMENT", [["Track", "{{trackTitle}}"], ["License Type", "{{licensingType}}"], ["Royalty Split", "{{royaltySplit}}"], ["Master Ownership", "{{masterOwnership}}"], ["Credit Requirement", "{{creditRequirements}}"], ["Fee", "{{totalFee}} — Delivery by {{deliveryDate}}"]]),
  mkContract("virtual-assistant-contract", "Virtual Assistant Contract Template", "Free virtual assistant contract covering services, hours per week, communication tools, data access, confidentiality, and hourly rate.", "#0369a1", ["partyA","partyB","date","serviceScope","hoursPerWeek","communicationTools","dataAccessPolicy","hourlyRate","billingSchedule","termNotice"],
    "VIRTUAL ASSISTANT SERVICE AGREEMENT", [["Services", "{{serviceScope}}"], ["Hours/Week", "{{hoursPerWeek}}"], ["Communication", "{{communicationTools}}"], ["Data Access", "{{dataAccessPolicy}}"], ["Rate", "{{hourlyRate}}/hr — billed {{billingSchedule}}"], ["Termination", "{{termNotice}} days notice"]]),
  mkContract("event-planning-contract", "Event Planning Contract Template", "Free event planning contract for event planners and coordinators — covers scope, vendor coordination, budget management, cancellation, and fee structure.", "#f59e0b", ["plannerName","clientName","date","eventDate","eventType","serviceScope","estimatedBudget","plannerFee","cancellationPolicy","forceManure"],
    "EVENT PLANNING AGREEMENT", [["Event", "{{eventType}} — {{eventDate}}"], ["Services", "{{serviceScope}}"], ["Estimated Budget", "{{estimatedBudget}}"], ["Planner Fee", "{{plannerFee}}"], ["Cancellation", "{{cancellationPolicy}}"]]),
];
