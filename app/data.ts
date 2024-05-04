type AuthorType = {
  firstName: string;
  lastName: string;
  headline: string;
};

export const author: AuthorType = {
  firstName: "Daniel",
  lastName: "Xavier",
  headline: "Technical Lead | JavaScript | React | MBA, Team Leadership",
};

type MenuType = {
  href: string;
  title: string;
};

export const menu: MenuType[] = [
  { href: "/experience", title: "Experience" },
  { href: "/education", title: "Education" },
  { href: "/skills", title: "Skills" },
  { href: "/recommendations", title: "Recommendations" },
];
