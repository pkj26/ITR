import React, { useState } from 'react';
import { 
  ChevronRight, 
  ShieldCheck, 
  PhoneCall, 
  Send, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  FileCheck2, 
  TrendingUp, 
  Building2,
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react';

export default function GSTLeadHub() {
  const [selectedService, setSelectedService] = useState('GST New Registration');
  const [businessType, setBusinessType] = useState('Retail Shop / Proprietorship');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('Jaipur');
  const [showConsultForm, setShowConsultForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const gstServices = [
    { 
      id: 'GST New Registration', 
      label: 'New GST Registration', 
      price: '₹1,499', 
      turnaround: '3-5 Days',
      desc: 'Complete documentation, HSN code selection & 100% approval'
    },
    { 
      id: 'GST Return Filing (Monthly)', 
      label: 'Monthly GST Returns (1 & 3B)', 
      price: '₹7,999/yr', 
      turnaround: 'Monthly',
      desc: 'Zero-delay filing with automated 2A/2B ITC matching'
    },
    { 
      id: 'Nil GST Return', 
      label: 'Nil Return Filing', 
      price: '₹1,999/yr', 
      turnaround: 'Quarterly',
      desc: 'Hassle-free filing to prevent suspension & ₹50/day late fee'
    },
    { 
      id: 'GST Notice / ASMT-10 Reply', 
      label: 'GST Notice & Scrutiny Reply', 
      price: 'Custom Quote', 
      turnaround: '24-48 Hours',
      desc: 'Expert legal drafting and representation by senior advocates'
    },
    { 
      id: 'Revoke Cancelled GST', 
      label: 'Restore Cancelled GSTIN', 
      price: '₹2,499', 
      turnaround: '7-10 Days',
      desc: 'Revocation in Form REG-21 with pending return clearance'
    },
    { 
      id: 'GST LUT for Exporters', 
      label: 'GST LUT Export Filing', 
      price: '₹999', 
      turnaround: '24 Hours',
      desc: 'Export goods & services without 18% upfront IGST payment'
    }
  ];

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello KarSeva Team! 👋\n\nI need GST assistance:\n` +
      `📌 *Service Needed:* ${selectedService}\n` +
      `🏢 *Business Type:* ${businessType}\n` +
      `📍 *Location/City:* ${clientCity || 'Jaipur'}\n` +
      `👤 *My Name:* ${clientName || 'Business Owner'}\n` +
      `📞 *Phone:* ${clientPhone || 'Not provided'}\n\n` +
      `Please share the document checklist, turnaround time, and steps to proceed.`
    );
    
    setSubmitted(true);
    window.open(`https://wa.me/919783699635?text=${message}`, '_blank');
  };

  const scrollToForm = () => {
    setShowConsultForm(true);
    const formElement = document.getElementById('gst-action-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-2 sm:px-4">
      {/* 
        HERO BANNER - MATCHING THE EXACT SCREENSHOT THEME
        Warm peach/cream background with orange ribbon wave vectors, 
        warm orange tagline, bold black headline, crisp CTA buttons 
      */}
      <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#FFF8F3] border border-orange-200/60 shadow-xl shadow-orange-950/5 p-8 sm:p-12 md:p-16 lg:p-20 text-center">
        
        {/* Background Flowing Ribbon Mesh Waves (Matching Screenshot) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
          <svg 
            className="w-full h-full object-cover min-w-[800px]" 
            viewBox="0 0 1200 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Smooth cascading curves radiating from left to right */}
            {Array.from({ length: 18 }).map((_, i) => {
              const startY = 240 + i * 16;
              const midY1 = 340 + i * 14 - (i % 2 === 0 ? 30 : -20);
              const midY2 = 180 + i * 12;
              const endY = 40 + i * 26;
              return (
                <path
                  key={i}
                  d={`M -50 ${startY} C 300 ${midY1}, 750 ${midY2}, 1250 ${endY}`}
                  stroke="#E86D24"
                  strokeWidth="0.85"
                  strokeOpacity={0.15 + (i % 5) * 0.05}
                  fill="none"
                />
              );
            })}
            {Array.from({ length: 14 }).map((_, i) => {
              const startY = 180 + i * 20;
              const midY1 = 460 - i * 12;
              const midY2 = 280 + i * 18;
              const endY = 100 + i * 32;
              return (
                <path
                  key={`b-${i}`}
                  d={`M -50 ${startY} C 400 ${midY1}, 800 ${midY2}, 1250 ${endY}`}
                  stroke="#F97316"
                  strokeWidth="0.6"
                  strokeOpacity={0.12 + (i % 4) * 0.04}
                  fill="none"
                />
              );
            })}
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow / Tagline in Orange */}
          <div className="text-[#E86D24] font-bold text-base sm:text-lg md:text-xl tracking-tight mb-3 flex items-center gap-1.5">
            <span>Let's get you started</span>
          </div>

          {/* Bold Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            Fast-Track GST Registration &amp; CA Compliance
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
            Upgrade to our dedicated Chartered Accountant network for seamless, efficient 
            GST registration, timely return filing, and enhanced tax savings.
          </p>

          {/* CTA Buttons - Matching Screenshot (Solid Orange + Outline Orange with Chevron) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-[#E86D24] hover:bg-[#D45E18] active:scale-[0.98] text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 transition-all text-base cursor-pointer"
            >
              <span>Get GST Number</span>
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <a
              href="tel:+919783699635"
              className="w-full sm:w-auto bg-white/90 hover:bg-orange-50/80 active:scale-[0.98] border-2 border-[#E86D24] text-[#E86D24] font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 transition-all text-base cursor-pointer shadow-sm"
            >
              <span>Talk to CA Expert</span>
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>

          {/* Trust Badges under CTA */}
          <div className="mt-8 pt-6 border-t border-orange-200/50 w-full flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>3-5 Days Guaranteed Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Zero-Query Documentation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Jaipur Local Office &amp; Pan-India Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* 
        INTERACTIVE GST SERVICE SELECTOR & DIRECT CONSULTATION 
        Styled in Clean Off-White / Peach & Slate matching the theme
      */}
      <div id="gst-action-container" className="mt-10 bg-white rounded-3xl p-6 sm:p-10 border border-orange-100 shadow-xl shadow-slate-100">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E86D24] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60 inline-block mb-2">
            Select Your Business Requirement
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Choose Your Required GST Service
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
            Transparent flat pricing with direct Chartered Accountant guidance from start to finish.
          </p>
        </div>

        {/* GST Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {gstServices.map((svc) => (
            <div
              key={svc.id}
              onClick={() => {
                setSelectedService(svc.id);
                setShowConsultForm(true);
              }}
              className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex flex-col justify-between relative overflow-hidden ${
                selectedService === svc.id
                  ? 'border-[#E86D24] bg-[#FFF8F3] shadow-md shadow-orange-500/10 ring-2 ring-[#E86D24]/20'
                  : 'border-slate-100 bg-slate-50/50 hover:border-orange-200 hover:bg-orange-50/30'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {svc.label}
                  </h4>
                  {selectedService === svc.id && (
                    <span className="bg-[#E86D24] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting At</span>
                  <span className="text-lg font-extrabold text-slate-900">{svc.price}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-[#E86D24]" />
                  {svc.turnaround}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Action Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-start pt-6 border-t border-slate-100">
          
          {/* Left Column: Direct Consultation Form */}
          <div className="lg:col-span-7 bg-[#FFF8F3] rounded-2xl p-6 sm:p-8 border border-orange-200/70">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E86D24] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/20">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                  Get Instant CA Assistance for: <span className="text-[#E86D24]">{selectedService}</span>
                </h4>
                <p className="text-xs text-slate-500">
                  Fill in your basic details to receive document checklist &amp; talk to our CA.
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppInquiry} className="space-y-4 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Constitution:
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#E86D24] focus:ring-1 focus:ring-[#E86D24]"
                  >
                    <option value="Retail Shop / Proprietorship">Retail Shop / Proprietorship</option>
                    <option value="Private Limited / LLP">Private Limited / LLP</option>
                    <option value="E-Commerce Seller (Amazon/Flipkart/Meesho)">E-Commerce Seller (Amazon/Meesho)</option>
                    <option value="Freelancer / Service Provider">Freelancer / IT Consultant</option>
                    <option value="Exporter / Wholesaler">Exporter / Wholesaler</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your City / Area:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vidyadhar Nagar, Jaipur"
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#E86D24] focus:ring-1 focus:ring-[#E86D24]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#E86D24] focus:ring-1 focus:ring-[#E86D24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile / WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#E86D24] focus:ring-1 focus:ring-[#E86D24]"
                  />
                </div>
              </div>

              {/* Form CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#E86D24] hover:bg-[#D45E18] text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-orange-600/20 transition-all text-sm sm:text-base cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
                <a
                  href="tel:+919783699635"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow transition-all text-sm sm:text-base cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call CA Desk</span>
                </a>
              </div>

              {submitted && (
                <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Redirecting to WhatsApp with your customized inquiry!</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Physical Jaipur Location & Trust Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Box 1: Verified Local Presence */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#E86D24] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Jaipur Registered Office</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    F51 Alankar Plaza, Central Spine, Vidyadhar Nagar, Jaipur, Rajasthan 302039.
                  </p>
                  <p className="text-[11px] text-[#E86D24] font-semibold mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Mon - Sat: 10:00 AM to 07:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Quality Guarantees */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E86D24]" /> KarSeva Quality Guarantee
              </h5>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Tax Notice Protection:</strong> Error-free filings with reconciliation against GSTR-2B.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated CA Manager:</strong> Direct phone &amp; WhatsApp access to your assigned CA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Coverage:</strong> Instant online onboarding for businesses across all Indian states.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Quick Direct Contact Card */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-5 text-white shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-orange-100 font-semibold">Immediate Assistance?</p>
                <p className="text-sm font-extrabold mt-0.5">Talk to Senior Tax Advocate</p>
                <p className="text-xs text-orange-100 mt-0.5 font-medium">+91 9783699635 | +91 9521555557</p>
              </div>
              <a
                href="tel:+919783699635"
                className="bg-white hover:bg-orange-50 text-[#E86D24] font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1 shadow-sm transition-all cursor-pointer flex-shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
