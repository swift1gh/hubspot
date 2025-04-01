import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-hubspot-dark mb-8">Contact HubSpot</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-hubspot-dark mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-hubspot-dark">Sales</h3>
              <p className="text-gray-600">1-888-HUBSPOT</p>
              <p className="text-gray-600">sales@hubspot.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-hubspot-dark">Support</h3>
              <p className="text-gray-600">1-888-HUBSPOT</p>
              <p className="text-gray-600">support@hubspot.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-hubspot-dark">Office</h3>
              <p className="text-gray-600">25 First Street, 2nd Floor</p>
              <p className="text-gray-600">Cambridge, MA 02141</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <select id="subject" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option>Sales Inquiry</option>
                <option>Support Request</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
            <button type="submit" className="w-full bg-hubspot-orange text-white py-2 px-4 rounded-md hover:bg-opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 