import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolioarsajid.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects/zia-graphics`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
