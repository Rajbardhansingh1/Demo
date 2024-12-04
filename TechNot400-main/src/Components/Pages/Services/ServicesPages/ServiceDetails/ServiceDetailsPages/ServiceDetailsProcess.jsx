import React from "react";

const ServiceDetailsProcess = ({ process }) => {
  if (!process || process.length === 0) {
    return <div className="text-center py-8 text-gray-600">No process information available.</div>;
  }

  return (
    <div className="px-4 sm:px-8 py-8 font-poppins">
      {process.map((processItem, index) => {
        const { processDescription, images } = processItem;

        return (
          <div
            key={index}
            className="overflow-x-hidden sm:overflow-hidden mx-auto max-w-7xl mb-10 mt-16"
          >
            {/* Process Title */}
            <h3 className="text-lg font-bold mb-4 text-center text-yellow-600">
              OUR PROCESS
            </h3>
            <h4 className="text-3xl sm:text-5xl text-blue-800 text-center font-semibold mb-6">
              Know Our Workflow
            </h4>
            <p className="mb-10 text-base sm:text-lg font-normal mx-auto text-center max-w-4xl">
              {processDescription}
            </p>

            {/* Process Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="border p-4 rounded-xl shadow-lg bg-white"
                >
                  {/* Image */}
                  <img
                    src={img.src}
                    alt={`Process ${imgIndex + 1}`}
                    className="w-full h-auto mb-4 rounded-t-xl"
                  />

                  {/* Step Heading */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="border-2 py-2 px-4 rounded-xl bg-blue-200 flex justify-center items-center">
                      <h2 className="font-bold text-blue-800">{imgIndex + 1}</h2>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                      {img.heading}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="py-2 px-3 border-2 rounded-b-xl bg-slate-50 text-sm sm:text-base">
                    {img.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceDetailsProcess;
