# HubSpot Website Clone

This project is a clone of the HubSpot website built with React.js and Tailwind CSS.

## Features

- Responsive design that closely mimics the HubSpot website
- Interactive navigation with dropdowns
- Multiple pages including Home, Demo, Get Started, and Pricing
- Built with modern web technologies

## Tech Stack

- React.js (v19)
- React Router for navigation
- Tailwind CSS for styling
- Vite as the build tool
- React Icons for icon components

## Pages Included

- Home Page: Complete with hero section, features, solutions, stats, integrations, and CTA sections
- Get a Demo: A demo request form
- Get Started: A sign-up form for creating a free account
- Pricing: Displays pricing plans with features
- 404 Page: Custom not found page

## Components Structure

- `/src/components/layout`: Contains layout components
  - `Navbar.jsx`: Navigation bar with dropdowns
  - `Footer.jsx`: Site footer with links and social media
  - `Layout.jsx`: Main layout wrapper
- `/src/components/ui`: UI components
  - `Hero.jsx`: Hero section for the homepage
  - `LogoCloud.jsx`: Customer logos display
  - `FeatureSection.jsx`: Product features showcase
- `/src/pages`: Page components
  - `HomePage.jsx`: Main landing page

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/your-username/hubspot-clone.git
cd hubspot-clone
```

2. Install dependencies:
```
npm install
# or
yarn
```

3. Start the development server:
```
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

- **Colors**: Update the custom colors in `tailwind.config.js`
- **Images**: Replace placeholder images in components with your own
- **Content**: Modify text content in the components to fit your needs
- **Add Pages**: Create new pages in the `/src/pages` directory and add routes in `App.jsx`

## Build for Production

To build the project for production, run:

```
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```
npm run preview
# or
yarn preview
```

## License

This project is for educational purposes only. HubSpot is a registered trademark of HubSpot, Inc.
