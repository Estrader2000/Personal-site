import { Porsche } from "@/Porsche";
import { useState } from "react";
import { CarButton } from "./car-button";

export type Options = {
  color: string;
  colors: string[];
};

const tintColorOptions = {
  color: "white",
  colors: ["white", "silver", "black"],
};
const wheelColorOptions = {
  color: "light-silver",
  colors: ["light-silver", "silver", "black"],
};
const bodyColorOptions = {
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
        <CarButton
          label="Wheels"
          partColor={wheelColor}
          onClick={handleWheelColorClick}
        />
        <CarButton
          label="Body"
          partColor={bodyColor}
          onClick={handleBodyColorClick}
        />
        <CarButton
          label="Tint"
          partColor={tintColor}
          onClick={handleTintColorClick}
        />
      </div>
      <Porsche
        bodyColor={bodyColor.color}
        tintColor={tintColor.color}
        wheelColor={wheelColor.color}
      />
    </>
  );
}
