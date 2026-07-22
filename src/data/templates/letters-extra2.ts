// Auto-enriched "letters" category templates (extra set 2).
// Each template's document body is written to be genuinely specific to that
// letter's purpose so every template reads as its own distinct document.

export const lettersExtra2Templates: any[] = [
  {
    id: "rent-increase-letter",
    slug: "rent-increase-letter",
    title: "Rent Increase Letter Template",
    description: "Free rent increase letter template for landlords to formally notify tenants of a new monthly rent amount and effective date.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Rent Increase Letter Template",
      fields: ["senderName", "senderTitle", "date", "recipientName", "recipientTitle", "companyName", "propertyAddress", "currentRent", "newRent", "effectiveDate", "noticePeriod"],
      layout: {
        header: "RENT INCREASE NOTICE",
        footer: "Please retain this notice for your rental records."
      },
      styles: {
        primaryColor: "#0f766e",
        secondaryColor: "#14b8a6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally notify you of an upcoming adjustment to the monthly rent for the property located at {{propertyAddress}}. As a valued tenant, you have kept the home in excellent condition, and I want to give you ample written notice of this change well ahead of time." }] },
          { type: "paragraph", content: [{ type: "text", text: "Effective {{effectiveDate}}, the monthly rent will increase from {{currentRent}} to " }, { type: "text", marks: [{ type: "bold" }], text: "{{newRent}}" }, { type: "text", text: ". This adjustment reflects current market conditions and rising costs of property upkeep, and it remains in line with comparable rentals in the area." }] },
          { type: "paragraph", content: [{ type: "text", text: "This notice is provided {{noticePeriod}} in advance, in accordance with the terms of your lease and applicable local regulations. All other conditions of your tenancy will remain unchanged, and I sincerely hope you will choose to continue renting your home with us." }] },
          { type: "paragraph", content: [{ type: "text", text: "If you have any questions or would like to discuss the change, please do not hesitate to contact me. Thank you for your continued tenancy and cooperation." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "salary-certificate-letter",
    slug: "salary-certificate-letter",
    title: "Salary Certificate Letter Template",
    description: "Free salary certificate letter template for employers to officially confirm an employee's monthly salary, designation, and tenure.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Salary Certificate Letter Template",
      fields: ["senderName", "senderTitle", "date", "recipientName", "recipientTitle", "companyName", "employeeName", "employeeId", "designation", "joiningDate", "grossSalary", "purpose"],
      layout: {
        header: "SALARY CERTIFICATE",
        footer: "This certificate is issued upon request and reflects current records."
      },
      styles: {
        primaryColor: "#1e40af",
        secondaryColor: "#60a5fa"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "This is to certify that {{employeeName}}, holding employee identification number {{employeeId}}, is a permanent employee of our organization, currently serving in the position of {{designation}}. This letter has been issued at the employee's request for the purpose of {{purpose}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "{{employeeName}} has been in continuous employment with us since {{joiningDate}} and draws a gross monthly salary of " }, { type: "text", marks: [{ type: "bold" }], text: "{{grossSalary}}" }, { type: "text", text: ", inclusive of applicable allowances and before statutory deductions. The employee's conduct and performance throughout this tenure have been satisfactory." }] },
          { type: "paragraph", content: [{ type: "text", text: "This certificate is issued in good faith based on the records available with our human resources department as of the date above. Should you require any further verification, please feel free to contact the undersigned directly." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}, {{companyName}}" }] }
        ]
      }
    }
  },
  {
    id: "address-proof-letter",
    slug: "address-proof-letter",
    title: "Address Proof Letter Template",
    description: "Free address proof letter template to formally confirm a person's residential address for banks, offices, and verification.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Address Proof Letter Template",
      fields: ["senderName", "senderTitle", "date", "recipientName", "recipientTitle", "companyName", "residentName", "residentAddress", "residingSince", "relationship", "purpose"],
      layout: {
        header: "ADDRESS PROOF LETTER",
        footer: "Issued as a genuine confirmation of residence."
      },
      styles: {
        primaryColor: "#4338ca",
        secondaryColor: "#818cf8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally confirm the residential address of {{residentName}}, who is known to me in my capacity as {{relationship}}. This letter is being provided to support the requirement for {{purpose}} and to serve as a genuine proof of residence." }] },
          { type: "paragraph", content: [{ type: "text", text: "I hereby certify that {{residentName}} has been residing at " }, { type: "text", marks: [{ type: "bold" }], text: "{{residentAddress}}" }, { type: "text", text: " since {{residingSince}}. To the best of my knowledge, this address is accurate, current, and the individual's genuine place of residence." }] },
          { type: "paragraph", content: [{ type: "text", text: "This confirmation is made in good faith and may be relied upon for verification purposes. Should you require any additional information or supporting documentation, I will be pleased to assist you promptly." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "maternity-leave-letter",
    slug: "maternity-leave-letter",
    title: "Maternity Leave Letter Template",
    description: "Free maternity leave letter template for employees to formally request paid maternity leave with clear start and return dates.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Maternity Leave Letter Template",
      fields: ["senderName", "senderTitle", "date", "recipientName", "recipientTitle", "companyName", "leaveStartDate", "expectedReturnDate", "dueDate", "coveringColleague", "contactDuringLeave"],
      layout: {
        header: "MATERNITY LEAVE REQUEST",
        footer: "Submitted in accordance with company maternity leave policy."
      },
      styles: {
        primaryColor: "#be185d",
        secondaryColor: "#f472b6"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally request maternity leave, as I am expecting my baby around {{dueDate}}. In accordance with company policy, I would like to begin my leave on {{leaveStartDate}} and plan to return to work on " }, { type: "text", marks: [{ type: "bold" }], text: "{{expectedReturnDate}}" }, { type: "text", text: ", subject to any adjustments we may agree upon." }] },
          { type: "paragraph", content: [{ type: "text", text: "To ensure a smooth transition, I have prepared detailed handover notes and will work closely with {{coveringColleague}}, who has kindly agreed to cover my key responsibilities during my absence. I am committed to completing any outstanding priorities before my leave begins." }] },
          { type: "paragraph", content: [{ type: "text", text: "Should any urgent matter arise while I am away, I can be reached at {{contactDuringLeave}}, though I would appreciate the space to focus on my family during this time. I am grateful for the support of {{companyName}} and look forward to rejoining the team." }] },
          { type: "paragraph", content: [{ type: "text", text: "Please let me know if you require any further documentation to process this request. Thank you for your understanding and consideration." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "job-acceptance-letter",
    slug: "job-acceptance-letter",
    title: "Job Acceptance Letter Template",
    description: "Free job acceptance letter template to formally accept a job offer, confirm your start date, and thank the employer.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Job Acceptance Letter Template",
      fields: ["senderName", "senderTitle", "date", "recipientName", "recipientTitle", "companyName", "jobTitle", "startDate", "agreedSalary", "reportingManager"],
      layout: {
        header: "JOB ACCEPTANCE LETTER",
        footer: "I look forward to a rewarding association with your organization."
      },
      styles: {
        primaryColor: "#15803d",
        secondaryColor: "#4ade80"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am delighted to formally accept your offer for the position of " }, { type: "text", marks: [{ type: "bold" }], text: "{{jobTitle}}" }, { type: "text", text: " at {{companyName}}. Thank you for this wonderful opportunity and for the confidence you have placed in me throughout the selection process. I am genuinely excited to join the team." }] },
          { type: "paragraph", content: [{ type: "text", text: "As discussed, I confirm my agreed annual compensation of {{agreedSalary}} and my understanding that I will report to {{reportingManager}}. I am happy to accept the terms and conditions outlined in the offer, and I will return any signed paperwork promptly." }] },
          { type: "paragraph", content: [{ type: "text", text: "I am pleased to confirm that I will commence my duties on {{startDate}}. Please let me know if there is any onboarding documentation or pre-joining information you would like me to complete beforehand so that I can hit the ground running." }] },
          { type: "paragraph", content: [{ type: "text", text: "Once again, thank you for this opportunity. I look forward to contributing to the success of {{companyName}} and building a long and productive relationship." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  },
  {
    id: "visa-invitation-letter",
    slug: "visa-invitation-letter",
    title: "Visa Invitation Letter Template",
    description: "Free visa invitation letter template to formally sponsor and invite a guest, supporting their embassy visa application.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Visa Invitation Letter Template",
      fields: ["senderName", "senderTitle", "senderAddress", "date", "recipientName", "recipientTitle", "companyName", "guestName", "passportNumber", "visitPurpose", "arrivalDate", "departureDate", "accommodationDetails"],
      layout: {
        header: "VISA INVITATION LETTER",
        footer: "Submitted in support of the visa application named above."
      },
      styles: {
        primaryColor: "#7c2d12",
        secondaryColor: "#ea580c"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally invite {{guestName}}, holder of passport number {{passportNumber}}, to visit me for the purpose of {{visitPurpose}}. I respectfully request that the consular authorities grant the necessary entry visa to enable this visit to take place." }] },
          { type: "paragraph", content: [{ type: "text", text: "The intended visit will run from {{arrivalDate}} to " }, { type: "text", marks: [{ type: "bold" }], text: "{{departureDate}}" }, { type: "text", text: ". During this period, {{guestName}} will stay at {{accommodationDetails}}, and I take full responsibility for hosting arrangements throughout the duration of the trip." }] },
          { type: "paragraph", content: [{ type: "text", text: "I confirm that I will provide appropriate support during the visit and that my guest intends to return to their home country upon its conclusion. I can be reached at {{senderAddress}} should the embassy require any further verification or supporting documents." }] },
          { type: "paragraph", content: [{ type: "text", text: "Thank you for your kind consideration of this invitation and the accompanying visa application. I look forward to a favorable decision." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}} | {{senderAddress}}" }] }
        ]
      }
    }
  },
  {
    id: "media-pitch-letter",
    slug: "media-pitch-letter",
    title: "Media Pitch Letter Template",
    description: "Free media pitch letter template for PR teams to pitch journalists a newsworthy story angle and earn press coverage.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Media Pitch Letter Template",
      fields: ["senderName", "senderTitle", "organizationName", "date", "recipientName", "recipientTitle", "companyName", "storyAngle", "keyHook", "supportingData", "interviewOffer", "contactInfo"],
      layout: {
        header: "MEDIA PITCH LETTER",
        footer: "Full press kit and imagery available on request."
      },
      styles: {
        primaryColor: "#6d28d9",
        secondaryColor: "#a78bfa"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I have long admired your reporting for {{companyName}}, and I am reaching out with a story I believe will resonate strongly with your readers: {{storyAngle}}. Given the topics you cover so well, I thought of you first before pitching this more widely." }] },
          { type: "paragraph", content: [{ type: "text", text: "The compelling hook here is simple: " }, { type: "text", marks: [{ type: "bold" }], text: "{{keyHook}}" }, { type: "text", text: ". This is backed by fresh evidence, including {{supportingData}}, which gives the piece both timeliness and substance that a broad audience will find genuinely useful." }] },
          { type: "paragraph", content: [{ type: "text", text: "To make your job easier, I can offer {{interviewOffer}}, along with exclusive access to spokespeople, data, and high-resolution imagery on your timeline. I am confident this could develop into a standout feature." }] },
          { type: "paragraph", content: [{ type: "text", text: "Would you be open to a brief conversation this week? You can reach me directly at {{contactInfo}}. Thank you for considering the story, and I look forward to hearing from you." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}, {{organizationName}}" }] }
        ]
      }
    }
  },
  {
    id: "collaboration-request-letter",
    slug: "collaboration-request-letter",
    title: "Collaboration Request Letter Template",
    description: "Free collaboration request letter template to propose a mutually beneficial partnership between brands, creators, or teams.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Collaboration Request Letter Template",
      fields: ["senderName", "senderTitle", "organizationName", "date", "recipientName", "recipientTitle", "companyName", "collaborationIdea", "mutualBenefit", "proposedScope", "timeline", "contactInfo"],
      layout: {
        header: "COLLABORATION REQUEST",
        footer: "I welcome the chance to explore how we can grow together."
      },
      styles: {
        primaryColor: "#0369a1",
        secondaryColor: "#38bdf8"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "On behalf of {{organizationName}}, I am reaching out to propose a collaboration with {{companyName}} that I believe could be genuinely rewarding for both of our audiences. Having followed your work with great respect, I see a natural alignment between our values and goals." }] },
          { type: "paragraph", content: [{ type: "text", text: "The idea I have in mind is {{collaborationIdea}}. What makes this especially promising is the mutual benefit involved: " }, { type: "text", marks: [{ type: "bold" }], text: "{{mutualBenefit}}" }, { type: "text", text: ". I am confident that by combining our strengths, we can create something neither of us could achieve alone." }] },
          { type: "paragraph", content: [{ type: "text", text: "In terms of scope, I envision {{proposedScope}}, with a workable timeline of {{timeline}}. Of course, these are simply a starting point, and I would love to shape the details together so that the partnership works well for everyone." }] },
          { type: "paragraph", content: [{ type: "text", text: "If this sparks your interest, I would welcome a short call to explore the possibilities. Please feel free to reach me at {{contactInfo}}. Thank you for considering this proposal." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}, {{organizationName}}" }] }
        ]
      }
    }
  },
  {
    id: "bank-account-closure-letter",
    slug: "bank-account-closure-letter",
    title: "Bank Account Closure Letter Template",
    description: "Free bank account closure letter template to formally request your bank to close an account and transfer the remaining balance.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Bank Account Closure Letter Template",
      fields: ["senderName", "senderTitle", "senderAddress", "date", "recipientName", "recipientTitle", "companyName", "accountNumber", "accountType", "closureReason", "balanceTransferAccount"],
      layout: {
        header: "ACCOUNT CLOSURE REQUEST",
        footer: "Please confirm closure and final balance settlement in writing."
      },
      styles: {
        primaryColor: "#334155",
        secondaryColor: "#64748b"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally request the closure of my {{accountType}} account bearing account number " }, { type: "text", marks: [{ type: "bold" }], text: "{{accountNumber}}" }, { type: "text", text: ", held with {{companyName}}. After careful consideration, I have decided to close this account for the following reason: {{closureReason}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "Kindly transfer any remaining balance in the account to {{balanceTransferAccount}}, and deactivate all associated cards, standing instructions, and online banking access. I request that no further transactions be processed on this account from the date this request is actioned." }] },
          { type: "paragraph", content: [{ type: "text", text: "Please treat this as my authorized written instruction and confirm the successful closure along with a final statement in writing. Should you require any verification, I can be reached at {{senderAddress}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "Thank you for the services provided during the period my account was active. I appreciate your prompt attention to this request." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}} | {{senderAddress}}" }] }
        ]
      }
    }
  },
  {
    id: "work-from-home-request-letter",
    slug: "work-from-home-request-letter",
    title: "Work From Home Request Letter Template",
    description: "Free work from home request letter template for employees to formally ask their manager to approve a remote work arrangement.",
    isPremium: false,
    categorySlug: "letters",
    categoryName: "Letters",
    content: {
      title: "Work From Home Request Letter Template",
      fields: ["senderName", "senderTitle", "date", "recipientName", "recipientTitle", "companyName", "requestReason", "proposedSchedule", "startDate", "reviewPeriod", "availabilityHours"],
      layout: {
        header: "WORK FROM HOME REQUEST",
        footer: "Submitted for your review under the remote work policy."
      },
      styles: {
        primaryColor: "#0d9488",
        secondaryColor: "#2dd4bf"
      },
      editorState: {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "{{date}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{recipientName}}, {{recipientTitle}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{companyName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "Dear {{recipientName}}," }] },
          { type: "paragraph", content: [{ type: "text", text: "I am writing to formally request approval to work from home under the following arrangement. The primary reason for my request is {{requestReason}}, and I am confident that a remote setup will allow me to maintain, and even improve, my current level of productivity." }] },
          { type: "paragraph", content: [{ type: "text", text: "I propose the following schedule: " }, { type: "text", marks: [{ type: "bold" }], text: "{{proposedSchedule}}" }, { type: "text", text: ", beginning on {{startDate}}. I have a reliable home workspace and the necessary tools to remain fully connected, and I will be available during core hours of {{availabilityHours}} for calls, meetings, and collaboration." }] },
          { type: "paragraph", content: [{ type: "text", text: "To ensure this arrangement works well for the team, I am happy to treat it as a trial and to review its effectiveness after {{reviewPeriod}}. I will continue to meet all deadlines, attend required meetings, and keep communication channels fully open throughout." }] },
          { type: "paragraph", content: [{ type: "text", text: "Thank you for considering my request. I would be glad to discuss any details or adjustments that would make this arrangement suitable for both the team and {{companyName}}." }] },
          { type: "paragraph", content: [{ type: "text", text: "Sincerely," }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderName}}" }] },
          { type: "paragraph", content: [{ type: "text", text: "{{senderTitle}}" }] }
        ]
      }
    }
  }
];
