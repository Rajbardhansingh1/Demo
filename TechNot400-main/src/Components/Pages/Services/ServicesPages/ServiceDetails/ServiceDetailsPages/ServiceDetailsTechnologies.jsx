import React from "react";

const ServiceDetailsTechnologies = ({ technologies }) => {
  if (!technologies || technologies.length === 0) {
    return (
      <div className="text-center py-8 text-gray-600">
        No technology information available.
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden font-poppins px-4 sm:px-8 lg:px-40 py-8">
      {/* Section Header */}
      <h2 className="text-lg text-yellow-600 text-center font-bold mb-6">
        TECHNOLOGIES
      </h2>

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row mb-10">
        {/* Title */}
        <div className="flex-1 mb-6 md:mb-0 md:mr-4">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left font-bold leading-relaxed text-blue-900">
            Technologies We Work With
          </h4>
        </div>

        {/* Description */}
        <div className="flex-1 pt-4">
          <h3 className="text-base sm:text-lg lg:text-xl text-gray-700 text-center md:text-left">
            We specialize in cutting-edge technologies including React, Node.js,
            Tailwind CSS, Cloudinary, Redux, and many more for innovative and
            efficient web solutions.
          </h3>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
          >
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-12 h-auto sm:w-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailsTechnologies;
