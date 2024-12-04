import React, { useState, useEffect } from "react";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { services_data } from "../servicesData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = services_data.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 7000); // 5 seconds

    return () => clearInterval(interval);
  }, [totalItems]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  return (
    <div className="w-full overflow-hidden h-screen relative sm:pt-16 pt-12">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {services_data.map((service, index) => (
          <div
            key={service.id}
            className="w-screen h-screen flex-shrink-0 flex justify-start items-center text-white bg-cover bg-center  relative"
            style={{ backgroundImage: `url(${service.carouselImg})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-blue-700 opacity-55"></div>

            {/* Text Content */}
            <div className="z-10 bg-black sm:w-[35rem] w-auto h-[33rem] sm:h-auto sm:px-20 sm:py-16 py-12 sm:mx-40 bg-opacity-45 p-4 rounded-xl">
              <h2 className="sm:text-5xl text-3xl font-bold mb-4 text-yellow-600">{service.title}</h2>
              <p className="sm:text-lg mb-10">{service.description}</p>
              <Link to={`/serviceDetails/${service.slug}`}>
                <button className="flex items-center gap-4 border-4 rounded-xl border-yellow-600 hover:border-black/40 hover:bg-yellow-600 sm:px-8 px-3 sm:py-3">
                  <h2 className="font-bold">Know more</h2> 
                  <IoIosArrowRoundForward className="text-4xl"/>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
