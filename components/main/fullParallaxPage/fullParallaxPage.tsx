"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AboutMe2 } from "../about-me2/aboutMe2";
import { Header2 } from "../header2/header2";
import { FramerMotionNavbar } from "../navbar/components/framerMotionNavbar";
import { Navbar2 } from "../navbar2/navbar2";
import { ProjectsPreview } from "../projectsPreview/projectsPreview";

export const FullParallaxPage = ({
  projects,
}: {
  projects: PreviewProjectsType[];
}) => {
  return (
    <>
      <FramerMotionNavbar />

      <Header2 />
      <AboutMe2 />
      <ProjectsPreview projects={projects} />
    </>
  );
};
