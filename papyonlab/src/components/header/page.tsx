// "use client";

// import { useState } from "react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="flex justify-between items-center p-4 bg-black text-white">
//       {/* Logo */}
//       <div className="text-lg font-bold">
//         Papyon<span className="italic text-gray-400">Lab</span>
//       </div>

//       {/* Hamburger Menu */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="md:hidden focus:outline-none"
//         aria-label="Menu"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Menü İçeriği */}
//       <ul className={`absolute top-16 left-0 w-full bg-black text-white p-4 space-y-4 md:flex md:static md:space-y-0 md:space-x-4 ${menuOpen ? "block" : "hidden"}`}>
//         <li><a href="#" className="hover:text-gray-400">About Us</a></li>
//         <li><a href="#" className="hover:text-gray-400">Life at Papyon</a></li>
//         <li><a href="#" className="hover:text-gray-400">Our Apps</a></li>
//         <li><a href="#" className="hover:text-gray-400">Insight</a></li>
//         <li><a href="#" className="hover:text-gray-400">Contact</a></li>
//       </ul>
//     </header>
//   );
// }

"use client";
import { useMenu } from "@/context/menuContext";
import Image from "next/image";

export default function Header() {
  const { menuOpen, toggleMenu } = useMenu();

  return (
    <header className="w-full absolute top-0">
      <div className=" container mx-auto">
        <div className="flex items-center justify-between w-full md:px-[50px] md:py-[50px] px-5 py-5">
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
            <Image
              src="/icons/hamburger.svg"
              alt="Icon"
              width={32}
              height={32}
            />
          </button>
          <ul
            className={`lg:flex lg:space-x-[50px] space-x-[30px] font-geist font-normal lg:text-lg lg:leading-[30px] text-white ${
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
        </div>
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
      </div>
    </header>
  );
}
