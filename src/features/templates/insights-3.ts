import type { TemplateInsight } from "./template-insights-types";

export const insights3: Record<string, TemplateInsight> = {
  "resume-software-engineer": {
    heading: "Make your engineering resume pass the ATS and the ten-second scan",
    paragraphs: [
      "Applicant tracking systems read a single-column layout far more reliably than the two-column designs many engineers reach for. Keep contact details in the body text rather than a header or footer, avoid tables and text boxes, and submit as a PDF only when the posting allows it, since some older parsers still prefer .docx. Use standard section titles such as Experience, Projects, Skills and Education so the parser maps them correctly.",
      "Quantify impact instead of listing duties. Numbers a reviewer trusts include latency (cut p95 API response from 800ms to 220ms), uptime (raised service availability to 99.95 percent), throughput, and scale (served 40,000 daily active users). Pair the metric with the technique so the achievement is credible, for example \"reduced build time 60 percent by parallelising CI stages.\"",
      "List your stack in order of relevance to the target role, not alphabetically, and group by category (languages, frameworks, cloud, tooling). Put the technologies from the job description first if you genuinely use them. Place your GitHub and portfolio links in the top contact block as plain URLs, and make sure the linked repositories actually show pinned, documented work rather than empty starter projects.",
    ],
  },
  "resume-data-analyst": {
    heading: "Balance projects and experience, and use the keywords recruiters scan for",
    paragraphs: [
      "If you have full-time analyst experience, lead with it and treat projects as supporting evidence. If you are transitioning in, invert that: a strong Projects section with real datasets, a clear question, and a measurable outcome can carry the resume. Either way, each entry should state the business question, the data source, and what changed as a result, not just the tools used.",
      "Recruiters and ATS filters scan for concrete tool and language keywords, so include the ones you actually know: SQL (window functions, joins, CTEs), Python or R, Excel (pivot tables, VLOOKUP or XLOOKUP), and BI platforms such as Power BI, Tableau or Looker. Add statistical terms only where they are true, for example A/B testing, regression, or cohort analysis. Mirror the exact spelling used in the job posting, since \"PowerBI\" and \"Power BI\" can be matched differently.",
      "Link dashboards recruiters can open. A public Tableau Public profile, a shared Power BI report, or screenshots in a portfolio site turns a claim into proof. Note what the dashboard measures and who used it, and confirm no confidential company data is exposed before you share the link.",
    ],
  },
  "resume-fresher-graduate": {
    heading: "Build a strong fresher resume in the Indian market with zero experience",
    paragraphs: [
      "With no full-time experience, your resume leads with education, then academic and personal projects, internships, and skills. Keep it to a single page. For Indian freshers, listing your degree, college, graduation year and CGPA or percentage is standard, and campus placement teams often expect it; only omit marks if they are genuinely weak and you have stronger signals elsewhere.",
      "An Academic Projects section is where a fresher stands out. Give each project a title, the tools used, and one line on the outcome, for example \"Built a house-price prediction model in Python (scikit-learn) achieving 0.89 R-squared on the test set.\" Add internships, certifications, and relevant coursework, plus any coding-contest ranks, hackathons, or open-source contributions that show initiative.",
      "On the declaration line, the \"I hereby declare that the above information is true\" sentence with a signature and date is a long-standing Indian convention that is now optional and increasingly dropped, especially for tech and startup roles. It is still common and harmless for government, PSU, and some traditional-company applications. If space is tight, cut it; if you are applying through formal Indian channels, keeping it does no damage. US and global resumes never use it.",
    ],
  },
  "resume-project-manager": {
    heading: "Position your PM credentials, scope language, and delivery numbers",
    paragraphs: [
      "Put certifications where they get noticed fast. If you hold a PMP, CSM, PRINCE2 or SAFe credential, add it after your name in the header (Jane Rao, PMP) and repeat it in a Certifications section with the issuing body and year. Recruiters filtering for these often search the exact acronym, so spell it out once and keep the abbreviation too.",
      "Use precise delivery language rather than vague ownership. Reference how you defined scope, managed a RACI matrix, ran sprint ceremonies, or handled change requests and stakeholder sign-off. Terms like scope creep, critical path, risk register and dependency mapping signal that you have run real programmes, not just attended them.",
      "Quantify budget and timeline outcomes because that is what a PM is judged on. Strong bullets read like \"Delivered a 1.2 million dollar CRM migration two weeks early and 8 percent under budget,\" \"Coordinated a 12-person cross-functional team across three time zones,\" or \"Cut release cycle time from six weeks to two through a Kanban transition.\" Always pair the number with the action that produced it so the achievement is believable and easy to verify in an interview.",
    ],
  },
  "resume-registered-nurse": {
    heading: "Format the license block and certifications every nursing screener checks",
    paragraphs: [
      "Nursing resumes are screened for licensure first, so place a clear license block near the top: license type, state or council, license number where appropriate, and expiry. In the US, list your RN license and the state (or note Compact/eNLC multistate privilege if you hold it). In India, list your state nursing council registration, for example \"Registered Nurse and Midwife, Maharashtra Nursing Council.\" Recruiters often cannot proceed without this, so do not bury it.",
      "Order certifications by clinical weight and currency. BLS is baseline; ACLS, PALS and specialty credentials such as CCRN or TNCC follow, each with the issuing body and expiry date. Keep them current, since an expired ACLS is an immediate red flag for acute-care roles.",
      "Quantify clinical work the way units measure it: typical patient load or nurse-to-patient ratio (managed 5 to 6 patients per shift on a telemetry floor), unit and acuity, EMR used (Epic, Cerner), and outcomes you contributed to such as reduced CLABSI rates or improved HCAHPS scores. US resumes emphasise these metrics and specialty certifications; Indian nursing resumes lean more on registration, GNM or BSc qualification, and department experience, and are often expected to include a photo and personal details that US resumes deliberately omit.",
    ],
  },
  "resume-teacher": {
    heading: "Show certification, student outcomes, and the curriculum keywords schools want",
    paragraphs: [
      "Lead with a certification and license block, because most teaching roles are legally gated on it. In the US, list your state teaching license, certification type, grade bands and subject endorsements, and note if you are Board certified. In India, list qualifications such as B.Ed, and CTET or the relevant State TET score, since many school and government posts require them. Include the certifying authority and validity where relevant.",
      "Move beyond \"taught mathematics\" by quantifying student outcomes. Reviewers respond to lines like \"Raised class average in Grade 10 board exams from 68 to 79 percent over two years,\" \"Improved reading levels for 24 of 28 students by at least one grade band,\" or \"Mentored the robotics club to a state-level final.\" Attendance, pass rates, and standardized-test gains all work when they are honest.",
      "Weave in curriculum and pedagogy keywords that match the posting: differentiated instruction, IEP and special-education support, formative assessment, classroom management, blended or project-based learning, and specific frameworks such as CBSE, ICSE, IB, Common Core or state standards. These terms help both the ATS and the hiring committee place you against the exact grade level and syllabus they are staffing.",
    ],
  },
  "resume-marketing-manager": {
    heading: "Prove channel performance with metrics, tools, and case-study bullets",
    paragraphs: [
      "Marketing is judged on numbers, so anchor every claim to a channel metric. Useful ones include ROAS (scaled paid social to 4.2x ROAS at 30,000 dollars monthly spend), CAC and its trend, organic growth (grew organic traffic 140 percent in eight months), conversion rate, email open and click rates, and pipeline or revenue influenced. Show the direction and the baseline so the reader can judge the size of the win.",
      "List the tools you operate, because recruiters filter on them. A practical set spans analytics (GA4, Looker Studio), SEO (Ahrefs, Semrush), ads (Google Ads, Meta Ads Manager), email and automation (HubSpot, Mailchimp, Marketo), and CMS or CRM platforms (WordPress, Salesforce). Only list what you can defend in an interview.",
      "Structure campaign bullets as compact case studies using a challenge, action, result shape: \"Faced flat lead volume, launched a segmented LinkedIn and content programme, and generated 320 qualified leads at a 22 percent lower CAC over one quarter.\" This format reads faster than a paragraph, front-loads the outcome, and lets a hiring manager see both your strategic thinking and the measurable result in a single line.",
    ],
  },
  "resume-hr-manager": {
    heading: "Signal HRIS fluency, hiring metrics, and your SHRM credentials",
    paragraphs: [
      "HR resumes are scanned for systems and compliance fluency, so name the HRIS and ATS platforms you have run: Workday, SAP SuccessFactors, BambooHR, ADP, Greenhouse or Lever. Add the HR functions you own, such as talent acquisition, onboarding, performance management, compensation and benefits, employee relations, and labor-law compliance relevant to your region.",
      "Quantify outcomes the way a people team is measured. Strong metrics include time-to-hire (reduced average time-to-hire from 45 to 28 days), offer-acceptance rate, retention or turnover (cut first-year attrition from 24 to 15 percent), employee engagement or eNPS movement, and headcount scaled (built a team from 40 to 130 in 18 months). These show operational impact rather than activity.",
      "Place professional credentials clearly. In the US, SHRM-CP or SHRM-SCP and HRCI's PHR or SPHR carry weight; add them after your name and in a Certifications section with the year. In India, an MBA in HR or an equivalent PG diploma is the common baseline and can sit in Education. Spell out the acronym once so both the ATS and a non-specialist recruiter recognise it.",
    ],
  },
  "resume-accountant": {
    heading: "Frame your qualification and software stack for the right market",
    paragraphs: [
      "Lead with the credential that matches the market. In the US, the CPA license (with state and status) is the headline qualification, often paired with an active status note and CPE currency. In India, the CA designation from the ICAI is the equivalent gold standard, sometimes alongside CMA or CS. State the qualification plainly near the top, since recruiters filter on it before reading further, and do not conflate the two, a CA is not a CPA and vice versa.",
      "List accounting software by region so it reads as authentic. Indian resumes should feature Tally (Tally.ERP 9 or TallyPrime), GST filing, and often SAP or Zoho Books; US resumes lean on QuickBooks, NetSuite, and enterprise ERPs like SAP or Oracle. Include the ledgers and standards you work under, GAAP and SOX in the US, or Ind AS and GST compliance in India.",
      "Quantify audit and close work with numbers a controller respects: \"Closed monthly books in 4 days, down from 9,\" \"Managed a 15 million dollar AP ledger with zero material misstatements across three audits,\" or \"Identified 120,000 dollars in duplicate-payment recoveries.\" Accuracy, cycle time, and value recovered are the metrics that separate a bookkeeper from an accountant on paper.",
    ],
  },
  "resume-customer-service": {
    heading: "Turn support work into measurable CSAT, speed, and tooling signals",
    paragraphs: [
      "Support roles are performance-tracked, so quantify the metrics your future employer already lives by. Useful figures include CSAT (maintained 94 percent CSAT across 1,200 monthly tickets), average handle time or AHT, first-contact resolution rate, response and resolution SLAs met, and ticket volume handled. Pair a quality metric with a speed metric so you do not look fast but careless, or careful but slow.",
      "Name the ticketing and communication tools you have used, because teams hire for platform familiarity: Zendesk, Freshdesk, Salesforce Service Cloud, Intercom, Jira Service Management, and live-chat or CRM systems. Add the channels you have covered, such as email, chat, phone and social, and any knowledge-base or macro work you did to deflect repeat tickets.",
      "For remote and hybrid support roles, call out the skills that make distributed work succeed: clear written communication, self-management across time zones, familiarity with VoIP and remote-desktop tools, and comfort documenting solutions in a shared knowledge base. If you have handled escalations, mentored new agents, or spoken more than one language for a multilingual queue, those details differentiate you in a field where many resumes look interchangeable.",
    ],
  },
};
