import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Satisfy&display=swap"
        rel="stylesheet"
      />
      <nav className="bg-black p-4 flex justify-between items-center">
        <div className="text-white font-semibold ml-5" style={{ fontFamily: 'Pacifico' }}>Vishakh CS</div>
        <div className="flex space-x-4 mr-5">
          <a
            href="https://github.com/vishakh-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishakh-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;