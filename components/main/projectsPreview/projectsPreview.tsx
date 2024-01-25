"use client";

import { Card, CardContent } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { darkenColor } from "./util";

export const ProjectsPreview = ({
  projects,
}: {
  projects: PreviewProjectsType[];
}) => {
  return (
    <section className="w-full h-dvh flex gap-4 ">
      {projects.map((project: PreviewProjectsType) => {
        // Darken the background color by 20%
        const darkenedBackgroundColor = darkenColor(
          project.previewLogoBackgroundColor,
          30
        );

        return (
          <Card
            key={project.currentSlug}
            className="h-fit overflow-hidden gap-4 flex flex-col"
          >
            <div
              className="flex items-center gap-2 justify-center text-white font-bold min-h-24"
              style={{ backgroundColor: darkenedBackgroundColor }}
            >
              <Image
                src={urlFor(project.previewLogo).url()}
                alt={`image of ${project.title}`}
                width={35}
                height={35}
                className="object-cover"
              />
              {project.title}
            </div>
            <CardContent>{project.smallDescription}</CardContent>
          </Card>
        );
      })}
    </section>
  );
};
