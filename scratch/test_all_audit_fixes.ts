import { NextRequest } from "next/server";
import proxy from "../src/proxy";
import nextConfig from "../next.config";
import fs from "fs";
import path from "path";

async function runComprehensiveAuditTests() {
  console.log("================================================================================");
  console.log("🚀 STARTING AUDIT VERIFICATION FOR ALL 5 ISSUES");
  console.log("================================================================================\n");

  let passedTests = 0;
  let totalTests = 0;

  function assert(condition: boolean, testName: string, details?: string) {
    totalTests++;
    if (condition) {
      console.log(`✅ [PASS] ${testName}`);
      passedTests++;
    } else {
      console.error(`❌ [FAIL] ${testName}`);
      if (details) console.error(`   Details: ${details}`);
    }
  }

  // ── TEST 1: CDN Usage & Cache Headers ──
  console.log("\n--- TEST 1: CDN Usage & Cache-Control Headers ---");
  const headersConfig = await (nextConfig.headers ? nextConfig.headers() : []);
  
  const fontsHeader = headersConfig.find((h: any) => h.source === "/fonts/(.*)");
  const hasFontsCache = fontsHeader?.headers?.some(
    (header: any) => header.key === "Cache-Control" && header.value.includes("max-age=31536000") && header.value.includes("immutable")
  );
  assert(!!hasFontsCache, "Custom fonts have 1-year immutable CDN Cache-Control header");

  const publicAssetsHeader = headersConfig.find((h: any) => h.source?.includes(".{jpg,jpeg,png,svg"));
  const hasPublicAssetsCache = publicAssetsHeader?.headers?.some(
    (header: any) => header.key === "Cache-Control" && header.value.includes("max-age=31536000")
  );
  assert(!!hasPublicAssetsCache, "Public static files (images, icons, fonts, CSS/JS) have 1-year immutable CDN cache");

  const hasCdnCacheDirective = publicAssetsHeader?.headers?.some(
    (header: any) => header.key === "CDN-Cache-Control" && header.value.includes("max-age=31536000")
  );
  assert(!!hasCdnCacheDirective, "CDN-Cache-Control edge caching header is configured for edge proxy CDN");


  // ── TEST 2: URL Redirects Test (Apex / URL) ──
  console.log("\n--- TEST 2: Root URL Apex Direct 200 / Rewrite (0 Redirects) ---");
  const rootReq = new NextRequest("https://templix-ai.whitesparksoft.com/", {
    headers: { host: "templix-ai.whitesparksoft.com" },
  });
  const rootRes = await proxy(rootReq);
  const rootStatus = rootRes.status;
  const isRewriteOr200 = rootStatus === 200 && rootRes.headers.get("x-middleware-rewrite")?.includes("/en");
  const canonicalLinkHeader = rootRes.headers.get("Link");
  
  assert(
    isRewriteOr200 || rootStatus === 200,
    "Root URL (https://templix-ai.whitesparksoft.com/) responds directly with HTTP 200 (0 redirects)",
    `Status: ${rootStatus}, rewrite: ${rootRes.headers.get("x-middleware-rewrite")}`
  );
  assert(
    !!canonicalLinkHeader && canonicalLinkHeader.includes("rel=\"canonical\""),
    "Root URL serves Link rel='canonical' header pointing to canonical /en",
    `Link: ${canonicalLinkHeader}`
  );

  // ── TEST 3: URL Canonicalization Test (www -> apex 301) ──
  console.log("\n--- TEST 3: URL Canonicalization (www -> apex permanent 301) ---");
  const wwwReq = new NextRequest("https://www.templix-ai.whitesparksoft.com/en", {
    headers: { host: "www.templix-ai.whitesparksoft.com" },
  });
  const wwwRes = await proxy(wwwReq);
  const wwwLocation = wwwRes.headers.get("location");
  
  assert(
    wwwRes.status === 301 && wwwLocation === "https://templix-ai.whitesparksoft.com/en",
    "www.templix-ai.whitesparksoft.com/en 301 redirects to https://templix-ai.whitesparksoft.com/en",
    `Status: ${wwwRes.status}, Location: ${wwwLocation}`
  );

  const wwwRootReq = new NextRequest("https://www.templix-ai.whitesparksoft.com/", {
    headers: { host: "www.templix-ai.whitesparksoft.com" },
  });
  const wwwRootRes = await proxy(wwwRootReq);
  const wwwRootLocation = wwwRootRes.headers.get("location");

  assert(
    wwwRootRes.status === 301 && wwwRootLocation === "https://templix-ai.whitesparksoft.com/en",
    "www.templix-ai.whitesparksoft.com/ 301 redirects directly to https://templix-ai.whitesparksoft.com/en in 1 hop",
    `Status: ${wwwRootRes.status}, Location: ${wwwRootLocation}`
  );

  // ── TEST 4: Plaintext Emails Test ──
  console.log("\n--- TEST 4: Plaintext Email Obfuscation Check ---");
  const footerContent = fs.readFileSync(path.join(process.cwd(), "src/components/Footer.tsx"), "utf-8");
  const contactContent = fs.readFileSync(path.join(process.cwd(), "src/app/[locale]/contact/page.tsx"), "utf-8");

  const footerHasRawMailto = /href=["']mailto:[^"']+["']/.test(footerContent);
  const contactHasRawMailto = /href=["']mailto:[^"']+["']/.test(contactContent);
  const footerHasRawEmailInAria = /ariaLabel=["'][^"']*@[^"']*["']/.test(footerContent);
  const contactHasRawEmailInAria = /ariaLabel=["'][^"']*@[^"']*["']/.test(contactContent);

  assert(!footerHasRawMailto, "Footer does not contain raw hardcoded mailto: links in SSR HTML");
  assert(!contactHasRawMailto, "Contact page does not contain raw hardcoded mailto: links in SSR HTML");
  assert(!footerHasRawEmailInAria, "Footer does not leak plaintext email in ariaLabel attributes");
  assert(!contactHasRawEmailInAria, "Contact page does not leak plaintext email in ariaLabel attributes");

  // ── TEST 5: SPF Records & DNS Security Test ──
  console.log("\n--- TEST 5: SPF / DNS Record Security Specification ---");
  const emailSecurityPath = path.join(process.cwd(), "public/email-security.txt");
  const wellKnownSecurityPath = path.join(process.cwd(), "public/.well-known/security.txt");

  const emailSecurityExists = fs.existsSync(emailSecurityPath);
  const wellKnownSecurityExists = fs.existsSync(wellKnownSecurityPath);
  const emailSecurityContent = emailSecurityExists ? fs.readFileSync(emailSecurityPath, "utf-8") : "";

  assert(emailSecurityExists, "public/email-security.txt is published");
  assert(emailSecurityContent.includes("v=spf1 include:resend.com include:_spf.google.com ~all"), "SPF record specification includes Resend and Google Workspace ~all");
  assert(emailSecurityContent.includes("v=DMARC1; p=quarantine"), "DMARC record specification is defined with quarantine policy");
  assert(wellKnownSecurityExists, "public/.well-known/security.txt RFC 9116 security specification is published");

  console.log("\n================================================================================");
  console.log(`📊 FINAL RESULT: ${passedTests} / ${totalTests} TESTS PASSED (${Math.round((passedTests / totalTests) * 100)}%)`);
  console.log("================================================================================\n");

  if (passedTests === totalTests) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

runComprehensiveAuditTests().catch((e) => {
  console.error(e);
  process.exit(1);
});
