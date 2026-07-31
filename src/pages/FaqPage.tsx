import React, { useState } from 'react';
import { initialFAQs } from '../data/initialData';
import { useApp } from '../context/AppContext';
import { ChevronDown, Search, HelpCircle, Shield, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqPage: React.FC = () => {
  const { openContactModalWithDept } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(initialFAQs[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'General', 'Vetting & Quality', 'Pricing & Models', 'Onboarding', 'Security & NDA'];

  const filtered = initialFAQs.filter(f => {
    const matchesCat = selectedCategory === 'All' || f.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          Frequently Asked Questions
        </span>
        <h1 className="text-4xl font-extrabold text-white">Everything You Need to Know</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Clear answers regarding our vetting protocols, pricing models, MNDA security policies, and rapid onboarding timelines.
        </p>
      </div>

      {/* Filter & Search */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <Search className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        {filtered.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div 
              key={faq.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                    {faq.category}
                  </span>
                  <h3 className="text-base font-bold text-white">{faq.question}</h3>
                </div>

                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Still Have Questions CTA */}
      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Have a Specific Custom Question?</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Our team is available to discuss custom SLA terms, specialized jurisdiction requirements, and enterprise billing models.
        </p>
        <button
          onClick={() => openContactModalWithDept('General')}
          className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Contact Support Team
        </button>
      </div>

    </div>
  );
};
