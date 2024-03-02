"use client";
import { ReactElement } from "react";

export const HeaderH1Title = ({ className }: { className: string }) => {
  const getH1Title = (): ReactElement => {
    return (
      <>
        <span>Hello,</span> <span>I&apos;m Stian,</span>
        <br />
        <span>Full-Stack Web</span>
        <br />
        <span>Developer</span>
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
