import React from "react";
import book_1 from "../../../../images/BookUs/BookUs_1.png";
import { MdVerifiedUser } from "react-icons/md";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa";

const BookUsHead = () => {
  const consultancy = [
    "Tailored Growth Strategy",
    "Revenue-Boosting Insights",
    "Customer Engagement Tactics",
    "Industry-Leading Expertise",
    "Complimentary Follow-Up Resources",
  ];
  return (
    <div className="pt-20 font-poppins">
      <div className="text-center sm:pt-10">
        <h1 className="sm:text-5xl text-3xl font-bold text-yellow-600 sm:px-0 px-1">
          UNLOCK BUSINESS POTENTIAL{" "}
          <span className="font-cursive text-red-600 font-bold text-6xl">
            {" "}
            &{" "}
          </span>{" "}
          GROW
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row sm:mx-10 mx-2 lg:mx-32 sm:pt-20 pt-4 gap-10 lg:gap-28 ">
        <div className="flex-1">
          <img
            className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform"
            src={book_1}
            alt="bookUs_1"
          />
        </div>
        <div className="sm:pt-3 pt-0 flex-1 sm:mx-0 mx-2">
          <p className="text-4xl pb-4 font-bold text-gray-600 ">
            <span className="text-green-600 font-cursive">30 Minutes </span> Stretegic Call
          </p>
          <p className="sm:text-xl text-lg font-semibold pb-8">
          Get personalized insights and actionable strategies to drive growth, increase revenue, and boost customer engagement. Our experts are here to help you succeed. Don’t miss this chance to get <span className="font-bold text-red-600"> UNIQUE & EFFECTIVE </span> digital stretegies .
          </p>
          <div>
            {consultancy.map((item, index) => (
              <div key={index} className="flex gap-3 sm:text-xl text-lg">
                <MdVerifiedUser className="mt-1 text-green-500" />
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:pt-20 pt-10 sm:mx-0 mx-3">
        <h2 className="text-4xl font-bold text-blue-950/90 flex justify-center">Wanna Know More <span className="sm:pl-3 text-red-600 mt-0 sm:text-4xl text-7xl"><FaQuestion />
        </span></h2>
        <div className="flex justify-center sm:pt-10 pt-0">
        <TbArrowBigDownLinesFilled className="text-5xl text-green-500"/>

        </div>
      </div>
    </div>
  );
};

export default BookUsHead;
