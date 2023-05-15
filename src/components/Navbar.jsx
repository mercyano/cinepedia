import { FaGithub } from 'react-icons/fa';

import logo from '../assets/cinepedia_logo.svg';

const Navbar = () => {
  return (
    <div className="bg-darkBlue">
      {/* Navbar */}
      <nav className="relative container mx-auto py-4 px-12">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-32 z-10 md:w-48">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-10">
            {/* GitHub Link */}
            <a
              href="https://github.com/mercyano"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 ml-4 text-white hover:text-gray-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
