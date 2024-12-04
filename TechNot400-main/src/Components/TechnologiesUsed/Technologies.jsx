import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaPython,
  FaBootstrap,
  FaPhp,
  FaShopify,
  FaWordpress,
  FaCloudUploadAlt,
  FaAws,
  FaMailchimp,
  FaJava,
} from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import {
  SiExpress,
  SiGoogleads,
  SiGoogleanalytics,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiSemrush,
  SiSimilarweb,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  DiCodeigniter,
  DiDjango,
  DiJqueryLogo,
  DiMysql,
  DiNodejs,
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaMeta } from "react-icons/fa6";

const technologies = [
  { icon: FaHtml5, label: "HTML", url: "https://en.wikipedia.org/wiki/HTML" },
  { icon: FaCss3Alt, label: "CSS", url: "https://en.wikipedia.org/wiki/CSS" },
  {
    icon: IoLogoJavascript,
    label: "JavaScript",
    url: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    url: "https://en.wikipedia.org/wiki/TypeScript",
  },
  {
    icon: DiJqueryLogo,
    label: "jQuery",
    url: "https://en.wikipedia.org/wiki/JQuery",
  },
  {
    icon: FaReact,
    label: "React",
    url: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
  },
  {
    icon: SiNextdotjs,
    label: "Next.js",
    url: "https://en.wikipedia.org/wiki/Next.js",
  },
  {
    icon: FaVuejs,
    label: "Vue.js",
    url: "https://en.wikipedia.org/wiki/Vue.js",
  },
  { icon: SiVite, label: "Vite", url: "https://en.wikipedia.org/wiki/Vite" },
  {
    icon: DiNodejs,
    label: "Node.js",
    url: "https://en.wikipedia.org/wiki/Node.js",
  },
  {
    icon: SiExpress,
    label: "Express.js",
    url: "https://en.wikipedia.org/wiki/Express.js",
  },
  {
    icon: FaPython,
    label: "Python",
    url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  },
  {
    icon: DiDjango,
    label: "Django",
    url: "https://en.wikipedia.org/wiki/Django_(web_framework)",
  },
  {
    icon: FaJava,
    label: "Java",
    url: "https://en.wikipedia.org/wiki/Java_(programming_language)",
  },
  { icon: FaPhp, label: "PHP", url: "https://en.wikipedia.org/wiki/PHP" },
  {
    icon: DiCodeigniter,
    label: "Codeigniter",
    url: "https://en.wikipedia.org/wiki/CodeIgniter",
  },
  {
    icon: RiTailwindCssFill,
    label: "Tailwind CSS",
    url: "https://en.wikipedia.org/wiki/Tailwind_CSS",
  },
  {
    icon: FaBootstrap,
    label: "Bootstrap",
    url: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
  },
  { icon: DiMysql, label: "MySQL", url: "https://en.wikipedia.org/wiki/MySQL" },
  {
    icon: SiMongodb,
    label: "MongoDB",
    url: "https://en.wikipedia.org/wiki/MongoDB",
  },
  {
    icon: SiMongoose,
    label: "Mongoose",
    url: "https://en.wikipedia.org/wiki/Mongoose_(MongoDB)",
  },
  {
    icon: FaShopify,
    label: "Shopify",
    url: "https://en.wikipedia.org/wiki/Shopify",
  },
  {
    icon: FaWordpress,
    label: "WordPress",
    url: "https://en.wikipedia.org/wiki/WordPress",
  },
  {
    icon: FaCloudUploadAlt,
    label: "Cloud",
    url: "https://en.wikipedia.org/wiki/Cloud_computing",
  },
  {
    icon: FaAws,
    label: "AWS",
    url: "https://en.wikipedia.org/wiki/Amazon_Web_Services",
  },
  {
    icon: TbSeo,
    label: "SEO",
    url: "https://en.wikipedia.org/wiki/Search_engine_optimization",
  },
  {
    icon: SiSemrush,
    label: "Semrush",
    url: "https://en.wikipedia.org/wiki/SEMrush",
  },
  {
    icon: SiSimilarweb,
    label: "Similarweb",
    url: "https://en.wikipedia.org/wiki/Similarweb",
  },
  {
    icon: FaMailchimp,
    label: "Mailchimp",
    url: "https://en.wikipedia.org/wiki/Mailchimp",
  },
  {
    icon: SiGoogleads,
    label: "Google Ads",
    url: "https://en.wikipedia.org/wiki/Google_Ads",
  },
  {
    icon: SiGoogleanalytics,
    label: "Google Analytics",
    url: "https://en.wikipedia.org/wiki/Google_Analytics",
  },
  {
    icon: FaMeta,
    label: "Meta Ads",
    url: "https://en.wikipedia.org/wiki/Facebook_Ads",
  },
];

const Technologies = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const visibleItems = showMore || !isMobile ? technologies.length : 9;

  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden font-poppins">
        <section className="dark:bg-gray-100 dark:text-gray-800">
          {isMobile ? (
            <>
              <div className="p-10 sm:px-40 px-10 text-center bg-blue-100/70">
                <h2 className="text-3xl text-yellow-700 font-bold mb-16">
                  Fully compatible with
                </h2>
                <div className="grid sm:grid-cols-8 grid-cols-3 sm:gap-4 gap-2">
                  {technologies.slice(0, visibleItems).map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center"
                      onClick={() => window.open(tech.url, "_blank")}
                    >
                      <tech.icon
                        size={40}
                        className="hover:scale-125 mb-2 duration-500 cursor-pointer"
                      />
                      <span className="text-yellow-700">{tech.label}</span>
                    </div>
                  ))}
                </div>
                {isMobile && technologies.length > 9 && (
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="mt-8 py-2 px-4 bg-yellow-500 text-white rounded-md"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div
                ref={ref}
                className="p-10 sm:p-32 sm:px-40 px-10 text-center bg-blue-100/70"
              >
                <h2 className="text-3xl text-yellow-700 font-bold mb-16">
                  Fully compatible with
                </h2>
                <div className="grid sm:grid-cols-8 grid-cols-3 sm:gap-4 gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0, y: 70 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center"
                      onClick={() => window.open(tech.url, "_blank")}
                    >
                      <tech.icon
                        size={40}
                        className="hover:scale-125 mb-2 duration-500 cursor-pointer"
                      />
                      <span className="text-yellow-700">{tech.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      </div>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-yellow-500 to-blue-500"></div>
    </>
  );
};

export default Technologies;
