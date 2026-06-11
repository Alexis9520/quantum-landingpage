import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import GrainOverlay from "./components/layout/GrainOverlay";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/layout/PageTransition";
import CookieConsent from "./components/CookieConsent";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useAnalytics } from "./hooks/useAnalytics";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const FAQPage = React.lazy(() => import("./pages/FAQPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-q-bg">
      <div className="w-10 h-10 border-4 border-q-purple/20 border-t-q-purple rounded-full animate-spin" />
    </div>
  );
}

function AppContent() {
  useSmoothScroll();
  useAnalytics();
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-q-bg text-white">
      <GrainOverlay />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <HomePage />
                </Suspense>
              </PageTransition>
            }
          />
          <Route
            path="/products"
            element={
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <ProductsPage />
                </Suspense>
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <AboutPage />
                </Suspense>
              </PageTransition>
            }
          />
          <Route
            path="/faq"
            element={
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <FAQPage />
                </Suspense>
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <ContactPage />
                </Suspense>
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <NotFoundPage />
                </Suspense>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={"6Lf42BgtAAAAAOCZNwbJwR3dsb9jxL3dJF5dGvOm"}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      <AppContent />
    </GoogleReCaptchaProvider>
  );
}
