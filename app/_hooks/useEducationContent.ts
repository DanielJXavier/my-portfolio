"use client";

import { useParams } from "next/navigation";

import {
  getEducationContent,
  type EducationContent,
} from "@/app/_content/education";
import type { Lang } from "@/i18n-config";

export type LocalizedEducationContent = EducationContent & { lang: Lang };

export function useEducationContent(): LocalizedEducationContent {
  const { lang } = useParams<{ lang: Lang }>();

  return {
    lang,
    ...getEducationContent(lang),
  };
}
