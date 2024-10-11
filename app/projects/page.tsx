import { SuspenseLoading } from "@/components/main/suspenseLoading/suspenseLoading";
import { Metadata } from "next";
import { Suspense } from "react";
import { getAllProjects } from "./api";
import { ProjectsWrapper } from "./components/projectsWrapper";
import "./css/projectsPage.css";

export const revalidate = 0; // Disable caching
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Projects",
  description: "My projects and work",
};
export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <Suspense fallback={<SuspenseLoading />}>
      <div className="projects-page">
        <header className="projects-page__header">
          <h1
            className="animate-fadeInDown-1 projects-page__header__title "
            aria-label="Projects page"
          >
            Projects
          </h1>
          <p className="animate-fadeInDown-2 projects-page__header__description">
            Explore my portfolio, showcasing innovative projects and full-stack
            expertise. For more details, navigate and interact with the cards
            below.
          </p>
        </header>

        {projects && <ProjectsWrapper projects={projects} />}
      </div>
    </Suspense>
  );
}
