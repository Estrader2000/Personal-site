import Socials from "@/components/socials";
import { ModeToggle } from "@/components/ui/DarkModeToggle";
import Nav from "@/components/ui/Nav";

export default function Head() {
  return (
    <div className="h-full w-full">
      <header className="w-ful sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center border-none">
            <Socials />
          </div>
          <div className="flex items-center">
            <ModeToggle />
            <div className="hidden justify-between md:flex md:flex-row-reverse">
              <nav className="flex gap-4 text-lg lg:gap-6">
                <a className="text-foreground/60 transition-colors hover:text-foreground/80">
                  Home
                </a>
                <a className="text-foreground/60 transition-colors hover:text-foreground/80">
                  About
                </a>
                <a className="text-foreground/60 transition-colors hover:text-foreground/80">
                  Projects
                </a>
                <a className="text-foreground/60 transition-colors hover:text-foreground/80">
                  Contact
                </a>
              </nav>
              <Nav />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
