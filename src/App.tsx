import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import OptionsSection from './components/OptionsSection';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import AllProjectsPage from './pages/AllProjectsPage';
import './index.css';

// ScrollToHashElement scrolls to the element with the id that matches the hash in the URL
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL
    if (location.hash) {
      // Get the element with the id that matches the hash (without the #)
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If there's no hash, scroll to the top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OptionsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-projects" element={<AllProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;