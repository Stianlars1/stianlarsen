"use client";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { HeaderH1Title } from "./components/h1";
import { ScrollDownIcon } from "./components/scrollDownIcon/scrollDownIcon";
import "./header.css";

export const Header = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        className="main-header"
      >
        <Parallax speed={30} className="main-header__wrapper">
          <HeaderH1Title className="main-header__wrapper__h1" />
        </Parallax>
        <ScrollDownIcon />
      </motion.section>
    </>
  );
};
