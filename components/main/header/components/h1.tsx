"use client";
import { Reveal } from "@/components/reveal";
import { useWindowSize } from "@/lib/hooks/windowSize";
import { ReactElement } from "react";

export const HeaderH1Title = ({ className }: { className: string }) => {
  const { windowWidth } = useWindowSize();

  const isMobileSize = windowWidth < 500;
  const getH1Title = (): ReactElement => {
    return (
      <>
        <Reveal type={"down"} delay={0.25}>
          <>
            {isMobileSize && (
              <>
                <span>
                  Hello, I&apos;m Stian,{" "}
                  <span style={{ whiteSpace: "nowrap" }}>Full-Stack </span>Web
                  Developer
                </span>
              </>
            )}

            {!isMobileSize && (
              <>
                <span>Hello,</span> <span>I&apos;m Stian,</span>
                <br />
                <span>Full-Stack Web</span>
                <br />
                <span>Developer</span>
              </>
            )}
          </>
        </Reveal>
      </>
    );
  };
  const h1Title = getH1Title();

  return (
    <>
      <h1 className={className}>{h1Title}</h1>
    </>
  );
};
