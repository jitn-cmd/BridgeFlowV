import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Compass, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SolutionQuizModal: React.FC = () => {
  const { 
    isSolutionQuizOpen, 
    setIsSolutionQuizOpen, 
    solutions, 
    openContactModalWithDept,
    setCurrentPage 
  } = useApp();

  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const [budgetExpectation, setBudgetExpectation] = useState('');

  if (!isSolutionQuizOpen) return null;

  const industriesList = [
    "Law Firms & Legal Practices",
    "Accounting & CPA Practices",
    "Real Estate & Property Management",
    "Healthcare & Medical Clinics",
    "SaaS & Tech Startups",
    "Ecommerce & DTC Brands",
    "Finance & Wealth Management",
    "Construction & Engineering"
  ];

  const challengesList = [
    { id: "legal_overhead", label: "High legal documentation overhead (Personal Injury, Family Law, Estate Planning, Bankruptcy, Litigation, Business Law)", category: "Legal Solutions" },
    { id: "tax_surge", label: "Seasonal accounting backlog & CPA capacity crunch", category: "Accounting & Finance" },
    { id: "va_bandwidth", label: "Exec/founder admin burnout & scheduling overload", category: "Virtual Assistant Solutions" },
    { id: "growth_marketing", label: "Stagnant lead generation & underperforming Google/Meta ads", category: "Marketing & Growth" },
    { id: "web_dev", label: "Need React/Next.js custom web app build or Shopify store overhaul", category: "Web & Software Engineering" },
    { id: "ai_agents", label: "Desire custom AI agent automation & RAG chatbot integration", category: "AI Solutions & Automation" },
    { id: "design_uiux", label: "Outdated UI/UX design or lack of coherent brand identity", category: "UI/UX & Brand Design" },
    { id: "support_scale", label: "Customer support ticket backlogs & need for 24/7 coverage", category: "Business Support & Operations" }
  ];

  const matchedSolution = solutions.find(s => s.title.toLowerCase().includes(
    challengesList.find(c => c.id === selectedChallenge)?.category.toLowerCase() || 'legal'
  )) || solutions[0];

  const handleReset = () => {
    setStep(1);
    setSelectedIndustry('');
    setSelectedChallenge('');
    setBudgetExpectation('');
  };

  const handleFinish = () => {
    setIsSolutionQuizOpen(false);
    openContactModalWithDept(matchedSolution.department);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-8"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-base text-white">Interactive Solution Matchmaker</h3>
          </div>
          <button
            onClick={() => setIsSolutionQuizOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-1 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Select Industry */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Step 1 of 3</span>
                <h4 className="text-xl font-bold text-white mt-1">What sector does your organization operate in?</h4>
                <p className="text-xs text-slate-400 mt-1">Select your primary industry so we can filter vetted specialists.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industriesList.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                      selectedIndustry === ind
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  disabled={!selectedIndustry}
                  onClick={() => setStep(2)}
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs tracking-wide shadow-lg transition-all"
                >
                  <span>Next Challenge</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Operational Challenge */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Step 2 of 3</span>
                <h4 className="text-xl font-bold text-white mt-1">What is your primary operational objective?</h4>
                <p className="text-xs text-slate-400 mt-1">Choose the bottleneck you want an expert team or agency to solve.</p>
              </div>

              <div className="space-y-2.5">
                {challengesList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedChallenge(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                      selectedChallenge === item.id
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-md'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {selectedChallenge === item.id && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Back
                </button>
                <button
                  disabled={!selectedChallenge}
                  onClick={() => setStep(3)}
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs tracking-wide shadow-lg transition-all"
                >
                  <span>Generate Match</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Match Result */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-start space-x-3">
                <Sparkles className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Optimal Match Found</span>
                  <h4 className="text-lg font-extrabold text-white">{matchedSolution.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {matchedSolution.shortDescription}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Industry Context:</span>
                  <span className="text-white font-medium">{selectedIndustry}</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Target Department:</span>
                  <span className="text-cyan-400 font-medium">{matchedSolution.department}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Deployment Timeline:</span>
                  <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{matchedSolution.typicalTimeline}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300">Included Delivery Modules:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {matchedSolution.subServices.slice(0, 4).map((sub, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 text-xs text-slate-300 flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{sub.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-1 text-xs text-slate-400 hover:text-slate-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>

                <button
                  onClick={handleFinish}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20"
                >
                  <span>Connect with {matchedSolution.department} Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
