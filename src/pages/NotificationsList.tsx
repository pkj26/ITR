import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { notifications } from '../data/notifications';

export default function NotificationsList() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <SEO 
        title="Income Tax Updates & CBDT Notifications AY 2026-27 | KarSeva"
        description="Stay updated with the latest Income Tax Department notifications, CBDT circulars, and ITR utility release dates for AY 2026-27 in India."
        keywords="Income Tax notifications 2026, CBDT circulars, ITR filing updates India, AY 2026-27 ITR utilities, KarSeva"
        url="https://karseva.in/notifications"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1D3557] mb-8">Income Tax &amp; CBDT Circular Updates India (AY 2026-27)</h1>
        <div className="space-y-6">
          {notifications.map((n) => (
            <div key={n.slug} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h2 className="text-xl font-semibold text-[#1D3557] mb-2">{n.title}</h2>
              <p className="text-slate-500 text-sm mb-4">{n.date}</p>
              <p className="text-slate-700 mb-4">{n.description}</p>
              <Link to={`/notifications/${n.slug}`} className="text-[#FFB400] font-semibold hover:underline">Read more</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
