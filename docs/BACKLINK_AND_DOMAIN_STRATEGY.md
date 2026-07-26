# Backlink Acquisition & Custom Domain SEO Strategy Guide

This document outlines actionable solutions for the Domain Subdomain notice and the Backlinks/Referring Domains warning from your SEO Audit.

---

## Part 1: Custom Apex Domain & Subdomain Canonical Configuration

### Current Warning:
> *"This page is hosted on a subdomain. Use a top level domain for better SEO results."*

### Context & Recommendation:
Your site is currently hosted at `https://templix-ai.whitesparksoft.com`. Hosting on a dedicated top-level apex domain (e.g. `templix.ai` or `templixai.com`) accelerates root domain authority aggregation.

### Implementation Steps:
1. **Purchase / Connect Apex Domain**:
   - Register a primary brand domain (e.g. `templix.ai`).
   - Add DNS A Records pointing `@` to your Vercel/hosting server IP (`76.76.21.21`).
   - Add CNAME Record pointing `www` to `cname.vercel-dns.com`.
2. **Set Canonical Environment Variable**:
   - In `.env.production` or your hosting dashboard:
     ```env
     NEXT_PUBLIC_SITE_URL=https://templix.ai
     ```
3. **Automatic 301 Redirect**:
   - Our [proxy.ts](file:///d:/Templix-AI/src/proxy.ts) automatically catches any subdomain or alternative host requests and 301-redirects them to `NEXT_PUBLIC_SITE_URL/en`, passing 100% of link equity (SEO Juice) to the new apex domain.

---

## Part 2: High-Authority Backlink Acquisition Plan

### Current Warning:
> *"This page only has backlinks from 1 referring domain. This page only has 1 backlink."*

### Strategy to Build 50+ High-Authority Backlinks in 30 Days:

#### 1. Software & Product Directory Submissions (DA 70–95)
Submit Templix AI to curated tech directories (free Dofollow backlinks):
- **Product Hunt**: Launch Templix AI as a free document creation tool.
- **StartupBase**: (Badge already embedded on homepage!) Complete directory profile.
- **AlternativeTo**: List Templix AI as a free privacy-first alternative to Canva / Microsoft Word.
- **BetaList & SaaSHub**: Submit as a web app.
- **G2 & Capterra**: Create free product vendor profiles.

#### 2. Open-Source & Developer Ecosystem (DA 90+)
- **GitHub Repository**: Create a public repository (e.g., `templix-ai-templates` or `awesome-document-templates`) linking to `https://templix-ai.whitesparksoft.com`.
- **npm / JSR Packages**: Publish any reusable open-source helper package with homepage link.

#### 3. Content Syndication & Community Outreach (DA 80+)
- **Medium & Dev.to**: Publish technical guides (e.g. *"How to Design an ATS-Friendly Resume in 2026"*) with links back to relevant template pages on Templix AI.
- **Reddit**: Share helpful invoice & contract advice in subreddits (`r/freelance`, `r/smallbusiness`, `r/resumes`) linking to relevant free tools.
- **Quora**: Answer questions regarding invoicing standards, E-SIGN contracts, and resume formats with contextual links.

#### 4. Guest Posting & Resource Pages
- Reach out to freelance blogs, accounting portals, and career advice websites offering high-quality guest articles with backlink placements to Templix AI template categories.
