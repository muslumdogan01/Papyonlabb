"use client";
import { useState } from "react";
import Image from "next/image";

// App türünü tanımlıyoruz
type App = {
  id: string;
  name: string;
  image: string;
};

export default function AppCase() {
  // Uygulama verilerini tanımlıyoruz
  const apps: App[] = [
    { id: "roosefy", name: "roosefy", image: "/appCase/discover.png" },
    { id: "essaymate", name: "essaymate", image: "/appCase/easymate.png" },
    { id: "invoicer", name: "invoicer", image: "/appCase/invoicer.png" },
    { id: "sayai", name: "say ai", image: "/appCase/alex.png" },
    { id: "lenzai", name: "lenz ai", image: "/appCase/lenz.png" },
    { id: "magicly", name: "magicly", image: "/appCase/templates.png" },
    { id: "pure", name: "pure", image: "/appCase/contacts.png" },
    { id: "bmibuddy", name: "bmi buddy", image: "/appCase/bmi.png" },
    { id: "oria", name: "oria", image: "/appCase/discover.png" },
  ];

  // Aktif hover edilen uygulamanın id'sini saklıyoruz
  const [activeApp, setActiveApp] = useState<string | null>(null);

  // Default olarak gösterilecek uygulama (roosefy)
  const defaultApp = apps[0];

  // Aktif uygulamayı buluyoruz, yoksa default uygulamayı kullanıyoruz
  const activeAppData = apps.find((app) => app.id === activeApp) || defaultApp;

  return (
    <div className="container mx-auto">
      
      <div className="md:flex hidden justify-center items-center space-x-[129px] mt-[218px]">
        {/* Sol Resim Alanı */}
        <div className="relative  rounded-lg flex items-center justify-center">
          {/* Hareket Eden Arka Plan */}
          <div
            className="absolute  w-[340px] h-[600px] bg-gradient-to-r from-[rgba(243,72,112,1)] to-[rgba(243,134,80,1)] rounded-[10000px] 
                        animate-bounce-slow transition-all duration-500"
            style={{
              transform: "translateY(2px)", // Yukarı-aşağı hareket
            }}
          ></div>

          {/* Image */}
          <Image
            src={activeAppData.image}
            alt={activeAppData.name}
            width={400}
            height={700}
            className="relative z-10 transition-opacity duration-300 rounded-lg"
          />
        </div>

        {/* Sağ Uygulama İsimleri */}
        <ul className="space-y-4">
          {apps.map((app) => (
            <li
              key={app.id}
              onMouseEnter={() => setActiveApp(app.id)}
              onMouseLeave={() => setActiveApp(null)}
              className={`transition-all duration-300 cursor-pointer ${
                activeApp === app.id
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00B1B0] to-[#17EB92] translate-x-2 text-[80px] leading-[83px]"
                  : "text-gray-500 text-[80px] leading-[83px]"
              }`}
            >
              {app.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
