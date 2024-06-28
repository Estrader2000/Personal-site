import { Porsche } from "@/Porsche";
import { useState } from "react";
import { CarButton } from "./car-button";

export type Options = {
  label: string;
  color: string;
  colors: string[];
};

const tintColorOptions = {
  label: "Tint",
  color: "white",
  colors: ["white", "silver", "black"],
};
const wheelColorOptions = {
  label: "Wheels",
  color: "light-silver",
  colors: ["light-silver", "silver", "black"],
};
const bodyColorOptions = {
  label: "Body",
  color: "blue",
  colors: ["white", "silver", "blue", "red", "green", "black"],
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
