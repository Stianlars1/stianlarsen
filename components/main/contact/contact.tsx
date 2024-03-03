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
          <Heading2>Get in Touch</Heading2>
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
//   "Got a question, a project in mind, or just feel like talking tech? I'm always interested in hearing from fellow developers, tech enthusiasts, or anyone curious about what I do. While I'm currently happily employed, I'm open to networking, sharing ideas, and learning about new opportunities. So, if you'd like to chat, share insights, or discuss potential collaborations, feel free to reach out. Let's connect and explore the possibilities.";

// Get in Touch
// Let's Connect:
// Say Hello
// Reach Out
