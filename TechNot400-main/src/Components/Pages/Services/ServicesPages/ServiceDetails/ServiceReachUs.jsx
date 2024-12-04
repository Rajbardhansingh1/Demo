import React from "react";
import { Link } from "react-router-dom";

const ServiceReachUs = () => {
  return (
    <>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-yellow-500 to-blue-500"></div>

      <div className="bg-blue-100">
        <div className="overflow-x-hidden overflow-y-hidden font-poppins sm:mx-40 text-center sm:py-20 py-10">
          <h1 className="sm:text-[60px] text-[20px] font-semibold sm:font-normal font-serif text-yellow-700 sm:mb-12 mb-6">
          Our commitment to service fosters strong, lasting relationships with our customers.
          </h1>
          <p className="sm:text-2xl text-sm px-3 mb-10">
          As a unified and dedicated team, we are devoted to delivering top-notch service tailored to your needs. Get in touch with us, and let's start an extensive conversation about making your dreams a reality. 
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="relative sm:px-8 px-6 sm:py-4 py-3 ml-4 overflow-hidden font-semibold rounded-2xl bg-blue-300 dark:bg-gray-800 dark:text-gray-50 hover:bg-blue-200 duration-300"
            >
              Contact Us
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-yellow-600 dark:bg-violet-600">
                Now
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center ml-[30%] w-[70%] h-[3px] bg-gradient-to-r from-blue-500 to-yellow-500"></div>
    </>
  );
};

export default ServiceReachUs;
