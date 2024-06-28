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
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Progress } from "./ui/progress";
import Surfing from "@/assets/surfing";
import Traveling from "@/assets/Traveling";
import SurfingIcon from "@/assets/surfing-icon";

const iconNameMap = {
  HTML: <FaHtml5 className="m-1 size-8" />,
  CSS: <FaCss3Alt className="m-1 size-8" />,
  Javascript: <SiJavascript className="m-1 size-8" />,
  Drizzle: <SiDrizzle className="m-1 size-8" />,
  Java: <FaJava className="m-1 size-8" />,
  AWS: <FaAws className="m-1 size-8" />,
  Vue: <FaVuejs className="m-1 size-8" />,
  Bootstrap: <FaBootstrap className="m-1 size-8" />,
  Git: <FaGitAlt className="m-1 size-8" />,
  Typescript: <SiTypescript className="m-1 size-8" />,
  Docker: <FaDocker className="m-1 size-8" />,
  Python: <FaPython className="m-1 size-8" />,
};

export const TechGridCard = () => {
  return (
    <Card className="mx-auto w-full max-w-[400px] justify-self-center">
      <CardHeader className="flex justify-center p-4 md:p-6">
        <CardTitle className="text-center">Some things I use</CardTitle>
      </CardHeader>
      <CardContent className="px-auto grid grid-cols-3 grid-rows-4 gap-2 text-sm">
        {Object.entries(iconNameMap).map(([name, Icon]) => (
          <span
            key={name}
            className="flex justify-center rounded-sm bg-secondary"
          >
            <span className="flex flex-col items-center justify-center">
              {Icon}
              <span>{name}</span>
            </span>
          </span>
        ))}
      </CardContent>
    </Card>
  );
};
const favoriteStackMap = {
  Tailwind: 90,
  React: 70,
  Next: 30,
  Node: 30,
};

export const FavoriteStackCard = () => {
  return (
    <Card className="mx-auto w-full max-w-[400px] justify-self-center">
      <CardHeader className="md:pb-1">
        <CardTitle className="text-center">Favorite Stack</CardTitle>
        <CardDescription>
          <span className="flex justify-between">
            <span>0 Yrs</span>
            <span>3 Yrs</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="space-y-2">
          {Object.entries(favoriteStackMap).map(([name, value]) => (
            <div className="flex flex-col" key={name}>
              <p className="pb-2 text-sm font-medium md:text-lg">{name}</p>
              <span className="md:py-1">
                <Progress value={value} />
              </span>
            </div>
          ))}
        </span>
      </CardContent>
    </Card>
  );
};

export const HobbiesCard = () => {
  return (
    <Card className="mx-auto w-full max-w-[400px] justify-self-center">
      <CardHeader>
        <CardTitle className="text-center">Hobbies & Interests</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-5 gap-4">
        <div className="col-span-3 rounded-sm bg-secondary">
          <Traveling />
        </div>
        <div className="rouned-sm col-span-2 aspect-square w-full bg-secondary">
          <Surfing />
        </div>

        <div className="col-span-2 row-span-2 rounded-sm bg-secondary">
          <SurfingIcon />
        </div>
      </CardContent>
    </Card>
  );
};
