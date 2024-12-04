// Career Component (Main Table with Job List)
import React, { useState, useEffect } from "react";
import { openings_data } from "./openings";
import NoOpenings from "./NoOpenings";
import ApplyPopUp from "./ApplyPopUp";

const Career = () => {
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    setData(openings_data);
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="p-4 my-20 dark:text-gray-800 font-poppins overflow-x-hidden">
      <h2 className="mb-8 text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">We're Hiring</h2>
      <div className="overflow-x-scroll">
        {data.length === 0 ? (
          <NoOpenings />
        ) : (
          <table className="w-full text-sm text-left whitespace-nowrap bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <th className="p-4">Sl.No.</th>
                <th className="p-4">Role</th>
                <th className="p-4">Req ID</th>
                <th className="p-4">Location</th>
                <th className="p-4">Posted</th>
                <th className="p-4">Apply</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="px-4 py-2 text-lg font-semibold text-gray-700 dark:text-gray-300">{item.id}</td>
                  <td className="px-4 py-2">{item.role}</td>
                  <td className="px-4 py-2">{item.reqId}</td>
                  <td className="px-4 py-2">{item.address}</td>
                  <td className="px-4 py-2">{item.posted}</td>
                  <td className="px-4 py-2">
                    <button
                      type="button"
                      onClick={() => handleApplyClick(item)}
                      className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ApplyPopUp renders only selected job details */}
      {selectedJob && <ApplyPopUp job={selectedJob} onClose={handleCloseModal} />}
    </div>
  );
};

export default Career;
