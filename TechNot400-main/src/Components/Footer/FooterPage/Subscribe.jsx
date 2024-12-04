import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden font-poppins sm:flex sm:mx-20 sm:py-10 pt-10 justify-between mb-10 sm:mb-0">
      <div className="sm:flex-1 sm:mx-20 mx-4">
        <h2 className="sm:text-[32px] text-blue-200 font-bold">TRUBLE</h2>
        <p className="text-yellow-100 mt-2 sm:pr-60">
          Welcome to <span className="text-yellow-500 font-bold">TRUBLE</span> where we excel in bringing your ideas
          to life with stunning, user-friendly websites and impactful digital
          strategies. From crafting engaging online experiences to driving
          traffic and conversions, we're here to elevate your brand in the digital
          world.
        </p>
        <div className="text-white flex gap-6 sm:mt-16 mt-8 text-2xl sm:text-[35px] justify-center sm:justify-start">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <IoLogoWhatsapp />
          <FaGithub />
        </div>
      </div>
      <div className="sm:flex-1 sm:ml-4 text-white text-center mt-16">
        <h1 className="sm:text-[32px] font-bold">Want Any Help to Optimize Your Organization?</h1>
        <p className="text-md mx-2 text-yellow-100">Book-up with us to get business optimization & stay in touch!</p>
        <div className="mt-6 flex sm:gap-6 gap-3 justify-center mb-12 sm:mb-4">
            {/* <input type="email" placeholder="Enter your email" className="bg-transparent border-2 sm:px-4 sm:py-2 py-1 sm:w-80 w-52 px-2 sm:rounded-lg rounded-md"/> */}
            <Link to="/bookus">
            <button className="bg-blue-300 sm:px-10 px-2 sm:rounded-lg rounded-md border-2 sm:mt-0 sm:py-3 py-1 border-blue-600 text-gray-600 text-sm font-semibold">Book Your Consultant</button>
            </Link>
        </div>
        <p>Your data is secured. Read our privacy policy</p>
        <Link>
            <h4 className="text-blue-700 underline">Privacy policy.</h4>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
