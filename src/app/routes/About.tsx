import Porsche from "@/Porsche";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaAws,
  FaVuejs,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { SiJavascript, SiDrizzle, SiTypescript } from "react-icons/si";

export default function About() {
  const [bodyColor, setBodyColor] = useState("blue");
  const [tintColor, setTintColor] = useState("white");
  const [wheelColor, setWheelColor] = useState("light-silver-wheels");

  return (
    <section id="about" className="px-2 py-8 md:py-12 md:pb-8 lg:py-24">
      <h1 className="text-center text-4xl font-bold md:text-6xl">About me</h1>
      <div className="mx-auto flex items-center justify-center p-6">
        <p className="text-lg">
          With a strong foundation in both front-end and back-end technologies,
          I excel both in crafting intuitive
          <span className="font-semibold"> user experiences </span> and
          architecting high performing
          <span className="font-semibold"> server-side </span> solutions. I'm
          wrapping up my
          <span className="font-semibold"> bachelor's degree </span>
          in computer science and will be graduating this fall.
        </p>
      </div>

      <div className="mx-auto grid auto-cols-[360px] auto-rows-[360px] justify-center gap-4 py-6 md:grid-flow-col md:gap-8 md:py-10">
        <Card className="w-full max-w-[400px] justify-self-center">
          <CardHeader>
            <CardTitle className="mx-auto flex">Favorite Stack</CardTitle>
            <CardDescription>
              <span className="flex justify-between">
                <span>0 Yrs</span>
                <span>3 Yrs</span>
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <span className="space-y-2">
              <p className="pb-2 text-sm font-medium">Tailwind</p>
              <span className="py-2">
                <Progress value={90} />
              </span>
              <p className="pb-2 text-sm font-medium">React</p>
              <span>
                <Progress value={70} />
              </span>
              <p className="pb-2 text-sm font-medium">Next</p>
              <span>
                <Progress value={30} />
              </span>
              <p className="pb-2 text-sm font-medium">Express</p>
              <span>
                <Progress value={30} />
              </span>
            </span>
          </CardContent>
        </Card>

        <Card className="w-full max-w-[400px] justify-self-center">
          <CardHeader className="flex justify-center pb-6">
            <CardTitle className="mx-auto">Other Tech</CardTitle>
          </CardHeader>
          <CardContent className="px-auto grid grid-cols-3 grid-rows-4 gap-2 text-sm">
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaHtml5 className="m-1 size-8" />
                <span className="">HTML</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaCss3Alt className="m-1 size-8" />
                <span className="">CSS</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <SiJavascript className="m-1 size-7" />
                <span className="">Javascript</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <SiDrizzle className="m-1 size-8" />
                <span className="">Drizzle</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaJava className="m-1 size-8" />
                <span className="">Java</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaAws className="m-1 size-8" />
                <span className="">AWS</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaVuejs className="m-1 size-8" />
                <span className="">Vue</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaBootstrap className="m-1 size-8" />
                <span className="">Bootstrap</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaGitAlt className="m-1 size-8" />
                <span className="">Git</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <SiTypescript className="m-1 size-7" />
                <span className="">Typescript</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaDocker className="m-1 size-8" />
                <span className="">Docker</span>
              </span>
            </span>
            <span className="flex justify-center rounded-sm bg-secondary">
              <span className="flex flex-col items-center justify-center">
                <FaPython className="m-1 size-8" />
                <span className="">Python</span>
              </span>
            </span>
          </CardContent>
        </Card>
      </div>
      <div className="">
        <div className="flex">
          <p className="absolute right-0 top-0 z-10">HIIIIIIIIII</p>
          <Porsche
            bodyColor={bodyColor}
            tintColor={tintColor}
            wheelColor={wheelColor}
          />
        </div>
      </div>
    </section>
  );
}
