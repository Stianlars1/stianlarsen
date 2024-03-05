import { AboutMe } from "@/components/main/about-me/aboutMe";
import { ContactMe } from "@/components/main/contact/contact";
import StarsCanvas from "@/components/main/header/components/starBackground";
import { Header } from "@/components/main/header/header";
import { getpreviewProjects } from "@/components/main/projectsPreview/api";
import { ProjectsPreview } from "@/components/main/projectsPreview/projectsPreview";
import { SkillsContainer } from "@/components/main/skillsContainer/skillsContainer";

export default async function Home() {
  const projects: PreviewProjectsType[] = await getpreviewProjects();
  return (
    <>
      <Header />
      <AboutMe />
      <ProjectsPreview projects={projects} />
      <SkillsContainer />
      <ContactMe />
      <StarsCanvas />
    </>
  );
}
