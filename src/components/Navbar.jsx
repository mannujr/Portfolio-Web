import React, { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`fixed top-0 z-[999] w-full ${menuOpen?"h-screen backdrop-blur-3xl bg-zinc-900":"transition-transform duration-500"} backdrop-blur-sm`}>
      <div className="w-full flex h-16 px-2 justify-between items-center ">
        {/* Logo */}
        <div className="logo flex flex-col">
          <h1 className="font-semibold">MANNU</h1>
          <span className="text-xl font-semibold">UI/UX</span>
        </div>

        {/* Menu Items */}
        <ul
          className={`fixed top-16 right-0 h-screen text-white flex flex-col gap-10  items-center transform transition-transform duration-500 ${
            menuOpen ? "translate-x-0 w-full bg-zinc-900 justify-top " : "translate-x-full"
          } md:static md:flex-row md:bg-transparent md:translate-x-0 md:flex`}
        >
          <li className={`font-semibold text-zinc-400 hover:text-[#d2ff31] cursor-pointer transition-all duration-300 ${menuOpen?"p-5 tet-":""}`}>
            HOME
          </li>
          <li className={`font-semibold text-zinc-400 hover:text-[#d2ff31] cursor-pointer transition-all duration-300 ${menuOpen?"p-5 tet-":""}`}>
            ABOUT
          </li>
          <li className={`font-semibold text-zinc-400 hover:text-[#d2ff31] cursor-pointer transition-all duration-300 ${menuOpen?"p-5 tet-":""}`}>
            PROJECTS
          </li>
        </ul>

        {/* Contact Button */}
        <button className="px-5 border-none hidden sm:block outline-none bg-zinc-900 py-2 hover:text-black font-semibold rounded-sm hover:bg-[#d2ff31]">
          Contact
        </button>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden mr-5">
          <button
            className="text-white font-bold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen?"X":"☰"}
          </button>
        </div>
      </div>
    </div>
  );
};
