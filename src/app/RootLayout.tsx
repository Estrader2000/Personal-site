import Socials from "@/components/socials";
import { ModeToggle } from "@/components/ui/DarkModeToggle";
import Nav from "@/components/ui/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

export default function RootLayout() {
  return (
    <>
      <header className="sticky top-0 z-50 items-center border-b border-border/60 bg-background/85 backdrop-blur xl:container xl:mx-auto">
        <div className="mx-4 flex min-h-14 items-center justify-between">
          <div className="flex">
            <Socials />
          </div>
          <div className="flex">
            <ModeToggle />
            <Nav />
          </div>
        </div>
      </header>
      <main className="xl:container xl:mx-auto">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="flex items-center justify-center xl:container xl:mx-auto">
        <div className="text-muted-foreground">
          ©2024 Ely Strader. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
