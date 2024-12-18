"use client"
import { useMenu } from "@/context/menuContext";
import Image from "next/image";

export default function Header() {
  const { menuOpen, toggleMenu } = useMenu();

  return (
    <header className=" w-full z-10">
      <nav className="flex items-center justify-between px-[50px] py-[50px]">
        <div className="text-2xl font-bold">
         <Image src="/logo.png" 
         alt="logo"
         width={201}
         height={30}
         ></Image>
        </div>
        <button onClick={toggleMenu} className="lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className={`lg:flex space-x-[50px] font-geist font-normal text-white ${menuOpen ? "block" : "hidden"} lg:block`}>
          <li><a href="#" className="hover:text-gray-400 leading-8 ">about us</a></li>
          <li><a href="#" className="hover:text-gray-400 leading-8 ">life at papyon</a></li>
          <li><a href="#" className="hover:text-gray-400 leading-8 ">our apps</a></li>
          <li><a href="#" className="hover:text-gray-400 leading-8 ">insight</a></li>
          <li><a href="#" className="hover:text-gray-400 leading-8 ">contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
