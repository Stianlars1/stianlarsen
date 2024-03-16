// "use client";
// import { useBrowserInfo } from "@/lib/hooks/isNative";
// import { useWindowSize } from "@/lib/hooks/windowSize";

export const HeaderH1Title = ({ className }: { className?: string }) => {
  // const { windowWidth } = useWindowSize();
  // const { isMobile } = useBrowserInfo();

  // if (isMobile || (windowWidth && windowWidth < 500)) {
  //   return (
  //     <span className="mobileH1">
  //       <span style={{ whiteSpace: "nowrap" }}>Hello,</span>
  //       <span style={{ whiteSpace: "nowrap" }}>I&apos;m Stian,</span>
  //       <span style={{ whiteSpace: "nowrap" }}>a Full-Stack </span>
  //       <span style={{ whiteSpace: "nowrap" }}>Developer</span>
  //     </span>
  //   );
  // }

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
