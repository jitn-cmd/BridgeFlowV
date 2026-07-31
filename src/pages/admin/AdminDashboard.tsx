import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  Building2, 
  MessageSquare, 
  FileText, 
  Layers, 
  ArrowUpRight, 
  Plus, 
  Clock, 
  CheckCircle2,
  Mail
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    teamMembers, 
    clients, 
    solutions, 
    blogs, 
    messages, 
    setAdminActiveTab,
    updateMessageStatus 
  } = useApp();

  const newLeads = messages.filter(m => m.status === 'new');
  const activeTeam = teamMembers.filter(m => m.active);

  return (
    <div className="space-y-6">
      
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div 
          onClick={() => setAdminActiveTab('messages')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all space-y-2"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Total Inquiries</span>
            <MessageSquare className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-white">{messages.length}</span>
            {newLeads.length > 0 && (
              <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">
                {newLeads.length} new
              </span>
            )}
          </div>
        </div>

        <div 
          onClick={() => setAdminActiveTab('team')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all space-y-2"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Team Members</span>
            <Users className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="text-2xl font-black text-white">{activeTeam.length}</span>
        </div>

        <div 
          onClick={() => setAdminActiveTab('clients')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all space-y-2"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Partner Clients</span>
            <Building2 className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="text-2xl font-black text-white">{clients.length}</span>
        </div>

        <div 
          onClick={() => setAdminActiveTab('blog')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all space-y-2"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Blog Briefings</span>
            <FileText className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="text-2xl font-black text-white">{blogs.length}</span>
        </div>

      </div>

      {/* Quick Action Shortcuts */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Quick Content Actions</h4>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setAdminActiveTab('team')}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Add Team Member</span>
          </button>
          <button
            onClick={() => setAdminActiveTab('clients')}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Add Client Partner</span>
          </button>
          <button
            onClick={() => setAdminActiveTab('blog')}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Publish New Article</span>
          </button>
          <button
            onClick={() => setAdminActiveTab('settings')}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
          >
            <span>Edit Contact Emails</span>
          </button>
        </div>
      </div>

      {/* Recent Incoming Inquiries */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Recent Client Consultation Inquiries</span>
          </h3>

          <button
            onClick={() => setAdminActiveTab('messages')}
            className="text-xs text-cyan-400 hover:underline font-semibold"
          >
            View All ({messages.length})
          </button>
        </div>

        <div className="space-y-3">
          {messages.slice(0, 4).map((msg) => (
            <div 
              key={msg.id}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-white">{msg.fullName}</span>
                  <span className="text-slate-400">({msg.company || 'Individual'})</span>
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                    {msg.department}
                  </span>
                </div>

                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                  msg.status === 'new' 
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    : msg.status === 'in_progress'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {msg.status.replace('_', ' ')}
                </span>
              </div>

              <p className="text-slate-300 line-clamp-2">{msg.message}</p>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>Budget: <strong className="text-slate-300">{msg.budgetRange}</strong></span>
                <span>{new Date(msg.submittedAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
