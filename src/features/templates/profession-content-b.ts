// Genuinely-unique landing-page copy for four trade professions.
//
// Each entry is written from scratch for how that specific trade actually
// invoices — parts/labour splits, call-out and diagnostic fees, flat-rate vs
// hourly, after-hours multipliers, materials markup, warranty lines, permits
// and tax handling. Nothing here is shared boilerplate: swapping "plumber" for
// "electrician" in any sentence would make it wrong, which is the point — the
// pages read as four distinct documents to search engines and to a working
// tradesperson.

export const professionContentB: Record<string, any> = {
  "plumber": {
    profession: "Plumbers",
    category: "invoices",
    metaTitle: "Free Plumber Invoice Template",
    subtitle:
      "A free plumber invoice template that splits parts from labour, itemises call-out and emergency fees, and exports to PDF or Word. Fully customizable, no sign-up, ready to send from the van.",
    sections: [
      {
        heading: "Splitting labour, parts and the call-out fee",
        body:
          "Most plumbing disputes start when a homeowner sees one lump sum. This template keeps three things visibly separate so nobody argues on the doorstep. Put your call-out or trip charge on its own line at the top — a flat figure that covers arriving and diagnosing, often credited against the job if they proceed. Bill labour by the hour or as a flat-rate task price, whichever you quoted, and state your hourly rate plainly. Then list parts individually: the mixer, the flexi hoses, the isolation valve, the tube of silicone. When a customer can see that the brass and the fittings are real line items and not padding on your time, they pay faster and query less.",
      },
      {
        heading: "Emergency call-outs, weekend rates and materials markup",
        body:
          "A burst pipe at 2am is not billed like a Tuesday tap washer, and your invoice should show why. Add an after-hours or emergency line with its own rate — many plumbers charge time-and-a-half or double for nights, weekends and bank holidays, plus a higher minimum call-out. If you mark up materials picked up from the merchant, that markup is legitimate; either build it into the part price or show it as a percentage line, but be consistent so a repeat customer never feels stung. For larger jobs, note whether you have added a deposit or staged payment already received. Every rate, fee and markup line in this template is editable, so you set your numbers once and reuse them.",
      },
      {
        heading: "Warranty, tax and getting paid",
        body:
          "Plumbing work usually carries a workmanship guarantee, so write it on the invoice — for example twelve months on labour, with parts covered by the manufacturer. That single line prevents callbacks turning into arguments about what was promised. If you are registered for VAT or sales tax, show the net, the tax and the gross separately and include your registration number; if you are not registered, a short note saying so stops customers expecting a tax breakdown. Set a clear due date rather than \"on receipt\", add your bank details or a payment link, and reference the property address if you invoice landlords managing several units. Download the finished invoice as a PDF so the layout holds on any device.",
      },
    ],
    faqs: [
      {
        question: "Should a plumber charge a call-out fee?",
        answer:
          "Most do, and it is fair. A call-out or trip charge covers your travel, your time diagnosing the fault and the cost of turning up even if the customer decides not to proceed. A common approach is a flat fee that you credit against the job if they go ahead, so the customer only really pays it when there is no work. State it as its own line on the invoice so it never looks like a hidden surcharge.",
      },
      {
        question: "How do I split parts and labour on a plumbing invoice?",
        answer:
          "Keep them on separate lines. List labour by the hour or as a flat task price with your rate shown, then itemise each part — valves, hoses, fittings, sealant — with quantity and unit price. Customers trust an invoice they can read, and separating the two also makes your own bookkeeping and any warranty claim far cleaner. This template does that split automatically and totals both for you.",
      },
      {
        question: "How much extra can I bill for emergency or weekend work?",
        answer:
          "That is your call, but time-and-a-half or double the standard hourly rate is typical for nights, weekends and holidays, often with a higher minimum call-out. The key is to agree it before you drive out and to show the emergency rate as a distinct line so the customer sees exactly what the out-of-hours premium was. You can edit the rate labels in the template to match whatever you quote.",
      },
      {
        question: "Is it OK to mark up materials on the invoice?",
        answer:
          "Yes. Marking up parts covers your time sourcing them, collecting them and carrying the cost until you are paid, and it is standard trade practice. You can either bake the markup into each part price or show it as a separate percentage line — just be consistent so a returning customer sees the same logic every time. Being upfront about it beats hiding it and getting queried later.",
      },
      {
        question: "Is this plumber invoice template really free?",
        answer:
          "Yes, completely free with no sign-up and no watermark. Customise your rates, call-out fee, logo and warranty wording, then export to PDF or Word and send it. You can save the layout as your standard and reuse it for every job.",
      },
    ],
  },

  "electrician": {
    profession: "Electricians",
    category: "invoices",
    metaTitle: "Free Electrician Invoice Template",
    subtitle:
      "A free electrician invoice template built for parts-and-labour billing, diagnostic fees, permit and inspection lines, and certification notes. Customizable, no sign-up, exports to PDF or Word.",
    sections: [
      {
        heading: "Itemising labour, materials and the diagnostic call",
        body:
          "Electrical work lives or dies on a clear breakdown, because customers rarely know what a fault-find actually involves. Start with your diagnostic or call-out fee on its own line — the time to trace an intermittent circuit is real work whether or not a repair follows. Bill labour either hourly or as a flat-rate price per task, such as a fixed figure to add a spur or change a consumer unit. Then list every material: the breakers, the cable by the metre, the back boxes, the accessories. Electricians who lump cable and time together get pushed on price; those who show a customer the individual MCBs and the run of twin-and-earth get paid without the haggle.",
      },
      {
        heading: "Permits, inspections and certification lines",
        body:
          "Notifiable electrical work often needs a permit, a building-control notification or a third-party inspection, and those carry cost you should pass on transparently. Add a line for the permit or notification fee, and a separate one for any certificate you issue — an installation certificate or condition report is billable work and evidence the job was done to standard. If a job requires periodic inspection or testing, itemise the test time distinctly from the installation labour. Emergency and after-hours work gets its own premium rate line, the same as any trade. Every one of these lines is editable in the template, so you can keep a saved version with your standard certification and permit wording already filled in.",
      },
      {
        heading: "Warranty, tax and payment terms",
        body:
          "State your guarantee on the invoice — commonly a workmanship warranty on your labour, with manufacturer cover on the parts and accessories. Reference the certificate number if you issued one, so the paperwork all ties together. Where you are registered for VAT or sales tax, show net, tax and gross separately with your registration number; if not registered, say so briefly so no one expects a tax split. Give a firm due date, your payment details and a purchase-order field for commercial clients and letting agents who will not pay without one. Export to PDF so the figures and your certification note cannot be altered in transit, or to Word if a client needs to countersign.",
      },
    ],
    faqs: [
      {
        question: "How do electricians itemize parts and labour?",
        answer:
          "List labour separately from materials. Show labour as an hourly figure or a flat per-task price with the rate visible, then itemise each component — breakers, cable by the metre, back boxes, accessories — with quantity and unit cost. A diagnostic or fault-find fee sits on its own line at the top. This makes the invoice easy to check, supports any warranty claim and keeps your bookkeeping clean. The template totals labour and materials for you.",
      },
      {
        question: "Should permit and inspection fees go on the invoice?",
        answer:
          "Yes, as their own lines. A building-control notification, permit or third-party inspection is a genuine cost of doing notifiable work legally, so pass it on transparently rather than hiding it in your labour rate. List the permit fee and any certificate you issue separately, and itemise test or inspection time apart from installation labour so the customer sees exactly what they paid for.",
      },
      {
        question: "Do I charge a diagnostic fee for electrical fault-finding?",
        answer:
          "Most electricians do. Tracing an intermittent fault or a dead circuit is skilled time whether or not it ends in a repair, so a diagnostic or call-out fee is fair. Put it on its own line and, if you like, note that it is credited against the repair if the customer proceeds. Agreeing the fee before you attend avoids any surprise when the invoice arrives.",
      },
      {
        question: "Should I put the certificate number on the invoice?",
        answer:
          "It is good practice. Referencing the installation certificate or condition report number ties your invoice to the compliance paperwork, which matters for landlords, letting agents and anyone selling a property later. It also reinforces that the certification work was part of what they paid for. The template has an editable notes area where the certificate reference and warranty terms can live.",
      },
      {
        question: "Is this electrician invoice template free to use?",
        answer:
          "Yes — free, no sign-up and no watermark. Set your hourly and flat rates, diagnostic fee, permit lines and certification wording, then export to PDF or Word. Save it as your standard invoice and reuse it for every callout.",
      },
    ],
  },

  "hvac": {
    profession: "HVAC Technicians",
    category: "invoices",
    metaTitle: "Free HVAC Invoice Template",
    subtitle:
      "A free HVAC invoice template for parts-and-labour jobs, diagnostic and refrigerant charges, maintenance-agreement billing and warranty lines. Customizable, no sign-up, exports to PDF or Word.",
    sections: [
      {
        heading: "Diagnostic fees, labour and equipment lines",
        body:
          "An HVAC invoice has to explain three very different kinds of charge, and lumping them together is what triggers callbacks about price. Lead with the diagnostic or service-call fee — running gauges, checking pressures and finding the fault is billable whether or not the customer approves the repair. Then bill labour, either hourly or as a flat-rate repair price from a book, and state which. Equipment and parts each get their own line: the capacitor, the contactor, the blower motor, the condensate pump, or the full condenser and coil on an install. Refrigerant is billed by the pound or kilo and should be its own line with the amount recharged shown, because customers and manufacturers both want that recorded.",
      },
      {
        heading: "Maintenance agreements, seasonal and after-hours rates",
        body:
          "Plenty of HVAC revenue is recurring, so the template handles it. For a maintenance or service agreement, invoice the plan as a line item — a seasonal tune-up or an annual contract covering two visits — and note any member discount applied to the parts or labour on the same invoice. Peak-season and emergency work carries a premium: a no-cool call in a July heatwave or a no-heat call at midnight in January is fairly billed at an after-hours rate, shown on its own line. If you took a deposit on an equipment install, record it so the balance is obvious. All rate labels, discounts and fee lines are editable, so your agreement pricing and seasonal rates are set once and reused.",
      },
      {
        heading: "Warranty, permits, tax and payment",
        body:
          "New equipment carries a manufacturer parts warranty, often five to ten years if registered, and your own labour warranty is separate — write both on the invoice so the customer knows exactly what is covered and for how long. Equipment changeouts frequently need a mechanical permit; add that as its own line. Where sales tax or VAT applies, show net, tax and gross separately with your registration number, and note that labour and materials may be taxed differently in some jurisdictions. Give a clear due date and your payment details, reference the equipment model and serial number for install jobs so the warranty is traceable, and export to PDF so nothing shifts when the homeowner or their landlord opens it.",
      },
    ],
    faqs: [
      {
        question: "Should an HVAC company charge a diagnostic fee?",
        answer:
          "Yes, and most do. A service-call or diagnostic fee covers connecting gauges, reading pressures and finding the fault, which is skilled work whether or not the repair goes ahead. Put it on its own line and, if you offer it, note that the fee is waived or credited when the customer approves the repair. Agreeing it before the visit keeps the invoice free of surprises.",
      },
      {
        question: "How do I bill refrigerant on an HVAC invoice?",
        answer:
          "Charge it by the pound or kilogram on its own line and show the amount recharged. Recording the quantity matters for the customer, for any warranty claim and increasingly for regulatory tracking of refrigerants. Keep it separate from labour and from the failed part you replaced so the whole repair reads clearly. The template lets you add a refrigerant line with quantity and unit price.",
      },
      {
        question: "How do I invoice a maintenance agreement or tune-up?",
        answer:
          "List the plan itself as a line item — a seasonal tune-up or an annual agreement covering a set number of visits — and if the plan gives the customer a discount on parts or labour, apply it visibly on the same invoice. That way members see the value they are getting. You can save a version of the template pre-filled with your agreement pricing and reuse it each season.",
      },
      {
        question: "Do HVAC jobs need a permit line on the invoice?",
        answer:
          "Often, yes. Equipment changeouts and new installs commonly require a mechanical permit, and that cost should appear as its own line rather than being buried in labour. Showing the permit separately keeps the invoice honest and helps the customer if they ever need to prove the work was done to code. Add it as an editable line alongside your labour and equipment charges.",
      },
      {
        question: "Is this HVAC invoice template free?",
        answer:
          "Yes, free with no sign-up and no watermark. Customise your diagnostic fee, labour and equipment rates, refrigerant and permit lines, maintenance-plan pricing and warranty terms, then export to PDF or Word. Save it as your standard and reuse it for every service call and install.",
      },
    ],
  },

  "mechanic": {
    profession: "Auto Mechanics",
    category: "invoices",
    metaTitle: "Free Auto Repair Invoice Template",
    subtitle:
      "A free auto repair invoice template with parts-and-labour lines, flat-rate labour hours, diagnostic and shop fees, and warranty terms. Customizable, no sign-up, exports to PDF or Word.",
    sections: [
      {
        heading: "Flat-rate labour, parts and the diagnostic charge",
        body:
          "An auto repair invoice is really a repair order, and the customer expects to see the vehicle, the parts and the labour laid out clearly. Record the year, make, model, VIN and mileage at the top — it identifies the job and anchors any warranty. Most shops bill labour on flat-rate hours: each operation has a book time, and you charge that time at your door rate regardless of whether the tech beat it or ran over. Show the labour hours and the rate. List each part separately — the pads, the rotors, the caliper, the fluid — with quantity and price. If you ran diagnostics, particularly a scan-tool or electrical trace, bill it as its own line; diagnosis is skilled labour, not a free courtesy.",
      },
      {
        heading: "Shop supplies, hazardous waste and parts markup",
        body:
          "Beyond parts and labour, an honest repair invoice carries a few standard extras, and showing them plainly avoids the classic \"what is this line?\" argument. A shop-supplies fee covers the rags, cleaners, small fasteners and lubricants no one itemises individually — usually a small percentage of labour, capped. A hazardous-waste or disposal fee covers old oil, coolant and filters. Parts markup is normal and legitimate: you carry the cost, sourcing time and the risk of a bad part, so the customer pays more than your cost. Sublet work — machine shop, alignment, glass — goes on its own line at what you were charged plus any handling. Every fee, rate and markup here is editable, so you set your shop's numbers once.",
      },
      {
        heading: "Warranty, estimates, tax and authorisation",
        body:
          "State your warranty on the invoice — a common standard is twelve months or twelve thousand miles on parts and labour, with the customer's copy of the invoice as their proof. Note whether the work was authorised against a written estimate, and if the final figure exceeded the estimate, that the customer approved the overage; many regions legally require that authorisation. Show sales tax correctly: parts are usually taxable and labour often is not, so keep them on separate lines and let the tax apply only where it should, with your registration number shown. Give a due date and payment details, and export the finished repair order to PDF so the mileage, VIN and totals are locked, or to Word if you need to edit before printing.",
      },
    ],
    faqs: [
      {
        question: "Should an auto shop charge a diagnostic fee?",
        answer:
          "Yes. Diagnosing a fault — especially with a scan tool or an electrical trace — is skilled labour that takes time and expensive equipment, so it is fair to bill it on its own line. Some shops credit the diagnostic fee against the repair if the customer proceeds. Agreeing the charge before you start avoids the customer expecting the diagnosis for free once they see the invoice.",
      },
      {
        question: "What is flat-rate labour on a repair invoice?",
        answer:
          "Flat-rate means each repair operation has a standard book time, and you bill that time at your labour rate no matter how long the job actually takes. So a brake job billed at two hours is two hours on the invoice whether the tech finished in ninety minutes or ran to three. Show the labour hours and the door rate clearly. It gives the customer a predictable number and rewards an efficient shop.",
      },
      {
        question: "What are shop supplies and hazardous waste fees?",
        answer:
          "Shop supplies is a small charge, usually a capped percentage of labour, covering the rags, cleaners, fasteners and lubricants too minor to itemise on every job. A hazardous-waste or disposal fee covers the safe disposal of old oil, coolant and filters. Both are standard, but they should appear as clear separate lines rather than a mystery total, which is exactly how the template lists them.",
      },
      {
        question: "How should I handle tax on parts versus labour?",
        answer:
          "In many jurisdictions parts are taxable and labour is not, so keep them on separate lines and apply tax only to the taxable ones. Show your registration number and the tax as its own figure. Rules vary by state and country, so set the template to match your local requirement — the tax handling is editable, and separating parts from labour makes it straightforward.",
      },
      {
        question: "Is this auto repair invoice template free?",
        answer:
          "Yes, free with no sign-up and no watermark. Add your vehicle fields, flat-rate labour, parts, shop and diagnostic fees and warranty terms, then export to PDF or Word. Save it as your standard repair order and reuse it for every job that rolls into the bay.",
      },
    ],
  },
};
