"use client";

import { hero } from "@/constants";

const Hero = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col text-center justify-center items-center text-[#4551EE]">
      {hero.map((hero) => (
        <h1 key={hero.id} className={hero.css}>
          {hero.title}
        </h1>
      ))}
    </div>
  );
};

export default Hero;
