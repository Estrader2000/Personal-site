import { Porsche } from "@/Porsche";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { cn } from "@/lib/utils";

type BodyColor =
  | "blue-body"
  | "red-body"
  | "black-body"
  | "white-body"
  | "silver-body";
type TintColor = "black-tint" | "white-tint" | "silver-tint";
type WheelColor = "light-silver-wheels" | "silver-wheels" | "black-wheels";

export interface CarProps {
  bodyColor: BodyColor;
  tintColor: TintColor;
  wheelColor: WheelColor;
}

export default function CarComponent() {
  const [bodyColor, setBodyColor] = useState<BodyColor>("blue-body");
  const [tintColor, setTintColor] = useState<TintColor>("white-tint");
  const [wheelColor, setWheelColor] = useState<WheelColor>(
    "light-silver-wheels",
  );

  return (
    <>
      <div className="align-center flex justify-center gap-4 md:gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">Wheels</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[max-content]" align="end">
            <DropdownMenuItem
              onClick={() => setWheelColor("light-silver-wheels")}
            >
              <span className="size-9 rounded-full border-2 bg-car-light-silver-wheels"></span>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setWheelColor("black-wheels")}>
              <span className="size-9 rounded-full border-2 bg-car-black-wheels"></span>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setWheelColor("silver-wheels")}>
              <span className="size-9 rounded-full border-2 bg-car-silver-wheels"></span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">Body</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[max-content]" align="end">
            <DropdownMenuItem onClick={() => setBodyColor("silver-body")}>
              <span className="size-9 rounded-full border-2 bg-car-silver-body"></span>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setBodyColor("red-body")}>
              <span className="size-9 rounded-full border-2 bg-car-red-body"></span>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setBodyColor("white-body")}>
              <span className="size-9 rounded-full border-2 bg-car-white-body"></span>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setBodyColor("blue-body")}>
              <span className="size-9 rounded-full border-2 bg-car-blue-body"></span>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setBodyColor("black-body")}>
              <span className="size-9 rounded-full border-2 bg-car-black-body"></span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">Tint</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[max-content]" align="end">
            <DropdownMenuItem onClick={() => setTintColor("silver-tint")}>
              <span className="size-9 rounded-full border-2 bg-car-silver-tint"></span>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTintColor("white-tint")}>
              <span className="size-9 rounded-full border-2 bg-car-white-tint"></span>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTintColor("black-tint")}>
              <span className="size-9 rounded-full border-2 bg-car-black-tint"></span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Porsche
        bodyColor={bodyColor}
        tintColor={tintColor}
        wheelColor={wheelColor}
      />
    </>
  );
}
