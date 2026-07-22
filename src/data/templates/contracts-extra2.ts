// A second batch of distinct contract / legal agreement templates. Each document
// is a fresh contract type with clauses relevant to that engagement. Free set.
// Note: enforceability varies by jurisdiction — these are starting points, not
// legal advice, and should be reviewed by a qualified lawyer before use.

export const contractsExtra2Templates: any[] = [
  {
    id: "coaching-agreement",
    slug: "coaching-agreement",
    title: "Coaching Agreement Template",
    description: "Free coaching agreement template covering coaching scope, session packages, fees, confidentiality, and cancellation between a coach and client.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Coaching Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "coachingFocus", "sessionPackage", "programTerm", "coachingFee", "paymentSchedule", "confidentialityTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "COACHING AGREEMENT",
        footer: "A coaching relationship between the Coach and the Client — not therapy or professional advice."
      },
      styles: {
        primaryColor: "#0ea5e9",
        secondaryColor: "#0369a1"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "COACHING AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Coach) and {{partyTwo}} (the Client)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Coaching" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Coach will provide coaching focused on {{coachingFocus}} through a {{sessionPackage}}. Coaching is a collaborative process and does not replace medical, legal, or financial advice." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement runs for a program term of {{programTerm}} from the effective date and may be renewed by mutual written agreement." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Client agrees to pay {{coachingFee}} according to the following schedule: {{paymentSchedule}}. Missed sessions without adequate notice may be forfeited." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{confidentialityTerms}} The Coach will keep all Client discussions confidential except where disclosure is required by law." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Fees for coaching already delivered up to the termination date remain payable by the Client." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Coach: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Enforceability varies by jurisdiction — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "software-license-agreement",
    slug: "software-license-agreement",
    title: "Software License Agreement Template",
    description: "Free software license agreement template covering license grant, permitted use, fees, intellectual property, warranty, and termination for licensors and licensees.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Software License Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "softwareName", "licenseScope", "licenseTerm", "licenseFee", "ipOwnership", "warrantyTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "SOFTWARE LICENSE AGREEMENT",
        footer: "Grant of a limited license from the Licensor to the Licensee."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#3730a3"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SOFTWARE LICENSE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Licensor) and {{partyTwo}} (the Licensee)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. License Grant & Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Licensor grants the Licensee a non-exclusive, non-transferable license to use {{softwareName}} for the following permitted use: {{licenseScope}}. The Licensee may not sublicense, reverse engineer, or redistribute the software without written consent." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This license is effective for {{licenseTerm}} from the effective date unless earlier terminated under this Agreement." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. License Fees" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Licensee agrees to pay {{licenseFee}} for the license granted. All fees are non-refundable once the software has been made available." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Intellectual Property" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{ipOwnership}} All rights, title, and interest in the software and its source code remain with the Licensor." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Warranty & Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{warrantyTerms}} {{terminationTerms}} Upon termination, the Licensee must cease all use and destroy all copies of the software." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensor: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Licensee: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Enforceability varies by jurisdiction — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "distribution-agreement",
    slug: "distribution-agreement",
    title: "Distribution Agreement Template",
    description: "Free distribution agreement template outlining distribution territory, product supply, pricing, minimum orders, and termination between a supplier and distributor.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Distribution Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "productLine", "distributionTerritory", "exclusivityTerms", "agreementTerm", "pricingTerms", "minimumOrder", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "DISTRIBUTION AGREEMENT",
        footer: "Appointment of the Distributor by the Supplier for defined territory."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#047857"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "DISTRIBUTION AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Supplier) and {{partyTwo}} (the Distributor)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Appointment & Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Supplier appoints the Distributor to market and sell {{productLine}} within {{distributionTerritory}}. {{exclusivityTerms}}" }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement remains in force for {{agreementTerm}} from the effective date and renews only by written agreement of both parties." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Pricing & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "Products are supplied to the Distributor under the following pricing terms: {{pricingTerms}}. The Distributor agrees to purchase a minimum of {{minimumOrder}} during each order period." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Confidentiality & Brand Protection" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Distributor will keep pricing, customer data, and trade secrets confidential and will represent the Supplier's brand accurately in all marketing." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Upon termination, the Distributor will cease using the Supplier's marks and return unsold inventory as agreed." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Supplier: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Distributor: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Enforceability varies by jurisdiction — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "franchise-agreement",
    slug: "franchise-agreement",
    title: "Franchise Agreement Template",
    description: "Free franchise agreement template covering franchise rights, territory, franchise fees, royalties, brand standards, and termination for franchisors and franchisees.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Franchise Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "franchiseBrand", "franchiseTerritory", "franchiseTerm", "franchiseFee", "royaltyRate", "brandStandards", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "FRANCHISE AGREEMENT",
        footer: "Grant of franchise rights from the Franchisor to the Franchisee."
      },
      styles: {
        primaryColor: "#dc2626",
        secondaryColor: "#991b1b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "FRANCHISE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Franchisor) and {{partyTwo}} (the Franchisee)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Grant of Franchise" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Franchisor grants the Franchisee the right to operate a {{franchiseBrand}} business within {{franchiseTerritory}}, using the Franchisor's brand, systems, and operating methods." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This franchise is granted for a term of {{franchiseTerm}} from the effective date and may be renewed subject to the Franchisor's then-current terms." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Fees & Royalties" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Franchisee agrees to pay an initial franchise fee of {{franchiseFee}} and an ongoing royalty of {{royaltyRate}} on gross revenue, payable on the schedule set by the Franchisor." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Brand Standards & Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{brandStandards}} The Franchisee will keep the Franchisor's operating manual and trade secrets strictly confidential." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Upon termination, the Franchisee will immediately stop using the Franchisor's brand, signage, and proprietary systems." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Franchisor: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Franchisee: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Franchise law is highly regulated and disclosure documents are often required — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "sponsorship-agreement",
    slug: "sponsorship-agreement",
    title: "Sponsorship Agreement Template",
    description: "Free sponsorship agreement template detailing sponsorship benefits, brand visibility, sponsorship fees, exclusivity, and termination between a sponsor and organizer.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Sponsorship Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "eventOrProperty", "sponsorshipBenefits", "sponsorshipTerm", "sponsorshipFee", "exclusivityTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "SPONSORSHIP AGREEMENT",
        footer: "Agreement between the Sponsor and the Organizer for defined benefits."
      },
      styles: {
        primaryColor: "#f59e0b",
        secondaryColor: "#b45309"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "SPONSORSHIP AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Sponsor) and {{partyTwo}} (the Organizer)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Sponsorship Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Sponsor agrees to sponsor {{eventOrProperty}}. In return, the Organizer will deliver the following benefits: {{sponsorshipBenefits}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This sponsorship applies for {{sponsorshipTerm}} and covers the activation period agreed by both parties." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Sponsorship Fee & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Sponsor agrees to pay {{sponsorshipFee}} in consideration for the benefits described. Payment terms are as agreed in writing by both parties." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Exclusivity & Brand Use" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{exclusivityTerms}} Each party will use the other's name and logo only as approved in writing and consistent with brand guidelines." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} If the sponsored event is cancelled, the parties will negotiate a fair refund or make-good in good faith." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Sponsor: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Organizer: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Enforceability varies by jurisdiction — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "referral-agreement",
    slug: "referral-agreement",
    title: "Referral Agreement Template",
    description: "Free referral agreement template covering qualified referrals, commission rates, payment terms, confidentiality, and termination between a referrer and business.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Referral Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "referralScope", "qualifiedReferral", "commissionRate", "paymentTerms", "confidentialityTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "REFERRAL AGREEMENT",
        footer: "Agreement between the Referrer and the Business for referral commissions."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#0f766e"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "REFERRAL AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Referrer) and {{partyTwo}} (the Business)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Referral Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Referrer agrees to introduce prospective customers to the Business for the following services: {{referralScope}}. A referral qualifies for commission when: {{qualifiedReferral}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement begins on the effective date and continues until terminated by either party in accordance with these terms." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Commission & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Business will pay the Referrer a commission of {{commissionRate}} on qualifying revenue. Payment terms are as follows: {{paymentTerms}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Confidentiality & Independence" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{confidentialityTerms}} The Referrer is an independent party and has no authority to bind the Business or make representations on its behalf." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Commissions earned on referrals introduced before termination remain payable." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Referrer: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Business: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Enforceability varies by jurisdiction — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "affiliate-agreement",
    slug: "affiliate-agreement",
    title: "Affiliate Agreement Template",
    description: "Free affiliate agreement template outlining promotion terms, commission structure, tracking, payout schedule, and termination between a merchant and affiliate.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Affiliate Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "promotionTerms", "commissionStructure", "trackingMethod", "payoutSchedule", "complianceTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "AFFILIATE AGREEMENT",
        footer: "Agreement between the Merchant and the Affiliate for performance-based marketing."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#6d28d9"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "AFFILIATE AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Merchant) and {{partyTwo}} (the Affiliate)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Promotion Scope" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Affiliate agrees to promote the Merchant's products under the following terms: {{promotionTerms}}. Referred sales will be measured using {{trackingMethod}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement begins on the effective date and continues on a rolling basis until terminated by either party." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Commission & Payout" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Merchant will pay the Affiliate according to the following commission structure: {{commissionStructure}}. Payouts are made on this schedule: {{payoutSchedule}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Compliance & Conduct" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{complianceTerms}} The Affiliate will disclose the affiliate relationship as required by applicable advertising law and will not use spam or misleading claims." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Commissions validly earned before termination remain payable, subject to any refund or chargeback adjustments." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Merchant: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Affiliate: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Enforceability varies by jurisdiction — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "retainer-agreement",
    slug: "retainer-agreement",
    title: "Retainer Agreement Template",
    description: "Free retainer agreement template covering ongoing services, monthly retainer fee, scope of work, confidentiality, and termination between a provider and client.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Retainer Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "retainerServices", "monthlyHours", "retainerFee", "billingTerms", "confidentialityTerms", "terminationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "RETAINER AGREEMENT",
        footer: "Ongoing retainer engagement between the Provider and the Client."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1d4ed8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "RETAINER AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Provider) and {{partyTwo}} (the Client)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Retained Services" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Provider will make its services available to the Client on a retained basis for the following work: {{retainerServices}}, up to {{monthlyHours}} each month. Work beyond the retainer will be quoted separately." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term" }] },
          { type: "paragraph", content: [{ type: "text", text: "The retainer begins on the effective date and continues on a month-to-month basis until terminated in accordance with this Agreement." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Retainer Fee & Billing" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Client agrees to pay a retainer fee of {{retainerFee}} per month. Billing terms are as follows: {{billingTerms}}. Unused hours do not roll over unless expressly agreed." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Confidentiality" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{confidentialityTerms}} Each party will protect the other's confidential information for the duration of the engagement and thereafter." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{terminationTerms}} Retainer fees for the current billing period are non-refundable once the period has begun." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Provider: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Client: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Enforceability varies by jurisdiction — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "cofounder-agreement",
    slug: "cofounder-agreement",
    title: "Co-Founder Agreement Template",
    description: "Free co-founder agreement template covering equity split, roles, vesting, decision-making, confidentiality, and departure terms between startup co-founders.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Co-Founder Agreement Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "companyName", "equitySplit", "rolesResponsibilities", "vestingSchedule", "ipAssignment", "departureTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "CO-FOUNDER AGREEMENT",
        footer: "Founding terms agreed between the co-founders of the company."
      },
      styles: {
        primaryColor: "#9333ea",
        secondaryColor: "#7e22ce"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "CO-FOUNDER AGREEMENT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (Co-Founder One) and {{partyTwo}} (Co-Founder Two) in connection with {{companyName}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Roles & Equity" }] },
          { type: "paragraph", content: [{ type: "text", text: "The co-founders will hold equity as follows: {{equitySplit}}. Roles and responsibilities are allocated as follows: {{rolesResponsibilities}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Vesting" }] },
          { type: "paragraph", content: [{ type: "text", text: "Each co-founder's equity vests according to the following schedule: {{vestingSchedule}}. Unvested equity may be repurchased by the company if a founder departs." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Contributions & IP Assignment" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{ipAssignment}} Each co-founder assigns to the company all intellectual property created in connection with the business." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Confidentiality & Decision-Making" }] },
          { type: "paragraph", content: [{ type: "text", text: "Each co-founder will keep company information confidential and will act in good faith. Major decisions require the agreement of both co-founders unless the company's governing documents provide otherwise." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Departure & Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{departureTerms}} A departing co-founder retains only vested equity, subject to the company's buyback rights." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Co-Founder One: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Co-Founder Two: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Equity and vesting arrangements have tax and corporate-law consequences — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  },
  {
    id: "wedding-photography-contract",
    slug: "wedding-photography-contract",
    title: "Wedding Photography Contract Template",
    description: "Free wedding photography contract template covering coverage hours, deliverables, package fee, deposit, image rights, and cancellation between photographer and couple.",
    isPremium: false,
    categorySlug: "contracts",
    categoryName: "Contracts",
    content: {
      title: "Wedding Photography Contract Template",
      fields: ["partyOne", "partyTwo", "effectiveDate", "weddingDate", "coverageHours", "deliverables", "packageFee", "depositAmount", "imageRights", "cancellationTerms", "governingLaw", "partyOneSignature", "partyTwoSignature", "signatureDate"],
      layout: {
        header: "WEDDING PHOTOGRAPHY CONTRACT",
        footer: "Agreement between the Photographer and the Couple for wedding coverage."
      },
      styles: {
        primaryColor: "#db2777",
        secondaryColor: "#be185d"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "WEDDING PHOTOGRAPHY CONTRACT" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is entered into on {{effectiveDate}} between {{partyOne}} (the Photographer) and {{partyTwo}} (the Couple)." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "1. Scope of Coverage" }] },
          { type: "paragraph", content: [{ type: "text", text: "The Photographer will photograph the Couple's wedding on {{weddingDate}}, providing {{coverageHours}} of coverage. Deliverables include {{deliverables}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "2. Term & Delivery" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement remains in effect through the wedding date and until the final edited images have been delivered within the agreed turnaround time." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "3. Package Fee & Payment" }] },
          { type: "paragraph", content: [{ type: "text", text: "The total package fee is {{packageFee}}. A non-refundable deposit of {{depositAmount}} is due to reserve the date, with the balance payable before the wedding." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "4. Image Rights & Privacy" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{imageRights}} The Photographer retains copyright and may display selected images in a portfolio unless the Couple requests otherwise in writing." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "5. Cancellation & Termination" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{cancellationTerms}} If the Photographer cannot attend due to emergency, they will use reasonable efforts to arrange a qualified replacement or refund fees for undelivered coverage." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "6. Governing Law" }] },
          { type: "paragraph", content: [{ type: "text", text: "This Agreement is governed by the laws of {{governingLaw}}." }] },
          { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Signatures" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Photographer: " }, { type: "text", text: "{{partyOneSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Couple: " }, { type: "text", text: "{{partyTwoSignature}} — Date: {{signatureDate}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Note: " }, { type: "text", text: "This template is general information, not legal advice. Enforceability varies by jurisdiction — consult a qualified lawyer before relying on it." }] }
        ]
      }
    }
  }
];
