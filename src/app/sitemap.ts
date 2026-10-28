import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolioarsajid.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects/zia-graphics`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/accurobuild`,
      lastModified: new Date("2026-10-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/astore-pos`,
      lastModified: new Date("2026-10-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/zia-ul-quran`,
      lastModified: new Date("2026-10-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/hm-security`,
      lastModified: new Date("2026-10-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/libas-store`,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
