import React, { useState, useRef, useEffect } from 'react';
import { book_faq } from '../bookusfaq.js';

const BookUsFaq = () => {
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
        content.style.height = '0px';
      }
    });
  }, [openIndexes]);

  return (
    <section className="bg-gray-100 text-gray-800 pt-10 md:pt-20 font-poppins">
      <div className="container px-4 py-8 mx-auto md:px-8">
        <div className="flex flex-col md:flex-row justify-center md:gap-40">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left mb-4 md:mb-0">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 md:mt-10 mb-8 text-lg md:text-xl text-gray-600 text-center md:text-left">
              Looking for Answers? Our FAQ Section Provides Clear and Concise Information on Frequently Asked Questions to Guide You & Help You Find Quick Solutions Fast.
            </p>
          </div>
          <div className="space-y-6 md:space-y-8 w-full md:w-1/2">
            {book_faq.map((item, index) => (
              <div key={index} className="w-full border rounded-2xl overflow-hidden">
                <button
                  className="w-full px-4 py-6 md:py-10 text-left text-lg md:text-xl font-semibold bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
                  onClick={() => toggleDetails(index)}
                >
                  {item.question}
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-[height] duration-500 ease-in-out bg-white"
                  style={{ height: '0px' }}
                >
                  <p className="px-4 py-6 pt-0 text-gray-600 text-base md:text-xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookUsFaq;
