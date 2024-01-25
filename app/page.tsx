import { AboutMe } from "@/components/main/about-me/aboutMe";
import StarsCanvas from "@/components/main/header/components/starBackground";
import { Header } from "@/components/main/header/header";
import { getpreviewProjects } from "@/components/main/projectsPreview/api";
import { ProjectsPreview } from "@/components/main/projectsPreview/projectsPreview";

export default async function Home() {
  const projects: PreviewProjectsType[] = await getpreviewProjects();
  return (
    <>
      <Header />
      <AboutMe />
      <ProjectsPreview projects={projects} />
      <StarsCanvas />
    </>
  );
}
