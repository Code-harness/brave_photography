import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Assuming your imports stay the same
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
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImg(images[index]);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    setSelectedImg(images[next]);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
    setSelectedImg(images[prev]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImg) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg, currentIndex]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Our <span className="text-green-600">Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-green-500 rounded-full" />
        </div>

        {/* Responsive Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-zoom-in overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>

            {/* Large Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Selected"
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-[-40px] text-white/50 text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
