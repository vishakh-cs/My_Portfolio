"use client"
import React, { useState } from 'react';
import Image from 'next/image'; 
import AboutMe from './AboutMe';
import Projects from './Projects';
import Education from './Education';
import ContactMe from './ContactMe';

function About() {

  const [showModal, setShowModal] = useState(false);
  const handleDownload = () => {
    // Handle the download action here
  };

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:vishakhcs51@gmail.com';
  };

  return (
    <div className="h-screen bg-cover bg-center relative">
      <div className="flex justify-center items-center h-screen z-10 relative">
        <div className="w-full sm:w-2/3 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex justify-center items-center sm:order-2">
            <div className="h-72 sm:h-96 w-72 sm:w-96 relative mb-8 sm:mb-0 rounded-full bg-gradient-to-br from-gray-300 to-gray-950 overflow-hidden">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/20240405_164439-Photoroom.png-Photoroom.png"
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Contact Me
            </h3>
            <p className="text-gray-400 mb-8">
              Email: vishakhcs51@gmail.com
            </p>
            <p className="text-gray-400 mb-8">
              Phone: 7907265303
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Close
            </button>
            <button
              onClick={handleEmailClick}
              className="ml-5 bg-green-500 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              send Mail
            </button>
          </div>
        </div>
      )}
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center sm:order-1">
            <div className="text-center sm:text-right sm:pr-8 mb-4 sm:mb-0">
              <p className="text-lg md:text-xl lg:text-2xl">Hi, I'm Vishakh C S</p>
              <p className="text-lg md:text-xl lg:text-2xl">Software Developer</p>
              <div className="mt-4 flex justify-center items-center cursor-pointer">
                <button
                  onClick={"handleDownload"}
                  className="flex items-center text-white border border-white rounded py-2 px-4 mr-4 hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 z-20"
                >
                  Download CV
                </button>
                <button
                  onClick={handleContactClick}
                  className="flex items-center text-white border border-white rounded py-2 px-4 hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 z-20"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
      <Education />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default About;
