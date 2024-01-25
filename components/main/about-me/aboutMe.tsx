"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import "./aboutMe.css";

export const AboutMe = () => {
  return (
    <Parallax id="about-me" speed={15} className="about-me">
      <h2 className="about-me__h2">About me</h2>
      <div className="about-me__content">
        <Parallax speed={-15}>
          <Image
            src={"/STIAN_PHOTO.jpg"}
            alt="About me, Portrait photo of Stian's face close-up"
            width={300}
            height={300}
            className="about-me__content__image"
          />
        </Parallax>
        <article className="about-me__content__article">
          <p>
            I&apos;m Stian, a 27-year-old full-stack web developer with a
            passion for turning ideas into digital realities. With a Computer
            Engineering background, I thrive on exploring new front-end
            technologies and frameworks. Coding is not just my profession,
            it&apos;s my pursuit outside of work - constantly learning and
            evolving. I&apos;m curious, driven, and always eager to collaborate.
            Welcome to my portfolio, showcasing my dedication to innovative web
            development.
          </p>
        </article>
      </div>
    </Parallax>
  );
};
