import React from "react";

const services = [
  { title: "Photography", description: "Professional photos for all occasions." },
  { title: "Editing", description: "High-quality editing to enhance your memories." },
  { title: "Prints", description: "Prints of your favorite photos." },
  { title: "Events", description: "Cover your special events professionally." },
];

const Services = () => (
  <section className="py-16 bg-white text-center">
    <h2 className="text-4xl font-bold mb-8">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="bg-gray-100 p-6 rounded-md shadow hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
