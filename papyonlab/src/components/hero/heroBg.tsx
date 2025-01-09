import Image from "next/image";
import React from "react";

const HeroBg = () => {
  return (
    <div className="md:h-screen aspect-[16/9] w-full relative ">
      <div className="relative w-full h-full ">
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center  "
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #151518, transparent, #151518), linear-gradient(to right, #151518, transparent, #151518), url('/bg.png')",
            backgroundColor: "#151518",
          }}
        >
          <div className="  text-center absolute top-2/4 left-1/2 transform -translate-x-1/2 2xl:translate-y-1/4 px-4 flex flex-col items-center w-full">
            <div className="space-x-1 justify-center items-center text-[20px] leading-[28px] font-normal text-white font-geist md:flex hidden relative">
              <span> Our</span>
              <span>
                <Image
                  src="/icons/hero1.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />
              </span>
              <span>mobile new world. We do fun things in this</span>
              <span>
                <Image
                  src="/icons/world.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />
              </span>
              <span>world</span>
            </div>
            <h1 className="overflow-hidden text-4xl leading-[36px] lg:text-[100px] md:text-7xl md:leading-[80px] lg:leading-[100px] font-semibold text-center bg-gradient-to-r from-[#FBCD47] via-[#F591CF] to-[#F591CF] bg-clip-text text-transparent">
              We design digital <br /> experiences that <br /> inspire.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
