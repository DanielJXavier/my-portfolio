export interface ExperienceInterface {
  role: string;
  companyId: string;
  companyName: string;
  year: string;
  description: string;
  responsibilities: {
    text: string;
    resume?: boolean;
  }[];
  biggestChallenge: string;
  hasBlackLogo?: boolean;
  resume?: boolean;
}

export const experience: ExperienceInterface[] = [
  {
    role: "Software Engineering Manager",
    companyId: "olx",
    companyName: "OLX",
    year: "2024",
    description: 'I was the leader of the "Ads Seller Experience" team.',
    responsibilities: [
      {
        text: "Led a team of 9 developers, serving as a mentor and guiding light;",
        resume: true,
      },
      {
        text: "Delivered the successful execution of the platform's registration and ad management system roadmap including the new Ad Insertion in steps journey;",
        resume: true,
      },
      {
        text: "Built a high level of engagement within the team;",
      },
      {
        text: 'Held personalized "1:1s" to guide team members through their performance cycles;',
      },
      {
        text: "Adopted agile methodologies and led team ceremonies to ensure a streamlined workflow balancing product and technical tasks;",
        resume: true,
      },
      {
        text: "Worked closely with the Product Manager to facilitate informed and effective product decisions;",
      },
    ],
    biggestChallenge:
      "To deal with pressure from leadership to do major deliveries in the short term.",
    resume: true,
  },
  {
    role: "Software Engineering Manager",
    companyId: "olx",
    companyName: "OLX",
    year: "2023",
    description:
      'I was the leader of the "Search & Recommendation" team¹ and the "Design System" chapter².',
    responsibilities: [
      {
        text: "Led a team of 8 developers, serving as a mentor and guiding light;¹",
        resume: true,
      },
      {
        text: "Delivered the successful execution of the search and recommendation systems roadmap including the new LTR rank algorythn;¹",
        resume: true,
      },
      {
        text: "Structured the team and proposed an new approach to support the strategic plan for the upcoming year;¹",
        resume: true,
      },
      {
        text: "Clarified the company's understanding of search and recommendation subjects;¹",
      },
      {
        text: "Supervised all developers (9 devs) in the chapter indirectly, fostered a sense of unity and direction;²",
      },
      {
        text: "Fostered engagement within the chapter and ensured valuable deliveries despite working only once a week;²",
      },
    ],
    biggestChallenge:
      "To balance the substantial responsibilities of both the team¹ and the chapter² simultaneously.",
    resume: true,
  },
  {
    role: "Software Engineering Manager",
    companyId: "olx",
    companyName: "OLX",
    year: "2022 ~ 2023",
    description: "I was the leader of the 'Design System' team.",
    responsibilities: [
      {
        text: "Led a team of 9 developers, serving as a point of reference;",
        resume: true,
      },
      {
        text: "Partnered with the Design Manager to make optimal product decisions and establish a roadmap;",
        resume: true,
      },
      {
        text: "Delivered the Design System roadmap including a entire new platform homepage done in less than 48 hours;",
        resume: true,
      },
      {
        text: "Gathered and analyzed data to validate the project's value to the company;",
      },
      {
        text: "Ensured the continuous evolution of the Design System and its adoption by other teams;",
      },
      {
        text: "Developed documentation and processes for contributing to the Design System project and managing its version;",
      },
    ],
    biggestChallenge:
      "To assume multiple roles simultaneously, including Engineering Manager, Product Manager, Data Analyst, among others.",
    resume: true,
  },
  {
    role: "Software Engineering Manager",
    companyId: "olx",
    companyName: "OLX",
    year: "2021 ~ 2022",
    description: 'I was the leader of the "Advertising" team.',
    responsibilities: [
      {
        text: "Led a team of 7 developers, serving as a key reference;",
        resume: true,
      },
      {
        text: "Delivered both direct and indirect Advertising roadmaps for the platform that brought R$80 million in revenue;",
        resume: true,
      },
      {
        text: "Recruited new professionals to increase productive capacity in 300%;",
        resume: true,
      },
      {
        text: "Partnered actively with the Product Manager to prioritize and develop optimal initiatives;",
      },
      {
        text: "Proposed a new structure for the Advertising area to enhance results;",
      },
    ],
    biggestChallenge:
      "To manage high expectations related to Advertising revenue results.",
    resume: true,
  },
  {
    role: "CTO & Partner",
    companyId: "meaning",
    companyName: "Meaning",
    year: "2023",
    description: "I held the position of CTO and co-founder at the startup.",
    responsibilities: [
      {
        text: "Crafted the startup's technical vision and product strategy;",
        resume: true,
      },
      {
        text: "Architected the solution from the ground up;",
        resume: true,
      },
      {
        text: "Refined the product's technical specifications;",
        resume: true,
      },
      { text: "Developed a Proof of Concept project;", resume: false },
    ],
    biggestChallenge:
      'To convert a highly "human-centric" project, rooted in personal consultancy, into a systematic approach.',
    resume: true,
  },
  {
    role: "Development Coordinator",
    companyId: "softplan",
    companyName: "Softplan",
    year: "2020 ~ 2021",
    description: 'I was the leader of the "Estônia" team.',
    responsibilities: [
      {
        text: "Led directly a multidisciplinary software development team, inclusive of Software Architects, Developers, Quality Assurance Analysts, Product Owners, Business Analysts, and Agile Masters;",
        resume: true,
      },
      {
        text: "Mentored and developed both direct and indirect employees, utilizing techniques such as 1:1 and feedforward;",
      },
      {
        text: 'Planned and executed deliveries for the most 2 critical modules of the "SAJ" system;',
        resume: true,
      },
      {
        text: "Applied daily situational leadership to maximize the potential of those under my guidance;",
      },
      {
        text: "Structured and continuously enhanced the team's workflow using agile software development methodologies;",
        resume: true,
      },
      {
        text: "Created formulas and metrics to accurately gauge the team's capacity, thereby bringing predictability to deliveries;",
      },
      {
        text: "Mapped effective talent retention strategies;",
      },
    ],
    biggestChallenge:
      "To manage a large team (28 professionals) and oversee critical deliveries.",
    resume: true,
  },
  {
    role: "Tech Lead",
    companyId: "softplan",
    companyName: "Softplan",
    year: "2019 ~ 2020",
    description: "I was the technical leader of the Front-End chapter.",
    responsibilities: [
      {
        text: 'Developed the new "SAJ" system, constructed using React JS, .Net, and GraphQL;',
        resume: true,
      },
      {
        text: "Oversaw the deliveries and deployment of 17 modules of the system;",
        resume: true,
      },
      {
        text: "Provided training in HTML, CSS, JavaScript, React JS, GraphQL, and unit tests;",
      },
      {
        text: "Led a team of 10 Front-End React developers;",
        resume: true,
      },
      { text: "Recruited new employees for the company;", resume: false },
      { text: "Selected new contractor professionals;", resume: false },
      {
        text: "Developed professionals through 1:1 sessions, Feedforwards, and Mentoring;",
      },
    ],
    biggestChallenge:
      "To acquire leadership skills and master people management.",
    resume: true,
  },
  {
    role: "Senior Front-End Developer",
    companyId: "softplan",
    companyName: "Softplan",
    year: "2018 ~ 2019",
    description: 'I was a Senior Front-End developer at the "França" team.',
    responsibilities: [
      {
        text: 'Developed new features for the "e-SAJ" portal utilizing React JS and GraphQL;',
        resume: true,
      },
      {
        text: 'Created new features for the "SAJ Tribunais" system using React JS and GraphQL;',
        resume: true,
      },
    ],
    biggestChallenge:
      "To manage all the deliveries of the project as the sole Front-End developer.",
    resume: true,
  },
  {
    role: "Senior Front-End Developer",
    companyId: "hotmart",
    companyName: "Hotmart",
    year: "2018",
    description:
      'I was a Senior Front-End developer at the "Growth Hacking" team.',
    responsibilities: [
      {
        text: "Developed systems to address the company's internal needs and automate tasks, leveraging technologies such as Vue.js, and Node.js;",
        resume: true,
      },
      {
        text: "Created a Proof of Concept (POC) that introduced a simplified method for product registration on the platform;",
        resume: true,
      },
    ],
    biggestChallenge:
      "To balance the need to comprehend customer requirements clearly while simultaneously coding.",
  },
  {
    role: "Mid Level Front-End Developer",
    companyId: "hotmart",
    companyName: "Hotmart",
    year: "2017 ~ 2018",
    description:
      'I was a Mid Level Front-End developer at the "User Acquisition" team.',
    responsibilities: [
      {
        text: "Designed a system to generate blog post images using components and pre-defined templates, thereby enhancing the productivity of the design team;",
        resume: true,
      },
      {
        text: 'Developed a high-performance caching system for the "Hotmart blog" (WordPress), which resulted in a 300% increase in performance;',
        resume: true,
      },
      {
        text: 'Implemented the Arabic version of the "Hotmart blog";',
        resume: true,
      },
    ],
    biggestChallenge:
      "To conceptualize and develop complex solutions from the ground up.",
  },
  {
    role: "Entry Level Front-End Developer",
    companyId: "hotmart",
    companyName: "Hotmart",
    year: "2016 ~ 2017",
    description:
      'I was an Entry Level Front-End developer at the "User Acquisition" team.',
    responsibilities: [
      {
        text: 'Developed a new WordPress theme for the "Hotmart blog" utilizing only HTML5, CSS Grid Layout, and Vanilla JS;',
        resume: true,
      },
      {
        text: 'Implemented the new layout for the "Hotmart blog";',
        resume: true,
      },
      {
        text: "Created custom features within the WordPress admin interface;",
        resume: true,
      },
    ],
    biggestChallenge:
      "To acquire new development skills and apply them to complex projects.",
  },
  {
    role: "Support Analyst",
    companyId: "sydle",
    companyName: "Sydle",
    year: "2014 ~ 2016",
    description: 'I was a Support Analyst at the "Suporte & Sustentação" team.',
    responsibilities: [
      {
        text: "Spearheaded the development of web projects utilizing WordPress and Magento;",
        resume: true,
      },
      {
        text: "Facilitated the modeling and automation of the company's internal processes through BPMN;",
        resume: true,
      },
      {
        text: "Provided comprehensive technical support to users of the company's systems;",
        resume: true,
      },
      {
        text: "Oversaw the configuration and monitoring of both Linux and Windows servers.",
        resume: true,
      },
    ],
    biggestChallenge:
      "To rapidly acquire development skills and contribute to legacy projects.",

    hasBlackLogo: true,
  },
  {
    role: "Support Intern",
    companyId: "sydle",
    companyName: "Sydle",
    year: "2012 ~ 2014",
    description: 'I was a Support Intern at the "Suporte & Sustentação" team.',
    responsibilities: [
      {
        text: "Provided technical support to users of the company's systems;",
        resume: true,
      },
      {
        text: "Configured and monitored infrastructure on Linux and Windows servers;",
        resume: true,
      },
      { text: "Compiled team reports;", resume: true },
      {
        text: "Offered infrastructure support to the company's employees.",
        resume: true,
      },
    ],
    biggestChallenge:
      "To simultaneously learn a multitude of new concepts and balance them with my university commitments.",

    hasBlackLogo: true,
  },
];
