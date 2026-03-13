import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.max4.sk/",
      lastModified: "2026-03-13",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.max4.sk/ochrana-osobnych-udajov",
      lastModified: "2026-03-13",
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
