import { SuspenseLoading } from "@/components/main/loading/loading";
import { getpreviewProjects } from "@/components/main/projectsPreview/api";
import { ProjectsPreview } from "@/components/main/projectsPreview/projectsPreview";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { Suspense } from "react";
import { getProject } from "./api";
import SanityContent from "./components/sanityContent";
import "./projectPage.css";

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  const projects: PreviewProjectsType[] = (await getpreviewProjects()).filter(
    (project: PreviewProjectsType) => project.currentSlug !== params.id
  );

  return (
    <Suspense fallback={<SuspenseLoading />}>
      <div className="project-page">
        <header className="project-page__header">
          <h1 className="project-page__header__title">
            {project.previewLogo && (
              <Image
                src={urlFor(project.previewLogo)}
                width={50}
                height={50}
                alt="logo"
                className="logo-image"
              />
            )}
            {project.title}
          </h1>
          <p className="project-page__header__subtitle">
            {project.bigDescription}
          </p>
          <img
            src={urlFor(project.titleImage)}
            alt="alt"
            className="header-image"
          />
          <blockquote className="project-page__header__quote">
            ({project.imageDescription})
          </blockquote>
        </header>

        <SanityContent value={project.content} />

        {project.mockupImage && (
          <div className="mockup-images">
            <h2>Mockup</h2>
            <p>Below you can see some mockups of the project</p>
            <img src={urlFor(project.mockupImage)} alt="alt" />
          </div>
        )}

        {project.images && (
          <div className="images-gallery">
            <h2>More images</h2>
            <p>Gallery showcasing the project</p>
            <div className="images">
              {project.images.map((image: any, index: number) => {
                return <img src={urlFor(image)} alt="gallery image" />;
              })}
            </div>
          </div>
        )}

        <ProjectsPreview title={"Other projects"} projects={projects} />
        {!project && "No project found with that id."}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Suspense>
  );
}
