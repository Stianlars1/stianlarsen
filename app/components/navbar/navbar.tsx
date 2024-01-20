import Link from "next/link";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <header>
        {/* <Image alt={"Stian Larsen - website logo"} /> */}
        <Link href={"#"}>
          <code>{"{Stian Larsen}"}</code>
        </Link>

        <nav>
          <ul>
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
      </header>
    </>
  );
};
