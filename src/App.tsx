import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { ShieldCheck, Award, MessageCircle, Phone } from 'lucide-react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Journey from './pages/Journey';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/919982504000', '_blank');
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">
        {/* Top Banner indicating legacy */}
        <div className="bg-amber-500 text-amber-950 py-1.5 px-4 text-xs sm:text-sm font-semibold text-center mt-0">
          <span className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 hidden sm:block" /> India's Most Trusted Tax Platform | Celebrating 10+ Years of Excellence | ★★★★★ 4.9/5 from 1M+ Users
          </span>
        </div>

        {/* Navigation - Uses <header> and <nav> for SEO semantics */}
        <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-amber-400" />
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold tracking-tight text-white leading-none">TaxServe India</span>
                  <span className="text-[10px] text-amber-400 font-medium tracking-widest uppercase mt-0.5">Est. 2014</span>
                </div>
              </Link>
              <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
                <Link to="/" className="text-slate-300 hover:text-white font-medium transition">Home</Link>
                <a href="/#itr-filing" className="text-slate-300 hover:text-white font-medium transition">ITR Filing</a>
                <a href="/#gst-services" className="text-slate-300 hover:text-white font-medium transition">GST Services</a>
                <a href="/#company-registration" className="text-slate-300 hover:text-white font-medium transition">Start your Business</a>
              </nav>
              <div className="flex items-center space-x-4">
                <button onClick={handleWhatsAppRedirect} className="bg-amber-500 text-slate-900 px-6 py-2 rounded-md font-bold hover:bg-amber-400 transition shadow-sm hidden sm:block">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-journey" element={<Journey />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>

        {/* Footer Area for SEO links */}
        <footer className="bg-slate-900 py-12 border-t mt-auto border-slate-800 text-slate-400 text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about-us" className="hover:text-amber-400 transition">About Us</Link></li>
                <li><Link to="/our-journey" className="hover:text-amber-400 transition">Our 10-Year Journey</Link></li>
                <li><Link to="/terms-conditions" className="hover:text-amber-400 transition">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-amber-400 transition">Privacy Policy</Link></li>
                <li><Link to="/refund-policy" className="hover:text-amber-400 transition">Refund Policy</Link></li>
                <li><Link to="/disclaimer" className="hover:text-amber-400 transition">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
               <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Services</h3>
               <ul className="space-y-2">
                <li><a href="/#itr-filing" className="hover:text-amber-400 transition">File ITR Online</a></li>
                <li><a href="/#gst-services" className="hover:text-amber-400 transition">GST Registration & Filing</a></li>
                <li><a href="/#company-registration" className="hover:text-amber-400 transition">Private Limited Company</a></li>
                <li><a href="/#company-registration" className="hover:text-amber-400 transition">LLP Registration</a></li>
                <li><a href="/#company-registration" className="hover:text-amber-400 transition">Trademark Search</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h3>
               <ul className="space-y-2">
                <li><a href="tel:9982504000" className="hover:text-amber-400 transition">+91 9982504000</a></li>
                <li>support@taxserve.in</li>
                <li>Mon - Sat, 10 AM - 7 PM</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <ShieldCheck className="w-8 h-8 text-amber-400" />
                 <span className="text-2xl font-extrabold tracking-tight text-white leading-none">TaxServe</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">India's most trusted online tax filing platform. We make taxes simple, accurate, and secure for millions of Indians.</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            &copy; {new Date().getFullYear()} TaxServe India. All rights reserved.
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
    </HashRouter>
  );
}
