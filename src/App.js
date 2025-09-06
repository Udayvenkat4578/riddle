// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Servicesmain from "./Components/Servicesmain";
import Contact from "./Components/Contact";
import Mainlanding from "./Components/Mainlanding";
import Footer from "./Components/Footer";
import Resources from "./Components/Resources";
import Adform from "./Components/Adform";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainlanding />} />
        <Route path="/services" element={<Servicesmain />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/adform" element={<Adform />} />
      </Routes>
      <Footer />

      {/* Fixed Chat Container */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center">
        {/* Text container with fixed width to prevent icon shift */}
        <div className="w-32 flex justify-end mr-2">
          {showText && (
            <div
              className="text-white bg-blue-400 font-bold text-sm px-2 py-2 border-2 border-black shadow-[3px_3px_0_#000]  select-none"
              style={{ animation: "float 6s ease-in-out infinite alternate" }}
            >
              Chat with us!
            </div>
          )}
        </div>

        {/* Chat Icon */}
        <div className="relative">
          <button
            onClick={() => {
              setIsChatOpen((prev) => {
                const newState = !prev;
                setShowText(!newState); // hide text when chat opens, show when closes
                if (window.chatbase && newState) window.chatbase("open");
                return newState;
              });
            }}
            className="w-16 h-16 hover:scale-105 transition-transform"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" // replace with your chat icon
              alt="Chat"
              className="w-full h-full object-contain"
            />
          </button>

          {/* Chat iframe: absolutely positioned relative to button to avoid shift */}
          {isChatOpen && (
            <div className="absolute bottom-20 right-0 sm:w-[400px] w-[350px] h-[450px] border rounded-lg shadow-lg">
              <iframe
                title="Chatbase"
    src="https://www.chatbase.co/chatbot-iframe/tgn8NgIH8bV4Pxc2FRsKU"
                className="w-full h-full border-none"
              />
            </div>
            
          )}
        </div>

        {/* Floating animation */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

export default App;
