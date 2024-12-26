"use client";

import React, { useState, useEffect } from "react";

const HorizontalScroll = () => {
  const [scrollY, setScrollY] = useState(0); // Scroll pozisyonu
  const [translateX, setTranslateX] = useState(0); // Slider'ın yatay pozisyonu

  const items = Array.from({ length: 4 }, (_, index) => `Item ${index + 1}`); // 10 slider item

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - scrollY; // Scroll yönü farkı

      if (diff > 0) {
        // Aşağı doğru scroll
        setTranslateX((prev) => prev - 4); // 10px sola kaydır
      } else if (diff < 0) {
        // Yukarı doğru scroll
        setTranslateX((prev) => prev + 4); // 10px sağa kaydır
      }

      setScrollY(currentScrollY); // Scroll pozisyonunu güncelle
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="relative flex justify-end w-full overflow-hidden bg-gray-200">
      {/* Slider */}
      <div
        className="flex  gap-4 transition-transform duration-200 ease-linear"
        style={{
          transform: `translateX(${translateX}px)`, // Yatay hareket
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[200px] h-[150px] bg-blue-500 text-white flex items-center justify-center rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
