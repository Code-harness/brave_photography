import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../Routes.jsx";
import Logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="PhotoCo Logo" className="h-10 w-auto rounded-md bg-cover" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {routes
              .filter((r) => r.showInNavbar)
              .map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
                      : "text-gray-700 hover:text-green-500 transition pb-1"
                  }
                >
                  {route.name}
                </NavLink>
              ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-500 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {routes
              .filter((r) => r.showInNavbar)
              .map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsOpen(false)} // close menu on click
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 font-semibold block px-3 py-2 rounded"
                      : "text-gray-700 hover:text-green-500 block px-3 py-2 rounded transition"
                  }
                >
                  {route.name}
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
