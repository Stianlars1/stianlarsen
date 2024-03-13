import { sanityClient } from "@/lib/sanity";
import { format } from "date-fns";
import { nb } from "date-fns/locale"; // Import the Norwegian locale

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
techStack,
images,
content,
website,
publishedDate
  }`;

  const data = await sanityClient.fetch(sanityQuery);
  return data;
};
