"use client";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { AlgoliaLogo } from "../../icons/algolia";
import { AwsLogo } from "../../icons/aws";
import { FirebaseLogo } from "../../icons/firebase";
import { FramerMotionLogo } from "../../icons/framerMotion";
import { GithubLogo } from "../../icons/github";
import { HtmlLogo } from "../../icons/html";
import { JavaLogo } from "../../icons/java";
import { JavascriptLogo } from "../../icons/javascript";
import { KotlinLogo } from "../../icons/kotlin";
import { LessLogo } from "../../icons/less";
import { MySqlLogo } from "../../icons/mysql";
import { ReactLogo } from "../../icons/react";
import { SanityLogo } from "../../icons/sanity";
import { ScssLogo } from "../../icons/scss";
import { TypescriptLogo } from "../../icons/typescript";
import "./SkillsEffectContainer.css";
export const SkillsEffectContainer = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    amount: 0.5,
    margin: "50px",
  });

  const startAnimation = async () => {
    await animate(
      "#one",
      {
        backgroundColor: "white",
        borderRadius: "20%",
        scale: 2,
        opacity: 1,
        rotate: 45,
      },
      { duration: 0.5, delay: 0.8 },
    );
    await animate(
      "#one",
      { backgroundColor: "blue", borderRadius: "40%", scale: 1.5, rotate: 90 },
      { duration: 0.5 },
    );
    await animate(
      "#one",
      { backgroundColor: "red", borderRadius: "20%", scale: 2, rotate: -180 },
      { duration: 0.5 },
    );
    await animate(
      "#one",
      {
        backgroundColor: "orange",
        borderRadius: "10%",
        scale: 1.5,
        rotate: 45,
      },
      { duration: 0.5 },
    );
    await animate(
      "#one",
      {
        backgroundColor: "hsl(var(--muted-foreground))",
        borderRadius: "16px",
        rotate: 0,
      },
      { duration: 0.5 },
    );
    await animate(
      "#one",
      {
        backgroundColor: "hsl(var(--muted-foreground))",
        borderRadius: "16px",
        rotate: 0,
        minWidth: "100%",
        padding: "20px",
      },
      { duration: 0.5 },
    );
    await animate(
      "#one",
      {
        backgroundColor: "hsl(var(--muted-foreground))",
        borderRadius: "16px",
        rotate: 0,
        minWidth: "100%",
        minHeight: "160px",
        padding: "20px",
      },
      { duration: 0.5 },
    );

    // Icons container
    await animate(
      "#icons",
      { scale: 1, opacity: 1, display: "flex" },
      { duration: 0.5 },
    );

    // icons
    await animate(
      ".react",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".typescript",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".javascript",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".html",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".less",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".scss",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".firebase",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".github",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".aws",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".mysql",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".framerMotion",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".java",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".kotlin",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".algolia",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
    await animate(
      ".sanity",
      { scale: 1, opacity: 1, display: "initial" },
      { duration: 0.5 },
    );
  };

  useEffect(() => {
    // INITIAL ANIMATION
    // animate effect
    animate("#one", { scale: 0, opacity: 0 }, { duration: 0.5, delay: 0.8 });

    // icons container
    animate("#icons", { scale: 0, opacity: 0, display: "none" });

    // icons
    animate(".react", { scale: 0, opacity: 0, display: "none" });
    animate(".typescript", { scale: 0, opacity: 0, display: "none" });
    animate(".javascript", { scale: 0, opacity: 0, display: "none" });
    animate(".html", { scale: 0, opacity: 0, display: "none" });
    animate(".less", { scale: 0, opacity: 0, display: "none" });
    animate(".scss", { scale: 0, opacity: 0, display: "none" });
    animate(".firebase", { scale: 0, opacity: 0, display: "none" });
    animate(".github", { scale: 0, opacity: 0, display: "none" });
    animate(".aws", { scale: 0, opacity: 0, display: "none" });
    animate(".mysql", { scale: 0, opacity: 0, display: "none" });
    animate(".framerMotion", { scale: 0, opacity: 0, display: "none" });
    animate(".java", { scale: 0, opacity: 0, display: "none" });
    animate(".kotlin", { scale: 0, opacity: 0, display: "none" });
    animate(".algolia", { scale: 0, opacity: 0, display: "none" });
    animate(".sanity", { scale: 0, opacity: 0, display: "none" });

    if (isInView) {
      startAnimation();
    }
  }, [isInView]);

  return (
    <div ref={scope} className="effect-container">
      <div id="one" className="box">
        <div id="icons">
          <ReactLogo className="react logo dark-bg " />
          <TypescriptLogo className="typescript logo" />
          <JavascriptLogo className="javascript logo" />
          <HtmlLogo className="html logo" />
          <LessLogo className="less logo" />
          <ScssLogo className="scss logo" />
          <FirebaseLogo className="firebase logo dark-bg" />
          <GithubLogo className="github logo" />
          <AwsLogo className="aws logo light-bg" />
          <MySqlLogo className="mysql logo light-bg" />
          <FramerMotionLogo className="framerMotion logo light-bg" />
          <JavaLogo className="java logo light-bg" />
          <KotlinLogo className="kotlin logo light-bg" />
          <AlgoliaLogo className="algolia logo light-bg" />
          <SanityLogo className="sanity logo light-bg" />
        </div>
      </div>
    </div>
  );
};
