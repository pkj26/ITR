import React from 'react';

export default function Refund() {
  return (
    <main className="flex-grow bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Refund & Cancellation Policy</h1>
        <p><strong>Last Updated:</strong> May 2026</p>
        <p>At TaxServe India, we believe in complete transparency. Our refund policy ensures a fair process for all parties.</p>
        
        <h2>1. Eligibility for Refund</h2>
        <p>A full refund (minus payment gateway charges) will be initiated if a cancellation request is received before our CA experts commence the preparation of your computation or application.</p>
        <p>If the work has already commenced but filing has not occurred, a partial refund may be issued at the discretion of the management depending on the effort already expended.</p>

        <h2>2. Non-Refundable Services</h2>
        <p>No refunds will be processed once the ITR, GST return, or any other government form has been successfully filed and the Acknowledgment number (ARN) generated.</p>
        <p>Government fees paid on your behalf are strictly non-refundable.</p>

        <h2>3. Processing Time</h2>
        <p>Approved refunds are processed within 5-7 business days and credited back to the original mode of payment.</p>
      </div>
    </main>
  );
}
