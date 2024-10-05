import jabil_logo from "../assets/jabil_logo.svg"
import citi_logo from "../assets/citi_logo.svg"
import bny_logo from "../assets/bny_logo.svg"
import wt_logo from "../assets/wt_logo.svg"
import skanska_logo from "../assets/skanska_logo.svg"
import hdr_logo from "../assets/hdr_logo.svg"

const companies = [
  {
    name: "BNY",
    logo_path: bny_logo,
    shortDescription: "A global investment and wealth management firm offering personalized investment strategies, wealth planning, and risk management services",
    company_full_info: {
      description: "BNY is a global investment firm specializing in asset management and financial services, offering diverse early career programs that provide students with real-world experience in finance, technology, and business operations.",
      targetMajors: [
        "Finance",
        "Accounting",
        "Business Administration",
        "Information Technology",
        "Data Analytics",
        "Engineering",
        "Human Resources",
        "Legal",
        "Marketing"
      ],
      locations: {
        domestic: [
          "New York, NY (Headquarters)",
          "Pittsburgh, PA",
          "Boston, MA"
        ],
        international: [
          "London, UK",
          "Other locations worldwide"
        ]
      },
      internshipCompensation: "$16.00 - $32.00 per hour",
      connections: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/bny-mellon/"
        }
      ],
      careerPages: [
        {
          name: "Internships and Pre-Internship Programs",
          url: "https://www.bny.com/corporate/global/en/careers/students.html"
        }
      ],
      additionalInfo: "Offers several Internship programs and Pre-Internship Programs for freshman and sophomore students",
      careerLink: "https://www.bny.com/corporate/global/en/careers/students.html"
    }
  },
  {
    name: "Jabil",
    logo_path: jabil_logo,
    shortDescription: "A manufacturing leader that partners with top brands to design, produce, and deliver cutting-edge products across diverse industries.",
    company_full_info: {
      description: "A global manufacturing solutions provider offering diverse opportunities for students and recent graduates across various fields.",
      targetMajors: [
        "Accounting",
        "Finance",
        "Business Administration",
        "Information Technology",
        "Legal",
        "Engineering",
        "Management (HR)",
        "Supply Chain",
        "Information Systems",
        "Data Analytics"
      ],
      locations: {
        domestic: [
          "Florida (HQ in St. Petersburg)",
          "Colorado",
          "New York",
          "Illinois",
          "Pennsylvania"
        ],
        international: ["Over 100 locations in 30 countries"]
      },
      internshipCompensation: {
        range: "$16.00 - $32.00 per hour"
      },
      relocationAssistance: "Details not specified",
      connections: [
        {
          name: "North America Talent Community (LinkedIn)",
          url: "https://www.linkedin.com/groups/13090581/"
        }
      ],
      careerPages: [
        {
          name: "Jabil's Career Page",
          url: "https://careers.jabil.com"
        },
        {
          name: "Jabil's Indeed Page",
          url: "https://www.indeed.com/cmp/Jabil-176d8576"
        }
      ],
      additionalInfo: "Jabil typically expands its internship offerings throughout the year (especially spring), so check back regularly for new openings",
      careerLink: "https://careers.jabil.com"
    }
  },
  {
    name: "Citi",
    logo_path: citi_logo,
    shortDescription: "A global financial services company delivering comprehensive banking, investment, and advisory solutions to fuel economic growth and empower clients.",
    company_full_info: {
      description: "Citi is a global financial services institution that offers banking, wealth, and international services. Citi's mission is to provide financial services that help people grow and make economic progress. Citi has been in business for over 200 years and has a global network of financial services in almost 160 countries",
      targetMajors: [
        "Finance",
        "Technology"
      ],
      locations: {
        domestic: [
          "New York, NY (Headquarters)",
          "Jacksonville, FL",
          "Tampa, FL",
          "Multiple other US locations"
        ],
        international: [
          "London, UK",
          "Hong Kong",
          "Multiple other international locations"
        ]
      },
      internshipCompensation: {
        range: "Approximately $29-$31 per hour"
      },
      relocationAssistance: "Details not specified",
      connections: [
        {
          name: "Citi LinkedIn",
          url: "https://www.linkedin.com/company/citi/"
        }
      ],
      careerPages: [
        {
          name: "Citi Jobs",
          url: "https://jobs.citi.com/search-jobs?acm=ALL&alrpm=ALL&ascf=[%7B%22key%22:%22custom_fields.CFCareerLevel%22,%22value%22:%22Student+and+Grad+Programs%22%7D]"
        }
      ],
      additionalInfo: "",
      careerLink: "https://jobs.citi.com/search-jobs?acm=ALL&alrpm=ALL&ascf=[%7B%22key%22:%22custom_fields.CFCareerLevel%22,%22value%22:%22Student+and+Grad+Programs%22%7D]"
    }
  },
  {
    name: "Skanska",
    logo_path: skanska_logo,
    shortDescription: "A global construction and development company offering internships and full-time positions across the U.S., with opportunities in heavy civil infrastructure, field engineering, project management, and design roles. They focus heavily on large construction projects such as transportation, water, and commercial developments.",
    company_full_info: {
      description: "Skanska is a global construction and development company offering internships and full-time positions across the U.S., with opportunities in heavy civil infrastructure, field engineering, project management, and design roles. They focus heavily on large construction projects such as transportation, water, and commercial developments.",
      targetMajors: [
        "Civil Engineering",
        "Construction Management",
        "Mechanical Engineering",
        "Electrical Engineering"
      ],
      locations: {
        domestic: [
          "Seattle, WA",
          "Nashville, TN",
          "California (Multiple Locations)",
          "Texas (Multiple Locations)"
        ],
        international: []
      },
      internshipCompensation: {
        range: "$22 per hour on average"
      },
      relocationAssistance: "Yes, for some positions",
      connections: [
        {
          name: "Skanska LinkedIn",
          url: "https://www.linkedin.com/company/skanska/"
        }
      ],
      careerPages: [
        {
          name: "Skanska US Careers",
          url: "https://www.skanska.com/us/careers"
        }
      ],
      additionalInfo: "Some possible internship roles are Project Engineer Intern, Steel Bridge Intern, and Heavy Civil Infrastructure Intern",
      careerLink: "https://careers.usa.skanska.com/early-career-and-intern"
    }
  },
  {
    name: "Whiting-Turner",
    logo_path: wt_logo,
    shortDescription: "A global financial services company delivering comprehensive banking, investment, and advisory solutions to fuel economic growth and empower clients.",
    company_full_info: {
      description: "The Whiting-Turner Contracting Company is one of the largest employee-owned general contractors and Construction Management companies in the United States. Whiting-Turner is headquartered in Baltimore, Maryland, and has over 50 locations nationwide",
      targetMajors: [
        "Civil Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Construction Management"
      ],
      locations: {
        domestic: [
          "Baltimore, MD (Headquarters)",
          "Atlanta, GA",
          "Charlotte, NC",
          "Chicago, IL",
          "Orlando, FL",
          "Seattle, WA",
          "50+ other US locations"
        ],
        international: []
      },
      internshipCompensation: {
        range: "Average $18-$19 per hour"
      },
      relocationAssistance: "Details not specified",
      connections: [
        {
          name: "Whiting-Turner LinkedIn",
          url: "https://www.linkedin.com/company/the-whiting-turner-contracting-company/"
        }
      ],
      careerPages: [
        {
          name: "Whiting-Turner Careers",
          url: "https://www.whiting-turner.com/careers/apply/"
        }
      ],
      additionalInfo: "",
      careerLink: "https://www.whiting-turner.com/careers/apply/"
    }
  },
  {
    name: "HDR",
    logo_path: hdr_logo,
    shortDescription: "A global engineering and architecture firm offering many opportunities for students and recent graduates in various technical and design-related fields to get hands-on experience in real-world projects across multiple industries.",
    company_full_info: {
      description: "As a global engineering and architecture firm, HDR offers many opportunities for students and recent graduates in various technical and design-related fields to get hands-on experience in real-world projects across multiple industries.",
      targetMajors: [
        "Architecture",
        "Engineering",
        "Environmental Sciences",
        "Planning & Consulting",
        "Economics & Finance",
        "Other related fields"
      ],
      locations: {
        domestic: ["Multiple locations across the United States"],
        international: ["Multiple global locations"]
      },
      internshipCompensation: "$19 - $26 per hour",
      connections: [],
      careerPages: [
        {
          name: "HDR's main career page",
          url: "https://www.hdrinc.com/careers"
        },
        {
          name: "Job search portal",
          url: "https://hdr.taleo.net/careersection/ex/jobsearch.ftl"
        }
      ],
      additionalInfo: "HDR offers opportunities to work on innovative projects in architecture, engineering, and environmental consulting",
      careerLink: "https://www.hdrinc.com/careers"
    }
  }
]

export default companies