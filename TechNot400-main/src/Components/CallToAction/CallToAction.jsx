import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import code_img from '../../images/code-image.jpg';
import { motion, useAnimation, useInView } from 'framer-motion';

const CallToAction = () => {

  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView,mainControls]);

  return (
    <>
    <section
      className="sm:py-20 py-2 lg:py-[40px] overflow-x-hidden overflow-y-hidden font-poppins rounded-lg"
      style={{
        backgroundImage: `url(${code_img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin:'30px 20px'
      }}
    >
      <div className="flex flex-wrap items-center sm:h-[300px] h-[400px] md:px-3 md:py-2 mx-2 sm:mx-12 rounded-xl sm:py-16 pt-6 sm:px-20 border-2 bg-blue-100 bg-opacity-80">
        <div className="w-full px-4 lg:w-1/2">
          <motion.div 
          ref={ref}
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.8, delay: 0.25 }}>
          <span className="mb-4 text-xl font-medium">
            Have any <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-600'>DREAM</span> project idea?
          </span>
          <h4 className='font-semibold text-lg'><span className='font-bold text-2xl text-yellow-600 underline'>TRUBLE</span>  is there for you</h4>
          </motion.div>
          <motion.div
          ref={ref}
          variants={{
            hidden: {
              opacity: 0,
              x: -200,
            },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.0, delay: 0.50 }}>
          <h2 className="mb-6 mt-8 text-3xl font-semibold sm:mb-8 sm:text-[40px]/[48px]">
            <span className='text-gray-600'>Let's start turning your <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-900 font-bold'>DREAM</span>'s to reality ....</span>
          </h2>
          </motion.div>
          
        </div>
        <div className="w-full sm:px-4 px-1 lg:w-1/2">
          <div className="flex flex-wrap gap-3 lg:justify-end">
          <motion.div
          ref={ref}
          variants={{
            hidden: {
              opacity: 0,
              x: 75,
            },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}>
            <Link
              to="/services"
              className="inline-flex sm:py-3 py-2 my-1 sm:mr-4 sm:text-base text-sm font-medium transition bg-blue-100 border-2 border-blue-400 rounded-md hover:bg-shadow-1 text-primary sm:px-7 px-3 hover:bg-blue-400 hover:border-white hover:text-white"
            >
              Know Our Work
            </Link>
            </motion.div>
            <motion.div
          ref={ref}
          variants={{
            hidden: {
              opacity: 0,
              x: 75,
            },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.0, delay: 0.50 }}>
            <Link
              to="/contact"
              className="inline-flex sm:py-3 py-2 my-1 sm:text-base text-sm font-medium transition rounded-md bg-blue-300 border-2 border-white sm:px-7 px-4 hover:bg-opacity-90 hover:bg-slate-200 hover:border-blue-400 text-white hover:text-black"
            >
              Your Q&A
            </Link>
          </motion.div>
            
          </div>
        </div>
      </div>
    </section>
    <div className="flex justify-center ml-[30%] w-[70%] h-[3px] bg-gradient-to-r from-blue-500 to-yellow-500"></div>

    </>
  );
};

export default CallToAction;
