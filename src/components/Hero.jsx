import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-end pb-12 items-center space-y-6 sm:h-[58vh] p-4">
      {/* Heading */}
      <h1 className="text-5xl text-center font-semibold text-gray-800  sm:text-7xl">
        Elevate Your Presence with <br /> Seamless Design and Innovation.
      </h1>

      {/* Paragraph */}
      <p className="text-xl font-light text-gray-600 sm:text-lg pb-12">
        From strategic planning to digital presence, we're your dedicated
        partner in achieving solo success.
      </p>

      {/* Button */}
      <button className="text-gray-50 font-bold tracking-wide border bg-gray-800 border-gray-500 py-4 px-12 rounded-md">
        View Pricing
      </button>
    </div>
  );
};

export default Hero;
