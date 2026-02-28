import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest w-fit">
              <CheckCircle2 size={12} /> {t('servicesPage.heroBadge')}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              {t('servicesPage.heroTitle')}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {t('servicesPage.heroDesc')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-blue-700 transition-all"
              >
                {t('servicesPage.bookConsultation')}
              </Link>
              <Link
                to="/services"
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-bold text-base hover:bg-slate-50 transition-all"
              >
                {t('servicesPage.viewPricing')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0DYHWqNW4zd8uXTj01dqKsUoEZbOZ6aijIy-qP7qO7mfBupB9FSrMIqf6VoE65w41pfoM7K8KCyNqQmnbY_wRsXCVb0cRra9NlqOQDBFBDaSyPfFbTWSUMBya1U4M-5ljrsE6elrtjyMgUP8kvUkrwR9fIZcj4llw_0zIrtl2J0v9RGUlPiX1LMxyB0qWe_n0TltWsURo0Y_L6WwBTrlwnlKbtejIRsEl_Awr580p4blUveMEDkJzuJiQnFPC5pOnZ3UUwRH9s6Mm"
                alt="Caregiver with elderly person"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-xl">500+</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{t('servicesPage.activePlans')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personalization Banner */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 rounded-3xl border border-slate-100 bg-white p-10 lg:p-12 shadow-sm">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
                <Settings size={18} />
                <span>{t('servicesPage.personalizationTitle')}</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{t('servicesPage.personalizationSubtitle')}</h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                {t('servicesPage.personalizationDesc')}
              </p>
            </div>
            <Link
              to="/get-started"
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-blue-700 transition-all text-center"
            >
              {t('servicesPage.personalizationButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('servicesPage.specializedTitle')}</h2>
          <p className="text-slate-500 text-lg">{t('servicesPage.specializedSubtitle')}</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-600">
                      {IconComponent && <IconComponent size={20} />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{t(service.title)}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 grow">
                    {t(service.description)}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-bold text-sm group/link"
                  >
                    {t('action.learnMore')} <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
