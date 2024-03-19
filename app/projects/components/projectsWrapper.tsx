import { darkenColor } from "@/components/main/projectsPreview/util";
import Link from "next/link";
import "./projectsWrapper.css";
export const ProjectsWrapper = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <section
      className="projects-wrapper animate-fadeInDown-3"
      aria-label="Projects List"
    >
      {projects.map((project) => {
        const foregroundColor = darkenColor(
          project.previewLogoBackgroundColor,
          -50,
        );
        const darkenedBackgroundColor = darkenColor(
          project.previewLogoBackgroundColor,
          30,
        );
        return (
          <Link
            href={`/projects/${project.currentSlug}`}
            key={project.currentSlug}
            className="projects-wrapper__item"
            style={{ backgroundColor: darkenedBackgroundColor }}
            aria-label="Project Link"
          >
            <h2
              className="projects-wrapper__item__title"
              style={{
                color: foregroundColor,
              }}
            >
              {project.title}
            </h2>
            <p className="projects-wrapper__item__description">
              {project.smallDescription}
            </p>
          </Link>
        );
      })}
    </section>
  );
};
