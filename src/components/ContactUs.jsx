import React from "react";
import { useSpring, animated } from "react-spring";

const ContactUs = () => {
  const [springProps, setSpringProps] = useSpring(() => ({
    scale: 1,
  }));

  const handleHover = () => {
    setSpringProps({ scale: 1.1 });
  };

  const handleLeave = () => {
    setSpringProps({ scale: 1 });
  };

  return (
    <div className="flex flex-col items-center justify-end self-stretch">
      <div className="flex flex-grow items-center justify-center self-stretch">
        <div className="bg-gradient flex flex-grow items-end justify-center self-stretch bg-cover bg-center pt-10 sm:pt-20">
          <div className="flex flex-grow flex-col items-center justify-between gap-y-14 sm:gap-y-28 self-stretch py-4 sm:py-8 px-4 sm:px-8">
            <div className="font-satoshi flex flex-grow flex-col items-center justify-between gap-y-4 self-stretch text-center leading-[normal]">
              <div className="flex flex-grow flex-col items-center justify-between gap-y-4 self-stretch">
                <div className="flex justify-center self-stretch text-[32px] sm:text-[72px] font-black leading-[normal] tracking-[-2px] text-gray-900">
                  <span>
                    No long-term contracts.
                    <br />
                    No catches. Simple.
                  </span>
                </div>
                <div className="flex justify-center self-stretch text-base sm:text-xl font-medium leading-[normal] tracking-[0px] text-slate-500">
                  Start your 30-day free trial. Cancel anytime.
                </div>
              </div>
              <animated.button
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                style={{
                  transform: springProps.scale.interpolate((s) => `scale(${s})`),
                }}
                className="flex items-center justify-center rounded-lg bg-gray-800 py-3 sm:py-4 px-8 sm:px-14 text-base sm:text-xl font-bold leading-[normal] tracking-[-0.32px] text-gray-50"
              >
                <div className="flex flex-grow justify-center self-stretch">
                  Contact us
                </div>
              </animated.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
