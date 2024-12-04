import React, { useState, useRef, useEffect } from "react";

const ServiceDetailsFaq = ({ faq }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const contentRefs = useRef([]);

  const toggleDetails = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  useEffect(() => {
    openIndexes.forEach((index) => {
      const content = contentRefs.current[index];
      if (content) {
        content.style.height = `${content.scrollHeight}px`;
      }
    });

    contentRefs.current.forEach((content, index) => {
      if (!openIndexes.includes(index) && content) {
        content.style.height = "0px";
      }
    });
  }, [openIndexes]);

  return (
    <section className="bg-gray-100 text-gray-800 pt-10 sm:pt-20 font-poppins">
      <div className="container flex flex-col lg:flex-row justify-between gap-10 lg:gap-40 px-4 py-8 mx-auto md:px-8">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-normal text-gray-600">
            Looking for Answers? Our FAQ Section Provides Clear and Concise
            Information on Frequently Asked Questions to Guide You & Help You
            Find Quick Solutions Fast.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 space-y-6">
          {faq.map((item, index) => (
            <div
              key={index}
              className="w-full border rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-4 py-4 sm:py-6 text-left text-base sm:text-lg md:text-xl font-semibold bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
                onClick={() => toggleDetails(index)}
              >
                {item.question}
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-[height] duration-500 ease-in-out bg-white"
                style={{ height: "0px" }}
              >
                <p className="px-4 py-4 pt-0 text-sm sm:text-base md:text-lg text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsFaq;
