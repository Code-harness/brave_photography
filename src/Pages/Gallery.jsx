import React, { useState } from "react";
import Image1 from "../assets/images/1.jpeg";
import Image2 from "../assets/images/2.jpg";
import Image3 from "../assets/images/3.jpeg";
import Image4 from "../assets/images/4.jpeg";
import Image5 from "../assets/images/5.jpg";
import Image6 from "../assets/images/6.webp";
import Image7 from "../assets/images/7.jpg";
import Image8 from "../assets/images/8.jpg";
import Image9 from "../assets/images/9.webp";

const images = [
  Image1, Image2, Image3,
  Image4, Image5, Image6,
  Image7, Image8, Image9,
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((currentIndex + images.length - 1) % images.length);

  return (
    <section className="py-28 bg-gray-100 text-center">
      <h2 className="text-4xl text-green-600 font-bold mb-8"><span className="text-black">Our </span>Gallery</h2>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="mb-4 break-inside-avoid rounded-md overflow-hidden cursor-pointer">
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
              style={{ height: `${200 + (index % 3) * 80}px` }} // simulate different heights
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute left-4 text-white text-3xl font-bold z-50"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt={`Lightbox ${currentIndex}`}
            className="max-h-[90vh] max-w-[90vw] rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white text-3xl font-bold z-50"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            ›
          </button>

          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
