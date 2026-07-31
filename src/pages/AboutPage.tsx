import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building, 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Clock,
  Compass,
  Layers,
  Lock
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openContactModalWithDept, setCurrentPage } = useApp();

  const coreValues = [
    { title: "Rigorous Precision", desc: "Every partner agency and specialist undergoes a 5-stage technical vetting process before entering our network." },
    { title: "Speed to Execution", desc: "We eliminate hiring friction, deploying pre-vetted operational pods within 24 to 48 hours." },
    { title: "Ironclad Confidentiality", desc: "We enforce strict MNDA protocols, SOC 2 / ISO 27001 data compliance, and full IP ownership transfer." },
    { title: "Tailored Matchmaking", desc: "We don't offer generic templates. Every solution pod is configured precisely for your industry standards." }
  ];

  const fourStepProcess = [
    { step: "01", title: "Operational Diagnosis", desc: "We conduct an in-depth assessment of your operational bottlenecks, software stack, and billable hour friction." },
    { step: "02", title: "Targeted Matchmaking", desc: "Our principals match you with top 1% specialized pods or boutique agencies aligned with your time zone." },
    { step: "03", title: "Seamless Onboarding", desc: "We guide tool integration, SOP setup, security protocols, and initial pilot launch within 3-5 business days." },
    { step: "04", title: "Ongoing Quality Assurance", desc: "BridgeFlowV conducts monthly SLA audits, performance reviews, and capacity adjustments to guarantee ROI." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          About BridgeFlowV
        </span>
        <h1 className="text-4xl font-extrabold text-white">The Business Solutions Matchmaker</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          BridgeFlowV is a premier business solutions consultancy platform. We bridge the gap between ambitious enterprises and specialized execution teams worldwide.
        </p>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <Target className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Our Mission</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            To eliminate the risk, time, and exorbitant overhead associated with finding reliable specialized services. We empower law practices, CPA firms, real estate brokerages, tech startups, and mid-market enterprises to scale effortlessly by connecting them with pre-vetted execution partners.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Our Vision</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            To build the world's most trusted business solutions brokerage—where every company, regardless of size, can instantly access elite legal, financial, technical, marketing, and operational teams on demand.
          </p>
        </div>
      </div>

      {/* 4-Step Matchmaking Approach */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Our Methodology</span>
          <h2 className="text-3xl font-extrabold text-white">How BridgeFlowV Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fourStepProcess.map((item) => (
            <div key={item.step} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 relative space-y-3">
              <span className="text-4xl font-black text-cyan-500/20 block">{item.step}</span>
              <h4 className="text-base font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Principles</span>
          <h2 className="text-3xl font-extrabold text-white">Core Values Driving Every Partnership</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Speak with a BridgeFlowV Principal Advisor</h3>
        <p className="text-xs text-slate-300 max-w-xl mx-auto">
          Schedule a no-obligation diagnostic call to explore how our specialized practice pods can optimize your operations.
        </p>
        <button
          onClick={() => openContactModalWithDept('General')}
          className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Book Consultation
        </button>
      </div>

    </div>
  );
};
