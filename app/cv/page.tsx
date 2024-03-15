import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { PreviewPDF } from "./components/previewPDF";
import "./css/resume.css";

export const metadata: Metadata = {
  title: "CV | resume",
  description: "Take a look at my CV / resume",
};
const ResumePage = () => {
  return (
    <div className="resume">
      <h1 className="resume__title">Resume</h1>
      <div className="resume__links">
        <Button variant={"link"}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Open in New Tab
          </a>
        </Button>
        <Button variant={"link"}>
          <a href="/resume.pdf" download="My_Resume.pdf">
            Download
          </a>
        </Button>
      </div>
      <PreviewPDF />
    </div>
  );
};

export default ResumePage;
