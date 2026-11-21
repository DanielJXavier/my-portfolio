import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

import {
  chosenHardSkills,
  chosenSoftSkills,
  hardSkills,
  softSkills,
  type SkillInterface,
} from "./shared";

export type SkillLocale = {
  title: string;
  menu: { all: string; hard: string; soft: string };
  soft: Record<string, string>;
  bottomText: string;
};

export type SkillContent = {
  title: string;
  menu: SkillLocale["menu"];
  hardSkills: SkillInterface[];
  softSkills: Array<{ key: string; name: string; size: number }>;
  bottomText: string;
  chosenHardSkills: string[];
  chosenSoftSkills: string[];
};

const locales: Record<Lang, SkillLocale> = { en, pt };

function validateLocaleKeys(lang: Lang, locale: SkillLocale) {
  const sharedIds = softSkills.map(({ key }) => key);
  const sharedIdSet = new Set(sharedIds);
  const localeIds = Object.keys(locale.soft);
  const localeIdSet = new Set(localeIds);
  const missingIds = sharedIds.filter((key) => !localeIdSet.has(key));
  const unknownIds = localeIds.filter((key) => !sharedIdSet.has(key));
  const hasDuplicateSharedIds = sharedIdSet.size !== sharedIds.length;

  if (hasDuplicateSharedIds || missingIds.length || unknownIds.length) {
    throw new Error(
      [
        `Skills content keys do not match for locale "${lang}".`,
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

function validateResumeSkillKeys() {
  const hardSkillIds = new Set(hardSkills.map(({ key }) => key));
  const softSkillIds = new Set(softSkills.map(({ key }) => key));
  const unknownHardSkillIds = chosenHardSkills.filter(
    (key) => !hardSkillIds.has(key),
  );
  const unknownSoftSkillIds = chosenSoftSkills.filter(
    (key) => !softSkillIds.has(key),
  );

  if (unknownHardSkillIds.length || unknownSoftSkillIds.length) {
    throw new Error(
      [
        unknownHardSkillIds.length
          ? `Unknown resume hard skills: ${unknownHardSkillIds.join(", ")}`
          : "",
        unknownSoftSkillIds.length
          ? `Unknown resume soft skills: ${unknownSoftSkillIds.join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }
}

validateResumeSkillKeys();

export function getSkillsContent(lang: Lang): SkillContent {
  const locale = locales[lang];

  return {
    title: locale.title,
    menu: locale.menu,
    hardSkills: [...hardSkills],
    softSkills: softSkills.map((skill) => ({
      ...skill,
      name: locale.soft[skill.key],
    })),
    bottomText: locale.bottomText,
    chosenHardSkills: [...chosenHardSkills],
    chosenSoftSkills: [...chosenSoftSkills],
  };
}
