import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { HeartPulse, Menu, X, Globe, User, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Settings, Plus, Minus } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { enlargeText, shrinkText } = useAccessibility();

  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const [isAccessOpen, setIsAccessOpen] = React.useState(false);

  const currentLangLabel = i18n.language === 'zh' ? '简体中文' : i18n.language === 'zh-TW' ? '繁體中文' : i18n.language === 'ja' ? '日本語' : i18n.language === 'ko' ? '한국어' : 'English';

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
          <h1 className="flex flex-col text-lg font-black tracking-tight text-slate-900 uppercase leading-[1.1]">
            <span>HealthJoy</span>
            <span>Home Care</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                  } ${i18n.language.startsWith('zh') ? `w-[5.5em] inline-block ${link.name === 'nav.home' ? 'text-center' : 'text-justify [text-align-last:justify]'}` : ''}`}
              >
                {t(link.name)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                <Globe size={16} />
                {currentLangLabel}
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
                    <button
                      onClick={() => {
                        i18n.changeLanguage('en');
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('zh');
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      简体中文
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('zh-TW');
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      繁體中文
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ja');
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      日本語
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ko');
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      한국어
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsAccessOpen(!isAccessOpen)}
                className="flex items-center gap-1.5 text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors"
                title={t('nav.accessibility')}
              >
                <Settings size={16} />
                <svg className={`w-4 h-4 transition-transform ${isAccessOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              <AnimatePresence>
                {isAccessOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50"
                  >
                    <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-50 mb-1">
                      {t('nav.accessibility')}
                    </div>
                    <button
                      onClick={() => {
                        enlargeText();
                        setIsAccessOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between group"
                    >
                      <span>{t('nav.enlargeText')}</span>
                      <Plus size={14} className="text-slate-400 group-hover:text-blue-500" />
                    </button>
                    <button
                      onClick={() => {
                        shrinkText();
                        setIsAccessOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between group"
                    >
                      <span>{t('nav.shrinkText')}</span>
                      <Minus size={14} className="text-slate-400 group-hover:text-blue-500" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/get-started"
              className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-all whitespace-nowrap"
            >
              {t('nav.getStarted')}
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
                  className={`text-base font-medium ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                    } ${i18n.language.startsWith('zh') ? `w-[5.5em] inline-block ${link.name === 'nav.home' ? 'text-center' : 'text-justify [text-align-last:justify]'}` : ''}`}
                >
                  {t(link.name)}
                </Link>
              ))}

              <div className="border-t border-slate-100 pt-4 flex flex-col gap-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
                  {t('nav.accessibility')}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => enlargeText()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    <Plus size={16} />
                    {t('nav.enlargeText')}
                  </button>
                  <button
                    onClick={() => shrinkText()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    <Minus size={16} />
                    {t('nav.shrinkText')}
                  </button>
                </div>
              </div>

              <Link
                to="/get-started"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-bold mt-2"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
