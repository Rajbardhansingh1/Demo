import React, { useEffect, useRef } from "react";
import logo4 from "../images/Features/f4.png";
import logo5 from "../images/Features/f5.png";
import logo6 from "../images/Features/f6.png";
import image2 from "../images/Features/fb22.png";
import program_icon_2 from "../images/program-icon-3.png";
import { useAnimation, useInView, motion } from "framer-motion";

const Features2 = () => {
    const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <>
    <div className="max-w-screen overflow-x-hidden overflow-y-hidden font-poppins">
      {/* feature section */}
      <section className="">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
           <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div aria-hidden="true" className="mt-10 lg:mt-0 relative">
                  <img
                    src={image2}
                    alt=""
                    className="hover:drop-shadow-xl rounded-lg shadow-lg mx-auto sm:w-[100%] block"
                  />
                  <div
                    className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex justify-center items-center flex-col text-white cursor-pointer opacity-0 pt-[70%] hover:opacity-100 hover:pt-0"
                    style={{ transition: "all 0.3s ease-in-out" }}
                  >
                    <img
                      src={program_icon_2}
                      alt=""
                      className="sm:w-[100px] w-[60px] mb-[10px]"
                    />
                    <p>Digital Marketing / Advertisement</p>
                  </div>
                </div>
              </motion.div>
              <div className="pt-12 sm:pt-0">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-yellow-600">
                  Opportunities to interact worldwide
                </h3>
                <p className="mt-3 text-lg">
                  Leveraging advanced digital communication tools, organisations
                  can expand geographical boundaries, fostering interactions and
                  building relationships with clients, partners, and
                  stakeholders worldwide.
                </p>
                <div className="mt-12 space-y-12">
                  <motion.div
                    className="flex"
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <img src={logo4} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-blue-500">
                        SEO and SEM Optimization
                      </h4>
                      <p className="mt-2">
                        <span className="font-bold text-yellow-600">
                          TRUBLE
                        </span>
                        's experts optimize your website and content for search
                        engines, improving visibility and driving organic
                        traffic through effective SEO and SEM strategies.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex"
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.50 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <img src={logo5} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-blue-500">
                        Social Media, Influencer & E-mail Marketing
                      </h4>
                      <p className="mt-2">
                        <span className="font-bold text-yellow-600">
                          TRUBLE
                        </span>{" "}
                        manage your social media presence, creating engaging
                        posts and campaigns that build brand loyalty and foster
                        a community and design personalized email marketing
                        campaigns that inform customers with relevant messaging.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex"
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.75 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <img src={logo6} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-blue-500">
                        Analytics and Reporting Service
                      </h4>
                      <p className="mt-2">
                        <span className="font-bold text-yellow-600">
                          TRUBLE
                        </span>{" "}
                        team provides detailed analytics and reports, tracking
                        the performance of marketing campaigns and providing
                        insights to optimize future strategies.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feature section */}
    </div>
    <div className="flex justify-center ml-[30%] w-[70%] h-[3px] bg-gradient-to-r from-blue-500 to-yellow-500"></div>
    </>
  )
}

export default Features2