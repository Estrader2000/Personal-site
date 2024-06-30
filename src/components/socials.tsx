import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Socials() {
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/estrader2000"
      >
        <Button variant="ghost" size="icon">
          <Github strokeWidth={1} />
        </Button>
        <span className="sr-only">Github</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/elystrader"
      >
        <Button variant="ghost" size="icon">
          <Linkedin strokeWidth={1} />
        </Button>
        <span className="sr-only">LinkedIn</span>
      </a>
    </>
  );
}
