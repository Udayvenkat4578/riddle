"use client";

import { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  User,
  Film,
  Languages
} from "lucide-react";
import { FaCamera } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

export default function SubmitAd() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
    theatre: "",
    language: "",
    adType: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // 1. Save to Firebase
      await axios.post(
        "https://snappad-b8639-default-rtdb.firebaseio.com/submit.json",
        formData
      );

      // 2. Send Email via EmailJS
      await emailjs.send(
        "service_d3u684y", 
        "template_734k41x", 
        {
          name: formData.fullName,
          phone: formData.phoneNumber,
          email: formData.email || "Not provided",
          location: formData.location,
          theatre: formData.theatre || "Not specified",
          language: formData.language,
          type: formData.adType,
          description: formData.description,
        },
        "G-7ufwppd65iotPUT" 
      );

      setSuccess(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        location: "",
        theatre: "",
        language: "",
        adType: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-yellow-100 flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-extrabold text-black text-center mb-2">
          Submit Your Advertisement
        </h1>
        <p className="text-gray-800 font-medium text-center mb-10">
          Fill in the details — we’ll handle the rest 🚀
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white border-4 border-black p-8 shadow-[8px_8px_0px_black]"
        >
          <div className="flex items-center gap-2 mb-6">
            <Film className="text-black" size={28} />
            <h2 className="text-2xl font-bold text-black">Ad Details</h2>
          </div>

          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-bold text-black">
                <User className="inline mr-2 text-gray-700" size={18} />
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full border-4 border-black p-3 shadow-[4px_4px_0px_black] placeholder-gray-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-bold text-black">
                <Phone className="inline mr-2 text-gray-700" size={18} />
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="9876543210"
                className="w-full border-4 border-black p-3  shadow-[4px_4px_0px_black] placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-bold text-black">
                <Mail className="inline mr-2 text-gray-700" size={18} />
                Email (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border-4 border-black p-3 shadow-[4px_4px_0px_black] placeholder-gray-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-bold text-black">
                <MapPin className="inline mr-2 text-gray-700" size={18} />
                Location/Area <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="City or locality"
                className="w-full border-4 border-black p-3 shadow-[4px_4px_0px_black] placeholder-gray-500"
              />
            </div>

            {/* Theatre */}
            <div>
              <label className="block mb-1 font-bold text-black">
                <Film className="inline mr-2 text-gray-700" size={18} />
                Specific Theatre (Optional)
              </label>
              <input
                type="text"
                name="theatre"
                value={formData.theatre}
                onChange={handleChange}
                placeholder="Enter theatre name if you have a preference"
                className="w-full border-4 border-black p-3 shadow-[4px_4px_0px_black] placeholder-gray-500"
              />
            </div>
          </div>

          {/* Language */}
          <div className="mt-6">
            <label className="block mb-2 font-bold text-black">
              <Languages className="inline mr-2 text-gray-700" size={18} />
              Advertisement Language <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-6 text-black font-medium">
              {["English", "తెలుగు", "हिंदी"].map((lang) => (
                <label
                  key={lang}
                  className="flex items-center gap-2  sm:px-4 px-2 py-2 rounded-lg  cursor-pointer"
                >
                  <input
                    type="radio"
                    name="language"
                    value={lang}
                    checked={formData.language === lang}
                    onChange={handleChange}
                    required
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          {/* Ad Type */}
          <div className="mt-6">
            <label className="block mb-2 font-bold text-black">
              Advertisement Type <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-6 text-black font-medium">
              <label className="flex items-center gap-2  sm:px-4 px-2 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="adType"
                  value="Image"
                  checked={formData.adType === "Image"}
                  onChange={handleChange}
                  required
                />
                <FaCamera /> Image
              </label>
              <label className="flex items-center gap-2  px-4 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="adType"
                  value="Video"
                  checked={formData.adType === "Video"}
                  onChange={handleChange}
                  required
                />
                <IoVideocam /> Video
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="block mb-2 font-bold text-black">
              Message/Ad Description <span className="text-red-600">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe your advertisement in Telugu, Hindi, or English..."
              className="w-full border-4 border-black p-3  shadow-[4px_4px_0px_black] placeholder-gray-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4  font-bold text-lg border-4 border-black shadow-[6px_6px_0px_black] transition-all duration-150 
                ${loading 
                  ? "bg-gray-400 text-black cursor-not-allowed" 
                  : "bg-yellow-300 text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1"}`}
            >
              {loading
                ? "Submitting..."
                : success
                ? "we will contact you!"
                : "Submit Advertisement"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
