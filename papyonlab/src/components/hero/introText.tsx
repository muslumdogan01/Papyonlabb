import React from "react";

const IntroText = () => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-around items-center mt-[250px]">
      <div className="w-full text-center bg-gradient-to-r from-white to-[#151518] bg-clip-text text-transparent font-semibold text-[60px] leading-[60px]">
        <span>There</span> is no limit <br />
        <span>to</span> what we can do
      </div>

      <div className="w-full text-center">
        <p className="text-xl leading-7 font-normal text-white">
          {" "}
          Papyon Lab is a laboratory develops <br /> b2c applications focused on
          usability in <br /> every area that the user touches.
        </p>
      </div>
    </div>
  );
};

export default IntroText;
