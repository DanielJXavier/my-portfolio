import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

import { validateLocaleKeys } from "@/app/_content/_utils/validate-locale-keys";

import type { ExperienceInterface } from "./shared";
import { experience } from "./shared";

export type ExperienceLocaleItem = {
  role: string;
  accomplishments: string[];
};

export type ExperienceLocale = {
  title: string;
  menu: {
    simple: string;
    detailed: string;
  };
  dateSeparatorText: string;
  endDateText: string;
  mainStackTitle: string;
  previousItemsText: {
    prefix: string;
    sufix: string;
  };
  imageAltText: {
    prefix: string;
    sufix: string;
  };
  items: Record<string, ExperienceLocaleItem>;
};

export type ExperienceContent = Omit<ExperienceLocale, "items"> & {
  items: Array<ExperienceInterface & ExperienceLocaleItem>;
};

const locales: Record<Lang, ExperienceLocale> = { en, pt };

for (const lang of Object.keys(locales) as Lang[]) {
  validateLocaleKeys(
    "Experience",
    lang,
    experience,
    locales[lang].items,
    ({ key }) => key,
  );
}

export function getExperienceContent(lang: Lang): ExperienceContent {
  const locale = locales[lang];

  return {
    ...locale,
    items: experience.map((item) => ({
      ...item,
      ...locale.items[item.key],
    })),
  };
}
