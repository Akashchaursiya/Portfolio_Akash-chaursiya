import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar({ toggleDarkMode, isDarkMode }) {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Skills" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 bg-slate-800 text-white shadow-md sticky top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <FaCode className="text-blue-500 text-2xl" />
            <h1 className="font-bold text-xl cursor-pointer">
              Akash<span className="text-blue-500">.dev</span>
            </h1>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="cursor-pointer hover:text-blue-400 transition duration-300"
              >
                <Link to={text} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenu(true)}
          >
            <AiOutlineMenu size={28} />
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenu(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <FaCode className="text-blue-500 text-2xl" />
            <h2 className="text-xl font-bold">
              Akash<span className="text-blue-500">.dev</span>
            </h2>
          </div>

          <IoCloseSharp
            size={30}
            className="cursor-pointer hover:text-red-500"
            onClick={() => setMenu(false)}
          />
        </div>

        <ul className="flex flex-col mt-8">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="px-8 py-4 text-lg hover:bg-slate-800 hover:text-blue-400 transition cursor-pointer"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenu(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
