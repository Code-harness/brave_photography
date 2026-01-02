import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, CameraOff } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-white overflow-hidden font-poppins">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-green-50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-white border border-gray-100 p-8 rounded-full shadow-2xl text-green-600">
              <CameraOff size={64} strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[12rem] font-black leading-none tracking-tighter text-gray-900 opacity-10 absolute left-1/2 -translate-x-1/2 -top-20 select-none">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Out of <span className="text-green-600">Focus</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you're looking for has moved or never existed. Let's get
            you back to the main gallery.
          </p>
        </motion.div>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-8 py-4 text-gray-600 font-bold hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 bg-gray-900 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-gray-900/20 hover:bg-green-600 hover:shadow-green-600/30 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </button>
        </motion.div>
      </div>

      {/* Modern Grid Overlay (Optional) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

export default NotFound;
