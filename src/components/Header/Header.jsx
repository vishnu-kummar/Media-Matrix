import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useScrolledPastTop } from "@/hooks/useScrolledPastTop.js";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 1. Get the scroll state
  const scrolled = useScrolledPastTop(50); 
  
  // 2. Dynamic Class Logic:
  // - On ALL screens, we apply the translation based on 'scrolled'.
  // - On desktop (lg:), we explicitly override the translation back to 0 (visible).
  const scrollClass = scrolled ? '-translate-y-full' : 'translate-y-0';
  
  // 3. The full class string applied to the <header> tag
  const headerClasses = `
    sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-md 
    transition-transform duration-300 transform 
    ${scrollClass} 
    lg:translate-y-0
  `;
  // The lg:translate-y-0 ensures the header is always visible on desktop (1024px and up).


  return (
    <header className={headerClasses}>
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="MediaMatrix Logo"
              className="h-20 object-contain rounded-md shadow-sm border border-gray-200"
            />
            <div className="leading-tight">
              <div className="text-2xl font-extrabold text-sky-800">MediaMatrix</div>
              <div className="text-base text-gray-500 -mt-0.5">
                Barter Media Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <ul className="flex items-center gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-lg text-base font-medium transition ${
                        isActive
                          ? "text-sky-800 bg-sky-50"
                          : "text-gray-700 hover:text-sky-700 hover:bg-sky-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300 text-base"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:text-sky-700"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-lg shadow-md p-4 border">
            <ul className="flex flex-col gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition ${
                      isActive
                        ? "text-sky-800 bg-sky-50"
                        : "text-gray-700 hover:text-sky-700 hover:bg-sky-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </ul>

            <div className="mt-3 flex flex-col gap-2">
              <Link
                to="/services"
                className="block text-white bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 font-semibold rounded-full text-sm px-5 py-2 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}