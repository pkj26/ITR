import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Award, MessageCircle, Phone, Menu, X } from 'lucide-react';
import Home from './pages/Home';

// Lazy load secondary pages to optimize initial bundle size & load speed
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Journey = lazy(() => import('./pages/Journey'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Refund = lazy(() => import('./pages/Refund'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const SEOLandingPage = lazy(() => import('./pages/SEOLandingPage'));
const BlogListing = lazy(() => import('./pages/BlogListing'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));

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
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium transition">Tax Blog</Link>
              <button onClick={() => scrollToSection('tax-tools')} className="text-amber-400 hover:text-amber-300 font-semibold transition cursor-pointer flex items-center gap-1">
                <span>⚡ Tax Calculators</span>
              </button>
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
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Tax Blog</Link>
              <button onClick={() => scrollToSection('tax-tools')} className="text-left text-amber-400 font-semibold block px-3 py-2 rounded-md">⚡ Tax Calculators</button>
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

      {/* Footer Area for SEO & Internal Linking */}
      <footer className="bg-[#1D3557] py-14 border-t mt-auto border-[rgba(255,255,255,0.1)] text-[#EAECEF] text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
            {/* Column 1: Company Profile */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <KarSevaLogo size={80} showText={true} variant="light" />
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
                India's premier Chartered Accountant &amp; tax compliance platform. We provide end-to-end online ITR filing, fast-track GST registration, and company incorporation for businesses, startups, and salaried professionals.
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-1.5">
                <p className="flex items-center gap-2 font-semibold text-white">
                  <span>📍 Office:</span> F51 Alankar Plaza, Central Spine, Vidyadhar Nagar, Jaipur 302039
                </p>
                <p className="flex items-center gap-2 font-semibold text-white">
                  <span>📞 CA Helpline:</span> 
                  <a href="tel:9783699635" className="hover:text-[#FFB400] text-slate-200 underline">+91 9783699635</a> / 
                  <a href="tel:9521555557" className="hover:text-[#FFB400] text-slate-200 underline ml-1">+91 9521555557</a>
                </p>
                <p className="flex items-center gap-2 font-semibold text-white">
                  <span>✉️ Email:</span> 
                  <a href="mailto:Karsevaa2026@gmail.com" className="hover:text-[#FFB400] text-slate-200">Karsevaa2026@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider border-b border-white/10 pb-2">Company &amp; Legal</h3>
              <ul className="space-y-2.5">
                <li><Link to="/about-us" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">About KarSeva</Link></li>
                <li><Link to="/pricing" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Pricing &amp; Plans</Link></li>
                <li><Link to="/blog" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Tax &amp; Business Blog</Link></li>
                <li><Link to="/our-journey" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Our 10-Year Journey</Link></li>
                <li><Link to="/terms-conditions" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Terms &amp; Conditions</Link></li>
                <li><Link to="/privacy-policy" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Privacy Policy</Link></li>
                <li><Link to="/refund-policy" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Refund Policy</Link></li>
                <li><Link to="/disclaimer" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Disclaimer</Link></li>
              </ul>
            </div>

            {/* Column 3: High-Priority GST Links */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider border-b border-white/10 pb-2">GST Services</h3>
              <ul className="space-y-2.5">
                <li><Link to="/gst-registration-services-jaipur" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">GST Registration Jaipur</Link></li>
                <li><Link to="/gst-consultant-near-me-jaipur" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">GST Consultant Near Me</Link></li>
                <li><Link to="/gst-registration-vidyadhar-nagar-jaipur" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">GST Vidyadhar Nagar</Link></li>
                <li><Link to="/gst-return-filing-jaipur" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Monthly GST Returns</Link></li>
                <li><Link to="/gst-notice-reply-assistance-india" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">GST Notice &amp; Scrutiny Reply</Link></li>
                <li><Link to="/gst-cancellation-and-revocation-consultant" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Restore Cancelled GSTIN</Link></li>
                <li><Link to="/gst-lut-filing-for-exporters-india" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">GST LUT Export Filing</Link></li>
              </ul>
            </div>

            {/* Column 4: High-Priority ITR & Company Links */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider border-b border-white/10 pb-2">ITR &amp; Company Setup</h3>
              <ul className="space-y-2.5">
                <li><Link to="/itr-filing-jaipur" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Online ITR Filing Jaipur</Link></li>
                <li><Link to="/income-tax-filing-for-salaried-employees-online-india" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">ITR for Salaried Staff</Link></li>
                <li><Link to="/itr-filing-for-freelancers-india" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">ITR for Freelancers</Link></li>
                <li><Link to="/company-registration-jaipur" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Company Registration Jaipur</Link></li>
                <li><Link to="/private-limited-company-registration-online-india" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Private Limited Online</Link></li>
                <li><Link to="/llp-registration-online-india" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">LLP Incorporation</Link></li>
                <li><Link to="/trademark-registration-jaipur" className="text-slate-300 hover:text-[#FFB400] text-xs sm:text-sm transition block">Trademark Registration</Link></li>
              </ul>
            </div>
          </div>

          {/* Deep SEO Sitemaps & Local Keyword Matrix for Google Crawler indexing */}
          <div className="pt-8 pb-6 border-b border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFB400] mb-4">
              Explore All Tax Services &amp; CA Practice Areas (Pan-India &amp; Rajasthan)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[11px] text-slate-300">
              <Link to="/ca-in-vidyadhar-nagar-jaipur" className="hover:text-white hover:underline transition">CA Vidyadhar Nagar</Link>
              <Link to="/best-ca-near-vidyadhar-nagar-jaipur" className="hover:text-white hover:underline transition">Best CA Near Me Jaipur</Link>
              <Link to="/income-tax-consultant-vidyadhar-nagar-jaipur" className="hover:text-white hover:underline transition">Tax Consultant Jaipur</Link>
              <Link to="/tax-consultant-vidyadhar-nagar-jaipur" className="hover:text-white hover:underline transition">Tax Advisor VDN</Link>
              <Link to="/best-online-ca-service-itr-filing-india" className="hover:text-white hover:underline transition">Best Online CA India</Link>
              <Link to="/best-site-to-file-itr-online-india" className="hover:text-white hover:underline transition">File ITR Online India</Link>
              <Link to="/online-ca-services-startups-india" className="hover:text-white hover:underline transition">CA for Startups India</Link>
              <Link to="/gst-registration-ecommerce-sellers-india" className="hover:text-white hover:underline transition">GST for E-Commerce</Link>
              <Link to="/company-registration-one-person-company-india" className="hover:text-white hover:underline transition">OPC Registration</Link>
              <Link to="/itr-filing-for-nri-india" className="hover:text-white hover:underline transition">NRI Tax Return Filing</Link>
              <Link to="/proprietorship-to-private-limited-conversion-india" className="hover:text-white hover:underline transition">Proprietorship to Pvt Ltd</Link>
              <Link to="/how-to-file-itr-without-ca-india" className="hover:text-white hover:underline transition">How to File ITR Online</Link>
              <Link to="/gst-registration-documents-required-india" className="hover:text-white hover:underline transition">GST Documents Required</Link>
              <Link to="/itr-filing-last-date-extension-india" className="hover:text-white hover:underline transition">ITR Due Date Updates</Link>
              <Link to="/gst-late-fee-calculator-india" className="hover:text-white hover:underline transition">GST Late Fee Guide</Link>
              <Link to="/how-to-check-itr-refund-status-online" className="hover:text-white hover:underline transition">Check ITR Refund Status</Link>
              <Link to="/company-registration-process-step-by-step-india" className="hover:text-white hover:underline transition">Company Setup Steps</Link>
              <Link to="/msme-registration-benefits-india" className="hover:text-white hover:underline transition">MSME / Udyam Benefits</Link>
              <Link to="/income-tax-notice-reply-help-india" className="hover:text-white hover:underline transition">Income Tax Notice Reply</Link>
              <Link to="/gst-composition-scheme-registration-india" className="hover:text-white hover:underline transition">GST Composition Scheme</Link>
              <Link to="/how-to-get-gst-number-for-online-business" className="hover:text-white hover:underline transition">GST for Online Business</Link>
              <Link to="/import-export-code-registration-online-india" className="hover:text-white hover:underline transition">IEC Code Registration</Link>
              <Link to="/fssai-license-registration-for-small-business" className="hover:text-white hover:underline transition">FSSAI License Apply</Link>
              <Link to="/startup-india-registration-benefits" className="hover:text-white hover:underline transition">Startup India DPIIT</Link>
              <Link to="/12a-80g-registration-for-ngo-india" className="hover:text-white hover:underline transition">12A &amp; 80G for NGO</Link>
              <Link to="/partnership-firm-registration-online-india" className="hover:text-white hover:underline transition">Partnership Registration</Link>
              <Link to="/digital-signature-certificate-for-gst-filing" className="hover:text-white hover:underline transition">Class 3 DSC Online</Link>
              <Link to="/professional-tax-registration-india" className="hover:text-white hover:underline transition">Professional Tax (PT)</Link>
              <Link to="/affordable-gst-registration-consultant-india" className="hover:text-white hover:underline transition">Affordable GST Advisor</Link>
              <Link to="/cheapest-company-registration-online-india" className="hover:text-white hover:underline transition">Low Cost Company Setup</Link>
              <Link to="/ca-vs-online-tax-filing-platform-india" className="hover:text-white hover:underline transition">CA vs DIY Tax Filing</Link>
              <Link to="/blog/how-to-file-itr-online-step-by-step-guide" className="hover:text-white hover:underline transition">ITR E-Filing Guide</Link>
              <Link to="/blog/tax-saving-deductions-beyond-80c-india" className="hover:text-white hover:underline transition">Tax Deductions 80C</Link>
              <Link to="/blog/how-to-file-itr-for-crypto-income-india" className="hover:text-white hover:underline transition">Crypto Tax in India</Link>
              <Link to="/blog/how-to-file-itr-for-stock-market-income" className="hover:text-white hover:underline transition">Stock Market Tax Return</Link>
              <Link to="/blog/itr-filing-for-fo-trading-losses" className="hover:text-white hover:underline transition">F&amp;O Trading Losses ITR</Link>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© 2026 KarSeva.in. All rights reserved. Registered Office: Vidyadhar Nagar, Jaipur, Rajasthan.</p>
            <p className="text-[11px] text-slate-400">
              Assisted by licensed Chartered Accountants &amp; Legal Practitioners.
            </p>
          </div>
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
          <Suspense fallback={
            <div className="flex-grow flex flex-col items-center justify-center py-24 min-h-[60vh] bg-slate-50">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#1D3557] mb-4"></div>
              <p className="text-slate-500 text-sm font-medium animate-pulse">Loading secure platform...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-journey" element={<Journey />} />
              <Route path="/terms-conditions" element={<Terms />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/refund-policy" element={<Refund />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/:slug" element={<SEOLandingPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
