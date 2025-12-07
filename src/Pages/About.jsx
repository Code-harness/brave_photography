import React from "react";
import Image from "../assets/images/9.webp";

const About = () => {
  return (
    <section className="py-20 bg-transparent font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-green-600">Brave Photography</span>
          </h2>
          <p className="text-gray-700 mb-4 font-sans leading-relaxed">
            At Brave Studio, photography is not just about taking pictures; it’s
            about creating timeless memories you’ll cherish forever. Our
            experienced photographers capture the essence of every moment with
            creativity and precision.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            What sets us apart is our personalized approach. We take the time
            to understand your vision and style, ensuring each photo reflects
            your unique personality.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors duration-300"
          >
            Book a Session
          </a>
        </div>

        {/* Image */}
        <div className=" relative lg:w-1/2">
          <img
            src={Image}
            alt="Studio"
            className="w-full rounded-xl shadow-xl object-cover"
          />
          <p className="absolute right-0 bottom-4 bg-white p-4 rounded-tl-xl text-green-600"> + 2 Years of Exprience</p>
        </div>
      </div>
    </section>
  );
};

export default About;
