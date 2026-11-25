import type { MetadataRoute } from "next";

import {
  getLocalizedAlternates,
  type LocalizedPage,
} from "@/app/_metadata";

const siteUrl = "https://www.danielxavier.dev";

const pages: { page: LocalizedPage; priority: number }[] = [
  { page: "home", priority: 1 },
  { page: "experience", priority: 0.5 },
  { page: "education", priority: 0.5 },
  { page: "skills", priority: 0.5 },
  { page: "recommendations", priority: 0.5 },
  { page: "resume", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap(({ page, priority }) => {
    const { languages } = getLocalizedAlternates(page, "en");

    const localizedUrls = Object.fromEntries(
      Object.entries(languages).map(([lang, path]) => [
        lang,
        new URL(path, siteUrl).toString(),
      ]),
    );

    const alternates = { languages: localizedUrls };

    return Object.values(localizedUrls).map((url) => ({
      url,
      lastModified,
      changeFrequency: "daily" as const,
      priority,
      alternates,
    }));
  });
}
