// src/Components/Pages/AboutUsPages/ObjectiveDetails/ObjectiveDetails.jsx

import React from "react";
import { Link, useParams } from "react-router-dom";
import { objective_data } from "../../objectiveData";
import { FaLocationArrow } from "react-icons/fa";

const ObjectiveDetails = () => {
  const { id } = useParams();
  const item = objective_data.find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className=" pt-20 overflow-x-hidden overflow-y-hidden bg-blue-100/70">
      <div className="sm:mx-44 mx-4">
        <h1 className="sm:text-7xl text-3xl font-bold font-serif text-yellow-600 text-center sm:py-16 py-4 ">
          {item.title}
        </h1>
        <div className="sm:flex gap-32 ">
          <img
            src={item.image}
            alt={item.title}
            className="flex-1 rounded-3xl w-full sm:h-96 h-52 object-cover mt-4 border-2 border-blue-200"
          />
          <p className="sm:mt-4 mt-10 flex-1 flex items-center sm:text-2xl text-lg font-bold sm:py-8 py-4 sm:px-20 px-6 border-2 sm:my-20 my-10 border-blue-300/70 rounded-3xl bg-blue-300/10">
            {item.description}
          </p>
        </div>
        <div className="sm:my-24 my-10 space-y-10">
          {item.details.map((detail, index) => {
            switch (detail.type) {
              case "paragraph":
                return (
                  <p key={index} className="sm:text-xl text-md font-semibold">
                    {detail.content}
                  </p>
                );
              case "heading":
                return React.createElement(
                  `h${detail.level}`,
                  {
                    key: index,
                    className: "sm:text-3xl text-2xl font-bold text-yellow-600",
                  },
                  detail.content
                );
              case "list":
                return (
                  <ul
                    key={index}
                    className="list-disc list-inside sm:text-2xl text-lg text-blue-500 font-semibold"
                  >
                    {detail.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              // case 'image':
              //   return <img key={index} src={detail.src} alt={detail.alt} className="w-full h-auto" />;
              // default:
              //   return null;
            }
          })}
        </div>
        <div className="flex items-center gap-5 border-t-2 border-gray-800">
          <h2 className="text-md font-semibold">For more details, contact us</h2>
          <Link to='/contact'>
            <FaLocationArrow/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveDetails;
