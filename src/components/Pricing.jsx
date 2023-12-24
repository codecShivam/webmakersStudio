// components/Pricing.js
import React from "react";
import Check from "../assets/check.svg";
import pricingData from "../data/PricingPlans.json";

const PricingPlan = ({ name, description, price, features }) => {
  const isFeatureIncluded = (feature) => features.includes(feature);

  return (
    <div className="flex flex-grow items-center justify-center self-stretch rounded-2xl border border-solid border-gray-200 bg-white py-10 px-6">
      <div className="flex flex-grow flex-col items-center justify-center gap-y-10 self-stretch">
        <div className="flex flex-col items-center justify-between gap-y-3 self-stretch">
          <div className="flex items-center justify-center self-stretch text-left tracking-[-0.32px]">
            <div className="flex flex-grow flex-col items-start justify-between gap-y-3 self-stretch">
              <div className="self-stretch text-[22px] font-bold leading-[normal] text-zinc-900">
                {name}
              </div>
              <div className="w-72 text-base font-medium leading-[normal] text-gray-500">
                {description}
              </div>
            </div>
          </div>
          <div className="flex flex-grow flex-col items-center justify-between gap-y-6 self-stretch">
            <div className="flex flex-grow items-center self-stretch pr-48 text-left">
              <div className="flex flex-grow items-center justify-center gap-x-2 self-stretch">
                <div className="self-stretch text-[56px] font-medium leading-[normal] tracking-[-0.32px] text-gray-800">
                  {price}
                </div>
                <div className="text-base font-normal leading-[normal] tracking-[0px] text-gray-600">
                  / Month
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center self-stretch rounded-lg border border-solid border-gray-600 py-2.5 px-28 text-center text-base font-medium leading-[normal] tracking-[0px] text-gray-600">
              <div className="flex flex-grow justify-center self-stretch">
                Get Started Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch text-left text-base font-medium leading-[normal] tracking-[-0.32px] text-gray-800">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex h-6 items-center justify-between gap-x-2 self-stretch ${
                isFeatureIncluded(feature) ? "text-green-500" : "text-gray-500"
              }`}
            >
              <div className="h-5 w-5">
                <img
                  src={Check}
                  alt="Check"
                  className="fill-current"
                  style={{
                    fill: isFeatureIncluded(feature) ? "#10B981" : "#6B7280",
                  }}
                ></img>
              </div>
              <div className="w-72 self-stretch">{feature}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="font-satoshi bg-gradient-to-r from-white via-[#FCF7FC] to-[#dccbe3] flex flex-grow flex-col items-center justify-end self-stretch pt-32 leading-[normal]">
      <div className="flex flex-grow items-start justify-center self-stretch bg-cover bg-center pb-96 pt-2">
        <div className="flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch py-20 px-32">
          <div className="flex items-center justify-center text-center text-[58px] font-bold leading-[normal] tracking-[-2px] text-gray-800">
            Pricing made for collaborative support.
          </div>
          <div className="flex w-96 items-center justify-center text-center text-xl font-medium leading-[normal] tracking-[0px] text-gray-500">
            Plain is made for your entire company. Only pay for users that
            actually message customers. Everyone else is free, forever.
          </div>
          <div className="flex flex-grow flex-col items-center justify-end self-stretch pt-9">
            {pricingData.map((plan, index) => (
              <PricingPlan key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
