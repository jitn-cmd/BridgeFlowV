import React from 'react';
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3 border-b border-slate-800 pb-8">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          Legal Compliance & Governance
        </span>
        <h1 className="text-3xl font-extrabold text-white">BridgeFlowV Privacy Policy</h1>
        <p className="text-xs text-slate-400">Effective Date: July 30, 2026</p>
      </div>

      <div className="prose prose-invert max-w-none text-xs leading-relaxed space-y-6">
        
        <section className="space-y-2">
          <h3 className="text-base font-bold text-white">1. Introduction & Overview</h3>
          <p>
            BridgeFlowV ("Company", "we", "us", or "our") is committed to protecting the privacy and security of confidential corporate information, client leads, and proprietary data shared with our consultancy matchmaking platform. This Privacy Policy details how we collect, process, store, and safeguard data submitted via our website and communications.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-white">2. Information We Collect</h3>
          <p>
            We collect information provided directly by client organizations during consultations, matchmaker quizzes, and departmental contact submissions, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Contact details (Full Name, Work Email Address, Phone Number, Corporate Name)</li>
            <li>Operational project scope, budget range, and specialized solution requirements</li>
            <li>Departmental routing routing preferences (Legal, Accounting, Marketing, Operations)</li>
            <li>Technical metadata (browser type, IP address, device telemetry for security protection)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-white">3. Mutual Non-Disclosure Agreement (MNDA) Standards</h3>
          <p>
            All consultations and diagnostic discussions conducted through BridgeFlowV are governed by strict Mutual Non-Disclosure Agreements (MNDAs). Confidential client specifications, legal document samples, financial ledgers, or proprietary source code shared for scoping purposes are stored in encrypted environments and are never disclosed to unverified third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-white">4. How We Use Collected Information</h3>
          <p>
            We utilize collected data strictly to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Diagnose business bottlenecks and match clients with appropriate partner agencies or specialized pods</li>
            <li>Route inquiries directly to department practice leads (e.g. legal@bridgeflowv.com, accounting@bridgeflowv.com)</li>
            <li>Enforce security audits, prevent fraudulent submissions, and comply with legal obligations</li>
            <li>Send requested advisory briefings and solution proposals</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-white">5. Security Certifications & Compliance</h3>
          <p>
            We require all partner agencies and specialized outsourced pods in the BridgeFlowV network to maintain compliance with recognized international security frameworks, including ISO 27001, SOC 2 Type II, and HIPAA (for medical virtual assistants).
          </p>
        </section>

        <section className="space-y-2 border-t border-slate-800 pt-6">
          <h3 className="text-base font-bold text-white">6. Contact Our Data Governance Officer</h3>
          <p>
            For questions regarding this Privacy Policy or to request deletion of your organization's records, please contact our legal desk at: <strong className="text-cyan-400">legal@bridgeflowv.com</strong>.
          </p>
        </section>

      </div>

    </div>
  );
};
