import React, { useState } from "react";
import data from "../data/FaqData.json";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  const toggleContent = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <div className="px-4 font-satoshi sm:px-6 lg:px-12 mx-auto max-w-screen-xl sm:py-12 my-12 bgbl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-satoshi sm:text-5xl lg:text-6xl font-extrabold text-zinc-900">
          Frequently asked questions
        </h2>
        <p className="mt-8 mb-16 text-xl sm:text-lg text-gray-700">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="sm:pt-4 pt-3 text-left border-t border-gray-200">
        {data.map((datas, index) => {
          return (
            <div className="sm:mb-4 mb-3 sm:pb-2 pb-2 border-b" key={index}>
              <div className="flex flex-row justify-between items-center">
                <h3 className="flex items-center sm:mb-4 mb-1 text-lg sm:text-xl font-medium text-gray-900 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {datas.question}
                </h3>
                <button onClick={() => toggleContent(index)}>
                  <img
                    src={isOpen[index] ? minus : plus}
                    alt={isOpen[index] ? "Minus" : "Plus"}
                    className="w-6 h-6 sm:w-8 sm:h-8 -mt-4 sm:-mt-6 opacity-50 hover:opacity-100"
                  />
                </button>
              </div>
              {isOpen[index] && (
                <p className="mt-2 text-gray-600">{datas.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
