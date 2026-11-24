"use client";

import { getHomeContent, type HomeContent } from "@/app/_content/home";
import {
  useLocalizedContent,
  type LocalizedContent,
} from "@/app/_hooks/useLocalizedContent";

export type LocalizedHomeContent = LocalizedContent<HomeContent>;

export function useHomeContent(): LocalizedHomeContent {
  return useLocalizedContent(getHomeContent);
}
