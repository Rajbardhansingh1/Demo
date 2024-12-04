import React from "react";
import doodle_2 from '../../../../images/BookUs/Doodle_2.png'
import GetOurSlot from "./GetOurSlot";

const BookUsSteps = () => {
  // Data to be mapped
  const steps = [
    {
      title: "Book Your Call",
      description: "Choose an available time slot from the calendar that works best for your schedule.",
    },
    {
      title: "Meet Your Strategic Expert",
      description: "Connect with one of our experienced strategic experts for a personalized discussion.",
    },
    {
      title: "Receive Actionable Advice",
      description: "Walk away with specific strategies for your business niche that can be immediately applied.",
    },
    {
      title: "Follow-Up Resources",
      description: "Get a tailored plan or resources post-call to keep your business on track for growth.",
    },
  ];

  return (
    <>
      <section className="text-gray-800 font-poppins">
        <div className="py-12 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-blue-900">
              How Our Business Consultation Works
            </h2>
            <p className="sm:px-0 px-2 mt-4 sm:text-xl text-base text-gray-600">
              <span className="text-red-600">EFFECTIVE</span> 30 Minutes Strategic Call
            </p>
          </div>
          <div className="sm:mx-0 mx-3 grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            {/* Steps Description */}
            <div className="lg:col-start-2 space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex items-center justify-center sm:w-12 w-28 sm:h-12 h-10 rounded-lg bg-violet-600 text-white font-semibold text-lg">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h4 className="sm:text-2xl text-lg font-bold text-gray-900">{step.title}</h4>
                    <p className="sm:mt-2 mt-0 sm:text-lg text-base text-gray-600 font-medium">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 ">
              <img
                src={doodle_2}
                alt="Consultation example"
                className="mx-auto sm:h-[600px] h-[300px]"
              />
            </div>
          </div>
        </div>
        <GetOurSlot/>
      </section>
    </>
  );
};

export default BookUsSteps;
