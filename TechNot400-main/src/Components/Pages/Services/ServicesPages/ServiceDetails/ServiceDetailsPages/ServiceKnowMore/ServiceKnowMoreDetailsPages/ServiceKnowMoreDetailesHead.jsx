import React from 'react';

const ServiceKnowMoreDetailesHead = ({ heading, description, additionalInfo }) => {
  return (
    <div className="px-8 py-20">
      <h1 className="text-3xl sm:text-5xl font-bold text-center">{heading}</h1>
      <p className="text-xl mt-8 leading-relaxed">{description}</p>
      {additionalInfo && <p className="text-lg mt-4">{additionalInfo}</p>}
    </div>
  );
};

export default ServiceKnowMoreDetailesHead;
