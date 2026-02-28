import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Users, Home, ArrowRight, Loader2 } from 'lucide-react';
import { submitSupport } from '../api';
import { useTranslation } from 'react-i18next';

export const SupportAtHome: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    service_type: 'Plan Management',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitSupport(formData);
      setStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        address: '',
        service_type: 'Plan Management',
        message: ''
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || t('supportAtHome.form.errorSubmit'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest w-fit">
              {t('supportAtHome.heroBadge')}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              {t('supportAtHome.heroTitle')}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t('supportAtHome.heroDesc')}
            </p>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Gk3SqqjKb09daB4U1uLvcLpmKY9isDfF_WjWfOPgLP3JVH3vd7j8mQwnfiFLWd1GoHMxjxW0QvNMiva68FCdhhU5XS6oUvTXNPRMTHStm7mbBPEhcNEnFeiCw_p4ILVQhmcwjoBsLIZ5DlYt3VMIm5P7LoyQLNPobJMDyxE3TT3B1eaW2uc0-Qxqo5K0YZ6rJuhtLFQjEf_M7FAm6abucWxx9SYTEjgqPXFhhylSDU86AqE6qG5qR1D8K01mBq-I6NBFx77jzzEH"
                alt="Caregiver and senior"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100 sticky top-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('supportAtHome.form.title')}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {t('supportAtHome.form.desc')}
              </p>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-100 text-green-700 p-6 rounded-xl text-center">
                  <CheckCircle2 className="mx-auto mb-4 w-12 h-12" />
                  <h4 className="font-bold text-lg mb-2">{t('supportAtHome.form.successTitle')}</h4>
                  <p className="text-sm">{t('supportAtHome.form.successDesc')}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-bold text-sm hover:underline"
                  >
                    {t('supportAtHome.form.sendAnother')}
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-xs rounded-lg">
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t('supportAtHome.form.labels.fullName')}</label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder={t('supportAtHome.form.placeholders.fullName')}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t('supportAtHome.form.labels.email')}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('supportAtHome.form.placeholders.email')}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t('supportAtHome.form.labels.phone')}</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('supportAtHome.form.placeholders.phone')}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t('supportAtHome.form.labels.address')}</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder={t('supportAtHome.form.placeholders.address')}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t('supportAtHome.form.labels.service')}</label>
                    <div className="relative">
                      <select
                        name="service_type"
                        value={formData.service_type}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all appearance-none"
                      >
                        <option value="Personal Care">{t('supportAtHome.form.services.personal')}</option>
                        <option value="Residential Assistance">{t('supportAtHome.form.services.residential')}</option>
                        <option value="Social Support">{t('supportAtHome.form.services.social')}</option>
                        <option value="Allied Health & Therapeutic Services">{t('supportAtHome.form.services.allied')}</option>
                        <option value="Assistive Technology">{t('supportAtHome.form.services.assistive')}</option>
                        <option value="Home Modifications">{t('supportAtHome.form.services.modifications')}</option>
                        <option value="Health&Wellness">{t('supportAtHome.form.services.healthWellness')}</option>
                        <option value="Mental Health">{t('supportAtHome.form.services.mentalHealth')}</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t('supportAtHome.form.labels.message')}</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('supportAtHome.form.placeholders.message')}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    disabled={status === 'loading'}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        {t('supportAtHome.form.buttons.sending')}
                      </>
                    ) : (
                      t('supportAtHome.form.buttons.submit')
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center leading-relaxed px-4">
                    {t('supportAtHome.form.privacy')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-6 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">{t('supportAtHome.features.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('supportAtHome.features.items.1.title'),
                description: t('supportAtHome.features.items.1.desc'),
                icon: Layout
              },
              {
                title: t('supportAtHome.features.items.2.title'),
                description: t('supportAtHome.features.items.2.desc'),
                icon: Users
              },
              {
                title: t('supportAtHome.features.items.3.title'),
                description: t('supportAtHome.features.items.3.desc'),
                icon: Home
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <item.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-100 p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">{t('supportAtHome.steps.title')}</h2>
          <div className="space-y-12">
            {[
              {
                step: 1,
                title: t('supportAtHome.steps.items.1.title'),
                description: t('supportAtHome.steps.items.1.desc')
              },
              {
                step: 2,
                title: t('supportAtHome.steps.items.2.title'),
                description: t('supportAtHome.steps.items.2.desc')
              },
              {
                step: 3,
                title: t('supportAtHome.steps.items.3.title'),
                description: t('supportAtHome.steps.items.3.desc')
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
