import en from "./locales/en.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };

import type { Lang } from "@/i18n-config";

import { maxSummaryParagraphs } from "./shared";

export type ResumeLocale = {
  title: string;
  sectionTitles: {
    summary: string;
    skills: string;
    experience: string;
    education: string;
    languages: string;
  };
  locationInfo: {
    city: string;
    state: string;
    country: string;
  };
};

export type ResumeContent = ResumeLocale & { maxSummaryParagraphs: number };

const locales: Record<Lang, ResumeLocale> = { en, pt };

export function getResumeContent(lang: Lang): ResumeContent {
  return {
    ...locales[lang],
    maxSummaryParagraphs,
  };
}
