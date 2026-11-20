"use client";

import { useParams } from "next/navigation";

import { getSiteContent, type SiteContent } from "@/app/_content/site";
import type { Lang } from "@/i18n-config";

export type LocalizedSiteContent = SiteContent & { lang: Lang };

export function useSiteContent(): LocalizedSiteContent {
  const { lang } = useParams<{ lang: Lang }>();

  return {
    lang,
    ...getSiteContent(lang),
  };
}
