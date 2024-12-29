"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function LoveUsers() {
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

  useEffect(() => {
    // Rastgele pozisyonları sadece istemci tarafında oluştur
    const randomPositions = Array.from({ length: 20 }).map(() => ({
      top: Math.random() * 400, // Yükseklik sınırlarını ayarla
      left: Math.random() * 800, // Genişlik sınırlarını ayarla
    }));
    setPositions(randomPositions);
  }, []); // Yalnızca bir kez çalışır (ilk render sonrası)

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        overflow: "hidden",
        backgroundColor: "#111",
        marginTop: "250px",
      }}
    >
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          initial={{ top: pos.top, left: pos.left }} // Rastgele başlangıç pozisyonu
          animate={{ top: pos.top, left: pos.left }} // Pozisyon sabit kalıyor
          transition={{
            duration: 0, // Pozisyon değişmeyecek
          }}
          drag
          dragConstraints={{
            left: -400,
            right: 400,
            top: -250,
            bottom: 250,
          }} // Sürükleme sınırları
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#ff0088",
            borderRadius: "10px",
            position: "absolute", // Kutuları relative parent içinde konumlandırmak için
          }}
        />
      ))}
    </div>
  );
}
