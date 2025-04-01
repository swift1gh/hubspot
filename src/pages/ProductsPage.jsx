import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hubspot-dark sm:text-5xl md:text-6xl">
              HubSpot's Complete Product Suite
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to attract visitors, convert leads, and close customers.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Marketing Hub */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Marketing Hub</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Marketing software to help you attract the right audience, convert more visitors into customers, and run complete inbound marketing campaigns at scale.
            </p>
            <Link to="/products/marketing" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Marketing Hub
            </Link>
          </div>

          {/* Sales Hub */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Sales Hub</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.
            </p>
            <Link to="/products/sales" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Sales Hub
            </Link>
          </div>

          {/* Service Hub */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Service Hub</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.
            </p>
            <Link to="/products/service" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Service Hub
            </Link>
          </div>

          {/* CMS Hub */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">CMS Hub</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Content management software that's flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.
            </p>
            <Link to="/products/cms" className="text-hubspot-orange font-medium hover:underline">
              Learn more about CMS Hub
            </Link>
          </div>

          {/* Operations Hub */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Operations Hub</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Operations software that enables your teams to clean, curate, and connect your customer data, while your business gets better together.
            </p>
            <Link to="/products/operations" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Operations Hub
            </Link>
          </div>

          {/* Commerce Hub */}
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-hubspot-dark">Commerce Hub</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Commerce software that helps you create a personalized shopping experience for every customer, everywhere they are.
            </p>
            <Link to="/products/commerce" className="text-hubspot-orange font-medium hover:underline">
              Learn more about Commerce Hub
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hubspot-dark sm:text-4xl">
              Powerful features to help you grow
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to attract visitors, convert leads, and close customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">Marketing Automation</h3>
              <p className="text-gray-600">
                Automate your marketing tasks and workflows to save time and deliver a better experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Get insights into your marketing performance and make data-driven decisions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">CRM & Sales Tools</h3>
              <p className="text-gray-600">
                Manage your sales pipeline and close more deals with powerful CRM tools.
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

export default ProductsPage; 