import React from "react";
import cinemaImg from "../Assets/img.png"; // replace with your image
import { Link } from "react-router-dom";

const CinemaAdBlock = () => {
  return (
    <div className="cursor-pointer">
    <section className="  flex flex-col md:flex-row items-center justify-between bg-yellow-200 border-4 border-black rounded-2xl p-8 m-6 shadow-[6px_6px_0px_black]">
      
      {/* Left Text */}
      <div className="md:w-1/2 space-y-4  py-7">
          <h1 className="text-white sm:text-5xl text-4xl font-anton leading-tight sm:px-11 px-1">
            <span className="sm:text-6xl text-5xl  text-gray-800 ">Your <span className="text-orange-500">Brand.</span></span><br/><span className="pl-1 text-gray-800"> On</span><span className="text-gray-800"> the Big<span className="text-orange-500"> Screen.</span></span><span className=""> </span>
          </h1>
          <p className=" mt-2 sm:px-11 px-1 text-gray-800 font-bold">
Some stories deserve the biggest screen of all.<br/>
Let your brand steal the scene during every interval. 
         </p>
<div className="sm:px-11 px-1">
  <button
    className="px-6 bg-white font-bold text-gray-800 py-3  border-4 border-black 
               shadow-[4px_4px_0px_black] transition-all duration-150 
               hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_black] 
               active:translate-x-1 active:translate-y-1 active:shadow-none"
  >
   <Link to="/adform"> Start Advertising</Link>
  </button>
</div>
        <div>
            <p className="font-semibold sm:px-11 px-1 ">Now in <span >Hyderabad.</span> and soon, everywhere.</p>
        </div>

      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={cinemaImg}
          alt="Cinema Advertising"
          className="w-full max-w-sm "
        />
      </div>
    </section>
    </div>
  );
};

export default CinemaAdBlock;
