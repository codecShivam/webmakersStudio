import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-7 p-4 ">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-700">UniCraft</h1>
      </div>
      <div className="flex justify-center">
        <ul className="flex space-x-4 font-light tracking-tighter text-gray-700">
          <li>How it works</li>
          <li></li>Pricing
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <button className="text-gray-500 border border-gray-500 py-2 px-6 rounded-md">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
