import React from 'react';

const AcademyPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-hubspot-dark mb-8">HubSpot Academy</h1>
      <p className="text-lg text-gray-600 mb-12">
        Free online training courses to help you grow better.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Marketing</h2>
          <p className="text-gray-600 mb-4">Learn inbound marketing, content marketing, and more.</p>
          <a href="/academy/marketing" className="text-hubspot-orange hover:underline">View courses →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Sales</h2>
          <p className="text-gray-600 mb-4">Master sales techniques and strategies.</p>
          <a href="/academy/sales" className="text-hubspot-orange hover:underline">View courses →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Service</h2>
          <p className="text-gray-600 mb-4">Learn customer service best practices.</p>
          <a href="/academy/service" className="text-hubspot-orange hover:underline">View courses →</a>
        </div>
      </div>
    </div>
  );
};

export default AcademyPage; 