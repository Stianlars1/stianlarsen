"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function HamburgerMenu() {
  return (
    <NavigationMenu className="w-[200px] md:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Menu aria-label="Navigation menu" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-[150px]" style={{ right: "0" }}>
            <ul className="grid gap-3 p-3  md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] right-0">
              <ListItem
                aria-label="go to about me section"
                href="/#about-me"
                title="About me"
              />
              <ListItem
                aria-label="go to projects preview section"
                href="/projects"
                title="Projects"
              />
              <ListItem
                aria-label="go to my CV / resume"
                href="/cv"
                title="CV"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
