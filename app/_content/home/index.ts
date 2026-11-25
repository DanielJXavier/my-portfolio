import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import { Lang } from "@/i18n-config";

import { getSiteContent } from "@/app/_content/site";

const PROFILE_IMAGE_PATH = "/images/profile.jpg";

export type HomeContent = {
  author: ReturnType<typeof getSiteContent>["author"];
  contact: ReturnType<typeof getSiteContent>["contact"];
  greeting: string;
  aboutProject: {
    title: string;
    sourceLinkLabel: string;
    toolsLabel: string;
    metricsLabel: string;
    badges: {
      qualityGate: string;
      coverage: string;
      security: string;
      reliability: string;
      maintainability: string;
    };
  };
  summary: string[];
  image: {
    src: string;
    alt: string;
  };
};

type HomeLocale = Pick<HomeContent, "greeting" | "aboutProject" | "summary"> & {
  imageAltText: string;
};

const locales: Record<Lang, HomeLocale> = { en, pt };

export function getHomeContent(lang: Lang): HomeContent {
  const { greeting, aboutProject, summary, imageAltText } = locales[lang];
  const { author, contact } = getSiteContent(lang);

  return {
    author,
    contact,
    greeting,
    aboutProject,
    summary,
    image: { src: PROFILE_IMAGE_PATH, alt: imageAltText },
  };
}
