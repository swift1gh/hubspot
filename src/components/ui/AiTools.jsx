import React from "react";

const AiTools = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-hubspot-dark sm:text-4xl mb-8">
            Meet Breeze — The complete AI solution for your business.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-500 lg:mx-auto">
            Use Breeze Copilot to assist with tasks, Breeze Agents to automate
            your work, Breeze Intelligence to enrich your data, and a growing
            list of Breeze features to help you get work done faster.
          </p>
          <div className="mt-8">
            <Link
              to="/breeze-ai"
              className="inline-flex items-center text-hubspot-orange hover:text-hubspot-dark font-medium">
              Learn more about Breeze, HubSpot's new AI tools
              <svg
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTools;
