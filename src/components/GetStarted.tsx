import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ClipboardCheck, Heart, ChevronDown, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { submitGetStarted } from '../api';
import { useTranslation } from 'react-i18next';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const GetStarted: React.FC = () => {
  const { t } = useTranslation();
  const [careFor, setCareFor] = useState('');
  const [supportType, setSupportType] = useState('Select a service...');
  const [bestTime, setBestTime] = useState('Anytime');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      setStatus('error');
      setStatusMessage(t('getStarted.messages.errorFill'));
      return;
    }
    setStatus('submitting');
    try {
      const res = await submitGetStarted({
        care_for: careFor,
        support_type: supportType,
        best_time: bestTime,
        full_name: fullName,
        phone,
      });
      setStatus('success');
      setStatusMessage(res.message || t('getStarted.messages.successSubmit'));
      setCareFor('');
      setSupportType('Select a service...');
      setBestTime('Anytime');
      setFullName('');
      setPhone('');
    } catch (err: any) {
      setStatus('error');
      setStatusMessage(err.message || t('getStarted.messages.errorSubmit'));
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6 text-center bg-slate-50/50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
            {t('getStarted.heroTitle')}
          </h1>
          <p className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            {t('getStarted.heroDesc')}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto mt-20 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[70%] h-px bg-slate-200 -z-0"></div>

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {[
              {
                step: t('getStarted.steps.1.title'),
                desc: t('getStarted.steps.1.desc'),
                icon: Calendar,
              },
              {
                step: t('getStarted.steps.2.title'),
                desc: t('getStarted.steps.2.desc'),
                icon: ClipboardCheck,
              },
              {
                step: t('getStarted.steps.3.title'),
                desc: t('getStarted.steps.3.desc'),
                icon: Heart,
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 shadow-xl shadow-blue-600/10">
                  <item.icon size={40} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">{item.step}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Form Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">{t('getStarted.formTitle')}</h2>
          <p className="text-slate-500 text-lg">
            {t('getStarted.formDesc')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 p-8 lg:p-12">

            {/* Status Toast */}
            {status === 'success' && (
              <div className="mb-8 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-5 py-4 text-sm font-medium">
                <CheckCircle size={20} />
                {statusMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-8 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm font-medium">
                <XCircle size={20} />
                {statusMessage}
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Who is this care for? */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-900">{t('getStarted.labels.careFor')}</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Self', 'Family', 'Friend'].map((option) => (
                    <label
                      key={option}
                      className="relative flex items-center p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors group"
                    >
                      <input
                        type="radio"
                        name="care-for"
                        value={option}
                        checked={careFor === option}
                        onChange={(e) => setCareFor(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600"
                      />
                      <div className="ml-4">
                        <span className="block text-sm font-bold text-slate-900">{t(`getStarted.options.careFor.${option.toLowerCase()}`)}</span>
                        <span className="block text-[10px] text-slate-400">
                          {t(`getStarted.options.careFor.${option.toLowerCase()}Desc`)}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Support & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">{t('getStarted.labels.supportType')}</label>
                  <div className="relative">
                    <select
                      value={supportType}
                      onChange={(e) => setSupportType(e.target.value)}
                      className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Select a service...">{t('getStarted.options.supportTypePlaceholder')}</option>
                      <option value="Support at Home(HCP)">{t('getStarted.options.services.hcp')}</option>
                      <option value="NDIS">{t('getStarted.options.services.ndis')}</option>
                      <option value="Support at Home(HCP) Package Upgrade">{t('getStarted.options.services.hcpUpgrade')}</option>
                      <option value="Care Services">{t('getStarted.options.services.careServices')}</option>
                      <option value="Application Reassessment">{t('getStarted.options.services.reassessment')}</option>
                      <option value="Non-Gov funded Support">{t('getStarted.options.services.nonGov')}</option>
                      <option value="Other Support">{t('getStarted.options.services.other')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">{t('getStarted.labels.bestTime')}</label>
                  <div className="relative">
                    <select
                      value={bestTime}
                      onChange={(e) => setBestTime(e.target.value)}
                      className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Anytime">{t('getStarted.options.time.anytime')}</option>
                      <option value="Morning">{t('getStarted.options.time.morning')}</option>
                      <option value="Afternoon">{t('getStarted.options.time.afternoon')}</option>
                      <option value="Evening">{t('getStarted.options.time.evening')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">{t('getStarted.labels.fullName')}</label>
                  <input
                    type="text"
                    placeholder={t('getStarted.placeholders.fullName')}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">{t('getStarted.labels.phone')}</label>
                  <input
                    type="tel"
                    placeholder={t('getStarted.placeholders.phone')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    {t('getStarted.buttons.submitting')}
                  </>
                ) : (
                  t('getStarted.buttons.submit')
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
