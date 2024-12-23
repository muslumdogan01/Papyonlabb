import Header from "@/components/header/page";
import Boxes from "@/components/hero/card";
import Cards from "@/components/hero/cards";
import HeroBg from "@/components/hero/heroBg";
import IntroText from "@/components/hero/introText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen relative ">
      <div className="relative w-full h-full ">
        <div
          className="absolute top-0  h-full w-full bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        >
           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
          <div className="  text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 px-4 flex flex-col items-center w-full">
            <h1 className="text-[20px] leading-[28px] font-normal text-white font-geist flex relative ">
              Our{" "}
              <span>
                {" "}
                <Image
                  src="/icons/hero1.svg"
                  alt="Icon"
                  width={32}
                  height={32}
                />
              </span>{" "}
              mobile new world. We do fun things in this world
            </h1>
            <h1 className="overflow-hidden text-4xl md:text-[100px] leading-[100px] font-semibold text-center bg-gradient-to-r from-[#FBCD47] via-[#F591CF] to-[#F591CF] bg-clip-text text-transparent">
              We design digital <br /> experiences that <br /> inspire.
            </h1>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0  w-full h-[300px] bg-cover bg-center md:bg-top lg:bg-bottom md:hidden block"
        style={{
          backgroundImage: "url('/mobile.png')",
        }}
      >
           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
          <div className="  text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 px-4 flex flex-col items-center w-full">

            <h1 className="overflow-hidden text-[36px] leading-[36px] font-semibold text-center bg-gradient-to-r from-[#FBCD47] via-[#F591CF] to-[#F591CF] bg-clip-text text-transparent">
              We design digital <br /> experiences that <br /> inspire.
            </h1>
          </div>
      </div>
      <Header />
      <Cards/>
      <IntroText/>
    </div>
  );
}
