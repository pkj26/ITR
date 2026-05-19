import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ShieldCheck, Award, MessageCircle, Phone, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Journey from './pages/Journey';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Disclaimer from './pages/Disclaimer';

import LiveUsers from './components/LiveUsers';

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

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/919982504000', '_blank');
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
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h.01" />
                </svg>
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-slate-900">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col ml-1 max-w-[150px] sm:max-w-none">
                <span className="text-lg font-extrabold tracking-tight text-white whitespace-nowrap">Online ITR Filing</span>
                <span className="text-[10px] text-[#FFB400] font-bold tracking-widest uppercase mt-0.5">.IN</span>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
              <a href="#" onClick={handleHomeClick} className="text-slate-300 hover:text-white font-medium transition">Home</a>
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
      <footer className="bg-[#1D3557] py-8 border-t mt-auto border-[rgba(255,255,255,0.1)] text-[#EAECEF] text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-[#FFB400] transition">About Us</Link></li>
              <li><Link to="/our-journey" className="hover:text-[#FFB400] transition">Our 10-Year Journey</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-[#FFB400] transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#FFB400] transition">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-[#FFB400] transition">Refund Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#FFB400] transition">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Services</h3>
             <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('itr-filing')} className="hover:text-[#FFB400] transition cursor-pointer text-left w-full">File ITR Online</button></li>
              <li><button onClick={() => scrollToSection('gst-services')} className="hover:text-[#FFB400] transition cursor-pointer text-left w-full">GST Registration & Filing</button></li>
              <li><button onClick={() => scrollToSection('company-registration')} className="hover:text-[#FFB400] transition cursor-pointer text-left w-full">Private Limited Company</button></li>
              <li><button onClick={() => scrollToSection('company-registration')} className="hover:text-[#FFB400] transition cursor-pointer text-left w-full">LLP Registration</button></li>
              <li><button onClick={() => scrollToSection('company-registration')} className="hover:text-[#FFB400] transition cursor-pointer text-left w-full">Trademark Search</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h3>
             <ul className="space-y-2">
              <li><a href="tel:9982504000" className="hover:text-[#FFB400] transition">+91 9982504000</a></li>
              <li>support@taxserve.in</li>
              <li>Mon - Sat, 10 AM - 7 PM</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex items-center justify-center w-8 h-8 bg-[#FFB400] rounded-md shadow-sm">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border border-[#1D3557]">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white leading-none">Online ITR Filing</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">India's most trusted online tax filing platform. We make taxes simple, accurate, and secure for millions of Indians.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-8 border-t border-[rgba(255,255,255,0.1)] text-center text-xs">
          &copy; {new Date().getFullYear()} Online ITR Filing. All rights reserved. (a sarv.com initiative)
        </div>
      </footer>

      {/* Floating WhatsApp and Call Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="tel:9982504000"
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
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-journey" element={<Journey />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/refund-policy" element={<Refund />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </HashRouter>
    </HelmetProvider>
  );
}
