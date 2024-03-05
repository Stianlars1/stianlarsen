"use client";
import { Reveal } from "@/components/reveal";
import { Heading2 } from "../typography/headings";
import { SkillsEffectContainer } from "./components/skillsEffectContainer/skillsEffectContainer";
import "./css/skillsContainer.css";
export const SkillsContainer = () => {
  return (
    <section className="skills">
      <Reveal type="right" delay={0.55}>
        <Heading2 className="skills__title">Skills</Heading2>
      </Reveal>

      <Reveal type="up" delay={0.65} width="100%">
        <SkillsEffectContainer />
      </Reveal>
    </section>
  );
};
