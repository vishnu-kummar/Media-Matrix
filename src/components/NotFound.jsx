// src/components/NotFound.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20 min-h-[50vh]">
      {/* ⭐️ CRITICAL 404 SEO TAGS: Prevents indexing of bad URLs ⭐️ */}
      <Helmet>
        <title>Page Not Found (404) | Media Matrixx</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <h1 className="text-6xl md:text-8xl font-black text-orange-600 mb-4">404</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8">
        Oops! The page you requested could not be found.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center px-6 py-3 border-2 border-sky-300 rounded-full text-sky-800 font-bold hover:bg-sky-50 transition-all duration-300"
      >
        Go Back to the Homepage
      </Link>
    </div>
  );
}