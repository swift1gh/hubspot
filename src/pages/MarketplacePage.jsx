import React from 'react';

const MarketplacePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-hubspot-dark mb-8">HubSpot Marketplace</h1>
      <p className="text-lg text-gray-600 mb-12">
        Discover apps and integrations to power your HubSpot experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Marketing Apps</h2>
          <p className="text-gray-600 mb-4">Enhance your marketing capabilities with powerful integrations.</p>
          <a href="/marketplace/marketing" className="text-hubspot-orange hover:underline">Browse apps →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Sales Apps</h2>
          <p className="text-gray-600 mb-4">Boost your sales productivity with integrated tools.</p>
          <a href="/marketplace/sales" className="text-hubspot-orange hover:underline">Browse apps →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-hubspot-dark mb-4">Service Apps</h2>
          <p className="text-gray-600 mb-4">Improve customer service with integrated solutions.</p>
          <a href="/marketplace/service" className="text-hubspot-orange hover:underline">Browse apps →</a>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage; 