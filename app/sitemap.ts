import { MetadataRoute } from "next";
import { WORK } from "./constants";

const SITE = "https://portfolio.princdev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // each project's page
    ...WORK.map((p) => ({
      url: `${SITE}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
