import React, { useState } from 'react';
// --- Assuming these are your correct asset paths ---
import Logo from '../assets/icons/Logo.png';
import CallingIcon from '../assets/icons/calling.png';
import EmailIcon from '../assets/icons/email.png';
// ---

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data for navigation links to keep the code DRY
  const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact Us'];

  return (
    // Use padding on a container div instead of the header for better control
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">

        {/* Logo - Pushed to the far left */}
        <div className="flex-shrink-0">
          <a href="/" aria-label="Home">
            <img src={Logo} alt="RVA Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation - Centered in the available space */}
        <nav className="hidden lg:flex flex-grow items-center justify-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              className={`
                font-unbounded text-base capitalize text-[#796F51] transition-colors hover:text-black
                ${item === 'Home' ? 'font-bold' : 'font-medium'}
              `}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Info - Pushed to the far right */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Email */}
          <div className="flex items-center gap-3 rounded-full bg-gray-100 p-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
              <img src={EmailIcon} alt="Email Icon" className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins text-xs text-gray-600">Say Hello To Email</span>
              <a href="mailto:ContactRVA@Gmail.Com" className="font-unbounded text-xs font-semibold text-black hover:underline">
                ContactRVA@Gmail.Com
              </a>
            </div>
          </div>
          {/* Call */}
          <div className="flex items-center gap-3 rounded-full bg-gray-100 p-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
              <img src={CallingIcon} alt="Call Icon" className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins text-xs text-gray-600">Talk To An Experts</span>
              <a href="tel:+919812345678" className="font-unbounded text-xs font-semibold text-black hover:underline">
                +91 98*** *****
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button (Hamburger) - Appears on tablet and mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-[#796F51] focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="absolute w-full bg-white shadow-xl lg:hidden">
          <nav className="flex flex-col items-center gap-4 px-4 pt-4 pb-6 text-center">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                className="w-full rounded-md py-2 font-unbounded text-base capitalize text-[#796F51] transition-colors hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            {/* Mobile Contact Info */}
            <div className="mt-4 flex flex-col items-center gap-4">
              <a href="mailto:ContactRVA@Gmail.Com" className="flex items-center gap-3 rounded-full bg-gray-100 py-2 px-4">
                <img src={EmailIcon} alt="Email" className="h-5 w-5" />
                <span className="font-semibold text-black">ContactRVA@Gmail.Com</span>
              </a>
              <a href="tel:+919812345678" className="flex items-center gap-3 rounded-full bg-gray-100 py-2 px-4">
                <img src={CallingIcon} alt="Call" className="h-5 w-5" />
                <span className="font-semibold text-black">+91 98*** *****</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;