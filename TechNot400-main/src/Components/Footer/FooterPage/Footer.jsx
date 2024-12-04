import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 text-white bg-gray-900 sm:pb-4 pb-10 pt-10 sm:pt-20 dark:bg-dark mx-4 sm:mx-0">
        <div className="container mx-auto text-center">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <h1 className="text-[40px] text-left font-extrabold text-yellow-600">TRUBLE</h1>
                <p className="mb-7 text-base text-left text-body-color dark:text-dark-6">
                    Technology and Digital Marketing company in Assam,where we sweve seamless user expreience and digital exposure to our clients.
                </p>
              </div>
            </div>

            <LinkGroup header="Deals In">
              <NavLink link="/services" label="Web App Developement" />
              <NavLink link="/services" label="UI/UX Design" />
              <NavLink link="/services" label="Digital Marketing" />
              <NavLink link="/services" label="Influencer Marketing" />
              <NavLink link="/services" label="Logo Making" />

            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/about" label="About TRUBLE" />
              <NavLink link="/contact" label="Contact & Support" />
              <NavLink link="/career" label="Career" />
              <NavLink link="/#" label="Privacy Policy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/contact" label="Help & Support" />
              <NavLink link="/services" label="Our Services" />
              <NavLink link="/about" label="Know Our Team" />
            </LinkGroup>
            

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-yellow-200 dark:text-white">
                  Contact Us
                </h4>
                <p className="flex justify-center items-center mb-3">
                    <FaPhoneAlt className="text-xl"/>
                    <span className="ml-2">+91 70022 12345</span>
                </p>
                <p className="flex justify-center items-center mb-3">
                    <MdAttachEmail className="text-xl"/>
                    <span className="ml-2">not400tech@gmail.com</span>
                </p>
                <p className="flex justify-center">
                    <FaLocationDot className="text-xl"/>
                    <span className="ml-2">Naharkatiya, Opposite to Vegan's Cafe, <br />Moran Tiniali, Naharkatiya, <br />Assam, 786610</span>
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={307}
              height={309}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={105}
              height={105}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="57.5"
                  x2={105}
                  y2="57.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-yellow-200 dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
