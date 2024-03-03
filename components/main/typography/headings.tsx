import { Separator } from "@/components/ui/separator";
import { ReactElement, ReactNode } from "react";
import "./css/headings.css";

export const Heading2 = ({
  children,
  className,
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  className?: string;
}) => {
  return (
    <>
      <h2
        className={`heading two textBackgroundImage ${
          className ? className : ""
        }`}
      >
        {children}

        <Separator className="my-3 textBackgroundImage" />
      </h2>
    </>
  );
};
