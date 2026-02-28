import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Globe,
  HeartPulse,
  Brain,
  Apple,
  ShieldCheck,
  Briefcase,
  Shield,
  FileText,
  Scale,
  ChevronRight,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Links: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
            {t('linksPage.heroTitle')}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            {t('linksPage.heroDesc')}
          </p>
        </div>
      </section>

      {/* Government Resources */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900">{t('linksPage.gov.title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: t('linksPage.gov.mac.title'),
              desc: t('linksPage.gov.mac.desc'),
              icon: Building2,
              href: 'https://www.myagedcare.gov.au/'
            },
            {
              title: t('linksPage.gov.ndis.title'),
              desc: t('linksPage.gov.ndis.desc'),
              icon: Globe,
              href: 'https://www.ndis.gov.au/'
            },
            {
              title: t('linksPage.gov.health.title'),
              desc: t('linksPage.gov.health.desc'),
              icon: HeartPulse,
              href: 'https://www.health.gov.au/'
            }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-100 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Health & Wellness */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900">{t('linksPage.health.title')}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: t('linksPage.health.dementia.title'),
              desc: t('linksPage.health.dementia.desc'),
              icon: Brain,
              href: 'https://www.dementia.org.au/'
            },
            {
              title: t('linksPage.health.eating.title'),
              desc: t('linksPage.health.eating.desc'),
              icon: Apple,
              href: 'https://www.eatforhealth.gov.au/'
            }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 bg-white border border-slate-100 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Our Quick Links */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900">{t('linksPage.quickLinks.title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: t('linksPage.quickLinks.services'), icon: HeartPulse, to: '/services' },
            { title: t('linksPage.quickLinks.caregivers'), icon: ShieldCheck, to: '/caregivers' },
            { title: t('linksPage.quickLinks.careers'), icon: Briefcase, to: '/careers' }
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="flex items-center gap-4 bg-blue-50/50 hover:bg-blue-50 border border-blue-100/50 rounded-xl p-5 transition-colors group"
            >
              <div className="text-blue-600">
                <item.icon size={20} />
              </div>
              <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900">{t('linksPage.legal.title')}</h2>
        </div>
        <div className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-sm">
          {[
            { title: t('linksPage.legal.privacy'), icon: Shield, to: '/privacy' },
            { title: t('linksPage.legal.terms'), icon: FileText, to: '/terms' },
            { title: t('linksPage.legal.advocacy'), icon: Scale, to: '/terms' }
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className={`flex items-center justify-between p-6 hover:bg-slate-50 transition-colors ${i !== 2 ? 'border-bottom border-slate-100' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className="text-slate-400">
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-slate-900">{item.title}</span>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
