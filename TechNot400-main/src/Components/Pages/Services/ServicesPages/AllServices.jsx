import React from "react";
import { Link } from "react-router-dom";  
import { services_data } from "../servicesData";

const AllServices = () => {
  return (
    <>
      <div className="sm:py-20 py-10 bg-white overflow-x-hidden">
        <div className=" sm:mx-auto text-center">
          <h1 className="sm:text-[40px] text-[25px] mb-20 sm:mb-0 font-bold text-blue-500">
            <span className="text-yellow-600 font-serif">TRUBLE</span>'s Services Provided
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:mt-52 mt-32 sm:mx-28 mx-4 sm:gap-y-52 gap-y-32">
            {services_data.map((service, index) => (
              <div
                key={service.id}
                className="flex flex-col justify-center border-4 w-full px-4 sm:px-0 text-center rounded-b-2xl transform transition-transform hover:scale-105 duration-500 hover:shadow-lg dark:bg-gray-800 dark:text-gray-100 bg-blue-200 bg-opacity-85 shadow-xl border-black border-opacity-40"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="self-center sm:w-[26rem] w-72 sm:h-[20rem] h-36 sm:-mt-32 -mt-16 bg-center bg-cover rounded-lg dark:bg-gray-500 border-4 border-yellow-700"
                />
                <div className="flex-1 sm:mt-4 mt-2">
                  <h2 className="sm:text-3xl text-2xl font-bold tracking-wide text-yellow-700">
                    {service.title}
                  </h2>
                  
                </div>
                <div className="flex justify-center sm:mt-4 mt-2">
                  <Link
                    to={`/serviceDetails/${service.slug}`}
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                  >
                    <button className="border-2 sm:px-10 px-4 sm:py-3 py-2 sm:mb-4 rounded-lg border-blue-600 bg-opacity-40 hover:bg-blue-300 duration-300">Know more...</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
