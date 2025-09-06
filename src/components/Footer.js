
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="cursor-pointer bg-gray-900 text-white px-6 py-6q2 border-t-4 border-black shadow-[4px_4px_0px_#000]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        
        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-anton tracking-tight sm:text-[10vw] text-[15vw] pt-11 sm:mt-11 mt-1">Riddle.Design</h1>
          <p className="mt-2 text-lg font-thin sm:pt-8  pt-1 font-anton text-gray-400 sm:pl-1 pl-0 sm:pb-5 pb-0">We design to develop</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start md:items-center sm:pb-3 pb-3 sm:pt-11 pt-1  ">
          <h2 className="font-anton text-xl mb-2 text-gray-300">Quick Links</h2>
          <ul className="space-y-2 text-sm font-anton">
            <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Bottom */}
      <div className="flex  text-gray-400 flex-col justify-center  py-2 sm:pb-2 pb-5">
                <p className="text-sm font-medium text-center ">
          © {new Date().getFullYear()} Riddle.Design Studio. All rights reserved.
        </p>

        <p className="text-md text-gray-400 px-3 text-center ">
          <span className="font-semibold ">Crafted by</span> <span className="font-sarina text-[#ff9966] "><a href="https://www.udayvenkat.in">Uday Venkat</a></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;




