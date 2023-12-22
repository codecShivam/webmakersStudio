import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-end pb-12 items-center space-y-8 h-[60vh] p-4">
      <h1 className="text-7xl text-center font-semibold text-gray-800 pb-12">
        Elevate Your Presence with <br></br> Seamless Design and Innovation.
      </h1>
      <p className="text-xl font-light text-gray-600">
        From strategic planning to digital presence, we're your dedicated
        partner in achieving solo success.
      </p>
      <button className="text-gray-50 border bg-gray-700 border-gray-500 py-2  mt-16 px-6 rounded-md">
        View Pricing
      </button>
    </div>
  );
};

export default Hero;
