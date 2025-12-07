import React from "react";

const Services = () => {
  const services = [
    "📷 Wedding Photography",
    "🏢 Corporate Events",
    "👶 Portraits",
    "🌄 Travel & Landscape",
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <ul className="max-w-xl mx-auto space-y-4 text-lg">
        {services.map((s, idx) => (
          <li key={idx} className="bg-gray-100 p-4 rounded shadow">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
