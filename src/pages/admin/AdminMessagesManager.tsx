import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ContactMessage } from '../../types';
import { 
  MessageSquare, 
  Search, 
  Trash2, 
  Mail, 
  Phone, 
  Building, 
  CheckCircle2, 
  Clock, 
  Archive, 
  Send, 
  ExternalLink,
  X
} from 'lucide-react';

export const AdminMessagesManager: React.FC = () => {
  const { messages, updateMessageStatus, deleteMessage, showToast } = useApp();
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMessageModal, setActiveMessageModal] = useState<ContactMessage | null>(null);

  const departments = ['All', 'General', 'Legal', 'Accounting & Finance', 'Marketing', 'Support', 'Careers'];
  const statuses = ['All', 'new', 'in_progress', 'contacted', 'archived'];

  const filtered = messages.filter(m => {
    const matchesDept = selectedDept === 'All' || m.department === selectedDept;
    const matchesStatus = selectedStatus === 'All' || m.status === selectedStatus;
    const matchesSearch = !searchQuery || 
      m.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.company && m.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      m.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesStatus && matchesSearch;
  });

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    showToast(`Copied ${emailStr} to clipboard!`);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Client Inquiry & Lead Inbox</h3>
          <p className="text-xs text-slate-400">Manage client requests routed by department (`contact@`, `legal@`, `accounting@`, etc.).</p>
        </div>

        <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          {messages.length} Total Inquiries
        </span>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Dept Tabs */}
          <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDept(d)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === d
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search leads..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
          </div>

        </div>

        {/* Status Filter Sub-bar */}
        <div className="flex items-center space-x-2 pt-2 border-t border-slate-800 text-xs">
          <span className="text-slate-500 font-semibold">Status:</span>
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedStatus(s)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                selectedStatus === s
                  ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {s === 'All' ? 'All Statuses' : s.replace('_', ' ').toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-400">
            No inquiry leads match your active filters.
          </div>
        ) : (
          filtered.map((msg) => (
            <div 
              key={msg.id}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3 shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-white flex items-center space-x-2">
                      <span>{msg.fullName}</span>
                      {msg.company && <span className="text-xs text-slate-400">({msg.company})</span>}
                    </h4>
                    <span className="text-xs text-cyan-400">{msg.email} {msg.phone ? `• ${msg.phone}` : ''}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                    Dept: {msg.department}
                  </span>

                  <select
                    value={msg.status}
                    onChange={(e) => updateMessageStatus(msg.id, e.target.value as any)}
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md border bg-slate-950 focus:outline-none ${
                      msg.status === 'new'
                        ? 'text-rose-400 border-rose-500/30'
                        : msg.status === 'in_progress'
                        ? 'text-amber-400 border-amber-500/30'
                        : msg.status === 'contacted'
                        ? 'text-emerald-400 border-emerald-500/30'
                        : 'text-slate-400 border-slate-700'
                    }`}
                  >
                    <option value="new">NEW</option>
                    <option value="in_progress">IN PROGRESS</option>
                    <option value="contacted">CONTACTED</option>
                    <option value="archived">ARCHIVED</option>
                  </select>
                </div>
              </div>

              {/* Body message preview */}
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                "{msg.message}"
              </p>

              {/* Meta & Actions */}
              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center space-x-4 text-slate-400 text-[11px]">
                  <span>Budget: <strong className="text-slate-200">{msg.budgetRange || 'Not specified'}</strong></span>
                  <span>Received: <strong className="text-slate-200">{new Date(msg.submittedAt).toLocaleString()}</strong></span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleCopyEmail(msg.email)}
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold"
                  >
                    Copy Email
                  </button>

                  <a
                    href={`mailto:${msg.email}?subject=RE: ${msg.solutionOfInterest || 'BridgeFlowV Consultation Inquiry'}`}
                    className="px-3.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-[11px] font-bold flex items-center space-x-1"
                  >
                    <Send className="w-3 h-3" />
                    <span>Send Reply</span>
                  </a>

                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                    title="Delete Lead"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};
