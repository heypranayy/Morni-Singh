import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ScrollProgress } from "./components/common/ScrollProgress";
import { StickyBookingCTA } from "./components/ui/StickyBookingCTA";
import { PageLoader } from "./components/common/PageLoader";
import { HomePage } from "./pages/HomePage";
import { StayPage } from "./pages/StayPage";
import { VillaDetailPage } from "./pages/VillaDetailPage";
import { DestinationPage } from "./pages/DestinationPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BookPage } from "./pages/BookPage";

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
      </main>

      {/* Sticky Booking Conversion Dock (Desktop & Mobile) */}
      <StickyBookingCTA />

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
};

export default App;
