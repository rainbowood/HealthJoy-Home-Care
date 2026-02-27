import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Star, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Caregivers: React.FC = () => {
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
            Our Caregiver <span className="text-blue-400">Standards</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-xl md:text-2xl font-medium"
          >
            We only hire the best, so you can have peace of mind.
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
              <h3 className="text-2xl font-bold text-slate-900">Rigorous Screening</h3>
              <p className="text-slate-600 leading-relaxed">
                Every caregiver undergoes a comprehensive background check, including national police checks, working with children checks, and professional reference verification.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Certified Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team consists of qualified professionals with certifications in Individual Support, Nursing, or related healthcare fields, ensuring expert care delivery.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <UserCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Personalized Matching</h3>
              <p className="text-slate-600 leading-relaxed">
                We don't just assign a caregiver; we match them based on personality, language, interests, and specific care needs to foster genuine connections.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Ongoing Training</h3>
              <p className="text-slate-600 leading-relaxed">
                HealthJoy provides continuous professional development to our staff, keeping them updated on the latest best practices in dementia care, mobility support, and more.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Compassion First</h3>
              <p className="text-slate-600 leading-relaxed">
                Beyond skills, we look for empathy. Our caregivers are chosen for their heart and their genuine desire to make a positive difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black text-slate-900">Are You a Passionate Caregiver?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We are always looking for dedicated individuals to join our growing team. If you have the skills and the heart for care, we'd love to hear from you.
            </p>
            <Link
              to="/careers"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              Apply to Join Our Team
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
