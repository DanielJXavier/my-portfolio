"use client";

import {
  getExperienceContent,
  type ExperienceContent,
} from "@/app/_content/experience";
import {
  useLocalizedContent,
  type LocalizedContent,
} from "@/app/_hooks/useLocalizedContent";

export type LocalizedExperienceContent = LocalizedContent<ExperienceContent>;

export function useExperienceContent(): LocalizedExperienceContent {
  return useLocalizedContent(getExperienceContent);
}
