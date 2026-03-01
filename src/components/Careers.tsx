import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, Wallet, GraduationCap, Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroCareersImg from '../assets/images/hero-careers.png';
import personalCareImg from '../assets/images/personal-care.png';
import domesticAssistanceImg from '../assets/images/domestic-assistance.png';
import alliedHealthImg from '../assets/images/allied-health.png';

export const Careers: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={heroCareersImg}
            alt="Caregiver and elderly woman"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">{t('careers.heroBadge')}</span>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            {t('careers.heroTitle')}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t('careers.heroDesc')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              {t('careers.buttons.viewOpenings')}
            </button>
            <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all">
              {t('careers.buttons.learnMore')}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">{t('careers.why.title')}</h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto mb-16">
            {t('careers.why.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('careers.why.flexible.title'),
                desc: t('careers.why.flexible.desc'),
                icon: Clock,
              },
              {
                title: t('careers.why.pay.title'),
                desc: t('careers.why.pay.desc'),
                icon: Wallet,
              },
              {
                title: t('careers.why.training.title'),
                desc: t('careers.why.training.desc'),
                icon: GraduationCap,
              },
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left bg-white">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">{t('careers.process.title')}</h2>
          <p className="text-slate-500 text-lg mb-16">{t('careers.process.subtitle')}</p>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-slate-200 -translate-y-12 z-0"></div>

            {[
              { step: '1', title: t('careers.process.apply.title'), desc: t('careers.process.apply.desc') },
              { step: '2', title: t('careers.process.interview.title'), desc: t('careers.process.interview.desc') },
              { step: '3', title: t('careers.process.onboarding.title'), desc: t('careers.process.onboarding.desc') },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-blue-600/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900">{t('careers.openings.title')}</h2>
            </div>
            <div className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {t('careers.openings.available')}
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                role: t('careers.openings.jobs.caseManager.role'),
                dept: t('careers.openings.jobs.caseManager.dept'),
                type: t('careers.openings.jobs.caseManager.type'),
                desc: t('careers.openings.jobs.caseManager.desc'),
                meta: [t('careers.openings.jobs.caseManager.term'), t('careers.openings.jobs.caseManager.location')],
                img: personalCareImg,
              },
              {
                role: t('careers.openings.jobs.rn.role'),
                dept: t('careers.openings.jobs.rn.dept'),
                type: t('careers.openings.jobs.rn.type'),
                desc: t('careers.openings.jobs.rn.desc'),
                meta: [t('careers.openings.jobs.rn.term'), t('careers.openings.jobs.rn.location')],
                img: alliedHealthImg,
              },
              {
                role: t('careers.openings.jobs.supportWorker.role'),
                dept: t('careers.openings.jobs.supportWorker.dept'),
                type: t('careers.openings.jobs.supportWorker.type'),
                desc: t('careers.openings.jobs.supportWorker.desc'),
                meta: [t('careers.openings.jobs.supportWorker.term'), t('careers.openings.jobs.supportWorker.location')],
                img: domesticAssistanceImg,
              },
            ].map((job, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-100 p-8 flex flex-col lg:flex-row gap-8 hover:shadow-lg transition-all group">
                <div className="flex-grow space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                    {job.dept} <span className="text-slate-300">•</span> {job.type}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{job.role}</h3>
                  <p className="text-slate-500 leading-relaxed max-w-2xl">{job.desc}</p>
                  <div className="flex flex-wrap gap-6 pt-2">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Briefcase size={16} /> {job.meta[0]}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin size={16} /> {job.meta[1]}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link
                      to="/apply"
                      className="inline-block bg-blue-600 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all"
                    >
                      {t('careers.openings.applyNow')}
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-64 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img src={job.img} alt={job.role} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
