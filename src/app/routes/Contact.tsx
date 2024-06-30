import { Button } from "@/components/ui/button";
import { Linkedin, Send, Eye } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container flex flex-col gap-10 py-8 md:py-12 md:pb-8 lg:py-24"
    >
      <h1 className="text-center text-4xl font-bold md:text-6xl">Contact</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/elystrader"
        >
          <Button className="gap-2">
            <Linkedin size={16} />
            <span className="font-semibold text-secondary">LinkedIn</span>
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:elystrader1@gmail.com"
        >
          <Button className="gap-2">
            <span className="font-semibold text-secondary">Email</span>
            <Send size={16} />
          </Button>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="src\assets\Ely Strader Resume.docx.pdf"
        >
          <Button className="gap-2">
            <span className="font-semibold text-secondary">Resume</span>
            <Eye size={16} />
          </Button>
        </a>
      </div>
    </section>
  );
}
