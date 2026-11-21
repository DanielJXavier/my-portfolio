import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

import { validateLocaleKeys } from "@/app/_content/_utils/validate-locale-keys";

import type { SkillInterface, SoftSkillKey } from "./shared";

import {
  chosenHardSkills,
  chosenSoftSkills,
  hardSkills,
  softSkills,
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
  softSkills: Array<{
    key: SoftSkillKey;
    name: string;
    size: SkillInterface["size"];
  }>;
  bottomText: string;
  chosenHardSkills: string[];
  chosenSoftSkills: string[];
};

const locales: Record<Lang, SkillLocale> = { en, pt };

for (const lang of Object.keys(locales) as Lang[]) {
  validateLocaleKeys(
    "Skills",
    lang,
    softSkills,
    locales[lang].soft,
    ({ key }) => key,
  );
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

  const issues: string[] = [];

  if (unknownHardSkillIds.length > 0) {
    issues.push(`Unknown resume hard skills: ${unknownHardSkillIds.join(", ")}`);
  }

  if (unknownSoftSkillIds.length > 0) {
    issues.push(`Unknown resume soft skills: ${unknownSoftSkillIds.join(", ")}`);
  }

  if (issues.length === 0) {
    return;
  }

  throw new Error(issues.join("\n"));
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
