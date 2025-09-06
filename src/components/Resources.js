import React, { useState } from 'react';
import axios from 'axios'; // Optional if you want to save emails to Firebase

const Athenor = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');

    try {
      await axios.post('https://riddle2025-d3896-default-rtdb.firebaseio.com/athenor.json', {
        email,
        joinedAt: new Date().toISOString()
      });

      setStatus('sent');

      // Reset email and status after 5 seconds
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 5000);
    } catch (err) {
      console.error('Error saving email:', err);
      setStatus('error');

      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-[#FF9AA3] flex flex-col text-center p-11 justify-center items-center sm:min-h-screen min-h-screen cursor-pointer">
      <div className="py-9">
        {/* Page Heading */}
        <div
          className="font-anton text-4xl md:text-5xl lg:text-7xl text-gray-900 mb-2 tracking-tight"
          style={{ textShadow: '3px 3px 0px white' }}
        >
          Welcome to <span>Athenor</span>
        </div>
        <div className="font-anton text-md md:text-lg lg:text-xl text-gray-700 mb-2 pb-5">
          Where timeless wisdom meets modern mastery
        </div>

        {/* Description */}
        <div className="py-6">
          <p className="font-anton text-xl text-gray-800">Something amazing is on the way!</p>
          <p className="font-medium text-md text-gray-700">
            We’re crafting a dedicated hub of world-class, expert-tailored courses designed to empower you in your journey to mastery.
          </p>
        </div>

        {/* Early access call */}
        <div className="font-anton text-lg text-gray-800 pt-6">
          Be the first to get informed and enjoy early access benefits
        </div>

        {/* Email subscription form */}
        <div className="flex justify-center mt-3 flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-sm flex justify-center items-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 pr-24 rounded-full sm:border-4 border-2 border-gray-800 bg-transparent text-sm text-[#c3d2f6] placeholder:text-gray-700 placeholder:font-anton focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="absolute top-[6px] right-[6px] px-6 sm:py-[10px] py-[8px] font-anton rounded-full bg-gray-800 hover:text-white text-sm transition-all duration-200 text-white"
            >
              {status === 'sending'
                ? 'Subscribing...'
                : status === 'sent'
                ? 'Subscribed! 🎉'
                : status === 'error'
                ? 'Try again!'
                : 'Subscribe'}
            </button>
          </form>

          {/* Friendly welcome text after successful subscription */}
          {status === 'sent' && (
            <p className="mt-4 text-gray-800 font-anton text-sm sm:text-md animate-fade-in">
              🎉 Hooray! You’re now on the Athenor early access list! 🚀
            </p>
          )}
          {status === 'error' && (
  <p className="mt-4 text-gray-800 font-anton text-sm sm:text-md animate-fade-in">
Don’t miss out—world-class learning is just a click away! Try Again  </p>
)}

        </div>
      </div>
    </div>
  );
};

export default Athenor;
