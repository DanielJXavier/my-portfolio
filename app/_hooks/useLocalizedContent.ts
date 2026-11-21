"use client";

import { useParams } from "next/navigation";

import type { Lang } from "@/i18n-config";

export type LocalizedContent<T extends object> = T & { lang: Lang };

export function getLocalizedContent<T extends object>(
  lang: Lang,
  getContent: (lang: Lang) => T,
): LocalizedContent<T> {
  return {
    lang,
    ...getContent(lang),
  };
}

export function useLocalizedContent<T extends object>(
  getContent: (lang: Lang) => T,
): LocalizedContent<T> {
  const { lang } = useParams<{ lang: Lang }>();

  return getLocalizedContent(lang, getContent);
}
