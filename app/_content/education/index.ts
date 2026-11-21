import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

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

function validateLocaleKeys(lang: Lang, locale: EducationLocale) {
  const sharedIds = education.map(({ schoolId }) => schoolId);
  const uniqueSharedIds = new Set(sharedIds);
  const localeIds = Object.keys(locale.items);
  const localeIdSet = new Set(localeIds);

  const missingIds = sharedIds.filter((schoolId) => !localeIdSet.has(schoolId));
  const unknownIds = localeIds.filter((schoolId) => !uniqueSharedIds.has(schoolId));
  const hasDuplicateSharedIds = uniqueSharedIds.size !== sharedIds.length;

  if (hasDuplicateSharedIds || missingIds.length || unknownIds.length) {
    throw new Error(
      [
        `Education content keys do not match for locale "${lang}".`,
        missingIds.length ? `Missing: ${missingIds.join(", ")}` : "",
        unknownIds.length ? `Unknown: ${unknownIds.join(", ")}` : "",
        hasDuplicateSharedIds ? "Shared entries contain duplicate IDs." : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }
}

for (const lang of Object.keys(locales) as Lang[]) {
  validateLocaleKeys(lang, locales[lang]);
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
