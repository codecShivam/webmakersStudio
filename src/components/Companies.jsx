import React from "react";
import Zapier from "../assets/companies/zapier.svg";
import Spotify from "../assets/companies/spotify.svg";
import Amazon from "../assets/companies/amazon.svg";
import Zoom from "../assets/companies/zoom.svg";
import Slack from "../assets/companies/slack.svg";
import Adobe from "../assets/companies/adobe.svg";
import Marquee from "react-fast-marquee";

const Companies = () => {
  const logos = [Zapier, Spotify, Amazon, Zoom, Slack, Adobe];

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-xl tracking-tighter leading-[normal]   text-center text-gray-500 pb-4">
        Trusted By 250+ Companies
      </h1>
      <Marquee>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="" className="w-72 mx-4" />
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
