import { useState, useEffect } from "react";
import image from "../assets/images/dropWater.jpg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- ADDED
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-[#1b1c1f]" : "bg-[#1b1c1f]"}

        }`}
    >
      <nav className="flex items-center justify-between flex-wrap w-[95%] xl:w-[65%] mx-auto p-6 transition-all duration-300">
        {/* Logo */}
        <div className="flex-shrink-0 text-white mr-6">
          <Link to="/" className="flex items-center">
            <img
              className="h-8 w-8 mr-2"
              src={image}
              alt="Logo"
              width="54"
              height="54"
            />
            <span className="font-semibold text-xl tracking-tight text-teal-100">
              World Weather
            </span>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
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

        {/* Links */}
        <div
          className={`w-full ${isMenuOpen ? "block" : "hidden"
            } flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/liveradar"
              className="block mt-4 px-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Live Radar
            </NavLink>
            <Link
              to="/weather-blog"
              className="block mt-4 px-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Blog
            </Link>
            <Link
              to="/weather-api"
              className="block mt-4 px-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              API
            </Link>
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
    </header>
  );
};

export default Header;
