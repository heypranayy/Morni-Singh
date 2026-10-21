import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ScrollProgress } from "./components/common/ScrollProgress";
import { StickyBookingCTA } from "./components/ui/StickyBookingCTA";
import { PageLoader } from "./components/common/PageLoader";
import { HomePage } from "./pages/HomePage";

// Code-split secondary routes for sub-second homepage initial bundle load
const StayPage = lazy(() => import("./pages/StayPage").then(m => ({ default: m.StayPage })));
const VillaDetailPage = lazy(() => import("./pages/VillaDetailPage").then(m => ({ default: m.VillaDetailPage })));
const DestinationPage = lazy(() => import("./pages/DestinationPage").then(m => ({ default: m.DestinationPage })));
const GalleryPage = lazy(() => import("./pages/GalleryPage").then(m => ({ default: m.GalleryPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const BookPage = lazy(() => import("./pages/BookPage").then(m => ({ default: m.BookPage })));

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-forest-950 flex flex-col font-ui selection:bg-gold-500 selection:text-white">
      <PageLoader />
      <ScrollProgress />
      <ScrollToTop />
      
      {/* Global Brand Navigation Bar */}
      <Navbar />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5]" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stay" element={<StayPage />} />
            <Route path="/stay/villa" element={<VillaDetailPage />} />
            <Route path="/experiences" element={<DestinationPage />} />
            <Route path="/morni-hills" element={<DestinationPage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Sticky Booking Conversion Dock (Desktop & Mobile) */}
      <StickyBookingCTA />

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
};

export default App;
