import { sanityClient } from "@/lib/sanity";

export const getAllProjects = async (): Promise<ProjectType[]> => {
  const sanityQuery = `*[_type == "project"] | order(_createdAt desc) {
      title,
        smallDescription,
      "currentSlug": slug.current,
      titleImage,
      previewLogo,
      previewLogoBackgroundColor,
        mockupImage,
        imageDescription,
        publishedDate,
bigDescription,
images,
content,
techStack,
website
    }`;

  const data = await sanityClient.fetch(sanityQuery);
  return getSorted(data);
};

const getSorted = (projects: ProjectType[]) =>
  projects.sort(
    (a: ProjectType, b: ProjectType) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
