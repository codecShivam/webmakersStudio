import React, { useState, useEffect } from "react";
import Hamburger from "../assets/hamburger.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return <MobileNavbar isOpen={isOpen} toggleMenu={toggleMenu} />;
  } else {
    return <DesktopNavbar />;
  }
};

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <nav className="flex flex-col font-satoshi justify-between items-center py-7 p-4">
      <div className="flex items-center justify-between w-full">
        <div className="sm:block absolute">
          <h1 className="text-3xl font-semibold text-gray-700">UniCraft</h1>
        </div>
        <img
          src={Hamburger}
          alt="Menu"
          className="cursor-pointer w-6 absolute right-4 sm:hidden"
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`sm:flex w-full ${
          isOpen ? "flex flex-col" : "hidden"
        } mt-4 self-end`}
      >
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 font-medium tracking-wide text-gray-700 w-full">
          <li>
            <a
              href="#how-it-works"
              className="hover:text-gray-500 transition duration-300"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-gray-500 transition duration-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-gray-500 transition duration-300"
            >
              FAQ
            </a>
          </li>
        </ul>
        <button
          className="text-gray-500 border border-gray-700 py-2 px-6 rounded-md transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white mt-4 w-full"
          onClick={toggleMenu}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

const DesktopNavbar = () => {
  return (
    <nav className="flex flex-row font-satoshi justify-between items-center py-7 p-4">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold text-gray-700">UniCraft</h1>
      </div>
      <div>
        <ul className="flex flex-row space-x-12 font-medium tracking-wide text-gray-700">
          <li>
            <a
              href="#how-it-works"
              className="hover:text-gray-500 transition duration-300"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-gray-500 transition duration-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-gray-500 transition duration-300"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button className="text-gray-500 border border-gray-700 py-2 px-6 rounded-md transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
