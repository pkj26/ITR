import React from 'react';

export default function Disclaimer() {
  return (
    <main className="flex-grow bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Disclaimer</h1>
        
        <p>
          Online ITR Filing is a private platform connecting taxpayers with chartered accountants and legal professionals. We are <strong>not</strong> an official website of the Income Tax Department of India, nor are we affiliated directly with the Government of India.
        </p>
        
        <p>
          The information, calculators, and tools provided on this website are for general informational purposes only and do not constitute legal or financial advice. While we make every effort to ensure the accuracy of calculators and content, tax laws are subject to frequent changes.
        </p>

        <p>
          By using our services, you acknowledge that final approval and processing of tax returns, refunds, and company registrations rest solely with the respective government bodies (CBDT, CBIC, MCA, etc.), and Online ITR Filing cannot guarantee a specific timeframe or outcome for government processes.
        </p>
      </div>
    </main>
  );
}
