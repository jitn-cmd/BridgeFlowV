import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Save, RotateCcw, ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const { settings, updateSettings, resetAllData, showToast } = useApp();

  const [formData, setFormData] = useState(settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    showToast("Website configuration saved successfully!", "success");
  };

  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Global Website & Department Settings</h3>
          <p className="text-xs text-slate-400">Manage site metadata, department contact emails, phone desks, and social links.</p>
        </div>

        <button
          onClick={resetAllData}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold hover:bg-amber-500/20"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Factory Data</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
        
        {/* Basic Brand */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
            Branding & Core Info
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Company / Site Name</label>
              <input
                type="text"
                value={formData.siteName}
                onChange={(e) => setFormData(prev => ({ ...prev, siteName: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Department Email Routers */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>Departmental Contact Email Routing</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">General Inquiries (`contact@`)</label>
              <input
                type="email"
                value={formData.contactEmails.general}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contactEmails: { ...prev.contactEmails, general: e.target.value }
                }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Legal Solutions (`legal@`)</label>
              <input
                type="email"
                value={formData.contactEmails.legal}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contactEmails: { ...prev.contactEmails, legal: e.target.value }
                }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Accounting & Finance (`accounting@`)</label>
              <input
                type="email"
                value={formData.contactEmails.accounting}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contactEmails: { ...prev.contactEmails, accounting: e.target.value }
                }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Marketing & Growth (`marketing@`)</label>
              <input
                type="email"
                value={formData.contactEmails.marketing}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contactEmails: { ...prev.contactEmails, marketing: e.target.value }
                }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Support Desk (`support@`)</label>
              <input
                type="email"
                value={formData.contactEmails.support}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contactEmails: { ...prev.contactEmails, support: e.target.value }
                }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Careers & Talent (`careers@`)</label>
              <input
                type="email"
                value={formData.contactEmails.careers}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contactEmails: { ...prev.contactEmails, careers: e.target.value }
                }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Phone & Address */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
            Phone & Address
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Direct Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">WhatsApp Executive Line</label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Headquarters Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Admin Passkey & Security */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Admin Portal Security & Passkey</span>
          </h4>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1 text-xs">
                Custom Administrator Passkey
              </label>
              <input
                type="text"
                value={formData.adminPasskey || 'BridgeFlowV@2026'}
                onChange={(e) => setFormData(prev => ({ ...prev, adminPasskey: e.target.value }))}
                placeholder="Set custom admin passkey"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-cyan-300 font-mono focus:outline-none focus:border-cyan-500"
              />
              <p className="text-[11px] text-slate-400 mt-1.5">
                🔒 Changing this passkey updates the administrator password required to unlock the Admin Portal.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-900">
              <label className="block text-slate-300 font-semibold mb-1 text-xs">
                Master Recovery Code (For Forgot Passkey)
              </label>
              <input
                type="text"
                value={formData.adminRecoveryCode || 'RECOVERY-BRIDGEFLOW-2026'}
                onChange={(e) => setFormData(prev => ({ ...prev, adminRecoveryCode: e.target.value }))}
                placeholder="Set master recovery code"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-amber-300 font-mono focus:outline-none focus:border-amber-500"
              />
              <p className="text-[11px] text-slate-400 mt-1.5">
                🔑 Emergency recovery secret key used to reset your admin passkey if forgotten. You can also use your admin email (<span className="text-cyan-400">{formData.contactEmail}</span>) to reset.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg"
          >
            <Save className="w-4 h-4" />
            <span>Save All Configuration</span>
          </button>
        </div>

      </form>

    </div>
  );
};
