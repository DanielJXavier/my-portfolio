import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.danielxavier.dev/en",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
      // alternates: {
      //   languages: {
      //     pt: "https://www.danielxavier.dev/pt",
      //   },
      // },
    },
    {
      url: "https://www.danielxavier.dev/en/experience",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
      // alternates: {
      //   languages: {
      //     pt: "https://www.danielxavier.dev/pt/experience",
      //   },
      // },
    },
    {
      url: "https://www.danielxavier.dev/en/education",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
      // alternates: {
      //   languages: {
      //     pt: "https://www.danielxavier.dev/pt/education",
      //   },
      // },
    },
    {
      url: "https://www.danielxavier.dev/en/skills",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
      // alternates: {
      //   languages: {
      //     pt: "https://www.danielxavier.dev/pt/skills",
      //   },
      // },
    },
    {
      url: "https://www.danielxavier.dev/en/recommendations",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
      // alternates: {
      //   languages: {
      //     pt: "https://www.danielxavier.dev/pt/recommendations",
      //   },
      // },
    },
    {
      url: "https://www.danielxavier.dev/en/resume",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
      // alternates: {
      //   languages: {
      //     pt: "https://www.danielxavier.dev/pt/resume",
      //   },
      // },
    },
  ];
}
