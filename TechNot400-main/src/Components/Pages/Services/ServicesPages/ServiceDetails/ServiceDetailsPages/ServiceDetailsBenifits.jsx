import React, { useState } from "react";
import "./benifit.css";
import { FaEye } from "react-icons/fa";

const ServiceDetailsBenifits = ({ benifits, benifitHead }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Number of subbenefits to display initially
  const initialItemsToShow = 0; // Adjust based on your needs

  return (
    <div className="pt-16 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 font-poppins">
      <h2 className="text-lg sm:text-xl text-yellow-600 font-bold mb-4 text-center">
        BENEFITS
      </h2>
      <h1 className="pt-8 pb-6 px-4 sm:px-16 lg:px-32 text-blue-800 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {benifitHead}
      </h1>

      {/* Main Sentence */}
      <p className="text-base sm:text-lg md:text-2xl mt-4 mb-8 text-center">
        {benifits.mainSentence}
      </p>

      {/* Sub Benefits List */}
      <div className="flex flex-col items-center">
        {benifits.subbenifits
          .slice(
            0,
            isExpanded ? benifits.subbenifits.length : initialItemsToShow
          )
          .map((benefit, index) => (
            <div key={index} className="mb-6 sm:mb-8 px-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left">
                {benefit.heading}
              </h3>
              <p className="text-sm sm:text-base md:text-lg mt-2 text-center sm:text-left">
                {benefit.content}
              </p>
            </div>
          ))}
      </div>

      {benifits.subbenifits.length > initialItemsToShow && (
        <div className="text-center flex justify-center">
          <button
            onClick={toggleExpansion}
            className="custom-button flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm sm:text-base"
          >
            <FaEye />
            <span>{isExpanded ? "See Less" : "See More"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailsBenifits;
