import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 font-poppins pt-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white tracking-tight">
            Brave<span className="text-green-500">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Capturing life's precious moments with creativity and passion.
            Professional photography services for those who dare to be
            different.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-2 bg-gray-900 rounded-lg hover:text-green-500 hover:bg-gray-800 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
            Navigation
          </h2>
          <ul className="space-y-4">
            {["Home", "Services", "Gallery", "Contact"].map((link) => (
              <li key={link}>
                <NavLink
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-sm transition-colors hover:text-green-500 flex items-center group ${
                      isActive ? "text-green-500" : ""
                    }`
                  }
                >
                  <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-green-500 mr-0 group-hover:mr-2"></span>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div>
          <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
            Our Expertise
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white transition-colors cursor-default">
              Wedding Photography
            </li>
            <li className="hover:text-white transition-colors cursor-default">
              Portrait Sessions
            </li>
            <li className="hover:text-white transition-colors cursor-default">
              Event Coverage
            </li>
            <li className="hover:text-white transition-colors cursor-default">
              Commercial Shoots
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <h2 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
            Contact
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-green-500" />
              <span>info@bravephoto.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-green-500" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-green-500" />
              <span>123 Photography St, NYC</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 transition-all"
          >
            Book Session <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} Brave Photography Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
