import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TeamMember, DepartmentType } from '../types';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Search, 
  UserCheck, 
  Send, 
  Building,
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

export const TeamPage: React.FC = () => {
  const { teamMembers, openContactModalWithDept, showToast } = useApp();
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const activeMembers = teamMembers.filter(m => m.active);

  const departmentsList = ['All', ...Array.from(new Set(activeMembers.map(m => m.department)))];

  const filteredTeam = activeMembers.filter(m => {
    const matchesDept = selectedDept === 'All' || m.department === selectedDept;
    const matchesSearch = !searchQuery || 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    showToast(`Copied ${email} to clipboard!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          BridgeFlowV Executive Team & Practice Principals
        </span>
        <h1 className="text-4xl font-extrabold text-white">Leadership & Practice Area Leads</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Meet our senior advisors and department heads who oversee partner agency vetting, quality assurance, and solution matchmaking across all 8 business practices.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
        
        {/* Department Filter Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {departmentsList.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedDept === dept
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or skill..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
        </div>

      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeam.map((member) => (
          <motion.div
            key={member.id}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Photo & Badge Header */}
              <div className="h-64 overflow-hidden relative group">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                <span className="absolute top-3 right-3 text-[10px] font-bold text-cyan-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30">
                  {member.department}
                </span>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium">{member.designation}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.shortDescription}
                </p>

                {/* Skills tags */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Specialized Competencies:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-md border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Contact Bar */}
            <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopyEmail(member.email)}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  title={`Copy ${member.email}`}
                >
                  <Mail className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${member.phone}`}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  title={`Call ${member.phone}`}
                >
                  <Phone className="w-4 h-4" />
                </a>

                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>

              <button
                onClick={() => openContactModalWithDept(member.department)}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-colors"
              >
                Contact Lead
              </button>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
};
