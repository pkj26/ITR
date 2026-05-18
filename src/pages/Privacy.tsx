import React from 'react';

export default function Privacy() {
  return (
    <main className="flex-grow bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        <p><strong>Last Updated:</strong> May 2026</p>
        <p>Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal and financial information.</p>
        
        <h2>1. Information We Collect</h2>
        <p>We collect personal information such as your name, email, phone number, PAN, Aadhaar, bank statements, and salary slips solely for the purpose of computing and filing your taxes or fulfilling business compliances.</p>
        
        <h2>2. Use of Information</h2>
        <p>Your data is used strictly to provide the requested services. We do not sell, rent, or trade your personal information to third parties.</p>
        
        <h2>3. Data Security</h2>
        <p>We implement industry-standard encryption and secure server infrastructure to ensure your data is protected against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h2>4. Third-Party Sharing</h2>
        <p>We only share your information with government entities (like the Income Tax Department or GST portal) as strictly required to execute the services you have paid for.</p>
      </div>
    </main>
  );
}
