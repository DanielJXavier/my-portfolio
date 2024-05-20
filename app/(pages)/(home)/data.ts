type ParagraphType = {
  text: string;
  resume: boolean;
};

export const paragraphs: ParagraphType[] = [
  {
    text: "With a decade-long web development journey and an MBA in strategic people management, I have honed my skills to become a dedicated technical leader, balancing hard and soft skills to perform beyond expectations.",
    resume: true,
  },
  {
    text: "My passion is creating elegant solutions to complex problems, leveraging my experience in JavaScript and its associated frameworks and libraries, such as React.js and Node.js, which I have mastered over the years.",
    resume: true,
  },
  {
    text: "I also love teaching, inspiring, and helping others, so I've dedicated my last few years to leading and mentoring teams of talented engineers working on complex projects like search and recommendation systems and the Design System of the OLX platform, a global leader in online classifieds.",
    resume: true,
  },
  {
    text: "In these previous roles, I acquired and applied management skills such as emotional intelligence, conflict resolution, resilience, and also agile methodologies. These skills not only gave me a competitive edge but also transformed me into a well-rounded professional. I am driven by an insatiable curiosity to learn new things and a willingness to face new challenges.",
    resume: true,
  },
  {
    text: "In addition to technology, I like to photograph landscapes, practice adventure sports, and visit new places whenever possible. I'm always open to exploring new opportunities and making meaningful connections. Let's talk!",
    resume: false,
  },
];

type LinksType = {
  [key: string]: string;
};

export const links: LinksType = {
  email: "dxdanielxavier@gmail.com",
  whatsApp: "+55 31 99732-5804",
  linkedIn: "danieljxavier",
  gitHub: "DanielJXavier",
  instagram: "danieljxavier",
  site: "danielxavier.dev",
};
