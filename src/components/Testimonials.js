import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import signature1 from "../Assets/signature4.png";
import signature2 from "../Assets/signature2.png";
import signature3 from "../Assets/signature1.png";
import signature4 from "../Assets/signature3.png";
import pp1 from "../Assets/pp1.svg";
import pp2 from "../Assets/pp2.svg";
import pp3 from "../Assets/pp3.svg";
import pp4 from "../Assets/pp4.svg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Satwik",
      role: "Marketing Director",
      handle: "@sat_wik",
      review:
        "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional.",
      avatar: signature1,
      pp: pp1,
    },
    {
      name: "Pavan Reddy",
      role: "Software Engineer",
      handle: "@pavan_174",
      review:
        "Working with this team has been absolutely transformative for our product development.",
      avatar: signature2,
      pp: pp3,
    },
    {
      name: "Ruchi Patel",
      role: "Product Manager",
      handle: "@Ruchi_ru",
      review:
        "Outstanding service from start to finish! The team's expertise and dedication have helped us achieve remarkable growth.",
      avatar: signature3,
      pp: pp2,
    },
    {
      name: "Hemant Verma",
      role: "UX Designer",
      handle: "@Hemanth_910",
      review:
        "The design team's expertise is remarkable. They bring fresh perspectives and innovative solutions to every challenge.",
      avatar: signature4,
      pp: pp4,
    },
  ];

  // Force slidesToShow based on real viewport width
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSlidesToShow(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    mobileFirst: true, // important for some devices
    responsive: [
      // optional tweaks per breakpoint
      { breakpoint: 640, settings: { arrows: false } },
    ],
  };

  return (
    <div className="bg-[#FF9AA3] overflow-x-hidden py-9 cursor-pointer">
      <div className="px-4 sm:px-9 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-3xl lg:text-5xl font-anton text-gray-900 mb-6 tracking-tight"
            style={{ textShadow: "3px 3px 0px white" }}
          >
            Testimonials
          </h1>
        </div>

        <Slider {...settings} key={slidesToShow} className="w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="p-5">
              <div
                className="bg-white cursor-pointer hover:bg-[#FFFFF4] border-4 border-black
                shadow-[4px_4px_0px_0px_black] px-6 pt-6 pb-3 transition transform
                hover:translate-x-1 hover:translate-y-1 hover:shadow-none font-anton
                h-full flex flex-col justify-between min-w-[280px] sm:min-w-[300px]"
              >
                {/* Header */}
                <div className="flex items-center">
                  <img src={t.pp} alt={t.name} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                    <div className="font-anton text-gray-900 text-base sm:text-lg">
                      {t.name}
                    </div>
                    <div className="text-gray-700 text-xs sm:text-sm font-anton">
                      {t.role}
                    </div>
                  </div>
                </div>

                {/* Review */}
                <div className="mb-2 pt-3 flex-1">
                  <p className="text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed font-anton">
                    “{t.review}”
                  </p>
                </div>

                {/* Signature */}
                <div className="flex justify-end">
                  <img src={t.avatar} alt={t.name} className="w-16 h-auto" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
