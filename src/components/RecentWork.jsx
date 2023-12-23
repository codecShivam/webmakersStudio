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
      <button className="text-xl border border-gray-500 p tracking-tight font-light font-serif text-center text-gray-500 px-6 py-2 rounded-md mt-12">
        View Recent Work
      </button>
    </div>
  );
};

export default RecentWork;
