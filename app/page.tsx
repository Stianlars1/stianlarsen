import { AboutMe2 } from "@/components/main/about-me2/aboutMe2";
import StarsCanvas from "@/components/main/header2/components/starBackground";
import { Header2 } from "@/components/main/header2/header2";
import { FramerMotionNavbar } from "@/components/main/navbar/components/framerMotionNavbar";
import { ProjectsPreview } from "@/components/main/projectsPreview/projectsPreview";
import { getpreviewProjects } from "../components/main/projectsPreview/api";

export default async function Home() {
  const projects: PreviewProjectsType[] = await getpreviewProjects();
  return (
    <>
      <FramerMotionNavbar />
      <Header2 />
      <AboutMe2 />
      <ProjectsPreview projects={projects} />
      <StarsCanvas />
    </>
  );
}
