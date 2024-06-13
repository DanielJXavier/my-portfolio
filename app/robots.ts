import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/resume/",
    },
    sitemap: "https://www.danielxavier.dev/sitemap.xml",
  };
}
