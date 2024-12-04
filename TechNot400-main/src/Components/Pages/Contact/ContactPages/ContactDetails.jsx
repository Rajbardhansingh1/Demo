import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const ContactDetails = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:not400tech@gmail.com"
  };

  const handlePhoneClick = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden font-poppins">
      <div className="h-0.5 sm:mx-32 mx-10 bg-slate-200"></div>
      <div className="container flex flex-wrap justify-center items-center mx-auto py-20 gap-10 px-16">
        <div className="flex-1 border-2 py-6 px-10 min-w-[300px] max-w-[400px] rounded-lg bg-blue-950 shadow-xl hover:scale-110 duration-300 cursor-pointer">
          <FaMapLocation className="text-5xl text-yellow-600 mb-10" />
          <h2 className="text-2xl font-bold text-green-500">Address</h2>
          <div className="text-md font-semibold mt-4 text-white">
            <p className="flex gap-3 items-center">
              <FaArrowRight className="text-yellow-600" />
              <h3>TRUBLE</h3>
            </p>
            <p>StartUp in Assam</p>
            <p>Opposite to Vegans Cafe,Moran Tiniali, Naharkatiya</p>
            <p>Assam, India, 786610</p>
          </div>
        </div>
        <div
          className="flex-1 border-2 py-6 px-10 min-w-[300px] max-w-[400px] rounded-lg bg-blue-950 shadow-xl hover:scale-110 duration-300 cursor-pointer"
          onClick={handleMailClick}
        >
          <IoMail className="text-5xl text-yellow-600 mb-10" />
          <h2 className="text-2xl font-bold text-red-500">Mail Us</h2>
          <div className="text-md font-semibold mt-4 text-white">
            <p>Enquire Here</p>
            <p className="flex gap-3 items-center font-mono">
              <FaArrowRight className="text-yellow-600" />
              <h3>not400tech@gmail.com</h3>
            </p>
          </div>
        </div>
        <div
          className="flex-1 border-2 py-6 px-10 min-w-[300px] max-w-[400px] rounded-lg bg-blue-950 shadow-xl hover:scale-110 duration-300 cursor-pointer"
        >
          <div>
            <LuPhoneCall className="text-5xl text-yellow-600 mb-10" />
            <h2 className="text-2xl font-bold text-green-500">Call Us</h2>
            <div className="text-md font-semibold mt-4 text-white">
              <p
                className="flex gap-3 items-center"
                onClick={() => handlePhoneClick("+917086178512")}
              >
                <FaArrowRight className="text-yellow-600" />
                <h3>+91 70861 78512</h3>
              </p>
              <p
                className="flex gap-3 items-center"
                onClick={() => handlePhoneClick("+916000688815")}
              >
                <FaArrowRight className="text-yellow-600" />
                <h3>+91 60006 88815</h3>
              </p>
              <p
                className="flex gap-3 items-center"
                onClick={() => handlePhoneClick("+917086238361")}
              >
                <FaArrowRight className="text-yellow-600" />
                <h3>+91 70862 38361</h3>
              </p>
              <p
                className="flex gap-3 items-center"
                onClick={() => handlePhoneClick("+919395450219")}
              >
                <FaArrowRight className="text-yellow-600" />
                <h3>+91 93954 50219</h3>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
