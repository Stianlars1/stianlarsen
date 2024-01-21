import Link from "next/link";
import { ModeToggle } from "../modeToggle";
export const Navbar = () => {
  return (
    <>
      <header className="h-20 flex justify-between items-center max-w-5xl mx-auto px-5">
        {/* <Image alt={"Stian Larsen - website logo"} /> */}
        <TopleftLogo />
        <div className="flex justify-between items-center gap-4">
          <nav>
            <ul className="flex justify-between align-middle gap-4">
              <li>
                <Link href={"/about-me"}>About me</Link>
              </li>
              <li>
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li>
                <Link href={"/cv"}>CV</Link>
              </li>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </header>
    </>
  );
};

const TopleftLogo = () => {
  return (
    <Link href={"/"}>
      <code>{"{"}</code> <code>{"Stian"}</code>{" "}
      <code className="text-primary">{`Larsen`}</code> <code>{"}"}</code>
    </Link>
  );
};
