import { TechLogos } from "@/components/main/skillsContainer/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import "./createdWith.css";

export const CreatedWith = ({ techStack }: { techStack: string }) => {
  // Ensure techStack is an array
  const techs: string | string[] =
    typeof techStack === "string" ? techStack.split(", ") : techStack;
  return (
    <div className="created-with">
      <h2>Technologies used</h2>

      <div className="tech">
        {techs.map((tech, index) => {
          // Normalize the tech name to match keys in techLogos map
          const techKey = tech.toUpperCase().trim() as keyof typeof TechLogos;
          const TechLogo = TechLogos[techKey].logo;
          const websiteUrl = TechLogos[techKey].website;
          const techTitle = TechLogos[techKey].title;
          const isDark = TechLogos[techKey].dark;

          // Check if there is a corresponding logo for the technology
          if (!!TechLogo) {
            return (
              <>
                {/* <Badge className="tech-name">{techTitle}</Badge> */}

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={websiteUrl}
                        key={index}
                        className={`tech-item ${isDark ? "dark" : ""}`}
                      >
                        <TechLogo className="tech-logo" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{techTitle}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            );
          }

          // If no logo found, just return the technology name
          return (
            <div key={index} className="tech-item">
              <span className="tech-name">{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
