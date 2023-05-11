import { useState } from 'react';

import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';

import logo from '../assets/cinepedia_logo.svg';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setLightMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleLightMode = () => {
    setLightMode(!isLightMode);
    // Additional logic for toggling light/dark mode
  };

  return (
    <div className="bg-darkBlue">
      {/* Navbar */}
      <nav className="relative container mx-auto py-6 px-12">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-48">
            <img src={logo} alt="logo" />
          </div>

          <div className="flex items-center space-x-10">
            {/* GitHub Link */}
            <a
              href="https://github.com/mercyano"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block ml-4 text-white"
            >
              <FaGithub size={24} />
            </a>
            {/* Light Mode Toggle */}
            <button
              className="hidden md:block ml-4 text-white focus:outline-none"
              onClick={toggleLightMode}
            >
              {isLightMode ? <FaMoon size={24} /> : <FaSun size={24} />}
            </button>
          </div>
          {/* Hamburger Menu */}
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            <RiMenu3Line size={24} />
          </button>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-2 px-4 mt-4">
              {/* Mobile menu links */}
              {/* GitHub Link */}
              <a
                href="https://github.com/mercyano"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block text-white"
              >
                Github
              </a>
              {/* Light Mode Toggle */}
              <button
                className="hidden md:block ml-4 text-white focus:outline-none"
                onClick={toggleLightMode}
              >
                {isLightMode ? <FaMoon size={24} /> : <FaSun size={24} />}
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
