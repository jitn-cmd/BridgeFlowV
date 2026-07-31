import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ClientItem } from '../types';
import { ExternalLink, Globe2, Building, Search, ShieldCheck, Star } from 'lucide-react';

export const ClientsPage: React.FC = () => {
  const { clients } = useApp();
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const industriesList = ['All', ...Array.from(new Set(clients.map(c => c.industry)))];

  const filteredClients = clients.filter(c => {
    const matchesIndustry = selectedIndustry === 'All' || c.industry === selectedIndustry;
    const matchesSearch = !searchQuery || 
      c.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          Client Success Portfolio
        </span>
        <h1 className="text-4xl font-extrabold text-white">Our Valued Partner Enterprises</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Discover law firms, wealth management groups, healthcare clinics, and SaaS platforms that rely on BridgeFlowV specialized solution pods to scale operations.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
        
        {/* Industry Filter Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {industriesList.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedIndustry === ind
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by company or country..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
        </div>

      </div>

      {/* Client Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6 shadow-xl relative"
          >
            <div className="space-y-4">
              
              {/* Logo & Badges */}
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 p-2 overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={client.logoUrl}
                    alt={client.companyName}
                    className="w-full h-full object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-col items-end space-y-1">
                  {client.featured && (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>Featured</span>
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {client.industry}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">{client.companyName}</h3>
                <span className="text-xs text-slate-400 flex items-center space-x-1">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{client.country}</span>
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {client.description}
              </p>

            </div>

            {/* Footer Website Link */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Client</span>
              </span>

              {client.website && (
                <a
                  href={client.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline flex items-center space-x-1 font-semibold"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
