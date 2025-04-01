const botResponses = {
  greeting: {
    message: "Hi! I'm HubBot. How can I help you today?",
    options: [
      "Learn about HubSpot products",
      "Pricing information",
      "Talk to sales",
      "Get support",
    ],
  },
  products: {
    message: "HubSpot offers various products including:",
    details: [
      "Marketing Hub - Attract and convert visitors",
      "Sales Hub - Close more deals",
      "Service Hub - Delight your customers",
      "CMS Hub - Manage your website",
      "Operations Hub - Connect your apps and clean your data",
    ],
  },
  pricing: {
    message: "HubSpot offers flexible pricing options:",
    options: [
      "Free Tools",
      "Starter (Starting at $50/month)",
      "Professional (Starting at $890/month)",
      "Enterprise (Starting at $3,200/month)",
    ],
  },
};

function getResponse(userInput) {
  const input = userInput.toLowerCase();
  if (input.includes("price") || input.includes("cost")) {
    return botResponses.pricing;
  }
  if (input.includes("product") || input.includes("service")) {
    return botResponses.products;
  }
  // Default response
  return botResponses.greeting;
}

export { getResponse, botResponses };
