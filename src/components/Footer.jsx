import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 mt-1">

      <div className="max-w-7xl mx-auto px-3 py-3 text-center">

       
        <div className="flex justify-center gap-6 mb-4 text-xl">

          <a
            href="https://github.com/Akashchaursiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/akashchaursiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:akashchaursiya381@gmail.com"
            className="text-red-500 hover:text-red-700 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Akash Chaursiya. All rights reserved.
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Frontend Developer | React | Tailwind CSS
        </p>

      </div>

    </footer>
  );
};

export default Footer;