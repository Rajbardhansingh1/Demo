import React from "react";
// import Navbar from "../../Navigation/Navbar";
import Herosection from "../../Herosection/Herosection";
import Features from "../../../Features/Features";
import Features2 from "../../../Features/Features2";
import CardComponent from "../../Price/CardComponent";
import CallToAction from "../../CallToAction/CallToAction";
import Technologies from "../../TechnologiesUsed/Technologies";
import Testimonial from "../../Testimonial/Testimonial";
// import FooterMain from "../../Footer/FooterMain";


const Homepage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Herosection/>
      <Features/>
      <Features2/>
      <CardComponent/>
      <CallToAction/>  
      <Technologies/>
      <Testimonial/>
      {/* <FooterMain/> */}
    </>
  );
};

export default Homepage;
