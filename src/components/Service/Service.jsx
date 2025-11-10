import React from "react";

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Grow your brand online with targeted campaigns, SEO optimization, and social media management that deliver measurable results.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Web Development",
      description:
        "We design and develop fast, modern, and scalable websites using React, Node.js, and the latest web technologies.",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Brand Strategy",
      description:
        "Build a powerful brand identity with creative design, storytelling, and digital strategy tailored to your audience.",
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Content Creation",
      description:
        "Engaging visuals and storytelling — from videos to copywriting — to elevate your digital presence.",
      img: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen py-16 px-6 sm:px-12 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-700 mb-4">
          Our Services
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Empowering your business with modern solutions — from design to
          digital growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-orange-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
