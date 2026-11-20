"use client";

import { useParams } from "next/navigation";

import { getHomeContent, type HomeContent } from "@/app/_content/home";
import type { Lang } from "@/i18n-config";

export type LocalizedHomeContent = HomeContent & { lang: Lang };

export function useHomeContent(): LocalizedHomeContent {
  const { lang } = useParams<{ lang: Lang }>();

  return {
    lang,
    ...getHomeContent(lang),
  };
}
