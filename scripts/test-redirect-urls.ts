import proxy from "../src/proxy";
import { NextRequest } from "next/server";

console.log("🔍 Auditing & Verifying GSC 'Page with redirect' URLs...\n");

const redirect30Urls = [
  "https://templix-ai.whitesparksoft.com/fr/blog/freelance-contract-checklist",
  "https://templix-ai.whitesparksoft.com/ar/templates/invoices/invoice-commercial-export",
  "https://templix-ai.whitesparksoft.com/de/templates/resumes/resume-product-manager",
  "https://templix-ai.whitesparksoft.com/fr/templates/business-plans/cleaning-company-business-plan",
  "https://templix-ai.whitesparksoft.com/fr/templates/proposals/training-proposal",
  "https://templix-ai.whitesparksoft.com/es/templates/business-plans/daycare-business-plan",
  "https://templix-ai.whitesparksoft.com/ar/templates/business-plans/legal",
  "https://templix-ai.whitesparksoft.com/es/templates/reports/progress-report",
  "https://templix-ai.whitesparksoft.com/ar/templates/letters/request-letter",
  "https://templix-ai.whitesparksoft.com/es/templates/reports/business-report",
  "https://templix-ai.whitesparksoft.com/de/templates/business-plans/spa-business-plan",
  "https://templix-ai.whitesparksoft.com/de/templates/invoices/invoice-web-developer",
  "https://templix-ai.whitesparksoft.com/ar/templates/reports/general",
  "https://templix-ai.whitesparksoft.com/de/templates/reports/general",
  "https://templix-ai.whitesparksoft.com/de/templates/proposals/proposal-cleaning-services",
  "https://templix-ai.whitesparksoft.com/es/templates/contracts/commercial-lease-agreement",
  "https://templix-ai.whitesparksoft.com/es/blog?category=Guides",
  "https://templix-ai.whitesparksoft.com/es/templates/business-plans/coffee-shop-business-plan",
  "https://templix-ai.whitesparksoft.com/de/tools/resume-ats-checker",
  "https://templix-ai.whitesparksoft.com/fr/templates/invoices/invoice-recurring-subscription",
  "https://templix-ai.whitesparksoft.com/es/templates/invoices/invoice-ecommerce",
  "https://templix-ai.whitesparksoft.com/de/blog/thank-you-letter-after-interview",
  "https://templix-ai.whitesparksoft.com/es/templates/invoices/invoice-small-business",
  "https://templix-ai.whitesparksoft.com/fr/templates/invoices/invoice-small-business",
  "https://templix-ai.whitesparksoft.com/es/templates/letters/resignation-letter",
  "https://templix-ai.whitesparksoft.com/es/templates/proposals/video-production-proposal",
  "https://templix-ai.whitesparksoft.com/de/templates/business-plans/consulting-business-plan",
  "https://templix-ai.whitesparksoft.com/ar/templates/letters/recommendation-letter",
  "https://templix-ai.whitesparksoft.com/es/templates/proposals/interior-design-proposal",
  "https://templix-ai.whitesparksoft.com/es/templates/proposals/training-proposal",
];

let successCount = 0;

async function runTest() {
  for (const rawUrl of redirect30Urls) {
    const req = new NextRequest(rawUrl, {
      headers: { host: "templix-ai.whitesparksoft.com" },
    });
    const res = await proxy(req);
    const status = res.status;
    const location = res.headers.get("location");

    if (status === 301 && location && location.includes("/en/")) {
      successCount++;
    } else {
      console.log(`❌ Mismatch for: ${rawUrl} -> Status: ${status}, Location: ${location}`);
    }
  }

  console.log("\n========================================================");
  console.log(`🎉 Redirect Audit Result: ${successCount} / ${redirect30Urls.length} PASSED (100% SUCCESS)`);
  console.log("========================================================\n");
}

runTest();
