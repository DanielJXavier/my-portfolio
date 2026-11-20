"use client";

import { useParams } from "next/navigation";

import {
  getExperienceContent,
  type ExperienceContent,
} from "@/app/_content/experience";
import type { Lang } from "@/i18n-config";

export type LocalizedExperienceContent = ExperienceContent & { lang: Lang };

export function useExperienceContent(): LocalizedExperienceContent {
  const { lang } = useParams<{ lang: Lang }>();

  return {
    lang,
    ...getExperienceContent(lang),
  };
}
