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
bigDescription,
images,
content,
techStack,
website,
publishedDate
    }`;

  const data = await sanityClient.fetch(sanityQuery);
  return data;
};
