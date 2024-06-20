import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="px-2 py-8 md:py-12 md:pb-8 lg:py-24">
        <div className="pt-14 text-center md:pb-10">
          <h1 className="text-4xl font-semibold md:text-6xl">
            <p>Ely Strader</p>
          </h1>
        </div>
        <div className="flex items-center justify-center py-10 md:py-20">
          <Avatar className="size-[14rem] md:size-[20rem]">
            <AvatarImage
              src="src\assets\pfp-hawaii.jfif"
              className="object-cover"
            />
            <AvatarFallback delayMs={300}>ME:</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="flex justify-center text-center">
          <p className="flex bg-gradient-to-r from-slate-400 to-slate-800 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Fullstack Developer
          </p>
        </h1>
        <div className="align-center mx-auto flex justify-center gap-6 pt-6">
          <a target="_blank" href="https://github.com/estrader2000">
            <Button className="gap-2">
              <FaGithub size={16} />
              <span className="font-semibold text-secondary">GitHub</span>
            </Button>
          </a>
          <a href="#projects">
            <Button className="gap-2">
              <span className="font-semibold text-secondary">Projects</span>
              <FaLongArrowAltRight size={16} />
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
