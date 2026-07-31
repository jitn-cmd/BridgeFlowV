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
  Award,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  X,
  RefreshCw,
  Mail
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
    messages,
    settings,
    updateSettings
  } = useApp();

  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState(false);

  // Forgot / Reset Passkey Modal States
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [recoveryInput, setRecoveryInput] = useState('');
  const [newPasskeyInput, setNewPasskeyInput] = useState('');
  const [confirmPasskeyInput, setConfirmPasskeyInput] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const envPasskey = (import.meta as unknown as { env?: { VITE_ADMIN_PASSKEY?: string } }).env?.VITE_ADMIN_PASSKEY;
    const targetKey = settings.adminPasskey || envPasskey || 'BridgeFlowV@2026';
    
    if (passcode.trim() === targetKey) {
      setAdminAuthenticated(true);
      setPassError(false);
      showToast("Authenticated successfully as BridgeFlowV Admin!", "success");
    } else {
      setPassError(true);
      showToast("Invalid Admin Passkey! Access Denied.", "error");
    }
  };

  const handleResetPasskey = (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');

    const expectedRecoveryCode = settings.adminRecoveryCode || 'RECOVERY-BRIDGEFLOW-2026';
    const expectedEmail = (settings.contactEmail || 'jitendra.codeflies@gmail.com').toLowerCase().trim();
    const userInput = recoveryInput.trim().toLowerCase();

    if (!recoveryInput.trim()) {
      setResetError('Please enter your Master Recovery Code or Admin Email.');
      return;
    }

    if (userInput !== expectedRecoveryCode.toLowerCase() && userInput !== expectedEmail) {
      setResetError('Invalid Recovery Code or Admin Email address. Please check and try again.');
      return;
    }

    if (!newPasskeyInput || newPasskeyInput.trim().length < 5) {
      setResetError('New passkey must be at least 5 characters long.');
      return;
    }

    if (newPasskeyInput.trim() !== confirmPasskeyInput.trim()) {
      setResetError('New passkey and confirmation passkey do not match.');
      return;
    }

    // Save updated admin passkey
    updateSettings({
      ...settings,
      adminPasskey: newPasskeyInput.trim()
    });

    setResetSuccess(true);
    showToast("Admin Passkey successfully reset & saved!", "success");

    setTimeout(() => {
      setAdminAuthenticated(true);
      setIsResetOpen(false);
      setResetSuccess(false);
      setRecoveryInput('');
      setNewPasskeyInput('');
      setConfirmPasskeyInput('');
    }, 1200);
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
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl text-slate-100 relative">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">BridgeFlowV Admin Portal</h2>
            <p className="text-xs text-slate-400">Enter secure administrator passkey to access control panel.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">Admin Security Passkey</label>
                <button
                  type="button"
                  onClick={() => setIsResetOpen(true)}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 hover:underline font-semibold flex items-center space-x-1"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>Forgot Passkey?</span>
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    if (passError) setPassError(false);
                  }}
                  placeholder="Enter administrator passkey"
                  className={`w-full bg-slate-950 border ${passError ? 'border-rose-500' : 'border-slate-800'} rounded-xl pl-9 pr-10 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                />
                <Key className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              {passError && (
                <div className="mt-2 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[11px] flex items-center justify-between">
                  <span>⚠️ Incorrect passkey. Try again or use Forgot Passkey.</span>
                  <button
                    type="button"
                    onClick={() => setIsResetOpen(true)}
                    className="text-cyan-400 underline font-bold ml-2"
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-transform"
            >
              Authenticate & Unlock Portal
            </button>
          </form>

          <div className="pt-4 border-t border-slate-800 text-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              ← Return to Public Website
            </button>
          </div>

        </div>

        {/* Forgot Passkey / Reset Modal */}
        {isResetOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 relative shadow-2xl">
              <button
                onClick={() => setIsResetOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Reset Admin Passkey</h3>
                  <p className="text-xs text-slate-400">Verify recovery code or admin email to set a new passkey.</p>
                </div>
              </div>

              {resetSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-sm font-bold text-white">Passkey Reset Successful!</h4>
                  <p className="text-xs text-emerald-300">Logging you in automatically with your new admin credentials...</p>
                </div>
              ) : (
                <form onSubmit={handleResetPasskey} className="space-y-4">
                  {/* Recovery Code or Admin Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Master Recovery Code or Admin Email
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={recoveryInput}
                        onChange={(e) => setRecoveryInput(e.target.value)}
                        placeholder="RECOVERY-BRIDGEFLOW-2026 or admin email"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-cyan-300 font-mono focus:outline-none focus:border-cyan-500"
                      />
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">
                      💡 Default Recovery Code: <code className="text-cyan-400 bg-slate-950 px-1 py-0.5 rounded border border-slate-800">RECOVERY-BRIDGEFLOW-2026</code> or registered email ({settings.contactEmail || 'jitendra.codeflies@gmail.com'})
                    </p>
                  </div>

                  {/* New Passkey */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">New Admin Passkey</label>
                    <input
                      type="password"
                      value={newPasskeyInput}
                      onChange={(e) => setNewPasskeyInput(e.target.value)}
                      placeholder="Enter new passkey (min 5 chars)"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Confirm New Passkey */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Confirm New Passkey</label>
                    <input
                      type="password"
                      value={confirmPasskeyInput}
                      onChange={(e) => setConfirmPasskeyInput(e.target.value)}
                      placeholder="Re-enter new passkey"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {resetError && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
                      ⚠️ {resetError}
                    </div>
                  )}

                  <div className="pt-2 flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsResetOpen(false)}
                      className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-cyan-500/20"
                    >
                      Verify & Reset
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
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

