import { Github, Linkedin, Mail, ArrowDownToLine } from "lucide-react";

export default function Socials() {
  return (
    <div>
      <a target="_blank" href="https://github.com/estrader2000">
        <div className="mr-4 inline-flex items-center justify-center whitespace-nowrap rounded-md px-0 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <Github strokeWidth={1} className="size-6 text-primary" />
          <span className="sr-only">Github</span>
        </div>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/elystrader">
        <div className="mr-4 inline-flex items-center justify-center whitespace-nowrap rounded-md px-0 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <Linkedin strokeWidth={1} className="size-6 text-primary" />
          <span className="sr-only">LinkedIn</span>
        </div>
      </a>
      <a href="mailto:elystrader1@gmail.com" target="_blank">
        <div className="mr-4 inline-flex items-center justify-center whitespace-nowrap rounded-md px-0 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <Mail strokeWidth={1} className="size-6 text-primary" />
          <span className="sr-only">Email</span>
        </div>
      </a>
      <a
        href="src\assets\Ely Strader Resume.docx.pdf"
        download="Ely Strader's resume"
      >
        <div className="mr-4 inline-flex items-center justify-center whitespace-nowrap rounded-md px-0 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <ArrowDownToLine strokeWidth={1} className="size-6 text-primary" />
          <span className="sr-only">Download Resume</span>
        </div>
      </a>
    </div>
  );
}
