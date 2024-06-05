"use client"
import React from 'react';

const ContactMe = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:vishakhcs51@gmail.com';
  };

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">Contact Me</h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get in Touch with Me
            </h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </p>
            <button
              onClick={handleEmailClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Send Mail
            </button>
            <p className="text-gray-400 mt-4">vishakhcs51@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
