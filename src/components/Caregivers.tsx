import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Star, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Caregivers: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2pVkB6s3a_pfA_P2B_BtFICfaONLXaE9fpIxw_WHEJnYYCwGvvwfoKeXrK_kMdiOxucHVOCkYZQ4L6uEgunKT4HDeemrYjqaHOeaWz1geXliZp8NjseE7K7FrtdmunW5C45k5NWQmTNl1UW86imGBJUr7CtH89U6N6iLsb7waEqIziWHv7Iaojp6yhKmqvhd8Gcoz-rkSZyaSN0bl0zvFfEhEz-0p8Z9izqhcQMRlwB1Ygu3VfOCK7tJcNuYNbGDggEWCeXSyDUM"
          alt="Caregiver standards"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            {t('caregivers.heroTitle')} <span className="text-blue-400">{t('caregivers.heroHighlight')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-xl md:text-2xl font-medium"
          >
            {t('caregivers.heroDesc')}
          </motion.p>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{t('caregivers.standards.screening.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('caregivers.standards.screening.desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{t('caregivers.standards.certified.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('caregivers.standards.certified.desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <UserCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{t('caregivers.standards.matching.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('caregivers.standards.matching.desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{t('caregivers.standards.training.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('caregivers.standards.training.desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{t('caregivers.standards.compassion.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('caregivers.standards.compassion.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black text-slate-900">{t('caregivers.cta.title')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('caregivers.cta.desc')}
            </p>
            <Link
              to="/careers"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              {t('caregivers.cta.button')}
            </Link>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0PUbdgmWDiz9xfZDrEo-dSv9OpSbgkKwFKnxXY9FqGbdGdpEuR2xBYSGJpeIdoByVW12h7VwRIcmN_4gIgmgAZZ0Zp5Mcz-vK0px78JjPcirwRCByHRnyapkY19LwvE_QRkclXSW50_RpPqbsfQobLzx1gI0o7_oZgS3Ik77IBaEFnVC6IlIxFf_gfK1nTkeYdnq1OsYffgM2tcOEBEMROPNfE9vtxrom8uB6Kg0bW3hWlujH7K7ifkBSgmeezklLC1q-zRRdOlAl"
              alt="Happy caregiver"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
