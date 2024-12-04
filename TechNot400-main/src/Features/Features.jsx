import React, { useEffect, useRef } from "react";
import logo1 from "../images/Features/f1.png";
import logo2 from "../images/Features/f2.png";
import logo3 from "../images/Features/f3.png";
import image1 from "../images/Features/fb11.png";
import program_icon_1 from "../images/program-icon-2.png";
import { useAnimation, useInView, motion } from "framer-motion";

const Features = () => {
    // const {innerWidth: width, innerHeight: height} = window
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView,mainControls]);
  return (
    <>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-yellow-500 to-blue-500"></div>
        <div className="max-w-screen overflow-x-hidden overflow-y-hidden font-poppins">
          {/* feature section */}
          {/* {width< 631 ? (<></>) : (<></>)} */}
          <section>
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-yellow-600">
                  ENDING THE <span className="text-red-600">GAP</span> BETWEEN{" "}
                  <span className="text-blue-500">ORGANIZATIONS</span> AND{" "}
                  <br /> <span className="text-emerald-600">DIGITAL AGE</span>
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
                  Go digital is what today's world is heading towards with
                  exposure.
                </p>
              </div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-yellow-600">
                    Innovative Web Begins Here
                  </h3>
                  <p className="mt-3 text-lg">
                    Transform your organization with innovative technology
                    solutions, optimizing workflows, adopting cutting-edge
                    latest technologies, and accessing personalized service
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
                          <img src={logo1} alt="" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-blue-500">
                          Empowering Organisations with Technology
                        </h4>
                        <p className="mt-2">
                          At{" "}
                          <span className="font-bold text-yellow-600">
                            TRUBLE
                          </span>
                          , we are committed to transform the digital landscape
                          with innovative web solutions. driving growth and
                          fostering efficiency in all aspects of organisation's
                          operations.
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
                      transition={{ duration: 0.5, delay: 0.25 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                          <img src={logo2} alt="" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-blue-500">
                          User-Centric Design
                        </h4>
                        <p className="mt-2">
                          <span className="font-bold text-yellow-600">
                            TRUBLE
                          </span>
                          's philosophy prioritizes user experience, ensuring
                          that our solutions are not only functional but also
                          intuitive and enjoyable to use.
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
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                          <img src={logo3} alt="" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-blue-500">
                          Comprehensive Support & Quality Commitment
                        </h4>
                        <p className="mt-2">
                          <span className="font-bold text-yellow-600">
                            TRUBLE
                          </span>{" "}
                          offer comprehensive support and maintenance services
                          to ensure that our clients' systems run smoothly and
                          efficiently with committment to delivering exceptional
                          products and services that exceed our clients'
                          expectations.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  <div aria-hidden="true" className="mt-10 lg:mt-0 relative">
                    <img
                      src={image1}
                      alt=""
                      className="hover:drop-shadow-xl rounded-lg shadow-lg mx-auto sm:w-[100%] block"
                    />
                    <div
                      className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex justify-center items-center flex-col text-white cursor-pointer opacity-0 pt-[70%] hover:opacity-100 hover:pt-0"
                      style={{ transition: "all 0.3s ease-in-out" }}
                    >
                      <img
                        src={program_icon_1}
                        alt=""
                        className="sm:w-[100px] w-[60px] mb-[10px]"
                      />
                      <p>Website Developement/Design</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/* End Feature section */}
        </div>
    </>
  );
};

export default Features;
