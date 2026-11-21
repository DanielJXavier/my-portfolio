"use client";

import { useParams } from "next/navigation";

import { getResumeContent, type ResumeContent } from "@/app/_content/resume";
import type { Lang } from "@/i18n-config";

export type LocalizedResumeContent = ResumeContent & { lang: Lang };

export function useResumeContent(): LocalizedResumeContent {
  const { lang } = useParams<{ lang: Lang }>();

  return {
    lang,
    ...getResumeContent(lang),
  };
}
