"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <motion.section className="about-me">
      <motion.h2 className="about-me__h2">About me</motion.h2>
      <motion.div className="about-me__content">
        <Image
          src={"/STIAN_PHOTO.jpg"}
          alt="About me, Portrait photo of Stian's face close-up"
          width={300}
          height={300}
          className="about-me__content__image"
        />
        <motion.article className="about-me__content__article">
          <motion.p>
            I&apos;m Stian, a 27-year-old full-stack web developer with a
            passion for turning ideas into digital realities. With a Computer
            Engineering background, I thrive on exploring new front-end
            technologies and frameworks. Coding is not just my profession,
            it&apos;s my pursuit outside of work - constantly learning and
            evolving. I&apos;m curious, driven, and always eager to collaborate.
            Welcome to my portfolio, showcasing my dedication to innovative web
            development.
          </motion.p>
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
