import React, { useState } from 'react';
import { 
  Building2, 
  FileCheck2, 
  PhoneCall, 
  Send, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  AlertCircle,
  HelpCircle,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export default function GSTLeadHub() {
  const [selectedService, setSelectedService] = useState('GST New Registration');
  const [businessType, setBusinessType] = useState('Retail Shop / Proprietorship');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('Jaipur');
  const [submitted, setSubmitted] = useState(false);

  const gstServices = [
    { id: 'GST New Registration', label: 'New GST Registration', price: '₹1,499', turnaround: '3-5 Days' },
    { id: 'GST Return Filing (Monthly)', label: 'Monthly GST Returns (1 & 3B)', price: '₹7,999/yr', turnaround: 'Monthly' },
    { id: 'Nil GST Return', label: 'Nil Return Filing', price: '₹1,999/yr', turnaround: 'Quarterly' },
    { id: 'GST Notice / ASMT-10 Reply', label: 'GST Notice & Scrutiny Reply', price: 'Custom Quote', turnaround: '24-48 Hours' },
    { id: 'Revoke Cancelled GST', label: 'Restore Cancelled GSTIN', price: '₹2,499', turnaround: '7-10 Days' },
    { id: 'GST LUT for Exporters', label: 'GST LUT Export Filing', price: '₹999', turnaround: '24 Hours' }
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
      `Please connect with me and share the document checklist and pricing details.`
    );
    
    setSubmitted(true);
    window.open(`https://wa.me/919783699635?text=${message}`, '_blank');
  };

  return (
    <div id="gst-consultation-hub" className="bg-gradient-to-b from-indigo-900 via-slate-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 my-10 rounded-3xl shadow-2xl border border-indigo-500/20 max-w-7xl mx-auto overflow-hidden relative">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-indigo-400/30 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Fast-Track GST Registration & CA Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get GST Registration & Monthly Return Filing <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">by Expert CAs</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Need a new GST number, monthly GSTR-1/3B filing, or notice assistance in Jaipur or anywhere in India? Get instant assistance with 100% compliance guarantee.
          </p>
        </div>

        {/* 2-Column Interactive Area */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-indigo-400" />
                Select Your Required GST Service:
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Choose the service below to calculate turnaround time and talk directly to our Chartered Accountant.
              </p>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {gstServices.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setSelectedService(svc.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                      selectedService === svc.id
                        ? 'border-amber-400 bg-indigo-950/80 shadow-md ring-1 ring-amber-400/50'
                        : 'border-slate-700 bg-slate-900/60 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-semibold text-xs sm:text-sm text-slate-100">{svc.label}</span>
                      {selectedService === svc.id && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-3 text-xs">
                      <span className="text-amber-300 font-bold">{svc.price}</span>
                      <span className="text-slate-400 bg-slate-800 px-2 py-0.5 rounded text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> {svc.turnaround}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleWhatsAppInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Business Type:
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                    >
                      <option value="Retail Shop / Proprietorship">Retail Shop / Proprietorship</option>
                      <option value="Private Limited / LLP">Private Limited / LLP</option>
                      <option value="E-Commerce Seller (Amazon/Flipkart/Meesho)">E-Commerce Seller (Amazon/Meesho)</option>
                      <option value="Freelancer / Service Provider">Freelancer / IT Consultant</option>
                      <option value="Exporter / Wholesaler">Exporter / Wholesaler</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your City / Area:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vidyadhar Nagar, Jaipur"
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      WhatsApp / Mobile Number:
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all text-sm sm:text-base cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Instant GST Assistance on WhatsApp</span>
                  </button>
                  <a
                    href="tel:+919783699635"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-sm sm:text-base cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call CA: 9783699635</span>
                  </a>
                </div>
              </form>

              {submitted && (
                <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Connecting you with our senior GST expert on WhatsApp right now!</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Key Trust Badges & Local Jaipur Authority */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Box 1: Local Office & Walk-In */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/80">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Visit Our Jaipur Office</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    F51 Alankar Plaza, Central Spine, Vidyadhar Nagar, Jaipur, Rajasthan 302039.
                  </p>
                  <p className="text-[11px] text-amber-400 font-semibold mt-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Mon - Sat: 10:00 AM to 07:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Why Clients Trust KarSeva */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/80 space-y-3">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider text-indigo-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Why Businesses Trust KarSeva
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Tax Notice Protection:</strong> Error-free return filing with complete 2A/2B ITC reconciliation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Fast-Track ARN Generation:</strong> Documents reviewed by CA before submitting to government tax officers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Transparent Flat Pricing:</strong> No hidden costs, no surprise stamp fees or unannounced retainers.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Instant Phone Support */}
            <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-2xl p-5 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Urgent GST Query?</p>
                <p className="text-sm font-bold text-white mt-0.5">Talk to Senior Tax Advocate</p>
                <p className="text-xs text-slate-400">+91 9783699635 | +91 9521555557</p>
              </div>
              <a
                href="tel:+919783699635"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
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
