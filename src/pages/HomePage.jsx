import React from 'react';
import Hero from '../components/ui/Hero';
import LogoCloud from '../components/ui/LogoCloud';
import FeatureSection from '../components/ui/FeatureSection';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Hero />
      <LogoCloud />
      <FeatureSection />

      {/* AI Tools Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-hubspot-dark sm:text-4xl mb-8">
              Meet Breeze — The complete AI solution for your business.
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-500 lg:mx-auto">
              Use Breeze Copilot to assist with tasks, Breeze Agents to automate your work, Breeze Intelligence to enrich your data, and a growing list of Breeze features to help you get work done faster.
            </p>
            <div className="mt-8">
              <Link
                to="/breeze-ai"
                className="inline-flex items-center text-hubspot-orange hover:text-hubspot-dark font-medium"
              >
                Learn more about Breeze, HubSpot's new AI tools
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-hubspot-dark sm:text-4xl mb-4">
              Solutions for every business
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-500">
              Growing a business isn't easy, but we've got your back. Explore some of our customers' top business challenges and learn how HubSpot's integrated software and solutions can help you leave these problems in the past.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Solution 1 */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">
                Generate High-Quality Leads and Maximize Revenue
              </h3>
              <p className="text-gray-500 mb-6">
                Discover how to use AI-powered marketing tools to attract and convert more leads without multiplying your marketing spend.
              </p>
              <Link
                to="/solutions/leads"
                className="text-hubspot-orange font-medium hover:underline inline-flex items-center"
              >
                Learn more about getting high-quality leads
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Solution 2 */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">
                Accelerate Your Sales and Close More Deals Faster
              </h3>
              <p className="text-gray-500 mb-6">
                Start closing more deals faster and streamlining your sales process with HubSpot's AI-powered deal management tools.
              </p>
              <Link
                to="/solutions/sales"
                className="text-hubspot-orange font-medium hover:underline inline-flex items-center"
              >
                Learn more about closing deals
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Solution 3 */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-hubspot-dark mb-4">
                Create Content for Every Stage of the Customer Journey
              </h3>
              <p className="text-gray-500 mb-6">
                Fuel the entire customer journey with content across formats and channels with all-in-one, AI-powered content marketing software.
              </p>
              <Link
                to="/solutions/content"
                className="text-hubspot-orange font-medium hover:underline inline-flex items-center"
              >
                Learn more about creating content
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-hubspot-dark sm:text-4xl mb-4">
              HubSpot customer's results after 1 year:
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div>
                <p className="text-4xl font-bold text-hubspot-orange">114%</p>
                <p className="text-lg text-gray-600 mt-2">more web traffic</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-hubspot-orange">55%</p>
                <p className="text-lg text-gray-600 mt-2">more deals</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-hubspot-orange">43%</p>
                <p className="text-lg text-gray-600 mt-2">more tickets resolved</p>
              </div>
            </div>
            <p className="mt-12 text-xl text-gray-600">
              HubSpot customers see improvement across their customer journey. What could your ROI be?
            </p>
            <div className="mt-8">
              <Link
                to="/roi-report"
                className="inline-flex items-center text-hubspot-orange hover:text-hubspot-dark font-medium"
              >
                See ROI report of results from HubSpot customers
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {/* Integration Logos */}
              <div className="text-center flex items-center justify-center p-4 w-24 h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Gmail" />
              </div>
              <div className="text-center flex items-center justify-center p-4 w-24 h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" alt="Shopify" />
              </div>
              <div className="text-center flex items-center justify-center p-4 w-24 h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mailchimp_Logo.svg/1280px-Mailchimp_Logo.svg.png" alt="Mailchimp" />
              </div>
              <div className="text-center flex items-center justify-center p-4 w-24 h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
                <img src="https://cdn.zapier.com/zapier/images/logos/zapier-logo.svg" alt="Zapier" />
              </div>
              <div className="text-center flex items-center justify-center p-4 w-24 h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1024px-Google_Ads_logo.svg.png" alt="Google Ads" />
              </div>
              <div className="text-center flex items-center justify-center p-4 w-24 h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="Slack" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-hubspot-dark mb-4">
              1,700+ ways to connect your tools
            </h3>
            <div className="mt-4">
              <Link
                to="/marketplace"
                className="inline-flex items-center text-hubspot-orange hover:text-hubspot-dark font-medium"
              >
                View all apps
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* G2 Badges Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* G2 Badges */}
            <div className="text-center p-4">
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center h-36 w-40">
                <img src="https://www.g2.com/shared-assets/product-badges/winter-2024/leader.svg" alt="G2 Leader Winter 2024" className="h-16 mb-2" />
                <p className="text-sm text-gray-600">G2 Leader Winter 2024</p>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center h-36 w-40">
                <img src="https://www.g2.com/shared-assets/product-badges/winter-2024/easiest-setup.svg" alt="G2 Easiest Setup Winter 2024" className="h-16 mb-2" />
                <p className="text-sm text-gray-600">G2 Easiest Setup Winter 2024</p>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center h-36 w-40">
                <img src="https://www.g2.com/shared-assets/product-badges/winter-2024/best-relationship.svg" alt="G2 Best Relationship Winter 2024" className="h-16 mb-2" />
                <p className="text-sm text-gray-600">G2 Best Relationship Winter 2024</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-hubspot-dark mb-4">
              Voted #1 in 571 Reports
            </h3>
            <div className="mt-4">
              <Link
                to="/awards"
                className="inline-flex items-center text-hubspot-orange hover:text-hubspot-dark font-medium"
              >
                Learn more
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hubspot-dark sm:text-4xl mb-8">
            Grow better with HubSpot today
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hubspot-orange hover:bg-opacity-90"
            >
              Get a demo
            </Link>
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-8 py-3 border border-hubspot-orange text-base font-medium rounded-md text-hubspot-orange bg-white hover:bg-gray-50"
            >
              Get started free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage; 