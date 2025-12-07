import React, { useState, useEffect } from "react";
import Gallery from "../Pages/Gallery";
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center text-center overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full px-4">
        <div>
          <h2 className="text-white text-6xl font-bold mb-2">Capturing Life's <span className="text-green-600">Precious</span> Moments</h2>
          <p className="text-white text-[1.3rem]">
            Welcome to Brave Photgraphie, where we transform your special moments
            into timeless memories.
          </p>
        </div>

        {/* <div className="grid grid-cols-3 justify-around  text-white px-6">
          <div className="bg-black/40 rounded-md backdrop-blur-sm p-6 flex flex-col ">
            <p className="text-red-500 m-2">icon</p>
            <p className="m-2">10000+</p>
            <p>Photo Sessions</p>
          </div>
        </div> */}
      </div>
    </section>

    
  );
};

export default Hero;
