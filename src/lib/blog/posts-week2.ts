import type { BlogPost } from "../blog-data";

/**
 * Week 2 Blog Posts — 14 new articles targeting keyword gaps verified
 * against the existing 80-post inventory (no slug conflicts).
 *
 * Slugs: how-to-write-payment-reminder-letter, freelance-contract-clauses,
 *        how-to-write-a-business-plan, what-is-a-purchase-order,
 *        how-to-ask-for-a-letter-of-recommendation, how-to-write-scope-of-work,
 *        best-resume-formats-2026, how-to-write-termination-letter,
 *        what-is-a-retainer-agreement, how-to-write-sales-proposal,
 *        how-to-make-invoice-in-word, how-to-write-proposal-for-client,
 *        memorandum-of-understanding-guide, work-order-vs-purchase-order
 */
export const week2Posts: BlogPost[] = [
  // ── 81 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-81",
    slug: "how-to-write-payment-reminder-letter",
    title: "How to Write a Payment Reminder Letter (5 Free Templates)",
    metaTitle: "Payment Reminder Letter: 5 Templates + Tips",
    description:
      "Send a professional payment reminder without awkwardness. 5 copy-paste email and letter templates, from gentle first reminder to final notice, plus tips that actually work.",
    metaDescription:
      "Send a professional payment reminder without awkwardness. 5 copy-paste templates — from gentle first reminder to final notice — plus tips that actually get you paid.",
    category: "Invoices",
    tags: ["payment reminder", "invoice", "overdue invoice", "late payment", "freelancer"],
    keywords: [
      "payment reminder letter",
      "overdue invoice email",
      "late payment reminder",
      "follow up invoice email",
      "payment reminder template",
    ],
    readTime: 10,
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    image: "/blog/blog-payment-reminder.jpg",
    content: `
<h2>When to Send a Payment Reminder</h2>
<p>Timing your reminders correctly turns a nervous chase into a professional process. Here is the schedule that works for most freelancers and small businesses:</p>
<table>
  <thead><tr><th>When</th><th>Type</th><th>Tone</th></tr></thead>
  <tbody>
    <tr><td>Invoice date</td><td>Confirmation email</td><td>Friendly</td></tr>
    <tr><td>3 days before due</td><td>Gentle reminder</td><td>Helpful</td></tr>
    <tr><td>Due date</td><td>Day-of reminder</td><td>Professional</td></tr>
    <tr><td>7 days past due</td><td>First overdue notice</td><td>Firm but polite</td></tr>
    <tr><td>14 days past due</td><td>Second notice</td><td>Firm</td></tr>
    <tr><td>30+ days past due</td><td>Final notice / demand</td><td>Direct</td></tr>
  </tbody>
</table>
<p>Most invoices are paid after the first or second reminder — the later templates below are for the minority of cases where clients go quiet.</p>

<h2>What to Include in Every Payment Reminder</h2>
<ul>
  <li>Invoice number and date</li>
  <li>Amount due (restated clearly)</li>
  <li>Original due date and how many days overdue</li>
  <li>Your preferred payment method and details</li>
  <li>A direct call to action ("Please transfer the balance by [date]")</li>
  <li>Your contact details for any queries</li>
</ul>

<h2>Template 1 — Friendly First Reminder (3 Days Before Due)</h2>
<p><strong>Subject:</strong> Friendly Reminder — Invoice #[INV-001] Due [Date]</p>
<p>Hi [Client Name],</p>
<p>Just a quick note to let you know that Invoice #[INV-001] for £[Amount] is due on [Due Date]. I've attached a copy for your records.</p>
<p>Please let me know if you have any questions or if there's anything I can help with to process the payment.</p>
<p>Thanks again for the opportunity to work with you.</p>
<p>[Your Name]</p>

<h2>Template 2 — Professional Follow-Up (7 Days Overdue)</h2>
<p><strong>Subject:</strong> Invoice #[INV-001] — Payment Overdue by 7 Days</p>
<p>Hi [Client Name],</p>
<p>I'm following up on Invoice #[INV-001] for £[Amount], which was due on [Due Date] and is now 7 days overdue.</p>
<p>Could you let me know when we can expect the payment? If there's an issue on your end, I'm happy to discuss.</p>
<p>Payment details: [Bank / PayPal / other method]</p>
<p>Thank you for your attention to this.</p>
<p>[Your Name]</p>

<h2>Template 3 — Firm Second Reminder (14 Days Overdue)</h2>
<p><strong>Subject:</strong> Second Notice — Invoice #[INV-001] Now 14 Days Overdue</p>
<p>Hi [Client Name],</p>
<p>This is a second notice regarding Invoice #[INV-001] for £[Amount], originally due on [Due Date] and now 14 days overdue.</p>
<p>I need to request that the balance be settled by [new date, 7 days out]. As stated in our agreement, a late payment fee of [1.5%/month] may apply to amounts outstanding beyond [X] days.</p>
<p>Please confirm receipt of this message and your intended payment date.</p>
<p>[Your Name]</p>

<h2>Template 4 — Letter Before Legal Action (30+ Days Overdue)</h2>
<p><strong>Subject:</strong> Final Notice — Invoice #[INV-001] — £[Amount] Outstanding</p>
<p>Dear [Client Name],</p>
<p>Despite two previous reminders, Invoice #[INV-001] for £[Amount] (due [Date]) remains unpaid as of today, [current date].</p>
<p>I am formally requesting payment in full by [date, 7 days out]. If payment is not received by this date, I will have no choice but to pursue recovery through [small claims court / debt collection / legal action].</p>
<p>To avoid this outcome, please arrange payment immediately to:</p>
<p>[Your payment details]</p>
<p>Yours sincerely,<br>[Your Name]</p>

<h2>Template 5 — Final Demand Letter (Formal)</h2>
<p>This template is used as a written letter on headed paper, sent via recorded post or email with a read receipt.</p>
<p>Dear [Client Name],</p>
<p><strong>Re: Overdue Payment — Invoice #[INV-001] — £[Amount]</strong></p>
<p>I write to formally demand payment of £[Amount] in respect of services rendered under Invoice #[INV-001] dated [Date], which remains outstanding.</p>
<p>You have 7 days from the date of this letter to settle the outstanding balance in full. Failure to do so will result in this matter being referred to [solicitors / small claims court / debt collection agency] without further notice.</p>
<p>Yours faithfully,<br>[Your Name / Company Name]</p>

<h2>How to Avoid Late Payments in the First Place</h2>
<ol>
  <li><strong>Require a deposit.</strong> Ask for 25–50% upfront for new clients or large projects.</li>
  <li><strong>Use shorter payment terms.</strong> Net 7 or Net 14 instead of Net 30 reduces the wait without losing clients.</li>
  <li><strong>State your terms on the invoice.</strong> Include "Late payments incur a 1.5%/month fee after [X] days" on every invoice.</li>
  <li><strong>Send invoices immediately.</strong> Don't wait until the end of the month — invoice the day the work is done.</li>
  <li><strong>Use automated reminders.</strong> Your invoice tool or accounting software can auto-send reminders at day 3, 7, and 14.</li>
</ol>

<h2>Frequently Asked Questions</h2>
<h3>Is it legal to charge interest on a late invoice?</h3>
<p>Yes, in most countries — provided you stated the late fee in your contract or on the invoice before work began. In the UK, the Late Payment of Commercial Debts Act entitles you to 8% above the Bank of England base rate on B2B debts.</p>
<h3>How many reminders should I send before taking legal action?</h3>
<p>Typically three reminders (days 7, 14, and 30) before a formal letter before action. This gives you a documented trail to show a court or debt collector.</p>
<h3>Should I stop work on other projects for the same client?</h3>
<p>It's your right to — and it's worth considering for clients more than 30 days overdue. State this politely in your reminder: "I have paused work on [other project] pending payment of the outstanding balance."</p>
<h3>What if the client disputes the invoice?</h3>
<p>Respond in writing, acknowledging the dispute and requesting specifics. Do not cancel the invoice. If the dispute is genuine, issue a corrected invoice or credit note. If it's a delay tactic, refer to your original agreement and signed contract.</p>
<h3>Can I report an unpaid invoice to a credit bureau?</h3>
<p>In some countries yes, for B2B debts above a threshold. More practically, small claims court (typically free to file below £10,000 / US$10,000) is your most effective route for unpaid freelance invoices.</p>
    `,
  },

  // ── 82 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-82",
    slug: "freelance-contract-clauses",
    title: "12 Freelance Contract Clauses Every Freelancer Must Include",
    metaTitle: "12 Freelance Contract Clauses That Protect You",
    description:
      "Missing even one of these 12 contract clauses costs freelancers thousands. Plain-English breakdowns of every essential clause, plus a free contract template.",
    metaDescription:
      "Missing even one of these 12 contract clauses costs freelancers thousands. Plain-English breakdown of every essential clause — plus a free contract template to use today.",
    category: "Contracts",
    tags: ["freelance contract", "contract clauses", "freelancer protection", "legal"],
    keywords: [
      "freelance contract clauses",
      "freelance contract must-haves",
      "contract for freelancers",
      "kill fee clause",
      "freelance agreement essentials",
    ],
    readTime: 12,
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-07",
    featured: true,
    image: "/blog/blog-freelance-contract-clauses.jpg",
    content: `
<h2>Why Your Contract Is Your Best Business Tool</h2>
<p>A freelance contract does three things that nothing else can: it defines exactly what you agreed to do (scope), it locks in the money (payment), and it tells you both what happens when things go wrong (termination). Every hour you spend on a project without a signed contract is an hour you're working on trust alone. Trust is good. A contract is better.</p>
<p>The good news is you don't need a lawyer to have a solid contract. A well-drafted template with these 12 clauses handles 95% of real-world situations.</p>

<h2>The 12 Non-Negotiable Clauses</h2>

<h3>1. Scope of Work</h3>
<p>The single most important clause. Describe exactly what you will deliver — file types, number of revisions, what platforms, what length, what features. Anything not on this list is out of scope. "Design a website" is not a scope. "Design a 5-page responsive website (Home, About, Services, Portfolio, Contact) in Figma, with two rounds of revisions, delivered as a clickable prototype" is a scope.</p>

<h3>2. Payment Terms and Late Fees</h3>
<p>State your total fee or hourly rate, the payment schedule (milestone, monthly, on completion), the due date (e.g. Net 7 from invoice), and your late payment fee (e.g. 1.5% per month). Without a stated late fee, you have no legal basis to charge one.</p>

<h3>3. Kill Fee / Cancellation Fee</h3>
<p>A kill fee protects you if the client cancels after you have started work. A common formula: 25% of the remaining project fee if the project is less than 50% complete; 50% if it is more than 50% complete. Without a kill fee, a client can cancel the day before delivery and owe you nothing beyond what you have already invoiced.</p>

<h3>4. Revision Policy</h3>
<p>Define the number of revision rounds included in the project fee (two rounds is standard for design and copy work), what constitutes a revision vs a new direction, and your hourly rate for additional revisions. This stops "just one more small change" from turning into a three-week scope extension.</p>

<h3>5. Intellectual Property and Ownership Transfer</h3>
<p>By default, in most countries, the creator owns the intellectual property. Rights transfer to the client only when your contract explicitly says they do. Specify when transfer occurs (on receipt of full payment is standard) and whether you retain the right to display the work in your portfolio.</p>

<h3>6. Confidentiality (NDA)</h3>
<p>If you will be exposed to the client's business information, customer data, or proprietary processes, include a mutual confidentiality clause. This protects the client's information and protects you from being accused of leaking it.</p>

<h3>7. Indemnification</h3>
<p>This clause says the client will indemnify (compensate) you against third-party claims arising from their use of your deliverables — e.g. if they ask you to use copyrighted images and then get sued for it. It protects you from bearing the consequences of the client's decisions.</p>

<h3>8. Limitation of Liability</h3>
<p>Caps your financial exposure if something goes wrong. Example: "The contractor's total liability shall not exceed the total fees paid in the three months preceding the claim." Without this, you could theoretically be sued for far more than you earned from the project.</p>

<h3>9. Governing Law and Jurisdiction</h3>
<p>Specifies which country or state's law applies and which courts have jurisdiction. Always use your own location as a freelancer — it is impractical and expensive to defend a dispute in a foreign jurisdiction.</p>

<h3>10. Dispute Resolution</h3>
<p>Require mediation or arbitration before either party can sue. This is faster, cheaper, and less adversarial than court. Include a provision for the losing party to pay legal costs to discourage frivolous disputes.</p>

<h3>11. Non-Solicitation</h3>
<p>Prevents the client from hiring your subcontractors, employees, or collaborators directly — bypassing you — for a defined period (12–24 months is standard). Essential if you regularly use a team or introduce specialist collaborators to clients.</p>

<h3>12. Amendment and Entire Agreement Clause</h3>
<p>States that this contract is the entire agreement (overriding any previous verbal or written discussions), and that any changes must be agreed in writing and signed by both parties. This prevents a client from claiming "but you said on the call that..." and prevents informal email exchanges from modifying your contract.</p>

<h2>Red Flags in a Client Contract</h2>
<ul>
  <li>Work-for-hire language that transfers all IP immediately (including work that pre-existed the contract)</li>
  <li>Unlimited revisions</li>
  <li>No payment schedule — "pay when we're happy with it"</li>
  <li>Non-compete clauses that prevent you from working in your entire industry</li>
  <li>Clauses allowing the client to assign the contract to a third party without your consent</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Can I use a template contract without a lawyer reviewing it?</h3>
<p>Yes for most freelance work. For projects over £20,000 or in highly regulated industries (medical, legal, financial), a one-time legal review is worth the cost.</p>
<h3>What if the client won't sign my contract?</h3>
<p>Do not start work. A client who refuses any written agreement is a serious red flag. Offer a simplified version if they object to length — a one-page letter of agreement with the core clauses is better than nothing.</p>
<h3>Is an email exchange a valid contract?</h3>
<p>It can be, if it demonstrates offer, acceptance, and consideration. But it is far harder to enforce and far less clear than a formal contract. Use a proper contract for every project.</p>
<h3>Do I need a new contract for each project with the same client?</h3>
<p>Use a Master Service Agreement (MSA) for ongoing relationships — it covers the standard terms once. Each new project is then covered by a simple Statement of Work or Project Brief that references the MSA.</p>
<h3>Can I add clauses that are specific to my industry?</h3>
<p>Yes. A photographer might add a usage licence clause. A software developer might add a source code escrow clause. A content writer might add a moral rights waiver. Tailor the template to your niche.</p>
    `,
  },

  // ── 83 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-83",
    slug: "how-to-write-a-business-plan",
    title: "How to Write a Business Plan: Step-by-Step Guide + Free Template",
    metaTitle: "How to Write a Business Plan (Free Template 2026)",
    description:
      "Step-by-step guide to writing a business plan that investors actually read — with a free editable template, real examples, and an executive summary formula.",
    metaDescription:
      "Write a business plan investors actually read. Step-by-step guide with a free editable template, a proven executive summary formula, and real financial projection examples.",
    category: "Guides",
    tags: ["business plan", "startup", "entrepreneurship", "business planning"],
    keywords: [
      "how to write a business plan",
      "business plan template",
      "business plan example",
      "business plan sections",
      "startup business plan",
    ],
    readTime: 15,
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    featured: true,
    image: "/blog/blog-business-plan.jpg",
    content: `
<h2>What Makes a Winning Business Plan</h2>
<p>A business plan is not a formality. It is the document that forces you to confront every assumption about your business — market size, unit economics, competitive advantages, funding needs — before you spend money or time finding out you were wrong. Done well, it is also the document that persuades investors, partners, and lenders to back you.</p>
<p>There are two kinds of business plans: the bloated 60-page document that no one reads, and the focused 15-page plan that answers every investor question before they ask it. This guide builds the second kind.</p>

<h2>Section 1 — Executive Summary</h2>
<p>Write this last, even though it appears first. The executive summary is a 1-page distillation of the entire plan. It answers: what is the business, what problem does it solve, who is the customer, what is the revenue model, and what are you asking for (funding, partnership, etc.).</p>
<p><strong>Formula:</strong> [Company name] is a [type of company] that helps [target customer] to [achieve outcome] by [your unique mechanism]. We are seeking [amount] to [specific use of funds] which will [milestone it enables].</p>

<h2>Section 2 — Company Description</h2>
<p>Describe what your business does, its legal structure (sole trader, LLC, Ltd), location, founding date, and stage (idea, pre-revenue, growth). Explain the problem you solve and the solution you offer — in plain language, not jargon.</p>

<h2>Section 3 — Market Analysis</h2>
<p>Investors want to know the market is big enough to be worth backing. Use the TAM/SAM/SOM framework:</p>
<table>
  <thead><tr><th>Term</th><th>Meaning</th><th>Example (meal delivery)</th></tr></thead>
  <tbody>
    <tr><td>TAM</td><td>Total Addressable Market — everyone who could use this type of product</td><td>Global food delivery: $700B</td></tr>
    <tr><td>SAM</td><td>Serviceable Addressable Market — the segment you can realistically reach</td><td>UK urban food delivery: £8B</td></tr>
    <tr><td>SOM</td><td>Serviceable Obtainable Market — what you can capture in years 1–3</td><td>London market, 0.5% share: £40M</td></tr>
  </tbody>
</table>
<p>Include 3–5 competitor profiles and your competitive advantages (faster, cheaper, niche-focused, better UX). Do not write "we have no competition" — this is a red flag to every investor.</p>

<h2>Section 4 — Organization and Management</h2>
<p>Who is on the team? What is their relevant experience? For early-stage companies, this section carries enormous weight — investors bet on teams as much as ideas. Include: founder bios (relevant experience only, not your full CV), key hires planned, advisors, and your legal structure / ownership breakdown.</p>

<h2>Section 5 — Product or Service Line</h2>
<p>Describe what you sell, how it works, your pricing model (one-time, subscription, per-use), your stage of development (idea / prototype / MVP / live), and your product roadmap for the next 12–18 months. If you have intellectual property (patent, trademark, proprietary technology), mention it here.</p>

<h2>Section 6 — Marketing and Sales Strategy</h2>
<p>How will you acquire customers? Be specific: SEO content (which keywords, what monthly traffic target?), paid acquisition (which channel, what target CAC?), partnerships (who, what margin?), sales team (how many reps, what quota?). Include your customer acquisition cost (CAC) and customer lifetime value (LTV) targets.</p>

<h2>Section 7 — Funding Requirements</h2>
<p>If you are seeking investment, state clearly: how much you need, what you will spend it on (headcount, technology, marketing, inventory), the expected runway it buys (e.g. "18 months"), and what milestone it enables (e.g. "revenue-positive before next raise"). Break the use of funds into a simple table.</p>

<h2>Section 8 — Financial Projections</h2>
<p>Provide 3-year projections: revenue, cost of goods sold, gross margin, operating expenses, and net profit/loss. Do not guess — build a simple model from unit economics. Example:</p>
<table>
  <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
  <tbody>
    <tr><td>Customers (end of year)</td><td>200</td><td>800</td><td>2,000</td></tr>
    <tr><td>Average revenue per customer</td><td>£500/yr</td><td>£550/yr</td><td>£600/yr</td></tr>
    <tr><td>Revenue</td><td>£100,000</td><td>£440,000</td><td>£1,200,000</td></tr>
    <tr><td>Gross Margin</td><td>65%</td><td>70%</td><td>72%</td></tr>
    <tr><td>Net Profit / (Loss)</td><td>(£150,000)</td><td>(£60,000)</td><td>£180,000</td></tr>
  </tbody>
</table>
<p>Investors know projections are estimates — they are evaluating whether your assumptions are defensible, not whether you can predict the future.</p>

<h2>Section 9 — Appendix</h2>
<p>Supporting documents: CVs of key founders, letters of intent from customers, market research data, product screenshots or wireframes, legal documents (e.g. IP registrations). Keep the appendix to what is genuinely referenced in the main plan.</p>

<h2>Business Plan Mistakes to Avoid</h2>
<ul>
  <li><strong>Too long.</strong> 15–20 pages is ideal. Cut any section that does not help the reader make a decision.</li>
  <li><strong>No competitive analysis.</strong> "We have no competition" is the most common red flag in any business plan.</li>
  <li><strong>Hockey-stick projections without backing.</strong> Show how you get from where you are to the growth you're projecting, step by step.</li>
  <li><strong>Generic executive summary.</strong> If you paste your plan into a template and change the company name, you have failed.</li>
  <li><strong>Ignoring risks.</strong> Include a risks section — showing you understand the risks, and have mitigation plans, builds more confidence than pretending risks don't exist.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>How long should a business plan be?</h3>
<p>15–20 pages for the main plan, with an appendix for supporting documents. Investors rarely read past page 10 if the executive summary doesn't hook them — so lead with your strongest material.</p>
<h3>Do I need a business plan if I'm not seeking investment?</h3>
<p>Yes — even if you're self-funding. Writing the plan forces you to test your assumptions before you commit time and money. Think of it as a structured way to stress-test your idea.</p>
<h3>What is the difference between a business plan and a pitch deck?</h3>
<p>A pitch deck is a 10–15 slide visual presentation covering the same topics as a business plan, designed for a live presentation or quick email overview. A business plan is a detailed written document for deep-dive review. You typically need both.</p>
<h3>How often should I update my business plan?</h3>
<p>Review it quarterly in the first year, as your assumptions will change rapidly. A living document reflects reality; a static document becomes fiction.</p>
<h3>Can I use a template for my business plan?</h3>
<p>Yes — a template gives you the structure. The content must be entirely yours. A well-structured template with your real numbers and real insights is far more credible than a beautifully designed plan full of generic claims.</p>
    `,
  },

  // ── 84 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-84",
    slug: "what-is-a-purchase-order",
    title: "What Is a Purchase Order? (And How It Differs from an Invoice)",
    metaTitle: "What Is a Purchase Order? PO vs Invoice Explained",
    description:
      "Confused about purchase orders? Learn what a PO is, how it differs from an invoice, when to use each, what fields to include, and download a free PO template.",
    metaDescription:
      "What is a purchase order and how does it differ from an invoice? Clear definitions, a side-by-side comparison, and a free PO template — no jargon.",
    category: "Invoices",
    tags: ["purchase order", "invoice", "PO", "procurement", "business documents"],
    keywords: [
      "what is a purchase order",
      "purchase order vs invoice",
      "PO number meaning",
      "how to create a purchase order",
      "purchase order template",
    ],
    readTime: 8,
    publishedAt: "2026-08-14",
    updatedAt: "2026-08-14",
    image: "/blog/blog-purchase-order.jpg",
    content: `
<h2>What Is a Purchase Order?</h2>
<p>A purchase order (PO) is a commercial document issued by a buyer to a seller, formally authorizing a purchase. It specifies the goods or services required, quantities, agreed prices, and delivery terms — before any goods change hands or any work begins.</p>
<p>Think of it as the buyer's formal commitment: "I want to buy this, at this price, delivered here, by this date." Once the seller accepts, both parties are bound to those terms. It is the foundation of any formal procurement process.</p>

<h2>What Is an Invoice?</h2>
<p>An invoice is issued by the seller after the goods or services have been delivered. It requests payment for what was provided and typically references the original purchase order number.</p>

<h2>Purchase Order vs Invoice — Side-by-Side Comparison</h2>
<table>
  <thead><tr><th>Feature</th><th>Purchase Order (PO)</th><th>Invoice</th></tr></thead>
  <tbody>
    <tr><td>Who issues it</td><td>Buyer</td><td>Seller</td></tr>
    <tr><td>When it is issued</td><td>Before purchase / delivery</td><td>After delivery / completion</td></tr>
    <tr><td>Purpose</td><td>Authorize a purchase</td><td>Request payment</td></tr>
    <tr><td>Legally binding</td><td>Yes, once accepted by seller</td><td>Yes, a payment obligation</td></tr>
    <tr><td>References the other document</td><td>May reference a quote or RFQ</td><td>Always references the PO number</td></tr>
  </tbody>
</table>

<h2>When to Use a Purchase Order</h2>
<p>Purchase orders are used when:</p>
<ul>
  <li>You are buying goods or services from a supplier for your business</li>
  <li>You need a formal, traceable authorization (for audit, compliance, or internal approval)</li>
  <li>You are buying on credit terms (the PO commits you before payment is made)</li>
  <li>You want to lock in prices on items that may change in cost</li>
  <li>Multiple people in your organization have approval authority (the PO requires sign-off before ordering)</li>
</ul>

<h2>What Goes in a Purchase Order — 10 Fields</h2>
<ol>
  <li>PO Number (unique, sequential)</li>
  <li>PO Date</li>
  <li>Buyer's name, address, and contact</li>
  <li>Seller's name, address, and contact</li>
  <li>Delivery address (if different from buyer's address)</li>
  <li>Description of goods or services</li>
  <li>Quantity</li>
  <li>Unit price and total</li>
  <li>Required delivery date</li>
  <li>Payment terms (Net 30, etc.) and any special conditions</li>
</ol>

<h2>How to Create a Purchase Order in 5 Steps</h2>
<ol>
  <li><strong>Choose a template.</strong> Start with a free PO template from Templix AI — all fields pre-labelled.</li>
  <li><strong>Assign a PO number.</strong> Use a sequential system: PO-2026-001, PO-2026-002. Never reuse numbers.</li>
  <li><strong>Fill in buyer and seller details.</strong> Include full legal name, address, and contact information for both parties.</li>
  <li><strong>List the items.</strong> Each line item: description, quantity, unit price, total. Be specific — vague descriptions cause disputes.</li>
  <li><strong>Send for approval and confirmation.</strong> Get internal sign-off if required, then send to the supplier. Keep a copy; the supplier's confirmation (written or via return email) makes it a binding agreement.</li>
</ol>

<h2>PO Number — What It Is and How to Format It</h2>
<p>A PO number is a unique reference number that tracks the purchase order through your procurement and accounting system. When the seller invoices you, they quote the PO number — making it easy to match invoices to purchase orders during payment processing.</p>
<p>Common formats:</p>
<ul>
  <li>PO-2026-001 (year + sequential)</li>
  <li>PO-CLIENTNAME-001 (client code + sequential)</li>
  <li>20260814-001 (date + sequential)</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Is a purchase order legally binding?</h3>
<p>Yes, once the seller accepts it (by acknowledgment, email confirmation, or beginning to fulfil the order). At that point it is a legally enforceable contract.</p>
<h3>Do small businesses need purchase orders?</h3>
<p>Not always — but any business buying on credit or needing a paper trail for compliance should use them. For small ad-hoc purchases, a simple email confirmation may suffice.</p>
<h3>What happens if the supplier ships something different from the PO?</h3>
<p>You have the right to reject non-conforming goods and request replacement or a credit note. The PO is your proof of what was agreed.</p>
<h3>Can I cancel a purchase order?</h3>
<p>Before the supplier has started work or shipped goods, yes — typically without penalty. After acceptance, cancellation may trigger a restocking fee or cancellation charge depending on your terms.</p>
<h3>What is a blanket purchase order?</h3>
<p>A blanket (or standing) PO sets up a recurring purchase arrangement — for example, "supply 500 units per month for 12 months at £X per unit." Reduces admin for repeat purchases from the same supplier.</p>
    `,
  },

  // ── 85 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-85",
    slug: "how-to-ask-for-a-letter-of-recommendation",
    title: "How to Ask for a Letter of Recommendation (5 Email Templates)",
    metaTitle: "How to Ask for a Recommendation Letter (+ Email Templates)",
    description:
      "Asking for a recommendation letter? Use these 5 copy-paste email templates to make a confident, respectful request — plus tips on who and when to ask.",
    metaDescription:
      "Need a recommendation letter? These 5 copy-paste email templates make asking simple — for academic, job, and LinkedIn references — plus tips on who to ask and when.",
    category: "Letters",
    tags: ["recommendation letter", "reference letter", "job search", "academic"],
    keywords: [
      "how to ask for a letter of recommendation",
      "recommendation letter request email",
      "how to request a reference letter",
      "who to ask for recommendation",
      "recommendation letter email template",
    ],
    readTime: 9,
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    image: "/blog/blog-recommendation-request.jpg",
    content: `
<h2>When to Ask for a Recommendation Letter</h2>
<p>The timing of your request matters as much as how you ask. Here are the key windows:</p>
<ul>
  <li><strong>Academic applications:</strong> At least 4–6 weeks before the deadline</li>
  <li><strong>Job applications:</strong> 2–3 weeks before you'll need it submitted</li>
  <li><strong>Scholarships or fellowships:</strong> 6–8 weeks — selection committees often have strict submission deadlines</li>
  <li><strong>After leaving a job:</strong> Within 3 months — the longer you wait, the less fresh your manager's memory</li>
</ul>

<h2>Who to Ask</h2>
<p>Choose someone who: (1) knows your work in detail, not just your name; (2) can speak to the skills relevant to what you're applying for; and (3) will write enthusiastically. A warm, specific letter from a direct supervisor beats a lukewarm letter from a prestigious name.</p>
<table>
  <thead><tr><th>Situation</th><th>Best choice</th><th>Acceptable alternative</th></tr></thead>
  <tbody>
    <tr><td>Job application</td><td>Direct manager</td><td>Senior colleague / mentor</td></tr>
    <tr><td>Academic application</td><td>Professor whose class you excelled in</td><td>Academic advisor / supervisor</td></tr>
    <tr><td>Scholarship</td><td>Academic mentor who knows your project</td><td>Community leader / employer</td></tr>
    <tr><td>Character reference</td><td>Long-term professional contact</td><td>Community leader</td></tr>
  </tbody>
</table>

<h2>How to Ask — The Right Approach</h2>
<ol>
  <li><strong>Ask in person or by phone first</strong> for close relationships — follow up with an email confirming details</li>
  <li><strong>Ask by email</strong> for professors or former managers you haven't spoken to recently</li>
  <li><strong>Give them an easy out</strong> — "If you don't feel you know my work well enough, I completely understand"</li>
  <li><strong>Provide all the context they need:</strong> your updated CV, the job/program description, and why you're applying</li>
  <li><strong>Give them the deadline with a buffer:</strong> if the deadline is the 30th, tell them the 23rd</li>
</ol>

<h2>Template 1 — Academic Reference (Professor)</h2>
<p><strong>Subject:</strong> Request for Academic Reference — [Your Name] — [Program Name]</p>
<p>Dear Professor [Surname],</p>
<p>I hope this message finds you well. I'm applying to [Program] at [University] and I'd be grateful if you would consider writing a letter of recommendation on my behalf. I particularly valued your [course name] and believe your perspective on my [specific work/project] would be very valuable to the admissions committee.</p>
<p>The deadline for submission is [date]. I would be happy to provide my CV, personal statement, and any other materials that would help you write the letter.</p>
<p>I completely understand if your schedule doesn't allow it — please let me know either way.</p>
<p>Thank you for your time.</p>
<p>Best regards,<br>[Your Name]</p>

<h2>Template 2 — Professional / Job Reference (Manager)</h2>
<p><strong>Subject:</strong> Reference Request — [Your Name]</p>
<p>Hi [Name],</p>
<p>I hope you're well. I'm applying for [role] at [company] and I'd be honoured if you'd be willing to write a recommendation letter for me, drawing on your experience managing me at [Company] from [dates].</p>
<p>The application deadline is [date]. I'm attaching my updated CV and the job description for reference. I'd suggest highlighting [specific achievement/skill] if you're comfortable doing so.</p>
<p>No pressure at all — I understand how busy things can get.</p>
<p>Thanks so much,<br>[Your Name]</p>

<h2>Template 3 — Character Reference</h2>
<p><strong>Subject:</strong> Character Reference Request — [Your Name]</p>
<p>Dear [Name],</p>
<p>I'm applying to [program/position] and the application requests a character reference from someone who knows me professionally or within the community. I'd be very grateful if you'd be willing to write one on my behalf.</p>
<p>Specifically, they are looking for someone who can speak to [qualities needed — e.g. integrity, leadership, community involvement]. I've enclosed a summary of the program and a brief note on the qualities they're assessing.</p>
<p>The deadline is [date]. Please let me know if you'd need any further information from me.</p>
<p>Warm regards,<br>[Your Name]</p>

<h2>Template 4 — Reconnecting After a Long Time</h2>
<p><strong>Subject:</strong> Great to Reconnect — Reference Request</p>
<p>Hi [Name],</p>
<p>It's been a while — I hope you're well! I've been [brief update on what you've been doing], and I'm now applying to [role/program].</p>
<p>I'd love to ask whether you'd be willing to write a brief recommendation for me, based on our work together at [Company] on [Project/period]. I believe your perspective on [specific area] would carry real weight with the selection committee.</p>
<p>I completely understand if it's been too long or if your schedule doesn't allow for it. Either way, I'd love to catch up.</p>
<p>Best,<br>[Your Name]</p>

<h2>Template 5 — LinkedIn Recommendation Request</h2>
<p><strong>Via LinkedIn:</strong></p>
<p>Hi [Name], I hope things are going well for you! I'm actively updating my profile and would love a LinkedIn recommendation from you, if you're open to it — particularly around our work on [Project/period] at [Company]. I'd be very happy to return the favour if that would be helpful. No pressure at all!</p>

<h2>What to Include When You Make the Ask</h2>
<ul>
  <li>Your up-to-date CV or resume</li>
  <li>The job description, program overview, or scholarship brief</li>
  <li>Specific achievements or projects you'd like highlighted</li>
  <li>The submission deadline (with a buffer built in)</li>
  <li>Submission instructions (link, email address, portal login)</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>What if the person says no?</h3>
<p>Thank them graciously and ask if they know someone who might be a better fit. A reluctant reference is worse than no reference — you want someone who can write with genuine enthusiasm.</p>
<h3>Should I write a draft for them?</h3>
<p>For busy professors or executives, offering a draft is common and appreciated. Make it easy to edit rather than generic — tailor it to the specific application.</p>
<h3>How many recommendations should I ask for?</h3>
<p>Always ask one or two more than you need — in case someone can't deliver by the deadline. Have backup references ready before you start applying.</p>
<h3>Can I use the same reference for multiple applications?</h3>
<p>Ask your referee if they are comfortable being contacted multiple times. For LinkedIn or a standing reference letter, yes. For tailored letters to specific programs, ask each time and update them on the specific context.</p>
<h3>What if I have no professional references?</h3>
<p>Use academic references, volunteer coordinators, internship supervisors, or long-term clients. Even a professor whose class you attended regularly and engaged with can vouch for your character and work ethic.</p>
    `,
  },

  // ── 86 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-86",
    slug: "how-to-write-scope-of-work",
    title: "How to Write a Scope of Work: Free SOW Template + Guide",
    metaTitle: "How to Write a Scope of Work (Free SOW Template)",
    description:
      "A clear scope of work prevents scope creep and protects both sides. Write yours in 30 minutes with this step-by-step guide and free SOW template.",
    metaDescription:
      "A clear SOW prevents scope creep and costly disputes. Write one in 30 minutes with this step-by-step guide, plus a free editable SOW template — PDF and Word.",
    category: "Contracts",
    tags: ["scope of work", "SOW", "project management", "freelance", "contract"],
    keywords: [
      "scope of work template",
      "how to write a scope of work",
      "SOW document",
      "scope of work example",
      "statement of work template",
    ],
    readTime: 11,
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    image: "/blog/blog-scope-of-work.jpg",
    content: `
<h2>What Is a Scope of Work?</h2>
<p>A scope of work (SOW) is a document that defines exactly what will be done, by whom, by when, and for how much. It is the most important single document in any service-based project — because everything that goes wrong in a project can usually be traced back to an unclear or missing scope.</p>
<p>Think of it as the contract for a specific project. If you have a master service agreement with a client, the SOW is the project-level attachment that specifies each engagement's deliverables, timeline, and cost.</p>

<h2>SOW vs Statement of Work vs Project Brief</h2>
<table>
  <thead><tr><th>Document</th><th>Purpose</th><th>Who writes it</th></tr></thead>
  <tbody>
    <tr><td>Scope of Work (SOW)</td><td>Defines exactly what will be delivered</td><td>Contractor or client</td></tr>
    <tr><td>Statement of Work (SOW)</td><td>Same term, often used in government/enterprise contracts</td><td>Client (buyer)</td></tr>
    <tr><td>Project Brief</td><td>Initial high-level overview of what's needed</td><td>Client</td></tr>
    <tr><td>Proposal</td><td>Your response to the brief, pitching your approach and cost</td><td>Contractor</td></tr>
  </tbody>
</table>
<p>A scope of work and statement of work are often used interchangeably. The SOW is more specific and operational — it is what gets signed and followed, not what gets pitched.</p>

<h2>The 8 Sections Every SOW Must Have</h2>

<h3>1. Project Overview</h3>
<p>A brief (2–3 sentence) description of what the project is and what problem it solves. Example: "This project covers the design and development of a 5-page marketing website for [Client Name] to replace their existing site and improve lead generation."</p>

<h3>2. Scope of Work (Deliverables)</h3>
<p>The most critical section. List every deliverable — what it is, what format it will be in, and what "done" looks like. Be painfully specific:</p>
<ul>
  <li>✅ "Five responsive web pages designed in Figma: Home, About, Services, Blog (template), Contact"</li>
  <li>❌ "Website design"</li>
</ul>

<h3>3. Out of Scope</h3>
<p>Explicitly state what is NOT included. This is as important as what is included. Example: "This scope does not include copywriting, photography, SEO optimization, CMS setup, or hosting configuration." Every item not listed here is a potential scope creep argument.</p>

<h3>4. Timeline and Milestones</h3>
<p>Include: project start date, key milestone dates (e.g. wireframes due, first review, final delivery), and the expected end date. A table format works well here.</p>

<h3>5. Responsibilities</h3>
<p>Who does what. Specify the client's responsibilities too — content provision, approvals, access to existing systems, stakeholder availability for reviews. Missed client responsibilities are the most common cause of timeline slippage.</p>

<h3>6. Fees and Payment Schedule</h3>
<p>Total project fee, payment milestones, and due dates. Example: "£5,000 total. 25% on signing, 25% on wireframe approval, 50% on final delivery." Include your hourly rate for additional work and your change order process.</p>

<h3>7. Revision and Approval Process</h3>
<p>Number of revision rounds included, the turnaround time for each review cycle, how revisions are submitted (email, comments on a shared doc, a specific platform), and what counts as "approval" (written email confirmation).</p>

<h3>8. Terms and Conditions</h3>
<p>Intellectual property (who owns the work on full payment), confidentiality, termination conditions, governing law. This section is often covered by a master service agreement — if so, reference it here rather than repeating it.</p>

<h2>SOW Example — Web Design Project</h2>
<p><strong>Project:</strong> Marketing website redesign for Acme Ltd<br>
<strong>Deliverables:</strong> 5 responsive pages (Figma → HTML/CSS), 1 blog template, mobile and desktop variants<br>
<strong>Out of Scope:</strong> Copywriting, photography, SEO, hosting, CMS integration<br>
<strong>Timeline:</strong> Start 2 Aug → Wireframes 15 Aug → First review 1 Sep → Launch 15 Sep<br>
<strong>Client Responsibilities:</strong> All copy and images by 10 Aug; 48-hour turnaround on review feedback<br>
<strong>Fee:</strong> £8,000 — 30% on signing, 30% on wireframe approval, 40% on launch<br>
<strong>Revisions:</strong> Two rounds of revisions per milestone included; additional revisions at £100/hour<br>
<strong>IP:</strong> Full ownership transfers to client on receipt of final payment</p>

<h2>SOW Mistakes That Cause Scope Creep</h2>
<ul>
  <li>Vague deliverables ("design the website" not "design 5 specific pages")</li>
  <li>No "out of scope" section — clients assume everything is included</li>
  <li>Missing client responsibilities — no deadline for client to provide content</li>
  <li>Unlimited revisions — never include these; they are a career-ending trap</li>
  <li>No change order process — verbal changes have no paper trail</li>
</ul>

<h2>How to Handle Changes After the SOW Is Signed</h2>
<p>Use a change order — a brief written document that both parties sign, describing the new work and the additional fee. Even a one-sentence email that says "Can you add X?" followed by your "Yes, that's an additional £500, shall I proceed?" (replied to with "Yes, go ahead") constitutes a change order. Always document it.</p>

<h2>Frequently Asked Questions</h2>
<h3>Is a scope of work the same as a contract?</h3>
<p>Not exactly. A full contract includes payment terms, governing law, dispute resolution, and IP clauses. A SOW typically focuses on deliverables and timelines. For best protection, have both: a master service agreement (for standard terms) and a SOW for each project.</p>
<h3>How long should a scope of work be?</h3>
<p>1–3 pages for typical freelance projects. Large enterprise projects may run 10–20 pages. If you need more than 3 pages for a small project, you are either overly detailed or the project is more complex than initially scoped.</p>
<h3>Who writes the scope of work?</h3>
<p>Either party can initiate it. It is in your interest as the contractor to write the first draft — the party that writes the document controls the framing. Share it with the client for review and agreement before signing.</p>
<h3>What is a change order?</h3>
<p>A change order is an amendment to the signed SOW that documents a new request, the additional cost, and both parties' agreement. It protects you from doing additional work without additional pay, and protects the client from being surprised by additional invoices.</p>
<h3>Can I use a scope of work template?</h3>
<p>Yes — a template gives you the structure so nothing is forgotten. Customize every section entirely for each project; a template is a scaffold, not a finished document.</p>
    `,
  },

  // ── 87 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-87",
    slug: "best-resume-formats-2026",
    title: "Best Resume Formats in 2026: Chronological, Functional & Combination",
    metaTitle: "Best Resume Formats 2026 — Which One to Use?",
    description:
      "Chronological, functional, or combination? Choose the right resume format in 2026 with this breakdown plus 5 free ATS-friendly resume templates.",
    metaDescription:
      "Which resume format should you use in 2026? Chronological, functional, or combination — clear breakdown for every career stage, plus 5 free ATS-ready templates.",
    category: "Resumes",
    tags: ["resume format", "resume", "ATS", "job search", "career"],
    keywords: [
      "best resume format",
      "resume format 2026",
      "chronological vs functional resume",
      "modern resume format",
      "ATS resume format",
    ],
    readTime: 13,
    publishedAt: "2026-08-25",
    updatedAt: "2026-08-25",
    featured: true,
    image: "/blog/blog-resume-formats.jpg",
    content: `
<h2>Why Resume Format Matters in 2026</h2>
<p>In 2026, most mid-to-large companies route applications through an Applicant Tracking System (ATS) before a human ever reads them. The ATS parses your resume into structured data — name, contact, experience, education, skills — and scores it against the job description. Format affects how accurately that parsing happens.</p>
<p>A beautiful two-column resume with an icon-filled sidebar might look impressive in a PDF viewer. But many ATS systems read it as garbled nonsense — mixing together text from separate columns, rendering your phone number in the middle of your job title. Your formatting choice is not just an aesthetic decision; it is a technical one.</p>

<h2>The 3 Main Resume Formats</h2>
<table>
  <thead><tr><th>Format</th><th>Best for</th><th>ATS compatibility</th></tr></thead>
  <tbody>
    <tr><td>Chronological (reverse-chronological)</td><td>Most candidates; steady career history</td><td>Excellent</td></tr>
    <tr><td>Functional (skills-based)</td><td>Career changers, re-entering workforce</td><td>Poor — avoid for online applications</td></tr>
    <tr><td>Combination (hybrid)</td><td>Senior professionals, career changers with strong skills</td><td>Good if single-column</td></tr>
  </tbody>
</table>

<h2>Chronological Resume Format</h2>
<p>The most common resume format — lists your work experience newest-first (hence "reverse-chronological"). Recruiters prefer it because they can immediately see your career progression and most recent role.</p>
<p><strong>Structure:</strong></p>
<ol>
  <li>Contact information</li>
  <li>Professional summary (2–3 lines)</li>
  <li>Work experience (newest first)</li>
  <li>Education</li>
  <li>Skills</li>
  <li>Optional: Certifications, Awards, Publications</li>
</ol>
<p><strong>Best for:</strong> Anyone with a consistent work history in one or related fields, professionals with 2+ years of experience, candidates applying through ATS-filtered job boards.</p>
<p><strong>Avoid if:</strong> You have significant employment gaps, you're making a major career change, or you have very limited work experience.</p>

<h2>Functional Resume Format</h2>
<p>The functional format leads with a skills section, grouping your abilities and achievements by skill category rather than by employer. Work history is listed briefly at the bottom, often without dates or bullet points.</p>
<p><strong>Structure:</strong></p>
<ol>
  <li>Contact information</li>
  <li>Professional summary</li>
  <li>Core skills / competencies (expanded, with examples)</li>
  <li>Work history (brief — employer, title, dates only)</li>
  <li>Education</li>
</ol>
<p><strong>Warning:</strong> Most ATS systems struggle to parse functional resumes correctly. Recruiters also dislike them because the abbreviated work history reads as evasive. Use a combination format instead if you want to lead with skills.</p>
<p><strong>When it genuinely works:</strong> Paper applications, academic portfolios, situations where you're submitting directly to a human who has specifically asked for a skills-first format.</p>

<h2>Combination Resume Format</h2>
<p>A hybrid of the two: a strong skills section near the top, followed by a full reverse-chronological work history. It lets you showcase relevant skills immediately while still providing the career narrative recruiters expect.</p>
<p><strong>Structure:</strong></p>
<ol>
  <li>Contact information</li>
  <li>Professional summary</li>
  <li>Core skills (6–12 bullet points)</li>
  <li>Work experience (reverse-chronological)</li>
  <li>Education</li>
</ol>
<p><strong>Best for:</strong> Senior professionals with 10+ years of experience, career changers who have transferable skills to highlight, professionals with diverse experience across multiple industries.</p>

<h2>Which Resume Format Is Best for ATS?</h2>
<p>The chronological format, in a single-column layout, using standard section headings (Work Experience — not "Career Journey", Education — not "Where I Studied"). Standard fonts (Calibri, Arial, Georgia). No tables, no text boxes, no images, no headers and footers. Submit as .docx unless the employer requests PDF.</p>

<h2>Which Format for Career Changers?</h2>
<p>The combination format. Lead with a skills section that surfaces your transferable abilities (project management, client communication, data analysis — whatever maps to the new role), then follow with your actual work history. Your summary should explicitly address the transition: "Marketing professional with 8 years of experience transitioning into UX research..."</p>

<h2>Which Format for Fresh Graduates?</h2>
<p>Chronological, with Education moved above Work Experience. Lead with your degree, relevant coursework, academic achievements, and GPA (if above 3.5). Follow with internships, part-time work, and relevant extracurriculars in reverse-chronological order.</p>

<h2>Resume Format Rules That Never Change</h2>
<ul>
  <li><strong>One page for 0–5 years of experience.</strong> Two pages maximum after that.</li>
  <li><strong>Standard margins.</strong> 0.5–1 inch on all sides — anything tighter looks cramped; anything wider wastes space.</li>
  <li><strong>Consistent date formatting.</strong> Pick one style (Jan 2024 – Mar 2026) and use it throughout.</li>
  <li><strong>Bullet points, not paragraphs.</strong> Recruiters scan; they don't read dense paragraphs.</li>
  <li><strong>Achievement-focused bullets.</strong> "Increased revenue by 30%" beats "Responsible for sales growth."</li>
  <li><strong>No personal information.</strong> No age, no photo (in the US, UK, Canada, Australia), no marital status, no nationality.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Should I use a different format for each job application?</h3>
<p>Your format should stay consistent — but you should tailor your content (especially the summary and skills section) for each role. Tailoring content takes 10–15 minutes per application and meaningfully improves your callback rate.</p>
<h3>Is a one-page resume really important?</h3>
<p>For 0–5 years of experience, yes. Recruiters spend an average of 7 seconds scanning a resume initially — a single page that prioritizes the most relevant information is more effective than two pages where the most important content is buried. After 5–10 years of experience, two pages become acceptable.</p>
<h3>Can I use colour on my resume?</h3>
<p>A small amount of one accent colour (for headings or dividers) is acceptable and can add visual clarity. Avoid heavy colour use, backgrounds, or anything that would print poorly. Keep it professional and ensure good contrast.</p>
<h3>Should I include a photo?</h3>
<p>In the US, Canada, UK, and Australia: no. In many European, Asian, and Middle Eastern countries: yes. Research the norm for your target market.</p>
<h3>What is the best resume font?</h3>
<p>Calibri, Arial, Helvetica, or Georgia — 10–12pt body, 14–16pt for your name. These render cleanly in every ATS and look professional in print.</p>
    `,
  },

  // ── 88 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-88",
    slug: "how-to-write-termination-letter",
    title: "How to Write a Termination Letter (3 Free Templates + Key Tips)",
    metaTitle: "Termination Letter: How to Write One + 3 Free Templates",
    description:
      "Writing a termination letter? Use these 3 professionally drafted templates — for performance, redundancy, and contract end — plus key legal points every employer should include.",
    metaDescription:
      "Writing a termination letter? 3 professionally drafted templates — performance, redundancy, and fixed-term end — plus the key legal points every HR professional must include.",
    category: "Letters",
    tags: ["termination letter", "HR", "employment", "dismissal", "redundancy"],
    keywords: [
      "termination letter",
      "employment termination letter",
      "how to fire someone professionally",
      "termination letter template",
      "dismissal letter",
    ],
    readTime: 10,
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    image: "/blog/blog-termination-letter.jpg",
    content: `
<h2>What Is a Termination Letter?</h2>
<p>A termination letter (also called a dismissal letter, separation letter, or notice of termination) is a formal written document from an employer to an employee confirming that their employment is ending. It documents the reason, the effective date, and any relevant terms (notice period, final pay, return of equipment).</p>
<p>Even where not legally required, a written termination letter is essential: it creates a paper trail, reduces the risk of a wrongful dismissal claim, and provides the employee with a formal record for their own file.</p>

<h2>What to Include in a Termination Letter</h2>
<ol>
  <li>Date of the letter</li>
  <li>Employee name and position</li>
  <li>Statement of termination and effective date</li>
  <li>Reason for termination (brief and factual)</li>
  <li>Notice period or payment in lieu of notice</li>
  <li>Final pay date and what it includes (unpaid salary, accrued holiday, bonuses)</li>
  <li>Benefits / health insurance end date</li>
  <li>Return of company property (laptop, keys, access cards)</li>
  <li>Reference policy (whether you will provide one)</li>
  <li>Confidentiality reminder (if applicable)</li>
  <li>Signature of authorized manager or HR</li>
</ol>

<h2>Template 1 — Termination for Performance</h2>
<p>[Company letterhead]</p>
<p>[Date]</p>
<p>Dear [Employee Name],</p>
<p>I am writing to confirm that your employment with [Company Name] as [Job Title] is terminated with effect from [Date].</p>
<p>As discussed in our meetings on [dates of prior warnings/PIPs], your performance has not met the standards required for the role, despite the support provided. Specifically, [brief factual description — one sentence, no personal judgements].</p>
<p>Your final working day will be [date]. You will receive [X weeks] notice pay in lieu of working your notice period. Your final pay, including any accrued but untaken holiday, will be processed on [date] via your usual payment method.</p>
<p>Please return [laptop, keys, access cards] to [contact name] by [date]. Your company email access will be disabled on [date].</p>
<p>If you have any questions, please contact [HR contact name] at [email].</p>
<p>Yours sincerely,<br>[Manager Name]<br>[Title]</p>

<h2>Template 2 — Redundancy / Layoff Letter</h2>
<p>[Company letterhead]</p>
<p>[Date]</p>
<p>Dear [Employee Name],</p>
<p>Following the restructuring of [department/company], I regret to inform you that your position of [Job Title] has been made redundant with effect from [Date].</p>
<p>This decision was reached after careful consideration and is due to [brief reason — e.g. "a reduction in the volume of work in your area" / "consolidation of the [X] and [Y] departments"]. It is not a reflection of your performance or your contribution to the company.</p>
<p>You are entitled to [X weeks] redundancy pay [calculated in accordance with your contract / statutory redundancy pay], which will be included in your final pay on [date]. Your accrued holiday balance of [X days] will also be paid.</p>
<p>We would like to offer you support in finding a new role. [Include any outplacement support details, if applicable.]</p>
<p>Please return all company property — including [laptop, mobile, access cards] — by [date].</p>
<p>We wish you the very best for the future. If you have any questions, please contact [HR contact].</p>
<p>Yours sincerely,<br>[Manager Name]<br>[Title]</p>

<h2>Template 3 — Fixed-Term Contract End</h2>
<p>[Company letterhead]</p>
<p>[Date]</p>
<p>Dear [Employee Name],</p>
<p>I am writing to confirm that your fixed-term contract as [Job Title], which expires on [Contract End Date], will not be renewed. Your employment with [Company Name] will therefore end on [Date].</p>
<p>Your final pay, including any accrued but untaken holiday, will be paid on [date]. Please return all company equipment and property by [Contract End Date].</p>
<p>We are grateful for your contributions during your time with us. Should you require a reference, please contact [HR contact name].</p>
<p>Yours sincerely,<br>[Manager Name]<br>[Title]</p>

<h2>What NOT to Include in a Termination Letter</h2>
<ul>
  <li><strong>Personal opinions or emotional language.</strong> "We've had enough of your attitude" — never. Factual and professional only.</li>
  <li><strong>Excessive detail about performance issues.</strong> Reference documented warnings; don't relitigate them in the letter.</li>
  <li><strong>Promises you can't keep.</strong> Don't offer a reference you haven't confirmed will be positive.</li>
  <li><strong>Defamatory statements.</strong> Anything untrue or that could expose the company to a libel claim.</li>
  <li><strong>Ambiguous effective dates.</strong> State the last day of employment explicitly.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Is a termination letter legally required?</h3>
<p>In most countries, no — verbal termination is legally valid. But a written letter is strongly recommended for documentation purposes and significantly reduces wrongful dismissal risk.</p>
<h3>What is the difference between a termination letter and a dismissal letter?</h3>
<p>They are the same thing used interchangeably. "Termination" is the broader term; "dismissal" often implies termination for cause (misconduct or performance). "Redundancy notice" is used specifically when the role itself is eliminated.</p>
<h3>How much notice must I give?</h3>
<p>Governed by the employee's contract first. If the contract is silent, statutory minimums apply (1 week per year of service in the UK; at-will employment in most US states allows immediate termination).</p>
<h3>Can I terminate someone via email?</h3>
<p>Legally, yes in most jurisdictions. Practically, it is strongly inadvisable and may be considered a breach of implied duty of good faith. A formal letter, delivered in person or by recorded post, with a follow-up email, is the professional standard.</p>
<h3>What if the employee has a contract that protects them from termination?</h3>
<p>Fixed-term contracts, union agreements, and some employment contracts limit your right to terminate without cause. Review the specific contract and seek HR or legal advice before proceeding.</p>
    `,
  },

  // ── 89 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-89",
    slug: "what-is-a-retainer-agreement",
    title: "What Is a Retainer Agreement? Free Template + Step-by-Step Guide",
    metaTitle: "What Is a Retainer Agreement? Free Template + Guide",
    description:
      "A retainer agreement locks in recurring revenue for freelancers and consultants. Learn what to include, see a real example, and download a free template.",
    metaDescription:
      "A retainer locks in recurring monthly income. Learn what a retainer agreement is, how to price it, what to include, and download a free retainer agreement template.",
    category: "Contracts",
    tags: ["retainer agreement", "retainer", "freelance", "consulting", "contract"],
    keywords: [
      "retainer agreement",
      "retainer contract template",
      "consulting retainer",
      "retainer fee meaning",
      "freelance retainer",
    ],
    readTime: 10,
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-01",
    image: "/blog/blog-retainer-agreement.jpg",
    content: `
<h2>What Is a Retainer Agreement?</h2>
<p>A retainer agreement is a contract between a service provider (a freelancer, consultant, or agency) and a client, where the client pays a fixed monthly fee to retain the provider's services and availability for an agreed scope or number of hours. Think of it as reserving a seat on an expert's calendar every month.</p>
<p>Unlike a project-based contract with a defined end date, a retainer creates an ongoing relationship. The client gets priority access and predictable costs; the provider gets recurring revenue and a stable income stream.</p>

<h2>Types of Retainer Agreements</h2>
<table>
  <thead><tr><th>Type</th><th>How it works</th><th>Best for</th></tr></thead>
  <tbody>
    <tr><td>Paid-for-Services Retainer</td><td>Client pays for a defined number of hours or deliverables per month</td><td>Freelancers, agencies with defined ongoing work</td></tr>
    <tr><td>Paid-for-Access Retainer</td><td>Client pays for your availability and priority response, not a specific output</td><td>Lawyers, consultants, advisors</td></tr>
    <tr><td>Engagement Retainer</td><td>Used at the start of a project — deposits your time for future work not yet fully defined</td><td>Law firms, PR agencies</td></tr>
  </tbody>
</table>

<h2>What to Include in a Retainer Agreement — 10 Clauses</h2>
<ol>
  <li><strong>Parties.</strong> Full legal names of the service provider and client.</li>
  <li><strong>Services included.</strong> Exactly what is covered by the monthly fee — hours per month, deliverable types, response time SLAs.</li>
  <li><strong>Services excluded.</strong> What requires a separate project invoice — anything outside the monthly scope.</li>
  <li><strong>Retainer fee.</strong> The fixed monthly amount, when it is invoiced (e.g. 1st of each month), and how it is paid.</li>
  <li><strong>Rollover policy.</strong> Whether unused hours roll over to the next month (most providers avoid this — it creates liability).</li>
  <li><strong>Additional hours rate.</strong> Your hourly rate for work beyond the monthly scope.</li>
  <li><strong>Term and renewal.</strong> The initial term (3, 6, or 12 months), and whether it auto-renews or requires signed renewal.</li>
  <li><strong>Termination notice.</strong> How much notice either party must give to end the retainer (30 days is standard).</li>
  <li><strong>Intellectual property.</strong> Who owns the work produced under the retainer — typically the client on full payment.</li>
  <li><strong>Confidentiality.</strong> Both parties agree not to disclose confidential information.</li>
</ol>

<h2>Retainer Fee — How to Set Yours</h2>
<p>The simplest formula: estimate the average hours you'll spend per month, multiply by your standard hourly rate, then subtract a modest discount (5–15%) to reward the client's commitment and your revenue certainty.</p>
<p>Example: 15 hours/month × £85/hour = £1,275. With a 10% retainer discount: <strong>£1,147/month</strong>.</p>
<p>Alternatively, define the retainer by deliverable: "4 blog posts per month, 2 social media reports, and up to 2 strategy calls" — and price based on the value of those outputs, not just your time.</p>

<h2>Retainer Agreement Example (Excerpt)</h2>
<p><em>Services Included:</em> Provider will deliver up to 20 hours per month of digital marketing services, including: SEO content strategy, monthly analytics report, and up to 3 client calls of up to 1 hour each.</p>
<p><em>Retainer Fee:</em> £1,500 + VAT per month, invoiced on the 1st of each month, payable within 7 days.</p>
<p><em>Additional Services:</em> Work requested beyond the 20-hour monthly scope will be invoiced separately at £90/hour, agreed in writing before commencement.</p>
<p><em>Unused Hours:</em> Unused hours within a month do not roll over to subsequent months.</p>
<p><em>Termination:</em> Either party may terminate this agreement with 30 days' written notice. Fees are non-refundable for the current month's notice period.</p>

<h2>Frequently Asked Questions</h2>
<h3>Is a retainer fee refundable?</h3>
<p>Generally no — the retainer is paid in advance for availability and priority access. Once you have reserved the month for a client, those hours are not available to other clients. State clearly in your contract whether retainer fees are refundable under any circumstances.</p>
<h3>What happens if the client doesn't use all their hours?</h3>
<p>Define this in your rollover policy. Most freelancers do not allow rollover — unused hours expire at the end of each month. If you do allow limited rollover (e.g. one month's worth), cap it clearly in the contract.</p>
<h3>How do I transition a project client to a retainer?</h3>
<p>At the end of a successful project, propose the retainer as a natural next step: "Based on our work together, I'd like to offer you ongoing support at £X/month — here's what that would include." Most clients who are happy with project results will consider it.</p>
<h3>What if the client consistently exceeds the monthly hours?</h3>
<p>Renegotiate the retainer fee — it should reflect the actual level of engagement. Invoice overages immediately and consistently, so the client understands the value they are receiving and is incentivized to move to a higher-tier retainer.</p>
<h3>Do I need a separate NDA with a retainer agreement?</h3>
<p>If you handle sensitive information, yes — include a confidentiality clause in the retainer itself, or reference a separate NDA. A standalone NDA is useful if you deal with especially sensitive industries (healthcare, finance, legal).</p>
    `,
  },

  // ── 90 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-90",
    slug: "how-to-write-sales-proposal",
    title: "How to Write a Winning Sales Proposal (+ Free Template)",
    metaTitle: "How to Write a Winning Sales Proposal (Free Template)",
    description:
      "A great sales proposal turns prospects into clients. This guide shows you the exact structure, language, and design tips — plus a free proposal template.",
    metaDescription:
      "A winning sales proposal turns interested prospects into signed clients. This guide gives you the exact structure, section-by-section guidance, and a free template.",
    category: "Proposals",
    tags: ["sales proposal", "business proposal", "B2B sales", "proposal writing"],
    keywords: [
      "sales proposal",
      "how to write a sales proposal",
      "sales proposal template",
      "sales proposal example",
      "B2B proposal",
    ],
    readTime: 12,
    publishedAt: "2026-09-04",
    updatedAt: "2026-09-04",
    image: "/blog/blog-sales-proposal.jpg",
    content: `
<h2>What Makes a Sales Proposal Win</h2>
<p>Most proposals fail not because the service is bad, but because the proposal is about the provider, not the client. The classic mistake: page one lists your company history, credentials, and awards. Page two lists your services. Page three — finally — mentions the client's situation.</p>
<p>The best proposals reverse this. They start with the client's problem, stated more clearly than the client has stated it themselves. Everything else follows from there.</p>

<h2>Sales Proposal Structure — 9 Sections</h2>

<h3>Section 1 — Cover Page</h3>
<p>Your company name, the client's company name, the proposal title, and the date. Add a relevant image or branded graphic. Keep it clean — it is the first impression before they open the document.</p>

<h3>Section 2 — Executive Summary</h3>
<p>A 1-page summary written for the decision-maker who will not read the full document. It covers: what problem the proposal solves, your proposed solution, the expected outcome, and the investment. Write this last, after the rest of the proposal is complete.</p>

<h3>Section 3 — The Client's Problem</h3>
<p>Describe the client's situation and the specific problem you are solving — in their language, not yours. If you have done your discovery call properly, this section should make the client think "they really understand us." Include the impact of not solving the problem (cost, time, risk). This is the section that earns you the read.</p>

<h3>Section 4 — Your Proposed Solution</h3>
<p>Describe your approach — what you will do, in what order, and why. Avoid generic descriptions like "we will develop a custom solution." Be specific: what you will deliver, how you will deliver it, and what makes your approach better than the alternative.</p>

<h3>Section 5 — Deliverables and Timeline</h3>
<p>A clear list of what the client will receive and when. Use a table or a milestone timeline:</p>
<table>
  <thead><tr><th>Week</th><th>Milestone</th><th>Deliverable</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Discovery</td><td>Requirements document, project plan</td></tr>
    <tr><td>2–4</td><td>Development Phase 1</td><td>Prototype / first draft</td></tr>
    <tr><td>5</td><td>Review</td><td>Client feedback incorporated</td></tr>
    <tr><td>6</td><td>Final delivery</td><td>Complete package, handover documentation</td></tr>
  </tbody>
</table>

<h3>Section 6 — Proof (Case Studies / Testimonials)</h3>
<p>One or two short case studies from similar clients — showing the problem they had, your solution, and the measurable outcome. Real numbers beat vague praise: "reduced onboarding time by 40%" is worth ten "they were amazing to work with" testimonials.</p>

<h3>Section 7 — Pricing</h3>
<p>Present 2–3 pricing options (basic / standard / premium), if possible. This anchors the conversation — clients choose between your options rather than between you and a competitor. Be transparent: break down what is included at each level. State clearly what is not included.</p>

<h3>Section 8 — Terms and Conditions</h3>
<p>Key points only: payment schedule, revision policy, IP ownership, what happens if the project scope changes. Reference your full contract if you have one — don't reproduce all legal clauses in the proposal itself.</p>

<h3>Section 9 — Next Steps</h3>
<p>A specific, low-friction call to action. Not "let us know if you'd like to proceed" — that puts the burden back on the client. Instead: "To get started, sign this proposal and we'll schedule the kick-off call. I'm available [dates]." Make it easy to say yes.</p>

<h2>Sales Proposal Mistakes That Lose Deals</h2>
<ul>
  <li><strong>Starting with your credentials.</strong> Lead with the client's problem.</li>
  <li><strong>One pricing option.</strong> Multiple options create an anchoring effect that increases average deal value.</li>
  <li><strong>No clear next step.</strong> Decision-makers are busy — tell them exactly what to do and how to do it.</li>
  <li><strong>Too long.</strong> A 40-page proposal suggests you don't understand your own solution. Most winning proposals are 8–15 pages.</li>
  <li><strong>Generic case studies.</strong> A case study from a different industry doesn't build the confidence a relevant one does.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>What is the difference between a sales proposal and a quote?</h3>
<p>A quote lists prices with minimal context. A proposal explains the problem, the solution, and the value — then states the price. Proposals win at higher price points; quotes work for commodity purchases where price is the main decision factor.</p>
<h3>How long should a sales proposal be?</h3>
<p>8–15 pages for most B2B proposals. Complex enterprise proposals may run longer — but lead with your strongest material. Decision-makers often only read the executive summary and the pricing section in detail.</p>
<h3>Should I send the proposal before or after a discovery call?</h3>
<p>Always after. A proposal sent without a discovery call is a guess. A proposal written after a thorough call addresses the client's actual situation, which is infinitely more persuasive.</p>
<h3>How do I follow up after sending a proposal?</h3>
<p>Wait 3 business days, then send a brief follow-up: "Just checking you received the proposal and asking if you have any questions." One follow-up is professional; three unprompted ones are not. If they haven't responded after two follow-ups, move on.</p>
<h3>What is the acceptance rate for sales proposals?</h3>
<p>Industry averages vary widely (10–50%), but the strongest predictor of acceptance is the quality of the discovery process before writing. The better you understand the client's situation, the higher your close rate.</p>
    `,
  },

  // ── 91 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-91",
    slug: "how-to-make-invoice-in-word",
    title: "How to Make an Invoice in Microsoft Word (Step-by-Step Guide)",
    metaTitle: "How to Make an Invoice in Word (Step-by-Step 2026)",
    description:
      "Create a professional invoice in Microsoft Word from scratch or with a free template. Step-by-step guide — takes under 10 minutes.",
    metaDescription:
      "Make a professional invoice in Microsoft Word from scratch or with a free template. Step-by-step guide with exact settings — takes under 10 minutes start to finish.",
    category: "Invoices",
    tags: ["invoice", "Microsoft Word", "Word invoice", "billing", "freelancer"],
    keywords: [
      "how to make an invoice in word",
      "microsoft word invoice template",
      "create invoice in word",
      "word invoice format",
      "invoice in word document",
    ],
    readTime: 9,
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-08",
    image: "/blog/blog-invoice-in-word.jpg",
    content: `
<h2>Option 1 — Start from a Built-In Word Template</h2>
<p>Microsoft Word includes several invoice templates. Here is how to find and use them:</p>
<ol>
  <li>Open Microsoft Word</li>
  <li>Click <strong>File → New</strong></li>
  <li>In the search bar, type <strong>"invoice"</strong> and press Enter</li>
  <li>Browse the templates — select the one that best matches your business style</li>
  <li>Click <strong>Create</strong></li>
  <li>Replace the placeholder text with your actual details</li>
  <li>Save as a new file (not over the template) — <strong>File → Save As → Invoice_[ClientName]_[Date].docx</strong></li>
</ol>
<p><strong>Limitation:</strong> Word's built-in templates are not always well-structured. Some have design limitations (non-editable logos, clunky table formatting) that make customization frustrating. The method below gives you full control.</p>

<h2>Option 2 — Build an Invoice from Scratch in Word</h2>
<p>This method takes about 15 minutes the first time, and 5 minutes every time after. Save the finished blank as your master template.</p>

<h3>Step 1 — Set your page layout</h3>
<p>Open a blank document. Go to <strong>Layout → Margins → Narrow</strong> (0.5 inch on all sides) to give yourself more usable space on the page.</p>

<h3>Step 2 — Add your header</h3>
<p>At the top, add: your company name (bold, 18–20pt), your address, phone number, and email. If you have a logo, insert it via <strong>Insert → Pictures</strong> and position it top-left or top-right.</p>

<h3>Step 3 — Add the INVOICE label and meta information</h3>
<p>Below your header, in a large font (24pt, bold), type "INVOICE". Below that, in a 2-column layout (use a table with 2 columns, no borders), add:</p>
<ul>
  <li>Left column: Bill To (client name and address)</li>
  <li>Right column: Invoice Number, Invoice Date, Due Date, Payment Terms</li>
</ul>

<h3>Step 4 — Create your line-item table</h3>
<p>Insert a table (<strong>Insert → Table</strong>) with these columns:</p>
<table>
  <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Amount</th></tr></thead>
  <tbody>
    <tr><td>(your service or product)</td><td></td><td></td><td></td></tr>
  </tbody>
</table>
<p>Format the header row in a contrasting colour (right-click the row → Table Properties → Shading). Set column widths: Description 50%, Qty 10%, Unit Price 20%, Amount 20%.</p>

<h3>Step 5 — Add totals</h3>
<p>Below the line items table, add a right-aligned totals section:</p>
<ul>
  <li>Subtotal: [sum of line items]</li>
  <li>Tax / VAT (if applicable): [rate × subtotal]</li>
  <li>Discount (if applicable): [amount]</li>
  <li><strong>Total Due: [final amount]</strong> — bold this line</li>
</ul>

<h3>Step 6 — Add payment instructions and notes</h3>
<p>At the bottom of the invoice, add your payment details (bank name, sort code/routing number, account number, PayPal email, Wise email, etc.) and any notes ("Please reference invoice number [X] when making payment.").</p>

<h3>Step 7 — Save as PDF before sending</h3>
<p><strong>File → Save As → PDF</strong>. Always send invoices as PDF — it preserves your formatting and prevents accidental editing by the client.</p>

<h2>What to Include on Every Invoice — 14 Fields</h2>
<ol>
  <li>Your name / company name</li>
  <li>Your address</li>
  <li>Your phone and email</li>
  <li>Your logo (optional)</li>
  <li>Client name and address</li>
  <li>Invoice number (unique, sequential)</li>
  <li>Invoice date</li>
  <li>Due date</li>
  <li>Payment terms (Net 7, Net 30, etc.)</li>
  <li>Itemized services / products with quantities and prices</li>
  <li>Subtotal</li>
  <li>Tax (if applicable)</li>
  <li>Total due</li>
  <li>Payment instructions</li>
</ol>

<h2>Why Word Invoices Have Limitations</h2>
<p>Building a Word invoice is perfectly valid — but it has practical limits:</p>
<ul>
  <li>No automatic calculations — you have to type totals manually or set up complex formulas</li>
  <li>No automatic invoice numbering</li>
  <li>No client database — you have to retype client details every time</li>
  <li>Formatting breaks on different versions of Word</li>
  <li>No built-in payment tracking or reminders</li>
</ul>
<p>For a small number of invoices, Word is absolutely fine. If you invoice more than 10–15 clients per month, a purpose-built invoice tool (Templix AI, FreshBooks, Wave) saves significant time and reduces errors.</p>

<h2>Frequently Asked Questions</h2>
<h3>Can I use Word tables to create the invoice line items?</h3>
<p>Yes — tables are the most reliable way to create a structured, aligned line-item list in Word. Use <strong>Insert → Table</strong> and then format the header row with a background colour to distinguish it from the data rows.</p>
<h3>How do I number my invoices in Word?</h3>
<p>Word doesn't auto-number documents. Create a numbering convention (INV-001, INV-002) and manually increment it for each new invoice. Keep a log (a simple spreadsheet) of issued invoice numbers.</p>
<h3>Should I save my Word invoice as .docx or PDF?</h3>
<p>Save your master template as .docx and always export a PDF copy to send to clients. PDFs preserve formatting and cannot be accidentally edited.</p>
<h3>How do I add my logo to a Word invoice?</h3>
<p><strong>Insert → Pictures → This Device</strong> (or from an online source). Resize the image by dragging its corners. Set text wrapping to "In Line with Text" for predictable positioning.</p>
<h3>Is there a faster way to create professional invoices?</h3>
<p>Yes — use Templix AI's free invoice templates. Fill in your details, add line items, and the total is calculated automatically. Download as PDF or Word in one click, no sign-up needed.</p>
    `,
  },

  // ── 92 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-92",
    slug: "how-to-write-proposal-for-client",
    title: "How to Write a Proposal for a Client (7 Types + Free Templates)",
    metaTitle: "How to Write a Proposal for a Client (7 Types)",
    description:
      "Writing a client proposal? Learn how to structure it for 7 different industries — with free templates for web design, marketing, consulting, IT, and more.",
    metaDescription:
      "Writing a proposal for a client? This guide covers the universal structure and tailors it to 7 industries — web design, marketing, consulting, IT, events, construction, and grants.",
    category: "Proposals",
    tags: ["proposal", "client proposal", "business proposal", "proposal writing"],
    keywords: [
      "how to write a proposal for a client",
      "client proposal template",
      "proposal writing guide",
      "types of business proposals",
      "professional proposal template",
    ],
    readTime: 14,
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    featured: true,
    image: "/blog/blog-client-proposal.jpg",
    content: `
<h2>What Is a Client Proposal?</h2>
<p>A client proposal is a document you send to a potential client that explains: the problem you understand them to have, the solution you are proposing, how you'll deliver it, when, and how much it will cost. It is persuasive (it is designed to win the work) and operational (it defines what will happen if the client says yes).</p>
<p>A proposal is not a quote (which is just a price list), not a pitch deck (which is for live presentations), and not a contract (which comes after the proposal is accepted). It is the bridge between interest and commitment.</p>

<h2>The Universal Proposal Structure — 7 Sections</h2>
<ol>
  <li><strong>Cover Page</strong> — project name, client name, your name, date</li>
  <li><strong>Executive Summary</strong> — 1-page overview for the decision-maker</li>
  <li><strong>Problem Statement</strong> — the client's specific challenge, in their language</li>
  <li><strong>Proposed Solution</strong> — your approach and methodology</li>
  <li><strong>Deliverables and Timeline</strong> — what, when, in what format</li>
  <li><strong>Pricing</strong> — investment options with what each includes</li>
  <li><strong>Next Steps</strong> — specific call to action with a deadline</li>
</ol>
<p>Every proposal type below uses this structure — but the emphasis, language, and specifics differ by industry.</p>

<h2>Type 1 — Web Design Proposal</h2>
<p><strong>What to emphasize:</strong> Your design process (discovery → wireframes → design → development → launch), the number of pages, technology stack, responsive design, and post-launch support.</p>
<p><strong>Key deliverable details to specify:</strong> Number of pages, mobile/desktop, browser compatibility, CMS (if any), whether copywriting is included, SEO optimization, revision rounds.</p>
<p><strong>Common pricing models:</strong> Fixed project price (most common), hourly rate for ongoing changes.</p>

<h2>Type 2 — Digital Marketing Proposal</h2>
<p><strong>What to emphasize:</strong> Current state analysis (traffic, rankings, conversion rate), specific goals (leads, traffic, ROI), your strategy and monthly activities, and how results will be reported.</p>
<p><strong>Key deliverable details:</strong> Monthly hours, channels covered (SEO, PPC, email, social), reporting cadence, tools used, who provides ad spend budget.</p>
<p><strong>Common pricing models:</strong> Monthly retainer (most common), % of ad spend + management fee.</p>

<h2>Type 3 — Consulting Proposal</h2>
<p><strong>What to emphasize:</strong> Your understanding of the specific business problem, your diagnostic methodology, your track record with similar organizations, and the measurable outcome.</p>
<p><strong>Key deliverable details:</strong> Phase structure (discovery, analysis, recommendations, implementation support), deliverable formats (reports, workshops, roadmap documents).</p>
<p><strong>Common pricing models:</strong> Daily or weekly rate, fixed project fee, retainer.</p>

<h2>Type 4 — IT / Software Development Proposal</h2>
<p><strong>What to emphasize:</strong> Technical architecture (without jargon), development methodology (Agile, sprint structure), testing and QA plan, security considerations, and post-launch support.</p>
<p><strong>Key deliverable details:</strong> Technologies and frameworks, data security approach, API integrations, user roles, browser/device compatibility, source code ownership.</p>
<p><strong>Common pricing models:</strong> Fixed price (for defined scope), time and materials (for evolving scope), hybrid.</p>

<h2>Type 5 — Event Proposal</h2>
<p><strong>What to emphasize:</strong> Event concept and theme, venue and logistics, staffing, risk management, and how success will be measured (attendees, feedback scores, media coverage).</p>
<p><strong>Key deliverable details:</strong> Venue sourcing, catering, AV/production, invitations, on-site management, post-event reporting.</p>
<p><strong>Common pricing models:</strong> Fixed management fee + cost-plus for suppliers, all-inclusive flat fee.</p>

<h2>Type 6 — Construction / Architecture Proposal</h2>
<p><strong>What to emphasize:</strong> Project phasing, regulatory compliance (planning permissions, building regulations), materials and specifications, health and safety, and subcontractor management.</p>
<p><strong>Key deliverable details:</strong> Drawings and specifications included, site management, inspection schedule, defects liability period, insurance coverage.</p>
<p><strong>Common pricing models:</strong> Fixed price tender, cost-plus with maximum GMP (Guaranteed Maximum Price).</p>

<h2>Type 7 — Grant Proposal</h2>
<p><strong>What to emphasize:</strong> Alignment with the funder's mission and criteria, clear problem statement with supporting data, evidence of your organization's capacity to deliver, measurable outcomes, and budget justification.</p>
<p><strong>Key differences from commercial proposals:</strong> Much longer (20–50 pages with appendices), highly structured (follow the funder's exact template), budget-heavy (line-by-line justification required), requires evidence of impact measurement.</p>

<h2>Proposal Writing Tips That Close Deals</h2>
<ul>
  <li><strong>Always do a discovery call first.</strong> A proposal written without understanding the client's actual situation is a guess.</li>
  <li><strong>Lead with their problem, not your credentials.</strong> Credentials belong in section 5 — the client's problem belongs in section 2.</li>
  <li><strong>Offer multiple pricing options.</strong> Anchoring effect: clients choose between your options rather than between you and a competitor.</li>
  <li><strong>Set a proposal expiry date.</strong> "This proposal is valid for 30 days" creates gentle urgency.</li>
  <li><strong>Follow up once, professionally, 3–5 days after sending.</strong> A simple "I wanted to make sure you received the proposal and ask if you have any questions" is all you need.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>How long should a client proposal be?</h3>
<p>4–8 pages for freelance and small business proposals. 10–20 pages for complex enterprise or construction proposals. Grant proposals often run 20–50 pages with appendices. Match depth to complexity — never pad for the sake of appearing thorough.</p>
<h3>Should I include terms and conditions in a proposal?</h3>
<p>Yes — key terms only. Payment schedule, revision policy, IP ownership, termination. A full contract comes after acceptance; the proposal's T&Cs give the client advance notice of your commercial terms so there are no surprises.</p>
<h3>What format should I send the proposal in?</h3>
<p>PDF for sending — it looks professional, preserves formatting on any device, and cannot be accidentally edited. Internally, draft in Word or Google Docs for easy editing.</p>
<h3>How do I price a project I've never done before?</h3>
<p>Research the market rate, estimate the hours with a 20% contingency buffer, and consider the value to the client (not just your cost). If uncertain, provide a range with a clear scope definition at the lower end.</p>
<h3>What if the client wants to negotiate the price?</h3>
<p>Never simply reduce the price. Instead, reduce the scope: "I can do this for £X if we reduce the number of revision rounds from three to two and you provide all content by [date]." Preserving the value-to-price ratio is essential for the long-term health of the client relationship.</p>
    `,
  },

  // ── 93 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-93",
    slug: "memorandum-of-understanding-guide",
    title: "Memorandum of Understanding (MOU): Free Template + Complete Guide",
    metaTitle: "Memorandum of Understanding (MOU): Free Template + Guide",
    description:
      "An MOU sets expectations before a formal contract. Learn what it is, when to use it, what to include, and download a free editable MOU template.",
    metaDescription:
      "What is an MOU and when do you need one? Complete guide covering MOU vs contract, what to include, and a free editable Memorandum of Understanding template.",
    category: "Contracts",
    tags: ["MOU", "memorandum of understanding", "contract", "business agreement"],
    keywords: [
      "memorandum of understanding",
      "MOU template",
      "MOU vs contract",
      "what is an MOU",
      "MOU example",
    ],
    readTime: 10,
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-15",
    image: "/blog/blog-mou.jpg",
    content: `
<h2>What Is a Memorandum of Understanding?</h2>
<p>A Memorandum of Understanding (MOU) is a written document that outlines the agreed intentions, responsibilities, and framework of a proposed relationship between two or more parties — before a formal binding contract is negotiated and signed. It is a statement of intent, not a final agreement.</p>
<p>Think of it as the handshake written down: "We agree on the broad outlines. Here is what we each intend to do. We will formalise the details in a contract shortly." MOUs are widely used in business partnerships, government agreements, international relations, and nonprofit collaborations.</p>

<h2>MOU vs Contract — Key Differences</h2>
<table>
  <thead><tr><th>Feature</th><th>MOU</th><th>Contract</th></tr></thead>
  <tbody>
    <tr><td>Legal binding?</td><td>Usually not (unless specific clauses make it so)</td><td>Yes — legally enforceable</td></tr>
    <tr><td>Purpose</td><td>Establish intent and framework</td><td>Bind parties to specific obligations</td></tr>
    <tr><td>Specificity</td><td>High-level, broad</td><td>Detailed, specific</td></tr>
    <tr><td>When used</td><td>Early in the relationship, before full terms are agreed</td><td>When all terms are negotiated and agreed</td></tr>
    <tr><td>Consequence of breach</td><td>Limited (reputational, not usually legal)</td><td>Legal remedies including damages</td></tr>
  </tbody>
</table>

<h2>MOU vs Letter of Intent (LOI)</h2>
<p>Both are non-binding expressions of intent, but they serve slightly different contexts. A letter of intent is more common in acquisition, real estate, and commercial transactions — it typically sets out the basic terms of a deal. An MOU is more common in partnerships, collaborations, and government-to-government agreements where the relationship (not just the transaction) is being established.</p>

<h2>When to Use an MOU</h2>
<ul>
  <li>Starting a business partnership before all terms are negotiated</li>
  <li>Establishing a collaboration between two organizations (NGOs, universities, government agencies)</li>
  <li>Framing a joint venture before the full joint venture agreement is drafted</li>
  <li>Agreeing the terms of a supplier relationship before the formal supply agreement</li>
  <li>Documenting the intent of an acquisition or merger before due diligence is complete</li>
</ul>

<h2>What to Include in an MOU — 12 Elements</h2>
<ol>
  <li><strong>Party names.</strong> Full legal names of all organizations or individuals involved.</li>
  <li><strong>Date and effective period.</strong> When the MOU comes into effect and how long it runs (or whether it continues until a formal contract is signed).</li>
  <li><strong>Purpose and background.</strong> Why this MOU is being entered into — what both parties are trying to achieve.</li>
  <li><strong>Scope of the relationship.</strong> What the collaboration covers and (importantly) what it does not.</li>
  <li><strong>Roles and responsibilities.</strong> What each party will do — at a high level.</li>
  <li><strong>Resources and contributions.</strong> What each party will provide — funding, staff, facilities, data, IP.</li>
  <li><strong>Decision-making process.</strong> How joint decisions will be made — who has authority over what.</li>
  <li><strong>Confidentiality.</strong> Whether information shared during the relationship is confidential.</li>
  <li><strong>Intellectual property.</strong> Who owns any jointly developed outputs.</li>
  <li><strong>Dispute resolution.</strong> How disagreements will be handled — mediation, escalation process.</li>
  <li><strong>Termination.</strong> How either party can exit the MOU and with how much notice.</li>
  <li><strong>Non-binding statement (if applicable).</strong> A clause explicitly stating the MOU is not legally binding (beyond the confidentiality and IP clauses, if those are intended to bind).</li>
</ol>

<h2>MOU Example (Excerpt)</h2>
<p><em>This Memorandum of Understanding is entered into between [Organization A] and [Organization B] (together "the Parties") as of [Date].</em></p>
<p><em>Purpose: The Parties intend to collaborate on the development and delivery of [Program Name], with the goal of [objective]. This MOU establishes the framework for cooperation and is intended to be superseded by a formal agreement once full terms have been negotiated.</em></p>
<p><em>Roles: Organization A will [responsibilities]. Organization B will [responsibilities].</em></p>
<p><em>Duration: This MOU is effective from [start date] and will remain in force until [end date or "the execution of a formal agreement"], whichever is earlier, unless terminated earlier by mutual written consent.</em></p>
<p><em>Non-Binding: Except for the provisions on Confidentiality (Section X) and Intellectual Property (Section Y), this MOU is not legally binding and does not create enforceable obligations on either Party.</em></p>

<h2>Is an MOU Legally Binding?</h2>
<p>Generally, no — but it depends on the language used. If an MOU includes the elements of a contract (offer, acceptance, consideration, and intention to be legally bound), a court may treat it as binding. To be safe, explicitly include a "non-binding" clause stating that the MOU is a statement of intent only. However, if you include confidentiality or exclusivity provisions, those specific clauses typically are intended to be binding, and should be drafted clearly as such.</p>

<h2>Frequently Asked Questions</h2>
<h3>Can an MOU be used as evidence of a contract?</h3>
<p>In some circumstances, yes — if a court finds that the MOU contains all the elements of a contract and the parties acted as though it was binding. This is why a clear "non-binding" statement is important.</p>
<h3>Does an MOU need to be signed by both parties?</h3>
<p>Yes. Without signatures, it is just a document — not even a statement of mutual intent. Both parties should sign and retain a copy.</p>
<h3>How long does an MOU last?</h3>
<p>You specify the duration. Common approaches: a fixed term (6 or 12 months), "until a formal contract is signed," or "indefinitely until terminated with 30 days' notice."</p>
<h3>What is the difference between an MOU and an MOA?</h3>
<p>A Memorandum of Agreement (MOA) is more specific and is often intended to be legally binding (unlike a typical MOU). An MOA is used when parties are ready to commit to specific obligations — it sits between an MOU and a full contract in formality.</p>
<h3>Do I need a lawyer to draft an MOU?</h3>
<p>For a simple collaboration between two businesses, a template MOU is sufficient. For complex partnerships involving significant money, IP, or government agencies, legal review is advisable — especially to ensure the non-binding clauses say exactly what you intend.</p>
    `,
  },

  // ── 94 ─────────────────────────────────────────────────────────────────────
  {
    id: "blog-94",
    slug: "work-order-vs-purchase-order",
    title: "Work Order vs Purchase Order: What's the Difference?",
    metaTitle: "Work Order vs Purchase Order: Key Differences",
    description:
      "Work orders and purchase orders solve different problems. This plain-English breakdown shows what each is, when to use them, and includes free templates for both.",
    metaDescription:
      "What's the difference between a work order and a purchase order? Plain-English breakdown with comparison table, use cases, and free downloadable templates for both.",
    category: "Invoices",
    tags: ["work order", "purchase order", "invoice", "procurement", "business documents"],
    keywords: [
      "work order vs purchase order",
      "what is a work order",
      "work order template",
      "purchase order meaning",
      "WO vs PO",
    ],
    readTime: 8,
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    image: "/blog/blog-work-order-vs-po.jpg",
    content: `
<h2>What Is a Work Order?</h2>
<p>A work order (WO) is an internal or external document that authorizes and describes the work to be performed. It includes the specific task, who is responsible for it, the expected completion time, and any required materials or equipment. Work orders are used extensively in maintenance, field service, manufacturing, and construction.</p>
<p>The key distinction: a work order describes <em>what work needs to be done</em>. A purchase order describes <em>what needs to be bought</em>.</p>

<h2>What Is a Purchase Order?</h2>
<p>A purchase order (PO) is a commercial document from a buyer to a supplier that formally authorizes the purchase of specified goods or services at an agreed price. Once the supplier accepts it, it creates a legally binding agreement.</p>
<p>Where a work order focuses on internal task assignment and service delivery, a purchase order focuses on the procurement transaction between a buyer and an external supplier.</p>

<h2>Work Order vs Purchase Order — Comparison Table</h2>
<table>
  <thead><tr><th>Feature</th><th>Work Order (WO)</th><th>Purchase Order (PO)</th></tr></thead>
  <tbody>
    <tr><td>Primary purpose</td><td>Authorize and track work to be done</td><td>Authorize purchase of goods/services</td></tr>
    <tr><td>Who uses it</td><td>Operations, maintenance, field service, project managers</td><td>Procurement, finance, purchasing teams</td></tr>
    <tr><td>Issued by</td><td>Internal manager or supervisor</td><td>Buyer (issued to external supplier)</td></tr>
    <tr><td>Issued to</td><td>Internal technician, contractor, or service crew</td><td>Supplier or vendor</td></tr>
    <tr><td>Typical content</td><td>Task description, location, required materials, assigned worker, due date</td><td>Item description, quantity, price, delivery terms, payment terms</td></tr>
    <tr><td>Legally binding?</td><td>Not typically (internal document)</td><td>Yes, once accepted by supplier</td></tr>
    <tr><td>Can trigger an invoice?</td><td>Yes — contractor invoices against the work order</td><td>Yes — supplier invoices against the PO number</td></tr>
  </tbody>
</table>

<h2>Which One Should You Use?</h2>
<p>Use a <strong>work order</strong> when:</p>
<ul>
  <li>You are assigning a task internally to a team member or technician</li>
  <li>You are hiring a contractor to perform a specific service (repair, installation, inspection)</li>
  <li>You need to track maintenance tasks and completion</li>
  <li>You are in field services, facilities management, or construction</li>
</ul>
<p>Use a <strong>purchase order</strong> when:</p>
<ul>
  <li>You are buying goods or services from an external supplier</li>
  <li>You need a formal procurement record for audit, compliance, or budget control</li>
  <li>You are buying on credit terms (the PO is the authorization to spend)</li>
  <li>Multiple people need to approve the purchase before it happens</li>
</ul>
<p>In some scenarios, you need both: a PO authorizes the purchase of materials, and a work order assigns the task of installing them.</p>

<h2>What Goes in a Work Order — 10 Fields</h2>
<ol>
  <li>Work Order Number (unique, sequential)</li>
  <li>Date issued</li>
  <li>Priority level (standard, urgent, emergency)</li>
  <li>Job description (specific task to be completed)</li>
  <li>Location (address or asset ID)</li>
  <li>Assigned to (worker name or contractor company)</li>
  <li>Required start and completion date</li>
  <li>Materials required (list with quantities)</li>
  <li>Labour time estimated</li>
  <li>Authorization signature</li>
</ol>

<h2>Work Order Example</h2>
<p><strong>Work Order #WO-2026-0847</strong><br>
<strong>Date:</strong> 18 September 2026<br>
<strong>Priority:</strong> Urgent<br>
<strong>Task:</strong> Replace faulty HVAC unit in Server Room B<br>
<strong>Location:</strong> 3rd Floor, North Wing — Room 312<br>
<strong>Assigned to:</strong> TechCool HVAC Services<br>
<strong>Due:</strong> 19 September 2026 by 16:00<br>
<strong>Materials:</strong> 1× Daikin FTX50K (stock item #HV-0023), 5m copper pipe, 2× refrigerant valves<br>
<strong>Estimated labour:</strong> 6 hours<br>
<strong>Authorized by:</strong> Facilities Manager — [signature]</p>

<h2>Frequently Asked Questions</h2>
<h3>Can a work order be used as a legal contract with a contractor?</h3>
<p>A signed work order can function as a simple contract with a contractor, particularly for small, well-defined jobs. For larger or more complex work, supplement it with a formal service agreement.</p>
<h3>Does a work order replace an invoice?</h3>
<p>No. A work order authorizes the work; an invoice requests payment after the work is done. The contractor references the work order number on their invoice.</p>
<h3>What is the difference between a work order and a job ticket?</h3>
<p>They are the same thing under different names. "Work order" is standard in facilities and field services; "job ticket" is common in printing, manufacturing, and repair shops.</p>
<h3>Can I combine a work order and invoice into one document?</h3>
<p>Yes — a work order invoice is a single document that describes the work and requests payment. Common for contractors and tradespeople billing for smaller, one-off jobs. Templix AI has a free work order invoice template for this purpose.</p>
<h3>What numbering system should I use for work orders?</h3>
<p>Sequential with a prefix: WO-2026-001, WO-2026-002. Use a date prefix (WO-20260918-001) if volume is high and date-based tracking is useful. Never reuse numbers — each work order needs a unique identifier for traceability.</p>
    `,
  },
];
