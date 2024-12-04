import React, { useState } from "react";
import icon from "../../images/level.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// import profileImage from '../../images/profile.png';s

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="bg-gray-900 fixed px-2  sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400">
        {/* Desktop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            <img
              src={icon}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:-h-[35px] "
            />
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              TRUBLE
            </span>
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li className="p-2 mr-4 text-white hover:text-yellow-500 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-yellow-500 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-yellow-500 cursor-pointer">
                <Link to="/services">Services</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-yellow-500 cursor-pointer">
                <Link to="/career">Career</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-yellow-500 cursor-pointer">
                <Link to="/bookus">Book Us</Link>
              </li>
              <li className="p-2 text-white hover:text-yellow-500 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <Link to='/bookus'>
            <button
              type="button"
              className="bg-yellow-600 px-4 py-2 text-white hidden sm:block rounded-xl mr-2 hover:bg-yellow-500"
            >
              Get Started
            </button>
            </Link>
            {/* <button
              type="button"
              className="hidden sm:block text-white border font-medium rounded-lg ml-2 text-sm px-4 hover:bg-yellow-300/50 mr-4"
            >
              Login
            </button> */}
            <button onClick={() => setOpen(!open)} className="sm:hidden block">
              <GiHamburgerMenu size={30} className="mt-2 mr-8 text-white/70 border-2 border-white/30 px-1 rounded-lg" />
            </button>
          </div>
        </div>
        {/* Desktop nav end */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
    open ? "max-h-[21rem]" : "max-h-0"
  }`}>
        <ul>
            <li onClick={() => setOpen(!open)} className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4 pt-6">
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setOpen(!open)} className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setOpen(!open)} className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/services">Services</Link>
            </li>
            <li onClick={() => setOpen(!open)} className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/career">Career</Link>
              </li>
              <li onClick={() => setOpen(!open)} className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/bookus">Book Us</Link>
              </li>
            <li onClick={() => setOpen(!open)} className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {/* Profile Section */}
          <div className="bg-gray-200/50 h-[1px] w-[87%] ml-4">
            <div className="flex cursor-pointer">
                <img src={icon} alt="profileimg" className="w-14 ml-3 mt-4 flex"/>
                <p className="text-white ml-5 my-auto font-semibold">Tech</p>
                <p className="text-white ml-2 my-auto font-semibold">!400</p>
            </div>
            <p className="my-auto ml-[89px] mt-[-25px] text-white/70 text-sm ">sponsorshiplelo1@gmail.com</p>
          </div>
          <div className="flex justify-center">
            <p className="mt-[85px] font-mono text-sm text-white/30">All Rights Reserved - TRUBLE</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
