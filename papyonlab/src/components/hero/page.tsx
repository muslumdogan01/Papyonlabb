"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="absolute top-0 -z-10 flex items-center justify-center h-screen w-full bg-cover bg-center "
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
        Our   <span>      <Image src="/icons/hero1.svg" alt="Icon" width={32} height={32} />
        </span>   mobile new world. We do fun things in this       world
        </h1>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400"
        >
          We design digital <br /> experiences that inspire.
        </h1>
      </div>
    </section>
  );
}
