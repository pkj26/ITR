import React, { useEffect, useState } from 'react';
import { CheckCircle2, ShieldCheck, Phone, Mail, Award, X, ChevronDown, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';

const plansSalaried = [
  {
    name: 'DIY E-Filing',
    price: 'Free',
    desc: 'Self-file your standard income tax return.',
    features: [
      'File Single Form 16',
      'Basic Salary & Interest Income',
      'Standard Deductions',
      'Email Support'
    ],
    notIncluded: ['CA Assistance', 'Capital Gains', 'Notice Handling'],
    highlight: false,
    cta: 'Start Free Filing'
  },
  {
    name: 'Salaried Basic',
    price: '₹799',
    desc: 'Perfect for standard salary income & single Form 16.',
    features: [
      'Dedicated Tax Expert',
      'Single Form 16',
      'Salary + Bank Interest',
      'Standard Deductions (80C, 80D)',
      'Phone & Email Support'
    ],
    notIncluded: ['Capital Gains', 'Notice Handling'],
    highlight: false,
    cta: 'Buy Plan'
  },
  {
    name: 'Salaried Expert',
    price: '₹1,499',
    desc: 'For multiple employers, House property & deductions.',
    features: [
      'Dedicated CA Assigned',
      'Multiple Form 16',
      'Salary + House Property',
      'HRA & All Deductions Optimized',
      'Prioritized Support'
    ],
    notIncluded: ['Notice Handling'],
    highlight: true,
    cta: 'Buy Plan',
    recommended: true
  },
  {
    name: 'Capital Gains',
    price: '₹2,999',
    desc: 'For Stocks, Mutual Funds, and Crypto investors.',
    features: [
      'Dedicated CA Assigned',
      'All Salaried Incomes',
      'Stocks & Mutual Funds (LTCG/STCG)',
      'Crypto & Forex Trading',
      'Notice Handling Support'
    ],
    notIncluded: [],
    highlight: false,
    cta: 'Buy Plan'
  }
];

const plansBusiness = [
  {
    name: 'Freelancer / Professional',
    price: '₹3,499',
    desc: 'For independent professionals & freelancers.',
    features: [
      'Dedicated CA Assigned',
      'Presumptive Taxation (44ADA)',
      'Income from Profession',
      'Expense Optimization',
      'Year-round Tax Advisory'
    ],
    highlight: false,
    cta: 'Buy Plan'
  },
  {
    name: 'Small Business',
    price: '₹4,999',
    desc: 'For retail & small trading businesses.',
    features: [
      'Dedicated CA Assigned',
      'Presumptive Business (44AD)',
      'Turnover < ₹2 Crores',
      'GST Reconciliation',
      'Notice Handling Support'
    ],
    highlight: true,
    cta: 'Buy Plan',
    recommended: true
  },
  {
    name: 'Corporate Compliance',
    price: 'Custom',
    desc: 'End-to-end accounting & compliances for Pvt Ltd.',
    features: [
      'Dedicated CA Assigned',
      'Accounting & Bookkeeping',
      'Monthly GST & TDS Returns',
      'Payroll & ROC Compliances',
      'Dedicated Account Manager'
    ],
    highlight: false,
    cta: 'Get a Quote'
  }
];

const faqs = [
  {
    q: 'Do I get a dedicated CA for my return?',
    a: 'Yes, for all paid plans, a dedicated Chartered Accountant or Tax Expert will be assigned to manually review, optimize, and file your tax return.'
  },
  {
    q: 'Is my data secure?',
    a: 'We use bank-grade 256-bit encryption. Your financial data is strictly confidential and protected in secure cloud servers.'
  },
  {
    q: 'What if I receive an IT Notice?',
    a: 'If you file through our expert plans, our CAs will assist you in responding to standard intimations and notices at no extra cost.'
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No! The prices listed above are completely transparent and final for the services mentioned.'
  }
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'salaried' | 'business'>('salaried');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = (planName: string) => {
    const text = encodeURIComponent(`Hi, I am interested in the ${planName} plan. Please help me proceed.`);
    window.open(`https://wa.me/919982504000?text=${text}`, '_blank');
  };

  const plans = activeTab === 'salaried' ? plansSalaried : plansBusiness;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <SEO 
        title="Pricing & Tax Plans - Online ITR Filing" 
        description="Transparent and affordable pricing for CA-assisted Income Tax Filing, GST Returns, and Business Registration in India." 
      />
      
      {/* Hero Section */}
      <div className="bg-[#1D3557] relative pt-16 pb-24 overflow-hidden border-b-[8px] border-[#FFB400]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FFB400]/10 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-[rgba(255,255,255,0.1)] backdrop-blur-md text-[#FFB400] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-[0_0_0_1px_rgba(255,180,0,0.3)_inset] mb-6">
              Expert Tax Plans
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Simple, transparent pricing. <br className="hidden md:block" />
              <span className="text-[#FFB400]">Expert tax filing.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              No hidden fees. Maximize your refunds with India's most trusted CAs. Choose the plan that fits you best.
            </p>
            
            {/* Toggle Switch */}
            <div className="inline-flex bg-[#162a45] rounded-full p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] relative z-20">
              <button 
                onClick={() => setActiveTab('salaried')}
                className={`relative px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${activeTab === 'salaried' ? 'text-[#1D3557] shadow-lg' : 'text-slate-300 hover:text-white'}`}
              >
                {activeTab === 'salaried' && (
                  <motion.div layoutId="activeTabBadge" className="absolute inset-0 bg-[#FFB400] rounded-full" />
                )}
                <span className="relative z-10">Individuals & Salaried</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('business')}
                className={`relative px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${activeTab === 'business' ? 'text-[#1D3557] shadow-lg' : 'text-slate-300 hover:text-white'}`}
              >
                {activeTab === 'business' && (
                  <motion.div layoutId="activeTabBadge" className="absolute inset-0 bg-[#FFB400] rounded-full" />
                )}
                 <span className="relative z-10">Business & Professionals</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className={`grid gap-8 ${plans.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} justify-center`}>
          <AnimatePresence mode="popLayout">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`bg-white rounded-2xl flex flex-col relative transition-all duration-300 ${
                  plan.highlight 
                  ? 'shadow-[0_20px_40px_-15px_rgba(29,53,87,0.3)] border-2 border-[#1D3557] transform md:-translate-y-4' 
                  : 'shadow-lg border border-slate-200 hover:shadow-xl'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#FFB400] text-[#1D3557] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}
                
                <div className={`p-8 border-b ${plan.highlight ? 'border-[#1D3557]/10 bg-slate-50 rounded-t-2xl' : 'border-slate-100'}`}>
                  <h3 className="text-xl font-bold text-[#1D3557] mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed min-h-[40px] mb-6">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#1D3557]">{plan.price}</span>
                    {plan.price !== 'Free' && plan.price !== 'Custom' && <span className="text-slate-400 font-medium">/ year</span>}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 ${plan.highlight ? 'bg-[#FFB400]/20 text-[#FFB400]' : 'bg-green-100 text-green-600'}`}>
                           <Check className={`w-4 h-4 ${plan.highlight ? 'text-[#b37e00]' : 'text-green-600'}`} strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                    {(plan as any).notIncluded && (plan as any).notIncluded.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 opacity-50">
                        <div className="mt-0.5 rounded-full p-0.5 bg-slate-100 text-slate-400">
                           <X className="w-4 h-4 text-slate-400" strokeWidth={3} />
                        </div>
                        <span className="text-slate-500 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleWhatsApp(plan.name)}
                    className={`w-full py-4 px-6 rounded-full font-bold text-center transition-all duration-300 ${
                      plan.highlight
                      ? 'bg-[#1D3557] hover:bg-[#162a45] text-white shadow-lg shadow-[#1D3557]/30'
                      : 'bg-slate-100 hover:bg-slate-200 text-[#1D3557]'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Feature Compare Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
         <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-extrabold text-[#1D3557] tracking-tight mb-4">Why file with our experts?</h2>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 We take the stress out of tax season. Our certified CAs ensure maximum deductions and absolute compliance.
               </p>
               
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-[#1D3557] text-lg">100% Tax Compliant</h4>
                     <p className="text-slate-500 text-sm mt-1">Every return is manually reviewed by a CA before filing.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                     <Award className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-[#1D3557] text-lg">Maximum Refunds</h4>
                     <p className="text-slate-500 text-sm mt-1">We identify all applicable deductions (80C, 80D, HRA) to maximize your refund.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                     <Phone className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-[#1D3557] text-lg">Direct CA Support</h4>
                     <p className="text-slate-500 text-sm mt-1">Call or WhatsApp your CA directly for any queries.</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1D3557] to-blue-900 rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
                <div className="bg-[#1D3557] rounded-3xl p-8 relative shadow-xl text-white">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-[#FFB400] w-8 h-8" /> 
                    The OnlineITR Promise
                  </h3>
                  <ul className="space-y-4 font-medium text-slate-300">
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FFB400]"></div> Assigned dedicated expert within 5 mins</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FFB400]"></div> Completely paperless secure digital flow</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FFB400]"></div> Review your return before we hit file</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FFB400]"></div> Post-filing ITR-V & Intimation tracking</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FFB400]"></div> Free assistance on basic notices</li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.1)] text-center">
                    <div className="text-4xl font-black text-[#FFB400] tracking-tight">1M+</div>
                    <div className="text-sm font-medium tracking-widest text-white uppercase mt-1">Tax Returns Filed</div>
                  </div>
                </div>
             </div>
           </div>
         </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-center text-[#1D3557] tracking-tight mb-10">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white shadow-md border-transparent' : 'bg-transparent'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openFaq === index ? 'text-[#1D3557]' : 'text-slate-700'}`}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
