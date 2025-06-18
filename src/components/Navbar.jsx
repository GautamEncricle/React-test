import React, { useState } from 'react';
import Logo from '../assets/icons/Logo.png';
import CallingIcon from '../assets/icons/calling.png';
import EmailIcon from '../assets/icons/email.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-3 pb-3 md:pt-6 md:pb-6 fixed top-0 bg-white z-50 shadow">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-4">

        {/* Logo */}
        <div className="flex-none md:w-32 w-full flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="Logo"
            className="object-contain w-24 sm:w-28 md:w-full h-auto"
          />
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 justify-center flex-grow">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact Us'].map((item) => {
            const isHome = item === 'Home'; // you can later replace this with an active check
            return (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                className={`font-unbounded ${isHome ? 'font-extrabold' : 'font-normal'
                  } text-sm md:text-base text-[#796F51] capitalize`}
              >
                {item}
              </a>
            );
          })}
        </nav>


        {/* Contact Info - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {/* Email */}
          <div className="flex items-center gap-2 bg-[rgba(132,130,131,0.1)] rounded-full px-2 py-1">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[rgba(132,130,131,0.1)]">
              <img src={EmailIcon} alt="Email" className="w-4 h-4" />
            </div>
            <div className="flex flex-col items-start text-xs">
              <span className="font-poppins text-[#161618]">Say hello to Email</span>
              <span className="font-unbounded font-semibold text-[10px] text-[#161618]">contactRVA@gmail.com</span>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-center gap-2 bg-[rgba(132,130,131,0.1)] rounded-full px-2 py-1">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[rgba(132,130,131,0.1)]">
              <img src={CallingIcon} alt="Call" className="w-4 h-4" />
            </div>
            <div className="flex flex-col items-start text-xs">
              <span className="font-poppins text-[#161618]">Talk to an expert</span>
              <span className="font-unbounded font-semibold text-[10px] text-[#161618]">+91 98*** *****</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center pr-2">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#796F51] text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-4 pb-6 flex flex-col gap-4 text-center">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              className="font-unbounded text-[#796F51] text-base capitalize"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Contact Info - Mobile */}
          <div className="flex flex-col gap-2 items-center mt-4">
            <div className="flex items-center gap-2 bg-[rgba(132,130,131,0.1)] rounded-full px-3 py-2">
              <img src={EmailIcon} alt="Email" className="w-4 h-4" />
              <span className="text-xs text-[#161618]">contactRVA@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-[rgba(132,130,131,0.1)] rounded-full px-3 py-2">
              <img src={CallingIcon} alt="Call" className="w-4 h-4" />
              <span className="text-xs text-[#161618]">+91 98*** *****</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
