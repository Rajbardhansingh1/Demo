import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../images/heroImage.jpg";
import backgroundGif from "../../images/animation_2.mp4";
import stars from "../../images/stars.png";
import {motion} from 'framer-motion'
import OurClients from "./OurClients";

const Herosection = () => {
  return (
    <div className="font-poppins overflow-x-hidden">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full object-cover -z-10"
          src={backgroundGif}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          // Ensure the video fills only the Hero section
        />
        <div className="absolute top-0 left-0 w-full h-[100%] bg-blue-100 opacity-70 -z-10 pointer-events-none"></div>
        {/* Component from tail grid */}
        <div className="relative dark:bg-dark pt-[120px] pb-[110px] lg:pt-[150px]">
          <div className="container mx-auto px-4 sm:px-10">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-6/12">
                <div className="hero-content">
                  <motion.div variants={{
                     visible:{opacity: 1, y:0},
                     hidden:{opacity:0, y: -100}
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 0.8, delay: 0.40}}>
                     <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-yellow-500 dark:text-white text-[17px] sm:text-[42px] lg:text-[40px] xl:text-4xl">
                    JOIN US TO
                    <br />
                    <span className="text-xl  sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-blue-900">DISCOVER THE world of</span>
                    <br />
                    <span className="text-3xl sm:text-6xl">
                      DIGITAL-MARKETING, ADVERTISEMENT,
                    </span>
                    <br />
                    <span className="text-4xl sm:text-6xl">WEBSITES, APPS & DESIGN</span>
                  </h1>
                  </motion.div>
                  <motion.div variants={{
                     visible:{opacity: 1, y:0},
                     hidden:{opacity:0, y:100}
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 0.8, delay: 0.40}}>
                     <div className="flex justify-center border-2 border-gray-500/50 rounded-2xl w-full max-w-screen-sm my-8 px-2 py-10 bg-blue-100/40 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <p className="max-w-[480px] text-base text-gray-700 font-semibold dark:text-dark-6">
                      We deliver brands Websites to come up digitally and make
                      them visible to the world through advertising them,
                      gathering and giving ideas to grow, design, to develop web
                      applications and high-level digital advertisement and
                      marketing as per the business needs accordingly.
                    </p>
                  </div>
                  </motion.div>
                  

                  <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <li>
                      <Link
                        to="/bookus"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-yellow-600 hover:bg-yellow-100 hover:text-black border-2 hover:border-yellow-600 lg:px-7"
                      >
                        Get Started
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="py-3 sm:px-5 px-3 text-center text-base text-black font-semibold dark:text-white hover:bg-yellow-600 hover:border-white bg-yellow-100 border-2 border-yellow-600 rounded-md hover:text-white"
                      >
                        Explore Here
                      </Link>
                    </li>
                  </ul>
                  <OurClients/>
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-1/12"></div>
              
                     
              <div className="w-full px-4 lg:w-5/12 mb-56">
                <div className="lg:ml-auto lg:text-right">
                  <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <motion.div variants={{
                     visible:{opacity: 1, x:0, filter: "blur(0px)"},
                     hidden:{opacity:0, x:60}, filter: "blur(5px)"
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 0.8, delay: 0.25}}>
                     <img
                      src={heroImage}
                      alt="hero"
                      className="max-w-full lg:ml-auto rounded-tl-[25%] rounded-bl-[25%] rounded-tr-[5%] rounded-br-[5%]"
                    />
                    <img
                      src={stars}
                      alt="stars"
                      className="z-20 h-28 absolute mt-[-105%] right-[-8%] opacity-70 hover:opacity-100"
                    />
                    <span className="absolute -left-8 -bottom-8 z-[-1]">
                      <svg
                        width="105"
                        height="105"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="#FFD700" />
                        <circle cx="6" cy="24.5" r="6" fill="#FFD700" />
                        <circle cx="6" cy="46.5" r="6" fill="#FFD700" />
                        <circle cx="6" cy="68.5" r="6" fill="#FFD700" />
                        <circle cx="6" cy="90.5" r="6" fill="#FFD700" />
                        <circle cx="24.5" cy="6" r="6" fill="#FFD700" />
                        <circle cx="24.5" cy="24.5" r="6" fill="#FFD700" />
                        <circle cx="24.5" cy="46.5" r="6" fill="#FFD700" />
                        <circle cx="24.5" cy="68.5" r="6" fill="#FFD700" />
                        <circle cx="24.5" cy="90.5" r="6" fill="#FFD700" />
                        <circle cx="46.5" cy="6" r="6" fill="#FFD700" />
                        <circle cx="46.5" cy="24.5" r="6" fill="#FFD700" />
                        <circle cx="46.5" cy="46.5" r="6" fill="#FFD700" />
                        <circle cx="46.5" cy="68.5" r="6" fill="#FFD700" />
                        <circle cx="46.5" cy="90.5" r="6" fill="#FFD700" />
                        <circle cx="68.5" cy="6" r="6" fill="#FFD700" />
                        <circle cx="68.5" cy="24.5" r="6" fill="#FFD700" />
                        <circle cx="68.5" cy="46.5" r="6" fill="#FFD700" />
                        <circle cx="68.5" cy="68.5" r="6" fill="#FFD700" />
                        <circle cx="68.5" cy="90.5" r="6" fill="#FFD700" />
                        <circle cx="90.5" cy="6" r="6" fill="#FFD700" />
                        <circle cx="90.5" cy="24.5" r="6" fill="#FFD700" />
                        <circle cx="90.5" cy="46.5" r="6" fill="#FFD700" />
                        <circle cx="90.5" cy="68.5" r="6" fill="#FFD700" />
                        <circle cx="90.5" cy="90.5" r="6" fill="#FFD700" />
                      </svg>
                    </span>
                  </motion.div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
