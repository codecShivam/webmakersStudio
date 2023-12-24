import React from "react";
import PricingPlan from "./PricingPlan";
import data from "../../data/PricingPlans.json";

const Pricing = () => {
  return (
    <div className="font-satoshi bg-gradient-to-r from-white via-[#FCF7FC] to-[#dccbe3] flex flex-grow flex-col items-center justify-end self-stretch py-24 leading-[normal]">
      <div className="flex flex-grow items-start justify-center self-stretch bg-cover bg-center">
        <div className="flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch px-8 md:px-32">
          <div className="flex  items-center justify-center text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-[normal] tracking-[-2px] text-gray-800">
            Pricing made for collaborative support.
          </div>
          <div className="flex w-full items-center justify-center text-center text-base md:text-xl lg:text-2xl font-medium leading-[normal] tracking-[0px] text-gray-500 my-4">
            Plain is made for your entire company. Only pay for users that
            actually<br></br> message customers. Everyone else is free, forever.
          </div>
          <div className="flex flex-wrap justify-around items-center gap-8 mt-8">
            {data.map((plan, index) => (
              <PricingPlan
                key={index}
                {...plan}
                customClass={index === 1 ? "bg-[#1F2937]" : "bg-white"}
                headingClass={index === 1 ? "text-gray-50" : "text-zinc-900"}
                textClass={index === 1 ? "text-gray-200" : "text-gray-800"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
