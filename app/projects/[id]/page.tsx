import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { getProject } from "./api";

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.smallDescription}</p>
      <Image
        src={urlFor(project.titleImage)}
        width={100}
        height={100}
        alt="alt"
      />
      <Image
        src={urlFor(project.previewLogo)}
        width={100}
        height={100}
        alt="alt"
      />
      <Image
        src={urlFor(project.mockupImage)}
        width={100}
        height={100}
        alt="alt"
      />
      <p>{project.previewLogoBackgroundColor}</p>
      {!project && "No project found with that id."}
    </div>
  );
}
