import React from "react";
import { motion } from "framer-motion";
import { Camera, Brush, Printer, Calendar, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Photography",
    description:
      "Creative and professional photo sessions for individuals, couples, and brands.",
    icon: <Camera size={28} />,
  },
  {
    title: "Editing",
    description:
      "Premium color grading and retouching to make your images stand out beautifully.",
    icon: <Brush size={28} />,
  },
  {
    title: "Prints",
    description:
      "High-quality prints, frames, and wall art to preserve your memories.",
    icon: <Printer size={28} />,
  },
  {
    title: "Events",
    description:
      "Professional coverage for weddings, birthdays, and corporate events.",
    icon: <Calendar size={28} />,
  },
];

const Services = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-600 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-400 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-green-600 font-bold tracking-widest uppercase text-sm"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6"
          >
            Our <span className="text-green-600">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We blend artistic vision with technical precision to deliver
            stunning visual narratives that last a lifetime.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(34,197,94,0.15)] transition-all duration-500"
            >
              {/* Animated Icon Container */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-green-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative bg-green-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* "Learn More" Micro-interaction */}
              <div className="flex items-center text-sm font-bold text-green-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Explore More <ArrowUpRight size={16} className="ml-1" />
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
