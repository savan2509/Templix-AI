import type { TemplateInsight } from "./template-insights-types";

export const insights1: Record<string, TemplateInsight> = {
  "invoice-freelancer": {
    heading: "What legally must appear on a freelancer invoice",
    paragraphs: [
      "In the US there is no federal invoice form, but a defensible freelancer invoice needs your legal name or business name, address, the client's name and address, a unique invoice number, the issue date, a clear description of services, the amount due, and payment terms. If you collect state sales tax on any taxable deliverables, show the tax as its own line with the rate. Keep your own copy for at least the length of your tax record-keeping window.",
      "Freelancers in India registered under GST must issue a tax invoice showing their GSTIN, the client's GSTIN where applicable, the place of supply, the HSN or SAC code, and CGST/SGST split for intra-state work or IGST for inter-state work. Below the registration threshold you issue a plain bill of supply with no GST charged.",
      "Invoice numbers should be sequential and gap-free within a series (INV-2026-001, INV-2026-002) because auditors and clients both read gaps as missing revenue. Pick a scheme and never reuse a number, even for a cancelled invoice.",
      "Spell out late fees precisely, for example: \"A late fee of 1.5% per month applies to balances unpaid after 30 days.\" The filled sample on this page shows exactly where each element sits so you can match the layout before you send your first one."
    ]
  },
  "invoice-hourly-rate": {
    heading: "How to bill hours defensibly on an hourly-rate invoice",
    paragraphs: [
      "An hourly invoice survives a dispute when each line ties a date, a task, and a duration to your rate. Log time as you work rather than reconstructing it at month end, because contemporaneous notes carry far more weight if a client questions a total. A simple entry like \"2026-07-14 | API auth debugging | 1.75h\" is enough detail to defend without over-exposing your process.",
      "Rounding policy matters more than most freelancers expect. Six-minute (0.1h) increments track closely to real effort and are common in legal and consulting work, while fifteen-minute (0.25h) increments are easier to tally but can inflate short tasks. State your increment on the invoice or in your contract, and round consistently in one direction so you are never accused of padding.",
      "Group entries by day or by project so the subtotal math is visible, then carry the sum into a single billable-hours line times your rate. Attach a full timesheet when the engagement is large, when the client requires backup for their own accounting, or whenever the total is high enough that itemized proof shortens the payment conversation. For small, trusted retainers a summary line is usually enough."
    ]
  },
  "invoice-consulting": {
    heading: "Retainer versus hourly billing on a consulting invoice",
    paragraphs: [
      "Hourly consulting bills for time actually spent, so the invoice total moves month to month. A retainer instead reserves your availability for a fixed fee, and it comes in two flavors: a pay-for-access retainer that you earn whether or not the client uses the hours, and a drawn-down retainer where the client prepays a balance you deplete as you work. Say clearly on the invoice which model applies, because they are accounted for very differently.",
      "To invoice against a drawn-down retainer, show the opening balance, the hours or fees consumed in the period, and the closing balance carried forward. For example: \"Retainer balance brought forward $4,000; services this period 12h @ $150 = $1,800; balance remaining $2,200.\" This keeps both sides aligned on what is left and signals early when a top-up invoice is due.",
      "Reference the engagement so the invoice is not ambiguous, using wording such as \"Per Consulting Agreement dated 2026-05-01, Phase 2 advisory services.\" That single line links the charge to a signed scope, which shortens approvals and protects you if the relationship is later reviewed."
    ]
  },
  "invoice-contractor": {
    heading: "Splitting labor and materials on a contractor invoice",
    paragraphs: [
      "Construction and trade clients expect a clear split between labor and materials, both because the two are often taxed differently and because it lets the client see where money is going. Itemize materials with quantities and unit costs, then show labor as hours times rate or as a lump-sum scope. If you mark up materials, disclose the markup or roll it into transparent unit prices rather than hiding it.",
      "Lien-waiver language varies by US state, and some states prescribe exact statutory wording, so never copy a waiver blindly. A conditional waiver releases lien rights only once a specific payment clears, while an unconditional waiver releases them outright. A common safe practice is to attach a conditional waiver with the invoice and issue the unconditional version only after the payment settles.",
      "Distinguish progress billing from the final invoice. Progress invoices bill a percentage of the contract as work advances and usually note the amount retained, while the final invoice releases retention and closes the job. Where your trade requires it, place your contractor license number near your business details, since some jurisdictions treat an unlicensed invoice as unenforceable."
    ]
  },
  "invoice-graphic-designer": {
    heading: "Billing usage rights and source files as a graphic designer",
    paragraphs: [
      "Design invoices should separate creative labor from the license the client is buying. A logo fee and the right to use that logo are two different things, so add a usage-rights line such as \"License: exclusive commercial use, all media, in perpetuity\" or a narrower grant if you are licensing rather than assigning. Pricing the license explicitly protects you when a client later expands usage beyond the original scope and needs to pay for it.",
      "Include kill-fee terms so cancelled or abandoned projects still compensate you for work done. Sample wording: \"If the project is cancelled after approval of initial concepts, a kill fee of 50% of the quoted total is due.\" This sets expectations before work starts rather than during an awkward exit.",
      "Tie deliverables to payment. Editable source files (the layered AI, PSD, or Figma originals) are valuable, so many designers deliver flattened proofs during review and release source files only on final payment. State it plainly: \"Native source files are released upon receipt of full payment.\" That keeps leverage aligned with your invoice and prevents a common non-payment scenario."
    ]
  },
  "invoice-web-developer": {
    heading: "Milestone versus hourly billing for web development",
    paragraphs: [
      "Fixed-scope builds fit milestone billing, where each invoice maps to a deliverable such as \"design sign-off,\" \"staging deployment,\" or \"production launch,\" each worth a set percentage of the contract. Open-ended or maintenance work fits hourly billing, where you log time against tickets. Many developers combine the two: milestones for the build, hourly for change requests once scope is fixed.",
      "Add a repository-handover clause so ownership is unambiguous. Wording such as \"Full source code and repository access transfer to the client upon final payment\" prevents disputes over who controls the code, and it protects you by tying delivery to being paid rather than to a promise.",
      "Break out support and maintenance as their own line items rather than bundling them into the build. Distinguish warranty bug fixes (defects in what you shipped, often free for a set window) from ongoing maintenance (updates, monitoring, small enhancements) billed at an hourly or monthly retainer rate. A sample line reads: \"Monthly maintenance retainer: up to 4h/month @ $120/h, unused hours do not roll over.\" Clear support terms turn a one-off project into recurring revenue."
    ]
  },
  "invoice-cleaning-service": {
    heading: "Pricing structures on a cleaning-service invoice",
    paragraphs: [
      "Residential cleaners usually price per visit, per room, or by flat rate, while commercial jobs often price per square foot because floor area predicts labor better than room count. Whichever you use, show it on the invoice so the client understands the basis: a per-room job lists each space and its charge, while a per-sqft job shows the area, the rate, and the product. Being explicit reduces \"why is this more than last time\" questions after a larger clean.",
      "Recurring clients typically get a lower rate than one-off deep cleans because scheduled work is easier to route and the space stays maintained. Show the discount as its own line, for example \"Weekly service discount: -15%,\" so the client sees the value of committing to a schedule rather than just a smaller number they cannot explain.",
      "Itemize supplies when you charge for them separately. Many cleaners fold standard products into the labor rate but bill specialty items (floor stripper, grout treatment, equipment rental) as add-ons. List those with quantities so the client can see they are paying for materials, not padded labor, which keeps the relationship transparent and repeat-friendly."
    ]
  },
  "invoice-photography": {
    heading: "Handling deposits and image licenses on a photography invoice",
    paragraphs: [
      "Most photographers take a retainer or deposit to hold the date, and the invoice should record it clearly: show the total fee, the deposit already paid, and the balance due, for example \"Session fee $1,200; deposit received $400; balance due $800.\" State whether the deposit is non-refundable, since that is the term most often disputed after a cancellation.",
      "Separate the shoot from the license, because clients are paying both for your time and for the right to use the images. Add an image-license line such as \"License: personal, non-commercial use of delivered images\" or a broader commercial grant when the client needs it. Print and commercial licenses should be priced above personal use, and note that raw or unedited files are typically not part of standard delivery.",
      "Set delivery-timeline terms so expectations are fixed in writing, for example \"Edited gallery delivered within 3 weeks of the session.\" Finally, be aware that sales tax on photography services varies by US state: some tax the service, some tax only tangible prints and products, and some tax neither, so confirm your state's treatment before deciding whether to add a tax line."
    ]
  },
  "invoice-hvac-service": {
    heading: "Itemizing parts, labor, and refrigerant on an HVAC invoice",
    paragraphs: [
      "HVAC invoices read best when parts, labor, and refrigerant are on separate lines. List each part with quantity and price, show labor as hours times rate or as a flat diagnostic and repair fee, and bill refrigerant by the pound with the type (for example R-410A) noted. Keeping refrigerant distinct matters because it is regulated, priced volatile, and often the line a customer questions most.",
      "Refrigerant handling in the US requires EPA Section 608 certification for technicians who service equipment containing regulated refrigerants, so many contractors reference the tech's certification on the invoice or work order as a mark of compliance. It signals to the customer that the recovery and charging were done legally.",
      "State the warranty on the repair clearly so the customer knows what is covered and for how long. Sample wording: \"Parts and labor on this repair are warranted for 90 days from the service date; manufacturer part warranties apply separately.\" Distinguishing your labor warranty from the manufacturer's part warranty prevents confusion when a different component fails later and avoids an unwarranted callback dispute."
    ]
  },
  "invoice-plumbing": {
    heading: "Service-call fees and parts markup on a plumbing invoice",
    paragraphs: [
      "Most plumbers charge a service-call or call-out fee that covers travel and diagnosis, and it is often credited toward the repair if the customer proceeds. Show it as its own line and state the policy, for example \"Service call fee $89, applied to repair cost if work is authorized today.\" Making the fee visible up front avoids the most common billing complaint, which is being charged just for a technician showing up.",
      "Be transparent about parts markup. Plumbers routinely mark up parts to cover sourcing, stocking, and warranty handling, and customers accept it when it is not hidden. You can either show list prices that include a reasonable margin or note a flat markup percentage; what damages trust is a customer discovering a large undisclosed gap between your price and the store price.",
      "Disclose emergency rates before the work, not on the invoice as a surprise. If after-hours, weekend, or holiday calls carry a premium, state it: \"Emergency/after-hours labor billed at 1.5x standard rate.\" A customer who agreed to the rate on the phone rarely disputes it later, whereas one who first sees it on the bill often does."
    ]
  },
  "invoice-timesheet": {
    heading: "Turning a verified timesheet into a payable invoice",
    paragraphs: [
      "A timesheet invoice is only as strong as its verification, so include a short statement affirming the hours are accurate, such as \"I certify that the hours recorded above reflect work actually performed on the dates shown.\" A signed or clearly attributed certification turns a list of numbers into a document the client's accounts-payable team can approve without a back-and-forth.",
      "Attach evidence when the engagement warrants it. Exports from project-management or time-tracking tools (Jira, Asana, Toggl, Harvest) that show tasks, timestamps, and totals corroborate your figures and make approval faster. Reference the attachment on the invoice so the reviewer knows the backup exists and where to find it.",
      "Set a dispute window so approvals do not drift indefinitely. Wording such as \"Please raise any questions about recorded hours within 7 days of receipt; otherwise the timesheet is deemed accepted\" gives the client a fair chance to review while protecting you from a challenge months later. Pair it with your payment terms so the clock on both review and payment starts on the same date."
    ]
  },
  "invoice-milestone": {
    heading: "Billing percent-of-contract and retention on milestone invoices",
    paragraphs: [
      "Milestone billing splits a contract into deliverable-linked payments, each expressed as a percentage of the total value, for example \"Milestone 2 of 4 - Design approval: 25% of $40,000 = $10,000.\" Show the milestone name, its percentage, the contract total, and the running amount billed to date so both sides can track progress against the whole engagement rather than reading each invoice in isolation.",
      "Many contracts hold back a retention or holdback amount from each milestone (commonly a small percentage) that is released only at project completion or after an acceptance period. Reflect it on the invoice: bill the milestone, then subtract the retained portion and note the accumulating retention balance, for example \"Milestone amount $10,000; retention held 10% (-$1,000); net due $9,000; retention to date $2,500.\"",
      "Tie every milestone invoice back to the governing agreement. A line such as \"Per Master Services Agreement dated 2026-03-15, Milestone 2 as defined in Schedule A\" links the payment to the contractually defined deliverable and its acceptance criteria. That reference is what makes the invoice enforceable and prevents arguments over whether a milestone was actually met."
    ]
  }
};
