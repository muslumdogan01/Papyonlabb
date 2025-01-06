import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-full mt-[100px]">
          <p className="text-[20px] font-[400] leading-[28px] text-white text-center">
            Lets build together
          </p>
        </div>
        <div className="flex justify-center items-center w-full mt-[10px]">
          <h1 className="text-[60px] font-[500] leading-[60px] text-white text-center">
            Lets talk about your app!
          </h1>
        </div>
        <div className="flex-grow h-px bg-white opacity-40 mt-[110px]"></div>
        <div className="w-full flex justify-between items-center mt-[20px]">
          <div className=" w-full flex items-center">
            <ul className="flex space-x-[50px] text-[16px] font-[400] leading-[34px] text-white">
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
          <div className="flex  text-[16px] w-full items-center justify-end font-[500] leading-[34px] text-white">
            <p>Made with ❤️ in Izmir, Turkey 🇹🇷 </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-[100px]">
        <Image
          src="/lab.png"
          alt="PapyonLogo"
          layout="responsive"
          width={1920}
          height={272}
        />
       
      </div>
    </div>
  );
};

export default Footer;
