import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { sanityClient, urlFor } from "./libs/sanity";

const getpreviewProjects = async (): Promise<PreviewProjectsType[]> => {
  const sanityQuery = `*[_type == "project"] | order(_createdAt desc) {
    title,
      smallDescription,
    "currentSlug": slug.current,
    titleImage,
    previewLogo
  }`;

  const data = await sanityClient.fetch(sanityQuery);
  return data;
};

export default async function Home() {
  return (
    <>
      <First />
      <Second />
    </>
  );
}

const First = () => {
  return <section className="w-full h-dvh bg-muted ">FIRST</section>;
};

const Second = async () => {
  const data: PreviewProjectsType[] = await getpreviewProjects();
  return (
    <section className="w-full h-dvh flex ">
      {data.map((project: PreviewProjectsType) => {
        return (
          <Card key={project.currentSlug} className="h-fit">
            <div className="flex items-center gap-2 justify-center bg-secondary-foreground">
              <Image
                src={urlFor(project.previewLogo).url()}
                alt={`image of ${project.title}`}
                width={35}
                height={35}
                className="object-cover"
              />{" "}
              {project.title}
            </div>
            <CardContent>{project.smallDescription}</CardContent>
          </Card>
        );
      })}
    </section>
  );
};
