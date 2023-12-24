import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Check from "../../assets/check.svg";

const PricingPlan = ({
  name,
  description,
  price,
  includedFeatures,
  excludedFeatures,
  customClass,
  headingClass,
  textClass,
}) => {
  const [hoverProps, setHoverProps] = useState({ x: 0, y: 0 });

  const cardSpring = useSpring({
    transform: `perspective(600px) rotateX(${hoverProps.y}deg) rotateY(${hoverProps.x}deg)`,
    config: { mass: 5, tension: 350, friction: 40 },
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = 0.5 - (e.clientY - rect.top) / rect.height;

    setHoverProps({ x: x * 20, y: y * 20 });
  };

  return (
    <animated.div
      className={`flex flex-grow items-center justify-center gap-x-6 cursor-grab self-stretch h-full`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverProps({ x: 0, y: 0 })}
      style={cardSpring}
    >
      <div
        className={`flex flex-grow items-center justify-center self-stretch rounded-2xl border border-solid border-gray-200 ${customClass} py-10 px-6  h-full`}
      >
        <div className="flex flex-grow flex-col items-center justify-center gap-y-10 self-stretch">
          <div className="flex flex-col items-center justify-between gap-y-3 self-stretch">
            <div className="flex items-center justify-center self-stretch text-left tracking-[-0.32px]">
              <div className="flex flex-grow flex-col items-start justify-between gap-y-3 self-stretch">
                <animated.div
                  className={`self-stretch text-[22px] font-bold leading-[normal] ${headingClass}`}
                >
                  {name}
                </animated.div>
                <animated.div
                  className={`w-72 text-base font-medium leading-[normal] ${textClass}`}
                >
                  {description}
                </animated.div>
              </div>
            </div>
            <div className="flex flex-grow flex-col items-center justify-between gap-y-6 self-stretch">
              <div className="flex flex-grow items-center self-stretch pr-48 text-left">
                <div className="flex flex-grow items-center justify-center gap-x-2 self-stretch">
                  <animated.div
                    className={`self-stretch text-[56px] font-medium leading-[normal] tracking-[-0.32px] ${headingClass}`}
                  >
                    {price}
                  </animated.div>
                  <animated.div
                    className={`text-base font-normal leading-[normal] tracking-[0px] ${textClass}`}
                  >
                    / Month
                  </animated.div>
                </div>
              </div>
              <animated.button
                className={`flex bg-white items-center justify-center self-stretch rounded-lg border border-solid border-gray-600 py-2 px-10 sm:px-28 text-center text-base font-medium leading-[normal] tracking-[0px] ${
                  name === "Professional" ? "text-zinc-900" : null
                }`}
                style={{
                  transform: `scale(${hoverProps.x * 0.01 + 1}, ${
                    hoverProps.y * 0.01 + 1
                  })`,
                }}
              >
                <div className={`flex flex-grow justify-center self-stretch`}>
                  Get Started
                </div>
              </animated.button>
            </div>
          </div>
          <animated.div
            className={`flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch text-left text-base font-medium leading-[normal] tracking-[-0.32px] ${textClass}`}
          >
            {includedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex h-6 items-center justify-between gap-x-2 self-stretch"
              >
                <div className="h-5 w-5">
                  <img
                    src={Check}
                    alt="Check"
                    className={`fill-current ${
                      customClass !== "" ? "text-white" : textClass
                    }`}
                  ></img>
                </div>
                <div className="w-72 self-stretch">{feature}</div>
              </div>
            ))}
            {excludedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex h-6 items-center justify-between gap-x-2 self-stretch opacity-50"
              >
                <div className="h-5 w-5">
                  <img src={Check} alt="Check" className="fill-current "></img>
                </div>
                <div className="w-72 self-stretch">{feature}</div>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
};

export default PricingPlan;
