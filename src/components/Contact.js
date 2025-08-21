import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const interestsList = [
  'Web Development',
  'Resume Building',
  'UX/UI Design',
  'Branding ',
  'Site from scratch',
  'Maintenance',
];

const budgetsList = [
  'Less than ₹5K',
  '₹5K – ₹10K',
  '₹10K – ₹20K',
  '₹20K – ₹30K',
  'Above ₹30K',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: [],
    budget: '',
  });

  const [isLoading, setIsLoading] = useState(false); // loading state

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, interests, budget } = formData;

    if (!name || !email || !message || interests.length === 0 || !budget) {
      toast.error('Please fill in all fields');
      return;
    }

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
      interests: interests.join(', '),
      budget: budget,
    };

    setIsLoading(true); // start loading

    emailjs
      .send(
        'service_hn015xx',
        'template_raokg8r',
        templateParams,
        'k9sAVSzScreKyw7Bv'
      )
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          interests: [],
          budget: '',
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to send message.');
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#00B7E6] via-[#00CBDF] to-[#00DCD8] px-4 py-10 flex justify-center items-center text-white">
      <Toaster position="top-right" />
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center">
          Contact Us
        </h1>
        <p className="text-lg font-medium mb-8 text-center">Request a quote</p>
        <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl">
          <div>
            <label className="block text-base font-semibold mb-1">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-black py-2 text-base"
              required
            />
          </div>

          <div>
            <label className="block text-base font-semibold mb-1">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-black py-2 text-base"
              required
            />
          </div>

          <div>
            <p className="font-semibold text-base mb-2">I'm interested in…</p>
            <div className="flex flex-wrap gap-3">
              {interestsList.map((interest) => (
                <button
                  type="button"
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 border-2 rounded-full text-sm transition-all ${
                    formData.interests.includes(interest)
                      ? 'bg-white text-black border-white'
                      : 'border-white text-white hover:bg-white hover:text-black font-medium'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-base mb-2">Project budget (INR)</p>
            <div className="flex flex-wrap gap-3">
              {budgetsList.map((budget) => (
                <button
                  type="button"
                  key={budget}
                  onClick={() => handleBudgetSelect(budget)}
                  className={`px-4 py-2 border-2 rounded-full text-sm transition-all ${
                    formData.budget === budget
                      ? 'bg-white text-black border-white'
                      : 'border-white text-white hover:bg-white hover:text-black font-medium'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-base font-semibold mb-1">
              Tell us more about your project
            </label>
            <textarea
              name="message"
              placeholder="Something about your great idea…"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border-2 border-white rounded-md px-4 py-3 bg-transparent text-white placeholder-white focus:outline-none focus:border-black text-sm"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-3 rounded-md font-semibold transition ${
              isLoading
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
