"use client";
import { motion } from "framer-motion";
import { HeaderH1Title } from "./components/h1";
import "./header2.css";

export const Header2 = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        className="main-header"
      >
        <div className="main-header__wrapper">
          <HeaderH1Title className="main-header__wrapper__h1" />
        </div>
      </motion.section>
    </>
  );
};
