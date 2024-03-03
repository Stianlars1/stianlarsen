"use client";
import { useParallax } from "react-scroll-parallax";
import { FirebaseLogo } from "./firebase";
import "./index.css";
import { JavascriptLogo } from "./javascript";
import { ReactLogo } from "./react";
import { TypescriptLogo } from "./typescript";
export const LogoSpinner = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });
  return (
    <>
      <section>
        <div ref={parallax.ref} className="spinner">
          <ReactLogo className="logo one" />
          <TypescriptLogo className="logo twoo" />

          <JavascriptLogo className="logo three" />
          <FirebaseLogo className="logo four" />
        </div>
      </section>
    </>
  );
};
