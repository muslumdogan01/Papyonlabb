import Image from "next/image";
import React from "react";

const HeroBg = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 ">
      <Image
        src="/hero.png"
        alt="bg"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
       <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
       <div className="z-10 text-center absolute top-40  px-4">
        <h1 className="md:flex hidden text-5xl md:text-7xl font-extrabold leading-tight text-white">
          Our{" "}
          <span>
            {" "}
            <Image src="/icons/hero1.svg" alt="Icon" width={32} height={32} />
          </span>{" "}
          mobile new world. We do fun things in this world
        </h1>
        <h1 className="overflow-hidden text-4xl md:text-6xl font-semibold text-center bg-gradient-to-r from-[#FBCD47] via-[#F591CF] to-[#F591CF] bg-clip-text text-transparent">
          We design digital <br /> experiences that <br /> inspire.
        </h1>
      </div>
    </div>
  );
};

export default HeroBg;
