"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import "./aboutMe.css";

export const AboutMe = () => {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ["50% 100%", "50vw start"],
  });
  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  useEffect(() => {
    console.log("scroll Progress: ", scrollYProgress);
    console.log("scrollY Progress: ", scrollY);
    console.log("clipProgress Progress: ", clipProgress);
  }, [scrollY, scrollYProgress, clipProgress]);
  return (
    <Parallax
      id="about-me"
      speed={-10}
      className="about-me"
      itemRef="container"
      translateY={[-100, 0]}
      scale={[0, 3]}
    >
      <motion.h2 style={{ clipPath: clip }} className="about-me__h2">
        About me
      </motion.h2>
      <div className="about-me__content">
        <Parallax speed={15}>
          <Image
            src={"/STIAN_PHOTO.jpg"}
            alt="About me, Portrait photo of Stian's face close-up"
            width={300}
            height={300}
            className="about-me__content__image"
          />
        </Parallax>
        <motion.article
          style={{ clipPath: clip }}
          className="about-me__content__article"
        >
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
        </motion.article>
      </div>
    </Parallax>
  );
};
