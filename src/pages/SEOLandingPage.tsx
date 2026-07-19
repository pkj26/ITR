import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { seoPagesData, SEOPage } from '../data/seoPages';
import SEO from '../components/SEO';
import Home from './Home';
import { ChevronRight, Phone, CheckCircle2, MessageSquare, ArrowRight, MapPin, Mail, Calendar } from 'lucide-react';

export default function SEOLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // If no slug or slug is not in our SEO records, fall back to rendering Home
  const pageData = slug ? seoPagesData[slug] : null;

  useEffect(() => {
    // Scroll to top on slug change
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [slug]);

  if (!pageData) {
    return <Home />;
  }

  // Generate unified Service and FAQPage schema in Google's preferred @graph format
  const combinedSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://karseva.in/${pageData.slug}#service`,
        "name": pageData.pageTitle,
        "description": pageData.metaDescription,
        "provider": {
          "@type": "Organization",
          "name": "KarSeva",
          "url": "https://karseva.in",
          "logo": "https://karseva.in/logo.png"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "category": pageData.pageTitle.toLowerCase().includes("gst") 
          ? "Tax Compliance" 
          : pageData.pageTitle.toLowerCase().includes("company") || pageData.pageTitle.toLowerCase().includes("registration")
          ? "Business Setup" 
          : "Tax Consultation"
      },
      {
        "@type": "FAQPage",
        "@id": `https://karseva.in/${pageData.slug}#faq`,
        "mainEntity": pageData.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  });

  // Dynamic organic interlinking: Get 3 other related SEO pages
  const allKeys = Object.keys(seoPagesData);
  const currentIndex = allKeys.indexOf(pageData.slug);
  const relatedPages: SEOPage[] = [];
  
  for (let i = 1; i <= 3; i++) {
    const nextIndex = (currentIndex + i) % allKeys.length;
    const key = allKeys[nextIndex];
    if (key && key !== pageData.slug) {
      relatedPages.push(seoPagesData[key]);
    }
  }

  const handleWhatsAppRedirect = (serviceName: string) => {
    const text = `Hello KarSeva! I am interested in your "${serviceName}" services. Please share the details and required documents to get started.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919783699635?text=${encodedText}`, '_blank');
  };

  return (
    <main className="flex-grow bg-slate-50 min-h-screen">
      {/* Dynamic SEO Tags */}
      <SEO 
        title={pageData.metaTitle}
        description={pageData.metaDescription}
        keywords={`${pageData.pageTitle}, KarSeva, tax consultant, GST registration, ITR filing, business registration`}
        url={`https://karseva.in/${pageData.slug}`}
        schema={combinedSchema}
      />

      {/* Hero Banner Area */}
      <div className="bg-gradient-to-r from-[#1D3557] to-[#2E4A72] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation - SEO compliant */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 mb-6 bg-white/5 py-2 px-4 rounded-full w-fit">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#FFB400] font-semibold">{pageData.pageTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
                {pageData.pageTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
                {pageData.introduction}
              </p>
            </div>
            
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center">
              <h3 className="text-xl font-bold text-[#FFB400] mb-2">Need CA Assistance?</h3>
              <p className="text-xs text-slate-300 mb-4">Talk directly to our expert Chartered Accountants located in Vidyadhar Nagar, Jaipur.</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleWhatsAppRedirect(pageData.pageTitle)}
                  className="bg-[#FFB400] text-[#1D3557] py-2.5 px-4 rounded-lg font-bold hover:bg-[#e6a200] transition flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </button>
                <a 
                  href="tel:9783699635" 
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2.5 px-4 rounded-lg font-bold transition flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" /> Call +91 9783699635
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content & Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Body Content */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="prose prose-slate max-w-none">
              
              {/* Dynamic Paragraphs */}
              {pageData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                  {p}
                </p>
              ))}

              {/* Bullet Points with check icons */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-6 border-l-4 border-[#FFB400] pl-3">
                {pageData.bulletTitle}
              </h2>
              <ul className="space-y-3 mb-10 pl-0 list-none">
                {pageData.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* FAQ Section */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-6 border-l-4 border-[#FFB400] pl-3">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-4 mb-8">
                {pageData.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-start gap-2.5">
                      <span className="text-[#FFB400] font-black">Q:</span>
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Direct CTA Panel inside the Article */}
            <div className="mt-10 bg-gradient-to-br from-[#1D3557] to-[#0F1E31] p-6 sm:p-8 rounded-xl text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-[#FFB400]">Get Started in Minutes</h3>
                <p className="text-sm text-slate-300 mt-1">Our certified Chartered Accountants are ready to process your files securely.</p>
              </div>
              <button 
                onClick={() => handleWhatsAppRedirect(pageData.pageTitle)}
                className="bg-[#FFB400] hover:bg-[#e6a200] text-[#1D3557] font-bold px-6 py-3 rounded-lg text-sm transition shrink-0 shadow-md flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                Get Online Assistance <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Business NAP (Name, Address, Phone) Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Local CA Office</h3>
              <div className="space-y-4 text-slate-600 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFB400] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">KarSeva Office</strong>
                    F51 Alankar Plaza, Vidyadhar Nagar,<br />
                    Jaipur, Rajasthan 302039
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFB400] shrink-0" />
                  <div>
                    <a href="tel:9783699635" className="hover:text-[#FFB400] transition font-medium text-slate-900 block">+91 9783699635</a>
                    <a href="tel:9521555557" className="hover:text-[#FFB400] transition font-medium text-slate-900 block">+91 9521555557</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FFB400] shrink-0" />
                  <a href="mailto:Karsevaa2026@gmail.com" className="hover:text-[#FFB400] transition text-slate-900 truncate">Karsevaa2026@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#FFB400] shrink-0" />
                  <span>Mon - Sat, 10 AM - 7 PM</span>
                </div>
              </div>
            </div>

            {/* Organic Dynamic Interlinks Sidebar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Related Tax Services</h3>
              <ul className="space-y-3.5 list-none pl-0">
                {relatedPages.map((page, idx) => (
                  <li key={idx} className="p-0">
                    <Link 
                      to={`/${page.slug}`} 
                      className="group flex items-center justify-between text-slate-600 hover:text-[#1D3557] font-medium text-sm transition"
                    >
                      <span className="group-hover:translate-x-1 transition-transform truncate pr-2">
                        {page.pageTitle}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-[#FFB400] transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Pages Links */}
            <div className="bg-gradient-to-br from-[#1D3557] to-[#162A45] text-slate-300 p-6 rounded-2xl text-center">
              <h4 className="text-[#FFB400] font-bold mb-2 text-base">Quick Links</h4>
              <p className="text-xs text-slate-400 mb-4">View our pricing models and learn about our 10-year journey of financial trust across India.</p>
              <div className="flex justify-center gap-3">
                <Link to="/pricing" className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-3.5 py-1.5 rounded transition">
                  Pricing Plans
                </Link>
                <Link to="/about-us" className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-3.5 py-1.5 rounded transition">
                  About Us
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
