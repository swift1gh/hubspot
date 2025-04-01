import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const SolutionsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hubspot-dark sm:text-5xl md:text-6xl">
              Solutions for Every Business
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a startup, small business, or enterprise, HubSpot has the tools and resources you need to grow.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Marketing Solutions */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Marketing Solutions</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Attract visitors, convert leads, and close customers with powerful marketing tools.
            </p>
            <Link to="/solutions/marketing" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Marketing Solutions
            </Link>
          </div>

          {/* Sales Solutions */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Sales Solutions</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Close more deals and grow your revenue with sales tools and automation.
            </p>
            <Link to="/solutions/sales" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Sales Solutions
            </Link>
          </div>

          {/* Service Solutions */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Service Solutions</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Connect with customers and provide exceptional service with support tools.
            </p>
            <Link to="/solutions/service" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Service Solutions
            </Link>
          </div>

          {/* Content Solutions */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Content Solutions</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Create and manage content that attracts and engages your audience.
            </p>
            <Link to="/solutions/content" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Content Solutions
            </Link>
          </div>

          {/* Small Business Solutions */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Small Business Solutions</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Tools and resources designed specifically for small businesses.
            </p>
            <Link to="/solutions/small-business" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Small Business Solutions
            </Link>
          </div>

          {/* Enterprise Solutions */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Enterprise Solutions</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Advanced features and integrations for large organizations.
            </p>
            <Link to="/solutions/enterprise" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Enterprise Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hubspot-dark sm:text-4xl">
              Why Choose HubSpot?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We provide the tools and resources you need to grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">All-in-One Platform</h3>
              <p className="text-gray-600">
                Everything you need to attract visitors, convert leads, and close customers in one place.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive interface and powerful features that help you get started quickly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">Scalable</h3>
              <p className="text-gray-600">
                Grow with confidence knowing your platform can scale with your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hubspot-dark sm:text-4xl mb-8">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hubspot-orange hover:bg-opacity-90"
            >
              Get a demo
            </Link>
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-8 py-3 border border-hubspot-orange text-base font-medium rounded-md text-hubspot-orange bg-white hover:bg-gray-50"
            >
              Get started free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage; 