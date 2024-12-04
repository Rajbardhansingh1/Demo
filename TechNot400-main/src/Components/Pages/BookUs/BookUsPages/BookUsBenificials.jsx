import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import business_type from "../../../../images/BookUs/BusinessesType.jpeg";

const BookUsBenificials = () => {
  return (
    <>
      <div className="flex gap-12">
        <div className="bg-black w-full md:w-[60%] h-[1px] md:ml-60"></div>
        <div className="bg-black w-full md:w-[60%] h-[1px] md:mr-60"></div>
      </div>

      <div className="pt-10 md:pt-20 font-poppins">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-600 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
            Which Businesses Can{" "}
            <span className="px-0 md:px-6 text-green-600">
              <FaHandshake />
            </span>{" "}
            The Slot Value?
          </h1>
        </div>
        
        <div className="flex justify-center pt-10 md:pt-20 pb-10 md:pb-16">
          <img className="w-[90%] h-auto md:w-[50%]" src={business_type} alt="Businesses Type" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 items-center text-center md:text-left">
  <div className="flex flex-col md:flex-row justify-center items-center md:gap-2">
    <div className="text-center md:text-right">
      <h3 className="text-3xl md:text-5xl font-bold">Still 100% Not Sure</h3>
      <h3 className="text-xl md:text-3xl font-bold">DON'T WORRY</h3>
    </div>
    <div className="pt-4 md:pt-1 text-5xl md:text-7xl text-yellow-700 text-center md:text-left">
      <FaQuestion />
    </div>
  </div>
  
  <div>
    <h4 className="text-3xl md:text-4xl font-bold">
      BOOK Your <span className="text-red-600">SPECIAL</span> SLOT Now!
    </h4>
    <a 
      href="https://ankitbiswas0403.myinstamojo.com/checkout/v2/customer-info" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className="mt-4 px-6 md:px-8 py-3 font-semibold text-yellow-400 bg-black rounded-xl shadow-lg shadow-blue-500 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.4),0_0_30px_15px_rgba(255,223,0,0.2)] focus:outline-none focus:ring-2 focus:ring-yellow-400">
        Book Me For 30 Minutes
      </button>
    </a>
  </div>
</div>

      </div>
    </>
  );
};

export default BookUsBenificials;
