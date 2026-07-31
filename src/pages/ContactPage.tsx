import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ShieldCheck, 
  Copy, 
  Check, 
  Building, 
  Clock, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { settings, addMessage, showToast } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [department, setDepartment] = useState('General');
  const [budgetRange, setBudgetRange] = useState('$5,000 - $15,000 / mo');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

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

    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
  };

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(emailStr);
    showToast(`Copied ${emailStr} to clipboard!`);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const departmentEmailsList = [
    { label: "General & Advisory Inquiries", email: settings.contactEmails.general, dept: "General", desc: "For new client consultations & general partnership questions." },
    { label: "Legal Solutions & LPO", email: settings.contactEmails.legal, dept: "Legal", desc: "Contract redlining, paralegal pods, document review." },
    { label: "Accounting & Financial Services", email: settings.contactEmails.accounting, dept: "Accounting & Finance", desc: "Bookkeeping, CPA support teams, payroll & tax compliance." },
    { label: "Growth & Performance Marketing", email: settings.contactEmails.marketing, dept: "Marketing", desc: "SEO, Google Ads, B2B lead generation & email automation." },
    { label: "Client Support & Operations", email: settings.contactEmails.support, dept: "Support", desc: "24/7 omnichannel customer service & VA support." },
    { label: "Careers & Talent Acquisition", email: settings.contactEmails.careers, dept: "Careers", desc: "Agencies & specialists seeking to join our partner network." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          Direct Department Communication
        </span>
        <h1 className="text-4xl font-extrabold text-white">Contact Our Practice Principals</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Connect directly with the appropriate BridgeFlowV department or submit a formal proposal request below. All inquiries receive responses within 4 business hours.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Department Email Router Cards */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center space-x-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span>Department Routing Directory</span>
          </h3>

          <div className="space-y-3">
            {departmentEmailsList.map((item) => (
              <div 
                key={item.dept}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{item.label}</span>
                  <button
                    onClick={() => handleCopyEmail(item.email)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail === item.email ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <a 
                  href={`mailto:${item.email}`}
                  className="text-xs font-semibold text-cyan-400 hover:underline block"
                >
                  {item.email}
                </a>

                <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Direct Phone & Address Info */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
            <h4 className="font-bold text-slate-200">Global Executive Headquarters</h4>
            
            <div className="flex items-start space-x-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{settings.address}</span>
            </div>

            <div className="flex items-center space-x-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`tel:${settings.phone}`} className="hover:text-cyan-400 font-semibold">{settings.phone}</a>
            </div>

            <div className="flex items-center space-x-2.5 text-slate-300">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp Executive Desk: <a href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-semibold">{settings.whatsapp}</a></span>
            </div>
          </div>

        </div>

        {/* Right Column: Lead Submission Form */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4 space-y-1">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Submit Consultation Request</span>
            </h3>
            <p className="text-xs text-slate-400">Fill out your project specifications below. Our principal advisor will review and contact you within 4 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Target Department *</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="General">General Inquiries ({settings.contactEmails.general})</option>
                  <option value="Legal">Legal Solutions ({settings.contactEmails.legal})</option>
                  <option value="Accounting & Finance">Accounting & Finance ({settings.contactEmails.accounting})</option>
                  <option value="Marketing">Growth & Marketing ({settings.contactEmails.marketing})</option>
                  <option value="Support">Client Support ({settings.contactEmails.support})</option>
                  <option value="Careers">Careers & Talent ({settings.contactEmails.careers})</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Expected Monthly Budget</label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
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
                  placeholder="e.g. Jonathan Sterling"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. jonathan@sterlinglaw.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Sterling & Partners LLP"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Detailed Requirements & Scope *</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detail your operational bottleneck, team size required, software stack (QuickBooks, NetSuite, Salesforce, Next.js, etc.), or desired start date..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Protected by BridgeFlowV MNDA</span>
              </div>

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </div>
          </form>

        </div>

      </div>

    </div>
  );
};
