import React from "react";
import { GiClockwork } from "react-icons/gi";
import { FcAreaChart, FcMoneyTransfer } from "react-icons/fc";

// JSON structure for card data
const serviceCard = [
  { id: 1, title: "1,000+", description: "Integrations" },
  { id: 2, title: "99.5%", description: "Customer Satisfaction Rate" },
  { id: 3, title: "20+", description: "Projects Worked" },
  { id: 4, title: "100%", description: "Accuracy" },
];

const PlusPoint = () => {
  return (
    <>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-yellow-500 to-blue-500"></div>

      <div className="overflow-x-hidden overflow-y-hidden font-poppins bg-blue-100 sm:py-32 py-20">
        <div className="sm:grid sm:grid-cols-2 gap-32 items-center sm:mx-auto sm:px-6 lg:px-24">
          {/* Cards Section */}
          <div className="grid grid-cols-2 sm:gap-12 gap-3">
            {serviceCard.map((card, index) => (
              <div
                key={card.id}
                className={`bg-black bg-opacity-80 shadow-xl rounded-2xl flex flex-col items-center justify-center p-6 text-center sm:h-80 h-32 sm:w-80 w-32 mx-auto hover:scale-110 duration-300 ${
                  index === 1 ? "sm:mt-20 mt-10" : ""
                }`}
              >
                <h2
                  className={`sm:text-[60px] text-[28px] font-bold ${
                    index === 1 ? "text-yellow-600" : ""
                  } ${index === 0 ? "text-red-500" : ""} ${
                    index === 2 ? "text-blue-500" : ""
                  } ${index === 3 ? "text-green-500" : ""}`}
                >
                  {card.title}
                </h2>
                <p className="mt-2 text-gray-200 sm:text-xl text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className="text-left space-y-6 px-6 md:px-0 pt-16 sm:pt-0">
            <h1 className="sm:text-4xl text-2xl text-yellow-600 font-bold">
              Reasons why <span className="text-blue-600">Tech! 400</span> have the best services
            </h1>
            <p className="text-gray-800 font-semibold sm:text-xl">
              Highlight the speed advantage of your service, offering
              significantly faster performance compared to competitors.
              Emphasize the expertise and reliability of your company, backed by
              experienced personnel in the industry.
            </p>
            <div className="space-y-4 font-bold pt-10 sm:pt-0">
              <div className="flex items-center gap-2">
                <GiClockwork size={40} className="text-red-400"/>
                <span className="text-gray-800">24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-2">
                <FcAreaChart size={40} />
                <span className="text-gray-800">
                  Get your Business Exposure
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FcMoneyTransfer size={40} />
                <span className="text-gray-800">
                Up to 30% Cost Savings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="flex justify-center ml-[30%] w-[70%] h-[3px] bg-gradient-to-r from-blue-500 to-yellow-500"></div>

    </>
  );
};

export default PlusPoint;
