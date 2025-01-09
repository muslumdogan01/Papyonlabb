"use client";

import Image from "next/image";
import "@/components/content/style.css";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  baseVelocity: number;
}

function ParallaxText({ baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0); // Yatay hareket başlangıç pozisyonu
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const directionFactor = useRef<number>(1);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      const width = window.innerWidth;
      setContainerWidth(width);
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth); // Ekran boyutlarını dinle

    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  useAnimationFrame((t, delta) => {
    if (Math.abs(velocityFactor.get()) > 0.1) {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    }
  });
  return (
    <div className="parallax relative mt-[250px]">
   
      <motion.div
        className="scroller flex justify-end 2xl:space-x-6 space-x-3"
        style={{
          x: useTransform(baseX, (v) => `${wrap(containerWidth, -containerWidth, v)}px`)
        }}
      >
        {/* Sağ tarafa dayalı kutular */}
        <div className="relative 2xl:w-[494px] 2xl:h-[500px] w-[394px] h-[400px] text-black flex items-center justify-center rounded-[20px]">
          <div className="absolute bottom-24 z-10 2xl:-left-44 -left-20 2xl:text-4xl text-xl font-bold bg-gradient-to-r from-[#FBCD47] via-[#F591CF] to-[#F591CF] bg-clip-text text-transparent">
            Our team is <br /> innovative and <br /> collaborative.
          </div>
          <Image
            src="/box1.png"
            alt="team1"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 rounded-[20px]"
          />
        </div>
        <div className="w-[287px]  flex flex-col 2xl:space-y-6 space-y-3 items-center justify-center rounded-[20px]">
          <div className="2xl:w-[287px] 2xl:h-[280px] w-[287px] h-[196px] relative   flex items-center justify-center rounded-[20px]">
            <Image
              src="/box2.png"
              alt="team1"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 rounded-[20px]"
            />
          </div>
          <div className="2xl:w-[287px] 2xl:h-[196px] w-[287px] h-[196px] relative   flex items-center justify-center rounded-[20px]">
            <Image
              src="/box3.png"
              alt="team1"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 rounded-[20px]"
            />
          </div>
        </div>
        <div className="2xl:w-[494px] 2xl:h-[500px] w-[394px] h-[400px] relative  flex items-center justify-center rounded-[20px]">
          <Image
            src="/box5.jpeg"
            alt="team1"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 rounded-[20px]"
          />
        </div>
      </motion.div>
   

    </div>
  );
}

export default function App() {
  return (
    <section>
      <ParallaxText baseVelocity={-5} />
    </section>
  );
}

// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// const HorizontalScroll = () => {
//   const [scrollY, setScrollY] = useState(0); // Scroll pozisyonu
//   const [translateX, setTranslateX] = useState(500); // Slider'ın yatay pozisyonu

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const diff = currentScrollY - scrollY;

//       if (diff > 0) {
//         // Aşağı doğru scroll
//         setTranslateX((prev) => prev - 4);
//       } else if (diff < 0) {
//         // Yukarı doğru scroll
//         setTranslateX((prev) => prev + 4);
//       }

//       setScrollY(currentScrollY); // Scroll pozisyonunu güncelle
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollY]);

//   return (
//     <div className=" mt-[250px]">
//       <div className=" flex relative overflow-hidden ">
//         {/* Slider */}
//         <div
//           className="flex justify-end transition-transform duration-200 ease-linear w-full space-x-6"
//           style={{
//             transform: `translateX(${translateX}px)`, // Yatay hareket
//           }}
//         >

//           <div className="relative w-[494px] h-[500px] bg-blue-500 text-black flex items-center justify-center rounded-[20px]">
//           <div className="absolute bottom-24 z-10 -left-44 text-4xl font-bold bg-gradient-to-r from-[#FBCD47] via-[#F591CF] to-[#F591CF] bg-clip-text text-transparent">
//               Our team is <br /> innovative and <br /> collaborative.
//             </div>
//             <Image
//               src="/box1.png"
//               alt="team1"
//               layout="fill"
//               objectFit="cover"
//               className="absolute top-0 left-0 rounded-[20px]"
//             />
//           </div>
//           <div className=" w-[287px] text-white flex flex-col space-y-6 items-center justify-center rounded-[20px]">
//             <div className="w-[287px] h-[280px] relative bg-green-500 text-white flex items-center justify-center rounded-[20px]">
//               <Image
//                 src="/box2.png"
//                 alt="team1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute top-0 left-0 rounded-[20px]"
//               />
//             </div>
//             <div className="w-[287px] h-[196px] relative bg-green-500 text-white flex items-center justify-center rounded-[20px]">
//               <Image
//                 src="/box3.png"
//                 alt="team1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute top-0 left-0 rounded-[20px]"
//               />
//             </div>
//           </div>
//           <div className="w-[494px] h-[500px] relative bg-yellow-500 text-black flex items-center justify-center rounded-[20px]">
//             <Image
//               src="/box5.jpeg"
//               alt="team1"
//               layout="fill"
//               objectFit="cover"
//               className="absolute top-0 left-0 rounded-[20px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScroll;
