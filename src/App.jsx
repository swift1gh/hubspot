import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import ResourcesPage from './pages/ResourcesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AcademyPage from './pages/AcademyPage';
import MarketplacePage from './pages/MarketplacePage';
import DemoPage from './pages/DemoPage';
import GetStartedPage from './pages/GetStartedPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/*" element={<ProductsPage />} />
          <Route path="/solutions/*" element={<SolutionsPage />} />
          <Route path="/resources/*" element={<ResourcesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about/*" element={<AboutPage />} />
          <Route path="/contact/*" element={<ContactPage />} />
          <Route path="/blog/*" element={<BlogPage />} />
          <Route path="/academy/*" element={<AcademyPage />} />
          <Route path="/marketplace/*" element={<MarketplacePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
