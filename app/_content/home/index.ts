import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import { Lang } from "@/i18n-config";
import { author, contact } from "@/app/_content/site";

const PROFILE_IMAGE_PATH = "/images/profile.jpg";

export type HomeContent = {
  author: typeof author;
  contact: typeof contact;
  greeting: string;
  summary: string[];
  image: {
    src: string;
    alt: string;
  };
};

type HomeLocale = Pick<HomeContent, "greeting" | "summary"> & {
  imageAltText: string;
};

const locales: Record<Lang, HomeLocale> = { en, pt };

export function getHomeContent(lang: Lang): HomeContent {
  const { greeting, summary, imageAltText } = locales[lang];

  return {
    author,
    contact,
    greeting,
    summary,
    image: { src: PROFILE_IMAGE_PATH, alt: imageAltText },
  };
}
