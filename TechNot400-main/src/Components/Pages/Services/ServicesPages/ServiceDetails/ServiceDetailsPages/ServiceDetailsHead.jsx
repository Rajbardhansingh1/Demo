import React from "react";

const ServiceDetailsHead = ({ backgroundImage, summary, title }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[75vh] sm:h-screen mt-10 sm:mt-16 font-poppins overflow-x-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4 sm:px-16 lg:px-48">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">{title}</h1>
        <p className="mt-6 text-base sm:text-lg lg:text-2xl">{summary}</p>
      </div>
    </div>
  );
};

export default ServiceDetailsHead;
