import React, { useCallback, useEffect, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdVerified,
} from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";

const testimonials = [
  {
    image:
      "https://img.freepik.com/free-photo/smiley-man-with-headphones-front-view_23-2149915903.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722124800&semt=ais_user",
   company: "CreativeFusion Co.",
    
    details:
      "The team at your software development and marketing company delivered exceptional results, transforming our project into a user-friendly and efficient product. Their innovative approach and dedication to quality exceeded our expectations!!",
    name: "Rohan Mehta",
    position: "Product Manager.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ-WurPX1LLCAqDYv-qRyqLFOcIXacFdjsw&s",
   company: "TechHive Solutions",
    
    details:
      "Your team provided us with cutting-edge software development services and strategic marketing insights. Their commitment to understanding our needs and delivering tailored solutions was instrumental in our project's success!",
    name: "Vikram Singh",
    position: " Chief Operating Officer.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3zGJhadpV5CmEDYdvHFN3r3M34VZ_TtOJw&s",
      company: "GreenWave Digital",
    details:
      "Partnering with your company was a game-changer for our digital marketing strategy. Their expertise in software solutions and marketing helped us reach a broader audience and achieve significant growth in our online presence!",
    name: "Ananya Patel",
    position: "Digital Marketing Specialist.",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView,mainControls]);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
        <section className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px] overflow-x-hidden overflow-y-hidden font-poppins">
        <motion.div
                      className="flex justify-center sm:text-3xl text-2xl font-bold sm:mb-20 mb-8 text-blue-400 text-center"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, y: -75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.8, delay: 0.25 }}
                    >
        {/* <div className="flex justify-center sm:text-3xl text-2xl font-bold sm:mb-20 mb-8 text-blue-400 text-center"> */}
            <h1>What Our <span className="text-yellow-600">TRUBLE</span>'s Family Says</h1>
        </motion.div>
        <motion.div
                      className="mx-auto"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.8, delay: 0.25 }}
                    >
        <Swiper slidesPerView={1} ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <SingleTestimonial {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-6 z-10 flex justify-center">
          <div className="flex items-center justify-center gap-14 border-2 border-yellow-500 w-40 py-1 rounded-full bg-blue-100">
            <button
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 bg-yellow-100/70 transition-all hover:border-blue-300 text-3xl text-yellow-600 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none"
              onClick={handlePrev}
            >
              <MdKeyboardDoubleArrowLeft className="text-3xl" />
            </button>
            <button
              className="next-arrow flex h-[40px] w-[40px] items-center justify-center rounded-full border bg-white transition-all hover:border-yellow-300 text-3xl text-yellow-600 dark:border-dark-3 dark:bg-dark-2 dark:text-white "
              onClick={handleNext}
            >
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
    <div className="flex justify-center ml-[30%] w-[70%] h-[3px] bg-gradient-to-r from-blue-500 to-yellow-500"></div>
    </>
  );
};

const SingleTestimonial = ({
  image,
  company,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center border-2 rounded-3xl sm:mx-48 mx-2">
      <div className="w-full pb-16">
        <div className="w-full items-center sm:flex">
          <div className="mb-12 w-full sm:max-w-[310px] max-w-[220px] md:mb-0 md:mr-12 md:max-w-[250px] lg:max-w-[280px] 2xl:mr-20 ">
            <img
              src={image}
              alt="image"
              className="w-full sm:mt-16 sm:rounded-[50px] sm:ml-24 ml-10 mt-7 max-h-[220px] sm:max-h-[400px] rounded-full"
            />
          </div>
          <div className="w-full sm:mt-20 -mt-10 sm:ml-24 mx-1 px-8">
            <div>
              <div className="sm:mb-10 mb-6 flex items-center">
                <h2 className="text-2xl font-bold text-yellow-600">{company}</h2>
                <MdVerified className="text-2xl sm:ml-2 text-green-500"/>
              </div>
              <p className="sm:mb-11 mb-4 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]">
                {details}
              </p>
              <h4 className="mb-2 text-[22px] font-semibold leading-[27px] text-blue-400 dark:text-white">
                {name}
              </h4>
              <p className="text-base text-yellow-600 dark:text-dark-6">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
