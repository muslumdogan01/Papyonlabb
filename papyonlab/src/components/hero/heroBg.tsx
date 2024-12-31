import Image from "next/image";
import React from "react";

const HeroBg = () => {
  return (
    <div className="relative w-full h-full ">
    <div
      className="absolute top-0  h-full w-full bg-cover bg-center "
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      <div className="  text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 px-4 flex flex-col items-center w-full">
        <div className="space-x-1 justify-center items-center  font-geist md:flex hidden relative">
          <span className="text-[20px] leading-[28px] font-normal text-white">Our</span>
          <span className="w-[17px] ">
            {" "}
            <Image
              src="/icons/hero1.svg"
              alt="Icon"
              width={17}
              height={21}
            />
          </span>{" "}
          <span className="text-[20px] leading-[28px] font-normal text-white">
            mobile new world. We do fun things in this world
          </span>
        </div>
        <h1 className="overflow-hidden text-4xl leading-[36px] lg:text-[100px] md:text-7xl md:leading-[80px] lg:leading-[100px] font-semibold text-center bg-gradient-to-r from-[#FBCD47] via-[#F591CF] to-[#F591CF] bg-clip-text text-transparent">
          We design digital <br /> experiences that <br /> inspire.
        </h1>
      </div>
    </div>
  </div>
  );
};

export default HeroBg;
