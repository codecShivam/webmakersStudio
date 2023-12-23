import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import RecentWork from "../components/RecentWork";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-white via-transparent to-pink-100 shadow-lg">
        <Navbar />
        <Hero />
      </div>
      <Companies />
      <RecentWork />
    </>
  );
};

export default Home;

{
  /* <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white via-blue-100 to-pink-100"> */
}
