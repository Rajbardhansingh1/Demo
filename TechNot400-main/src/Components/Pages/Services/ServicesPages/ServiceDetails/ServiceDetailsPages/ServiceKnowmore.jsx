import React, { useState } from "react";
import { GiClick } from "react-icons/gi";
import { Link } from "react-router-dom";

const ServiceKnowmore = ({ knowPlaces, title }) => {
  const [showAll, setShowAll] = useState(false);
  const generateSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  if (!knowPlaces || knowPlaces.length === 0) {
    return (
      <div className="text-center py-8 text-gray-600">
        No process information available.
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 lg:px-32 py-10 font-poppins">
      {knowPlaces.map((knowPlacesItem, index) => {
        const { knowPlacesDescription, knowPlacesData } = knowPlacesItem;
        // Determine how many items to display based on the showAll state
        const visibleItems = showAll
          ? knowPlacesData
          : knowPlacesData.slice(0, 3);

        const titleSlug = generateSlug(title);

        return (
          <div key={index} className="mb-10">
            {/* Header Section */}
            <h3 className="text-sm sm:text-lg font-bold mb-4 flex justify-center text-yellow-600 uppercase tracking-wide">
              MORE ON {title}
            </h3>
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-center text-blue-800 mb-6">
              Services on {title}
            </h4>
            <p className="mb-10 text-base sm:text-lg lg:text-xl text-gray-700 text-center px-2 sm:px-10 lg:px-20">
              {knowPlacesDescription}
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleItems.map((newplaceData, imgIndex) => {
                const placeSlug = generateSlug(newplaceData.place);

                return (
                  <div
                    key={imgIndex}
                    className="relative border p-8 rounded-xl shadow-lg bg-cover bg-center text-white"
                    style={{
                      backgroundImage: `url('https://media.istockphoto.com/id/1140409137/vector/trendy-low-poly-triangles-with-navy-bg.jpg?s=612x612&w=0&k=20&c=vunManM5m2lfkcgYpOd_dIF-gCGUEUL4SjLYe-o9Nng=')`,
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="border-2 py-2 px-4 rounded-xl bg-blue-300">
                        <h2 className="font-bold text-xl">{imgIndex + 1}</h2>
                      </div>
                      <h4 className="text-lg font-semibold text-white">
                        {title} in {newplaceData.place}
                      </h4>
                      <Link
                        to={`/serviceDetails/${titleSlug}/${placeSlug}`}
                        className="bg-yellow-400 flex items-center px-3 py-2 rounded-full shadow-lg hover:bg-yellow-500"
                      >
                        <GiClick className="text-xl sm:text-2xl" />
                      </Link>
                    </div>
                    <p className="py-3 px-2 border-2 rounded-b-xl bg-white text-gray-800">
                      {newplaceData.placeParagraph}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {/* Browse More / Browse Less Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          {showAll ? "Browse Less" : "Browse More"}
        </button>
      </div>
    </div>
  );
};

export default ServiceKnowmore;
