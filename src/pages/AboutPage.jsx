import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-hubspot-dark mb-8">About HubSpot</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          HubSpot is a leading CRM platform that provides software and support to help companies grow better.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-hubspot-dark mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We're on a mission to help millions of organizations grow better. We believe that businesses can grow with a conscience, and achieve sustainable growth that makes a positive impact on the world.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-hubspot-dark mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Solve for the customer</li>
              <li>Work with humility</li>
              <li>Embrace transparency</li>
              <li>Focus on impact</li>
              <li>Be direct</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 