import type { TemplateInsight } from "./template-insights-types";

export const insights2: Record<string, TemplateInsight> = {
  "invoice-receipt": {
    heading: "Receipt vs invoice: what each document actually proves",
    paragraphs: [
      "An invoice is a request for payment issued before the money arrives; a receipt is proof that payment has already been made. The two are not interchangeable. If you send an invoice, keep it open until the funds clear, then issue a receipt to close the transaction. Confusing the two is the most common bookkeeping error in small businesses, because a paid invoice and a receipt look similar but serve opposite roles in your records.",
      "For a receipt to stand up as a tax record it should carry a few essentials: the seller name and tax registration number, the date of payment, a description of what was bought, the amount paid, the tax charged shown separately, and the payment method. In India a GST invoice or receipt must show the GSTIN and the CGST, SGST or IGST split; in the US, retain receipts that show sales tax as a distinct line so the pre-tax amount is deductible where allowed. A receipt with only a total and no tax breakdown is weak evidence at audit.",
      "A refund receipt reverses a sale rather than recording one. Reference the original receipt or invoice number, show the refunded amount as a negative or clearly labelled credit, and note whether tax was returned too. Keeping refund receipts linked to the original transaction keeps your revenue and tax figures honest and avoids double-counting income you never actually kept.",
    ],
  },
  "invoice-estimate": {
    heading: "Estimate, quote or invoice: which one to send and when",
    paragraphs: [
      "An estimate is your best educated guess at a price and is expected to move; a quote is a firm, fixed figure you commit to for a stated period; an invoice is the final bill once work is agreed or done. Sending a quote when you meant an estimate can lock you into a number you cannot honour, so choose the label deliberately. Use an estimate for open-scope work like renovations or custom projects, and a quote when the deliverables are well defined.",
      "Always state a validity period. Wording such as \"This estimate is valid for 30 days from the date above\" protects you from being held to old pricing when material or labour costs shift. For work with genuine unknowns, a contingency line of around 10 to 15 percent is a normal and honest way to cover surprises, but label it plainly as a contingency rather than burying it in the totals, and explain it only applies if the extra work is actually needed.",
      "Converting an estimate to an invoice should be a small step, not a rewrite. Keep the same line items, update quantities to what was actually delivered, remove the validity note, add an invoice number and payment terms, and reconcile any contingency by billing only what was used. Carrying the original estimate number onto the invoice gives the client a clear paper trail from quote to final bill.",
    ],
  },
  "invoice-purchase-order": {
    heading: "How a purchase order and invoice fit together",
    paragraphs: [
      "In a B2B flow the buyer issues a purchase order first, committing to buy specific goods or services at agreed prices. The seller fulfils the order, then sends an invoice that references the PO number. The PO is the buyer's promise; the invoice is the seller's claim for payment. Finance teams treat a PO number on the invoice as close to mandatory, because without it the invoice cannot be matched against an approved commitment and often gets held or returned.",
      "Three-way matching is the control that ties it all together: the accounts payable team compares the purchase order, the goods-receipt note (proof the items actually arrived), and the invoice. If the quantities and prices agree across all three, the invoice is cleared for payment. Any mismatch, such as being billed for ten units when eight were received, gets flagged before money leaves. Understanding this is why sellers should never quietly change quantities or unit prices from the original PO without a formal amendment.",
      "A PO that AP teams accept usually shows a unique PO number, buyer and supplier details, a line-by-line description with quantities and agreed unit prices, delivery date and address, payment terms, and any tax or shipping treatment. Matching your invoice fields to the PO exactly, right down to item descriptions, is the single biggest thing you can do to get paid on time.",
    ],
  },
  "invoice-rental": {
    heading: "Rent statements, rent receipts and the HRA claim",
    paragraphs: [
      "A monthly rent statement and a rent receipt do different jobs. A statement is a running summary a landlord sends showing rent due, any arrears, late fees and the closing balance across a period. A rent receipt is proof that a specific month's rent was actually paid, listing the tenant, the property, the month covered, the amount, and the date received. Tenants need receipts; landlords use statements to track the account.",
      "In India, rent receipts are a major practical use-case because salaried employees claim House Rent Allowance (HRA) tax exemption using them. A valid rent receipt should show the tenant and landlord names, the rented address, the monthly amount, and the period. If annual rent exceeds Rs 1,00,000, the employer typically requires the landlord's PAN. A revenue stamp is commonly affixed on cash payments above Rs 5,000. Keep receipts monthly or quarterly rather than reconstructing a year at once, as employers and assessing officers expect a consistent trail.",
      "On late fees, the rule of thumb in both India and the US is that a late fee must be reasonable and, ideally, written into the lease agreement rather than invented after the fact. A modest flat fee or small percentage after a stated grace period is generally defensible; punitive or compounding charges with no basis in the agreement are frequently challenged. State the grace period and fee amount clearly on the statement so there is no dispute.",
    ],
  },
  "invoice-medical": {
    heading: "Reading a medical invoice: codes, adjustments and privacy",
    paragraphs: [
      "In the US, medical billing runs on standardised codes. CPT codes describe the procedures and services performed, such as an office visit or a specific test, while ICD codes describe the diagnosis that justified them. A clean medical invoice pairs each charged service with its CPT code and a plain-language description, so the patient and any insurer can see exactly what is being billed rather than a single opaque total.",
      "The insurance-adjustment line is what makes a medical bill different from an ordinary invoice. It shows the provider's list charge, the amount the insurer contractually allows, the adjustment or write-off the provider agrees to, what insurance paid, and the patient's remaining responsibility such as copay, coinsurance or deductible. Showing these steps separately is what turns a confusing balance into something a patient can actually verify against their explanation of benefits.",
      "Because a medical invoice is protected health information under HIPAA, be deliberate about fields. Include what billing legitimately needs: patient name, account or invoice number, service dates, coded services, and amounts. Avoid putting sensitive clinical narrative, full diagnosis descriptions, or unnecessary personal identifiers on documents that may be emailed or mailed. When in doubt, use a minimum-necessary approach and keep detailed clinical notes in the record, not on the bill.",
    ],
  },
  "invoice-catering": {
    heading: "Pricing a catering job without surprises",
    paragraphs: [
      "Catering is usually priced per head, so the invoice should show a clear per-person rate multiplied by the headcount, then add distinct lines for anything outside that rate: staffing, rentals, delivery, bar service and cake. Breaking it out this way lets a client see why a plated dinner costs more per head than a buffet, and makes it easy to adjust one variable, like upgrading the menu tier, without re-quoting the entire event.",
      "The guaranteed-headcount clause is the clause that protects caterers most. It states that the client confirms a final guest count by a set date, often several days before the event, and that they will be billed for that guaranteed number even if fewer people attend. Food, staffing and rentals are ordered against that figure, so the guarantee is what stops the caterer absorbing the cost of no-shows. Spell out the deadline and note that counts can go up but not down after it.",
      "Gratuity and service charge are not the same thing and should never be blurred on the invoice. A service charge is a mandatory fee set by the caterer that covers operational costs and may or may not go to staff. Gratuity is a tip intended for the service team, and in many US jurisdictions there are disclosure rules about whether a charge is a true tip. Label each separately, state the percentage, and make clear where a service charge is not a gratuity so guests are not double-charged expecting one to be the other.",
    ],
  },
  "invoice-recurring-subscription": {
    heading: "Billing a subscription clearly and compliantly",
    paragraphs: [
      "A recurring invoice must make the billing period unmistakable. Show the exact dates the charge covers, for example \"Service period: 1 Aug to 31 Aug\", along with the plan name and the renewal date. Subscribers scan for this first, and an invoice that only shows a total with no period is the leading cause of billing support tickets and disputed charges. Include the next billing date so there is no surprise about when the card will be charged again.",
      "Proration handles mid-cycle changes fairly. When a customer upgrades, downgrades or joins partway through a period, prorate the charge to the days actually used or remaining, and show the calculation as its own line rather than adjusting the headline price silently. A credit for the unused portion of the old plan plus a charge for the new one, both dated, is far more trusted than a single mysterious figure.",
      "Auto-renewal disclosure is increasingly a legal requirement, not just good manners. Regulations such as US state automatic-renewal laws and similar consumer rules elsewhere expect clear notice that the subscription renews automatically, the amount and frequency, and an easy way to cancel. Put a plain auto-renewal statement on the invoice or its confirmation, and if the price is set to change at renewal, disclose that in advance rather than on the day it is charged.",
    ],
  },
  "invoice-ecommerce": {
    heading: "What an online-store invoice needs to get right",
    paragraphs: [
      "Ecommerce tax is usually determined by where the order ships, not where the seller sits. In the US, sales tax is destination-based in most states, so the correct rate depends on the buyer's address and whether you have nexus there. In India, GST follows a similar destination logic: an intra-state sale attracts CGST plus SGST, while an inter-state sale attracts IGST. An online invoice should therefore show the ship-to location and the tax calculated against it, not a single flat rate applied to everyone.",
      "Itemisation should go down to the SKU. List each product with its SKU or variant code, the quantity, unit price and line total, so returns, exchanges and stock reconciliation all map back to a specific item. A vague line like \"clothing x3\" causes problems the moment a customer wants to return only one item; a SKU-level invoice makes partial refunds and inventory tracking straightforward.",
      "Returns wording belongs on the invoice or packing slip, not buried on a website. State the returns window plainly, for example \"Returns accepted within 30 days of delivery in original condition\", along with who pays return shipping and how refunds are issued. Being explicit here reduces chargebacks and disputes, and in many jurisdictions clear return terms at the point of sale are expected as part of fair trading.",
    ],
  },
  "price-quotation": {
    heading: "Preparing a GST-ready price quotation in India",
    paragraphs: [
      "A quotation in India is a pre-sale document, so it does not need a full tax invoice's compliance, but buyers increasingly expect it to be GST-ready so they can see the landed cost. A clean format lists each item with description, quantity, unit rate and taxable value, then columns for the applicable GST: CGST and SGST for intra-state supply, or IGST for inter-state, each with its rate and amount, ending in a grand total. Showing the HSN or SAC code per line is good practice and mirrors what the eventual tax invoice will carry.",
      "State a validity period so the pricing is not open-ended. Wording like \"This quotation is valid for 15 days from the date of issue; prices are subject to revision thereafter\" is standard and protects you from currency or input-cost swings. If terms such as advance payment, delivery timeline or freight apply, list them below the totals so there is no ambiguity when the buyer accepts.",
      "Use clear revision numbering when a quote changes. Label successive versions as Rev 1, Rev 2 and so on with dates, rather than overwriting the same document, so both sides know which pricing is current. Converting an accepted quotation to a tax invoice is then simple: carry over the same line items and GST breakup, add a sequential invoice number and the buyer's GSTIN, remove the validity note, and reference the original quotation number for traceability.",
    ],
  },
  "startup-business-plan": {
    heading: "Choosing the right business plan for your audience",
    paragraphs: [
      "A lean canvas and a traditional business plan solve different problems. A lean canvas is a single-page snapshot covering problem, solution, unique value, customer segments, channels, cost structure and revenue streams, ideal for early validation and fast iteration. A traditional plan is a longer narrative document with market analysis, operations, team and multi-year financials, expected when you are raising serious capital or approaching a bank. Start with the canvas to think, then expand to a full plan only when an outside reader demands the detail.",
      "The financials section intimidates non-finance founders, but it reduces to three linked pieces: a sales forecast built bottom-up from realistic assumptions, a cash-flow projection showing money in and out month by month, and a simple profit-and-loss summary. The cash-flow view matters most early on, because a profitable business can still run out of cash. State your assumptions openly rather than reverse-engineering numbers to look good; investors trust a defensible model over an optimistic one.",
      "Tailor the version to the reader. Investors want to see a large market, a scalable model, traction and a credible path to outsized returns, so the plan leans into upside and vision. A bank or lender cares about repayment: steady cash flow, collateral, and conservative projections that show you can service debt. The same underlying business needs a different emphasis for each, so keep one master plan and adapt the framing rather than writing contradictory documents.",
    ],
  },
  "monthly-performance-report": {
    heading: "Structuring a monthly report people actually read",
    paragraphs: [
      "A monthly performance report works best when it leads with KPIs, not with a wall of commentary. Open with the handful of metrics that define success for the team, each shown as the actual figure against its target and the change from last month. A reader should grasp whether the month was good or bad within the first few seconds, then drill into the narrative only where a number demands explanation. Burying the key figures under paragraphs of context is the fastest way to get a report ignored.",
      "A red, amber, green status convention makes the report scannable at a glance. Green means on or ahead of target, amber means slightly behind or at risk, and red means materially off track and needing attention. Applying RAG status consistently, with a stated threshold for each colour, turns a table of numbers into a triage tool: managers can jump straight to the red rows and spend their time where it matters.",
      "A short filled example makes the format concrete. For instance: \"Revenue: 92,000 against a 100,000 target, down 4 percent on last month, status Amber, due to a delayed enterprise renewal now expected next month.\" One line carries the metric, the target, the trend, the status and the reason. Repeating that compact pattern across each KPI keeps the whole report tight, honest and genuinely useful for decisions rather than just record-keeping.",
    ],
  },
};
