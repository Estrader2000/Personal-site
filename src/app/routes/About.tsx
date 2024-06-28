import Surfing from "@/assets/surfing";
import {
  FavoriteStackCard,
  HobbiesCard,
  TechGridCard,
} from "@/components/AboutCards";
import CarComponent from "@/components/car-component";

export default function About() {
  return (
    <section id="about" className="md:gap-18 flex flex-col gap-8 lg:gap-24">
      <h1 className="text-center text-4xl font-bold md:text-6xl">About me</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <p className="text-justify text-lg md:order-2 md:text-2xl">
              With a strong foundation in both front-end and back-end
              technologies, I excel at crafting intuitive
              <span className="font-semibold"> user experiences </span> and
              architecting high performing
              <span className="font-semibold"> server-side </span> solutions.
              I'm wrapping up my
              <span className="font-semibold"> bachelor's degree </span>
              in computer science and will be graduating this fall.
            </p>
            <div className="md:order-1">
              <TechGridCard />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-justify text-lg md:order-2 md:text-2xl">
              I primarily use the Javascript ecosystem, including React, Next,
              Node, and Typescript. These allow me to create powerful websites
              that can be used by people around the world. Aside from that, I
              also enjoy working with Java and Python, as those were the primary
              languages I used in school
            </p>
            <div className="md:order-1">
              <FavoriteStackCard />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="justify-centerflex mx-auto md:order-2">
              <ul className="ml-6 list-disc text-lg md:text-2xl">
                <li>Attending car shows</li>
                <li>I love traveling and trying new foods</li>
                <li>If the waves are good I'm probably surfing</li>
                <li>Hiking, especially somewhere scenic</li>
                <li>Gaming with friends is one way I like to relax</li>
              </ul>
            </div>
            <div className="md:order-1">
              <HobbiesCard />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="pb-10 pt-16 text-center text-3xl font-bold md:text-5xl">
          Did I mention I like cars?
        </h3>

        <CarComponent />
      </div>
    </section>
  );
}
