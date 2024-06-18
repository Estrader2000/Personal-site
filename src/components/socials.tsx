import { Github, Linkedin, Mail, ArrowDownToLine } from "lucide-react";
import { Button } from "./ui/button";

export default function Socials() {
  return (
    <div className="flex">
      <a target="_blank" href="https://github.com/estrader2000">
        <Button variant="ghost" size="icon">
          <Github strokeWidth={1} className="text-primary" />
        </Button>
        <span className="sr-only">Github</span>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/elystrader">
        <Button variant="ghost">
          <Linkedin strokeWidth={1} className="text-primary" />
        </Button>
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="mailto:elystrader1@gmail.com" target="_blank">
        <Button variant="ghost" size="icon">
          <Mail strokeWidth={1} className="text-primary" />
        </Button>
        <span className="sr-only">Email</span>
      </a>
      <a
        href="src\assets\Ely Strader Resume.docx.pdf"
        download="Ely Strader's resume"
      >
        <Button variant="ghost" size="icon">
          <ArrowDownToLine strokeWidth={1} className="text-primary" />
          <span className="sr-only">Download Resume</span>
        </Button>
      </a>
    </div>
  );
}
