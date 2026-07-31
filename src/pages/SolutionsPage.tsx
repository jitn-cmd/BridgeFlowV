import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Scale, 
  Calculator, 
  UserCheck, 
  TrendingUp, 
  Code, 
  Cpu, 
  Palette, 
  Briefcase,
  CheckCircle2, 
  Clock, 
  Mail, 
  ArrowRight, 
  Search,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export const SolutionsPage: React.FC = () => {
  const { 
    solutions, 
    selectedCategory, 
    setSelectedCategory, 
    openContactModalWithDept, 
    settings 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-6 h-6 text-cyan-400" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-cyan-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case 'Code': return <Code className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-cyan-400" />;
      default: return <Briefcase className="w-6 h-6 text-cyan-400" />;
    }
  };

  const categoriesFilter = ['All', ...Array.from(new Set(solutions.map(s => s.department)))];

  const filteredSolutions = solutions.filter(sol => {
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || sol.department === selectedCategory;
    const matchesSearch = !searchQuery || 
      sol.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      sol.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.subServices.some(s => s.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (sol.practiceTags && sol.practiceTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          Comprehensive Solution Practice Areas
        </span>
        <h1 className="text-4xl font-extrabold text-white">Targeted Business Execution Solutions</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          From specialized legal process outsourcing and seasonal CPA accounting pods to custom AI agent automation and 24/7 customer support, explore our vetted execution services.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
        
        {/* Category Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categoriesFilter.map((cat) => {
            const isSelected = (!selectedCategory && cat === 'All') || selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === 'All' ? null : cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sub-services or keywords..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
        </div>

      </div>

      {/* Solutions Grid */}
      <div className="space-y-10">
        {filteredSolutions.map((sol) => (
          <div 
            key={sol.id}
            className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl space-y-6"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  {getIcon(sol.iconName)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      {sol.department}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{sol.typicalTimeline}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mt-1">{sol.title}</h2>
                </div>
              </div>

              <button
                onClick={() => openContactModalWithDept(sol.department)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 shrink-0"
              >
                Request {sol.department} Proposal
              </button>
            </div>

            {/* Description & Key Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="lg:col-span-2 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {sol.fullDescription}
                </p>

                {/* Sub-services Grid */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Included Practice Sub-Services:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sol.subServices.map((sub, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <h5 className="text-xs font-bold text-white">{sub.title}</h5>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal pl-6">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Practice Tags / Areas */}
                {sol.practiceTags && sol.practiceTags.length > 0 && (
                  <div className="pt-3 border-t border-slate-800/60 space-y-2">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Specialized Practice & Case Keywords ({sol.practiceTags.length}):
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {sol.practiceTags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Benefits & Routing */}
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">Practice Highlights:</h4>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {sol.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Direct Department Routing:</span>
                  <a 
                    href={`mailto:${sol.contactEmail}`}
                    className="flex items-center space-x-2 text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{sol.contactEmail}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
