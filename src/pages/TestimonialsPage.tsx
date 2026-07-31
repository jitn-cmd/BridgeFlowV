import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, Quote, Building2, UserCheck, Sparkles } from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  const { testimonials, openContactModalWithDept } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const approvedTestimonials = testimonials.filter(t => t.approved);

  const categories = ['All', ...Array.from(new Set(approvedTestimonials.map(t => t.solutionCategory)))];

  const filtered = approvedTestimonials.filter(t => {
    return selectedCategory === 'All' || t.solutionCategory === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          Verified Client Endorsements
        </span>
        <h1 className="text-4xl font-extrabold text-white">Client Reviews & Testimonials</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Read genuine feedback from law firm partners, CFOs, tech founders, and real estate executives who scaled their execution using BridgeFlowV specialized solution pods.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((test) => (
          <div 
            key={test.id}
            className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl relative overflow-hidden"
          >
            <Quote className="w-12 h-12 text-slate-800 absolute top-6 right-6 pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                {test.solutionCategory}
              </span>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed italic relative z-10">
              "{test.quote}"
            </p>

            <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
              <img
                src={test.avatarUrl}
                alt={test.clientName}
                className="w-12 h-12 rounded-full object-cover border border-cyan-500/40 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-base font-bold text-white">{test.clientName}</h4>
                <p className="text-xs text-slate-400">{test.clientTitle}, <span className="text-cyan-400">{test.companyName}</span></p>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Industry: {test.industry}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-white">Join Hundreds of Satisfied Corporate Clients</h3>
        <button
          onClick={() => openContactModalWithDept('General')}
          className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Consult Our Team
        </button>
      </div>

    </div>
  );
};
