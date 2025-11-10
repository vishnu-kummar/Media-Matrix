import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const shapes = Array.from({ length: 12 });

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden flex flex-col items-center justify-center text-white px-4 sm:px-12">
      {/* Floating geometric shapes */}
      {shapes.map((_, i) => (
        <div
          key={i}
          className="absolute bg-orange-500 opacity-50 rounded-sm"
          style={{
            width: `${Math.random() * 25 + 10}px`,
            height: `${Math.random() * 25 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        ></div>
      ))}

      {/* Abstract product illustration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Abstract product illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-lg animate-pulse">
          🚀 COMING SOON 🚀
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-orange-400 mb-8">
          Can’t Wait to Share It with You!
        </p>

        {/* Email notify form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg w-full sm:w-72 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full font-semibold hover:from-orange-700 hover:to-orange-900 transform hover:-translate-y-0.5 transition duration-300 shadow-lg w-full sm:w-auto"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-medium mt-4">
            Thank you! We'll notify you soon.
          </p>
        )}
      </div>

      {/* Floating shape animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}
