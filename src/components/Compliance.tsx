import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  TrendingUp,
  UserCircle,
  Shield,
  CheckCircle2,
  FileCheck,
  Users,
  Award,
  Stethoscope,
  Scale,
  MessageSquare,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Compliance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck size={12} />
              {t('compliance.heroBadge')}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              {t('compliance.heroTitle')}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
              {t('compliance.heroDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                {t('compliance.buttons.viewCertifications')}
              </button>
              <button className="bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-lg font-bold text-sm hover:bg-slate-50 transition-all">
                {t('compliance.buttons.contactQuality')}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                alt="Healthcare Professional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('compliance.commitment.title')}</h2>
          <p className="text-slate-500 leading-relaxed">
            {t('compliance.commitment.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: t('compliance.commitment.improvement.title'),
              desc: t('compliance.commitment.improvement.desc'),
              icon: TrendingUp
            },
            {
              title: t('compliance.commitment.personCentered.title'),
              desc: t('compliance.commitment.personCentered.desc'),
              icon: UserCircle
            },
            {
              title: t('compliance.commitment.safetyFirst.title'),
              desc: t('compliance.commitment.safetyFirst.desc'),
              icon: Shield
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Compliance Section (Dark) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#0A1128] rounded-[40px] p-8 lg:p-20 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">{t('compliance.regulatory.title')}</h2>
              <p className="text-slate-400 leading-relaxed">
                {t('compliance.regulatory.subtitle')}
              </p>
              <div className="space-y-4">
                {[
                  t('compliance.regulatory.points.sah'),
                  t('compliance.regulatory.points.mac'),
                  t('compliance.regulatory.points.acqs')
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 size={20} className="text-blue-500" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: t('compliance.regulatory.badges.sah'), icon: ShieldCheck },
                { label: t('compliance.regulatory.badges.mac'), icon: Users },
                { label: t('compliance.regulatory.badges.quality'), icon: Award },
                { label: t('compliance.regulatory.badges.iso'), icon: FileCheck }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center group hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0A1128]">
                    <item.icon size={24} />
                  </div>
                  <span className="text-[10px] font-black text-white tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Staff Vetting */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8">
        {/* Insurance */}
        <div className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
              <Shield size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{t('compliance.insurance.title')}</h3>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            {t('compliance.insurance.subtitle')}
          </p>
          <div className="space-y-4">
            {[
              { label: t('compliance.insurance.points.publicLiability'), value: t('compliance.insurance.points.publicLiabilityValue') },
              { label: t('compliance.insurance.points.professionalIndemnity'), value: t('compliance.insurance.points.professionalIndemnityValue') },
              { label: t('compliance.insurance.points.workersComp'), value: t('compliance.insurance.points.workersCompValue') }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-xl">
                <span className="font-bold text-slate-900">{item.label}</span>
                <span className="text-emerald-600 font-black text-xs uppercase tracking-widest">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Vetting */}
        <div className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
              <UserCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{t('compliance.vetting.title')}</h3>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            {t('compliance.vetting.subtitle')}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: t('compliance.vetting.points.police.title'), desc: t('compliance.vetting.points.police.desc'), icon: Scale },
              { title: t('compliance.vetting.points.wwcc.title'), desc: t('compliance.vetting.points.wwcc.desc'), icon: Users },
              { title: t('compliance.vetting.points.screen.title'), desc: t('compliance.vetting.points.screen.desc'), icon: ShieldCheck },
              { title: t('compliance.vetting.points.quals.title'), desc: t('compliance.vetting.points.quals.desc'), icon: Stethoscope }
            ].map((item, i) => (
              <div key={i} className="p-5 border border-slate-100 rounded-xl space-y-3">
                <div className="text-blue-600">
                  <item.icon size={20} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-[10px] text-slate-400 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback & Grievances */}
      <section className="max-w-7xl mx-auto px-6 py-20 mb-20">
        <div className="bg-blue-50/50 rounded-[40px] p-12 lg:p-20 text-center space-y-8">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/20">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">{t('compliance.feedback.title')}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('compliance.feedback.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <h4 className="font-bold text-blue-600">{t('compliance.feedback.internal.title')}</h4>
              <p className="text-xs text-slate-400">{t('compliance.feedback.internal.desc')}</p>
              <Link
                to="/contact"
                className="block w-full py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all text-center"
              >
                {t('compliance.feedback.internal.button')}
              </Link>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <h4 className="font-bold text-blue-600">{t('compliance.feedback.advocacy.title')}</h4>
              <p className="text-xs text-slate-400">{t('compliance.feedback.advocacy.desc')}</p>
              <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                {t('compliance.feedback.advocacy.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
