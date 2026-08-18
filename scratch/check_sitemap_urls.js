const { allFallbackTemplates } = require('../src/data/templates-fallback');
const { STATIC_BLOG_POSTS } = require('../src/lib/blog-data');
const { ALL_TOOLS } = require('../src/data/tools');
const { CATEGORIES } = require('../src/constants');

const validEnPages = [
  "https://templix-ai.whitesparksoft.com/en/templates/reports/sales-report",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-daycare",
  "https://templix-ai.whitesparksoft.com/en/privacy",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/internship-cover-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/project-status-report",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-interior-design",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/food-truck-business-plan",
  "https://templix-ai.whitesparksoft.com/en/blog/late-payment-reminder-emails",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/market-analysis-report",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-hourly-rate",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-auto-repair",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/spa-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/sponsorship-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/independent-contractor-agreement",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/annual-report",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/farewell-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/appointment-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/non-compete-agreement",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/app-development-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/partnership-agreement",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-data-analyst",
  "https://templix-ai.whitesparksoft.com/en/templates/letters",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-photography",
  "https://templix-ai.whitesparksoft.com/en/about",
  "https://templix-ai.whitesparksoft.com/en/blog/professional-resume-templates",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/daycare-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts",
  "https://templix-ai.whitesparksoft.com/en/blog/how-to-write-a-quotation",
  "https://templix-ai.whitesparksoft.com/en/blog/experience-letter-format",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/sponsorship-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-marketing-manager",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-devops-engineer",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/subcontractor-agreement",
  "https://templix-ai.whitesparksoft.com/en/blog/how-to-write-freelance-invoice",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/digital-marketing-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-timesheet",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/consulting-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/landscaping-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/it-services-quotation",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/complaint-letter",
  "https://templix-ai.whitesparksoft.com/en/blog/free-invoice-generator-guide",
  "https://templix-ai.whitesparksoft.com/en/blog/nda-guide-protect-your-business",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/request-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/interior-design-quotation",
  "https://templix-ai.whitesparksoft.com/en/blog/google-docs-vs-word-vs-templix",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-business-analyst",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-purchase-order",
  "https://templix-ai.whitesparksoft.com/en/blog/executive-summary-business-plan",
  "https://templix-ai.whitesparksoft.com/en/blog/gst-invoice-format-for-freelancers",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/consulting-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/audit-report",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/real-estate-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/interior-design-proposal",
  "https://templix-ai.whitesparksoft.com/en/blog/ai-resume-builder-guide",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/photography-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/research-report",
  "https://templix-ai.whitesparksoft.com/en/blog/freelance-contract-checklist",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-commercial-export",
  "https://templix-ai.whitesparksoft.com/en/tools/hourly-rate-calculator",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-freelancer",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-product-manager",
  "https://templix-ai.whitesparksoft.com/en/contact",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-tutoring",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/feasibility-report",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/tech-startup-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/cleaning-services-quotation",
  "https://templix-ai.whitesparksoft.com/en/terms",
  "https://templix-ai.whitesparksoft.com/en/tools/discount-calculator",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-catering",
  "https://templix-ai.whitesparksoft.com/en/blog/business-letter-format",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/resignation-letter",
  "https://templix-ai.whitesparksoft.com/en/blog",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/branding-proposal",
  "https://templix-ai.whitesparksoft.com/en/blog/how-to-write-statement-of-work",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-landscaping",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/character-reference-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/social-media-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/business-report",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-medical",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/financial-report",
  "https://templix-ai.whitesparksoft.com/en/blog/pdf-vs-word-which-format",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/training-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-milestone",
  "https://templix-ai.whitesparksoft.com/en/blog/service-agreement-vs-contract",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-contractor",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/incident-report",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/startup-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/authorization-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/employee-performance-report",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/termination-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/business-plan-lean-canvas",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-estimate",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/freelance-agreement",
  "https://templix-ai.whitesparksoft.com/en/blog/best-contract-templates",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/joint-venture-agreement",
  "https://templix-ai.whitesparksoft.com/en/tools",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/nonprofit-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/nda-template",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-sales-representative",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/fitness-gym-business-plan",
  "https://templix-ai.whitesparksoft.com/en/blog/ai-document-automation-guide",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/monthly-performance-report",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/cover-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/warning-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/freelancer",
  "https://templix-ai.whitesparksoft.com/en/blog/consulting-proposal-template-guide",
  "https://templix-ai.whitesparksoft.com/en/tools/profit-margin-calculator",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/vendor-agreement",
  "https://templix-ai.whitesparksoft.com/en/blog/linkedin-profile-tips",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/marketing-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/letter-salary-increase",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/marketing-quotation",
  "https://templix-ai.whitesparksoft.com/en/blog/two-weeks-notice-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/freelance-contract",
  "https://templix-ai.whitesparksoft.com/en/blog/invoice-vs-receipt",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/franchise-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/event-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/partnership-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/event-quotation",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/hvac-quotation",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/rental-agreement",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-cybersecurity-analyst",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/photography-services-contract",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/construction-quotation",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/invitation-letter",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/licensing-agreement",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-rental",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-software-engineer",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/residential-lease-agreement",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/sales-contract",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/transport-quotation",
  "https://templix-ai.whitesparksoft.com/en/templates/reports/marketing-report",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/ecommerce-business-plan",
  "https://templix-ai.whitesparksoft.com/en/blog/ats-resume-format-guide",
  "https://templix-ai.whitesparksoft.com/en/templates",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/offer-letter",
  "https://templix-ai.whitesparksoft.com/en/blog/best-invoice-templates-for-freelancers",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-web-developer",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/printing-quotation",
  "https://templix-ai.whitesparksoft.com/en/templates/contracts/severance-agreement",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans",
  "https://templix-ai.whitesparksoft.com/en/blog/how-to-write-a-business-proposal",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-graphic-designer",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/seo-services-proposal",
  "https://templix-ai.whitesparksoft.com/en/blog/resume-tips-for-freshers",
  "https://templix-ai.whitesparksoft.com/en/templates/proposals/research-proposal",
  "https://templix-ai.whitesparksoft.com/en/blog/thank-you-letter-after-interview",
  "https://templix-ai.whitesparksoft.com/en/templates/business-plans/coffee-shop-business-plan",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-hvac-service",
  "https://templix-ai.whitesparksoft.com/en/tools/contract-generator",
  "https://templix-ai.whitesparksoft.com/en/tools/proposal-builder",
  "https://templix-ai.whitesparksoft.com/en/tools/pricing-calculator",
  "https://templix-ai.whitesparksoft.com/en/tools/terms-generator",
  "https://templix-ai.whitesparksoft.com/en/tools/scope-generator",
  "https://templix-ai.whitesparksoft.com/en/blog/resume-format-for-freshers-in-india",
  "https://templix-ai.whitesparksoft.com/en/tools/resume-ats-checker",
  "https://templix-ai.whitesparksoft.com/en/tools/pdf-to-jpg",
  "https://templix-ai.whitesparksoft.com/en/tools/invoice-number-generator",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-hr-manager",
  "https://templix-ai.whitesparksoft.com/en/templates/letters/letter-payment-reminder",
  "https://templix-ai.whitesparksoft.com/en/templates/invoices/invoice-gst",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-registered-nurse",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-fresher-graduate",
  "https://templix-ai.whitesparksoft.com/en/blog/offer-letter-format",
  "https://templix-ai.whitesparksoft.com/en/tools/gst-calculator",
  "https://templix-ai.whitesparksoft.com/en/templates/quotations/electrical-quotation",
  "https://templix-ai.whitesparksoft.com/en/templates/resumes/resume-content-writer"
];

console.log(`Checking ${validEnPages.length} primary canonical /en/ pages against dataset...`);

let validCount = 0;
let notFoundCount = 0;

validEnPages.forEach((urlStr, i) => {
  const url = new URL(urlStr);
  const path = url.pathname.replace('/en', '');

  let found = false;

  if (path === '' || path === '/' || path === '/privacy' || path === '/about' || path === '/terms' || path === '/contact' || path === '/faq' || path === '/templates' || path === '/blog' || path === '/tools') {
    found = true;
  } else if (path.startsWith('/templates/')) {
    const segs = path.replace('/templates/', '').split('/');
    if (segs.length === 1) {
      found = CATEGORIES.some(c => c.slug === segs[0]);
    } else if (segs.length === 2) {
      found = allFallbackTemplates.some(t => t.categorySlug === segs[0] && t.slug === segs[1]);
    }
  } else if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    found = STATIC_BLOG_POSTS.some(b => b.slug === slug);
  } else if (path.startsWith('/tools/')) {
    const slug = path.replace('/tools/', '');
    found = ALL_TOOLS.some(t => t.slug === slug);
  }

  if (found) {
    validCount++;
  } else {
    notFoundCount++;
    console.log(`[${i+1}] NOT FOUND IN DATASET: ${urlStr} (path: ${path})`);
  }
});

console.log(`Summary: ${validCount} valid pages found in dataset, ${notFoundCount} missing.`);
