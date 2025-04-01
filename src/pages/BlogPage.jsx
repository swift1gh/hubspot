import React from 'react';

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-hubspot-dark mb-8">HubSpot Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Marketing, sales, agency, and customer success content.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-hubspot-dark mb-2">Marketing</h2>
            <p className="text-gray-600 mb-4">Learn about inbound marketing, content marketing, and more.</p>
            <a href="/blog/marketing" className="text-hubspot-orange hover:underline">Read articles →</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-hubspot-dark mb-2">Sales</h2>
            <p className="text-gray-600 mb-4">Tips and strategies for closing more deals.</p>
            <a href="/blog/sales" className="text-hubspot-orange hover:underline">Read articles →</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-hubspot-dark mb-2">Service</h2>
            <p className="text-gray-600 mb-4">Best practices for customer service and support.</p>
            <a href="/blog/service" className="text-hubspot-orange hover:underline">Read articles →</a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPage; 