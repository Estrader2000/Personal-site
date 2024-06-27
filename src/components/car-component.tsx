import { Porsche } from "@/Porsche";
import { useState } from "react";
import { CarButton } from "./car-button";

type BodyColor = "blue" | "red" | "black" | "white" | "silver" | "green";

type TintColor = "black" | "white" | "silver";

type WheelColor = "light-silver" | "silver" | "black";

type BodyColors = [
  "blue-body",
  "red-body",
  "black-body",
  "white-body",
  "silver-body",
  "green-body",
];
type WheelColors = ["light-silver-wheels", "silver-wheels", "black-wheels"];
type TintColors = ["black-tint", "white-tint", "silver-tint"];

export type Options = {
  label: string;
  color: string;
  colors: string[];
};

const tintColorOptions = {
  label: "Tint",
  color: "silver",
  colors: ["black", "white", "silver"],
};
const wheelColorOptions = {
  label: "Wheels",
  color: "black",
  colors: ["light-silver", "silver", "black"],
};
const bodyColorOptions = {
  label: "Body",
  color: "blue",
  colors: ["blue", "red", "black", "white", "silver", "green"],
};

export default function CarComponent() {
  const [wheelColor, setWheelColor] = useState(wheelColorOptions);
  const [tintColor, setTintColor] = useState(tintColorOptions);
  const [bodyColor, setBodyColor] = useState(bodyColorOptions);

  const handleWheelColorClick = (wheelColorClicked: string) => {
    setWheelColor({ ...wheelColor, color: wheelColorClicked });
  };

  const handleBodyColorClick = (bodyColorClicked: string) => {
    setBodyColor({ ...bodyColor, color: bodyColorClicked });
  };

  const handleTintColorClick = (tintColorClicked: string) => {
    setTintColor({ ...tintColor, color: tintColorClicked });
  };

  return (
    <>
      <div className="align-center flex justify-center gap-4 md:gap-8">
        <CarButton partColor={wheelColor} onClick={handleWheelColorClick} />
        <CarButton partColor={bodyColor} onClick={handleBodyColorClick} />
        <CarButton partColor={tintColor} onClick={handleTintColorClick} />
      </div>
      <Porsche
        bodyColor={bodyColor.color}
        tintColor={tintColor.color}
        wheelColor={wheelColor.color}
      />
    </>
  );
}
