import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import RecentWork from "../components/recentWork/RecentWork";
import Working from "../components/Working";
import Quote from "../components/Quote";
import Pricing from "../components/pricing/Pricing";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-white via-[#FCF7FC] to-[#dccbe3]  shadow-lg">
        <Navbar />
        <Hero />
      </div>
      <Companies />
      <RecentWork />
      <Working />
      <Quote />
      <Pricing />
      <Faq />
    </>
  );
};

export default Home;
