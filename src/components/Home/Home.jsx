import React from "react";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-24 py-16 bg-gradient-to-r from-orange-100 via-white to-orange-50 shadow-lg">
        {/* COMING SOON Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/50 text-center px-4">
          <h1 className="text-white text-5xl sm:text-7xl font-extrabold tracking-widest animate-pulse drop-shadow-lg">
            🚀 COMING SOON 🚀
          </h1>
          <p className="text-white text-lg sm:text-2xl mt-4 font-medium tracking-wide">
            Can’t Wait to Share It with You!
          </p>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full opacity-40">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Coming soon background"
          />
        </div>
      </aside>

      {/* Secondary Image */}
      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="sm:w-96 w-56 rounded-2xl shadow-md"
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="business concept"
        />
      </div>
    </div>
  );
}
