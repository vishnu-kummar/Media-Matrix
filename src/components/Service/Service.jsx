import React, { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Premium Showroom",
      description:
        "Visit our state-of-the-art showroom featuring the latest products. Experience quality firsthand with expert guidance from our team.",
      img: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1600",
      icon: "🏢",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Expert Staff", "Live Demos", "Test Drive"]
    },
    {
      title: "Product Consultation",
      description:
        "Get personalized recommendations from our specialists. We help you find the perfect product that matches your needs and budget.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
      icon: "💼",
      gradient: "from-purple-500 to-pink-500",
      features: ["Free Consultation", "Custom Solutions", "Budget Planning"]
    },
    {
      title: "Home Delivery",
      description:
        "Fast and secure delivery to your doorstep. We ensure your products arrive safely with professional installation included.",
      img: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600",
      icon: "🚚",
      gradient: "from-orange-500 to-red-500",
      features: ["Same Day Delivery", "Installation", "Tracking"]
    },
    {
      title: "Warranty & Support",
      description:
        "Comprehensive warranty coverage and 24/7 customer support. We're here to help long after your purchase.",
      img: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1600",
      icon: "🛡️",
      gradient: "from-green-500 to-emerald-500",
      features: ["Extended Warranty", "24/7 Support", "Free Repairs"]
    },
    {
      title: "Financing Options",
      description:
        "Flexible payment plans and financing options available. Own your dream product today with easy monthly installments.",
      img: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1600",
      icon: "💳",
      gradient: "from-yellow-500 to-orange-500",
      features: ["0% Interest", "Easy EMI", "Quick Approval"]
    },
    {
      title: "After-Sales Service",
      description:
        "Premium maintenance and servicing for all products. Regular check-ups, repairs, and upgrades to keep everything running smoothly.",
      img: "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=1600",
      icon: "🔧",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Regular Maintenance", "Genuine Parts", "Priority Service"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="text-sm font-semibold text-purple-700">Premium Experience</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              Our Services
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From showroom experience to after-sales support, we provide exceptional service at every step of your journey with us.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { value: "50+", label: "Years Experience" },
                { value: "100K+", label: "Happy Customers" },
                { value: "15+", label: "Showrooms" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-xs font-semibold rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
                {hoveredIndex === index && (
                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg animate-slideUp">
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">
              We go above and beyond to ensure your satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⭐", title: "Premium Quality", desc: "Only the finest products" },
              { icon: "🎯", title: "Expert Guidance", desc: "Professional consultation" },
              { icon: "💎", title: "Best Prices", desc: "Competitive pricing guaranteed" },
              { icon: "🤝", title: "Trust & Reliability", desc: "50+ years of excellence" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Visit Our Showroom Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience our products firsthand and get expert advice from our team. We're here to help you make the perfect choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200">
              View Locations
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}