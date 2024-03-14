import { AboutMe } from "@/components/main/about-me/aboutMe";
import { ContactMe } from "@/components/main/contact/contact";
import StarsCanvas from "@/components/main/header/components/starBackground";
import { Header } from "@/components/main/header/header";
import { getpreviewProjects } from "@/components/main/projectsPreview/api";
import { ProjectsPreview } from "@/components/main/projectsPreview/projectsPreview";
import dynamic from "next/dynamic";

const SkillsContainer = dynamic(
  () => import("@/components/main/skillsContainer/skillsContainer"),
  {
    ssr: false,
  }
);
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
