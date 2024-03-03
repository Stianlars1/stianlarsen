"use client";
import { Reveal } from "@/components/reveal";
import Image from "next/image";
import "./aboutMe.css";

export const AboutMe = () => {
  const myAge = new Date().getFullYear() - 1997;
  return (
    <section id="about-me" className="about-me" itemRef="container">
      <div className="about-me__content">
        <Reveal type={"up"} delay={0.6}>
          <Image
            src={"/STIAN_PHOTO.jpg"}
            alt="About me, Portrait photo of Stian's face close-up"
            width={300}
            height={300}
            className="about-me__content__image"
            priority={false}
          />
        </Reveal>
        <Reveal type={"up"} delay={0.7}>
          <article className="about-me__content__article">
            <p className="textBackgroundImage">
              I&apos;m Stian, a {myAge}-year-old full-stack web developer with a
              passion for turning ideas into digital realities. With a Computer
              Engineering background, I thrive on exploring new front-end
              technologies and frameworks. Coding is not just my profession,
              it&apos;s my pursuit outside of work - constantly learning and
              evolving. I&apos;m curious, driven, and always eager to
              collaborate. Welcome to my portfolio, showcasing my dedication to
              innovative web development.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
};
