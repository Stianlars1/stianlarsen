"use client";
import { useIsDarkmodeActive } from "@/lib/hooks/useIsDarkmodeActive";
import { useBrowserInfo } from "@/lib/hooks/useIsNative";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
// import { AlgoliaLogo } from "../../icons/algolia";
// import { AwsLogo } from "../../icons/aws";
// import { ChatGPTLogo } from "../../icons/chatgpt";
// import { CSharpLogo } from "../../icons/csharp";
// import { DotNetLogo } from "../../icons/dotNet";
// import { Figmalogo } from "../../icons/figma";
// import { FirebaseLogo } from "../../icons/firebase";
// import { FramerMotionLogo } from "../../icons/framerMotion";
// import { GithubLogo } from "../../icons/github";
// import { HtmlLogo } from "../../icons/html";
// import { JavaLogo } from "../../icons/java";
// import { JavascriptLogo } from "../../icons/javascript";
// import { KotlinLogo } from "../../icons/kotlin";
// import { LessLogo } from "../../icons/less";
// import { MySqlLogo } from "../../icons/mysql";
// import { NextJsLogo } from "../../icons/nextjs";
// import { NodeLogo } from "../../icons/node";
// import { PythonLogo } from "../../icons/python";
// import { ReactLogo } from "../../icons/react";
// import { SanityLogo } from "../../icons/sanity";
// import { ScssLogo } from "../../icons/scss";
// import { SlackLogo } from "../../icons/slack";
// import { TypescriptLogo } from "../../icons/typescript";
import { TechLogos } from "../../icons";
import { ToolTip } from "../tooltip/tooltip";
import "./SkillsEffectContainer.css";

const iconsDuration = 0.25;
const iconsAnimationInitial = { y: 10, opacity: 0, display: "none" };

const iconsAnimation = { y: 0, opacity: 1, display: "initial" };

const SkillsEffectContainer = () => {
  const isAnimating = useRef(true);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    amount: 0.5,
    margin: "50px",
  });
  const { isMobile } = useBrowserInfo();
  const { isDarkmodeActive } = useIsDarkmodeActive();

  const getComputedStyleValue = (variable: string) => {
    // Ensures this runs only in the browser where window is defined
    if (typeof window !== "undefined") {
      return getComputedStyle(document.documentElement).getPropertyValue(
        variable
      );
    }
    // Provide a fallback or default value for server-side rendering
    return "var(--muted-foreground)"; // Adjust this default value based on your needs
  };

  const rawMutedForeground = getComputedStyleValue("--muted-foreground");
  const formattedHSLValue = `hsl(${rawMutedForeground.trim()})`; // Ensure it's correctly formatted and trimmed

  const startAnimation = async () => {
    const elem = document.querySelector("#one");
    if (!elem) return;
    if (!isAnimating.current) return;
    try {
      await animate(
        "#one",
        {
          backgroundColor: !isDarkmodeActive ? "#d3d3d3" : "#ffffff",
          borderRadius: "20%",
          scale: 2,
          opacity: 1,
          rotate: 45,
          marginTop: "3.5rem",
        },
        { duration: 0.5, delay: 0.8 }
      );

      if (!isAnimating.current) return;

      await animate(
        "#one",
        {
          backgroundColor: "#0000FF",
          borderRadius: "40%",
          scale: 1.5,
          rotate: 90,
        },
        { duration: 0.5 }
      );

      if (!isAnimating.current) return;

      await animate(
        "#one",
        {
          backgroundColor: "#ff0000",
          borderRadius: "20%",
          scale: 2,
          rotate: -180,
        },
        { duration: 0.5 }
      );

      if (!isAnimating.current) return;

      await animate(
        "#one",
        {
          backgroundColor: "#ffa500",
          borderRadius: "10%",
          scale: 1.5,
          rotate: 45,
        },
        { duration: 0.5 }
      );

      if (!isAnimating.current) return;

      await animate(
        "#one",
        {
          backgroundColor: formattedHSLValue,
          borderRadius: "16px",
          rotate: 0,
          scale: 1,
          marginTop: "0",
        },
        { duration: 0.5 }
      );

      if (!isAnimating.current) return;

      await animate(
        "#one",
        {
          backgroundColor: formattedHSLValue,
          borderRadius: "16px",
          rotate: 0,
          minWidth: "100%",
          padding: "20px",
          minHeight: "140px",
        },
        { duration: 0.5 }
      );

      if (!isAnimating.current) return;

      // last animation box to fit icons
      await animate(
        "#one",
        {
          backgroundColor: formattedHSLValue,
          borderRadius: "16px",
          rotate: 0,

          minWidth: "100%",
          height: "auto",
          padding: "20px",
        },
        { duration: 0.5 }
      );

      if (!isAnimating.current) return;

      // Icons container
      await animate(
        "#icons",
        { scale: 1, opacity: 1, display: "flex" },
        { duration: 0.5 }
      );

      if (!isAnimating.current) return;

      // icons
      await animate(".react", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".nextjs", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".typescript", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".javascript", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".html", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".less", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".scss", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".firebase", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".github", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".aws", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".mysql", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".framerMotion", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".java", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".kotlin", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".algolia", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".sanity", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".dotnet", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".python", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".csharp", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;

      await animate(".figma", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;
      await animate(".node", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;
      await animate(".slack", iconsAnimation, {
        duration: iconsDuration,
      });

      if (!isAnimating.current) return;
      await animate(".chatgpt", iconsAnimation, {
        duration: iconsDuration,
      });
    } catch (e) {
      console.error("error animating: ", e);
    }
  };

  useEffect(() => {
    if (isInView) {
      isAnimating.current = true;
      // INITIAL ANIMATION
      // animate effect
      animate("#one", { scale: 0, opacity: 0 }, { duration: 0.5, delay: 0.8 });

      // icons container
      animate("#icons", { scale: 0, opacity: 0, display: "none" });

      // icons
      animate(".react", iconsAnimationInitial);
      animate(".nextjs", iconsAnimationInitial);
      animate(".typescript", iconsAnimationInitial);
      animate(".javascript", iconsAnimationInitial);
      animate(".html", iconsAnimationInitial);
      animate(".less", iconsAnimationInitial);
      animate(".scss", iconsAnimationInitial);
      animate(".firebase", iconsAnimationInitial);
      animate(".github", iconsAnimationInitial);
      animate(".aws", iconsAnimationInitial);
      animate(".mysql", iconsAnimationInitial);
      animate(".framerMotion", iconsAnimationInitial);
      animate(".java", iconsAnimationInitial);
      animate(".kotlin", iconsAnimationInitial);
      animate(".algolia", iconsAnimationInitial);
      animate(".sanity", iconsAnimationInitial);
      animate(".dotnet", iconsAnimationInitial);
      animate(".python", iconsAnimationInitial);
      animate(".csharp", iconsAnimationInitial);
      animate(".figma", iconsAnimationInitial);
      animate(".node", iconsAnimationInitial);
      animate(".slack", iconsAnimationInitial);
      animate(".chatgpt", iconsAnimationInitial);

      startAnimation();
    }
  }, [isInView]);

  return (
    <div ref={scope} className="effect-container">
      <div
        id="one"
        className="box"
        style={{ backgroundColor: !isDarkmodeActive ? "#d3d3d3" : "#ffffff" }}
      >
        <div id="icons" className={!isMobile ? "desktopLogo" : ""}>
          {Object.keys(TechLogos).map((key: any) => {
            const { info, logo: Logo } = GetLogo(key);
            return (
              <ToolTip
                key={info.title}
                index={info.title}
                techTitle={info.title}
                websiteUrl={info.website}
              >
                <Logo
                  className={`${info.className} logo ${info.dark ? "dark-bg" : "light-bg"}`}
                />
              </ToolTip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsEffectContainer;

const GetLogo = (logo: keyof typeof TechLogos) => {
  return { logo: TechLogos[logo].logo, info: TechLogos[logo] };
};
