import React, { useState } from 'react';
import axios from 'axios';
import tribe from '../Assets/tribe.png';

const Tribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');

    try {
      await axios.post(
        'https://riddle2025-d3896-default-rtdb.firebaseio.com/tribe.json',
        { email, joinedAt: new Date().toISOString() }
      );

      setStatus('sent');

      // Reset form and status after 5 seconds
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 5000);
    } catch (err) {
      console.error('Error saving email:', err);
      setStatus('error');

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-[#ff9966] overflow-x-hidden py-9 cursor-pointer">
      <div className="px-9">
        <div className="text-center mb-3">
          <h1
            className="text-3xl md:text-3xl lg:text-5xl font-anton text-gray-900 mb-2 tracking-tight"
            style={{ textShadow: '3px 3px 0px white' }}
          >
            Join our Community
          </h1>
        </div>
        <div className="text-center text-gray-800 font-anton text-sm sm:text-md pt-2 mb-2 px-2">
          <h1>
            “Be part of the tribe! Get fresh insights, project updates, and exclusive resources
            straight to your inbox. Subscribe today and never miss the journey.”
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={tribe} alt="Tribe" className="sm:h-72 h-48 w-max" />
        </div>
        <div className="flex justify-center flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-sm flex justify-center mt-6 items-center"
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
                ? 'Try Again'
                : 'Subscribe'}
            </button>
          </form>

          {/* Friendly welcome text after successful subscription */}
{status === 'sent' && (
  <p className="mt-4 text-gray-800 font-anton text-sm sm:text-md animate-fade-in">
    Hooray! The tribe just got cooler with you here! 😎
  </p>
)}
{status === 'error' && (
  <p className="mt-4 text-gray-800 font-anton text-sm sm:text-md animate-fade-in">
    Hang on! We’d hate to miss you—give it another shot!
  </p>
)}
        </div>
      </div>
    </div>
  );
};

export default Tribe;
