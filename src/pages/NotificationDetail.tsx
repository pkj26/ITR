import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { notifications } from '../data/notifications';

export default function NotificationDetail() {
  const { slug } = useParams();
  const notification = notifications.find((n) => n.slug === slug);

  if (!notification) {
    return <Navigate to="/notifications" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <Helmet>
        <title>{notification.title} | KarSeva</title>
        <meta name="description" content={notification.description} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-[#1D3557] mb-4">{notification.title}</h1>
        <p className="text-slate-500 text-sm mb-6">{notification.date}</p>
        <p className="text-slate-700 mb-8 text-lg">{notification.intro}</p>
        
        {notification.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">{section.title}</h2>
            <p className="text-slate-700 mb-4">{section.content}</p>
            {section.links && (
              <div className="flex flex-wrap gap-4">
                {section.links.map((link, lIndex) => (
                  <a key={lIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#FFB400] font-semibold hover:underline">
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <div className="mt-12 p-6 bg-slate-100 rounded-lg">
            <h2 className="text-xl font-semibold text-[#1D3557] mb-2">Need Help Filing Your ITR?</h2>
            <p className="text-slate-700 mb-4">Tax rules keep changing. Let KarSeva's experts file your ITR correctly and on time. Plans start at ₹499.</p>
            <a href="/pricing" className="inline-block bg-[#FFB400] text-[#1D3557] px-6 py-2 rounded-md font-bold hover:bg-[#e6a200] transition shadow-sm">File ITR Now</a>
        </div>
      </div>
    </div>
  );
}
