"use client";

import { usePathname } from "next/navigation";

import {
  getNotFoundContent,
  type NotFoundContent,
} from "@/app/_content/not-found";
import { getCurrentLang, type Lang } from "@/i18n-config";
import { getLocalizedContent } from "@/app/_hooks/useLocalizedContent";

export type LocalizedNotFoundContent = NotFoundContent & { lang: Lang };

export function useNotFoundContent(): LocalizedNotFoundContent {
  const pathname = usePathname();
  const lang = getCurrentLang(pathname);

  return getLocalizedContent(lang, getNotFoundContent);
}
