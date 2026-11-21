"use client";

import {
  getSkillsContent,
  type SkillContent,
} from "@/app/_content/skills";
import {
  useLocalizedContent,
  type LocalizedContent,
} from "@/app/_hooks/useLocalizedContent";

export type LocalizedSkillsContent = LocalizedContent<SkillContent>;

export function useSkillsContent(): LocalizedSkillsContent {
  return useLocalizedContent(getSkillsContent);
}
