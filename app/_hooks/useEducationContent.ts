"use client";

import {
  getEducationContent,
  type EducationContent,
} from "@/app/_content/education";
import {
  useLocalizedContent,
  type LocalizedContent,
} from "@/app/_hooks/useLocalizedContent";

export type LocalizedEducationContent = LocalizedContent<EducationContent>;

export function useEducationContent(): LocalizedEducationContent {
  return useLocalizedContent(getEducationContent);
}
