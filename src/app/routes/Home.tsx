import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <section className="min-h-full bg-background/95 px-4">
      <div className="py-6">
        <div className="flex items-center justify-center py-10">
          <Avatar className="size-[18rem]">
            <AvatarImage
              src="src\assets\Hawaii-Pro-pic.jpg"
              className="object-cover"
            />
            <AvatarFallback delayMs={300}>ME:</AvatarFallback>
          </Avatar>
        </div>
        <div className="mx-auto mt-10 flex items-center justify-center">
          <h1 className="py-4 text-3xl font-bold">
            <p>Hey, I'm Ely</p>
            <p className="bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-4xl text-transparent">
              Fullstack Developer
            </p>
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Card className="min-w-[280px] max-w-[300px]">
          <CardHeader className="pb-2">
            <CardTitle className="mx-auto flex">Favorite Stack</CardTitle>
            <CardDescription>
              <div className="flex justify-between">
                <div>0 Yrs</div>
                <div>3 Yrs</div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm font-medium leading-none">Tailwind</p>
              <p className="text-sm text-muted-foreground">
                <Progress value={90} />
              </p>
              <p className="text-sm font-medium leading-none">React</p>
              <p className="text-sm text-muted-foreground">
                <Progress value={70} />
              </p>
              <p className="text-sm font-medium leading-none">Typescript</p>
              <p className="text-sm text-muted-foreground">
                <Progress value={70} />
              </p>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card className="min-w-[280px] max-w-[300px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
