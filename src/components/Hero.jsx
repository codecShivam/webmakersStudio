import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col font-satoshi justify-end pb-12 items-center space-y-6 sm:h-[58vh] p-4">
      <h1 className="xl:text-7xl md:text-6xl text-center font-semibold text-gray-800  sm:text-5xl text-4xl sm:mt-0 mt-12">
        Elevate Your Presence with <br /> Seamless Design and Innovation.
      </h1>

      <p className="text-xl font-light text-gray-600 text-center sm:text-lg pb-12">
        From strategic planning to digital presence, we're your dedicated
        partner in achieving solo success.
      </p>
      <button className="flex items-center justify-center rounded-lg bg-gray-800 py-4 px-14 text-xl font-bold leading-[normal] tracking-[-0.32px] text-gray-50 [box-shadow:inset_2px_4px_10px_0px_rgba(203,_203,_203,_0.2)]">
        <div className="flex flex-grow justify-center self-stretch">
          View Pricing
        </div>
      </button>
    </div>
  );
};

export default Hero;
