import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaMedium, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Popular Features */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Popular Features
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  All Products and Features
                </Link>
              </li>
              <li>
                <Link to="/features/meeting-scheduler" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Free Meeting Scheduler App
                </Link>
              </li>
              <li>
                <Link to="/features/breeze-ai" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Breeze AI Tools
                </Link>
              </li>
              <li>
                <Link to="/features/email-tracking" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Email Tracking Software
                </Link>
              </li>
              <li>
                <Link to="/features/ai-content-writer" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  AI Content Writer
                </Link>
              </li>
              <li>
                <Link to="/features/website-builder" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Free Website Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Free Tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tools" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  See All Free Business Tools
                </Link>
              </li>
              <li>
                <Link to="/tools/website-grader" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Website Grader
                </Link>
              </li>
              <li>
                <Link to="/tools/make-my-persona" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Make My Persona
                </Link>
              </li>
              <li>
                <Link to="/tools/email-signature" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Email Signature Generator
                </Link>
              </li>
              <li>
                <Link to="/tools/brand-kit" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Brand Kit Generator
                </Link>
              </li>
              <li>
                <Link to="/tools/invoice-template" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Invoice Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/management" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Management Team
                </Link>
              </li>
              <li>
                <Link to="/board" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customers */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Customers
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/customer-support" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="/user-groups" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Join a Local User Group
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Partners
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/partners" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  All Partner Programs
                </Link>
              </li>
              <li>
                <Link to="/partners/solutions" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Solutions Partner Program
                </Link>
              </li>
              <li>
                <Link to="/partners/app" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  App Partner Program
                </Link>
              </li>
              <li>
                <Link to="/partners/startups" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  HubSpot for Startups
                </Link>
              </li>
              <li>
                <Link to="/partners/affiliate" className="text-sm text-gray-500 hover:text-hubspot-orange">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Mobile Apps */}
        <div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between">
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/hubspot" className="text-gray-400 hover:text-hubspot-orange">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/hubspot" className="text-gray-400 hover:text-hubspot-orange">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/user/HubSpot" className="text-gray-400 hover:text-hubspot-orange">
              <FaYoutube className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/HubSpot" className="text-gray-400 hover:text-hubspot-orange">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/hubspot" className="text-gray-400 hover:text-hubspot-orange">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://medium.com/@HubSpot" className="text-gray-400 hover:text-hubspot-orange">
              <FaMedium className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/@hubspot" className="text-gray-400 hover:text-hubspot-orange">
              <FaTiktok className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="flex space-x-4">
              <a 
                href="https://apps.apple.com/app/hubspot/id1107711722" 
                className="flex items-center border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <svg aria-hidden="true" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>App Store</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.hubspot.android" 
                className="flex items-center border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <svg aria-hidden="true" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link to="/legal" className="text-xs text-gray-500 hover:text-hubspot-orange">
              Legal Stuff
            </Link>
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-hubspot-orange">
              Privacy Policy
            </Link>
            <Link to="/security" className="text-xs text-gray-500 hover:text-hubspot-orange">
              Security
            </Link>
            <Link to="/accessibility" className="text-xs text-gray-500 hover:text-hubspot-orange">
              Website Accessibility
            </Link>
          </div>
          <p className="mt-8 text-xs text-gray-500 md:mt-0 md:order-1">
            Copyright © {new Date().getFullYear()} HubSpot, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 