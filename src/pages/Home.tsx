import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, TrendingUp, Briefcase, ShieldCheck, Building2, Receipt, FileSpreadsheet, Star, Award, Users, ThumbsUp, Calculator, Home as HomeIcon, Percent, PieChart, Landmark, BadgeCheck, Clock, FileCheck, Scissors, Headset } from 'lucide-react';
import { GSTCalculator, SIPCalculator, HRACalculator, IncomeTaxCalculator } from '../components/Calculators';
import heroImage from '../assets/images/indian_woman_phone_isolated_1779176340460.png';
import SEO from '../components/SEO';

export default function Home() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/919982504000', '_blank');
  };

  return (
    <main className="flex-grow">
      <SEO 
        title="Best Online ITR Filing, GST & Company Registration in India | Online ITR Filing"
        description="India's leading platform for online ITR filing, GST registration, company incorporation, and CA services. Maximize your tax refund with our expert CAs."
      />
      {/* ClearTax-like Hero Section */}
      <section className="bg-white relative pt-2 pb-6 md:pt-4 md:pb-8 lg:pt-6 lg:pb-10 overflow-visible">
        <div className="absolute inset-0 bg-white z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-4 items-center">
            {/* Left Content */}
            <motion.div 
              initial={isDesktop ? { opacity: 0, x: -50 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left space-y-8 relative z-10 w-full max-w-2xl"
            >
              
              {/* Top Badge */}
              <motion.div 
                initial={isDesktop ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center bg-white rounded-full p-1 pr-4 shadow-sm border border-slate-100/50 backdrop-blur w-fit"
              >
                <span className="bg-[#00d084] text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                  Income Tax e Filing
                </span>
                <span className="text-slate-700 font-bold text-xs sm:text-sm ml-3">
                  <span className="text-[#00d084]">₹1766.69 Cr</span> Refund processed last year
                </span>
              </motion.div>
              
              {/* Heading */}
              <div className="space-y-4 w-full">
                <motion.h1 
                  initial={isDesktop ? { opacity: 0, y: 20 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-5xl sm:text-6xl lg:text-[4rem] font-bold text-slate-900 leading-[1.1] tracking-tight"
                >
                  Online ITR Filing
                </motion.h1>
                <motion.p 
                  initial={isDesktop ? { opacity: 0, y: 20 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-xl sm:text-2xl text-slate-600 font-medium tracking-wide"
                >
                  Seamless online filing by Tax Experts
                </motion.p>
              </div>

              {/* Call to action */}
              <motion.button 
                initial={isDesktop ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={isDesktop ? { scale: 1.05 } : {}}
                whileTap={isDesktop ? { scale: 0.95 } : {}}
                onClick={handleWhatsAppRedirect} 
                className="bg-[#FFB400] hover:bg-[#e6a200] text-[#1D3557] font-bold py-3.5 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg w-full sm:w-auto"
              >
                File Now
              </motion.button>
            </motion.div>

            {/* Right Content - Visual/Image */}
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] hidden lg:flex justify-center lg:justify-end items-end mt-4 lg:mt-0">
              {/* Image of smiling woman */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex justify-center lg:justify-end items-end overflow-visible"
              >
                 <img 
                    src={heroImage} 
                    alt="Professional Indian Woman Filing Taxes"
                    className="object-contain h-full w-auto max-w-full mix-blend-darken scale-110 origin-bottom right-0 absolute"
                 />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-6 md:py-8 relative hidden md:block">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 md:mb-4">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-700 uppercase tracking-widest">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            {/* Card 1: Trusted */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-[#f2744c] flex flex-col items-center justify-center text-white mb-8 border-4 border-white shadow-[0_0_0_2px_#51cdc4_inset] overflow-hidden relative">
                <div className="absolute inset-0 bg-[#ffcc00]"></div>
                <div className="relative z-10 flex flex-col items-center mt-2">
                  <Users className="w-16 h-16 mb-1 text-black" strokeWidth={1.5} />
                  <span className="text-2xl font-black text-black">1M+</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-slate-800 uppercase tracking-widest mb-4">Trusted</h3>
              <div className="w-12 h-1 bg-[#c9eef1] mb-6"></div>
              <p className="text-slate-800 font-semibold text-sm sm:text-base leading-relaxed">
                Over 1 Million customers in India choose Online ITR Filing every year for seamless filing.
              </p>
            </div>

            {/* Card 2: Experience */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-[#c1ece2] flex flex-col items-center justify-center text-black mb-8 border-4 border-white shadow-[0_0_0_2px_#51cdc4_inset] overflow-hidden relative">
                <div className="absolute inset-0 bg-[#fd9b6b]"></div>
                <div className="relative z-10 flex flex-col items-center mt-2">
                  <FileText className="w-14 h-14 mb-2 text-black" strokeWidth={1.5} />
                  <span className="text-2xl font-black text-black">500,000+</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-slate-800 uppercase tracking-widest mb-4">Experience</h3>
              <div className="w-12 h-1 bg-[#ffd32e] mb-6"></div>
              <p className="text-slate-800 font-semibold text-sm sm:text-base leading-relaxed">
                We've helped users submit more than 500,000 tax returns accurately.
              </p>
            </div>

            {/* Card 3: Recognised */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-[#e4e5e7] flex flex-col items-center justify-center text-black mb-8 border-4 border-white shadow-[0_0_0_2px_#51cdc4_inset] overflow-hidden relative">
                 <div className="absolute inset-0 bg-[#51cdc4]"></div>
                 <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center bg-transparent mt-2">
                      <ShieldCheck className="w-8 h-8 mr-1 text-black" fill="black" stroke="white" strokeWidth={1} />
                      <span className="font-bold text-xl leading-tight text-black">Govt<br />Auth</span>
                    </div>
                 </div>
              </div>
              <h3 className="text-xl font-light text-slate-800 uppercase tracking-widest mb-4">Recognised</h3>
              <div className="w-12 h-1 bg-[#f2744c] mb-6"></div>
              <p className="text-slate-800 font-semibold text-sm sm:text-base leading-relaxed">
                Our tax software is fully trusted, guaranteeing a smooth and stress-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-6 md:py-8 border-b border-slate-100 hidden md:block">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 md:mb-4">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-700 uppercase tracking-widest">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-shadow border border-slate-50 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center bg-[#ffcc00] mb-8 relative">
                <Clock className="w-16 h-16 text-slate-800" strokeWidth={1} />
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 border-2 border-slate-800 shadow-sm">
                   <CheckCircle2 className="w-5 h-5 text-slate-800" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-light text-slate-800 uppercase tracking-widest mb-4">Simple Financial<br/>Management</h3>
              <div className="w-8 h-1 bg-[#f07b5a] mb-6"></div>
              <p className="text-slate-800 font-semibold text-sm leading-relaxed">
                Enjoy a real-time view on income and expenses for a more accurate overview of your finances.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-shadow border border-slate-50 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center bg-[#c9eef1] mb-8 relative">
                <FileCheck className="w-16 h-16 text-slate-800" strokeWidth={1} />
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 border-2 border-slate-800 shadow-sm">
                   <CheckCircle2 className="w-5 h-5 text-slate-800" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-light text-slate-800 uppercase tracking-widest mb-4">Easy Tax<br/>Filing</h3>
              <div className="w-8 h-1 bg-[#f07b5a] mb-6"></div>
              <p className="text-slate-800 font-semibold text-sm leading-relaxed">
                Designed for everyone, our tax software simplifies tax returns, saving you time and reducing errors.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-shadow border border-slate-50 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center bg-[#c1ece2] mb-8">
                <Calculator className="w-16 h-16 text-slate-800" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-light text-slate-800 uppercase tracking-widest mb-4">Automatic And<br/>Accurate<br/>Calculations</h3>
              <div className="w-8 h-1 bg-[#f07b5a] mb-6"></div>
              <p className="text-slate-800 font-semibold text-sm leading-relaxed">
                The software calculates your tax immediately, meaning you know exactly how much to set aside.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-shadow border border-slate-50 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center bg-[#fd9b6b] mb-8 relative">
                <Receipt className="w-16 h-16 text-slate-800" strokeWidth={1} />
                <Scissors className="w-8 h-8 text-slate-800 absolute bottom-4 -right-1 bg-[#ffd32e]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-light text-slate-800 uppercase tracking-widest mb-4">Maximise<br/>Deductions</h3>
              <div className="w-8 h-1 bg-[#f07b5a] mb-6"></div>
              <p className="text-slate-800 font-semibold text-sm leading-relaxed">
                With our tax-saving tips you can reduce your tax liability which is something most software doesn't provide.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-shadow border border-slate-50 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center bg-[#e4e5e7] mb-8">
                <Headset className="w-16 h-16 text-slate-800" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-light text-slate-800 uppercase tracking-widest mb-4">Expert<br/>Support</h3>
              <div className="w-8 h-1 bg-[#f07b5a] mb-6"></div>
              <p className="text-slate-800 font-semibold text-sm leading-relaxed">
                Our India-based team of former tax professionals are always on hand to help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (ITR Filing) */}
      <section id="itr-filing" className="py-6 md:py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
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
                <span className="text-slate-500 text-sm line-through ml-2">₹999</span>
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
                <span className="text-slate-500 text-sm line-through ml-2">₹2,499</span>
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
                <span className="text-slate-500 text-sm line-through ml-2">₹3,999</span>
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
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 md:mb-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How our CA-Assisted Filing Works</h2>
            <div className="flex justify-center items-center gap-2 text-blue-700 bg-blue-50 px-5 py-2.5 rounded-full inline-flex mx-auto border border-blue-200 shadow-sm">
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
      <section id="gst-services" className="py-6 md:py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
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
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 md:mb-4">
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
      <section id="company-registration" className="py-6 md:py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
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
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">DIN & DSC for 2 Directors</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Drafting of MOA & AOA</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">PAN, TAN & Bank Account Setup</span></li>
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
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">DIN & DSC for 2 Partners</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">LLP Agreement Drafting</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Certificate of Incorporation</span></li>
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
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Comprehensive Name Search</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Application Filing (TM-A)</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">Use ™ Symbol Instantly</span></li>
              </ul>
              <button onClick={handleWhatsAppRedirect} className="w-full bg-teal-50 text-teal-700 font-bold py-3 rounded-lg hover:bg-teal-600 hover:text-white transition">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tax & Financial Tools Section */}
      <section id="tax-tools" className="py-12 md:py-16 bg-slate-900 text-white border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-3xl font-bold mb-4">Free Financial & Tax Tools</h2>
            <p className="text-slate-500 text-lg">Smart calculators to help you plan your taxes, investments, and business.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <button 
              onClick={() => setActiveCalculator(activeCalculator === 'income-tax' ? null : 'income-tax')}
              className={`text-left bg-slate-800 p-6 rounded-xl border ${activeCalculator === 'income-tax' ? 'border-green-500 bg-white' : 'border-slate-200'} hover:border-green-500 hover:bg-slate-800/80 transition group block`}
            >
              <div className={`w-12 h-12 bg-slate-700 text-slate-100 rounded-lg flex items-center justify-center mb-4 transition-transform ${activeCalculator === 'income-tax' ? 'text-amber-600 scale-110' : 'text-amber-600 group-hover:scale-110'}`}>
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 transition-colors ${activeCalculator === 'income-tax' ? 'text-amber-700' : 'text-slate-100 group-hover:text-amber-400'}`}>Income Tax Calculator</h3>
              <p className="text-sm text-slate-500">Compare Old vs New regime and find out which saves you more tax.</p>
            </button>

            <button 
              onClick={() => setActiveCalculator(activeCalculator === 'hra' ? null : 'hra')}
              className={`text-left bg-slate-800 p-6 rounded-xl border ${activeCalculator === 'hra' ? 'border-green-500 bg-white' : 'border-slate-200'} hover:border-green-500 hover:bg-slate-800/80 transition group block`}
            >
              <div className={`w-12 h-12 bg-slate-700 text-slate-100 rounded-lg flex items-center justify-center mb-4 transition-transform ${activeCalculator === 'hra' ? 'text-amber-600 scale-110' : 'text-amber-600 group-hover:scale-110'}`}>
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 transition-colors ${activeCalculator === 'hra' ? 'text-amber-700' : 'text-slate-100 group-hover:text-amber-400'}`}>HRA Calculator</h3>
              <p className="text-sm text-slate-500">Calculate your House Rent Allowance exemption exactly per IT rules.</p>
            </button>

            <button 
              onClick={() => setActiveCalculator(activeCalculator === 'gst' ? null : 'gst')}
              className={`text-left bg-slate-800 p-6 rounded-xl border ${activeCalculator === 'gst' ? 'border-green-500 bg-white' : 'border-slate-200'} hover:border-green-500 hover:bg-slate-800/80 transition group block`}
            >
              <div className={`w-12 h-12 bg-slate-700 text-slate-100 rounded-lg flex items-center justify-center mb-4 transition-transform ${activeCalculator === 'gst' ? 'text-amber-600 scale-110' : 'text-amber-600 group-hover:scale-110'}`}>
                <Percent className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 transition-colors ${activeCalculator === 'gst' ? 'text-amber-700' : 'text-slate-100 group-hover:text-amber-400'}`}>GST Calculator</h3>
              <p className="text-sm text-slate-500">Easily calculate GST inclusive and exclusive prices for your invoices.</p>
            </button>

            <button 
              onClick={() => setActiveCalculator(activeCalculator === 'sip' ? null : 'sip')}
              className={`text-left bg-slate-800 p-6 rounded-xl border ${activeCalculator === 'sip' ? 'border-green-500 bg-white' : 'border-slate-200'} hover:border-green-500 hover:bg-slate-800/80 transition group block`}
            >
              <div className={`w-12 h-12 bg-slate-700 text-slate-100 rounded-lg flex items-center justify-center mb-4 transition-transform ${activeCalculator === 'sip' ? 'text-amber-600 scale-110' : 'text-amber-600 group-hover:scale-110'}`}>
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 transition-colors ${activeCalculator === 'sip' ? 'text-amber-700' : 'text-slate-100 group-hover:text-amber-400'}`}>SIP Calculator</h3>
              <p className="text-sm text-slate-500">Plan your wealth creation through compounding over the long term.</p>
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
      <section itemScope itemType="https://schema.org/FAQPage" className="py-6 md:py-8 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Common questions about online ITR filing, GST registration, and company compliance in India.</p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 itemProp="name" className="text-lg font-bold text-slate-900 mb-2">How to file ITR online in India?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-600">You can easily file your Income Tax Return (ITR) online in India through the Online ITR Filing platform. Just select your applicable plan, upload your Form 16, and our expert CAs will prepare and e-file your ITR directly with the Income Tax Department to ensure maximum tax refund.</p>
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
                <p itemProp="text" className="text-slate-600">To register a Private Limited Company, you need a minimum of 2 directors and 2 shareholders. Documents required include PAN cards, Aadhaar cards, bank statements of directors, and a utility bill for the registered office address. Online ITR Filing handles the DIN, DSC, name approval, MOA, and AOA drafting process online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Trust Section */}
      <section className="py-6 md:py-8 bg-slate-50 border-t-4 border-amber-500 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center justify-center gap-1 mb-4">
              <Star className="w-6 h-6 text-amber-700 fill-amber-400" />
              <Star className="w-6 h-6 text-amber-700 fill-amber-400" />
              <Star className="w-6 h-6 text-amber-700 fill-amber-400" />
              <Star className="w-6 h-6 text-amber-700 fill-amber-400" />
              <Star className="w-6 h-6 text-amber-700 fill-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Millions of Indians</h2>
            <p className="text-slate-600 text-lg">For over a decade, we've been helping individuals and businesses stay compliant.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="flex text-amber-700 mb-4">
                <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 italic mb-6">"I've been using Online ITR Filing since 2016. Their CA team is phenomenal. They spotted deductions I didn't even know existed. Highly professional and deeply knowledgeable."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">RS</div>
                <div>
                  <h4 className="font-bold text-slate-900">Rahul Sharma</h4>
                  <p className="text-xs text-slate-500">IT Professional, Bangalore</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="flex text-amber-700 mb-4">
                <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 italic mb-6">"As a stock trader, calculating Capital Gains is a nightmare. The CA handled my entire portfolio perfectly directly from my broker statements. Total peace of mind."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">AP</div>
                <div>
                  <h4 className="font-bold text-slate-900">Ankit Patel</h4>
                  <p className="text-xs text-slate-500">Stock Trader, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="flex text-amber-700 mb-4">
                <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 italic mb-6">"Handed over our firm's GST filing to them 3 years ago and never looked back. 100% compliance, zero penalties, and the support team is always reachable via phone."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">MD</div>
                <div>
                  <h4 className="font-bold text-slate-900">Meera Das</h4>
                  <p className="text-xs text-slate-500">Agency Owner, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form & CTA Section */}
      <section className="bg-green-700 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-amber-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-slate-900/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* CTA Text */}
            <div className="text-left text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Have Questions? Let's Talk!</h2>
              <p className="text-green-100 text-lg max-w-xl">
                Get connected with a dedicated CA today and ensure you get the right advice for your business and personal taxes. Share your details and we will get back to you within 24 hours.
              </p>
              
              <div className="flex gap-4 items-center">
                <button onClick={handleWhatsAppRedirect} className="bg-white text-amber-700 font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-slate-50 transition transform hover:-translate-y-1">
                  Chat on WhatsApp
                </button>
                <a href="tel:9982504000" className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg backdrop-blur-sm transition border border-white/20">
                  Call Us
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Callback</h3>
               {isFormSubmitted ? (
                 <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center space-y-4">
                   <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600">
                     <CheckCircle2 className="w-8 h-8" />
                   </div>
                   <h4 className="text-xl font-bold text-amber-800">Thank You!</h4>
                   <p className="text-amber-700 text-sm">
                     We have received your request. Our expert will call you shortly.
                   </p>
                   <button 
                     onClick={() => setIsFormSubmitted(false)}
                     className="mt-4 text-amber-600 hover:text-amber-800 font-semibold text-sm transition"
                   >
                     Submit Another Request
                   </button>
                 </div>
               ) : (
                 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsFormSubmitted(true); }}>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                     <input type="text" required placeholder="John Doe" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
                     <input type="tel" required placeholder="+91 9876543210" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                     <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition">
                       <option>ITR Filing</option>
                       <option>GST Registration & Filing</option>
                       <option>Company Registration</option>
                       <option>Tax Planning Consultation</option>
                       <option>Other</option>
                     </select>
                   </div>
                   <button type="submit" className="w-full bg-[#1D3557] hover:bg-[#162a45] text-white font-bold py-3 rounded-lg transition-colors mt-2">
                     Submit Request
                   </button>
                 </form>
               )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
