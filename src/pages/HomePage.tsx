import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building, 
  Scale, 
  Calculator, 
  UserCheck, 
  TrendingUp, 
  Code, 
  Cpu, 
  Palette, 
  Briefcase,
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Star, 
  Award,
  Users,
  Globe2,
  Lock,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const HomePage: React.FC = () => {
  const { 
    setCurrentPage, 
    solutions, 
    clients, 
    testimonials, 
    blogs, 
    setIsSolutionQuizOpen, 
    openContactModalWithDept,
    setSelectedBlogPost,
    setSelectedCategory
  } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-6 h-6 text-cyan-400" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-cyan-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case 'Code': return <Code className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-cyan-400" />;
      default: return <Briefcase className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premier Business Solutions Consultancy Platform</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]"
            >
              Bridge the Gap Between <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Complex Business Needs
              </span> & Specialized Execution
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              We match enterprises, legal practices, and high-growth companies with pre-vetted agencies, dedicated outsourced pods, and top 1% specialists across Legal, Accounting, AI, Software, Marketing, and Operations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={() => setCurrentPage('solutions')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm tracking-wide shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore All 8 Practice Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsSolutionQuizOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-slate-700/80 font-bold text-sm flex items-center justify-center space-x-2.5 transition-all shadow-md"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Find Solution Match (Quick Quiz)</span>
              </button>
            </motion.div>

            {/* Security & Verification Guarantee */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
            >
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% ISO 27001 & SOC 2 Compliant Partners</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Strict MNDA Protection Guarantee</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>98.4% Client Match Rate</span>
              </span>
            </motion.div>

          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-2xl">
            <div className="text-center p-3 border-r border-slate-800/60 last:border-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-cyan-400">250+</span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1 block">Verified Partner Agencies</span>
            </div>
            <div className="text-center p-3 border-r border-slate-800/60 last:border-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-400">$45M+</span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1 block">Client Overhead Saved</span>
            </div>
            <div className="text-center p-3 border-r border-slate-800/60 last:border-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400">48 hrs</span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1 block">Avg Team Match Speed</span>
            </div>
            <div className="text-center p-3">
              <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-400">14+</span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1 block">Global Markets Served</span>
            </div>
          </div>

        </div>
      </section>

      {/* SOLUTIONS CATEGORIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">End-to-End Capabilities</span>
          <h2 className="text-3xl font-extrabold text-white">Our 8 Specialized Solution Practice Areas</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Whether you need legal process outsourcing, seasonal CPA capacity, dedicated virtual assistants, or custom AI agent automation, we match you with proven execution teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => (
            <motion.div
              key={sol.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  {getIcon(sol.iconName)}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {sol.department}
                  </span>
                  <span className="text-[10px] text-slate-500">{sol.typicalTimeline}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {sol.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {sol.shortDescription}
                </p>

                <div className="space-y-1.5 mb-6">
                  {sol.subServices.slice(0, 3).map((sub, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{sub.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => openContactModalWithDept(sol.department)}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Request Proposal</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    setSelectedCategory(sol.department);
                    setCurrentPage('solutions');
                  }}
                  className="text-[10px] text-slate-500 hover:text-slate-300 underline"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MATCHMAKER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/80 border border-cyan-500/30 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center space-x-1.5">
              <Compass className="w-4 h-4" />
              <span>Smart Matchmaker Engine</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Not Sure Which Solution Practice Fits Your Needs?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Answer 3 quick questions about your industry and business bottleneck. Our matchmaker engine will analyze your requirements and route you to the correct department team lead.
            </p>
          </div>

          <button
            onClick={() => setIsSolutionQuizOpen(true)}
            className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-cyan-500/20 shrink-0 flex items-center space-x-2 transition-all transform hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Matchmaker Quiz</span>
          </button>
        </div>
      </section>

      {/* FEATURED CLIENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Client Success Stories</span>
            <h2 className="text-3xl font-extrabold text-white">Trusted by Global Industry Leaders</h2>
          </div>
          <button
            onClick={() => setCurrentPage('clients')}
            className="text-xs font-bold text-cyan-400 hover:underline flex items-center space-x-1"
          >
            <span>View All Partner Clients</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.slice(0, 3).map((client) => (
            <div key={client.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  {client.industry}
                </span>
                <span className="text-[11px] text-slate-400">{client.country}</span>
              </div>

              <h3 className="text-lg font-bold text-white">{client.companyName}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{client.description}</p>
              
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Verified Client Partner</span>
                <span className="text-emerald-400 font-semibold">Featured</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Executive Reviews</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">What Executive Leaders Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(0, 2).map((test) => (
            <div key={test.id} className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800/80 space-y-4 relative">
              <div className="flex items-center space-x-1">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-slate-200 italic leading-relaxed">
                "{test.quote}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-slate-800">
                <img
                  src={test.avatarUrl}
                  alt={test.clientName}
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{test.clientName}</h4>
                  <p className="text-xs text-slate-400">{test.clientTitle}, <span className="text-cyan-400">{test.companyName}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG INSIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Advisory Insights</span>
            <h2 className="text-3xl font-extrabold text-white">Latest Executive Briefings</h2>
          </div>
          <button
            onClick={() => setCurrentPage('blog')}
            className="text-xs font-bold text-cyan-400 hover:underline flex items-center space-x-1"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlogPost(blog)}
              className="group cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all space-y-4"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold text-cyan-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-500/30">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <span className="text-[11px] text-slate-500">{blog.publishedDate} • {blog.readTime}</span>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Scale Your Business Execution?</h2>
            <p className="text-sm sm:text-base text-cyan-100 leading-relaxed">
              Schedule a confidential consultation with a BridgeFlowV principal advisor today. We will assess your operational needs and provide a tailored team proposal within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => openContactModalWithDept('General')}
              className="px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl transition-all"
            >
              Schedule Free Advisory Call
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              View Department Contact Emails
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
