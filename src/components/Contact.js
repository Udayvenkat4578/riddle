import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com"; // 👈 install via npm install emailjs-com

const interestsList = [
  "website development",
  "mobile Application",
  "Meta Ads",
  "Illustrations",
  "Editing",
  "Photography",
  "UI/UX Design",
  "Maintenance",
];

const budgetsList = [
  "Less than ₹5K",
  "₹5K – ₹10K",
  "₹10K – ₹20K",
  "₹20K – ₹30K",
  "Above ₹30K",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interests: [],
    budget: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleBudgetSelect = (budget) => {
    setFormData({ ...formData, budget });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "⚠ Please enter your name";
    if (!formData.email.trim()) newErrors.email = "⚠ Please enter your email";
    if (!formData.message.trim())
      newErrors.message = "⚠ Please enter your message";
    if (formData.interests.length === 0)
      newErrors.interests = "⚠ Select at least one interest";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // 1. Send to Formcarry (for storage/dashboard)
      const response = await fetch("https://formcarry.com/s/VoBMJ6ybNXU", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target), // sends all form fields
      });

      if (response.ok) {
        // 2. Send via EmailJS (notification + auto-reply)
        await emailjs.sendForm(
          "riddle2025contact", // Service ID
          "template_raokg8r",  // Template ID
          e.target,            // the form element
          "k9sAVSzScreKyw7Bv"  // Public Key
        );

        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          interests: [],
          budget: "",
        });
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  return (
    <div className="min-h-screen bg-[#A7DFC8] px-4 py-4 pb-11 flex justify-center items-center cursor-pointer ">
      <div className="w-full max-w-6xl ">
        <div className="text-center mb-9">
          <h1
            className="text-3xl md:text-3xl lg:text-5xl font-anton text-gray-900 mb-6 tracking-tight pt-6"
            style={{ textShadow: "3px 3px 0px white" }}
          >
            CONTACT US
          </h1>
        </div>

        <div className="bg-[#FFFFF4] border-8 border-black p-8 shadow-[8px_8px_0px_0px_#000] mb-8 ">
          <form onSubmit={handleSubmit} method="POST">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block text-lg font-anton mb-3 text-gray-900 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-4 border-black bg-yellow-300 text-gray-900 placeholder-black placeholder:font-semibold  px-4 py-3 text-base shadow-[4px_4px_0px_0px_#000] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] focus:outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="mt-2 bg-red-300 border-4 border-black px-3 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_#000] inline-block">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-anton mb-3 text-gray-900 uppercase tracking-wide">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-4 border-black bg-yellow-300 text-gray-900 placeholder-black placeholder:font-semibold px-4 py-3 text-base shadow-[4px_4px_0px_0px_#000] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] focus:outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="mt-2 bg-red-300 border-4 border-black px-3 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_#000] inline-block">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-lg mb-3 text-gray-900 uppercase tracking-wide font-anton">
                    Tell us more about your project
                  </label>
                  <textarea
                    name="message"
                    placeholder="Something about your great idea…"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full border-4 border-black bg-yellow-300 text-black placeholder-black placeholder:font-semibold  px-4 py-3 text-base shadow-[4px_4px_0px_0px_#000] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] focus:outline-none transition-all resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 bg-red-300 border-4 border-black px-3 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_#000] inline-block">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Interests */}
                <div>
                  <p className="text-lg font-black mb-4 text-black uppercase tracking-wide">
                    I'm interested in…
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {interestsList.map((interest) => (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-6 py-3 border-4 border-black font-anton text-sm uppercase tracking-wide transition-all transform
                          ${
                            formData.interests.includes(interest)
                              ? "bg-yellow-400 text-black shadow-none translate-x-[2px] translate-y-[2px]"
                              : "bg-white hover:bg-yellow-400 text-black shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                          }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="mt-4 p-3 text-sm font-bold text-black border-4 border-black bg-red-300 shadow-[4px_4px_0px_0px_#000] inline-block">
                      {errors.interests}
                    </p>
                  )}
                  {/* Hidden input to send interests */}
                  <input
                    type="hidden"
                    name="interests"
                    value={formData.interests.join(", ")}
                  />
                </div>

                {/* Budget */}
                <div>
                  <p className="text-lg font-black mb-4 text-black uppercase tracking-wide">
                    Project budget (optional)
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {budgetsList.map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => handleBudgetSelect(budget)}
                        className={`px-6 py-3 border-4 border-black font-anton text-sm uppercase tracking-wide transition-all transform
                          ${
                            formData.budget === budget
                              ? "bg-yellow-400 text-black shadow-none translate-x-[2px] translate-y-[2px]"
                              : "bg-white hover:bg-yellow-400 text-black shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                          }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                  {/* Hidden input to send budget */}
                  <input type="hidden" name="budget" value={formData.budget} />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-12 text-center">
              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className={`px-12 py-4 border-4 border-black font-black text-lg uppercase tracking-wide transition-all transform
                  ${
                    isSubmitted
                      ? "bg-green-500 text-white shadow-none translate-x-[2px] translate-y-[2px] cursor-default"
                      : isLoading
                      ? "bg-red-600 text-white shadow-none translate-x-[2px] translate-y-[2px] cursor-not-allowed"
                      : "bg-red-500 text-white shadow-[8px_8px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-red-400"
                  }`}
              >
                {isSubmitted
                  ? "SUBMITTED!"
                  : isLoading
                  ? "SUBMITTING..."
                  : "SUBMIT"}
              </button>

              {isSubmitted && (
                <p className="text-black font-anton text-sm mt-4 uppercase tracking-wide">
                  We will get back to you in less than 12hrs
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
