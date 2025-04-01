import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaSearch, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Language Selector */}
            <div className="relative inline-block text-sm text-gray-600 mr-6">
              <button className="flex items-center">
                <FaGlobe className="mr-1" />
                <span>English</span>
                <FaCaretDown className="ml-1" />
              </button>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center mr-6">
              <span className="text-sm text-gray-600 mr-2">High Contrast</span>
              <div className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1">
                <div className="w-4 h-4 bg-white rounded-full shadow-md transform"></div>
              </div>
            </div>

            {/* Customer Support */}
            <div className="mr-6">
              <Link to="/customer-support" className="text-sm text-gray-600 flex items-center">
                <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 10h-4v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4v4c0 1.1.9 2 2 2s2-.9 2-2v-4h4c1.1 0 2-.9 2-2s-.9-2-2-2z"></path>
                </svg>
                <span>Customer Support</span>
              </Link>
            </div>

            {/* Contact Sales */}
            <div>
              <Link to="/contact-sales" className="text-sm text-gray-600 flex items-center">
                <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10 8h-8v10h8V11m-10 4H3v6h8v-6z"></path>
                </svg>
                <span>Contact Sales</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {/* Search Icon */}
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none">
              <FaSearch />
            </button>

            {/* Login Button */}
            <Link to="/login" className="ml-4 text-sm text-gray-700 hover:text-hubspot-orange">
              Log in
            </Link>

            {/* About Dropdown */}
            <div className="relative ml-4">
              <button
                className="text-sm text-gray-700 hover:text-hubspot-orange flex items-center"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                About
                <FaCaretDown className="ml-1" />
              </button>
              {isAboutOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Careers
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Contact Us
                  </Link>
                  <Link to="/investors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Investor Relations
                  </Link>
                  <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Management Team
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="text-hubspot-dark font-bold text-2xl">
                  Hub<span className="text-hubspot-orange">Spot</span>
                </div>
              </Link>

              {/* Main Navigation */}
              <div className="hidden md:ml-6 md:flex md:space-x-6">
                {/* Products Dropdown */}
                <div className="relative">
                  <button
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:text-hubspot-orange hover:border-hubspot-orange"
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                  >
                    Products
                    <FaCaretDown className="ml-1" />
                  </button>
                  {isProductsOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-2">
                        <Link to="/products/marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Marketing Hub
                        </Link>
                        <Link to="/products/sales" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sales Hub
                        </Link>
                        <Link to="/products/service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Service Hub
                        </Link>
                        <Link to="/products/content" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Content Hub
                        </Link>
                        <Link to="/products/operations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Operations Hub
                        </Link>
                        <Link to="/products/commerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Commerce Hub
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div className="relative">
                  <button
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:text-hubspot-orange hover:border-hubspot-orange"
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  >
                    Solutions
                    <FaCaretDown className="ml-1" />
                  </button>
                  {isSolutionsOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-2">
                        <Link to="/solutions/marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Marketing
                        </Link>
                        <Link to="/solutions/sales" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sales
                        </Link>
                        <Link to="/solutions/customer-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Customer Service
                        </Link>
                        <Link to="/solutions/content" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Content
                        </Link>
                        <Link to="/solutions/small-business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Startups & Small Businesses
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:text-hubspot-orange hover:border-hubspot-orange"
                >
                  Pricing
                </Link>

                {/* Resources Dropdown */}
                <div className="relative">
                  <button
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:text-hubspot-orange hover:border-hubspot-orange"
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  >
                    Resources
                    <FaCaretDown className="ml-1" />
                  </button>
                  {isResourcesOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-2">
                        <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Blog
                        </Link>
                        <Link to="/academy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Academy
                        </Link>
                        <Link to="/resources/ebooks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Ebooks, Guides & More
                        </Link>
                        <Link to="/resources/free-courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Free Courses & Certifications
                        </Link>
                        <Link to="/resources/inbound" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          What Is Inbound Marketing?
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              {/* CTA Buttons */}
              <Link 
                to="/demo"
                className="inline-flex items-center px-4 py-2 mr-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-hubspot-orange hover:bg-opacity-90"
              >
                Get a demo
              </Link>
              <Link 
                to="/get-started"
                className="inline-flex items-center px-4 py-2 border border-hubspot-orange text-sm font-medium rounded-md text-hubspot-orange bg-white hover:bg-gray-50"
              >
                Get started free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 