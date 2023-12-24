import React from "react";
import { useSpring, animated } from "react-spring";

const Hero = () => {
  const [springProps, setSpringProps] = useSpring(() => ({
    scale: 1,
    boxShadow: "0px 0px 0px 0px rgba(203, 203, 203, 0.2)",
  }));

  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col font-satoshi justify-end pb-12 items-center space-y-6 sm:h-[58vh] p-4">
      <h1 className="xl:text-7xl md:text-6xl text-center font-semibold text-gray-800 sm:text-5xl text-4xl sm:mt-0 mt-12">
        Elevate Your Presence with <br /> Seamless Design and Innovation.
      </h1>

      <p className="text-xl font-light text-gray-600 text-center sm:text-lg pb-12">
        From strategic planning to digital presence, we're your dedicated
        partner in achieving solo success.
      </p>

      <animated.button
        onMouseEnter={() => setSpringProps({ scale: 1.1, boxShadow: "inset 2px 4px 10px 0px rgba(203, 203, 203, 0.4)" })}
        onMouseLeave={() => setSpringProps({ scale: 1, boxShadow: "0px 0px 0px 0px rgba(203, 203, 203, 0.2)" })}
        onClick={handleScrollToPricing}
        style={{
          transform: springProps.scale.interpolate((s) => `scale(${s})`),
          boxShadow: springProps.boxShadow,
        }}
        className="flex items-center justify-center rounded-lg bg-gray-800 py-4 px-14 text-xl font-bold leading-[normal] tracking-[-0.32px] text-gray-50"
      >
        <div className="flex flex-grow justify-center self-stretch">
          View Pricing
        </div>
      </animated.button>
    </div>
  );
};

export default Hero;
