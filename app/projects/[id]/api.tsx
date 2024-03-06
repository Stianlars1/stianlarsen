import { sanityClient } from "@/lib/sanity";

export const getProject = async (id: string): Promise<ProjectType> => {
  const sanityQuery = `*[_type == "project" && slug.current == "${id}"][0] {
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
content
  }`;

  const data = await sanityClient.fetch(sanityQuery);
  return data;
};
