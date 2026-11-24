"use client";

import {
  getLanguagesContent,
  type LanguageContent,
} from "@/app/_content/languages";
import {
  useLocalizedContent,
  type LocalizedContent,
} from "@/app/_hooks/useLocalizedContent";

export type LocalizedLanguagesContent = LocalizedContent<LanguageContent>;

export function useLanguagesContent(): LocalizedLanguagesContent {
  return useLocalizedContent(getLanguagesContent);
}
