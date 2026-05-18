import React from 'react';

export default function AboutUs() {
  return (
    <main className="flex-grow bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 blur-none">About TaxServe India</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-6">
            TaxServe India was founded with a single mission: to provide the best and most affordable tax, compliance, and legal services to Indians. For over a decade, we have been at the forefront of digital taxation, assisting millions of individuals and thousands of businesses in navigating the complex world of Indian taxation.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Vision</h2>
          <p className="text-slate-600 mb-6">
            To build a financially compliant India by making tax filing and business registrations simple, accessible, and transparent for everyone, everywhere.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li><strong>Expert CA Team:</strong> Our core team consists of highly qualified Chartered Accountants and tax experts.</li>
            <li><strong>10+ Years of Trust:</strong> We bring over a decade of hands-on experience in dealing securely with financial data.</li>
            <li><strong>Maximum Refund:</strong> Our experts ensure you claim every deduction you are legally entitled to.</li>
            <li><strong>Data Security:</strong> We use bank-grade encryption to ensure your PAN, Aadhaar, and financial data are always secure.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
