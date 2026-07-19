import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="flex-grow bg-slate-50 py-16 text-center">
        <SEO 
          title="Article Not Found | KarSeva"
          description="The requested tax or GST article could not be found. Return to our blog page to read latest tax insights."
          url="https://karseva.in/blog"
        />
        <div className="max-w-md mx-auto px-4">
          <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Article Not Found</h1>
          <p className="text-slate-500 text-sm mb-6">Sorry, the blog post you are looking for does not exist or has been moved.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-[#1D3557] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog List
          </Link>
        </div>
      </main>
    );
  }

  const handleWhatsAppRedirect = () => {
    const text = `Hello KarSeva! I read your article "${post.title}" and would like to file my ITR with your CA experts. Please guide me on plans and documents needed.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919783699635?text=${encodedText}`, '_blank');
  };

  // Structured schema for Google rich snippets (BlogPosting Schema)
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://karseva.in/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": "2026-07-15T10:00:00+05:30", // Fallback or dynamic
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "KarSeva",
      "logo": {
        "@type": "ImageObject",
        "url": "https://karseva.in/logo.png"
      }
    }
  });

  return (
    <main className="flex-grow bg-slate-50 py-12 md:py-16">
      {/* Complete, clean SEO implementation with unique title & meta descriptions */}
      <SEO 
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        url={`https://karseva.in/blog/${post.slug}`}
        schema={articleSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-[#1D3557] mb-8 group transition"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </Link>

        {/* Article Container */}
        <article className="bg-white rounded-2xl shadow-sm border border-slate-150 overflow-hidden">
          {/* Cover Header */}
          <div className="bg-[#1D3557] text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1D3557] to-[#1d3557]/80 z-0" />
            <div className="relative z-10">
              {/* Category */}
              <span className="inline-block bg-[#FFB400] text-[#1D3557] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4">
                {post.category}
              </span>

              {/* H1 Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 border-t border-white/10 pt-6">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-xs uppercase">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <span className="block font-medium text-white">{post.author}</span>
                    <span className="block text-xs text-slate-400">{post.authorRole}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#FFB400]" />
                  <span>{post.publishDate}</span>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FFB400]" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="p-8 md:p-12">
            <div className="prose prose-slate max-w-none">
              {post.sections.map((section, idx) => {
                switch (section.type) {
                  case 'h2':
                    return (
                      <h2 
                        key={idx} 
                        className="text-2xl md:text-3xl font-bold text-slate-950 mt-10 mb-4 pb-2 border-b border-slate-100"
                      >
                        {section.text}
                      </h2>
                    );
                  case 'h3':
                    return (
                      <h3 
                        key={idx} 
                        className="text-xl md:text-2xl font-semibold text-slate-900 mt-8 mb-3"
                      >
                        {section.text}
                      </h3>
                    );
                  case 'list':
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2.5 my-6 text-slate-700 leading-relaxed text-base">
                        {(section.text as string[]).map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    );
                  case 'note':
                    const isDisclaimer = typeof section.text === 'string' && (
                      section.text.toLowerCase().includes('disclaimer') || 
                      section.text.toLowerCase().includes('general information') || 
                      section.text.toLowerCase().includes('tax advice')
                    );
                    return (
                      <div 
                        key={idx} 
                        className={`${isDisclaimer ? 'bg-amber-50/50 border-amber-500 text-slate-600' : 'bg-blue-50/70 border-blue-600 text-slate-700'} border-l-4 rounded-r-lg p-5 my-8 text-sm md:text-base leading-relaxed`}
                      >
                        <p className={`font-bold ${isDisclaimer ? 'text-amber-900' : 'text-blue-900'} mb-1 flex items-center gap-1.5`}>
                          <ShieldCheck className={`w-5 h-5 ${isDisclaimer ? 'text-amber-600' : 'text-blue-700'}`} />
                          {isDisclaimer ? 'Important Disclaimer:' : 'Expert Recommendation:'}
                        </p>
                        {section.text}
                      </div>
                    );
                  default: // paragraph
                    return (
                      <p 
                        key={idx} 
                        className="text-slate-700 text-base md:text-lg leading-relaxed mb-6"
                      >
                        {section.text}
                      </p>
                    );
                }
              })}
            </div>

            {/* In-article conversion block / CTA Button "File your ITR with KarSeva" */}
            <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl pointer-events-none" />
              <CheckCircle2 className="w-12 h-12 text-[#FFB400] mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Avoid Defective Tax Return Notices</h3>
              <p className="text-slate-600 max-w-lg mx-auto mb-6 text-sm">
                Join 1M+ Indians who trust KarSeva. File your Income Tax Return accurately with the help of dedicated Chartered Accountant advisors.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto bg-[#1D3557] hover:bg-slate-800 text-white font-extrabold px-8 py-3.5 rounded-lg transition-transform hover:scale-[1.02] text-sm shadow-sm flex items-center justify-center gap-2"
                >
                  File your ITR with KarSeva
                </button>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto text-[#1D3557] font-bold hover:underline text-sm"
                >
                  View Pricing Plans &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Share and Next Article Suggestions */}
        <div className="mt-8 flex justify-between items-center bg-white p-6 rounded-xl border border-slate-100 text-sm">
          <span className="font-medium text-slate-600">Need more compliance advice?</span>
          <Link 
            to="/blog" 
            className="text-[#1D3557] font-bold hover:underline"
          >
            Read other guides &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
