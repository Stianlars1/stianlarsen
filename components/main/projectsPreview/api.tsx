import { sanityClient } from "@/lib/sanity";

export const getpreviewProjects = async (): Promise<PreviewProjectsType[]> => {
  const sanityQuery = `*[_type == "project"] | order(_createdAt desc) {
      title,
        smallDescription,
      "currentSlug": slug.current,
      titleImage,
      previewLogo,
      previewLogoBackgroundColor
    }`;

  const data = await sanityClient.fetch(sanityQuery);
  return data;
};
