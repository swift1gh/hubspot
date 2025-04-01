import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-32">
      <h1 className="text-6xl font-bold text-hubspot-dark mb-8">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hubspot-orange hover:bg-opacity-90">
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage; 