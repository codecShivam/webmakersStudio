import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import RecentWork from "../components/RecentWork";
import Working from "../components/Working";
import Quote from "../components/Quote";
import Pricing from "../components/Pricing/Pricing";

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
    </>
  );
};

export default Home;

{
  /* <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white via-blue-100 to-pink-100"> */
}
