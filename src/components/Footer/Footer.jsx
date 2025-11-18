import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-3">
               <img
              src="/images/logo.jpg"
              alt="MediaMatrix Logo"
              className="h-12 object-contain"
            />
              <div>
                <div className="text-lg font-bold text-sky-800">MediaMatrix</div>
                <div className="text-sm text-gray-500">Barter Media Solutions</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Turn excess inventory into advertising reach across India.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase mb-3">Services</h4>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/services" className="hover:underline">Media Barter</Link></li>
              <li><Link to="/services" className="hover:underline">Media Buying</Link></li>
              <li><Link to="/services" className="hover:underline">Sampling & Gifting</Link></li>
              <li><Link to="/contact" className="hover:underline">Request Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase mb-3">Contact</h4>
            <div className="text-gray-600 text-sm space-y-1">
              {/* <div>Phone: <span className="font-medium text-gray-800">+91-9070106050</span></div>
              <div>Alt: <span className="font-medium text-gray-800">+91-9070601050</span></div> */}
              <div>Email: <a href="mailto:Mediamatixx18@gmail.com" className="font-medium text-gray-800 hover:underline">info@mediamatrixx.in</a></div>
              <div>Office: Delhi NCR</div>
            </div>

            {/* <div className="mt-4 flex gap-3">
              <a href="#" className="text-gray-500 hover:text-sky-700">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-sky-700">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-sky-700">Facebook</a>
            </div> */}
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <div>© {new Date().getFullYear()} Media Matrix — All rights reserved</div>
          <div className="mt-3 md:mt-0">Designed with professionalism • Delhi NCR</div>
        </div>
      </div>
    </footer>
  );
}
