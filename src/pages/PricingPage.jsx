import React from 'react';

const PricingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-hubspot-dark text-center mb-12">HubSpot Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Starter</h2>
          <p className="text-gray-600 mb-4">Start growing your business with automation</p>
          <p className="text-3xl font-bold text-hubspot-dark mb-6">$45<span className="text-lg font-normal text-gray-500">/month</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Marketing, sales, and customer service tools
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              1,000 Marketing contacts included
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Email marketing and forms
            </li>
          </ul>
          <button className="w-full bg-hubspot-orange text-white py-2 px-4 rounded-md hover:bg-opacity-90">
            Buy now
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Professional</h2>
          <p className="text-gray-600 mb-4">Automate and optimize your marketing efforts</p>
          <p className="text-3xl font-bold text-hubspot-dark mb-6">$800<span className="text-lg font-normal text-gray-500">/month</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              All Starter features
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              2,000 Marketing contacts included
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Marketing automation & ABM tools
            </li>
          </ul>
          <button className="w-full bg-hubspot-orange text-white py-2 px-4 rounded-md hover:bg-opacity-90">
            Buy now
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Enterprise</h2>
          <p className="text-gray-600 mb-4">Advanced features for sophisticated teams</p>
          <p className="text-3xl font-bold text-hubspot-dark mb-6">$3,600<span className="text-lg font-normal text-gray-500">/month</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              All Professional features
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              10,000 Marketing contacts included
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-hubspot-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Advanced reporting & custom permissions
            </li>
          </ul>
          <button className="w-full bg-hubspot-orange text-white py-2 px-4 rounded-md hover:bg-opacity-90">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 