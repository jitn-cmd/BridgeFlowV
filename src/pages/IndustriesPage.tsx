import React from 'react';
import { useApp } from '../context/AppContext';
import { initialIndustries } from '../data/initialData';
import { 
  Shield, 
  Calculator, 
  Building2, 
  Activity, 
  HardHat, 
  DollarSign, 
  Layers, 
  Zap, 
  ShoppingCart,
  CheckCircle2, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const { openContactModalWithDept, setCurrentPage } = useApp();

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-cyan-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-cyan-400" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      default: return <ShoppingCart className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          Industry-Tailored Matchmaking
        </span>
        <h1 className="text-4xl font-extrabold text-white">Solutions Built for Your Sector</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Every industry has distinct regulatory requirements, software environments, and workflow challenges. Explore how BridgeFlowV configures specialized execution teams for your specific domain.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialIndustries.map((ind) => (
          <div 
            key={ind.id}
            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  {getIndustryIcon(ind.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">{ind.name}</h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {ind.shortDescription}
              </p>

              {/* Common Challenges */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Common Sector Bottlenecks:</span>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {ind.commonChallenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Solutions */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Recommended Solution Pods:</span>
                <div className="flex flex-wrap gap-1.5">
                  {ind.recommendedSolutions.map((rec, idx) => (
                    <span key={idx} className="text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlight Impact */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-emerald-400 flex items-start space-x-2">
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{ind.caseStudyHighlight}</span>
              </div>
            </div>

            <button
              onClick={() => openContactModalWithDept('General')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors border border-slate-700/60"
            >
              <span>Consult {ind.name} Specialist</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};
