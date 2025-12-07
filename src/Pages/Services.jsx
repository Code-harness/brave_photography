import React from "react";
import { Camera, Brush, Printer, Calendar } from "lucide-react";

const services = [
  {
    title: "Photography",
    description: "Creative and professional photo sessions for individuals, couples, and brands.",
    icon: <Camera size={30} className="text-green-600" />,
  },
  {
    title: "Editing",
    description: "Premium color grading and retouching to make your images stand out beautifully.",
    icon: <Brush size={30} className="text-green-600" />,
  },
  {
    title: "Prints",
    description: "High-quality prints, frames, and wall art to preserve your memories.",
    icon: <Printer size={30} className="text-green-600" />,
  },
  {
    title: "Events",
    description: "Professional coverage for weddings, birthdays, and corporate events.",
    icon: <Calendar size={30} className="text-green-600" />,
  },
];

const Services = () => (
  <section className="py-20 h-screen bg-white font-poppins">
    <h2 className="text-4xl font-bold text-center mb-4">
      Our <span className="text-green-600">Services</span>
    </h2>
    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
      We provide a wide range of professional photography services designed to
      capture your most important moments with creativity and precision.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
        >
          <div className="flex justify-start bg-green-100 w-fit p-2 rounded-full mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
