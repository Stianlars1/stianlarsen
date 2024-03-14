import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Copyright />

        <div className="social-links">
          <a
            href="https://github.com/stianlars1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon />
            <span>/stianlars1</span>
          </a>
          <a
            href="https://instagram.com/stianlarsen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon />
            <span>stianlarsen</span>
          </a>
          <a
            href="mailto:stian.larsen@mac.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeClosedIcon />
            <span>stian.larsen@mac.com</span>
          </a>
        </div>
      </footer>
    </>
  );
};

const Copyright = () => {
  const yearEstablished = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <p>
      ©{" "}
      {yearEstablished !== currentYear
        ? `${yearEstablished} - ${currentYear}`
        : currentYear}{" "}
      Stian Larsen. All rights reserved.
    </p>
  );
};
