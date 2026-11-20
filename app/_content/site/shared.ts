export const author = {
  firstName: "Daniel",
  lastName: "Xavier",
};

export const contact = {
  email: "dxdanielxavier@gmail.com",
  whatsApp: "+55 31 99732-5804",
  linkedIn: "danieljxavier",
  gitHub: "DanielJXavier",
  instagram: "danieljxavier",
  site: "danielxavier.dev",
};

export const menu = [
  { href: "/experience", key: "experience" },
  { href: "/education", key: "education" },
  { href: "/skills", key: "skills" },
  { href: "/recommendations", key: "recommendations" },
] as const;

export type SiteMenuKey = (typeof menu)[number]["key"];
