import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-hubspot-dark sm:text-4xl">
            What is HubSpot?
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            HubSpot is an AI-powered customer platform with all the software, integrations, and resources you need to connect your marketing, sales, and customer service. HubSpot's connected platform enables you to grow your business faster by focusing on what matters most: your customers.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hubspot-orange hover:bg-opacity-90"
              >
                Get a demo
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center px-5 py-3 border border-hubspot-orange text-base font-medium rounded-md text-hubspot-orange bg-white hover:bg-gray-50"
              >
                Get started free
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-hubspot-dark mb-4">
              Your whole front office. One customer platform.
            </h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-500">
              HubSpot brings your marketing, sales, and service teams together on the same AI-powered customer platform. It's easy to use, provides value fast, and gives all teams a unified view of the customer at every stage in their journey. Each product in the platform is powerful on its own, but the real magic happens when you use them together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Marketing Hub */}
            <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-orange-100 rounded-md flex items-center justify-center">
                  <svg className="h-6 w-6 text-hubspot-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h4 className="ml-4 text-xl font-medium text-hubspot-dark">Marketing Hub®</h4>
              </div>
              <p className="text-gray-500 mb-6">
                AI-powered marketing software that helps you generate leads and automate marketing.
              </p>
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-500 mb-3">Popular Features</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Breeze social media agent
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Marketing automation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Analytics
                  </li>
                </ul>
              </div>
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
                <h4 className="ml-4 text-xl font-medium text-hubspot-dark">Sales Hub®</h4>
              </div>
              <p className="text-gray-500 mb-6">
                Easy-to-adopt sales software that leverages AI to build pipelines and close deals.
              </p>
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-500 mb-3">Popular Features</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sales workspace
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Deal management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Breeze prospecting agent
                  </li>
                </ul>
              </div>
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
                <h4 className="ml-4 text-xl font-medium text-hubspot-dark">Service Hub®</h4>
              </div>
              <p className="text-gray-500 mb-6">
                Customer service software powered by AI to scale support and drive retention.
              </p>
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-500 mb-3">Popular Features</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Omni-channel help desk
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Breeze customer agent
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Customer success workspace
                  </li>
                </ul>
              </div>
              <Link to="/products/service" className="text-hubspot-orange font-medium hover:underline">
                Learn more about Service Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection; 