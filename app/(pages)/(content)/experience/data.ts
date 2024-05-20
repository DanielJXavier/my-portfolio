export interface ExperienceInterface {
  role: string;
  companyId: string;
  companyName: string;
  year: string;
  description: string;
  resposibilities: {
    text: string;
    resume: boolean;
  }[];
  greatestChallenge: string;
  resume: boolean;
  hasBlackLogo?: boolean;
}

export const experience: ExperienceInterface[] = [
  {
    role: "Software Engineering Manager",
    companyId: "olx",
    companyName: "OLX",
    year: "2024",
    description: 'I was the leader of the "Ads Seller Experience" team.',
    resposibilities: [
      {
        text: "Spearheading a team of 9 developers, serving as a mentor and guiding light;",
        resume: true,
      },
      {
        text: "Guaranteeing the successful execution of the platform's registration and ad management system roadmap;",
        resume: true,
      },
      {
        text: "Cultivating a high level of engagement within the team;",
        resume: false,
      },
      {
        text: 'Conducting personalized "1:1s" to guide team members through their performance cycles;',
        resume: false,
      },
      {
        text: "Implementing agile methodologies and leading team ceremonies to ensure a streamlined workflow;",
        resume: true,
      },
      {
        text: "Collaborating closely with the Product Manager to facilitate informed and effective product decisions;",
        resume: false,
      },
    ],
    greatestChallenge:
      "Navigating the high-pressure demands of leadership for swift deliveries.",
    resume: true,
  },
  {
    role: "Software Engineering Manager",
    companyId: "olx",
    companyName: "OLX",
    year: "2023",
    description:
      'I was the leader of the "Search & Recommendation" team¹ and the "Design System" chapter².',
    resposibilities: [
      {
        text: "Spearheading a team of 8 developers, serving as a mentor and guiding light;¹",
        resume: true,
      },
      {
        text: "Ensuring the successful execution of the search and recommendation systems roadmap;¹",
        resume: true,
      },
      {
        text: "Structuring the team and proposing an optimized framework to support the strategic plan for the upcoming year;¹",
        resume: true,
      },
      {
        text: "Demystifying the company's understanding of search and recommendation subjects;¹",
        resume: false,
      },
      {
        text: "Indirectly supervising all developers (9 devs) in the chapter, fostering a sense of unity and direction;²",
        resume: false,
      },
      {
        text: "Cultivating engagement within the chapter and ensuring valuable deliveries despite working only once a week;²",
        resume: false,
      },
    ],
    greatestChallenge:
      "Balancing the substantial resposibilities of both the team¹ and the chapter² simultaneously.",
    resume: true,
  },
  {
    role: "Software Engineering Manager",
    companyId: "olx",
    companyName: "OLX",
    year: "2022~2023",
    description: 'I was the leader of the "Design System" team.',
    resposibilities: [
      {
        text: "Leading a team of 9 developers, serving as a point of reference;",
        resume: true,
      },
      {
        text: "Collaborating with the Design Manager to make optimal product decisions and establish a roadmap;",
        resume: true,
      },
      {
        text: "Guaranteeing the delivery of the Design System roadmap;",
        resume: true,
      },
      {
        text: "Collecting and analyzing data to validate the project's value to the company;",
        resume: false,
      },
      {
        text: "Ensuring the continuous evolution of the Design System and its adoption by other teams;",
        resume: false,
      },
      {
        text: "Developing documentation and processes for contributing to the Design System project and managing its version;",
        resume: false,
      },
    ],
    greatestChallenge:
      "Simultaneously assuming multiple roles, including Engineering Manager, Product Manager, Data Analyst, among others.",
    resume: true,
  },
  {
    role: "Software Engineering Manager",
    companyId: "olx",
    companyName: "OLX",
    year: "2021~2022",
    description: 'I was the leader of the "Advertising" team.',
    resposibilities: [
      {
        text: "Directly leading a team of 7 developers, serving as a key reference;",
        resume: true,
      },
      {
        text: "Ensuring the delivery of both direct and indirect Advertising roadmaps for the platform;",
        resume: true,
      },
      {
        text: "Recruiting new professionals to increase productive capacity;",
        resume: true,
      },
      {
        text: "Actively partnering with the Product Manager to prioritize and develop optimal initiatives;",
        resume: false,
      },
      {
        text: "Proposing a new structure for the Advertising area to enhance results;",
        resume: false,
      },
    ],
    greatestChallenge:
      "Managing high expectations related to Advertising revenue results.",
    resume: true,
  },
  {
    role: "CTO & Partner",
    companyId: "meaning",
    companyName: "Meaning",
    year: "2023",
    description: "I held the position of CTO and co-founder at the startup.",
    resposibilities: [
      {
        text: "Crafting the company's technical vision and product strategy;",
        resume: true,
      },
      { text: "Architecting the solution from the ground up;", resume: true },
      {
        text: "Refining the product's technical specifications;",
        resume: true,
      },
      { text: "Developing a Proof of Concept project;", resume: false },
    ],
    greatestChallenge:
      'Converting a highly "human-centric" project, rooted in personal consultancy, into a systematic approach.',
    resume: true,
  },
  {
    role: "Development Coordinator",
    companyId: "softplan",
    companyName: "Softplan",
    year: "2020~2021",
    description: 'I was the leader of the "Estônia" team.',
    resposibilities: [
      {
        text: "Direct leadership of a multidisciplinary software development team, inclusive of Software Architects, Developers, Quality Assurance Analysts, Product Owners, Business Analysts, and Agile Masters;",
        resume: true,
      },
      {
        text: "Mentoring and development of both direct and indirect employees, utilizing techniques such as One-on-One and feedforward;",
        resume: false,
      },
      {
        text: 'Planning and execution of deliveries for the most critical modules of the "SAJ" system;',
        resume: true,
      },
      {
        text: "Daily application of situational leadership to maximize the potential of those under my guidance;",
        resume: false,
      },
      {
        text: "Structuring and continuous enhancement of the team's workflow using agile software development methodologies;",
        resume: true,
      },
      {
        text: "Creation of formulas and metrics to accurately gauge the team's capacity, thereby bringing predictability to deliveries;",
        resume: false,
      },
      {
        text: "Mapping of effective talent retention strategies;",
        resume: false,
      },
    ],
    greatestChallenge:
      "Managing a large team (comprising 28 professionals) and overseeing critical deliveries.",
    resume: true,
  },
  {
    role: "Tech Lead",
    companyId: "softplan",
    companyName: "Softplan",
    year: "2019~2020",
    description: "I was the technical leader of the Front-End chapter.",
    resposibilities: [
      {
        text: 'Development of the new "SAJ" system, constructed using React JS, .Net, and GraphQL;',
        resume: true,
      },
      {
        text: "Oversight of the deliveries and deployment of 17 modules of the system;",
        resume: true,
      },
      {
        text: "Provision of training in HTML, CSS, JavaScript, React JS, GraphQL, and unit tests;",
        resume: false,
      },
      {
        text: "Leadership of a team of 10 Front-End React developers;",
        resume: true,
      },
      { text: "Recruitment of new employees for the company;", resume: false },
      { text: "Selection of new contractor professionals;", resume: false },
      {
        text: "Professional development through One-on-one sessions, Feedbacks, Feedforwards, and Mentoring;",
        resume: false,
      },
    ],
    greatestChallenge:
      "Acquiring leadership skills and mastering people management.",
    resume: true,
  },
  {
    role: "Senior Front-End Developer",
    companyId: "softplan",
    companyName: "Softplan",
    year: "2018~2019",
    description: 'I was a Senior Front-End developer at the "França" team.',
    resposibilities: [
      {
        text: 'Development of new features for the "e-SAJ" portal utilizing React JS and GraphQL;',
        resume: true,
      },
      {
        text: 'Creation of new features for the "SAJ Tribunais" system using React JS and GraphQL;',
        resume: true,
      },
    ],
    greatestChallenge:
      "Managing all the deliveries of the project as the sole Front-End developer.",
    resume: true,
  },
  {
    role: "Senior Front-End Developer",
    companyId: "hotmart",
    companyName: "Hotmart",
    year: "2018",
    description:
      'I was a Senior Front-End developer at the "Growth Hacking" team.',
    resposibilities: [
      {
        text: "Developing systems to address the company's internal needs and automate tasks, leveraging technologies such as Vue.js, and Node.js;",
        resume: true,
      },
      {
        text: "Creating a Proof of Concept (POC) that introduced a simplified method for product registration on the platform;",
        resume: true,
      },
    ],
    greatestChallenge:
      "Balancing the need to comprehend customer requirements clearly while simultaneously coding.",
    resume: false,
  },
  {
    role: "Mid Level Front-End Developer",
    companyId: "hotmart",
    companyName: "Hotmart",
    year: "2017~2018",
    description:
      'I was a Mid Level Front-End developer at the "User Acquisition" team.',
    resposibilities: [
      {
        text: "Designing a system to generate blog post images using components and pre-defined templates, thereby enhancing the productivity of the design team;",
        resume: true,
      },
      {
        text: 'Developing a high-performance caching system for the "Hotmart blog" (WordPress), which resulted in a 300% increase in performance;',
        resume: true,
      },
      {
        text: 'Implementing the Arabic version of the "Hotmart blog";',
        resume: true,
      },
    ],
    greatestChallenge:
      "Conceptualizing and developing complex solutions from the ground up.",
    resume: false,
  },
  {
    role: "Entry Level Front-End Developer",
    companyId: "hotmart",
    companyName: "Hotmart",
    year: "2016~2017",
    description:
      'I was an Entry Level Front-End developer at the "User Acquisition" team.',
    resposibilities: [
      {
        text: 'Developing a new WordPress theme for the "Hotmart blog" utilizing only HTML5, CSS Grid Layout, and Vanilla JS;',
        resume: true,
      },
      {
        text: 'Implementing the new layout for the "Hotmart blog";',
        resume: true,
      },
      {
        text: "Creating custom features within the WordPress admin interface;",
        resume: true,
      },
    ],
    greatestChallenge:
      "Acquiring new development skills and applying them to complex projects.",
    resume: false,
  },
  {
    role: "Support Analyst",
    companyId: "sydle",
    companyName: "Sydle",
    year: "2014~2016",
    description: 'I was a Support Analyst at the "Suporte & Sustentação" team.',
    resposibilities: [
      {
        text: "Spearheading the development of web projects utilizing WordPress and Magento;",
        resume: true,
      },
      {
        text: "Facilitating the modeling and automation of the company's internal processes through BPMN;",
        resume: true,
      },
      {
        text: "Providing comprehensive technical support to users of the company's systems;",
        resume: true,
      },
      {
        text: "Overseeing the configuration and monitoring of both Linux and Windows servers.",
        resume: true,
      },
    ],
    greatestChallenge:
      "Rapidly acquiring development skills and contributing to legacy projects.",
    resume: false,
    hasBlackLogo: true,
  },
  {
    role: "Support Intern",
    companyId: "sydle",
    companyName: "Sydle",
    year: "2012~2014",
    description: 'I was a Support Intern at the "Suporte & Sustentação" team.',
    resposibilities: [
      {
        text: "Providing technical support to users of the company's systems;",
        resume: true,
      },
      {
        text: "Configuring and monitoring infrastructure on Linux and Windows servers;",
        resume: true,
      },
      { text: "Compiling team reports;", resume: true },
      {
        text: "Offering infrastructure support to the company's employees.",
        resume: true,
      },
    ],
    greatestChallenge:
      "Simultaneously learning a multitude of new concepts and balancing them with my university commitments.",
    resume: false,
    hasBlackLogo: true,
  },
];
