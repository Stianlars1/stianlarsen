import { BASE_URL } from "@/lib/consts";
import { MetadataRoute } from "next";
import { getAllProjects } from "./projects/api";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: BASE_URL,
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: `${BASE_URL}/projects`,
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 0.8,
//     },
//   ];
// }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects();
  const projectsMap = projects.map(
    ({ currentSlug: projectSlugID, publishedDate }) => ({
      url: `${BASE_URL}/projects/${projectSlugID}`,
      lastModified: publishedDate
        ? new Date(publishedDate).toISOString()
        : new Date().toISOString(),
    }),
  );

  const routes = ["", "/projects", "/cv"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: "yearly",
  }));

  return [...routes, ...projectsMap];
}
