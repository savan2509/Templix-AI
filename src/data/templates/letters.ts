// Auto-enriched "letters" category templates.
// Each template's document body is written to be genuinely specific to that
// letter's purpose so every template reads as its own distinct document.

export const lettersTemplates = [
  {
    id: "cover-letter",
    slug: "cover-letter",
    title: "Cover Letter Template",
    description: "Standard job application cover letter detailing experience, motivation, achievements, and target role.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Cover Letter",
      fields: ["fullName", "jobTitle", "senderAddress", "senderCity", "senderState", "senderZip", "email", "phone", "linkedin", "portfolio", "letterDate", "recipientName", "companyName", "companyAddress", "jobPosition", "jobReferenceNumber", "signatureFullName"],
      layout: {
        header: "APPLICATION COVER LETTER",
        footer: "Enclosures: Resume & Professional Portfolio References."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#3b82f6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{fullName}}, {{jobTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderAddress}}, {{senderCity}}, {{senderState}} {{senderZip}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}} | LinkedIn: {{linkedin}} | Portfolio: {{portfolio}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, Hiring Manager" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: Application for {{jobPosition}} (Ref: {{jobReferenceNumber}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally apply for the {{jobPosition}} role at {{companyName}}, which I discovered through your careers portal. The moment I read the posting I recognised a rare match between what your team is building and the work I have spent the last several years perfecting, and I would welcome the opportunity to contribute from day one." }] },
          { type: "paragraph", content: [{ type: "text", text: "Across more than six years as a {{jobTitle}}, I have shipped scalable cloud architectures, led React front-end rebuilds, and tuned high-volume SQL workloads. In my current role I own features end to end, from technical design through production monitoring, and I mentor two junior engineers while doing so." }] },
          { type: "paragraph", content: [{ type: "text", text: "The achievement I am most proud of is a database sharding strategy that cut infrastructure spend by 30 percent while tripling query throughput. I care about outcomes like that because they compound: faster systems free the whole team to ship more, and disciplined engineering keeps that speed sustainable as the product grows." }] },
          { type: "paragraph", content: [{ type: "text", text: "What draws me specifically to {{companyName}} is your public commitment to open-source and developer enablement. I would bring the same blend of hands-on delivery and quiet technical leadership that has served my teams well, and I am confident it maps closely to what this role demands." }] },
          { type: "paragraph", content: [{ type: "text", text: "Thank you for considering my application. My resume and portfolio are enclosed, and I would be glad to walk you through any of it in an interview at your convenience." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "resignation-letter",
    slug: "resignation-letter",
    title: "Resignation Letter Template",
    description: "Formal letter template to notify employer of resignation and specify transition timelines.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Resignation Letter",
      fields: ["fullName", "employeeId", "jobTitle", "department", "companyName", "email", "phone", "letterDate", "managerName", "lastWorkingDay", "noticePeriod", "signatureFullName"],
      layout: {
        header: "FORMAL RESIGNATION LETTER",
        footer: "Copy filed with Human Resources Department."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{fullName}} (Employee ID: {{employeeId}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{jobTitle}}, {{department}} Department" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{managerName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: Notice of Resignation" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{managerName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Please accept this letter as formal notice of my resignation from the position of {{jobTitle}} at {{companyName}}. In line with my {{noticePeriod}} notice obligation, my final working day will be {{lastWorkingDay}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "This was not an easy decision. After careful reflection I have accepted an opportunity that moves me toward building developer tooling, a direction I have wanted to pursue for some time. The choice is entirely about that next chapter and not a reflection of my experience here, which has been overwhelmingly positive." }] },
          { type: "paragraph", content: [{ type: "text", text: "I am sincerely grateful for the mentorship, trust, and growth this team has given me. The projects I contributed to and the colleagues I worked alongside have shaped how I approach my craft, and I will carry those lessons forward." }] },
          { type: "paragraph", content: [{ type: "text", text: "To make the handover as smooth as possible, I will document my active work, prepare complete technical handovers, and help onboard my replacement before I depart. Please let me know how else I can support the transition over the coming weeks." }] },
          { type: "paragraph", content: [{ type: "text", text: "I wish you and the entire team continued success, and I hope our paths cross again." }] },
          { type: "paragraph", content: [{ type: "text", text: "Best regards," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "recommendation-letter",
    slug: "recommendation-letter",
    title: "Recommendation Letter Template",
    description: "Detailed professional reference letter for former employees or academic candidates.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Letter of Recommendation",
      fields: ["fullName", "jobTitle", "companyName", "email", "phone", "letterDate", "recipientName", "recipientOrganization", "recipientAddress", "candidateName", "relationship", "durationKnown", "signatureFullName", "recommenderContactInfo"],
      layout: {
        header: "RECOMMENDATION LETTER",
        footer: "Shared in confidence for candidate evaluation only."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{fullName}}, {{jobTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}} | {{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientOrganization}}, {{recipientAddress}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: Recommendation for {{candidateName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "It is a genuine pleasure to recommend {{candidateName}} to your program. I have worked closely with them as their {{relationship}} for {{durationKnown}}, which has given me a clear and firsthand view of both their professional capabilities and their character." }] },
          { type: "paragraph", content: [{ type: "text", text: "Technically, {{candidateName}} is exceptional. They handle advanced clinical diagnostic assessments, manage complex data with precision, and have co-authored four peer-reviewed studies. What sets them apart is not just the output but the rigour behind it; every deliverable I reviewed was thorough, well reasoned, and delivered ahead of schedule." }] },
          { type: "paragraph", content: [{ type: "text", text: "Beyond the technical, they bring a work ethic that lifts everyone around them. They consistently go beyond what is asked, volunteer for the hardest problems, and remain calm and ethical under pressure. Colleagues trust them, and that trust is well earned." }] },
          { type: "paragraph", content: [{ type: "text", text: "Without reservation, I recommend {{candidateName}} with the highest possible rating. They will be an outstanding addition to your organization, and I am confident they will exceed your expectations." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Contact: {{recommenderContactInfo}}" }] }
        ]
      }
    }
  },
  {
    id: "offer-letter",
    slug: "offer-letter",
    title: "Offer Letter Template",
    description: "Formal hiring offer letter template mapping compensation, reporting lines, benefit details, and deadlines.",
    isPremium: true,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Employment Offer Letter",
      fields: ["companyName", "companyAddress", "hrManagerName", "letterDate", "candidateFullName", "candidateAddress", "jobPosition", "department", "employmentType", "startDate", "salary", "reportingManager", "workingHours", "acceptanceDeadline", "hrSignature"],
      layout: {
        header: "OFFER OF EMPLOYMENT",
        footer: "Subject to background reference verifications. Acme is an equal opportunity employer."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1d4ed8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{candidateFullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{candidateAddress}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: Offer of Employment - {{jobPosition}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{candidateFullName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "On behalf of everyone at {{companyName}}, it is my delight to offer you the position of {{jobPosition}} within our {{department}} team. Your interviews left a strong impression, and we are confident you will thrive here." }] },
          { type: "paragraph", content: [{ type: "text", text: "This is a {{employmentType}} position beginning {{startDate}}. You will report directly to {{reportingManager}}, and your standard schedule will be {{workingHours}}. Your starting compensation is {{salary}}, reviewed annually in line with performance." }] },
          { type: "paragraph", content: [{ type: "text", text: "In addition to salary, you will be enrolled in our full benefits program, which includes:" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Comprehensive medical, dental, and vision coverage from day one" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "401(k) retirement plan with company matching" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "20 days of paid time off plus recognised public holidays" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "An annual learning and professional development stipend" }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "This offer is contingent on satisfactory reference and background checks and remains open until {{acceptanceDeadline}}. To accept, please sign and return a copy of this letter by that date. We are excited about the prospect of you joining us." }] },
          { type: "paragraph", content: [{ type: "text", text: "Warm regards," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrManagerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "business-letter",
    slug: "business-letter",
    title: "Business Letter Template",
    description: "Classic corporate formal letter structure for official communications, inquiries, and announcements.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Business Letter",
      fields: ["companyName", "contactPerson", "senderAddress", "email", "phone", "letterDate", "recipientName", "recipientCompany", "recipientAddress", "letterSubject", "referenceNumber", "signatureFullName", "designation"],
      layout: {
        header: "BUSINESS CORRESPONDENCE",
        footer: "Official document of the sender corporation."
      },
      styles: {
        primaryColor: "#0f172a",
        secondaryColor: "#475569"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderAddress}} | {{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientCompany}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subject: " }, { type: "text", text: "{{letterSubject}} (Ref: {{referenceNumber}})" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to you on behalf of {{companyName}} regarding our upcoming quarterly strategic alignment. As our two organizations continue to collaborate, we believe a clear, documented understanding of priorities for the next cycle will serve both parties well." }] },
          { type: "paragraph", content: [{ type: "text", text: "The purpose of this correspondence is threefold: to coordinate vendor delivery schedules, to review the deliverables completed to date, and to outline the parameters for the next phase of joint work. We consider each of these items material to keeping the partnership on track." }] },
          { type: "paragraph", content: [{ type: "text", text: "On the technical side, our roadmap for the period includes scaling backend capacity, introducing a caching layer to improve response times, and running structured user-acceptance testing on the new dashboards. We would value your team's input on sequencing these items so that neither side is blocked." }] },
          { type: "paragraph", content: [{ type: "text", text: "We look forward to your feedback on the adjustments described above and are happy to arrange a call at your earliest convenience to discuss any point in detail." }] },
          { type: "paragraph", content: [{ type: "text", text: "Yours faithfully," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{designation}}, {{contactPerson}}" }] }
        ]
      }
    }
  },
  {
    id: "complaint-letter",
    slug: "complaint-letter",
    title: "Complaint Letter Template",
    description: "Formal complaint layout documenting transactional order issues, damaged goods, or service disruptions.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Complaint Letter",
      fields: ["fullName", "senderAddress", "email", "phone", "letterDate", "companyName", "customerServiceDept", "recipientAddress", "orderNumber", "purchaseDate", "productServiceName", "signatureFullName"],
      layout: {
        header: "FORMAL COMPLAINT RECORD",
        footer: "Requires a formal response within 14 business days."
      },
      styles: {
        primaryColor: "#be123c",
        secondaryColor: "#881337"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderAddress}} | {{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{customerServiceDept}}, {{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subject: " }, { type: "text", text: "Formal complaint regarding Order #{{orderNumber}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear Customer Support Team," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally register my dissatisfaction with a recent purchase and to request prompt resolution. On {{purchaseDate}} I ordered {{productServiceName}} under Order #{{orderNumber}}, and unfortunately the experience has fallen well short of what was promised at checkout." }] },
          { type: "paragraph", content: [{ type: "text", text: "Specifically, the API access keys I paid for were never delivered after my purchase confirmation. Despite the order showing as complete and payment being taken in full, I have been unable to use the product I was charged for, and my two prior support enquiries have gone unanswered." }] },
          { type: "paragraph", content: [{ type: "text", text: "This has caused real disruption. I purchased the service to meet a project deadline, and the missing access has forced delays that reflect poorly on my own commitments. As a paying customer I expected the basic deliverable to arrive as advertised." }] },
          { type: "paragraph", content: [{ type: "text", text: "To resolve this matter, I am requesting one of the following:" }] },
          { type: "bulletList", content: [
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Immediate activation and delivery of the purchased API access keys" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Or a full refund of the annual fee paid" }] }] },
            { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Written confirmation of which resolution you will provide within 14 business days" }] }] }
          ] },
          { type: "paragraph", content: [{ type: "text", text: "I would prefer to resolve this directly and amicably. Please treat this as a formal complaint and respond in writing at the contact details above." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "thank-you-letter",
    slug: "thank-you-letter",
    title: "Thank You Letter Template",
    description: "Appreciation and gratitude letter structure for business partners, recruiters, or networking mentors.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Thank You Letter",
      fields: ["fullName", "senderAddress", "email", "letterDate", "recipientName", "recipientCompany", "recipientAddress", "letterSubject", "signatureFullName"],
      layout: {
        header: "LETTER OF APPRECIATION",
        footer: "With sincere thanks and professional regards."
      },
      styles: {
        primaryColor: "#059669",
        secondaryColor: "#047857"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderAddress}} | {{email}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientCompany}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientAddress}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: {{letterSubject}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I wanted to take a moment to express my heartfelt thanks. Your support over the past months has meant a great deal to me, and I did not want the milestone to pass without telling you so directly." }] },
          { type: "paragraph", content: [{ type: "text", text: "In particular, I am grateful for the mentorship and thoughtful design reviews you offered throughout my project. Your feedback consistently pushed my work to a higher standard, and the time you invested in explaining the why behind each suggestion is something I genuinely valued." }] },
          { type: "paragraph", content: [{ type: "text", text: "Thanks to your guidance I not only delivered a stronger result but also grew as a professional in ways that will stay with me. Generosity like yours, given freely and without expectation, is rare and never forgotten." }] },
          { type: "paragraph", content: [{ type: "text", text: "I sincerely hope we can stay in touch, and I would love the chance to collaborate again on future open-source work whenever the timing is right. Please do not hesitate to reach out if there is ever anything I can do in return." }] },
          { type: "paragraph", content: [{ type: "text", text: "With sincere appreciation," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "request-letter",
    slug: "request-letter",
    title: "Request Letter Template",
    description: "Formal letter layout requesting records, permissions, budget reviews, or project sponsorships.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Formal Request Letter",
      fields: ["fullName", "senderAddress", "contactDetails", "letterDate", "recipientName", "recipientOrganization", "recipientAddress", "requestType", "signatureFullName"],
      layout: {
        header: "FORMAL REQUEST FOR ACTION",
        footer: "Supporting documentation attached where applicable."
      },
      styles: {
        primaryColor: "#4f46e5",
        secondaryColor: "#3730a3"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderAddress}} | {{contactDetails}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientOrganization}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subject: " }, { type: "text", text: "Request for {{requestType}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally request the release of my {{requestType}} from your office. I would be grateful if this request could be processed and the documents issued at your earliest convenience." }] },
          { type: "paragraph", content: [{ type: "text", text: "The purpose of this request is to complete a visa application for an international transfer. Immigration services require certified proof of my academic completion as part of the mandatory documentation, and your records are the authoritative source for this evidence." }] },
          { type: "paragraph", content: [{ type: "text", text: "To help you locate my file quickly, my student identifier is ST-9988 and my graduation year is 2024. I am happy to complete any request form, pay any applicable processing fee, or provide proof of identity that your procedures require." }] },
          { type: "paragraph", content: [{ type: "text", text: "Given that my application is subject to a filing deadline, I would sincerely appreciate a prompt response. Please let me know if any further information is needed to release the documents, and how you would prefer them to be delivered." }] },
          { type: "paragraph", content: [{ type: "text", text: "Thank you for your time and assistance with this matter." }] },
          { type: "paragraph", content: [{ type: "text", text: "Respectfully," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "appointment-letter",
    slug: "appointment-letter",
    title: "Appointment Letter Template",
    description: "Official job appointment letter outlining onboarding instructions, reporting dates, and compensation details.",
    isPremium: true,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Onboarding Appointment Letter",
      fields: ["companyName", "hrManagerName", "letterDate", "employeeName", "employeeAddress", "jobPosition", "department", "startDate", "salary", "workLocation", "workingHours", "reportingManager", "probationPeriod", "leavePolicy", "hrSignature", "employeeSignature"],
      layout: {
        header: "APPOINTMENT CONFIRMATION",
        footer: "Please return signed duplicate copy to HR department upon onboarding."
      },
      styles: {
        primaryColor: "#0284c7",
        secondaryColor: "#0369a1"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{employeeName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{employeeAddress}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: Letter of Appointment - {{jobPosition}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{employeeName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "Further to your recent acceptance, we are pleased to confirm your appointment to the position of {{jobPosition}} in the {{department}} department at {{companyName}}. This letter sets out the principal terms of your engagement." }] },
          { type: "paragraph", content: [{ type: "text", text: "Your employment will commence on {{startDate}}. You will be based at {{workLocation}} and will report to {{reportingManager}}. Your normal working schedule will be {{workingHours}}, and your annual compensation is set at {{salary}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "Your appointment is subject to a probationary period of {{probationPeriod}}, during which your performance will be reviewed. Leave entitlements will follow company policy: {{leavePolicy}}. On your first day, please report to reception to complete onboarding formalities." }] },
          { type: "paragraph", content: [{ type: "text", text: "We are confident you will make a valuable contribution to the team and look forward to welcoming you. To accept this appointment, kindly sign the duplicate copy of this letter and return it to the HR department." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrManagerName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "HR Signature: {{hrSignature}} | Accepted by: {{employeeSignature}}" }] }
        ]
      }
    }
  },
  {
    id: "experience-letter",
    slug: "experience-letter",
    title: "Experience Letter Template",
    description: "Official work experience certification template confirming tenure, titles, and performance quality.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Work Experience Certificate",
      fields: ["companyName", "companyAddress", "letterDate", "employeeName", "employeeId", "jobTitle", "department", "joiningDate", "lastWorkingDate", "totalExperience", "responsibilities", "hrName", "designation", "companySeal", "hrSignature"],
      layout: {
        header: "TO WHOM IT MAY CONCERN",
        footer: "We wish them all the best in future endeavors."
      },
      styles: {
        primaryColor: "#475569",
        secondaryColor: "#334155"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyAddress}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: Experience Certificate - {{employeeName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "To Whom It May Concern," }] },
          { type: "paragraph", content: [{ type: "text", text: "This is to certify that {{employeeName}} (Employee ID: {{employeeId}}) was employed with {{companyName}} as {{jobTitle}} in the {{department}} department. This certificate is issued at the employee's request as a record of their tenure and service." }] },
          { type: "paragraph", content: [{ type: "text", text: "Their period of employment ran from {{joiningDate}} to {{lastWorkingDate}}, a total tenure of {{totalExperience}}. Throughout this time they remained in good standing and fulfilled the duties of the role in full." }] },
          { type: "paragraph", content: [{ type: "text", text: "In the course of their employment, {{employeeName}} was responsible for {{responsibilities}}. They consistently exceeded their performance targets and demonstrated clear technical leadership, earning the respect of peers and management alike." }] },
          { type: "paragraph", content: [{ type: "text", text: "We found them to be diligent, dependable, and professional in conduct. Their departure was on amicable terms, and we release this certificate without reservation as an accurate account of their contribution." }] },
          { type: "paragraph", content: [{ type: "text", text: "We wish {{employeeName}} continued success in all future endeavours." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrName}}, {{designation}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{hrSignature}} | {{companySeal}}" }] }
        ]
      }
    }
  },
  {
    id: "internship-cover-letter",
    slug: "internship-cover-letter",
    title: "Internship Cover Letter Template",
    description: "Cover letter template for students applying to internships, highlighting coursework, motivation, and transferable skills for entry roles.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters & Emails",
    content: {
      title: "Internship Cover Letter Template",
      fields: ["fullName", "email", "phone", "letterDate", "companyName", "roleName", "signatureFullName"],
      layout: {
        header: "INTERNSHIP APPLICATION",
        footer: "Thank you for considering my application."
      },
      styles: {
        primaryColor: "#2563eb",
        secondaryColor: "#1e40af"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{fullName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Hiring Team, {{companyName}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: Application for the {{roleName}} Internship" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear Hiring Team at {{companyName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am a motivated student writing to apply for the {{roleName}} internship. While I am early in my career, I am eager to trade the classroom for real problems, and I believe your team is exactly the environment where I would learn the most and contribute the fastest." }] },
          { type: "paragraph", content: [{ type: "text", text: "My coursework has given me a solid foundation in the fundamentals, and I have reinforced it through personal projects where I built and shipped small applications end to end. These projects taught me how to debug patiently, read documentation carefully, and ask for help at the right moment, habits I know matter as much as raw knowledge." }] },
          { type: "paragraph", content: [{ type: "text", text: "Beyond technical skills I bring transferable strengths from group assignments and part-time work: I communicate clearly, meet deadlines, and stay coachable when receiving feedback. I understand an intern's job is to absorb quickly and add value wherever possible, and I am ready to do exactly that." }] },
          { type: "paragraph", content: [{ type: "text", text: "I would be thrilled to bring my curiosity and work ethic to {{companyName}} and would welcome the chance to discuss how I can support your team this term." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "character-reference-letter",
    slug: "character-reference-letter",
    title: "Character Reference Letter Template",
    description: "Personal character reference letter template for jobs, tenancy, or court, vouching for a person's integrity, reliability, and conduct.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters & Emails",
    content: {
      title: "Character Reference Letter Template",
      fields: ["refereeName", "email", "phone", "letterDate", "candidateName", "relationship", "durationKnown", "signatureFullName"],
      layout: {
        header: "CHARACTER REFERENCE",
        footer: "I am happy to provide further information if required."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#115e59"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{refereeName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "heading", attrs: { level: 3 }, content: [{ type: "text", text: "RE: Character Reference for {{candidateName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "To Whom It May Concern," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to provide a personal character reference for {{candidateName}}. I have known them as their {{relationship}} for {{durationKnown}}, and in that time I have come to regard them as a person of genuine integrity and reliability." }] },
          { type: "paragraph", content: [{ type: "text", text: "Throughout the years I have known {{candidateName}}, they have shown themselves to be honest, considerate, and consistently true to their word. When they commit to something, they follow through, and I have never once had cause to doubt their sincerity or their judgement." }] },
          { type: "paragraph", content: [{ type: "text", text: "They are also notably dependable in practical matters. Whether helping a neighbour, honouring an obligation, or handling responsibility, they act with maturity and care for others. Those who know them trust them, and that trust has always been well placed." }] },
          { type: "paragraph", content: [{ type: "text", text: "It is my firm belief that {{candidateName}} would be an asset in any capacity that requires good character and sound conduct. I offer this reference with complete confidence and without reservation." }] },
          { type: "paragraph", content: [{ type: "text", text: "Please do not hesitate to contact me should you require any further information." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] }
        ]
      }
    }
  },
  {
    id: "promotion-request-letter",
    slug: "promotion-request-letter",
    title: "Promotion Request Letter Template",
    description: "Professional letter template to formally request a promotion, presenting achievements, added value, and readiness for the next role.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters & Emails",
    content: {
      title: "Promotion Request Letter Template",
      fields: ["employeeName", "email", "phone", "letterDate", "managerName", "currentRole", "targetRole", "signatureFullName"],
      layout: {
        header: "PROMOTION REQUEST",
        footer: "Thank you for considering my request. I welcome the chance to discuss it."
      },
      styles: {
        primaryColor: "#7c3aed",
        secondaryColor: "#5b21b6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{employeeName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{email}} | {{phone}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{letterDate}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{managerName}}" }] },
          { type: "paragraph", content: [{ type: "text", marks: [{ type: "bold" }], text: "Subject: " }, { type: "text", text: "Request for promotion to {{targetRole}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{managerName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally express my interest in being considered for the {{targetRole}} position, a step up from my current role as {{currentRole}}. I have thought carefully about this request, and I believe both my results and my readiness support it." }] },
          { type: "paragraph", content: [{ type: "text", text: "Over the past cycles I have consistently delivered beyond the expectations of my current role. I delivered a $2M digital transformation project three weeks ahead of schedule, and I have taken on cross-functional coordination and stakeholder management that already reach into the responsibilities of the more senior position." }] },
          { type: "paragraph", content: [{ type: "text", text: "Just as important as the results is the scope I have grown into. I have been mentoring newer team members, owning decisions end to end, and representing the team in conversations that require judgement and accountability. In practice I have been operating at the next level for some time." }] },
          { type: "paragraph", content: [{ type: "text", text: "I am confident that a formal promotion to {{targetRole}} would let me contribute even more effectively while continuing to raise the bar for the team. I am fully committed to this organization and to earning the added responsibility." }] },
          { type: "paragraph", content: [{ type: "text", text: "Thank you for considering my request. I would welcome the opportunity to discuss it with you at a time that suits you." }] },
          { type: "paragraph", content: [{ type: "text", text: "Respectfully," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{signatureFullName}}" }] }
        ]
      }
    }
  }
];
