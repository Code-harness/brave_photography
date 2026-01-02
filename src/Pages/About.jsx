import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import Image from "../assets/images/9.webp";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-white overflow-hidden font-poppins">
      {/* Decorative Background Text (Subtle) */}
      <div className="absolute top-20 left-10 text-[12rem] font-black text-gray-50 opacity-[0.02] select-none pointer-events-none">
        STORY
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Section with "Stacked" effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2"
          >
            {/* Background Accent Frame */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-green-600/20 rounded-tl-3xl" />

            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={Image}
                alt="Brave Studio Workspace"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Modernized Experience Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -right-4 -bottom-4 md:right-8 md:-bottom-8 bg-green-600 text-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <Award size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold leading-none">2+</p>
                <p className="text-xs uppercase tracking-wider opacity-80 font-semibold">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Capturing the <span className="text-green-600">Brave</span>{" "}
                <br />
                Side of Every Story.
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At{" "}
                  <span className="text-black font-semibold italic">
                    Brave Photography
                  </span>
                  , we believe every frame tells a story. We don't just capture
                  light; we capture the raw emotion, the silent glances, and the
                  loud celebrations that define your life.
                </p>
                <p>
                  Our personalized approach ensures that we don't just provide a
                  service, but a collaborative experience. We dive deep into
                  your vision to produce imagery that feels authentically{" "}
                  <span className="text-green-600 font-medium">you</span>.
                </p>
              </div>

              {/* Quick Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-10">
                {[
                  "Professional Editing",
                  "Fast Delivery",
                  "Modern Equipment",
                  "On-location Shoots",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                  >
                    <CheckCircle2 size={18} className="text-green-600" />
                    {item}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
              >
                Book a Session
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
