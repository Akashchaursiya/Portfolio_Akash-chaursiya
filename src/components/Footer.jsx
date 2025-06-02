import React from 'react';
import { FaFacebookF,  FaLinkedinIn, FaInstagram, FaGithub, FaCertificate  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white py-4 text-center border-t border-gray-600">
      <div className="" />
      <div className="w-full py-10 h-auto flex flex-col md:flex-row justify-between items-center px-8">
        <div className="flex items-center gap-4">
          <img className="w-12" src='/assets/pp.png' alt="logo" />
      
        </div>
        <div className="flex gap-8 justify-center  w-32 my-4 md:my-0 ">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-200 transform hover:scale-110">
            <span className="bannerIcon text-3xl ">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.instagram.com/unknown__sky_31/?igsh=Ymp5dHd0OWxxYXg2" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
            <span className="bannerIcon text-3xl">
              <FaInstagram />
            </span>
          </a>
          <a href="linkedin.com/in/akashchaursiya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-200">
            <span className="bannerIcon text-3xl">
              <FaLinkedinIn />
            </span>
          </a> 
          <a href="https://github.com/Akashchaursiya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-200">
            <span className="bannerIcon text-3xl">
              <FaGithub />
            </span>
          </a> 
       
          <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/KBN8WQAMNHZM" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-200">
            <span className="bannerIcon text-3xl">
              <FaCertificate />
            </span>
          
          </a>
          </div>

        <div className="flex text-black items-center">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="bg-blue-600 p-2 rounded-r-lg hover:bg-blue-500 transition duration-200">
            Subscribe
          </button>
        </div>
      </div>

      
      <div className="py-1 text-center border-t border-gray-600">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Akash Chaursiya. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
