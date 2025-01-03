"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cards() {
  const [isHoveredBox1, setIsHoveredBox1] = useState(false);
  const [isHoveredBox2, setIsHoveredBox2] = useState(false);
  const [isHoveredBox3, setIsHoveredBox3] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px altı mobil
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // İlk render'da ekran boyutunu kontrol et

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex lg:flex-row flex-col justify-center items-center md:space-x-6 md:mt-[200px] mt-[50px] ">
      <div
        className="bg-[#1E1E21] md:w-[598px] md:h-[664px] w-[350px] h-[190px] p-[30px] rounded-[40px] md:p-[50px] flex justify-between flex-col "
        onMouseEnter={() => !isMobile && setIsHoveredBox1(true)}
        onMouseLeave={() => !isMobile && setIsHoveredBox1(false)}
      >
        <div className="flex  w-full">
          <div className="flex w-full justify-end cursor-pointer md:hidden">
            <Image
              src="/icons/exportLink.svg"
              className=""
              alt="Icon"
              width={32}
              height={32}
            />
          </div>
          {!isHoveredBox1 ? (
            <div className="md:flex hidden w-full relative">
              <Image
                src="/icons/line3.svg"
                className="w-[90px] h-[140px] absolute top-0 right-0"
                alt="Icon"
                width={32}
                height={32}
              />
              <Image
                src="/icons/line2.svg"
                className="w-[90px] h-[140px] absolute top-[30px] right-[30px]"
                alt="Icon"
                width={32}
                height={32}
              />
              <Image
                src="/icons/line1.svg"
                className="w-[90px] h-[140px] absolute top-[60px] right-[60px]"
                alt="Icon"
                width={32}
                height={32}
              />
            </div>
          ) : (
            <div className="flex w-full justify-end cursor-pointer ">
              <Image
                src="/icons/exportLink.svg"
                className=""
                alt="Icon"
                width={32}
                height={32}
              />
            </div>
          )}
        </div>
        <div className="font-normal text-[26px] leading-[33px] md:text-[40px] md:leading-[52px] text-white ">
          I m eager to see <br /> your creative work.
        </div>
      </div>
      <div className="md:w-[598px] md:h-[664px] rounded-[40px] flex flex-col justify-center items-center  md:space-y-6">
        <div
          className="md:w-[598px] md:p-[50px] md:h-[320px] w-[350px] h-[190px] p-[30px] my-[10px] md:my-0 bg-[#1E1E21] flex flex-col justify-between  rounded-[40px]"
          onMouseEnter={() => !isMobile && setIsHoveredBox2(true)}
          onMouseLeave={() => !isMobile && setIsHoveredBox2(false)}
        >
          <div className="flex w-full justify-end cursor-pointer md:hidden">
            <Image
              src="/icons/exportLink.svg"
              className=""
              alt="Icon"
              width={32}
              height={32}
            />
          </div>
          {!isHoveredBox2 ? (
            <div className="md:flex hidden w-full">
              <div className="flex  w-full relative">
                <Image
                  src="/icons/circle4.svg"
                  className="w-[120px] h-[120px] absolute top-0 right-0"
                  alt="Icon"
                  width={32}
                  height={32}
                />
                <Image
                  src="/icons/circle3.svg"
                  className="w-[100px] h-[100px] absolute top-[10px] right-[50px]"
                  alt="Icon"
                  width={32}
                  height={32}
                />
                <Image
                  src="/icons/circle2.svg"
                  className="w-[80px] h-[80px] absolute top-[20px] right-[100px]"
                  alt="Icon"
                  width={32}
                  height={32}
                />
                <Image
                  src="/icons/circle1.svg"
                  className="w-[60px] h-[60px] absolute top-[30px] right-[150px]"
                  alt="Icon"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          ) : (
            <div className="flex w-full justify-end cursor-pointer">
              <Image
                src="/icons/exportLink.svg"
                className=""
                alt="Icon"
                width={32}
                height={32}
              />
            </div>
          )}

          <div className="font-normal text-[26px] leading-[33px] md:text-[40px] md:leading-[52px] text-white ">
            I have an <br /> web/app idea
          </div>
        </div>
        <div
          className="md:w-[598px] md:p-[50px] md:h-[320px] w-[350px] h-[190px] p-[30px] bg-[#1E1E21] flex flex-col justify-between  rounded-[40px]"
          onMouseEnter={() => !isMobile && setIsHoveredBox3(true)}
          onMouseLeave={() => !isMobile && setIsHoveredBox3(false)}
        >
          <div className="flex w-full justify-end cursor-pointer md:hidden">
            <Image
              src="/icons/exportLink.svg"
              className=""
              alt="Icon"
              width={32}
              height={32}
            />
          </div>
          {!isHoveredBox3 ? (
            <div className="md:flex hidden w-full">
              <div className="flex  w-full relative">
                <Image
                  src="/icons/secCircle2.svg"
                  className="w-[120px] h-[120px] absolute top-0 right-0"
                  alt="Icon"
                  width={32}
                  height={32}
                />
                <Image
                  src="/icons/secCircle1.svg"
                  className="w-[120px] h-[120px] absolute top-0 right-[70px]"
                  alt="Icon"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          ) : (
            <div className="flex w-full justify-end cursor-pointer">
              <Image
                src="/icons/exportLink.svg"
                className=""
                alt="Icon"
                width={32}
                height={32}
              />
            </div>
          )}

          <div className="font-normal text-[26px] leading-[33px] md:text-[40px] md:leading-[52px] text-white ">
            Software &<br />
            design support
          </div>
        </div>
      </div>
    </div>
  );
}
