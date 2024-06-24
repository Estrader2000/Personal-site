import { Github, Linkedin, Mail, ArrowDownToLine } from "lucide-react";
import { Button } from "./ui/button";

export default function Socials() {
  return (
    <>
      <a target="_blank" href="https://github.com/estrader2000">
        <Button variant="ghost" size="icon">
          <Github strokeWidth={1} />
        </Button>
        <span className="sr-only">Github</span>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/elystrader">
        <Button variant="ghost" size="icon">
          <Linkedin strokeWidth={1} />
        </Button>
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="mailto:elystrader1@gmail.com" target="_blank">
        <Button variant="ghost" size="icon">
          <Mail strokeWidth={1} />
        </Button>
        <span className="sr-only">Email</span>
      </a>
      <a
        href="src\assets\Ely Strader Resume.docx.pdf"
        download="Ely Strader's resume"
      >
        <Button variant="ghost" size="icon">
          <ArrowDownToLine strokeWidth={1} />
        </Button>
        <span className="sr-only">Download Resume</span>
      </a>
    </>
  );
}
