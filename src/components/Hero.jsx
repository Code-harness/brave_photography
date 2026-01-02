import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  Calendar,
  Image as ImageIcon,
  ChevronRight,
} from "lucide-react";
import Image1 from "../assets/images/1.jpeg";
import Image2 from "../assets/images/2.jpg";
import Image3 from "../assets/images/4.jpeg";

const images = [Image1, Image2, Image3];

const stats = [
  { icon: <ImageIcon size={20} />, value: "10k+", label: "Photos Taken" },
  { icon: <Camera size={20} />, value: "500+", label: "Sessions" },
  { icon: <Calendar size={20} />, value: "5+", label: "Years Exp." },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Background Slider with Zoom Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
        />
      </AnimatePresence>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      <div className="relative z-10 max-w-5xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle Badge */}
          <span className="inline-block py-1 px-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold tracking-widest uppercase mb-6">
            Professional Photography
          </span>

          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
            Capturing Life's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Precious
            </span>{" "}
            Moments
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Welcome to <span className="text-white">Brave Photographie</span>.
            We blend art and emotion to transform your fleeting special moments
            into timeless visual narratives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => navigate("/contact")}
              className="group px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-green-600/20 active:scale-95 w-full sm:w-auto justify-center"
            >
              Book a Session
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => navigate("/gallery")}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 rounded-2xl font-bold transition-all w-full sm:w-auto"
            >
              View Gallery
            </button>
          </div>
        </motion.div>

        {/* Stats Section - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg p-5 flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-left">
                <p className="text-white text-xl font-black leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-green-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
