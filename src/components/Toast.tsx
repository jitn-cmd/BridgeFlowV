import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Toast: React.FC = () => {
  const { toasts } = useApp();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 pointer-events-none max-w-md w-full px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className={`pointer-events-auto flex items-center space-x-3 px-4 py-3.5 rounded-xl shadow-2xl border backdrop-blur-md transition-all ${
              toast.type === 'success' 
                ? 'bg-slate-900/90 dark:bg-slate-900/95 text-emerald-400 border-emerald-500/30' 
                : toast.type === 'error'
                ? 'bg-slate-900/90 dark:bg-slate-900/95 text-rose-400 border-rose-500/30'
                : 'bg-slate-900/90 dark:bg-slate-900/95 text-cyan-400 border-cyan-500/30'
            }`}
          >
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-cyan-400 shrink-0" />}
            
            <p className="text-sm font-medium text-slate-100 flex-1 leading-snug">
              {toast.message}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
