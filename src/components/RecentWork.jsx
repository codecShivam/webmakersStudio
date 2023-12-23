import React from "react";
import AnimatedImage from "./AnimatedImage";
import Left from "../assets/work/secondRight.svg";
import SecondLeft from "../assets/work/secondLeft.svg";
import Center from "../assets/work/center.svg";
import SecondRight from "../assets/work/secondRight.svg";
import Right from "../assets/work/secondLeft.svg";

const images = [Left, SecondLeft, Center, SecondRight, Right];

const RecentWork = () => {
  return (
    <div className="flex flex-col justify-center items-center my-16 overflow-x-hidden">
      <div className="flex justify-center items-center">
        {images.map((image, index) => (
          <AnimatedImage key={index} src={image} index={index} />
        ))}
      </div>
      <div className="font-satoshi flex items-center justify-center rounded-lg border border-solid border-gray-600 py-4 px-14 text-center text-xl font-semibold leading-[normal] tracking-[-0.32px] text-gray-500 [box-shadow:inset_2px_4px_10px_0px_rgba(203,_203,_203,_0.2)] mt-14" >
            <div className="flex flex-grow justify-center self-stretch">
              View recent work
            </div>
          </div>
    </div>
  );
};

export default RecentWork;
