import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-hubspot-dark mb-8">Resources</h1>
      <p className="text-lg text-gray-600 mb-8">
        Access HubSpot's library of resources to help you grow better.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Blog</h2>
          <p className="text-gray-600 mb-4">Read the latest marketing, sales, and service tips.</p>
          <a href="/blog" className="text-hubspot-orange hover:underline">Visit Blog →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Academy</h2>
          <p className="text-gray-600 mb-4">Learn from HubSpot's free online training courses.</p>
          <a href="/academy" className="text-hubspot-orange hover:underline">Visit Academy →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Marketplace</h2>
          <p className="text-gray-600 mb-4">Find apps and integrations for your HubSpot account.</p>
          <a href="/marketplace" className="text-hubspot-orange hover:underline">Visit Marketplace →</a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage; 