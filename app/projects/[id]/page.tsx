import { getpreviewProjects } from "@/components/main/projectsPreview/api";
import { ProjectsPreview } from "@/components/main/projectsPreview/projectsPreview";
import { SuspenseLoading } from "@/components/main/suspenseLoading/suspenseLoading";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getProject } from "./api";
import SanityContentRenderer from "./components/SanityContentRenderer";
import { CreatedWith } from "./components/createdWith";
import SanityContent from "./components/sanityContent";
import "./projectPage.css";
type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.id.replace(/-/g, " ");
  const project = await getProject(params.id);

  return {
    title: slug,
    description: project.smallDescription,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  const projects: PreviewProjectsType[] = (await getpreviewProjects()).filter(
    (project: PreviewProjectsType) => project.currentSlug !== params.id
  );

  return (
    <Suspense fallback={<SuspenseLoading />}>
      <div className="project-page">
        <header className="project-page__header">
          <h1 className="project-page__header__title">{project.title}</h1>
          {project.publishedDate && (
            <p className="project-page__header__published">
              {project.previewLogo && (
                <Image
                  src={urlFor(project.previewLogo)}
                  width={24}
                  height={24}
                  alt="logo"
                  className="logo-image"
                  priority={true}
                />
              )}
              <span tabIndex={0}>
                Published {getSanityDate(project.publishedDate)}
              </span>
            </p>
          )}

          {project?.website && (
            <Button
              asChild
              type="button"
              className="project-page__header__websiteLink"
            >
              <Link
                aria-label={`Go to the website of ${project.title}`}
                href={project.website}
              >
                Check out the website
              </Link>
            </Button>
          )}

          <p className="project-page__header__subtitle">
            {project.bigDescription}
          </p>

          <Image
            src={urlFor(project.titleImage)}
            alt="title-image"
            className="header-image"
            width={0}
            height={0}
            sizes="70vw"
            style={{ width: "70%", height: "auto" }} // optional
            priority={true}
          />
          <figcaption
            className="project-page__header__quote"
            style={{ width: "70%" }}
          >
            (<SanityContentRenderer value={project.imageDescription} />)
          </figcaption>
        </header>

        <SanityContent value={project.content} />

        {project?.techStack && (
          <>
            <CreatedWith techStack={project.techStack} />
          </>
        )}

        {project.mockupImage && (
          <div className="mockup-images">
            <h2>Mockup</h2>
            <p>Below you can see some mockups of the project</p>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                alt="mock-image"
                src={urlFor(project.mockupImage)}
                className="image-shadow"
                width={0}
                height={0}
                sizes="70vw"
                style={{ width: "70%", height: "auto" }} // optional
                loading="lazy"
              />
            </div>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="images-gallery">
            <h2>More images</h2>
            <p>Gallery showcasing the project</p>
            <div className="images-gallery__images">
              {project.images.map((image: any, index: number) => {
                return (
                  <Image
                    key={index}
                    alt={`gallery image ${index + 1}`}
                    className="images-gallery__images__gallery-image image-shadow"
                    src={urlFor(image)}
                    width={0}
                    height={0}
                    sizes="70vw"
                    style={{ width: "70%", height: "auto" }}
                    loading="lazy"
                  />
                );
              })}
            </div>
          </div>
        )}

        <ProjectsPreview
          title={"Other projects"}
          projects={projects}
          noDelay={true}
        />
        {!project && "No project found with that id."}
      </div>
    </Suspense>
  );
}

const getSanityDate = (publishedDate: string) => {
  return format(new Date(publishedDate), "dd.MM.yyyy", {
    locale: nb,
  });
};
