import { FaGithub } from 'react-icons/fa';

import logo from '../assets/cinepedia_logo.svg';
import SearchForm from './SearchForm';

const Navbar = () => {
  return (
    <div className="bg-darkBlue z-10">
      {/* Navbar */}
      <nav className="relative container mx-auto py-4 px-12">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-32 z-10 md:w-48">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Menu Items */}
          <div className="flex items-center ml-4 space-x-4 z-10">
            {/* Search Form */}
            <div className="z-10">
              <SearchForm />
            </div>
            {/* GitHub Link */}
            <a
              href="https://github.com/mercyano"
              target="_blank"
              rel="noopener noreferrer"
              className=" ml-4 text-white hover:text-gray-300"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
