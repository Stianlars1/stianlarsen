"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Heading2 } from "../typography/headings";
import "./projectsOverview.css";
import { darkenColor } from "./util";

export const ProjectsPreview = ({
  projects,
  title,
}: {
  projects: PreviewProjectsType[];
  title?: string;
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const router = useRouter();

  // Darken the background color by 20%
  const handleNavigate = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };
  return (
    <section id="projects" className="projects">
      <Reveal type="right" delay={0.55}>
        <>
          <Heading2 className="projects-title textBackgroundImage">
            {title && title.length > 0 ? title : "Projects Gallery"}
          </Heading2>
        </>
      </Reveal>
      <Reveal
        type="right"
        width="100%"
        delay={0.65}
        className={"carousel_wrapper"}
      >
        <Carousel
          plugins={[plugin.current]}
          className="w-full "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-[100%] px-[10px] projects__list">
            {projects.map((project, index) => {
              const foregroundColor = darkenColor(
                project.previewLogoBackgroundColor,
                -50,
              );
              const darkenedBackgroundColor = darkenColor(
                project.previewLogoBackgroundColor,
                30,
              );
              return (
                <CarouselItem key={index} className="pl-1  ">
                  <div className="p-1">
                    <Card
                      style={{ backgroundColor: darkenedBackgroundColor }}
                      className="projects__list__item"
                    >
                      <CardContent className="flex flex-col gap-3  min-h-[250px] items-center justify-center p-6 projects__list__item__content">
                        <h3
                          className="text-4xl font-semibold"
                          style={{ color: foregroundColor }}
                        >
                          {project.title}
                        </h3>

                        <p>{project.smallDescription}</p>

                        <Link
                          href={`/projects/${project.currentSlug}`}
                          prefetch={true}
                        >
                          <Button variant={"secondary"}>Read more</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Reveal>
    </section>
  );

  // return (
  //   <section id="projects" className="projects">
  //     {projects.map((project: PreviewProjectsType) => {
  // // Darken the background color by 20%
  // const darkenedBackgroundColor = darkenColor(
  //   project.previewLogoBackgroundColor,
  //   30
  // );
  //       return <></>;

  //       // return (
  //       //   <article key={project.currentSlug} className="projects__article">
  //       //     <div
  //       //       className="projects__article__header"
  //       //       style={{ backgroundColor: darkenedBackgroundColor }}
  //       //     >
  //       //       <Image
  //       //         src={urlFor(project.previewLogo).url()}
  //       //         alt={`image of ${project.title}`}
  //       //         width={35}
  //       //         height={35}
  //       //         className="object-cover"
  //       //       />
  //       //       {project.title}
  //       //     </div>
  //       //     <div className="projects__article__content">
  //       //       <p>{project.smallDescription}</p>
  //       //     </div>
  //       //   </article>
  //       // );
  //     })}
  //   </section>
  // );
};
