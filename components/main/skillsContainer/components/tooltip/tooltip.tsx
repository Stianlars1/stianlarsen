import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ReactElement } from "react";

export const ToolTip = ({
  children,
  websiteUrl,
  index,
  techTitle,
}: {
  children: ReactElement;
  websiteUrl: string;
  index: string;
  techTitle: string;
}) => {
  return (
    <>
      {/* <Badge className="tech-name">{techTitle}</Badge> */}

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={websiteUrl} key={index}>
              {children}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{techTitle}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
