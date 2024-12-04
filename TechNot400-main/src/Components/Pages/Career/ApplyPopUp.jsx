import React from 'react';

const ApplyPopUp = ({ job, onClose }) => {
  const handleWhatsAppClick = () => {
    const message = `Hello, I am interested in the position of ${job.role} with Req ID: ${job.reqId}.`;
    const encodedMessage = encodeURIComponent(message);
    
    const phoneNumber = '7086238361';
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    const mobileUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Checking that the user is in Mobile yafir Desktop
    if (navigator.userAgent.match(/Android|iPhone/i)) {
      window.location.href = mobileUrl;
    } else {
      window.open(url, "_blank"); 
    }
  };

  return (
    <div className="sm:fixed sm:inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6 md:px-8 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{job.role}</h3>
        <p><strong>Req ID:</strong> {job.reqId}</p>
        <p><strong>Posted:</strong> {job.posted}</p>
        <p><strong>Location:</strong> {job.address}</p>
        <p className="mt-4"><strong>Responsibilities:</strong> {job.responsibilities}</p>
        <p><strong>Experience Required:</strong> {job.experienceReqd}</p>
        <p><strong>Salary Package:</strong> {job.salaryPackage}</p>

        <div className="mt-6 flex justify-between gap-4 flex-wrap">
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Close
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Send Resume via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyPopUp;
