import React from "react";
import { Link } from "react-router-dom";
import { objective_data } from "../objectiveData";

const OurObjective = () => {
  return (
    <>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-yellow-500 to-blue-500"></div>
      <div className="sm:py-20 sm:mx-28 py-20">
        <h1 className="text-[40px] mb-20 sm:mb-0 text-center font-bold text-blue-500"><span className="text-yellow-600 font-serif">TRUBLE</span>'s  Initiatives Undertaken</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-16 gap-10 sm:pt-20 justify-center">
          {objective_data.map((item) => (
            <div
              key={item.id}
              className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-6 sm:mx-0 hover:scale-105 sm:hover:scale-110 duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    {item.title}
                  </h2>
                  <p className="dark:text-gray-800">{item.description}</p>
                </div>
                <Link
                  to={`/objectiveDetails/${item.id}`}
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                  <button className="border-2 sm:px-10 px-6 sm:py-3 py-2 rounded-lg border-blue-300 bg-blue-200 text-gray-800">Read more...</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center ml-[30%] w-[70%] h-[3px] bg-gradient-to-r from-blue-500 to-yellow-500"></div>
    </>
  );
};

export default OurObjective;
