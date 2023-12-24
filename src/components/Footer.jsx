import React from "react";
import Twitter from "../assets/social/twitter.svg";
import Linkedin from "../assets/social/linkedin.svg";
import Facebook from "../assets/social/facebook.svg";
import Github from "../assets/social/github.svg";
import AngelList from "../assets/social/angelList.svg";
import Dribble from "../assets/social/dribble.svg";

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  github: Github,
  angelList: AngelList,
  dribble: Dribble,
};

const Footer = () => {
  return (
    <div className="gap-y-8 self-stretch text-left container">
      <div className="flex h-px mb-12 items-start self-stretch bg-gray-300" />
      <div className="flex justify-start items-start">
        <div className="font-satoshi flex-grow self-stretch leading-[normal] tracking-[-0.32px]">
          <div className="self-stretch text-2xl py-4 font-bold leading-[normal] text-gray-700">
            UniCraft
          </div>
          <div className="self-stretch text-lg font-medium leading-[normal] mb-8 text-gray-400">
            Design amazing digital experiences that
            <br />
            create more happy in the world.
          </div>
        </div>
      </div>
      <div className="font-inter flex h-6 flex-wrap items-center justify-between pb-12 self-stretch text-base font-normal leading-6 tracking-[0px] text-slate-400">
        <div className="flex flex-grow self-stretch">
          © 2077 Untitled UI. All rights reserved.
        </div>
        <div className="gap-x-5 flex flex-wrap">
          {Object.entries(socialIcons).map(([name, Icon]) => (
            <img
              key={name}
              className="h-6 w-6"
              src={Icon}
              alt={`${name} icon`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
