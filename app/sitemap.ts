import { BASE_URL } from "@/lib/consts";
import { MetadataRoute } from "next";
import { getAllProjects } from "./projects/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects();
  const dynamicRoutes: MetadataRoute.Sitemap = projects.map(
    ({ currentSlug: projectSlugID, publishedDate }) => ({
      url: `${BASE_URL}/projects/${projectSlugID}`,
      lastModified: publishedDate
        ? new Date(publishedDate).toISOString()
        : new Date().toISOString(),
      priority: 0.9,
      changeFrequency: "monthly",
    }),
  );

  const staticRoutes: MetadataRoute.Sitemap = ["", "/projects", "/cv"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: "monthly",
    }),
  );

  return [...staticRoutes, ...dynamicRoutes];
}
