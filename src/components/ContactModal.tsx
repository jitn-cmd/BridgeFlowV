import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Send, Shield, Mail, Phone, Building, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactModal: React.FC = () => {
  const { 
    isContactModalOpen, 
    setIsContactModalOpen, 
    contactModalDepartment, 
    addMessage, 
    settings 
  } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [department, setDepartment] = useState('General');
  const [budgetRange, setBudgetRange] = useState('$5,000 - $15,000 / mo');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (contactModalDepartment) {
      setDepartment(contactModalDepartment);
    }
  }, [contactModalDepartment]);

  if (!isContactModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    addMessage({
      fullName,
      email,
      phone,
      company,
      department,
      solutionOfInterest: `${department} Practice Solution Inquiry`,
      budgetRange,
      message,
    });

    setIsContactModalOpen(false);
    // Reset form
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
  };

  const departmentEmailsMap: Record<string, string> = {
    'General': settings.contactEmails.general,
    'Legal': settings.contactEmails.legal,
    'Accounting & Finance': settings.contactEmails.accounting,
    'Marketing': settings.contactEmails.marketing,
    'Support': settings.contactEmails.support,
    'Careers': settings.contactEmails.careers,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="font-bold text-base text-white">Consultation & Lead Inquiry</h3>
              <p className="text-[11px] text-cyan-400">Routed to: {departmentEmailsMap[department] || settings.contactEmails.general}</p>
            </div>
          </div>
          <button
            onClick={() => setIsContactModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Target Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="General">General Inquiry ({settings.contactEmails.general})</option>
                <option value="Legal">Legal Solutions ({settings.contactEmails.legal})</option>
                <option value="Accounting & Finance">Accounting & Finance ({settings.contactEmails.accounting})</option>
                <option value="Marketing">Growth & Marketing ({settings.contactEmails.marketing})</option>
                <option value="Support">Client Support ({settings.contactEmails.support})</option>
                <option value="Careers">Careers & Talent ({settings.contactEmails.careers})</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Budget Expectation</label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="< $5,000 / mo">&lt; $5,000 / month</option>
                <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / month</option>
                <option value="$15,000 - $30,000 / mo">$15,000 - $30,000 / month</option>
                <option value="$30,000+ / mo">$30,000+ / month (Enterprise)</option>
                <option value="Fixed Project Fee">Fixed Project Fee</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Eleanor Vance"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. eleanor@company.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Firm</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Apex Partners LLC"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Project / Solution Requirements *</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your current challenge, team size needs, or desired launch timeline..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-800">
            <div className="flex items-center space-x-1 text-[11px] text-slate-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Strict MNDA & Privacy Compliant</span>
            </div>

            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Consultation Request</span>
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};
