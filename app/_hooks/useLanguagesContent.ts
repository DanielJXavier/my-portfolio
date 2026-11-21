"use client";

import { useParams } from "next/navigation";

import {
  getLanguagesContent,
  type LanguageContent,
} from "@/app/_content/languages";
import type { Lang } from "@/i18n-config";

export type LocalizedLanguagesContent = LanguageContent & { lang: Lang };

export function useLanguagesContent(): LocalizedLanguagesContent {
  const { lang } = useParams<{ lang: Lang }>();

  return {
    lang,
    ...getLanguagesContent(lang),
  };
}
