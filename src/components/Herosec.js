import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import shape2 from '../Assets/shape2.png'
import shape5 from '../Assets/shape5.png'
import shape3 from '../Assets/shape3.png'
import shape1 from '../Assets/shape1.png'
import shape6 from '../Assets/shape6.png'
import shape7 from '../Assets/shape7.png'
import shape9 from '../Assets/shape9.png'
import shape10 from '../Assets/shape10.png'



const Herosec = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className=" cursor-pointer relative overflow-hidden bg-gradient-to-r from-[#00B7E6] via-[#00CBDF] to-[#00DCD8] sm:min-h-screen h-screen flex flex-col justify-center items-center">
      {/* Hero Text */}
<h1           data-aos="fade-up"
 className="font-anton leading-none tracking-tight uppercase text-center mb-2 z-10">
  <span
    className="block text-[28vw] sm:text-[14vw] text-gray-900"
    style={{ textShadow: "3px 3px 0px white" }}
  >
    RIDDLE
  </span>
  <span
    className="block text-[28vw] sm:inline sm:text-[14vw] text-gray-900"
    style={{ textShadow: "3px 3px 0px white" }}
  >
    .DESIGN
  </span>
</h1>

      {/* Tagline */}
      <p   
        className=" mb-4text-black font-anton text-lg sm:text-lg text-center z-10 bg-yellow-300 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_black] inline-block"
      >
        WE Design To Develop
      </p>

      {/* Brutal Shapes */}
      <div>
        {/* Circle */}
        <div           

          className="absolute bottom-20 sm:bottom-28 sm:left-20 left-20  w-24 h-24 sm:w-30 sm:h-30 "
        >          <img src={shape9}/>
</div>

                <div
          data-aos="fade-right"
          className="absolute sm:block hidden top-2 left-30 w-16 h-16 sm:w-36 sm:h-36 "
        >
          <img src={shape2}/>
        </div>
                        <div
          data-aos="fade-right"
          className="absolute sm:block hidden top-0 left-80 sm:w-20 sm:h-20  "
        >
          <img src={shape10}/>
        </div>




        {/* Square */}
        <div
          data-aos="zoom-in"
          className="absolute top-10 sm:top-20 right-7 sm:right-20  w-20 h-20 sm:w-36 sm:h-36 "
        >
                              <img src={shape3} className="h-24 w-24 scale-125"/>

        </div>

                <div
          data-aos="zoom-in"
          className="absolute sm:bottom-48 bottom-60 sm:right-7 right-0  w-24 h-24 sm:w-32 sm:h-32 "
        >          <img src={shape1}/>
</div>
                        <div
          data-aos="zoom-in"
          className="absolute sm:hidden block sm:top-36  top-72 left-0  w-20 h-20 sm:w-28 sm:h-28 "
        >
                              <img src={shape5} className="h-24 w-24"/>

        </div>



        {/* Blob */}
        <div
          data-aos="fade-up"
          className="absolute sm:block hidden      top-24  sm:top-48 left-36 sm:left-44 "
        >
                                        <img src={shape6} className=" w-24 h-24 sm:w-32 sm:h-32"/>

        </div>
                        <div
          data-aos="fade-right"
          className="absolute block sm:hidden top-32  sm:top-48 left-28 sm:left-44 w-36 h-24 sm:w-36 sm:h-36 "
        >
          <img src={shape2}/>
        </div>



        {/* Triangle-like shape */}
        <div 
          className="absolute top-8 sm:left-16 left-10  "          data-aos="fade-right"

        >
          <img src={shape7} className="h-24 w-24 scale-125"/>
        </div>

                <div
          data-aos="fade-left"
          className="absolute sm:block hidden bottom-10 sm:bottom-28 sm:right-72 right-20 "
        >
                    <img src={shape5} className="h-24 w-24"/>

        </div>

      </div>
    </div>
  );
};

export default Herosec;
