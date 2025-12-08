import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-green-50 overflow-hidden">
      
      {/* Animated Blob Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative text-center p-10 bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20">
        <h1 className="text-9xl font-extrabold text-green-800">404</h1>
        <p className="mt-4 text-xl text-gray-700 font-medium">
          The page you’re looking for doesn’t exist.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg shadow-lg transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
