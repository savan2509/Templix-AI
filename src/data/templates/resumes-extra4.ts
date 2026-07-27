// resumes-extra4.ts — 20 SEO-targeted role-specific resume templates (Fifth wave)
// Each template has maximally distinct, role-specialized fields and rich editorState.

export const resumesExtra4Templates: any[] = [
  {
    "id": "resume-ats-optimized",
    "slug": "resume-ats-optimized",
    "title": "ATS Resume Template",
    "description": "ATS-optimized single-column resume template. Passes Applicant Tracking System screeners with clean formatting, standard headings, and keyword density.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-ats-optimized.jpg",
    "content": {
      "title": "ATS Resume Template",
      "fields": [
        "fullName",
        "targetJobTitle",
        "email",
        "phone",
        "city",
        "state",
        "zipCode",
        "linkedin",
        "atsKeyword1",
        "atsKeyword2",
        "atsKeyword3",
        "professionalSummary",
        "jobTitle1",
        "employer1",
        "startDate1",
        "endDate1",
        "achievement1a",
        "achievement1b",
        "achievement1c",
        "jobTitle2",
        "employer2",
        "startDate2",
        "endDate2",
        "achievement2a",
        "achievement2b",
        "degree",
        "major",
        "university",
        "graduationYear",
        "gpa",
        "technicalSkills",
        "softSkills",
        "certificationName",
        "certifyingBody",
        "certYear",
        "volunteerRole",
        "volunteerOrg"
      ],
      "layout": {
        "header": "PROFESSIONAL RESUME",
        "footer": "ATS-formatted resume. References available upon request."
      },
      "styles": {
        "primaryColor": "#1e293b",
        "secondaryColor": "#0f172a"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{targetJobTitle}}  |  {{email}}  |  {{phone}}  |  {{city}}, {{state}} {{zipCode}}  |  LinkedIn: {{linkedin}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{professionalSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Core Competencies"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{atsKeyword1}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{atsKeyword2}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{atsKeyword3}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Work Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{jobTitle1}} "
              },
              {
                "type": "text",
                "text": "| {{employer1}} | {{startDate1}} – {{endDate1}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement1a}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement1b}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement1c}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{jobTitle2}} "
              },
              {
                "type": "text",
                "text": "| {{employer2}} | {{startDate2}} – {{endDate2}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement2a}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement2b}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} in {{major}} "
              },
              {
                "type": "text",
                "text": "| {{university}} | {{graduationYear}} | GPA: {{gpa}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Technical Skills"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{technicalSkills}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Soft Skills"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{softSkills}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{certificationName}} "
              },
              {
                "type": "text",
                "text": "| {{certifyingBody}} | {{certYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Volunteer Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{volunteerRole}} "
              },
              {
                "type": "text",
                "text": "| {{volunteerOrg}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-software-engineer-v2",
    "slug": "resume-software-engineer-v2",
    "title": "Software Engineer Resume",
    "description": "Senior software engineer resume with tech stack, GitHub projects, system design experience, open-source contributions, and leetcode ranking.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-software-engineer-v2.jpg",
    "content": {
      "title": "Software Engineer Resume",
      "fields": [
        "fullName",
        "email",
        "phone",
        "location",
        "githubProfile",
        "leetcodeProfile",
        "portfolioUrl",
        "linkedinUrl",
        "yearsOfExperience",
        "programmingLanguages",
        "frontendFrameworks",
        "backendFrameworks",
        "databases",
        "cloudPlatforms",
        "devOpsAndCI",
        "containerization",
        "testingFrameworks",
        "apiDesign",
        "securityPractices",
        "currentCompany",
        "currentJobTitle",
        "currentStartDate",
        "impact1",
        "impact2",
        "impact3",
        "previousCompany",
        "previousJobTitle",
        "previousDates",
        "systemDesignProject",
        "projectName1",
        "projectTechStack1",
        "projectDescription1",
        "projectGitHubLink1",
        "openSourceContribution",
        "bachelorDegree",
        "university",
        "graduationYear",
        "mastersDegree",
        "mastersUniversity",
        "awsOrGCPCertification",
        "leetcodeStats",
        "codeReviewPhilosophy"
      ],
      "layout": {
        "header": "SOFTWARE ENGINEER",
        "footer": "GitHub: {{githubProfile}} · LeetCode: {{leetcodeProfile}} · References on request."
      },
      "styles": {
        "primaryColor": "#0ea5e9",
        "secondaryColor": "#0c4a6e"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{currentJobTitle}} · {{yearsOfExperience}} YOE · {{email}} · {{phone}} · {{location}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "GitHub: {{githubProfile}} · LeetCode: {{leetcodeProfile}} · Portfolio: {{portfolioUrl}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Technical Skills"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Technologies"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Languages"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{programmingLanguages}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Frontend"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{frontendFrameworks}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Backend"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{backendFrameworks}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Databases"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{databases}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Cloud"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cloudPlatforms}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "DevOps / CI"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{devOpsAndCI}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Containers"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{containerization}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Testing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{testingFrameworks}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "API Design"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{apiDesign}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Security"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{securityPractices}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentJobTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentCompany}} | {{currentStartDate}} – Present"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{impact1}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{impact2}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{impact3}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousJobTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousCompany}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "System Design: {{systemDesignProject}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Projects"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{projectName1}} "
              },
              {
                "type": "text",
                "text": "({{projectTechStack1}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{projectDescription1}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Repo: {{projectGitHubLink1}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Open Source"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{openSourceContribution}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{mastersDegree}} "
              },
              {
                "type": "text",
                "text": "| {{mastersUniversity}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{bachelorDegree}} "
              },
              {
                "type": "text",
                "text": "| {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications & Stats"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{awsOrGCPCertification}} · LeetCode: {{leetcodeStats}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Code Review Philosophy: {{codeReviewPhilosophy}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-graphic-designer-v2",
    "slug": "resume-graphic-designer-v2",
    "title": "Graphic Designer Resume",
    "description": "Visual and creative graphic designer resume showcasing portfolio, design tools, brand projects, and design philosophy.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-graphic-designer-v2.jpg",
    "content": {
      "title": "Graphic Designer Resume",
      "fields": [
        "fullName",
        "designerTitle",
        "email",
        "phone",
        "location",
        "portfolioWebsite",
        "behanceProfile",
        "dribbbleProfile",
        "designPhilosophy",
        "adobeCreativeSuite",
        "figmaSkillLevel",
        "sketchUsage",
        "motionDesignTools",
        "printVsDigital",
        "typographyStyle",
        "colorTheoryApproach",
        "brandIdentityProjects",
        "packagingDesignExp",
        "webDesignExp",
        "illustrationStyle",
        "currentEmployer",
        "currentRole",
        "currentDates",
        "brandProject1Name",
        "brandProject1Description",
        "brandProject2Name",
        "brandProject2Description",
        "previousEmployer",
        "previousRole",
        "previousDates",
        "clientsWorkedWith",
        "bachelorOfArts",
        "artSchool",
        "graduationYear",
        "designAwards",
        "designConferences",
        "freelanceRevenue"
      ],
      "layout": {
        "header": "GRAPHIC DESIGNER",
        "footer": "Portfolio: {{portfolioWebsite}} · Behance: {{behanceProfile}} · Dribbble: {{dribbbleProfile}}"
      },
      "styles": {
        "primaryColor": "#ec4899",
        "secondaryColor": "#831843"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{designerTitle}} · {{email}} · {{phone}} · {{location}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Portfolio: {{portfolioWebsite}} · Behance: {{behanceProfile}} · Dribbble: {{dribbbleProfile}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Design Philosophy"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{designPhilosophy}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Design Skills & Tools"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Skill Area"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Proficiency / Tools"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Adobe Creative Suite"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{adobeCreativeSuite}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Figma"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{figmaSkillLevel}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Sketch"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{sketchUsage}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Motion Design"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{motionDesignTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Print vs Digital"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{printVsDigital}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Typography"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{typographyStyle}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Color Theory"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{colorTheoryApproach}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Illustration"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{illustrationStyle}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentRole}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{brandProject1Name}}: {{brandProject1Description}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{brandProject2Name}}: {{brandProject2Description}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Clients: {{clientsWorkedWith}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousRole}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Brand Identity: {{brandIdentityProjects}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Packaging: {{packagingDesignExp}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Web Design: {{webDesignExp}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{bachelorOfArts}} "
              },
              {
                "type": "text",
                "text": "| {{artSchool}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Awards & Recognition"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{designAwards}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Conferences & Community"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{designConferences}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Freelance"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Revenue generated: {{freelanceRevenue}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-marketing-v2",
    "slug": "resume-marketing-v2",
    "title": "Marketing Resume Template",
    "description": "Digital marketing resume highlighting campaign ROI, SEO metrics, paid media expertise, and brand growth results.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-marketing-v2.jpg",
    "content": {
      "title": "Marketing Resume Template",
      "fields": [
        "fullName",
        "marketingTitle",
        "email",
        "phone",
        "location",
        "linkedinProfile",
        "marketingPortfolio",
        "careerSummary",
        "seoAndSEM",
        "paidAdsExpertise",
        "emailMarketingTools",
        "crmSystems",
        "contentManagementSystems",
        "analyticsTools",
        "socialMediaPlatforms",
        "videoAndDesignTools",
        "marketingAutomation",
        "conversionRateOptimization",
        "currentCompany",
        "currentTitle",
        "currentDates",
        "campaignROI1",
        "leadsGenerated1",
        "organicTrafficGrowth",
        "previousCompany",
        "previousTitle",
        "previousDates",
        "campaignDescription2",
        "emailOpenRateAchieved",
        "brandReachIncrease",
        "degree",
        "university",
        "graduationYear",
        "googleAdsOrHubSpotCert",
        "googleAnalyticsCert",
        "awardsOrRecognition",
        "speakingEngagements"
      ],
      "layout": {
        "header": "DIGITAL MARKETING PROFESSIONAL",
        "footer": "Marketing Portfolio: {{marketingPortfolio}}"
      },
      "styles": {
        "primaryColor": "#f59e0b",
        "secondaryColor": "#78350f"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{marketingTitle}} · {{email}} · {{phone}} · {{location}} · LinkedIn: {{linkedinProfile}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Portfolio: {{marketingPortfolio}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Career Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{careerSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Marketing Skills & Platforms"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Domain"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tools & Expertise"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "SEO & SEM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{seoAndSEM}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Paid Ads"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{paidAdsExpertise}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Email Marketing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{emailMarketingTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CRM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{crmSystems}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CMS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{contentManagementSystems}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Analytics"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{analyticsTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Social Media"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{socialMediaPlatforms}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Video & Design"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{videoAndDesignTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Marketing Automation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{marketingAutomation}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CRO"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{conversionRateOptimization}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentCompany}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Campaign ROI: {{campaignROI1}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Leads Generated: {{leadsGenerated1}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Organic Traffic Growth: {{organicTrafficGrowth}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousCompany}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Campaign: {{campaignDescription2}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Email Open Rate: {{emailOpenRateAchieved}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Brand Reach: {{brandReachIncrease}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} "
              },
              {
                "type": "text",
                "text": "| {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{googleAdsOrHubSpotCert}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{googleAnalyticsCert}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Awards & Speaking"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{awardsOrRecognition}} · {{speakingEngagements}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-sales-v2",
    "slug": "resume-sales-v2",
    "title": "Sales Resume Template",
    "description": "High-impact sales resume with quota achievement %, pipeline metrics, territory expansion, and revenue growth KPIs.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-sales-v2.jpg",
    "content": {
      "title": "Sales Resume Template",
      "fields": [
        "fullName",
        "salesTitle",
        "email",
        "phone",
        "city",
        "state",
        "linkedinUrl",
        "salesSummary",
        "salesTotalRevenue",
        "quotaAchievementPercent",
        "averageDealSize",
        "salesCycleLength",
        "pipelineValue",
        "crmTools",
        "prospectingMethods",
        "negotiationStyle",
        "industryVerticals",
        "productTypes",
        "currentEmployer",
        "currentSalesTitle",
        "currentDates",
        "newRevenueGenerated",
        "newAccountsWon",
        "clientRetentionRate",
        "previousEmployer",
        "previousSalesTitle",
        "previousDates",
        "territoryExpansion",
        "teamRankOrAward",
        "degree",
        "university",
        "graduationYear",
        "salesCertification",
        "methodologyTraining",
        "presidentClub",
        "linkedinSSI"
      ],
      "layout": {
        "header": "SALES PROFESSIONAL",
        "footer": "Quota Achievement Average: {{quotaAchievementPercent}}% | Total Revenue Generated: {{salesTotalRevenue}}"
      },
      "styles": {
        "primaryColor": "#16a34a",
        "secondaryColor": "#14532d"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{salesTitle}} · {{email}} · {{phone}} · {{city}}, {{state}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Sales Performance Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{salesSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Key Metrics"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Metric"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Value"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Total Revenue Generated"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{salesTotalRevenue}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Avg. Quota Achievement"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{quotaAchievementPercent}}%"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Average Deal Size"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{averageDealSize}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Sales Cycle Length"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{salesCycleLength}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Pipeline Value"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{pipelineValue}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "LinkedIn SSI Score"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{linkedinSSI}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Sales Skills & Tools"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Detail"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CRM Platforms"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{crmTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Prospecting"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{prospectingMethods}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Negotiation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{negotiationStyle}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Industries"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{industryVerticals}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Product Types"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{productTypes}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentSalesTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "New Revenue: {{newRevenueGenerated}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "New Accounts Won: {{newAccountsWon}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Client Retention: {{clientRetentionRate}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousSalesTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Territory Expansion: {{territoryExpansion}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Team Rank / Award: {{teamRankOrAward}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} "
              },
              {
                "type": "text",
                "text": "| {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications & Training"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{salesCertification}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{methodologyTraining}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Awards"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "President's Club: {{presidentClub}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-accountant-v2",
    "slug": "resume-accountant-v2",
    "title": "Accountant Resume",
    "description": "CPA and accounting professional resume with financial reporting, audit, tax compliance, ERP systems, and regulatory expertise.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-accountant-v2.jpg",
    "content": {
      "title": "Accountant Resume",
      "fields": [
        "fullName",
        "cpaLicenseNumber",
        "email",
        "phone",
        "location",
        "linkedinUrl",
        "accountingSummary",
        "accountingSpecialization",
        "erpSystems",
        "accountingSoftware",
        "financialReportingStandards",
        "auditExperience",
        "taxComplianceAreas",
        "budgetingAndForecasting",
        "internalControls",
        "regulatoryKnowledge",
        "currentEmployer",
        "currentTitle",
        "currentDates",
        "financialStatementsValue",
        "costReductionAchieved",
        "auditFindingsResolved",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "taxReturnsFiled",
        "complianceReports",
        "budgetManaged",
        "degree",
        "university",
        "graduationYear",
        "cpaExamPassed",
        "cmaOrCiaCredential",
        "erpCertification",
        "membershipBody",
        "industrySpecialization"
      ],
      "layout": {
        "header": "CERTIFIED PUBLIC ACCOUNTANT",
        "footer": "CPA License: {{cpaLicenseNumber}} | References available upon request."
      },
      "styles": {
        "primaryColor": "#0369a1",
        "secondaryColor": "#082f49"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}, CPA"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{email}} · {{phone}} · {{location}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "CPA License #{{cpaLicenseNumber}} · Specialization: {{accountingSpecialization}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{accountingSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Technical Expertise"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Area"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Details"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "ERP Systems"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{erpSystems}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Accounting Software"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{accountingSoftware}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Financial Reporting Standards"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{financialReportingStandards}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Audit Experience"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{auditExperience}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tax Compliance"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{taxComplianceAreas}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Budgeting & Forecasting"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{budgetingAndForecasting}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Internal Controls"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{internalControls}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Regulatory Knowledge"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{regulatoryKnowledge}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Financial Statements (Total Value): {{financialStatementsValue}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Cost Reduction Achieved: {{costReductionAchieved}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Audit Findings Resolved: {{auditFindingsResolved}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Tax Returns Filed: {{taxReturnsFiled}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Compliance Reports: {{complianceReports}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Budget Managed: {{budgetManaged}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} "
              },
              {
                "type": "text",
                "text": "| {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Credentials & Memberships"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "CPA Exam: {{cpaExamPassed}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{cmaOrCiaCredential}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{erpCertification}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Member: {{membershipBody}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Industry"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{industrySpecialization}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-teacher-v2",
    "slug": "resume-teacher-v2",
    "title": "Teacher Resume",
    "description": "K-12 and college educator resume with teaching philosophy, classroom management, curriculum development, and student achievement metrics.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-teacher-v2.jpg",
    "content": {
      "title": "Teacher Resume",
      "fields": [
        "fullName",
        "teachingLicenseNumber",
        "licenseState",
        "licenseExpiryDate",
        "email",
        "phone",
        "location",
        "teachingPhilosophy",
        "subjectsTaught",
        "gradeLevels",
        "curriculumFrameworks",
        "assessmentMethods",
        "differentiatedInstruction",
        "classroomManagementStyle",
        "edTechTools",
        "specialEducationExperience",
        "englishLearnerSupport",
        "currentSchool",
        "currentPosition",
        "currentDates",
        "studentAchievementGrowth",
        "iepExperience",
        "parentEngagementInitiatives",
        "previousSchool",
        "previousPosition",
        "previousDates",
        "extracurricularActivities",
        "clubOrCoachingRole",
        "bachelorOfEducation",
        "teachingMajor",
        "university",
        "graduationYear",
        "mastersOfEducation",
        "mastersSpecialty",
        "mastersUniversity",
        "stateLicenseType",
        "nbcptCertification",
        "additionalEndorsements",
        "professionalDevelopment"
      ],
      "layout": {
        "header": "LICENSED EDUCATOR",
        "footer": "Teaching License #{{teachingLicenseNumber}} — State of {{licenseState}} — Expires {{licenseExpiryDate}}"
      },
      "styles": {
        "primaryColor": "#7c3aed",
        "secondaryColor": "#4c1d95"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{currentPosition}} · {{email}} · {{phone}} · {{location}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Teaching License #{{teachingLicenseNumber}} · State: {{licenseState}} · Expires: {{licenseExpiryDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Teaching Philosophy"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{teachingPhilosophy}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Teaching Expertise"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Area"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Details"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Subjects Taught"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{subjectsTaught}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Grade Levels"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{gradeLevels}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Curriculum Frameworks"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{curriculumFrameworks}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Assessment Methods"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{assessmentMethods}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Differentiated Instruction"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{differentiatedInstruction}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Classroom Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{classroomManagementStyle}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "EdTech Tools"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{edTechTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Special Education"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{specialEducationExperience}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "ELL Support"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{englishLearnerSupport}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentPosition}} "
              },
              {
                "type": "text",
                "text": "| {{currentSchool}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Student Achievement Growth: {{studentAchievementGrowth}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "IEP Experience: {{iepExperience}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Parent Engagement: {{parentEngagementInitiatives}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousPosition}} "
              },
              {
                "type": "text",
                "text": "| {{previousSchool}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Extracurriculars: {{extracurricularActivities}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Club / Coaching: {{clubOrCoachingRole}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{mastersOfEducation}} "
              },
              {
                "type": "text",
                "text": "({{mastersSpecialty}}) | {{mastersUniversity}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{bachelorOfEducation}} "
              },
              {
                "type": "text",
                "text": "({{teachingMajor}}) | {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Licenses & Certifications"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "State License: {{stateLicenseType}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "NBCPT: {{nbcptCertification}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Endorsements: {{additionalEndorsements}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Development"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{professionalDevelopment}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-nurse-v2",
    "slug": "resume-nurse-v2",
    "title": "Nurse Resume",
    "description": "Registered nurse and NP resume with nursing license, clinical specialties, patient-to-nurse ratios, EMR proficiency, and BLS/ACLS certifications.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-nurse-v2.jpg",
    "content": {
      "title": "Nurse Resume",
      "fields": [
        "fullName",
        "nursingLicenseNumber",
        "nursingLicenseState",
        "licenseExpiryDate",
        "nurseAnesthesiaOrNP",
        "email",
        "phone",
        "location",
        "nursingSpecialty",
        "clinicalSummary",
        "bedCount",
        "patientToNurseRatio",
        "emrSystems",
        "clinicalSpecialties",
        "procedureProficiency",
        "blsCertExpiry",
        "aclsCertExpiry",
        "palsOrNrpCert",
        "otherClinicalCerts",
        "currentHospital",
        "currentUnit",
        "currentShift",
        "currentDates",
        "patientSatisfactionScore",
        "qualityImprovementProject",
        "currentCensus",
        "previousHospital",
        "previousUnit",
        "previousDates",
        "criticalCareExperience",
        "chargeNurseExperience",
        "preceptorExperience",
        "bsnDegree",
        "bsnUniversity",
        "bsnGraduationYear",
        "msnOrDnp",
        "msnSpecialty",
        "msnUniversity",
        "cncOrCrncCertification",
        "magentHospitalExperience",
        "languagesSpoken"
      ],
      "layout": {
        "header": "REGISTERED NURSE",
        "footer": "RN License #{{nursingLicenseNumber}} — {{nursingLicenseState}} — Expires {{licenseExpiryDate}}"
      },
      "styles": {
        "primaryColor": "#0d9488",
        "secondaryColor": "#134e4a"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}, RN{{nurseAnesthesiaOrNP}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{email}} · {{phone}} · {{location}} · Specialty: {{nursingSpecialty}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "License #{{nursingLicenseNumber}} · State: {{nursingLicenseState}} · Expires: {{licenseExpiryDate}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Clinical Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{clinicalSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Clinical Skills & Systems"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Details"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "EMR Systems"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{emrSystems}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Clinical Specialties"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{clinicalSpecialties}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Procedure Proficiency"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{procedureProficiency}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Unit Info"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{bedCount}} beds · {{patientToNurseRatio}} ratio"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Certification"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Expiry / Detail"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "BLS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{blsCertExpiry}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "ACLS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{aclsCertExpiry}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "PALS / NRP"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{palsOrNrpCert}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Other"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{otherClinicalCerts}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CNC / CRNC"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cncOrCrncCertification}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentUnit}} RN "
              },
              {
                "type": "text",
                "text": "| {{currentHospital}} | {{currentShift}} shift | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Patient Satisfaction Score: {{patientSatisfactionScore}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "QI Project: {{qualityImprovementProject}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Census: {{currentCensus}} patients/day"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousUnit}} RN "
              },
              {
                "type": "text",
                "text": "| {{previousHospital}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Critical Care: {{criticalCareExperience}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Charge Nurse: {{chargeNurseExperience}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Preceptor: {{preceptorExperience}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{msnOrDnp}} "
              },
              {
                "type": "text",
                "text": "({{msnSpecialty}}) | {{msnUniversity}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "BSN "
              },
              {
                "type": "text",
                "text": "| {{bsnUniversity}} | {{bsnGraduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Additional"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Magnet Hospital: {{magentHospitalExperience}} · Languages: {{languagesSpoken}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-civil-engineer-v2",
    "slug": "resume-civil-engineer-v2",
    "title": "Civil Engineer Resume",
    "description": "Licensed civil and structural engineer resume with PE license, AutoCAD/BIM proficiency, project value, and regulatory compliance.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-civil-engineer-v2.jpg",
    "content": {
      "title": "Civil Engineer Resume",
      "fields": [
        "fullName",
        "peLicenseNumber",
        "peState",
        "peLicenseExpiry",
        "email",
        "phone",
        "location",
        "engineeringSpecialization",
        "careerSummary",
        "cadSoftware",
        "bimTools",
        "structuralAnalysisSoftware",
        "gisTools",
        "hydraulicModeling",
        "geotechnicalSoftware",
        "projectManagementSoftware",
        "constructionDocumentation",
        "buildingCodes",
        "environmentalCompliance",
        "currentEmployer",
        "currentTitle",
        "currentDates",
        "projectName1",
        "projectValue1",
        "projectScope1",
        "projectName2",
        "projectValue2",
        "projectScope2",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "previousProjectName",
        "previousProjectValue",
        "bsCivilEngineering",
        "university",
        "graduationYear",
        "msCivilEngineering",
        "msSpecialty",
        "msUniversity",
        "peLicenseType",
        "seLicense",
        "eiRecord",
        "professionalMemberships",
        "projectDeliveryMethod"
      ],
      "layout": {
        "header": "LICENSED CIVIL ENGINEER, PE",
        "footer": "PE License #{{peLicenseNumber}} — {{peState}} — Expires {{peLicenseExpiry}}"
      },
      "styles": {
        "primaryColor": "#92400e",
        "secondaryColor": "#451a03"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}, PE"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{engineeringSpecialization}} · {{email}} · {{phone}} · {{location}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "PE License #{{peLicenseNumber}} · State: {{peState}} · Expires: {{peLicenseExpiry}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Career Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{careerSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Technical Proficiencies"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Domain"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Software / Standards"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CAD"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cadSoftware}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "BIM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{bimTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Structural Analysis"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{structuralAnalysisSoftware}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "GIS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{gisTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Hydraulic Modeling"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{hydraulicModeling}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Geotechnical"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{geotechnicalSoftware}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Project Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{projectManagementSoftware}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Construction Docs"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{constructionDocumentation}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Building Codes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{buildingCodes}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Environmental"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{environmentalCompliance}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Project: {{projectName1}} — Value: {{projectValue1}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Scope: {{projectScope1}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Project: {{projectName2}} — Value: {{projectValue2}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Scope: {{projectScope2}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Project: {{previousProjectName}} — Value: {{previousProjectValue}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Delivery Method: {{projectDeliveryMethod}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{msCivilEngineering}} "
              },
              {
                "type": "text",
                "text": "({{msSpecialty}}) | {{msUniversity}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{bsCivilEngineering}} "
              },
              {
                "type": "text",
                "text": "| {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Licenses & Memberships"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "PE License: {{peLicenseType}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "SE License: {{seLicense}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "EI Record: {{eiRecord}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Member: {{professionalMemberships}}"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-mechanical-engineer-v2",
    "slug": "resume-mechanical-engineer-v2",
    "title": "Mechanical Engineer Resume",
    "description": "Mechanical engineer resume with CAD/CAE expertise, product development lifecycle, manufacturing process experience, and ASME certification.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-mechanical-engineer-v2.jpg",
    "content": {
      "title": "Mechanical Engineer Resume",
      "fields": [
        "fullName",
        "peLicenseNumber",
        "email",
        "phone",
        "location",
        "linkedinUrl",
        "mechanicalSpecialty",
        "careerSummary",
        "cadTools",
        "caeAndFea",
        "pdmOrPlm",
        "manufacturingProcesses",
        "materialScience",
        "thermodynamicsExpertise",
        "hvacOrFluidSystems",
        "roboticsOrAutomation",
        "isoAndAsmeCodes",
        "sixSigmaLevel",
        "currentEmployer",
        "currentTitle",
        "currentDates",
        "productLaunched",
        "costReductionAchieved",
        "defectRateImprovement",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "patentsFiled",
        "r&dProjects",
        "bsMechanicalEngineering",
        "university",
        "graduationYear",
        "msMechanicalEngineering",
        "msSpecialty",
        "msUniversity",
        "peCertification",
        "sixSigmaCert",
        "asmeOrSaeMembership",
        "industryExperience"
      ],
      "layout": {
        "header": "MECHANICAL ENGINEER",
        "footer": "PE License: {{peLicenseNumber}} | Specialty: {{mechanicalSpecialty}}"
      },
      "styles": {
        "primaryColor": "#059669",
        "secondaryColor": "#064e3b"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{mechanicalSpecialty}} · {{email}} · {{phone}} · {{location}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "PE License: {{peLicenseNumber}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{careerSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Technical Skills"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Domain"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tools / Expertise"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CAD Tools"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cadTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CAE / FEA"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{caeAndFea}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "PDM / PLM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{pdmOrPlm}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Manufacturing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{manufacturingProcesses}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Materials"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{materialScience}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Thermodynamics"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{thermodynamicsExpertise}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "HVAC / Fluid Systems"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{hvacOrFluidSystems}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Robotics / Automation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{roboticsOrAutomation}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Standards"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{isoAndAsmeCodes}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Six Sigma Level"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{sixSigmaLevel}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Product Launched: {{productLaunched}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Cost Reduction: {{costReductionAchieved}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Defect Rate Improvement: {{defectRateImprovement}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Patents Filed: {{patentsFiled}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "R&D Projects: {{r&dProjects}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{msMechanicalEngineering}} "
              },
              {
                "type": "text",
                "text": "({{msSpecialty}}) | {{msUniversity}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{bsMechanicalEngineering}} "
              },
              {
                "type": "text",
                "text": "| {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications & Memberships"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "PE: {{peCertification}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Six Sigma: {{sixSigmaCert}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "ASME / SAE: {{asmeOrSaeMembership}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Industry"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{industryExperience}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-hr-v2",
    "slug": "resume-hr-v2",
    "title": "HR Resume",
    "description": "Human resources manager resume with talent acquisition metrics, HRIS systems, compliance, L&D program design, and compensation benchmarking.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-hr-v2.jpg",
    "content": {
      "title": "HR Resume",
      "fields": [
        "fullName",
        "shrm_sphr_cert",
        "email",
        "phone",
        "location",
        "linkedinUrl",
        "hrSpecialization",
        "careerSummary",
        "hrisSystems",
        "atsTools",
        "payrollSystems",
        "lmsSystems",
        "compensationBenchmarking",
        "laborLawKnowledge",
        "diversityAndInclusion",
        "employeeRelations",
        "successionPlanning",
        "currentEmployer",
        "currentTitle",
        "currentDates",
        "hiresCompletedAnnually",
        "timeToFillDays",
        "employeeTurnoverReduced",
        "trainingProgramsDesigned",
        "currentHeadcount",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "laborComplianceProject",
        "esgOrDeIProgram",
        "bsDegree",
        "major",
        "university",
        "graduationYear",
        "shrmCpOrScp",
        "phrOrSphr",
        "workdayCertification",
        "hrIndustrySpecialization",
        "executiveHRAdvisory"
      ],
      "layout": {
        "header": "HUMAN RESOURCES PROFESSIONAL",
        "footer": "{{shrm_sphr_cert}} Certified | HRIS: {{hrisSystems}}"
      },
      "styles": {
        "primaryColor": "#8b5cf6",
        "secondaryColor": "#4c1d95"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{hrSpecialization}} · {{email}} · {{phone}} · {{location}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Credentials: {{shrm_sphr_cert}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Career Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{careerSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "HR Systems & Expertise"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Domain"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Systems / Skills"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "HRIS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{hrisSystems}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "ATS Tools"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{atsTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Payroll"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{payrollSystems}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "LMS"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{lmsSystems}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Compensation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{compensationBenchmarking}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Labor Law"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{laborLawKnowledge}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "D&I Programs"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{diversityAndInclusion}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Employee Relations"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{employeeRelations}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Succession Planning"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{successionPlanning}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}} | Headcount: {{currentHeadcount}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Hires Completed Annually: {{hiresCompletedAnnually}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Time-to-Fill: {{timeToFillDays}} days avg."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Turnover Reduced by: {{employeeTurnoverReduced}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Training Programs Designed: {{trainingProgramsDesigned}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Labor Compliance Project: {{laborComplianceProject}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "ESG / DEI Program: {{esgOrDeIProgram}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{bsDegree}} "
              },
              {
                "type": "text",
                "text": "({{major}}) | {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "SHRM-CP/SCP: {{shrmCpOrScp}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "PHR/SPHR: {{phrOrSphr}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Workday: {{workdayCertification}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Industry & Advisory"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{hrIndustrySpecialization}} · Executive HR: {{executiveHRAdvisory}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-customer-service-v2",
    "slug": "resume-customer-service-v2",
    "title": "Customer Service Resume",
    "description": "Customer service representative and team lead resume with CSAT score, FCR rate, ticket volume, and CRM tool proficiency.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-customer-service-v2.jpg",
    "content": {
      "title": "Customer Service Resume",
      "fields": [
        "fullName",
        "customerServiceTitle",
        "email",
        "phone",
        "location",
        "csatScore",
        "fcrRate",
        "npsContribution",
        "averageHandleTime",
        "ticketsResolvedPerDay",
        "crmTools",
        "helpdeskSoftware",
        "liveChatPlatforms",
        "communicationStyle",
        "conflictResolution",
        "multilingual",
        "currentEmployer",
        "currentTeamSize",
        "currentTitle",
        "currentDates",
        "escalationsResolved",
        "crossSellUpsellRevenue",
        "qualityScore",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "customerRetentionProgram",
        "processImprovementInitiative",
        "degree",
        "field",
        "university",
        "graduationYear",
        "helpDeskCertification",
        "salesforceOrZendeskCert",
        "languagesSpoken",
        "volunteerWork"
      ],
      "layout": {
        "header": "CUSTOMER SERVICE PROFESSIONAL",
        "footer": "CSAT Score: {{csatScore}} | FCR Rate: {{fcrRate}}%"
      },
      "styles": {
        "primaryColor": "#f59e0b",
        "secondaryColor": "#92400e"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{customerServiceTitle}} · {{email}} · {{phone}} · {{location}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Performance Metrics"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "KPI"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Value"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CSAT Score"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{csatScore}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "First Contact Resolution (FCR)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{fcrRate}}%"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "NPS Contribution"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{npsContribution}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Avg. Handle Time"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{averageHandleTime}} mins"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tickets Resolved / Day"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{ticketsResolvedPerDay}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Skills & Tools"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Details"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "CRM Tools"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{crmTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Help Desk Software"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{helpdeskSoftware}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Live Chat"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{liveChatPlatforms}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Communication Style"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{communicationStyle}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Conflict Resolution"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{conflictResolution}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Languages"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{multilingual}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | Team Size: {{currentTeamSize}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Escalations Resolved: {{escalationsResolved}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Cross-Sell / Upsell Revenue: {{crossSellUpsellRevenue}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Quality Score: {{qualityScore}}%"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Customer Retention Program: {{customerRetentionProgram}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Process Improvement: {{processImprovementInitiative}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} "
              },
              {
                "type": "text",
                "text": "({{field}}) | {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{helpDeskCertification}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{salesforceOrZendeskCert}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Languages & Volunteer"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{languagesSpoken}} · {{volunteerWork}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-student",
    "slug": "resume-student",
    "title": "Student Resume",
    "description": "College student resume with education-first layout, GPA, coursework, campus activities, internships, and part-time work experience.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-student.jpg",
    "content": {
      "title": "Student Resume",
      "fields": [
        "fullName",
        "email",
        "phone",
        "campusAddress",
        "homeCity",
        "linkedinUrl",
        "collegeOrUniversity",
        "degreeProgram",
        "major",
        "minor",
        "gpa",
        "expectedGraduationDate",
        "relevantCoursework",
        "academicHonors",
        "scholarships",
        "internshipCompany",
        "internshipTitle",
        "internshipDates",
        "internshipDescription",
        "partTimeEmployer",
        "partTimeRole",
        "partTimeDates",
        "partTimeDescription",
        "campusClub1",
        "campusRole1",
        "campusClub2",
        "campusRole2",
        "leadershipActivity",
        "communityServiceHours",
        "communityServiceOrg",
        "technicalSkills",
        "softSkills",
        "languageProficiency",
        "certificationOrOnlineCourse",
        "volunteerRole",
        "references"
      ],
      "layout": {
        "header": "UNDERGRADUATE STUDENT RESUME",
        "footer": "Expected Graduation: {{expectedGraduationDate}} | References: {{references}}"
      },
      "styles": {
        "primaryColor": "#6366f1",
        "secondaryColor": "#312e81"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{email}} · {{phone}} · {{campusAddress}} · Home: {{homeCity}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degreeProgram}} in {{major}} "
              },
              {
                "type": "text",
                "text": "(Minor: {{minor}}) | {{collegeOrUniversity}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "GPA: {{gpa}} · Expected Graduation: {{expectedGraduationDate}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Relevant Coursework: "
              },
              {
                "type": "text",
                "text": "{{relevantCoursework}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Honors & Scholarships: "
              },
              {
                "type": "text",
                "text": "{{academicHonors}} · {{scholarships}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Internship Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{internshipTitle}} "
              },
              {
                "type": "text",
                "text": "| {{internshipCompany}} | {{internshipDates}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{internshipDescription}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Work Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{partTimeRole}} "
              },
              {
                "type": "text",
                "text": "| {{partTimeEmployer}} | {{partTimeDates}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{partTimeDescription}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Campus Activities & Leadership"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Organization"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Role"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{campusClub1}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{campusRole1}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{campusClub2}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{campusRole2}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Leadership Activity"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{leadershipActivity}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Community Service"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{communityServiceOrg}} — {{communityServiceHours}} hours volunteered"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Skills"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Technical: {{technicalSkills}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Soft Skills: {{softSkills}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Languages: {{languageProficiency}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications / Online Courses"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{certificationOrOnlineCourse}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-fresher-v2",
    "slug": "resume-fresher-v2",
    "title": "Fresher Resume",
    "description": "Entry-level fresher resume for new graduates applying for their first job. Highlights academic projects, internships, and transferable skills.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-fresher-v2.jpg",
    "content": {
      "title": "Fresher Resume",
      "fields": [
        "fullName",
        "applyingForRole",
        "email",
        "phone",
        "city",
        "linkedinUrl",
        "careerObjective",
        "degree",
        "major",
        "university",
        "graduationYear",
        "gpa",
        "academicAchievements",
        "capstoneProjectTitle",
        "capstoneProjectDescription",
        "capstoneTools",
        "internship1Company",
        "internship1Role",
        "internship1Duration",
        "internship1Contribution",
        "internship2Company",
        "internship2Role",
        "internship2Duration",
        "personalProject1Name",
        "personalProject1Description",
        "personalProject1Link",
        "technicalSkillsLearned",
        "softSkillsDemonstrated",
        "languagesKnown",
        "extracurricularActivity",
        "leadershipsRole",
        "certificationName",
        "certificationPlatform",
        "certificationLink",
        "hobbiesRelevantToRole",
        "availableForRelocation",
        "noticeOrJoiningDate"
      ],
      "layout": {
        "header": "ENTRY-LEVEL PROFESSIONAL",
        "footer": "Available to join: {{noticeOrJoiningDate}} | Open to relocation: {{availableForRelocation}}"
      },
      "styles": {
        "primaryColor": "#0891b2",
        "secondaryColor": "#0c4a6e"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Applying for: {{applyingForRole}} · {{email}} · {{phone}} · {{city}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Career Objective"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{careerObjective}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} in {{major}} "
              },
              {
                "type": "text",
                "text": "| {{university}} | {{graduationYear}} | GPA: {{gpa}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "Achievements: "
              },
              {
                "type": "text",
                "text": "{{academicAchievements}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Capstone / Final Year Project"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{capstoneProjectTitle}} "
              },
              {
                "type": "text",
                "text": "({{capstoneTools}})"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{capstoneProjectDescription}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Internship Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{internship1Role}} "
              },
              {
                "type": "text",
                "text": "| {{internship1Company}} | {{internship1Duration}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{internship1Contribution}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{internship2Role}} "
              },
              {
                "type": "text",
                "text": "| {{internship2Company}} | {{internship2Duration}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Personal Projects"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{personalProject1Name}} "
              },
              {
                "type": "text",
                "text": ""
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{personalProject1Description}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Link: {{personalProject1Link}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Skills"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Details"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Technical"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{technicalSkillsLearned}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Soft Skills"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{softSkillsDemonstrated}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Languages"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{languagesKnown}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Extracurricular & Leadership"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{extracurricularActivity}} · Leadership: {{leadershipsRole}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{certificationName}} "
              },
              {
                "type": "text",
                "text": "| {{certificationPlatform}} · {{certificationLink}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Hobbies & Interests"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{hobbiesRelevantToRole}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-mba",
    "slug": "resume-mba",
    "title": "MBA Resume",
    "description": "MBA graduate resume for management consulting, investment banking, and corporate strategy roles. Features leadership impact, case competition wins, and P&L ownership.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-mba.jpg",
    "content": {
      "title": "MBA Resume",
      "fields": [
        "fullName",
        "mbaTitle",
        "email",
        "phone",
        "location",
        "linkedinUrl",
        "mbaSchool",
        "mbaConcentration",
        "mbaGraduationYear",
        "mbaGPA",
        "mbaActivities",
        "caseCompetitionWins",
        "undergraduateDegree",
        "undergraduateUniversity",
        "undergraduateGPA",
        "preorPostMBAEmployer",
        "postMBATitle",
        "postMBADates",
        "p&lResponsibility",
        "strategyProject",
        "revenueImpact",
        "teamLed",
        "previousEmployer",
        "preRoleTitle",
        "preRoleDates",
        "preRoleAchievement1",
        "preRoleAchievement2",
        "industryKnowledge",
        "coreConsultingSkills",
        "financialModeling",
        "dataTools",
        "leadershipStyle",
        "boardOrCommitteeRole",
        "mbaScholarship",
        "volunteerCause",
        "languagesFluent"
      ],
      "layout": {
        "header": "MBA PROFESSIONAL",
        "footer": "{{mbaSchool}} MBA · Class of {{mbaGraduationYear}} · Concentration: {{mbaConcentration}}"
      },
      "styles": {
        "primaryColor": "#1e3a8a",
        "secondaryColor": "#0f172a"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{mbaTitle}} · {{email}} · {{phone}} · {{location}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "MBA "
              },
              {
                "type": "text",
                "text": "| {{mbaSchool}} | Concentration: {{mbaConcentration}} | {{mbaGraduationYear}} | GPA: {{mbaGPA}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "MBA Activities: {{mbaActivities}} · Case Competitions: {{caseCompetitionWins}} · Scholarship: {{mbaScholarship}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{undergraduateDegree}} "
              },
              {
                "type": "text",
                "text": "| {{undergraduateUniversity}} | GPA: {{undergraduateGPA}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Post-MBA Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{postMBATitle}} "
              },
              {
                "type": "text",
                "text": "| {{preorPostMBAEmployer}} | {{postMBADates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "P&L Responsibility: {{p&lResponsibility}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Strategy Project: {{strategyProject}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Revenue Impact: {{revenueImpact}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Team Led: {{teamLed}} people"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Pre-MBA Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{preRoleTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{preRoleDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{preRoleAchievement1}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{preRoleAchievement2}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Skills & Expertise"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Domain"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Proficiency"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Industry Knowledge"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{industryKnowledge}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Consulting Skills"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{coreConsultingSkills}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Financial Modeling"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{financialModeling}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Data Tools"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{dataTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Leadership Style"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{leadershipStyle}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Leadership & Community"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Board / Committee: {{boardOrCommitteeRole}} · Volunteer: {{volunteerCause}} · Languages: {{languagesFluent}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-data-analyst-v2",
    "slug": "resume-data-analyst-v2",
    "title": "Data Analyst Resume",
    "description": "Data analyst resume with SQL proficiency, Python/R skills, BI dashboards, statistical modeling, and business impact of insights delivered.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-data-analyst-v2.jpg",
    "content": {
      "title": "Data Analyst Resume",
      "fields": [
        "fullName",
        "email",
        "phone",
        "location",
        "linkedinUrl",
        "kaggleProfile",
        "githubProfile",
        "analyticsSummary",
        "sqlExpertise",
        "pythonLibraries",
        "rPackages",
        "biTools",
        "dataVisualization",
        "statisticalMethods",
        "machineLearningFamiliarity",
        "bigDataPlatforms",
        "cloudDataPlatforms",
        "dataCleaningTools",
        "abtesting",
        "currentEmployer",
        "currentTitle",
        "currentDates",
        "dashboardsBuilt",
        "decisionImpact1",
        "dataReductionAchieved",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "insightDelivered",
        "forecastAccuracy",
        "dataSetSize",
        "degree",
        "major",
        "university",
        "graduationYear",
        "googleDataAnalytics",
        "tableauOrPowerBiCert",
        "awsOrGCPDataCert",
        "kaggleRanking",
        "openSourceContribution"
      ],
      "layout": {
        "header": "DATA ANALYST",
        "footer": "Kaggle: {{kaggleProfile}} · GitHub: {{githubProfile}}"
      },
      "styles": {
        "primaryColor": "#0284c7",
        "secondaryColor": "#1e3a8a"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{email}} · {{phone}} · {{location}} · LinkedIn: {{linkedinUrl}} · Kaggle: {{kaggleProfile}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Analytics Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{analyticsSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Technical Skills"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Skill Area"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Tools / Proficiency"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "SQL"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{sqlExpertise}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Python Libraries"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{pythonLibraries}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "R Packages"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{rPackages}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "BI Tools"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{biTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Data Visualization"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{dataVisualization}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Statistical Methods"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{statisticalMethods}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "ML Familiarity"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{machineLearningFamiliarity}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Big Data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{bigDataPlatforms}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Cloud Data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{cloudDataPlatforms}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "A/B Testing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{abtesting}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Dashboards Built: {{dashboardsBuilt}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Business Decision Impact: {{decisionImpact1}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Data Reduction: {{dataReductionAchieved}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Insight Delivered: {{insightDelivered}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Forecast Accuracy: {{forecastAccuracy}}%"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Dataset Size: {{dataSetSize}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} "
              },
              {
                "type": "text",
                "text": "({{major}}) | {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications & Community"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{googleDataAnalytics}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{tableauOrPowerBiCert}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{awsOrGCPDataCert}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Kaggle Ranking: {{kaggleRanking}} · Open Source: {{openSourceContribution}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-ui-ux-designer",
    "slug": "resume-ui-ux-designer",
    "title": "UI UX Designer Resume",
    "description": "Product and UI/UX designer resume with Figma proficiency, design system ownership, user research methods, and conversion impact.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-ui-ux-designer.jpg",
    "content": {
      "title": "UI UX Designer Resume",
      "fields": [
        "fullName",
        "designTitle",
        "email",
        "phone",
        "location",
        "portfolioUrl",
        "dribbbleUrl",
        "behanceUrl",
        "linkedinUrl",
        "designSummary",
        "figmaExpertise",
        "prototypingTools",
        "userResearchMethods",
        "usabilityTestingTools",
        "designSystemExperience",
        "accessibilityStandards",
        "frontendFamiliarity",
        "analyticsTools",
        "collaborationTools",
        "designThinkingProcess",
        "currentEmployer",
        "currentTitle",
        "currentDates",
        "designSystemsBuilt",
        "conversionRateImproved",
        "userResearchParticipants",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "appOrProductRedesign",
        "a11yImprovements",
        "baOrBscDegree",
        "major",
        "university",
        "graduationYear",
        "nnGroupCert",
        "googleUxCert",
        "interactionDesignFoundation",
        "caseStudyLinks",
        "speakingOrMentoringExp"
      ],
      "layout": {
        "header": "UI / UX DESIGNER",
        "footer": "Portfolio: {{portfolioUrl}} · Dribbble: {{dribbbleUrl}} · Behance: {{behanceUrl}}"
      },
      "styles": {
        "primaryColor": "#db2777",
        "secondaryColor": "#9d174d"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{designTitle}} · {{email}} · {{phone}} · {{location}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Portfolio: {{portfolioUrl}} · Dribbble: {{dribbbleUrl}} · Behance: {{behanceUrl}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Design Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{designSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Design Skills & Tools"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Category"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Details"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Figma"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{figmaExpertise}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Prototyping"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{prototypingTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "User Research"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{userResearchMethods}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Usability Testing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{usabilityTestingTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Design Systems"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{designSystemExperience}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Accessibility"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{accessibilityStandards}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Frontend Familiarity"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{frontendFamiliarity}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Analytics"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{analyticsTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Collaboration"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{collaborationTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Design Process"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{designThinkingProcess}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Design Systems Built: {{designSystemsBuilt}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Conversion Rate Improved: +{{conversionRateImproved}}%"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "User Research: {{userResearchParticipants}} participants"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Product Redesign: {{appOrProductRedesign}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Accessibility Improvements: {{a11yImprovements}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{baOrBscDegree}} "
              },
              {
                "type": "text",
                "text": "({{major}}) | {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{nnGroupCert}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{googleUxCert}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{interactionDesignFoundation}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Case Studies & Community"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Case Studies: {{caseStudyLinks}} · Speaking / Mentoring: {{speakingOrMentoringExp}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-project-manager-v2",
    "slug": "resume-project-manager-v2",
    "title": "Project Manager Resume",
    "description": "PMP-certified project manager resume with budget accountability, stakeholder management, risk mitigation, and on-time delivery track record.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-project-manager-v2.jpg",
    "content": {
      "title": "Project Manager Resume",
      "fields": [
        "fullName",
        "pmpLicenseNumber",
        "email",
        "phone",
        "location",
        "linkedinUrl",
        "pmSummary",
        "projectMethodologies",
        "pmTools",
        "budgetManaged",
        "teamSizeManaged",
        "stakeholderLevels",
        "riskManagement",
        "changeManagement",
        "agileCeremonies",
        "reportingCadence",
        "currentEmployer",
        "currentTitle",
        "currentDates",
        "project1Name",
        "project1Value",
        "project1Outcome",
        "project1Timeline",
        "project2Name",
        "project2Value",
        "project2Outcome",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "project3Name",
        "project3Value",
        "project3Outcome",
        "degree",
        "major",
        "university",
        "graduationYear",
        "pmpCertification",
        "pmiAcpOrPgmp",
        "scrumMasterCert",
        "sixSigmaOrLeanCert",
        "industryDomain",
        "portfolioHighlight"
      ],
      "layout": {
        "header": "PROJECT MANAGER, PMP",
        "footer": "PMP License #{{pmpLicenseNumber}} | Methodologies: {{projectMethodologies}}"
      },
      "styles": {
        "primaryColor": "#7c3aed",
        "secondaryColor": "#4c1d95"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}, PMP"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{email}} · {{phone}} · {{location}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "PMP #{{pmpLicenseNumber}} · Methodologies: {{projectMethodologies}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{pmSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Project Management Skills"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Domain"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Details"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "PM Tools"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{pmTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Budget Managed"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{budgetManaged}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Team Size"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{teamSizeManaged}} direct reports"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Stakeholders"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{stakeholderLevels}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Risk Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{riskManagement}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Change Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{changeManagement}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Agile Ceremonies"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{agileCeremonies}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Reporting Cadence"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{reportingCadence}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Project"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Value"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Timeline"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Outcome"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{project1Name}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{project1Value}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{project1Timeline}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{project1Outcome}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{project2Name}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{project2Value}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "—"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{project2Outcome}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Project: {{project3Name}} — Value: {{project3Value}} — Outcome: {{project3Outcome}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} "
              },
              {
                "type": "text",
                "text": "({{major}}) | {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "PMP: {{pmpCertification}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "PMI-ACP / PgMP: {{pmiAcpOrPgmp}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Scrum Master: {{scrumMasterCert}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Six Sigma / Lean: {{sixSigmaOrLeanCert}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Industry & Portfolio"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Domain: {{industryDomain}} · Portfolio Highlight: {{portfolioHighlight}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-business-analyst-v2",
    "slug": "resume-business-analyst-v2",
    "title": "Business Analyst Resume",
    "description": "Business analyst resume with requirements elicitation, process mapping, stakeholder workshops, Agile BA practices, and business case ROI.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-business-analyst-v2.jpg",
    "content": {
      "title": "Business Analyst Resume",
      "fields": [
        "fullName",
        "baCertification",
        "email",
        "phone",
        "location",
        "linkedinUrl",
        "baSummary",
        "requirementsElicitation",
        "processModelingTools",
        "businessCaseWriting",
        "agileBARole",
        "usesCaseDevelopment",
        "dataAnalysisSkills",
        "sqlForBa",
        "umlDiagrams",
        "stakeholderManagement",
        "changeManagement",
        "currentEmployer",
        "currentTitle",
        "currentDates",
        "businessProblemSolved",
        "roiDelivered",
        "processEfficiencyGained",
        "userstoriesWritten",
        "previousEmployer",
        "previousTitle",
        "previousDates",
        "systemsImplemented",
        "requirementDocuments",
        "degree",
        "major",
        "university",
        "graduationYear",
        "cbapCertification",
        "pmiPbaCertification",
        "agileOrScrumCert",
        "jiraOrConfluenceCert",
        "industryExperience",
        "toolkitHighlight"
      ],
      "layout": {
        "header": "BUSINESS ANALYST",
        "footer": "{{baCertification}} | Elicitation: {{requirementsElicitation}}"
      },
      "styles": {
        "primaryColor": "#0f766e",
        "secondaryColor": "#134e4a"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{email}} · {{phone}} · {{location}} · LinkedIn: {{linkedinUrl}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Credentials: {{baCertification}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{baSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Business Analysis Skills"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Competency"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Details"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Requirements Elicitation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{requirementsElicitation}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Process Modeling"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{processModelingTools}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Business Case Writing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{businessCaseWriting}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Agile BA Role"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{agileBARole}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Use Case Development"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{usesCaseDevelopment}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Data Analysis"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{dataAnalysisSkills}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "SQL for BA"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{sqlForBa}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "UML Diagrams"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{umlDiagrams}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Stakeholder Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{stakeholderManagement}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "Change Management"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{changeManagement}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{currentTitle}} "
              },
              {
                "type": "text",
                "text": "| {{currentEmployer}} | {{currentDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Business Problem Solved: {{businessProblemSolved}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "ROI Delivered: {{roiDelivered}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Process Efficiency Gained: {{processEfficiencyGained}}%"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "User Stories Written: {{userstoriesWritten}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{previousTitle}} "
              },
              {
                "type": "text",
                "text": "| {{previousEmployer}} | {{previousDates}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Systems Implemented: {{systemsImplemented}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Requirement Documents: {{requirementDocuments}} docs produced"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{degree}} "
              },
              {
                "type": "text",
                "text": "({{major}}) | {{university}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "CBAP: {{cbapCertification}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "PMI-PBA: {{pmiPbaCertification}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Agile/Scrum: {{agileOrScrumCert}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Jira/Confluence: {{jiraOrConfluenceCert}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Industry & Toolkit"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{industryExperience}} · {{toolkitHighlight}}"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "resume-professional-v2",
    "slug": "resume-professional-v2",
    "title": "Professional Resume Template",
    "description": "Modern, polished professional resume template for mid-to-senior executives across all industries. Clean two-section layout with achievements focus.",
    "isPremium": false,
    "categorySlug": "resumes",
    "categoryName": "Resumes & CVs",
    "image": "/templates/resume-professional-v2.jpg",
    "content": {
      "title": "Professional Resume Template",
      "fields": [
        "fullName",
        "professionalTitle",
        "email",
        "phone",
        "city",
        "state",
        "linkedinUrl",
        "personalWebsite",
        "executiveSummary",
        "coreCompetency1",
        "coreCompetency2",
        "coreCompetency3",
        "coreCompetency4",
        "coreCompetency5",
        "coreCompetency6",
        "employer1",
        "title1",
        "tenure1",
        "achievement1a",
        "achievement1b",
        "achievement1c",
        "employer2",
        "title2",
        "tenure2",
        "achievement2a",
        "achievement2b",
        "achievement2c",
        "employer3",
        "title3",
        "tenure3",
        "achievement3",
        "highestDegree",
        "degreeField",
        "institution",
        "graduationYear",
        "certification1",
        "certification2",
        "certification3",
        "boardOrAdvisoryRole",
        "publicationOrPatent",
        "languageProficiencies",
        "volunteerOrPhilanthropic",
        "referenceAvailability"
      ],
      "layout": {
        "header": "EXECUTIVE PROFESSIONAL RESUME",
        "footer": "{{referenceAvailability}} · LinkedIn: {{linkedinUrl}} · Website: {{personalWebsite}}"
      },
      "styles": {
        "primaryColor": "#1e293b",
        "secondaryColor": "#334155"
      },
      "editorState": {
        "type": "doc",
        "content": [
          {
            "type": "heading",
            "attrs": {
              "level": 1
            },
            "content": [
              {
                "type": "text",
                "text": "{{fullName}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{professionalTitle}} · {{email}} · {{phone}} · {{city}}, {{state}}"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "LinkedIn: {{linkedinUrl}} · Website: {{personalWebsite}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Executive Summary"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{executiveSummary}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Core Competencies"
              }
            ]
          },
          {
            "type": "table",
            "content": [
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": ""
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": ""
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableHeader",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": ""
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{coreCompetency1}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{coreCompetency2}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{coreCompetency3}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tableRow",
                "content": [
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{coreCompetency4}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{coreCompetency5}}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tableCell",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "text",
                            "text": "{{coreCompetency6}}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Professional Experience"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{title1}} "
              },
              {
                "type": "text",
                "text": "| {{employer1}} | {{tenure1}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement1a}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement1b}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement1c}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{title2}} "
              },
              {
                "type": "text",
                "text": "| {{employer2}} | {{tenure2}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement2a}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement2b}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement2c}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{title3}} "
              },
              {
                "type": "text",
                "text": "| {{employer3}} | {{tenure3}}"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{achievement3}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Education"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [
                  {
                    "type": "bold"
                  }
                ],
                "text": "{{highestDegree}} "
              },
              {
                "type": "text",
                "text": "({{degreeField}}) | {{institution}} | {{graduationYear}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Certifications"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{certification1}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{certification2}}"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "{{certification3}}"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Leadership & Recognition"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Board / Advisory: {{boardOrAdvisoryRole}} · Publications / Patents: {{publicationOrPatent}}"
              }
            ]
          },
          {
            "type": "heading",
            "attrs": {
              "level": 2
            },
            "content": [
              {
                "type": "text",
                "text": "Languages & Community"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "{{languageProficiencies}} · {{volunteerOrPhilanthropic}}"
              }
            ]
          }
        ]
      }
    }
  }
];
