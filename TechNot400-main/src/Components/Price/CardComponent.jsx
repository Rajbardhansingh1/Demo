import React, { useEffect, useRef } from "react";
import PriceCard from "./PriceCard";
import image1 from "../../images/Price/1.png";
import image2 from "../../images/Price/2.png";
import image3 from "../../images/Price/3.png";
import { useAnimation, useInView, motion } from "framer-motion";
import PriceHeader from "./PriceHeader";

const CardComponent = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="m-w-screen overflow-x-hidden font-poppins bg-blue-100/70 overflow-y-hidden">
        <div className="w-full py-[10rem] sm:px-28 px-4">
          <PriceHeader />
        </div>
        <>
          {Width < 631 ? <><div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8 mb-24 px-6 sm:p-0">
            
              <PriceCard
                buttonBg={"bg-yellow-500/60"}
                hoverBgButton={"hover:bg-yellow-300"}
                ButtonTextColor={"text-white"}
                image={image1}
                Package="Growth"
                Price="₹ 9999"
                Feature1={"SEO & SME Advertisement"}
                Feature2={"End-To_End Personal Support"}
                Feature3={"Innovative Technology Integration"}
                Feature4={"Advanced Algorithmic Solutions"}
                Feature5={"100% Functional Business Websites"}
                Feature6={"Social Media & Advanced Marketing"}
                iconColor1={"text-yellow-700"}
                iconColor2={"text-yellow-700"}
                iconColor3={"text-yellow-300"}
                iconColor4={"text-yellow-300"}
                iconColor5={"text-yellow-300"}
                iconColor6={"text-yellow-300"}
              />
            
            
              <PriceCard
                buttonBg={"bg-blue-300"}
                hoverBgButton={"hover:bg-blue-400"}
                image={image2}
                Package="Standard"
                Price="₹ 24999"
                Feature1={"SEO & SME Advertisement"}
                Feature2={"End-To_End Personal Support"}
                Feature3={"Innovative Technology Integration"}
                Feature4={"Advanced Algorithmic Solutions"}
                Feature5={"100% Functional Business Websites"}
                Feature6={"Social Media & Advanced Marketing"}
                iconColor1={"text-yellow-700"}
                iconColor2={"text-yellow-700"}
                iconColor3={"text-yellow-700"}
                iconColor4={"text-yellow-700"}
                iconColor5={"text-yellow-300"}
                iconColor6={"text-yellow-300"}
                standOutBg={"bg-yellow-200/60"}
                marginMiddle={"md:-my-4"}
              />
            
            
              <PriceCard
                buttonBg={"bg-yellow-500/60"}
                hoverBgButton={"hover:bg-yellow-300"}
                ButtonTextColor={"text-white"}
                image={image3}
                Package="Enterprise"
                Price="₹ 49999"
                Feature1={"SEO & SME Advertisement"}
                Feature2={"End-To_End Personal Support"}
                Feature3={"Innovative Technology Integration"}
                Feature4={"Advanced Algorithmic Solutions"}
                Feature5={"100% Functional Business Websites"}
                Feature6={"Social Media & Advanced Marketing"}
                iconColor1={"text-yellow-700"}
                iconColor2={"text-yellow-700"}
                iconColor3={"text-yellow-700"}
                iconColor4={"text-yellow-700"}
                iconColor5={"text-yellow-700"}
                iconColor6={"text-yellow-700"}
              />
            
          </div>
          </> 
          : 
          <>
          <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8 mb-16">
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 75,
                },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <PriceCard
                buttonBg={"bg-yellow-500/60"}
                hoverBgButton={"hover:bg-yellow-300"}
                ButtonTextColor={"text-white"}
                image={image1}
                Package="Growth"
                Price="₹ 9999"
                Feature1={"SEO & SME Advertisement"}
                Feature2={"End-To_End Personal Support"}
                Feature3={"Innovative Technology Integration"}
                Feature4={"Advanced Algorithmic Solutions"}
                Feature5={"100% Functional Business Websites"}
                Feature6={"Social Media & Advanced Marketing"}
                iconColor1={"text-yellow-700"}
                iconColor2={"text-yellow-700"}
                iconColor3={"text-yellow-300"}
                iconColor4={"text-yellow-300"}
                iconColor5={"text-yellow-300"}
                iconColor6={"text-yellow-300"}
              />
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 150,
                },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <PriceCard
                buttonBg={"bg-blue-300"}
                hoverBgButton={"hover:bg-blue-400"}
                image={image2}
                Package="Standard"
                Price="₹ 24999"
                Feature1={"SEO & SME Advertisement"}
                Feature2={"End-To_End Personal Support"}
                Feature3={"Innovative Technology Integration"}
                Feature4={"Advanced Algorithmic Solutions"}
                Feature5={"100% Functional Business Websites"}
                Feature6={"Social Media & Advanced Marketing"}
                iconColor1={"text-yellow-700"}
                iconColor2={"text-yellow-700"}
                iconColor3={"text-yellow-700"}
                iconColor4={"text-yellow-700"}
                iconColor5={"text-yellow-300"}
                iconColor6={"text-yellow-300"}
                standOutBg={"bg-yellow-200/60"}
                marginMiddle={"md:-my-4"}
              />
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 75,
                },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <PriceCard
                buttonBg={"bg-yellow-500/60"}
                hoverBgButton={"hover:bg-yellow-300"}
                ButtonTextColor={"text-white"}
                image={image3}
                Package="Enterprise"
                Price="₹ 49999"
                Feature1={"SEO & SME Advertisement"}
                Feature2={"End-To_End Personal Support"}
                Feature3={"Innovative Technology Integration"}
                Feature4={"Advanced Algorithmic Solutions"}
                Feature5={"100% Functional Business Websites"}
                Feature6={"Social Media & Advanced Marketing"}
                iconColor1={"text-yellow-700"}
                iconColor2={"text-yellow-700"}
                iconColor3={"text-yellow-700"}
                iconColor4={"text-yellow-700"}
                iconColor5={"text-yellow-700"}
                iconColor6={"text-yellow-700"}
              />
            </motion.div>
          </div></>}
          
        </>
      </div>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-yellow-500 to-blue-500"></div>
    </>
  );
};

export default CardComponent;
