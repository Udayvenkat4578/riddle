import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import bgphoto from "../Assets/bgphoto.png";
import bgapp from "../Assets/bgapp.png";
import bgweb from "../Assets/bgweb.png";
import bgmobile from "../Assets/bgmobile.png";
import bgmeta from "../Assets/bgmeta.png";
import bgux from "../Assets/bgux.png";
import bgill from "../Assets/bgill.png";
import bgedit from "../Assets/bgedit.png";

// EmailJS config
const SERVICE_ID = "riddle2025contact";
const TEMPLATE_ID = "template_raokg8r";
const PUBLIC_KEY = "k9sAVSzScreKyw7Bv";

const ServicesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { icon: "💻", title: "Custom Application Development", bgImage: bgapp, bgColor: "bg-red-400" },
    { icon: "🌐", title: "Web Development", bgImage: bgweb, bgColor: "bg-pink-400" },
    { icon: "📱", title: "Mobile Application", bgImage: bgmobile, bgColor: "bg-cyan-300" },
    { icon: "📊", title: "Meta Ads", bgImage: bgmeta, bgColor: "bg-orange-400" },
    { icon: "🎨", title: "Illustrations", bgImage: bgill, bgColor: "bg-green-400" },
    { icon: "✂️", title: "Editing", bgImage: bgedit, bgColor: "bg-blue-400" },
    { icon: "📸", title: "Photography", bgImage: bgphoto, bgColor: "bg-yellow-300" },
    { icon: "🎯", title: "User Interface Design", bgImage: bgux, bgColor: "bg-purple-400" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);

  const emailData = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    interests: selectedService, // fixed interest
  };

  // --- EmailJS ---
  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY)
    .then(() => {
      console.log("EmailJS sent ✅");
    })
    .catch((err) => {
      console.error("EmailJS failed ❌", err);
    });

  // --- Formcarry ---
  fetch("https://formcarry.com/s/VoBMJ6ybNXU", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(emailData),
  })
    .then(async (res) => {
      if (res.ok) {
        console.log("Formcarry sent ✅");
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const error = await res.json();
        console.error("Formcarry error ❌", error);
      }
    })
    .catch((err) => {
      console.error("Formcarry failed ❌", err);
    })
    .finally(() => {
      setIsLoading(false);
    });
};
  
  

  return (
    <div className="cursor-pointer min-h-screen bg-purple-200 py-11 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-3xl lg:text-5xl font-anton text-gray-900 mb-6 tracking-tight"
            style={{ textShadow: "3px 3px 0px white" }}
          >
            OUR SERVICES
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 p-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] transition-all`}
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text-5xl text-center mb-4">{service.icon}</div>
              <h2 className="text-xl font-anton text-gray-900 text-center mb-3 uppercase">
                {service.title}
              </h2>
              <div className="text-center">
                <button
                  className="bg-gray-900 text-white px-4 py-2 font-anton uppercase tracking-wide hover:bg-white hover:text-black border-2 border-black transition-all"
                  onClick={() => {
                    setSelectedService(service.title);
                    setShowModal(true);
                    setIsSubmitted(false);
                  }}
                >
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="bg-white p-8 border-4 border-black shadow-xl w-full max-w-lg relative">
              <button
                className="absolute top-3 right-3 text-xl font-bold"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>

              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-anton mb-6 text-center">
                    Request Demo – {selectedService}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-black px-4 py-2"
                    />
                    {/* Email */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-black px-4 py-2"
                    />
                    {/* Message */}
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border-2 border-black px-4 py-2"
                    ></textarea>

                    {/* Hidden Interest */}
                    <input type="hidden" name="interests" value={selectedService} />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-red-500 text-white px-4 py-3 font-bold border-2 border-black hover:bg-red-400"
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </form>

                  {/* Contact Us link */}
                  <p className="text-center text-sm mt-6">
                    Want to explore more services?{" "}
                    <a href="/contact" className="underline font-bold">
                      Contact Us
                    </a>
                  </p>
                </>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-2xl font-bold mb-4">🎉 Thank you!</h3>
                  <p className="text-gray-700">
                    We’ve received your request for <b>{selectedService}</b>.  
                    Our team will reach out soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
