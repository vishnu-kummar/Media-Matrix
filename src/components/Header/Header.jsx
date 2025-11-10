import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md backdrop-blur-md bg-white/70">
      <nav className="border-gray-200 px-4 lg:px-8 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=100"
              className="h-12 rounded-full shadow-sm border border-orange-200"
              alt="Logo"
            />
            <span className="text-xl font-bold text-orange-700 tracking-wide">
              MediaMatrix
            </span>
          </Link>

          {/* Buttons */}
          <div className="flex items-center space-x-3 lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:text-orange-700 font-medium rounded-lg text-sm px-4 py-2 transition duration-300"
            >
              Log in
            </Link>

            <Link
              to="#"
              className="text-white bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 focus:ring-4 focus:ring-orange-300 font-semibold rounded-full text-sm px-5 py-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md transition-all duration-200 ${
                      isActive
                        ? "text-orange-700 bg-orange-100"
                        : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md transition-all duration-200 ${
                      isActive
                        ? "text-orange-700 bg-orange-100"
                        : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md transition-all duration-200 ${
                      isActive
                        ? "text-orange-700 bg-orange-100"
                        : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                    }`
                  }
                >
                  Our Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md transition-all duration-200 ${
                      isActive
                        ? "text-orange-700 bg-orange-100"
                        : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
