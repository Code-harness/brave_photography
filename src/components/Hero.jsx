import React, { useState, useEffect } from "react";
import Image1 from "../assets/images/1.jpeg";
import Image2 from "../assets/images/2.jpg";
import Image3 from "../assets/images/3.jpeg";

const images = [Image1, Image2, Image3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5000ms = 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center text-center overflow-hidden">
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay to darken images */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Capture Your Moments
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Professional Photography Services for Every Occasion
        </p>
        <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-semibold transition">
          Book a Session
        </button>
      </div>
    </section>
  );
};

export default Hero;
