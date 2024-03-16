"use client";
import { Reveal } from "@/components/reveal";
import { Heading2 } from "../typography/headings";
import { FormContainer } from "./components/formContainer";
import "./css/contact.css";
export const ContactMe = () => {
  return (
    <section className="contact">
      <div className="header">
        <Reveal type="up" delay={0.2}>
          <Heading2 ariaLabel="Contact me form">Get in Touch</Heading2>
        </Reveal>

        <Reveal type="up" delay={0.4}>
          <p className="textBackgroundImage">{paragraphText}</p>
        </Reveal>
      </div>

      <FormContainer />
    </section>
  );
};

const paragraphText =
  "  Interested in discussing tech, coding, or potential collaborations? I'm always open to connecting over new ideas or projects. Feel free to reach out—let's explore what we can create together.";
