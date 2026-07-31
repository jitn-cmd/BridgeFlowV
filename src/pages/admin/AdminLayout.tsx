import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AdminTab } from '../../types';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Layers, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Lock, 
  Eye, 
  Key, 
  RotateCcw,
  Sparkles,
  Award
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { 
    adminAuthenticated, 
    setAdminAuthenticated, 
    adminActiveTab, 
    setAdminActiveTab,
    setCurrentPage,
    showToast,
    resetAllData,
    messages
  } = useApp();

  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passkey for demo is 'admin123' or any submission in quick demo mode
    if (passcode === 'admin123' || passcode.trim() !== '') {
      setAdminAuthenticated(true);
      setPassError(false);
      showToast("Authenticated as BridgeFlowV Admin!", "success");
    } else {
      setPassError(true);
    }
  };

  const newMessagesCount = messages.filter(m => m.status === 'new').length;

  const menuItems: { tab: AdminTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { tab: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { tab: 'messages', label: 'Inquiries & Leads', icon: <MessageSquare className="w-4 h-4" />, badge: newMessagesCount },
    { tab: 'team', label: 'Team Manager', icon: <Users className="w-4 h-4" /> },
    { tab: 'clients', label: 'Client Manager', icon: <Building2 className="w-4 h-4" /> },
    { tab: 'solutions', label: 'Solutions Manager', icon: <Layers className="w-4 h-4" /> },
    { tab: 'blog', label: 'Blog Manager', icon: <FileText className="w-4 h-4" /> },
    { tab: 'testimonials', label: 'Testimonials', icon: <Award className="w-4 h-4" /> },
    { tab: 'settings', label: 'Website Settings', icon: <Settings className="w-4 h-4" /> },
  ];

  if (!adminAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl text-slate-100">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">BridgeFlowV Admin Portal</h2>
            <p className="text-xs text-slate-400">Enter administrator passkey to manage platform content & leads.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Admin Passkey</label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (Demo: admin123)"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
                <Key className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
              {passError && <p className="text-[11px] text-rose-400 mt-1">Invalid passcode. Please try again.</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20"
            >
              Authenticate & Unlock
            </button>
          </form>

          <div className="pt-4 border-t border-slate-800 text-center space-y-2">
            <button
              onClick={() => {
                setPasscode('admin123');
                setAdminAuthenticated(true);
                showToast("Quick Demo Access Granted!");
              }}
              className="text-xs text-cyan-400 hover:underline font-semibold"
            >
              Instant Quick Demo Login (Fill 'admin123')
            </button>
            <br />
            <button
              onClick={() => setCurrentPage('home')}
              className="text-xs text-slate-500 hover:text-slate-300"
            >
              ← Return to Public Website
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center space-x-2">
              <span>BridgeFlowV Content Management System</span>
              <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">Active</span>
            </h2>
            <p className="text-[11px] text-slate-400">Managing live public team, client, solution, blog, and inquiry records.</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold"
          >
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>View Public Site</span>
          </button>

          <button
            onClick={resetAllData}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold"
            title="Restore Initial Factory Seed Data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Data</span>
          </button>

          <button
            onClick={() => {
              setAdminAuthenticated(false);
              showToast("Admin session ended.");
            }}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock Portal</span>
          </button>
        </div>
      </div>

      {/* Admin Body: Navigation Tabs + Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Admin Navigation */}
        <div className="lg:col-span-3 space-y-2">
          <div className="p-2 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            {menuItems.map((item) => {
              const active = adminActiveTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => setAdminActiveTab(item.tab)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    active 
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      active ? 'bg-slate-950 text-cyan-400' : 'bg-rose-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Main Admin View */}
        <div className="lg:col-span-9">
          {children}
        </div>

      </div>

    </div>
  );
};
