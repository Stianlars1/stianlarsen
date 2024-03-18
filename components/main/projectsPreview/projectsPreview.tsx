"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Heading2 } from "../typography/headings";
import "./projectsOverview.css";
import { darkenColor } from "./util";

export const ProjectsPreview = ({
  projects,
  title,
  noDelay,
}: {
  projects: PreviewProjectsType[];
  title?: string;
  noDelay?: boolean;
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section id="projects" className="projects">
      <Reveal type="right" delay={0.45}>
        <>
          <Heading2
            ariaLabel="Projects overview"
            className="projects-title textBackgroundImage"
          >
            <Link
              href={"/projects"}
              aria-label="Click here to go to the projects page, or keep going to get a small preview of them all"
              scroll={true}
            >
              {title && title.length > 0 ? title : "Projects Gallery"}
              <Link1Icon />
            </Link>
          </Heading2>
        </>
      </Reveal>
      <Reveal
        type="right"
        width="100%"
        delay={noDelay ? 0.5 : 0.6}
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
                          className="preview-title font-semibold"
                          style={{ color: foregroundColor }}
                        >
                          <Link
                            href={`/projects/${project.currentSlug}`}
                            prefetch={true}
                            aria-label={`Click to read more about the ${project.title} project`}
                            className="card-title-link"
                          >
                            {project.title}
                          </Link>
                        </h3>

                        <p>{project.smallDescription}</p>

                        <Badge variant={"secondary"}>
                          Learn more{" "}
                          <span style={{ display: "none" }}>
                            about {project.title}
                          </span>
                        </Badge>
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
};
