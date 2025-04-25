import { useState } from "react";
import image from "../assets/images/dropWater.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#1b1c1f] flex items-center justify-center ">
      <nav className="flex items-center justify-between flex-wrap md:w-[65%]  p-6">
        <div className="flex-shrink-0 text-white mr-6">
          <a href="/" className="flex items-center">
            <img
              className="h-8 w-8 mr-2"
              width="54"
              height="54"
              src={image}
              alt="Logo"
            />
            <span className="font-semibold text-xl tracking-tight text-teal-100">
              World Weather{" "}
            </span>
          </a>
        </div>

        {/* Hamburger Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full ${
            isMenuOpen ? "block" : "hidden"
          } flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="/Features"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Features
            </a>
            <a
              href="/liveradar"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Live Radar
            </a>
            <a
              href="/hurricane-tracking"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Hurricane Tracking
            </a>
            <a
              href="/server-alerts"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Server Alerts
            </a>
            <a
              href="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
            <a
              href="/api"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              API
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-200 border-teal-200 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Get the app
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
