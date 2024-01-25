"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { header, stagger } from "../animations/animation";
import { HamburgerMenu } from "../hamburgerMenu/hamburgerMenu";
import { ModeToggle } from "../modeToggle";
import { FramerMotionNavbar } from "./components/framerMotionNavbar";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <FramerMotionNavbar />
      <header className="navbar-header">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="navbar"
        >
          {/* <Image alt={"Stian Larsen - website logo"} /> */}
          <motion.div
            variants={header as any}
            className="flex items-center justify-between topleftLogo"
          >
            <TopleftLogo />
          </motion.div>

          <div className="flex justify-between items-center gap-4 ul-wrapper">
            <nav>
              <motion.ul
                variants={header as any}
                className="hidden justify-between align-middle gap-4  md:flex"
              >
                <li>
                  <Link href={"/about-me"}>About me</Link>
                </li>
                <li>
                  <Link href={"/projects"}>Projects</Link>
                </li>
                <li>
                  <Link href={"/cv"}>CV</Link>
                </li>
              </motion.ul>
            </nav>
            <ModeToggle />
            <HamburgerMenu />
          </div>
        </motion.div>
      </header>
    </>
  );
};

const TopleftLogo = () => {
  return (
    <Link href={"/"}>
      <code>{"{ Stian"}</code> <code className="text-primary">{`Larsen`}</code>{" "}
      <code>{"}"}</code>
    </Link>
  );
};
