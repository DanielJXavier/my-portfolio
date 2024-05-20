type ParagraphType = {
  text: string;
  resume?: boolean;
};

export const paragraphs: ParagraphType[] = [
  {
    text: "With a decade of web development experience and mastery in JavaScript, React.js, and Node.js, I’ve excelled as a Technical Leader, creating elegant solutions for complex problems.",
    resume: true,
  },
  {
    text: "My leadership extends beyond technical skills, as I’ve mentored teams on intricate projects and honed management skills like emotional intelligence and conflict resolution.",
    resume: true,
  },
  {
    text: "This blend of technical expertise and leadership has shaped me into a well-rounded Front-End focused Technical Leader.",
    resume: true,
  },
  {
    text: "In addition to technology, I like to photograph landscapes, practice adventure sports, and visit new places whenever possible. I'm always open to exploring new opportunities and making meaningful connections. Let's talk!",
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
