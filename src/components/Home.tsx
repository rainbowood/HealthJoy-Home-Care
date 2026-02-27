import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export const Home: React.FC = () => {
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
            <div className="text-blue-600 text-sm font-bold uppercase tracking-widest">
              Trusted Home Care Partner
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              HealthJoy: Empowering Independent Living
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Professional and compassionate home care services tailored to your unique needs. At HealthJoy, we help you or your loved ones maintain independence in the comfort of home.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/get-started"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-blue-700 transition-all"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-bold text-base hover:bg-slate-50 transition-all"
              >
                Our Services
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK2h4Hz8Dzi7AsiDh3nydW08ryxrTSX5AxTW1yljEv5u_x2MjjPNUJeoqbkTu__AcaQ5PPI7aeoK2nOsCnxGZp09_ZX4f26gYMEOo2suUG48ywNIJuRAQdTq-JwkSFzEufqkwNDyTzV6d1eMtSw2h6-fXY6m4yGsfMGYQfXOPCk5N-AaVtdZ4XQRMPHUVhXj8qt_JX8WPmJd7AX5-42sh9wuflBlzaCXlW-PitzKu6WFNO898SBpinjXNWcWmTnnhvDSi4zj8PIh1t"
                alt="Caregiver with elderly person"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3 text-slate-400">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Well-Established Partners</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Users size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Experienced Staff</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Clock size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Award size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Certified Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Comprehensive care solutions designed to support your lifestyle and health requirements.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-bold text-sm group"
                >
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-blue-50/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Why Choose HealthJoy Home Care?</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Personalized Care Plans</h4>
                  <p className="text-slate-500 text-sm">We don't believe in one-size-fits-all. Every client receives a care plan tailored to their specific needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Vetted Caregivers</h4>
                  <p className="text-slate-500 text-sm">Our team undergoes rigorous background checks and continuous training to ensure high-quality care.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Free Consultation Service</h4>
                  <p className="text-slate-500 text-sm">We provide professional advice to help you or your family members navigate home care options and maximize your support benefits.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <p className="text-3xl font-bold text-blue-600 mb-1">20+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Health Care</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <p className="text-3xl font-bold text-blue-600 mb-1">2k+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Happy Families</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <p className="text-3xl font-bold text-blue-600 mb-1">100%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Satisfaction</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <p className="text-3xl font-bold text-blue-600 mb-1">24h</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We are proud to share the experiences of the families we support every day.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah M.',
              role: 'Daughter of Client',
              quote: '"HealthJoy provided exceptional care for my mother. Their caregivers are not just professional but truly compassionate people who treated her like family."'
            },
            {
              name: 'James R.',
              role: 'Primary Guardian',
              quote: '"The transition to home care was seamless thanks to the team. Their personalized care plan perfectly matches my father\'s daily needs and routine."'
            },
            {
              name: 'L. W.',
              role: 'Beecroft Resident',
              quote: '"The nursing support we received post-surgery was top-notch. Efficient, professional, and very reassuring during a difficult recovery period."'
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-10 rounded-2xl flex flex-col">
              <div className="flex gap-1 mb-6 text-blue-600">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed mb-8 grow">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
