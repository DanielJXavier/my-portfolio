"use client";

import { getSiteContent, type SiteContent } from "@/app/_content/site";
import {
  useLocalizedContent,
  type LocalizedContent,
} from "@/app/_hooks/useLocalizedContent";

export type LocalizedSiteContent = LocalizedContent<SiteContent>;

export function useSiteContent(): LocalizedSiteContent {
  return useLocalizedContent(getSiteContent);
}
