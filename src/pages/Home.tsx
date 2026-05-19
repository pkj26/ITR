import React, { useState } from 'react';
import { CheckCircle2, FileText, TrendingUp, Briefcase, ShieldCheck, Building2, Receipt, FileSpreadsheet, Star, Award, Users, ThumbsUp, Calculator, Home as HomeIcon, Percent, PieChart, Landmark, BadgeCheck } from 'lucide-react';
import { GSTCalculator, SIPCalculator, HRACalculator, IncomeTaxCalculator } from '../components/Calculators';

export default function Home() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/919982504000', '_blank');
  };

  return (
    <main className="flex-grow">
      {/* Simple Hero Section */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            File Your <span className="text-slate-800 border-b-4 border-amber-400 pb-1">Income Tax Return (ITR)</span> Online in India
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert CA-assisted ITR filing, GST Registration, and Company formation. Join over 1.5 million Indians using our services for maximum tax savings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm md:text-base font-semibold text-slate-700 bg-slate-50 py-4 px-6 rounded-lg inline-flex border border-slate-200 shadow-inner">
            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-600 mr-2" /> Maximum Refund</div>
            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-600 mr-2" /> CA Assisted Filing</div>
            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-600 mr-2" /> 100% Notice Support</div>
          </div>
        </div>
      </section>

      {/* 10 Years Trust / Stats Banner */}
      <section className="bg-slate-900 py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-slate-700 md:divide-x-2">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-amber-400 mb-3" />
              <span className="text-3xl font-bold text-white">1.5M+</span>
              <span className="text-slate-400 text-sm mt-1 uppercase tracking-wider font-semibold">Happy Users</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-amber-400 mb-3" />
              <span className="text-3xl font-bold text-white">10+ Years</span>
              <span className="text-slate-400 text-sm mt-1 uppercase tracking-wider font-semibold">Of Excellence</span>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="w-8 h-8 text-amber-400 mb-3" />
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-slate-400 text-sm mt-1 uppercase tracking-wider font-semibold">Expert CAs</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-amber-400 mb-3" />
              <span className="text-3xl font-bold text-white">4.9/5</span>
              <span className="text-slate-400 text-sm mt-1 uppercase tracking-wider font-semibold">Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (ITR Filing) */}
      <section id="itr-filing" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Pricing. No Hidden Fees.</h2>
            <p className="text-slate-600 text-lg">Select the plan that matches your income sources.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Plan 1: Salaried */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-shadow relative">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Salaried Individual</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">Best for simple salary and interest income.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹499</span>
                <span className="text-slate-400 text-sm line-through ml-2">₹999</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Income from single/multiple salaries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Income from Bank Interest / FD</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Claim HRA, 80C & other deductions</span>
                </li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                Buy Now
              </button>
            </div>

            {/* Plan 2: Capital Gains (Most Popular) */}
            <div className="bg-white rounded-2xl shadow-md border-2 border-blue-600 p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Capital Gains / Crypto</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">For traders, investors & Mutual Fund holders.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹1,499</span>
                <span className="text-slate-400 text-sm line-through ml-2">₹2,499</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Includes Salaried Plan features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Capital gains from Shares & Mutual Funds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Cryptocurrency & VDA Tax computation</span>
                </li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
                Buy Now
              </button>
            </div>

            {/* Plan 3: Business & Professional */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-shadow relative">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Business & Profession</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">For Freelancers, Consultants & small businesses.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹2,499</span>
                <span className="text-slate-400 text-sm line-through ml-2">₹3,999</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Intraday & F&O Trading</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Freelance, Gig workers & Consultants (Section 44ADA)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Small businesses (Section 44AD)</span>
                </li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works Section for Trust */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How our CA-Assisted Filing Works</h2>
            <div className="flex justify-center items-center gap-2 text-green-700 bg-green-50 px-5 py-2.5 rounded-full inline-flex mx-auto border border-green-200 shadow-sm">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">100% Secure & Trusted. Govt. Authorized CA Experts. Your Data is Guaranteed Safe.</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center relative max-w-6xl mx-auto">
            {/* Connecting line for visual flow on desktop */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-8 ring-white shadow-sm">1</div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Buy a Plan</h3>
              <p className="text-sm text-slate-600">Select and purchase the plan that best fits your income profile.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-8 ring-white shadow-sm">2</div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">CA Contacts You</h3>
              <p className="text-sm text-slate-600">Our expert CA will personally call you to coordinate and securely collect details.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-8 ring-white shadow-sm">3</div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Step-by-Step Info</h3>
              <p className="text-sm text-slate-600">We keep you informed step-by-step as we prepare your tax return.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-8 ring-white shadow-sm">4</div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">ITR Filed</h3>
              <p className="text-sm text-slate-600">After approval, we file it accurately to ensure maximum tax savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GST Services Section */}
      <section id="gst-services" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">For Businesses</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete GST Solutions</h2>
            <p className="text-slate-600 text-lg">Hassle-free GST Registration and Return Filing by Experts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Plan 1: GST Registration */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">GST Registration</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">Fast & hassle-free GSTIN generation for your new business.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹1,499</span>
                <span className="text-slate-500 text-sm ml-2">/ one-time</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Filing of Application for Registration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">ARN & GSTIN Generation</span>
                </li>
                 <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Dedicated Expert Support</span>
                </li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-indigo-50 text-indigo-700 font-bold py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                Get Registered
              </button>
            </div>

            {/* Plan 2: GST Return (Popular) */}
            <div className="bg-white rounded-2xl shadow-md border-2 border-indigo-600 p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Recommended
              </div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">GST Return Filing</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">Monthly / Quarterly filing of GSTR-1 & GSTR-3B.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹4,999</span>
                <span className="text-slate-500 text-sm ml-2">/ year</span>
              </div>
               <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Filing of GSTR-1 and GSTR-3B</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Input Tax Credit (ITC) Reconciliation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">GSTR-2A/2B match & advice</span>
                </li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
                Buy Now
              </button>
            </div>

            {/* Plan 3: Nil GST */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                  <Receipt className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Nil GST Return</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">For businesses with NO sales/purchases in a period.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹1,999</span>
                <span className="text-slate-500 text-sm ml-2">/ year</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Timely Nil Return Filing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Keep GSTIN active & penalty-free</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Compliance alert reminders</span>
                </li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-indigo-50 text-indigo-700 font-bold py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works Section for GST */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How our GST Services Work</h2>
            <div className="flex justify-center items-center gap-2 text-indigo-700 bg-indigo-50 px-5 py-2.5 rounded-full inline-flex mx-auto border border-indigo-200 shadow-sm">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">100% Accurate & Penalty-Free. Monitored by Top GST Experts.</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center relative max-w-6xl mx-auto">
            {/* Connecting line for visual flow on desktop */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-indigo-100 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-8 ring-white shadow-sm">1</div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Share Documents</h3>
              <p className="text-sm text-slate-600">Securely upload your sales, purchase invoices, and bank statements.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-8 ring-white shadow-sm">2</div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">ITC Verification</h3>
              <p className="text-sm text-slate-600">Our experts verify GSTR-2A/2B to ensure maximum & accurate Input Tax Credit claim.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-8 ring-white shadow-sm">3</div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Review Draft</h3>
              <p className="text-sm text-slate-600">We share the prepared GST summary and tax liability calculation for your approval.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-8 ring-white shadow-sm">4</div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">File & Confirm</h3>
              <p className="text-sm text-slate-600">Post approval, we file it on the GST portal and share the acknowledgment receipt (ARN).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Registration Section */}
      <section id="company-registration" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">Startup Services</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Start & Protect Your Business</h2>
            <p className="text-slate-600 text-lg">Register your company and secure your brand with our premium legal team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Plan 1: Pvt Ltd */}
            <div className="bg-white rounded-2xl shadow-md border-2 border-teal-600 p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Private Limited Company</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">Best for growing startups raising funds.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹7,999</span>
                <span className="text-slate-500 text-sm ml-2">+ Govt Fees</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">DIN & DSC for 2 Directors</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Drafting of MOA & AOA</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">PAN, TAN & Bank Account Setup</span></li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition shadow-md">Get Started</button>
            </div>

            {/* Plan 2: LLP */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">LLP Registration</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">Limited Liability Partnership for agencies.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹4,999</span>
                <span className="text-slate-500 text-sm ml-2">+ Govt Fees</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">DIN & DSC for 2 Partners</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">LLP Agreement Drafting</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Certificate of Incorporation</span></li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-teal-50 text-teal-700 font-bold py-3 rounded-lg hover:bg-teal-600 hover:text-white transition">Get Started</button>
            </div>

            {/* Plan 3: Trademark */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Trademark Registration</h3>
                <p className="text-slate-500 text-sm mt-2 h-10">Protect your brand name and logo natively.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">₹1,999</span>
                <span className="text-slate-500 text-sm ml-2">+ Govt Fees</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Comprehensive Name Search</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Application Filing (TM-A)</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Use ™ Symbol Instantly</span></li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-teal-50 text-teal-700 font-bold py-3 rounded-lg hover:bg-teal-600 hover:text-white transition">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tax & Financial Tools Section */}
      <section id="tax-tools" className="py-16 bg-slate-900 text-white border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Free Financial & Tax Tools</h2>
            <p className="text-slate-400 text-lg">Smart calculators to help you plan your taxes, investments, and business.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <button 
              onClick={() => setActiveCalculator(activeCalculator === 'income-tax' ? null : 'income-tax')}
              className={`text-left bg-slate-800 p-6 rounded-xl border ${activeCalculator === 'income-tax' ? 'border-amber-400 bg-slate-800' : 'border-slate-700'} hover:border-amber-400 hover:bg-slate-800/80 transition group block`}
            >
              <div className={`w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 transition-transform ${activeCalculator === 'income-tax' ? 'text-amber-400 scale-110' : 'text-amber-400 group-hover:scale-110'}`}>
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 transition-colors ${activeCalculator === 'income-tax' ? 'text-amber-400' : 'text-slate-100 group-hover:text-amber-400'}`}>Income Tax Calculator</h3>
              <p className="text-sm text-slate-400">Compare Old vs New regime and find out which saves you more tax.</p>
            </button>

            <button 
              onClick={() => setActiveCalculator(activeCalculator === 'hra' ? null : 'hra')}
              className={`text-left bg-slate-800 p-6 rounded-xl border ${activeCalculator === 'hra' ? 'border-amber-400 bg-slate-800' : 'border-slate-700'} hover:border-amber-400 hover:bg-slate-800/80 transition group block`}
            >
              <div className={`w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 transition-transform ${activeCalculator === 'hra' ? 'text-amber-400 scale-110' : 'text-amber-400 group-hover:scale-110'}`}>
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 transition-colors ${activeCalculator === 'hra' ? 'text-amber-400' : 'text-slate-100 group-hover:text-amber-400'}`}>HRA Calculator</h3>
              <p className="text-sm text-slate-400">Calculate your House Rent Allowance exemption exactly per IT rules.</p>
            </button>

            <button 
              onClick={() => setActiveCalculator(activeCalculator === 'gst' ? null : 'gst')}
              className={`text-left bg-slate-800 p-6 rounded-xl border ${activeCalculator === 'gst' ? 'border-amber-400 bg-slate-800' : 'border-slate-700'} hover:border-amber-400 hover:bg-slate-800/80 transition group block`}
            >
              <div className={`w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 transition-transform ${activeCalculator === 'gst' ? 'text-amber-400 scale-110' : 'text-amber-400 group-hover:scale-110'}`}>
                <Percent className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 transition-colors ${activeCalculator === 'gst' ? 'text-amber-400' : 'text-slate-100 group-hover:text-amber-400'}`}>GST Calculator</h3>
              <p className="text-sm text-slate-400">Easily calculate GST inclusive and exclusive prices for your invoices.</p>
            </button>

            <button 
              onClick={() => setActiveCalculator(activeCalculator === 'sip' ? null : 'sip')}
              className={`text-left bg-slate-800 p-6 rounded-xl border ${activeCalculator === 'sip' ? 'border-amber-400 bg-slate-800' : 'border-slate-700'} hover:border-amber-400 hover:bg-slate-800/80 transition group block`}
            >
              <div className={`w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 transition-transform ${activeCalculator === 'sip' ? 'text-amber-400 scale-110' : 'text-amber-400 group-hover:scale-110'}`}>
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 transition-colors ${activeCalculator === 'sip' ? 'text-amber-400' : 'text-slate-100 group-hover:text-amber-400'}`}>SIP Calculator</h3>
              <p className="text-sm text-slate-400">Plan your wealth creation through compounding over the long term.</p>
            </button>

          </div>

          {/* Active Calculator Render Area */}
          {activeCalculator && (
            <div className="mt-8">
              {activeCalculator === 'income-tax' && <IncomeTaxCalculator />}
              {activeCalculator === 'hra' && <HRACalculator />}
              {activeCalculator === 'gst' && <GSTCalculator />}
              {activeCalculator === 'sip' && <SIPCalculator />}
            </div>
          )}
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section itemScope itemType="https://schema.org/FAQPage" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Common questions about online ITR filing, GST registration, and company compliance in India.</p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 itemProp="name" className="text-lg font-bold text-slate-900 mb-2">How to file ITR online in India?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600">You can easily file your Income Tax Return (ITR) online in India through the TaxServe platform. Just select your applicable plan, upload your Form 16, and our expert CAs will prepare and e-file your ITR directly with the Income Tax Department to ensure maximum tax refund.</p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 itemProp="name" className="text-lg font-bold text-slate-900 mb-2">Is CA assistance required for ITR filing?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600">While you can file ITR yourself on the government portal, CA-assisted filing ensures 100% accuracy. A Chartered Accountant helps claim maximum tax deductions under sections like 80C, 80D, and HRA, and significantly reduces the risk of receiving a defective return notice from the IT department.</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 itemProp="name" className="text-lg font-bold text-slate-900 mb-2">When is GST Registration mandatory?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600">GST Registration is legally mandatory for businesses involved in the intra-state supply of goods if their turnover exceeds ₹40 Lakhs (₹20 Lakhs for special category states). For service providers, the threshold is ₹20 Lakhs. It is also mandatory regardless of turnover for inter-state suppliers and e-commerce aggregators.</p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 itemProp="name" className="text-lg font-bold text-slate-900 mb-2">What is required for Private Limited Company Registration in India?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600">To register a Private Limited Company, you need a minimum of 2 directors and 2 shareholders. Documents required include PAN cards, Aadhaar cards, bank statements of directors, and a utility bill for the registered office address. TaxServe handles the DIN, DSC, name approval, MOA, and AOA drafting process online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Trust Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-1 mb-4">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Millions of Indians</h2>
            <p className="text-slate-600 text-lg">For over a decade, we've been helping individuals and businesses stay compliant.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="flex text-amber-400 mb-4">
                <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 italic mb-6">"I've been using TaxServe since 2016. Their CA team is phenomenal. They spotted deductions I didn't even know existed. Highly professional and deeply knowledgeable."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">RS</div>
                <div>
                  <h4 className="font-bold text-slate-900">Rahul Sharma</h4>
                  <p className="text-xs text-slate-500">IT Professional, Bangalore</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="flex text-amber-400 mb-4">
                <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 italic mb-6">"As a stock trader, calculating Capital Gains is a nightmare. The CA handled my entire portfolio perfectly directly from my broker statements. Total peace of mind."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg">AP</div>
                <div>
                  <h4 className="font-bold text-slate-900">Ankit Patel</h4>
                  <p className="text-xs text-slate-500">Stock Trader, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="flex text-amber-400 mb-4">
                <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 italic mb-6">"Handed over our firm's GST filing to them 3 years ago and never looked back. 100% compliance, zero penalties, and the support team is always reachable via phone."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-lg">MD</div>
                <div>
                  <h4 className="font-bold text-slate-900">Meera Das</h4>
                  <p className="text-xs text-slate-500">Agency Owner, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-700 opacity-50 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to file your taxes stress-free?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Get connected with a dedicated CA today and ensure you get the maximum tax refund legally possible.</p>
          <button onClick={handleWhatsAppRedirect} className="bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-slate-50 transition transform hover:-translate-y-1">
            Talk to an Expert Now
          </button>
        </div>
      </section>
    </main>
  );
}
