"use client";

import { useParams } from "next/navigation";

import {
  getSkillsContent,
  type SkillContent,
} from "@/app/_content/skills";
import type { Lang } from "@/i18n-config";

export type LocalizedSkillsContent = SkillContent & { lang: Lang };

export function useSkillsContent(): LocalizedSkillsContent {
  const { lang } = useParams<{ lang: Lang }>();

  return {
    lang,
    ...getSkillsContent(lang),
  };
}
