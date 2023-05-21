import { FaGithub } from 'react-icons/fa';

import logo from '../assets/cinepedia_logo.svg';
import SearchForm from './SearchForm';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-20 w-full bg-darkBlue">
      {/* Navbar */}
      <nav className="container relative mx-auto px-4 py-2 md:px-24">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="z-10 w-32 md:w-48">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Menu Items */}
          <div className="z-10 ml-4 flex items-center space-x-4">
            {/* Search Form */}
            <div className="z-10">
              <SearchForm />
            </div>
            {/* GitHub Link */}
            <a
              href="https://github.com/mercyano/cinepedia"
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
