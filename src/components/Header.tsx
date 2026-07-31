import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PageType } from '../types';
import { 
  Building, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Compass, 
  Lock, 
  ChevronRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    theme, 
    toggleTheme, 
    setIsSolutionQuizOpen, 
    openContactModalWithDept,
    settings,
    adminAuthenticated
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Industries', page: 'industries' },
    { label: 'Team', page: 'team' },
    { label: 'Clients', page: 'clients' },
    { label: 'Testimonials', page: 'testimonials' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/10 py-3' 
        : 'bg-slate-900/70 dark:bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/40 py-4.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Building className="w-5 h-5 text-cyan-400 group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Bridge<span className="text-cyan-400">Flow</span>
                  <span className="text-blue-500">V</span>
                </span>
              </div>
              <span className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                Business Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    active 
                      ? 'text-cyan-400 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div 
                      layoutId="activeNavIndicator" 
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Find Solution Quiz CTA */}
            <button
              onClick={() => setIsSolutionQuizOpen(true)}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 border border-slate-700/60 text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm"
              title="Launch Solution Matchmaker Quiz"
            >
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Find Solution</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
              )}
            </button>

            {/* Admin Portal Shortcut */}
            <button
              onClick={() => handleNavClick('admin')}
              className={`p-2 rounded-xl transition-all border ${
                currentPage === 'admin' 
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' 
                  : 'bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border-slate-800'
              }`}
              title="Admin Panel"
            >
              <Lock className="w-4 h-4" />
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={() => openContactModalWithDept('General')}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Consult Expert</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700/60"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  setIsSolutionQuizOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 text-sm font-semibold"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Find Solution Matcher</span>
              </button>

              <button
                onClick={() => {
                  openContactModalWithDept('General');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Schedule Free Consultation</span>
              </button>

              <button
                onClick={() => handleNavClick('admin')}
                className="w-full flex items-center justify-center space-x-2 py-2 rounded-xl bg-slate-900 text-slate-400 border border-slate-800 text-xs font-medium"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Admin Portal</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
