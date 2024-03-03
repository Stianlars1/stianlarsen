import { Heading2 } from "../typography/headings";
import "./css/skills.css";
import { LogoSpinner } from "./icons";
export const Skills = () => {
  return (
    <section className="skills">
      <Heading2 className="skills-title">Skills</Heading2>
      <LogoSpinner />
    </section>
  );
};
