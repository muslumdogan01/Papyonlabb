import React from "react";

const IntroText = () => {
  return (
<div className="container mx-auto">
<div className="w-full flex md:flex-row flex-col justify-around items-center mt-[100px] md:mt-[250px]">
      <div className="w-full text-center bg-gradient-to-r from-white to-[#151518] bg-clip-text text-transparent font-semibold text-4xl leading-[39px] md:text-[60px] md:leading-[60px]">
        <span>There</span> is no limit <br />
        <span>to</span> what we can do
      </div>

      <div className="w-full text-center">
        <p className="text-xl leading-7 font-normal text-white mt-5 md:mt-0">
          {" "}
          Papyon Lab is a laboratory develops <br /> b2c applications focused on
          usability in <br /> every area that the user touches.
        </p>
      </div>
    </div>
</div>
  );
};

export default IntroText;
