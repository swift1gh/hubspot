import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-blue-800 overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-hubspot-dark bg-white rounded-full mb-4">
                HUBSPOT CUSTOMER PLATFORM
              </div>
              <h1 className="text-4xl tracking-tight font-bold text-hubspot-dark sm:text-5xl md:text-6xl">
                With HubSpot, you{" "}
                <span className="italic text-gray-600">can</span> have it all
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Unify your growing business on one AI-powered platform that's
                easy to use, delivers ROI in no time, and transforms customer
                happiness into your competitive edge.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hubspot-orange hover:bg-opacity-90 md:py-4 md:text-lg md:px-10">
                    Get a demo
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/get-started"
                    className="w-full flex items-center justify-center px-8 py-3 border border-hubspot-orange text-base font-medium rounded-md text-hubspot-orange bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Get started free
                  </Link>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Get a demo of our premium software, or get started with free
                tools.
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <img
                src="https://www.hubspot.com/hs-fs/hubfs/hp-hero-en@2x%20(1).png?width=1216&height=840&name=hp-hero-en@2x%20(1).png"
                alt="HubSpot Dashboard"
                className="rounded-lg"
              />
              {/* Additional floating elements can be added here */}
              {/* <div className="absolute top-1/4 right-10 bg-white p-3 rounded-lg shadow-md">
                <div className="text-xs font-semibold text-gray-600">
                  Annual revenue
                </div>
                <div className="h-2 w-24 bg-orange-100 rounded mt-1"></div>
              </div>
              <div className="absolute top-1/4 left-10 bg-white p-3 rounded-lg shadow-md">
                <div className="text-xs font-semibold text-gray-600">
                  Location
                </div>
                <div className="h-2 w-20 bg-orange-100 rounded mt-1"></div>
              </div>
              <div className="absolute top-1/3 right-20 bg-white p-3 rounded-lg shadow-md">
                <div className="text-xs font-semibold text-gray-600">
                  Employee range
                </div>
                <div className="h-2 w-16 bg-orange-100 rounded mt-1"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
