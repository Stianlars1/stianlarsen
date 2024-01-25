"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  easeing,
  fadeInUp,
  firstName,
  lastName,
  letter,
} from "../animations/animation";
import { RadialBlurEffect } from "../radialBlurEffect/radialBlurEffect";
import "./header.css";

export const Header = () => {
  const h1Title = getH1Title();
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: easeing }}
        className="main-header"
      >
        <div className="main-header__wrapper">
          <motion.h1 className="main-header__wrapper__h1">{h1Title}</motion.h1>

          {/* <HeroCTA /> */}
          <RadialBlurEffect />
        </div>
      </motion.section>
    </>
  );
};

const HeroCTA = () => {
  return (
    <div className="main-header__wrapper__cta">
      <Button variant={"default"}>Get to know me</Button>
      <Button variant={"ghost"}>Get in touch?</Button>
    </div>
  );
};

const getH1Title = () => {
  return (
    <>
      <motion.div variants={firstName} animate={"animate"} initial="initial">
        <motion.span variants={letter}>Hello, </motion.span>
        <motion.span variants={letter}>I&apos;m </motion.span>
        <motion.span variants={fadeInUp}>Stian Larsen,</motion.span>
        <br />
      </motion.div>
      <motion.div variants={lastName} animate="animate" initial="initial">
        <motion.span>Full-Stack </motion.span>
        <motion.span variants={letter}>Web </motion.span>
        <motion.span variants={letter}>Developer</motion.span>
      </motion.div>
    </>
  );
};
