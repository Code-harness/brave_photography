import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../Routes.jsx";
import Logo from "../assets/logo.jpeg";
import { Menu, X } from "lucide-react"; // <-- lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/20 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="PhotoCo Logo"
              className="h-10 w-auto rounded-md bg-cover"
            />
          </div>

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
                      : "text-white hover:text-green-500 transition pb-1"
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
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </div>

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
