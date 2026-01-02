import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { routes } from "../Routes.jsx";
import Logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav 
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-100" 
          : "bg-white py-5" // Always white background for visibility
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 overflow-hidden rounded-lg border border-gray-200">
              <img src={Logo} alt="Brave Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-900">
              BRAVE<span className="text-green-600">.</span>
            </span>
          </NavLink>

          {/* Desktop Links - Now using dark text for white background */}
          <div className="hidden md:flex items-center space-x-8">
            {routes
              .filter((r) => r.showInNavbar)
              .map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) => `
                    relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300
                    ${isActive ? "text-green-600" : "text-gray-500 hover:text-gray-900"}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {route.name}
                      {isActive && (
                        <motion.div 
                          layoutId="navUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-green-600 rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
          </div>

          {/* Book Session Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-600/20"
            >
              Book Now 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col p-10 md:hidden"
          >
            <div className="flex flex-col space-y-6 mt-20">
              {routes
                .filter((r) => r.showInNavbar)
                .map((route, i) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive }) => 
                      `text-4xl font-black transition-colors ${
                        isActive ? "text-green-600" : "text-gray-900"
                      }`
                    }
                  >
                    {route.name}
                  </NavLink>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;