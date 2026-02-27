import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { HeartPulse, Menu, X, Globe, User, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const [lang, setLang] = React.useState('English');

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-0.5 bg-white"></div>
              <div className="w-0.5 h-3 bg-white absolute"></div>
            </div>
          </div>
          <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase">
            HealthJoy Home Care
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 gap-2 text-slate-400 focus-within:ring-2 focus-within:ring-blue-600/10 transition-all">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="Search resou..." 
                className="bg-transparent border-none outline-none text-sm text-slate-600 placeholder:text-slate-400 w-32"
              />
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                <Globe size={16} />
                {lang}
                <svg className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50"
                  >
                    {['English', '简体中文', '繁體中文'].map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setIsLangOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/get-started"
              className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-all whitespace-nowrap"
            >
              Get Started
            </Link>

            <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400 flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/get-started"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-bold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
