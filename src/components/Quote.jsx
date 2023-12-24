import React from "react";
import Avatar from "../assets/Avatar.svg";
import Logomark from "../assets/Logomark.svg";

const Quote = () => {
  return (
    <div className="flex font-satoshi flex-grow flex-col items-center justify-center gap-y-10 self-stretch bg-gray-50 p-6 md:p-20 my-32 tracking-wide">
      <div className="flex items-center justify-center space-x-4">
        <img src={Logomark} alt="Logomark" className="h-12 w-12" />
        <div className="text-4xl font-bold text-gray-950 leading-10">
          Sisyphus
        </div>
      </div>

      <div className="text-2xl md:text-5xl font-bold leading-[2.5rem] text-gray-800 text-center">
        We’ve been with unicraft to kick start every new project <br /> and can’t
        imagine working without it.
      </div>

      <div className="flex flex-col items-center justify-between gap-y-4 self-stretch">
        <div className="relative flex h-16 w-16 items-start rounded-full overflow-hidden">
          <img
            src={Avatar}
            alt="Avatar"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A2A8CD] to-transparent"
          />
          <div className="bg-background-1 absolute inset-0 rounded-full bg-cover bg-center" />
        </div>

        <div className="flex flex-col items-center justify-between gap-y-1 self-stretch">
          <div className="text-lg font-medium leading-7 text-gray-900">
            Candice Wu
          </div>
          <div className="text-base font-normal leading-6 text-slate-500">
            Product Manager, Sisyphus
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
