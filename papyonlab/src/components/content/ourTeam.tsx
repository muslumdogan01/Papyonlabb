"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const HorizontalScroll = () => {
  const [scrollY, setScrollY] = useState(0); // Scroll pozisyonu
  const [translateX, setTranslateX] = useState(500); // Slider'ın yatay pozisyonu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - scrollY; // Scroll yönü farkı

      if (diff > 0) {
        // Aşağı doğru scroll
        setTranslateX((prev) => prev - 4); // 4px sola kaydır
      } else if (diff < 0) {
        // Yukarı doğru scroll
        setTranslateX((prev) => prev + 4); // 4px sağa kaydır
      }

      setScrollY(currentScrollY); // Scroll pozisyonunu güncelle
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className=" mt-[250px]">
      <div className=" flex relative overflow-hidden ">
        {/* Slider */}
        <div
          className="flex justify-end transition-transform duration-200 ease-linear w-full space-x-6"
          style={{
            transform: `translateX(${translateX}px)`, // Yatay hareket
          }}
        >
          {/* Her kutuyu elle yazıyoruz */}

          <div className="relative w-[494px] h-[500px] bg-blue-500 text-black flex items-center justify-center rounded-[20px]">
          <div className="absolute bottom-24 z-10 -left-44 text-4xl font-bold bg-gradient-to-r from-[#FBCD47] via-[#F591CF] to-[#F591CF] bg-clip-text text-transparent">
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
          <div className=" w-[287px] text-white flex flex-col space-y-6 items-center justify-center rounded-[20px]">
            <div className="w-[287px] h-[280px] relative bg-green-500 text-white flex items-center justify-center rounded-[20px]">
              <Image
                src="/box2.png"
                alt="team1"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 rounded-[20px]"
              />
            </div>
            <div className="w-[287px] h-[196px] relative bg-green-500 text-white flex items-center justify-center rounded-[20px]">
              <Image
                src="/box3.png"
                alt="team1"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 rounded-[20px]"
              />
            </div>
          </div>
          <div className="w-[494px] h-[500px] relative bg-yellow-500 text-black flex items-center justify-center rounded-[20px]">
            <Image
              src="/box5.jpeg"
              alt="team1"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
