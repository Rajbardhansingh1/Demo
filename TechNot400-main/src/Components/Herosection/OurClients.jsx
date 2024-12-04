import React from "react";
import { Link } from "react-router-dom";

const OurClients = () => {
  return (
    <div className="clients pt-16">
      <h6 className="flex items-center mb-6 text-xs font-normal text-body-color dark:text-dark-6">
        Some Of Our Clients
        <span className="inline-block w-8 h-px ml-3 bg-body-color"></span>
      </h6>
      <div className="flex items-center gap-4 xl:gap-[50px]">
        <Link to="#" className="block py-3">
          <img
            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
            alt="oracle"
          />
        </Link>
        <Link to="#" className="block py-3">
          <img
            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
            alt="intel"
          />
        </Link>
        <Link to="#" className="block py-3">
          <img
            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
            alt="logitech"
          />
        </Link>
      </div>
    </div>
  );
};

export default OurClients;
