import type { TemplateInsight } from "./template-insights-types";

// Batch 4 of the template "insights" copy: one expert H2 section per contract,
// proposal or letter slug. Each entry is written to be genuinely distinct so the
// page earns information gain rather than reading as a keyword-swapped duplicate.
// General information only, not legal advice — enforceability and formalities
// vary by country and state, so the copy points readers to a local lawyer where
// stakes are high rather than overstating what a clause guarantees.
export const insights4: Record<string, TemplateInsight> = {
  "freelance-agreement": {
    heading: "The five clauses freelancers skip and later regret",
    paragraphs: [
      "Most freelance disputes trace back to clauses that felt awkward to raise up front. First is the kill fee: if the client cancels mid-project, you are paid an agreed percentage of the fee for work booked but not completed. Second is a late-payment fee, a flat charge or monthly percentage that gives an overdue invoice teeth. Third is a scope-creep boundary that defines what a revision round is and states that new requests are billed separately. Fourth is IP-transfer timing: say plainly that copyright and usage rights pass to the client only on full payment, so an unpaid invoice does not hand over your work. Fifth is a deposit, commonly 30 to 50 percent, taken before work starts.",
      "In India, freelancers often ask which stamp paper makes an agreement valid. A simple service contract is generally enforceable as a signed agreement even on plain paper; stamp duty affects admissibility as evidence and any duty payable, not whether a contract exists, and the rules and rates differ by state. There is no single magic denomination that unlocks enforceability. Because stamp, registration and tax treatment vary by state and by contract value, confirm the current requirement locally, and for high-value or long engagements have a lawyer review the draft before you sign.",
    ],
  },
  "nda-template": {
    heading: "Mutual versus one-way NDAs, and what they cannot protect",
    paragraphs: [
      "A one-way (unilateral) NDA protects information flowing in one direction, typical when you disclose to a contractor or investor. A mutual NDA protects both sides and suits partnerships, joint ventures or merger talks where each party shares secrets. Pick the mutual version whenever both parties will reveal something sensitive; it is usually easier to negotiate because the obligations are symmetrical.",
      "An NDA cannot lock up information that is already public, that the recipient already knew, that they develop independently, or that they are legally compelled to disclose, for example by a court or regulator. Good templates carve out these standard exceptions; a clause claiming to cover them anyway tends to be read narrowly. Term length is a business choice: two to five years is common for commercial secrets, while genuine trade secrets are sometimes protected for as long as they stay secret.",
      "In India, NDAs are generally enforceable as contracts, but courts weigh them against the rule that agreements in restraint of trade are void, so an overly broad clause that effectively stops someone earning a living may not hold. Enforceability varies by jurisdiction and by how the clause is drafted, so treat this as general information and have a lawyer tailor terms to your situation.",
    ],
  },
  "employment-contract": {
    heading: "At-will versus fixed-term, and the India appointment-letter question",
    paragraphs: [
      "The core structural choice is at-will versus fixed-term. At-will employment, the default in most of the United States, lets either side end the relationship at any time for almost any lawful reason, subject to anti-discrimination and contract limits. A fixed-term contract runs for a set period and usually spells out when and how it can be ended early. Many countries outside the US do not recognise at-will employment at all and require notice or cause, so the right model depends entirely on where the employee works.",
      "Probation clauses commonly run three to six months with a shorter notice period during that window; state the length, the notice on each side, and whether benefits differ while on probation. Keep confirmation criteria clear so there is no ambiguity about when the employee becomes permanent.",
      "In India, people often use appointment letter and employment contract interchangeably, but they differ in depth. An appointment letter is the concise letter confirming the offer, role, pay and joining date, while a full employment contract is a longer agreement covering confidentiality, IP, notice, termination and dispute resolution. Labour rules vary by state and by role, so treat this as general guidance and have a lawyer confirm what your situation requires.",
    ],
  },
  "rental-agreement": {
    heading: "Why India uses 11-month agreements, and register versus notarise",
    paragraphs: [
      "The 11-month rental agreement is not a loophole so much as an avoidance of paperwork. Under the Registration Act, a lease of one year or more generally must be registered, which adds stamp duty and registration fees. An agreement of 11 months sits below that threshold, so landlords and tenants routinely use it and renew, which is why the term is near-universal for residential lets in India.",
      "Registration and stamp duty are state subjects, so rates and procedures differ across states and can change; check your state's current rules rather than assuming a national figure. Stamp duty on a rental deed is usually a small percentage tied to rent and term. A notarised agreement is simply signed before a notary and carries less legal weight than a registered one, which is entered in the government record and is stronger evidence in a dispute. For an 11-month term many people notarise or use e-stamping; for longer or higher-value tenancies, registration is the safer route.",
      "This is general information, not legal advice, and local practice varies. For a valuable property or a long lease, have a local lawyer confirm the required stamp value, registration steps and any city-specific tenancy rules before signing.",
    ],
  },
  "service-agreement": {
    heading: "SLAs, liability caps and the auto-renewal trap",
    paragraphs: [
      "A service agreement lives or dies on its service levels. Pick metrics that are measurable and that actually matter to the client: uptime as a percentage, response time to a request, resolution time for an incident, and the remedy when a target is missed, usually a service credit rather than a cash refund. Vague promises like best efforts give neither side anything to hold onto, so define how each metric is measured and over what period.",
      "The liability cap decides who carries the risk when something goes wrong. Providers commonly cap total liability at the fees paid over the prior 12 months and exclude indirect or consequential losses, while clients push for higher caps or carve-outs for confidentiality breaches, IP infringement and gross negligence. There is no universal correct number; it reflects the deal's size and risk, and how far each side is willing to negotiate.",
      "Watch the auto-renewal clause. Many agreements renew automatically unless cancelled a set number of days before the term ends, which can trap a client into another year. If you include one, state the renewal term, the notice window and how to give notice; if you are signing one, diarise the cancellation deadline. Some jurisdictions regulate auto-renewals, so this is general information and terms should be reviewed locally.",
    ],
  },
  "independent-contractor-agreement": {
    heading: "The employee-versus-contractor test, and why misclassification bites",
    paragraphs: [
      "The label on the agreement does not decide the relationship; the facts do. In the US, the IRS historically used a 20-factor common-law test, now grouped into three areas: behavioural control (who directs how the work is done), financial control (who supplies tools, bears expenses and can profit or lose), and the relationship (written terms, benefits, permanency, and whether the work is core to the business). No single factor is decisive; agencies weigh the whole picture, and some states apply stricter tests such as the ABC test.",
      "Misclassification matters because getting it wrong is expensive. If a worker treated as a contractor is later ruled an employee, the business can owe back taxes, unpaid overtime, benefits and penalties. A well-drafted contractor agreement helps by reinforcing the contractor's independence, but it cannot override how the relationship actually works day to day.",
      "Include an insurance clause so the contractor carries their own coverage, such as general liability or professional indemnity where relevant, and indemnifies the client for their own negligence. Classification rules and required insurance vary by country and state and change over time, so treat this as general information and confirm your obligations with a local professional.",
    ],
  },
  "loan-agreement": {
    heading: "Documenting a loan properly, from family to formal",
    paragraphs: [
      "Even a loan between family or friends is worth writing down, because a clear record prevents the awkward disputes that ruin relationships. Capture the principal, the interest rate if any, the repayment schedule, what happens on default, and both signatures. Stating whether the money is a loan or a gift is the single most useful line, since tax authorities and relatives can otherwise read it differently.",
      "Interest should be set with usury limits in mind. Many jurisdictions cap the maximum lawful rate, and a rate above the ceiling can be unenforceable or expose the lender to penalties, so a modest, clearly stated rate is safer than an aggressive one. A zero-interest loan is fine to document too, though some tax systems impute interest on larger family loans.",
      "In India, people distinguish a promissory note from a loan agreement. A promissory note is a short instrument in which the borrower promises to repay a sum, useful for simple loans and subject to stamp duty; a loan agreement is a fuller contract covering interest, schedule, security and default. For larger sums, add a collateral clause describing the security and the lender's rights if the borrower defaults. Interest ceilings, stamping and enforcement vary by jurisdiction, so this is general information; consult a lawyer for a significant loan.",
    ],
  },
  "partnership-agreement": {
    heading: "Solving the 50/50 deadlock before it happens",
    paragraphs: [
      "A 50/50 partnership feels fair until the two owners disagree and nothing can move. Because neither can outvote the other, a genuine deadlock can freeze the business. Sensible agreements plan for this in advance: appoint a neutral tie-breaker or mediator for defined decisions, split casting votes by subject area, or include a buy-sell mechanism such as a shotgun clause, where one partner names a price and the other chooses to buy or sell at it. Deciding the escape route while everyone is friendly is far cheaper than litigating it later.",
      "A capital-call clause sets out how and when partners must contribute more money, and what happens to a partner who cannot or will not pay, often dilution of their share. Pair it with agreed exit-valuation methods so a departing partner's stake is priced by a formula, an independent valuer, or a book-value calculation rather than by argument.",
      "In India, a partnership is commonly set up through a partnership deed, and registering the firm brings legal advantages such as the ability to sue to enforce rights under the Partnership Act. Requirements and tax treatment vary by state and change over time, so treat this as general information and have a lawyer draft or review the deed for anything significant.",
    ],
  },
  "business-proposal": {
    heading: "Proposal, quote or pitch, and how to price for a yes",
    paragraphs: [
      "These three documents are often confused. A quote is a short price for a defined job. A pitch sells a vision or idea, often verbally or as slides. A proposal sits between them: it restates the client's problem, describes your solution, and then presents price and terms, so it persuades and prices in one document. Sending a bare quote when the client needs to be convinced, or a long proposal when they only wanted a number, is a common mismatch.",
      "Pricing tables are more persuasive with three tiers rather than one. A good, better, best layout gives the reader a frame of reference, nudges them toward the middle option, and lets a bigger budget self-select the top tier without you having to ask. Name the tiers by outcome, not by size, and make the recommended option visually clear.",
      "Always add a validity date, for example this proposal is valid for 30 days, which protects your pricing and gently creates urgency. Close with a concrete next step: an e-signature block or a link to accept online removes friction, so the client can say yes in one click rather than replying to arrange a call. This is general commercial guidance, not legal or tax advice.",
    ],
  },
  "project-proposal": {
    heading: "Structuring a project proposal that survives scrutiny",
    paragraphs: [
      "A strong project proposal follows a problem, solution, timeline arc. Open by stating the problem in the client's own terms so they feel understood, then describe your solution and why it fits, and finish with a timeline broken into phases with milestones and dates. Reviewers skim, so make each section answer one question: what is wrong, what will you do, and when will it be done.",
      "Add a risk table so the reader trusts that you have thought ahead. For example: Risk, scope may expand mid-build; Likelihood, medium; Impact, high; Mitigation, change-request process with sign-off. Two or three honest rows read as competence, not weakness.",
      "Include a resourcing section that names the people or roles on the project, their responsibilities and rough time commitment, so the client sees who does the work and can judge whether the team fits the budget. A short filled example helps: a two-line summary such as Phase 1, discovery, weeks 1 to 2, one strategist; Phase 2, build, weeks 3 to 6, two developers, makes the plan concrete. Keep numbers realistic rather than optimistic, because a timeline that slips on day one costs you credibility for the rest of the engagement.",
    ],
  },
  "cover-letter": {
    heading: "The three-paragraph cover letter, tailored in ten minutes",
    paragraphs: [
      "A cover letter does not need to be long; it needs to be pointed. The reliable structure is three paragraphs. The opening says which role you want and gives one specific reason you are a strong fit. The middle proves it with one or two concrete achievements tied to what the job asks for, using numbers where you have them. The closing restates your interest and invites the next step, an interview or a call.",
      "Tailoring does not require a rewrite. In about ten minutes you can read the job description, pull out the two or three requirements that matter most, and swap your examples so they mirror those exact needs and keywords. Address it to a named person if you can find one, and reference the specific company rather than a generic line that could go to anyone.",
      "On applicant tracking systems: cover letters are usually parsed as plain text and are more often read by a human than scored by the system, so keep formatting simple, avoid tables or images, and mirror the job's language naturally. A short filled example of the opening line, such as I am applying for the marketing coordinator role because my two years running email campaigns lifted open rates by a third, shows how specific the first sentence should be. Keep the whole letter to roughly half a page.",
    ],
  },
  "resignation-letter": {
    heading: "Notice-period wording, and what to leave out",
    paragraphs: [
      "A resignation letter should be short, dated and unambiguous. State that you are resigning, name your role, and give your last working day so the notice period is clear. In India, notice periods are commonly 30, 60 or 90 days depending on seniority and what your contract says, so quote the figure your appointment letter specifies rather than a generic number, and confirm the exact final date with HR.",
      "Just as important is what not to write. Keep out grievances, criticism of managers or colleagues, and the detailed reasons you are leaving; the letter becomes part of your file and may be read long after tempers cool. A neutral, gracious tone, even a line of thanks, protects your reference and your reputation in a small industry.",
      "There is also an immediate-resignation variant, used when you cannot serve notice, for a family emergency, health, or because you are willing to forgo or buy out the notice period. Say plainly that you are resigning with effect from a stated date and, if relevant, that you understand the contractual consequences such as salary in lieu of notice. Whether a company can enforce notice or recover pay depends on your contract and local law, so check your terms and, for a contested exit, take advice before sending it.",
    ],
  },
  "offer-letter": {
    heading: "Offer letter versus appointment letter, and the CTC annexure",
    paragraphs: [
      "In Indian hiring the offer letter and the appointment letter are two stages, not synonyms. The offer letter comes first: it extends the role, headline pay and joining date so the candidate can accept, and it is often conditional. The appointment letter follows once the candidate joins and sets out the full terms of employment, including notice, confidentiality and policies. Sending only an offer letter and never issuing the appointment letter is a common gap that leaves the employment terms undocumented.",
      "Attach the CTC breakup as an annexure rather than burying it in prose. Cost to company bundles basic pay, allowances such as house rent allowance, employer contributions like provident fund, and any variable or bonus component, so the take-home is well below the headline number. A clear line-by-line table of fixed, variable and deductions prevents the disappointment that follows when the first payslip does not match the number the candidate remembered.",
      "Use conditional-offer wording where appropriate, making the offer contingent on background verification, reference checks, a medical, or proof of qualifications, and stating that it lapses if the candidate does not join by a set date. Employment and payroll rules vary by state and change over time, so treat this as general guidance and have HR or a lawyer confirm the specifics for your organisation.",
    ],
  },
  "recommendation-letter": {
    heading: "Who should write it, and the STAR-in-prose method",
    paragraphs: [
      "A recommendation letter carries weight in proportion to the writer's relevance. The best author is someone who supervised or taught the person directly, can speak to specific work, and holds a role senior or credible enough to matter to the reader. A glowing letter from someone who barely knew the candidate is weaker than a measured one from a direct manager, so choose the relationship over the title.",
      "The most persuasive letters use STAR in prose rather than as a checklist. Describe the Situation the person faced, the Task they were responsible for, the Action they took, and the Result they achieved, woven into readable sentences with a real example and, ideally, a number. One concrete story of the person solving a problem beats a paragraph of adjectives like hardworking and dedicated.",
      "Tailor the emphasis to the type. An academic reference stresses intellectual ability, research or study skills and potential, and is often addressed to an admissions committee; a professional reference stresses on-the-job performance, reliability and teamwork for a hiring manager. A short filled example of a strong line, such as when our launch slipped, she rebuilt the schedule in a weekend and we shipped on time, shows the level of specificity to aim for. Close with a clear statement of how strongly you recommend them and an offer to be contacted.",
    ],
  },
};
