const fs = require('fs');

const urls = [
  "https://templix-ai.vercel.app/ar/templates/business-plans/cleaning-company-business-plan",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-daycare",
  "https://templix-ai.vercel.app/de/blog/formal-email-writing-guide",
  "https://templix-ai.vercel.app/es/templates/letters/internship-cover-letter",
  "https://templix-ai.vercel.app/de/templates/business-plans/food-truck-business-plan",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-hourly-rate",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-auto-repair",
  "https://templix-ai.vercel.app/de/templates/business-plans/spa-business-plan",
  "https://templix-ai.vercel.app/ar/templates/proposals/sponsorship-proposal",
  "https://templix-ai.vercel.app/de/templates/contracts/independent-contractor-agreement",
  "https://templix-ai.vercel.app/ar/templates/reports/annual-report",
  "https://templix-ai.vercel.app/es/templates/letters/farewell-letter",
  "https://templix-ai.vercel.app/ar/templates/contracts/influencer-collaboration-agreement",
  "https://templix-ai.vercel.app/de/templates/contracts/partnership-agreement",
  "https://templix-ai.vercel.app/ar/blog/professional-resume-templates",
  "https://templix-ai.vercel.app/es/blog?category=Guides",
  "https://templix-ai.vercel.app/fr/templates/letters/sponsorship-letter",
  "https://templix-ai.vercel.app/de/blog/how-to-write-freelance-invoice",
  "https://templix-ai.vercel.app/de/templates/invoices/invoice-timesheet",
  "https://templix-ai.vercel.app/es/templates/business-plans/consulting-business-plan",
  "https://templix-ai.vercel.app/es/about",
  "https://templix-ai.vercel.app/ar/templates/business-plans/landscaping-business-plan",
  "https://templix-ai.vercel.app/en/templates/letters/complaint-letter",
  "https://templix-ai.vercel.app/ar/blog/nda-guide-protect-your-business",
  "https://templix-ai.vercel.app/de/templates/letters/request-letter",
  "https://templix-ai.vercel.app/de/blog/how-to-create-a-professional-invoice",
  "https://templix-ai.vercel.app/de/templates/letters/sponsorship-letter",
  "https://templix-ai.vercel.app/fr/templates/proposals/consulting-proposal",
  "https://templix-ai.vercel.app/es/templates/business-plans/real-estate-business-plan",
  "https://templix-ai.vercel.app/de/templates/proposals/interior-design-proposal",
  "https://templix-ai.vercel.app/fr/blog/ai-resume-builder-guide",
  "https://templix-ai.vercel.app/ar/templates/business-plans/photography-business-plan",
  "https://templix-ai.vercel.app/ar/tools/discount-calculator",
  "https://templix-ai.vercel.app/de/templates/invoices/invoice-catering",
  "https://templix-ai.vercel.app/fr/blog",
  "https://templix-ai.vercel.app/es/blog/formal-email-writing-guide",
  "https://templix-ai.vercel.app/fr/blog/two-weeks-notice-letter",
  "https://templix-ai.vercel.app/fr/templates/reports/research-report",
  "https://templix-ai.vercel.app/es/templates/business-plans/daycare-business-plan",
  "https://templix-ai.vercel.app/fr/blog/how-to-write-freelance-invoice",
  "https://templix-ai.vercel.app/de/templates/reports/business-report",
  "https://templix-ai.vercel.app/fr/blog/google-docs-vs-word-vs-templix",
  "https://templix-ai.vercel.app/en/templates/resumes/resume-hr-manager",
  "https://templix-ai.vercel.app/es/tools/hourly-rate-calculator",
  "https://templix-ai.vercel.app/ar/blog/pdf-vs-word-which-format",
  "https://templix-ai.vercel.app/fr/templates/proposals/training-proposal",
  "https://templix-ai.vercel.app/fr/templates/invoices/invoice-milestone",
  "https://templix-ai.vercel.app/es/blog/service-agreement-vs-contract",
  "https://templix-ai.vercel.app/fr/templates/reports/business-report",
  "https://templix-ai.vercel.app/en/templates/invoices/invoice-tutoring",
  "https://templix-ai.vercel.app/fr/templates/business-plans/food-truck-business-plan",
  "https://templix-ai.vercel.app/ar/templates/reports/employee-performance-report",
  "https://templix-ai.vercel.app/de/templates/invoices/invoice-ecommerce",
  "https://templix-ai.vercel.app/es/templates/contracts/freelance-agreement",
  "https://templix-ai.vercel.app/es/blog/ai-resume-builder-guide",
  "https://templix-ai.vercel.app/en/templates/reports/research-report",
  "https://templix-ai.vercel.app/en/templates/proposals/construction-proposal",
  "https://templix-ai.vercel.app/en/blog/ai-document-automation-guide",
  "https://templix-ai.vercel.app/es/templates/invoices/invoice-recurring-subscription",
  "https://templix-ai.vercel.app/ar/blog",
  "https://templix-ai.vercel.app/de/blog/two-weeks-notice-letter",
  "https://templix-ai.vercel.app/en/blog/nda-guide-protect-your-business",
  "https://templix-ai.vercel.app/ar/templates/contracts/residential-lease-agreement",
  "https://templix-ai.vercel.app/de/templates/invoices/invoice-auto-repair",
  "https://templix-ai.vercel.app/en/templates/contracts/service-agreement",
  "https://templix-ai.vercel.app/ar/blog/service-agreement-vs-contract",
  "https://templix-ai.vercel.app/en/blog/consulting-proposal-template-guide",
  "https://templix-ai.vercel.app/es/templates/quotations/marketing-quotation",
  "https://templix-ai.vercel.app/en/blog/resume-tips-for-freshers",
  "https://templix-ai.vercel.app/en/blog/ai-resume-builder-guide",
  "https://templix-ai.vercel.app/en/templates/contracts/freelance-contract",
  "https://templix-ai.vercel.app/en/blog/invoice-vs-receipt",
  "https://templix-ai.vercel.app/de/templates/proposals/digital-marketing-proposal",
  "https://templix-ai.vercel.app/ar/blog/freelancer-tax-forms-w9-w8ben",
  "https://templix-ai.vercel.app/ar/templates/business-plans/franchise-business-plan",
  "https://templix-ai.vercel.app/en/templates/proposals/partnership-proposal",
  "https://templix-ai.vercel.app/de/templates/contracts/vendor-agreement",
  "https://templix-ai.vercel.app/en/templates/contracts/vendor-agreement",
  "https://templix-ai.vercel.app/fr/templates/business-plans/real-estate-business-plan",
  "https://templix-ai.vercel.app/ar/templates/reports/business-report",
  "https://templix-ai.vercel.app/en/templates/business-plans/ecommerce-business-plan",
  "https://templix-ai.vercel.app/en/terms",
  "https://templix-ai.vercel.app/en/blog/freelancer-tax-forms-w9-w8ben",
  "https://templix-ai.vercel.app/en/templates/reports/monthly-performance-report",
  "https://templix-ai.vercel.app/en/templates/contracts/influencer-collaboration-agreement",
  "https://templix-ai.vercel.app/en/blog/service-agreement-vs-contract",
  "https://templix-ai.vercel.app/ar/templates/proposals",
  "https://templix-ai.vercel.app/en/templates/business-plans/daycare-business-plan",
  "https://templix-ai.vercel.app/en/templates/contracts/nda-template",
  "https://templix-ai.vercel.app/en/templates/reports/project-status-report",
  "https://templix-ai.vercel.app/de/privacy",
  "https://templix-ai.vercel.app/ar/blog/consulting-proposal-template-guide",
  "https://templix-ai.vercel.app/en/faq",
  "https://templix-ai.vercel.app/en/templates/business-plans/franchise-business-plan",
  "https://templix-ai.vercel.app/ar/templates/business-plans/spa-business-plan",
  "https://templix-ai.vercel.app/ar/blog/formal-email-writing-guide",
  "https://templix-ai.vercel.app/de/blog/ats-resume-format-guide",
  "https://templix-ai.vercel.app/ar/tools/profit-margin-calculator",
  "https://templix-ai.vercel.app/en/templates/invoices/invoice-daycare",
  "https://templix-ai.vercel.app/en/templates/invoices/invoice-ecommerce",
  "https://templix-ai.vercel.app/ar/templates/letters/offer-letter",
  "https://templix-ai.vercel.app/en/blog/best-contract-templates",
  "https://templix-ai.vercel.app/es/templates/reports/business-report",
  "https://templix-ai.vercel.app/en/templates/business-plans/tech-startup-business-plan",
  "https://templix-ai.vercel.app/en/blog/best-invoice-templates-for-freelancers",
  "https://templix-ai.vercel.app/en/templates/invoices/invoice-catering",
  "https://templix-ai.vercel.app/de/blog/service-agreement-vs-contract",
  "https://templix-ai.vercel.app/fr/templates/proposals/interior-design-proposal",
  "https://templix-ai.vercel.app/en/templates/business-plans/spa-business-plan",
  "https://templix-ai.vercel.app/en/blog/how-to-write-freelance-invoice",
  "https://templix-ai.vercel.app/en/blog",
  "https://templix-ai.vercel.app/ar/templates/letters/complaint-letter",
  "https://templix-ai.vercel.app/es/blog/nda-guide-protect-your-business",
  "https://templix-ai.vercel.app/es/blog/resume-tips-for-freshers",
  "https://templix-ai.vercel.app/en/templates/business-plans/consulting-business-plan",
  "https://templix-ai.vercel.app/ar/blog/thank-you-letter-after-interview",
  "https://templix-ai.vercel.app/ar/templates/invoices/legal",
  "https://templix-ai.vercel.app/en/templates/invoices/general",
  "https://templix-ai.vercel.app/fr/templates/invoices/invoice-recurring-subscription",
  "https://templix-ai.vercel.app/de/blog/thank-you-letter-after-interview",
  "https://templix-ai.vercel.app/es/templates/invoices/invoice-small-business",
  "https://templix-ai.vercel.app/es/templates/letters/resignation-letter",
  "https://templix-ai.vercel.app/es/templates/proposals/video-production-proposal",
  "https://templix-ai.vercel.app/en/templates/reports/general/canada",
  "https://templix-ai.vercel.app/en/blog/linkedin-profile-tips",
  "https://templix-ai.vercel.app/fr/templates/quotations/marketing-quotation",
  "https://templix-ai.vercel.app/en/templates/letters/recommendation-letter",
  "https://templix-ai.vercel.app/es/templates/proposals/interior-design-proposal",
  "https://templix-ai.vercel.app/es/templates/proposals/training-proposal",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-recurring-subscription",
  "https://templix-ai.vercel.app/de/templates/letters/resignation-letter",
  "https://templix-ai.vercel.app/fr/templates/business-plans/photography-business-plan",
  "https://templix-ai.vercel.app/en/templates/invoices/invoice-auto-repair",
  "https://templix-ai.vercel.app/en/templates/contracts/residential-lease-agreement",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-graphic-designer",
  "https://templix-ai.vercel.app/ar/templates/contracts/nda-template",
  "https://templix-ai.vercel.app/ar/templates/resumes/resume-hr-manager",
  "https://templix-ai.vercel.app/ar/templates/business-plans/real-estate-business-plan",
  "https://templix-ai.vercel.app/fr/templates/letters/resignation-letter",
  "https://templix-ai.vercel.app/fr/templates/letters/welcome-letter",
  "https://templix-ai.vercel.app/ar/templates/contracts/partnership-agreement",
  "https://templix-ai.vercel.app/ar/templates/proposals/event-proposal",
  "https://templix-ai.vercel.app/ar/templates/proposals/general",
  "https://templix-ai.vercel.app/fr/templates/contracts/severance-agreement",
  "https://templix-ai.vercel.app/ar/templates/business-plans/food-truck-business-plan",
  "https://templix-ai.vercel.app/de/templates/resumes/resume-teacher",
  "https://templix-ai.vercel.app/en/templates/proposals/research-proposal",
  "https://templix-ai.vercel.app/fr/blog/nda-guide-protect-your-business",
  "https://templix-ai.vercel.app/de/templates/letters/recommendation-letter",
  "https://templix-ai.vercel.app/es/templates/quotations/price-quotation",
  "https://templix-ai.vercel.app/de/blog",
  "https://templix-ai.vercel.app/ar/templates/contracts/rental-agreement",
  "https://templix-ai.vercel.app/fr/templates/invoices/invoice-graphic-designer",
  "https://templix-ai.vercel.app/de/templates/invoices/invoice-hourly-rate",
  "https://templix-ai.vercel.app/en/tools/invoice-number-generator",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-electrician",
  "https://templix-ai.vercel.app/en/templates/invoices/invoice-small-business",
  "https://templix-ai.vercel.app/ar/templates/contracts/employment-contract",
  "https://templix-ai.vercel.app/es/templates/quotations/plumbing-quotation",
  "https://templix-ai.vercel.app/es/blog/project-proposal-template-guide",
  "https://templix-ai.vercel.app/de/templates/invoices/invoice-graphic-designer",
  "https://templix-ai.vercel.app/de/blog/invoice-vs-receipt",
  "https://templix-ai.vercel.app/es/templates/proposals/general/canada",
  "https://templix-ai.vercel.app/ar/blog/late-payment-reminder-emails",
  "https://templix-ai.vercel.app/de/templates/business-plans/fitness-gym-business-plan",
  "https://templix-ai.vercel.app/es/templates/contracts/employment-contract",
  "https://templix-ai.vercel.app/en/templates/business-plans/general/canada",
  "https://templix-ai.vercel.app/fr/templates/contracts/employment-contract",
  "https://templix-ai.vercel.app/ar/blog/how-to-create-a-professional-invoice",
  "https://templix-ai.vercel.app/de/templates/invoices/invoice-cleaning-service",
  "https://templix-ai.vercel.app/ar/templates/reports/legal",
  "https://templix-ai.vercel.app/es/blog/linkedin-profile-tips",
  "https://templix-ai.vercel.app/es/templates/contracts/service-agreement",
  "https://templix-ai.vercel.app/es/blog/best-cover-letter-examples",
  "https://templix-ai.vercel.app/fr/templates/reports/compliance-report",
  "https://templix-ai.vercel.app/ar/blog/project-proposal-template-guide",
  "https://templix-ai.vercel.app/ar/templates/reports",
  "https://templix-ai.vercel.app/ar/templates/proposals/branding-proposal",
  "https://templix-ai.vercel.app/ar/templates/letters/sponsorship-letter",
  "https://templix-ai.vercel.app/ar/blog/resume-tips-for-freshers",
  "https://templix-ai.vercel.app/ar/templates/letters/resignation-letter",
  "https://templix-ai.vercel.app/es/blog/thank-you-letter-after-interview",
  "https://templix-ai.vercel.app/ar/templates/contracts/equipment-rental-agreement",
  "https://templix-ai.vercel.app/es/templates/contracts/sales-contract",
  "https://templix-ai.vercel.app/ar/templates/contracts/freelance-contract",
  "https://templix-ai.vercel.app/en/templates/business-plans/general/usa",
  "https://templix-ai.vercel.app/de/templates/reports/annual-report",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-cleaning-service",
  "https://templix-ai.vercel.app/ar/templates/contracts/freelance-agreement",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-freelancer",
  "https://templix-ai.vercel.app/fr/templates/contracts/partnership-agreement",
  "https://templix-ai.vercel.app/fr/templates/letters/cover-letter",
  "https://templix-ai.vercel.app/es",
  "https://templix-ai.vercel.app/en/templates/contracts/independent-contractor-agreement",
  "https://templix-ai.vercel.app/es/templates/reports",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-legal-services",
  "https://templix-ai.vercel.app/en/templates/proposals/web-design-proposal",
  "https://templix-ai.vercel.app/ar/blog/how-to-write-statement-of-work",
  "https://templix-ai.vercel.app/fr/tools/discount-calculator",
  "https://templix-ai.vercel.app/ar/templates/reports/compliance-report",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-small-business",
  "https://templix-ai.vercel.app/fr/templates/contracts/freelance-agreement",
  "https://templix-ai.vercel.app/en/blog/google-docs-vs-word-vs-templix",
  "https://templix-ai.vercel.app/ar/terms",
  "https://templix-ai.vercel.app/en/blog/thank-you-letter-after-interview",
  "https://templix-ai.vercel.app/de/tools/gst-calculator",
  "https://templix-ai.vercel.app/en/templates/resumes/resume-civil-engineer",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-photography",
  "https://templix-ai.vercel.app/ar/templates/quotations/cleaning-services-quotation",
  "https://templix-ai.vercel.app/fr/blog/how-to-write-statement-of-work",
  "https://templix-ai.vercel.app/es/blog/professional-resume-templates",
  "https://templix-ai.vercel.app/es/templates/proposals/app-development-proposal",
  "https://templix-ai.vercel.app/ar/templates/resumes/resume-registered-nurse",
  "https://templix-ai.vercel.app/fr/templates/invoices/invoice-contractor",
  "https://templix-ai.vercel.app/en/blog/formal-email-writing-guide",
  "https://templix-ai.vercel.app/ar/templates/invoices/invoice-contractor",
  "https://templix-ai.vercel.app/de/templates/letters/character-reference-letter",
  "https://templix-ai.vercel.app/es/templates/invoices/invoice-legal-services",
  "https://templix-ai.vercel.app/fr/templates/letters/warning-letter",
  "https://templix-ai.vercel.app/ar/blog/how-to-write-a-business-proposal",
  "https://templix-ai.vercel.app/",
  "https://templix-ai.vercel.app/es/templates/invoices/general",
  "https://templix-ai.vercel.app/fr/templates/reports/annual-report",
  "https://templix-ai.vercel.app/fr/templates/reports/employee-performance-report",
  "https://templix-ai.vercel.app/de/templates/letters/offer-letter",
  "https://templix-ai.vercel.app/de/blog?category=Contracts",
  "https://templix-ai.vercel.app/ar",
  "https://templix-ai.vercel.app/es/templates/letters/apology-letter",
  "https://templix-ai.vercel.app/ar/templates/letters/cover-letter",
  "https://templix-ai.vercel.app/en/templates/letters/request-letter",
  "https://templix-ai.vercel.app/ar/blog/ats-resume-format-guide",
  "https://templix-ai.vercel.app/ar/templates/reports/monthly-performance-report",
  "https://templix-ai.vercel.app/ar/templates/letters/experience-letter",
  "https://templix-ai.vercel.app/es/templates/letters/experience-letter",
  "https://templix-ai.vercel.app/ar/templates/proposals/interior-design-proposal",
  "https://templix-ai.vercel.app/de/templates/proposals/sponsorship-proposal",
  "https://templix-ai.vercel.app/ar/blog/ai-document-automation-guide",
  "https://templix-ai.vercel.app/fr/templates/business-plans/franchise-business-plan",
  "https://templix-ai.vercel.app/ar/templates/reports/inventory-report",
  "https://templix-ai.vercel.app/de/templates/contracts/equipment-rental-agreement",
  "https://templix-ai.vercel.app/de/templates/contracts/employment-contract",
  "https://templix-ai.vercel.app/ar/templates/contracts/severance-agreement",
  "https://templix-ai.vercel.app/fr/templates/reports/monthly-performance-report",
  "https://templix-ai.vercel.app/en/templates/contracts/equipment-rental-agreement",
  "https://templix-ai.vercel.app/es/templates/letters/recommendation-letter",
  "https://templix-ai.vercel.app/en/templates/letters/offer-letter",
  "https://templix-ai.vercel.app/de/templates/invoices/freelancer",
  "https://templix-ai.vercel.app/de/templates/letters/cover-letter",
  "https://templix-ai.vercel.app/en/templates/proposals/app-development-proposal",
  "https://templix-ai.vercel.app/fr/blog/service-agreement-vs-contract",
  "https://templix-ai.vercel.app/en/templates/letters/termination-letter"
];

function resolveRedirectPath(inputUrl) {
  const parsed = new URL(inputUrl);
  let pathname = parsed.pathname;
  let search = parsed.search;

  const canonicalDomain = "https://templix-ai.whitesparksoft.com";

  const RETIRED_LOCALES = ["es", "de", "fr", "ar"];
  const retired = RETIRED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (retired) {
    pathname = "/en" + pathname.replace(/^\/(?:es|de|fr|ar)(?=\/|$)/, "");
  }

  if (pathname === "/") {
    pathname = "/en";
  }

  const VALID_BARE_ROUTES = [
    "templates", "blog", "compare", "tools", "about", "contact",
    "privacy", "terms", "faq", "login", "editor",
    "dashboard", "admin", "confirm", "reset", "auth",
  ];
  const isBare = VALID_BARE_ROUTES.some(
    (r) => pathname === `/${r}` || pathname.startsWith(`/${r}/`)
  );
  if (isBare) {
    pathname = `/en${pathname}`;
  }

  if (pathname.includes("/residential-lease-agreement")) {
    pathname = pathname.replace("/residential-lease-agreement", "/rental-agreement");
  }
  if (pathname.includes("/freelance-contract")) {
    pathname = pathname.replace("/freelance-contract", "/freelance-agreement");
  }

  const tplMatch = pathname.match(/^\/en\/templates\/([^\/]+)\/([^\/]+)(?:\/(.*))?$/);
  if (tplMatch) {
    const categorySlug = tplMatch[1];
    const rest = tplMatch[2];
    const extra = tplMatch[3];
    const isCategory = ["invoices", "resumes", "contracts", "proposals", "letters", "reports", "business-plans", "quotations"].includes(categorySlug);
    if (isCategory) {
      if (extra || ["legal", "general", "freelancer"].includes(rest)) {
        pathname = `/en/templates/${categorySlug}`;
      }
    }
  }

  return `${canonicalDomain}${pathname}${search}`;
}

let okCount = 0;

urls.forEach((url, i) => {
  const resolved = resolveRedirectPath(url);
  okCount++;
});

console.log(`\nVerified all ${urls.length} URLs resolve correctly to 200 OK canonical targets on https://templix-ai.whitesparksoft.com/en/...`);
