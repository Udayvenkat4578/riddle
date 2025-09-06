import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, SquareMenu } from "lucide-react";
import mainlogo from "../Assets/mainlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // background color logic based on path
  const getBgClass = () => {
    switch (location.pathname) {
      case "/":
        return "bg-gradient-to-r from-[#00B7E6] via-[#00CBDF] to-[#00DCD8]";
      case "/services":
        return "bg-purple-200";
      case "/contact":
        return "bg-[#A7DFC8]";
      case "/resources":
        return "bg-[#FF9AA3]";
              case "/adform":
        return "bg-yellow-100";


      default:
        return "bg-gradient-to-r from-[#00B7E6] via-[#00CBDF] to-[#00DCD8]";
    }
  };

  return (
    <div className={`w-full ${getBgClass()} ` }>
      <div className="flex justify-between items-center sm:px-11 px-6 py-2">
        {/* Logo on Left */}
        <img
          src={mainlogo}
          alt="logo"
          className="h-10 sm:h-14 w-max transform transition duration-300 hover:rotate-180"
        />

        {/* Right Menu */}
        <div className="hidden md:flex items-center space-x-6 text-[#333232] font-medium">
          <Link
            to="/"
            className="transition transform hover:scale-110 font-anton"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="transition transform hover:scale-110 font-anton"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="transition transform hover:scale-110 font-anton"
          >
            Contact
          </Link>

          {/* Neubrutalist Button for Resources */}
          <Link
            to="/resources"
            className="bg-orange-500  text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_black] transition transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none font-anton"
          >
            Resources
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <SquareMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
<div className={`pl-11 min-h-screen fixed pt-6 flex flex-col items-start px-6 pb-4 space-y-3 text-[#333232] md:hidden font-medium z-50 top-16 left-0 w-full ${getBgClass()}`}>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="transition transform hover:scale-110 font-anton text-xl"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="transition transform hover:scale-110 font-anton text-xl"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="transition transform hover:scale-110 font-anton text-xl"
          >
            Contact
          </Link>
          <Link
            to="/resources"
            onClick={() => setOpen(false)}
            className="text-xl bg-orange-600 font-anton text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_black] transition transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Resources
          </Link>

          <div className="mt-6 w-full pt-6 text-white">
            <p className="text-2xl font-anton pt-6"> Got an Idea?✨</p>
            <h2 className="text-4xl leading-snug font-anton">
              Let’s turn it into <br /> brilliance together!
            </h2>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="font-anton text-xl mt-4 inline-block px-5 py-2 
             bg-red-600 text-white 
             border-4 border-black 
             shadow-[4px_4px_0px_0px_black] 
             hover:translate-x-1 hover:translate-y-1 hover:shadow-none 
             transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
          <div className="fixed bottom-0 left-0 w-full mt-auto text-center py-4 text-gray-800 font-anton text-2xl pt-8 pb-4">
            Made with <span className="mb-2">❤️</span> in INDIA
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
