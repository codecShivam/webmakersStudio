import React from "react";

const Navbar = () => {
  return (
    <nav className="flex font-satoshi justify-between items-center py-7 p-4">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold text-gray-700">UniCraft</h1>
      </div>
      <div className="flex justify-center">
        <ul className="flex space-x-12 font-medium tracking-wide text-gray-700">
          <li>How it works</li>
          <li>Pricing</li>
          <li>FAQ</li>
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
