"use client";
import { useMenu } from "@/context/menuContext";
import Image from "next/image";

export default function Header() {
  const { menuOpen, toggleMenu } = useMenu();

  return (
    <header className=" w-full z-10">
      <nav className="flex items-center justify-between px-[50px] py-[50px]">
       
      <div className="block md:hidden">
            <Image
              src="/icons/menuLogo.svg"
              alt="logo"
              width={36}
              height={20}
            ></Image>
          </div>
     
        <div className="md:block hidden">
          <Image src="/logo.png" alt="logo" width={201} height={30}></Image>
        </div>

        <button onClick={toggleMenu} className="md:hidden ">
          <Image src="/icons/hamburger.svg" alt="Icon" width={32} height={32} />
        </button>
        <ul
          className={`lg:flex space-x-[50px] font-geist font-normal text-white ${
            menuOpen ? "md:flex" : "hidden"
          } hidden md:flex`}
        >
          <li>
            <a href="#" className="hover:text-gray-400 leading-8 ">
              about us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 leading-8 ">
              life at papyon
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 leading-8 ">
              our apps
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 leading-8 ">
              insight
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 leading-8 ">
              contact
            </a>
          </li>
        </ul>
      </nav>
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full  p-4 space-y-4 md:hidden">
          <li>
            <a href="#about" className="block hover:text-gray-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#life" className="block hover:text-gray-400">
              Life at Papyon
            </a>
          </li>
          <li>
            <a href="#apps" className="block hover:text-gray-400">
              Our Apps
            </a>
          </li>
          <li>
            <a href="#insight" className="block hover:text-gray-400">
              Insight
            </a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
