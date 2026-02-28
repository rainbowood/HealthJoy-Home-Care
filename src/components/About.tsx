import React from 'react';
import { motion } from 'motion/react';
import { TEAM, VALUES } from '../constants';
import * as Icons from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrpUNUSu9SIUsrkVPfBTnHjzC9eqTdbU8SCpkG2lHe7l_qq_iNSZN5OGLpSN7XI1t3pqpkquhH0wJvtD_IiunfGKtMMJQaj2apXFTmfpp9fKNiSW4KBPRy-YKJaKyNiu_0gqDBhEXD07EqNjr8BnGUO6XnA33zIZLz0LmoS_-4IIAefvXgsKWctsCqYx_xamGIzL78nh2NFvyjuDyPDCZjIx2q-FSW79FInMGzJkpBYC9YKzl0rPAFwCY06PDAm4-5aY_1YtFNmC8d"
          alt="Healthcare team"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight"
          >
            {t('about.heroTitle')} <span className="text-blue-400">{t('about.heroHighlight')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-xl md:text-2xl font-medium max-w-2xl mx-auto"
          >
            {t('about.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-8">{t('about.storyTitle')}</h2>
          <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
            <p>
              {t('about.storyP1')}
            </p>
            <p>
              {t('about.storyP2')}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-4">{t('about.valuesTitle')}</h2>
            <p className="text-slate-500 text-xl">{t('about.valuesSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => {
              const IconComponent = (Icons as any)[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{t(value.title)}</h3>
                  <p className="text-slate-600 leading-relaxed">{t(value.description)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">{t('about.teamTitle')}</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">{t('about.teamSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-full w-40 h-40 shadow-lg border-4 border-slate-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-blue-600 font-bold text-sm mb-3">{t(member.role)}</p>
                <p className="text-slate-500 text-sm leading-relaxed px-4">{t(member.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
