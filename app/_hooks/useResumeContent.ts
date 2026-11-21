"use client";

import { getResumeContent, type ResumeContent } from "@/app/_content/resume";
import {
  useLocalizedContent,
  type LocalizedContent,
} from "@/app/_hooks/useLocalizedContent";

export type LocalizedResumeContent = LocalizedContent<ResumeContent>;

export function useResumeContent(): LocalizedResumeContent {
  return useLocalizedContent(getResumeContent);
}
