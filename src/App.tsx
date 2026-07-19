import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Award, MessageCircle, Phone, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Journey from './pages/Journey';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Disclaimer from './pages/Disclaimer';
import SEOLandingPage from './pages/SEOLandingPage';

import Pricing from './pages/Pricing';
import LiveUsers from './components/LiveUsers';
import KarSevaLogo from './components/KarSevaLogo';

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  const handleWhatsAppRedirect = (serviceName?: any) => {
    let text = "Hello KarSeva! I'm interested in your professional tax and business compliance services. Please guide me on how to get started.";
    if (typeof serviceName === 'string' && serviceName) {
      text = `Hello KarSeva! I want to inquire about your "${serviceName}" services. Please share the details and required documents to get started.`;
    }
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919783699635?text=${encodedText}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">
      {/* Top Banner indicating legacy */}
      <div className="bg-[#FFB400] text-[#1D3557] py-1.5 px-4 text-xs sm:text-sm font-semibold text-center mt-0">
        <span className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <Award className="w-4 h-4 hidden sm:block" /> India's Most Trusted Tax Platform | 4.9/5 from 1M+ Users 
          <LiveUsers />
        </span>
      </div>

      {/* Navigation - Uses <header> and <nav> for SEO semantics */}
      <header className="bg-[#1D3557] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link to="/" className="flex-shrink-0" onClick={handleHomeClick}>
              <KarSevaLogo size={48} showText={true} variant="light" />
            </Link>
            <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
              <a href="#" onClick={handleHomeClick} className="text-slate-300 hover:text-white font-medium transition">Home</a>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium transition">Pricing</Link>
              <button onClick={() => scrollToSection('itr-filing')} className="text-slate-300 hover:text-white font-medium transition cursor-pointer">ITR Filing</button>
              <button onClick={() => scrollToSection('gst-services')} className="text-slate-300 hover:text-white font-medium transition cursor-pointer">GST Services</button>
              <button onClick={() => scrollToSection('company-registration')} className="text-slate-300 hover:text-white font-medium transition cursor-pointer">Start your Business</button>
            </nav>
            <div className="flex items-center space-x-4">
              <button onClick={handleWhatsAppRedirect} className="bg-[#FFB400] text-[#1D3557] px-6 py-2 rounded-md font-bold hover:bg-[#e6a200] transition shadow-sm hidden md:block">
                Get Started
              </button>
              <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                 {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#162a45] border-t border-[rgba(255,255,255,0.1)]">
            <nav className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
              <a href="#" onClick={handleHomeClick} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Home</a>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Pricing</Link>
              <button onClick={() => scrollToSection('itr-filing')} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">ITR Filing</button>
              <button onClick={() => scrollToSection('gst-services')} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">GST Services</button>
              <button onClick={() => scrollToSection('company-registration')} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Start your Business</button>
              <button onClick={handleWhatsAppRedirect} className="w-full text-center bg-[#FFB400] text-[#1D3557] px-3 py-2 rounded-md font-bold hover:bg-[#e6a200] mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      {children}

      {/* Footer Area for SEO links */}
      <footer className="bg-[#1D3557] py-12 border-t mt-auto border-[rgba(255,255,255,0.1)] text-[#EAECEF] text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white font-extrabold mb-5 uppercase text-sm tracking-wider border-b border-white/10 pb-2">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-slate-300 hover:text-[#FFB400] text-sm transition">About Us</Link></li>
              <li><Link to="/pricing" className="text-slate-300 hover:text-[#FFB400] text-sm transition">Pricing & Plans</Link></li>
              <li><Link to="/our-journey" className="text-slate-300 hover:text-[#FFB400] text-sm transition">Our 10-Year Journey</Link></li>
              <li><Link to="/terms-conditions" className="text-slate-300 hover:text-[#FFB400] text-sm transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-300 hover:text-[#FFB400] text-sm transition">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="text-slate-300 hover:text-[#FFB400] text-sm transition">Refund Policy</Link></li>
              <li><Link to="/disclaimer" className="text-slate-300 hover:text-[#FFB400] text-sm transition">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-extrabold mb-5 uppercase text-sm tracking-wider border-b border-white/10 pb-2">Services</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('itr-filing')} className="text-slate-300 hover:text-[#FFB400] text-sm transition cursor-pointer text-left w-full">File ITR Online</button></li>
              <li><button onClick={() => scrollToSection('gst-services')} className="text-slate-300 hover:text-[#FFB400] text-sm transition cursor-pointer text-left w-full">GST Registration & Filing</button></li>
              <li><button onClick={() => scrollToSection('company-registration')} className="text-slate-300 hover:text-[#FFB400] text-sm transition cursor-pointer text-left w-full">Private Limited Company</button></li>
              <li><button onClick={() => scrollToSection('company-registration')} className="text-slate-300 hover:text-[#FFB400] text-sm transition cursor-pointer text-left w-full">LLP Registration</button></li>
              <li><button onClick={() => scrollToSection('company-registration')} className="text-slate-300 hover:text-[#FFB400] text-sm transition cursor-pointer text-left w-full">Trademark Search</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-extrabold mb-5 uppercase text-sm tracking-wider border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li><a href="tel:9783699635" className="text-slate-300 hover:text-[#FFB400] text-sm font-medium transition block">+91 9783699635</a></li>
              <li><a href="tel:9521555557" className="text-slate-300 hover:text-[#FFB400] text-sm font-medium transition block">+91 9521555557</a></li>
              <li><a href="mailto:Karsevaa2026@gmail.com" className="text-slate-300 hover:text-[#FFB400] text-sm transition block">Karsevaa2026@gmail.com</a></li>
              <li className="text-slate-400 text-xs">Mon - Sat, 10 AM - 7 PM</li>
              <li className="text-slate-400 text-xs border-t border-white/10 pt-3 mt-3 leading-relaxed">
                F51 Alankar Plaza, Vidyadhar Nagar, Jaipur, Rajasthan 302039
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start space-y-4">
            <div className="flex items-center gap-2">
              <KarSevaLogo size={84} showText={true} variant="light" />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              India's most trusted online tax filing and CA services platform. We make taxes simple, accurate, and secure for millions of Indians.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8 border-t border-slate-700/50 text-center text-xs text-slate-400">
          © 2026 KarSeva.in. All rights reserved only
        </div>
      </footer>

      {/* Floating WhatsApp and Call Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="tel:9783699635"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <button
          onClick={handleWhatsAppRedirect}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-journey" element={<Journey />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/refund-policy" element={<Refund />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/:slug" element={<SEOLandingPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
