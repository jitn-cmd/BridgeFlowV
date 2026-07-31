import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PageType } from '../types';
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Lock, 
  Send, 
  ExternalLink,
  Shield,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Github
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, settings, showToast, openContactModalWithDept, solutions } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast(`Thank you! ${newsletterEmail} has been subscribed to BridgeFlowV Briefings.`, "success");
    setNewsletterEmail('');
  };

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Industries', page: 'industries' },
    { label: 'Team', page: 'team' },
    { label: 'Clients', page: 'clients' },
    { label: 'Testimonials', page: 'testimonials' },
    { label: 'Blog Insights', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact Us', page: 'contact' },
    { label: 'Privacy Policy', page: 'privacy' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Building className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Bridge<span className="text-cyan-400">Flow</span><span className="text-blue-500">V</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {settings.footerDescription}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-slate-300 text-xs">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{settings.address}</span>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a href={settings.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={settings.socialLinks.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={settings.socialLinks.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={settings.socialLinks.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Solution Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              {solutions.slice(0, 6).map((sol) => (
                <li key={sol.id}>
                  <button
                    onClick={() => {
                      setCurrentPage('solutions');
                    }}
                    className="hover:text-cyan-400 transition-colors text-left flex items-center space-x-1"
                  >
                    <span>{sol.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Department Direct Emails */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Department Routing Emails</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex flex-col">
                <span className="text-slate-500 font-medium">General Inquiries:</span>
                <button onClick={() => openContactModalWithDept('General')} className="text-cyan-400 hover:underline text-left">
                  {settings.contactEmails.general}
                </button>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 font-medium">Legal Solutions:</span>
                <button onClick={() => openContactModalWithDept('Legal')} className="text-cyan-400 hover:underline text-left">
                  {settings.contactEmails.legal}
                </button>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 font-medium">Accounting & Finance:</span>
                <button onClick={() => openContactModalWithDept('Accounting & Finance')} className="text-cyan-400 hover:underline text-left">
                  {settings.contactEmails.accounting}
                </button>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 font-medium">Growth & Marketing:</span>
                <button onClick={() => openContactModalWithDept('Marketing')} className="text-cyan-400 hover:underline text-left">
                  {settings.contactEmails.marketing}
                </button>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 font-medium">Careers & Talent:</span>
                <button onClick={() => openContactModalWithDept('Careers')} className="text-cyan-400 hover:underline text-left">
                  {settings.contactEmails.careers}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">BridgeFlowV Insights</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to our monthly advisory briefing on global outsourcing, AI agents, and corporate efficiency.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter executive email..."
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg flex items-center justify-center font-bold text-xs transition-colors"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button onClick={() => setCurrentPage('faq')} className="text-slate-400 hover:text-cyan-400 underline">FAQ</button>
              <span>•</span>
              <button onClick={() => setCurrentPage('privacy')} className="text-slate-400 hover:text-cyan-400 underline">Privacy Policy</button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>{settings.copyrightText}</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setCurrentPage('admin')}
              className="flex items-center space-x-1 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
