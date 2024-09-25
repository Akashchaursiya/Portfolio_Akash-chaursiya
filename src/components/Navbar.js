import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
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

  React.useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      className="max-w-screen-2xl container mx-auto p-0 px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 "
    >
      <div className="flex justify-between items-center h-16">
        <div className=" flex space-x-2">
          <img
            src="/assets/pp.png"
            className="h-12 w-12 rounded-full"
            alt="logo"
          />
          <h1 className="font-semibold text-2xl cursor-pointer">Akash</h1>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer"
              >
                <Link to={text} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden ml-4">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {menu && (
        <div >
            <ul className="md:hidden text-black bg-white flex flex-col items-center justify-center space-y-3 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
