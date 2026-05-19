import React from 'react';
import { Award, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function Journey() {
  return (
    <main className="flex-grow bg-slate-50 py-16">
      <SEO 
        title="Our 10-Year Journey | Online ITR Filing"
        description="Discover the 10-year success story of India's most trusted online tax platform. From a vision in 2014 to serving 1.5 million Indians today."
        url="https://taxserve.in/#/our-journey"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our 10-Year Journey</h1>
          <p className="text-lg text-slate-600">A decade of trust, excellence, and simplifying taxes in India.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amber-400 before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Award className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 text-xl">The Beginning</h3>
                <span className="text-sm font-semibold text-amber-500">2014</span>
              </div>
              <p className="text-slate-600">Started by a group of passionate CAs aiming to bridge the gap between complex tax laws and the common taxpayer.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Users className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 text-xl">Reaching 100K Users</h3>
                <span className="text-sm font-semibold text-amber-500">2017</span>
              </div>
              <p className="text-slate-600">Our commitment to transparency helped us quickly grow our user base across India, crossing the 1 lakh milestone.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 text-xl">GST & Business Era</h3>
                <span className="text-sm font-semibold text-amber-500">2019</span>
              </div>
              <p className="text-slate-600">Expanded our services to include complete business compliance handling GST, Company Registrations, and Accounting.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 text-xl">1.5 Million Trust</h3>
                <span className="text-sm font-semibold text-amber-500">Today</span>
              </div>
              <p className="text-slate-600">Now proudly serving over 1.5 million Indians, continuously striving to innovate and provide peace of mind.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
