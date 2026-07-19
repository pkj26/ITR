import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, User, ArrowRight, Search, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Income Tax', 'GST', 'Tax Planning', 'Business Setup'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.keywords.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="flex-grow bg-slate-50 py-12 md:py-16">
      <SEO 
        title="Expert Tax & GST Blogs: Indian Filing Guides | KarSeva"
        description="Read the latest professional tax-saving guides, GST return checklists, ITR online filing articles, and startup advice written by Indian Chartered Accountants."
        url="https://karseva.in/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H1 Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#1D3557]/10 text-[#1D3557] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tax, GST & Startup Registration Guides
          </h1>
          <p className="text-lg text-slate-600">
            Latest tax-saving articles, legal filing timelines, and step-by-step business compliance insights written by experienced Chartered Accountants.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Search articles, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1D3557] focus:border-[#1D3557] text-slate-700 placeholder-slate-400 text-sm transition"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#1D3557] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Post List */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual Header card */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md">
                      {post.category}
                    </span>
                    <span className="flex items-center text-xs text-slate-500 gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 hover:text-[#1D3557] transition leading-tight">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Author / Date info footer of card */}
                  <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs uppercase">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-900 leading-tight">{post.author}</span>
                        <span className="block text-[10px] text-slate-500">{post.authorRole}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-slate-400 gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishDate}
                    </div>
                  </div>
                </div>

                {/* Read Article Ribbon */}
                <Link 
                  to={`/blog/${post.slug}`}
                  className="bg-slate-50 hover:bg-[#1D3557] hover:text-white border-t border-slate-100 py-3.5 px-6 text-xs font-bold text-slate-700 flex items-center justify-between transition-all duration-200"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-700">No Articles Found</h3>
            <p className="text-slate-500 text-sm mt-1">Try refining your search query or selecting another category.</p>
          </div>
        )}

        {/* Call to Action Banner at bottom of listing */}
        <div className="bg-[#1D3557] rounded-2xl p-8 md:p-12 text-center text-white mt-16 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-900 opacity-20 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">Need Immediate Tax Assistance?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm md:text-base">
            Don't get lost in complex rules. Our verified Chartered Accountants are ready to file your Income Tax Return and manage GST registrations with 100% accuracy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/pricing" 
              className="bg-[#FFB400] text-[#1D3557] px-8 py-3 rounded-lg font-bold hover:bg-[#e6a200] transition text-sm shadow-md"
            >
              Check Pricing Plans
            </Link>
            <a 
              href="https://wa.me/919783699635?text=Hello%20KarSeva!%20I%20want%20to%20file%20my%20ITR%20with%20your%20CA%20experts."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-lg font-bold transition text-sm flex items-center justify-center gap-2"
            >
              Chat with Tax Expert
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
