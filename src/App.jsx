import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const RedirectComponent = ({ to, isFullUrl = false }) => {
  React.useEffect(() => {
    window.location.href = isFullUrl ? to : `https://www.hubspot.com${to}`;
  }, [to, isFullUrl]);
  return (
    <div className="mb-60 flex justify-center text-center">Redirecting...</div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products/*"
            element={<RedirectComponent to="/products" />}
          />
          <Route
            path="/solutions/*"
            element={<RedirectComponent to="/solutions" />}
          />
          <Route
            path="/resources/*"
            element={<RedirectComponent to="/resource-center" />}
          />
          <Route
            path="/pricing/*"
            element={<RedirectComponent to="/pricing/marketing" />}
          />
          <Route
            path="/about/*"
            element={<RedirectComponent to="/about-us" />}
          />
          <Route
            path="/contact/*"
            element={<RedirectComponent to="/contact-sales" />}
          />
          <Route path="/blog/*" element={<RedirectComponent to="/blog" />} />
          <Route
            path="/academy/*"
            element={<RedirectComponent to="/academy" />}
          />
          <Route
            path="/marketplace/*"
            element={
              <RedirectComponent to="/ecosystem/solutions-marketplace" />
            }
          />
          <Route
            path="/demo"
            element={<RedirectComponent to="/products/demo" />}
          />
          <Route
            path="/get-started"
            element={
              <RedirectComponent
                to="https://app.hubspot.com/signup-hubspot/crm?hubs_signup-url=www.hubspot.com&hubs_signup-cta=homepage-hero2-cta"
                isFullUrl={true}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
