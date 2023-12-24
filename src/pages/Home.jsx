import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import RecentWork from "../components/recentWork/RecentWork";
import Working from "../components/Working";
import Quote from "../components/Quote";
import Pricing from "../components/pricing/Pricing";
import Faq from "../components/Faq";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

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
      <div className="bg-gradient-to-t from-white via-[#ded7de] to-[#d3cad8]">
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
