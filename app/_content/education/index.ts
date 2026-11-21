import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";
import { validateLocaleKeys } from "@/app/_content/_utils/validate-locale-keys";

import { education } from "./shared";

export type EducationLocaleItem = {
  fieldOfStudy: string;
  degree: string;
  subjects: string[];
};

export type EducationLocale = {
  title: string;
  items: Record<string, EducationLocaleItem>;
  imageAltText: {
    prefix: string;
    sufix: string;
  };
};

export type EducationContent = Omit<EducationLocale, "items"> & {
  items: Array<(typeof education)[number] & EducationLocaleItem>;
};

const locales: Record<Lang, EducationLocale> = { en, pt };

for (const lang of Object.keys(locales) as Lang[]) {
  validateLocaleKeys(
    "Education",
    lang,
    education,
    locales[lang].items,
    ({ schoolId }) => schoolId,
  );
}

export function getEducationContent(lang: Lang): EducationContent {
  const locale = locales[lang];

  return {
    title: locale.title,
    imageAltText: locale.imageAltText,
    items: education.map((item) => ({
      ...item,
      ...locale.items[item.schoolId],
    })),
  };
}
