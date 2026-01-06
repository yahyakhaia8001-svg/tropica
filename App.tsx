import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import TurkeyLP from './pages/TurkeyLP';
import DubaiLP from './pages/DubaiLP';
import OmraLP from './pages/OmraLP';
import WhatsAppButton from './components/WhatsAppButton';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-800 antialiased selection:bg-tropicam-orange selection:text-white overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* SEO Landing Pages */}
            <Route path="/voyage-turquie" element={<TurkeyLP />} />
            <Route path="/voyage-dubai" element={<DubaiLP />} />
            <Route path="/omra-2025" element={<OmraLP />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;