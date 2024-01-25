import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
export const sanityClient = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "6tduccgv",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);
