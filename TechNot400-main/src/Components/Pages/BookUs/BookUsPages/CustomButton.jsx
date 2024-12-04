
import React from 'react';

const CustomButton = ({ text, href, className }) => {
  return (
    <div className="flex justify-center">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button
          className={`mt-4 px-12 py-5 font-semibold rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 ${className}`}
        >
          {text}
        </button>
      </a>
    </div>
  );
};

export default CustomButton;
