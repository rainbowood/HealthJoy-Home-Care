import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, Wallet, GraduationCap, Briefcase, MapPin, ArrowRight } from 'lucide-react';

export const Careers: React.FC = () => {
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCurCzMUbe3aSt3R_F7ktMh9v8neU4crBt6ZiiDnAzkMKhtWj4KxRSU4cJYWmJGMkG5xbyJxI_sMa3jfGI0dYbwxA15yJLZwmmKInl5zJQ-6QvH046_fXZ3GSC5l9CgYuNSgKwjZtu2hLRnRKaJeL75BSH3ADr2X4eL8SLw4HFLb6GBwEJNV0d29nqFAVZpx17_PTI9KCr4cj4f-eIwcnmfG0nzHBFebzw7OioNoIQMujL9Aqo8jfk1fYXRLDEFYDAwTYiWuLyWR65"
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
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Join Our Mission</span>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Join the HealthJoy Family
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Make a meaningful difference in people's lives while building a rewarding career with a team that truly cares for your well-being.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              View Openings
            </button>
            <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Why Work With Us</h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto mb-16">
            We offer more than just a job; we provide a supportive environment where you can grow personally and professionally.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Flexible Hours',
                desc: 'Work schedules that fit your lifestyle, whether you need morning, evening, or weekend shifts.',
                icon: Clock,
              },
              {
                title: 'Competitive Pay',
                desc: 'We offer industry-leading compensation, performance bonuses, and comprehensive health benefits.',
                icon: Wallet,
              },
              {
                title: 'Ongoing Training',
                desc: 'Access to continuous learning certifications and professional career development mentorship.',
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
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Our Application Process</h2>
          <p className="text-slate-500 text-lg mb-16">Transparent steps to join our professional care team</p>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-slate-200 -translate-y-12 z-0"></div>
            
            {[
              { step: '1', title: 'Apply', desc: 'Submit your resume and certifications through our online portal.' },
              { step: '2', title: 'Interview', desc: 'Meet with our team for a personal interview and background check.' },
              { step: '3', title: 'Onboarding', desc: 'Attend our orientation program and start your first placement.' },
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
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900">Current Openings</h2>
            </div>
            <div className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              12 Positions Available
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                role: 'Case Manager',
                dept: 'CARE MANAGEMENT',
                type: 'Remote/Field',
                desc: 'Coordinate and manage individual care plans, ensuring our clients receive high-quality, personalized support and resources.',
                meta: ['Full-time / Part-time', 'Sydney, NSW'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI0rbTW7kpi0xS_F9ssd5Lb42KL0tVbcAju4r3EEUudC4kcu4VXcUzNnzPZIgI5QouAQ6lMW5CN0o4L8kDB06zV3pE9LLffF31K9eXT0QBPOP_jDlEHG-u8Gi5TvhsuC7O1x1M8D9wK0UiPHGHwDXFpHZ5TkFZKqNokO08bKoHwd00L5VSUjVAi1wr50LqHP_4sr4qb08c5tBFSNYUdjxt786o1_Ol10n_lU9nBlyPmak7eoQROsfzdUkWX5a6x0fjM1_C_DdzrTB-',
              },
              {
                role: 'Registered Nurse (RN)',
                dept: 'NURSING',
                type: 'Field-based',
                desc: 'Provide professional medical care, medication management, and patient assessments in home environments.',
                meta: ['Full-time / Part-time', 'Sydney, NSW'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_o7QkD8VfOkwBWcL7htsva-9X6WY4G_xC5YicP8pXJyu13J4SVGLI_WTMrUXlYl2BecP_IuGfvNaQKSE7ZzQrkG_OU_ddFDW244AO9qxSfbLyQBkAVIoCRgq3qrwooayEw0zZfiWm6gQI7dxyIlbcAExqyrSUBJceLtr4N1O4fawTaxLf_1zqvJ1AEKd4TFxpBC4cK-eWkJrxXlMjMj1A8xohGVO7nhcz3KCZWK9MnasZQ-9h4L1TWdpvbBPptJGbU1--jONzexIP',
              },
              {
                role: 'Support Worker',
                dept: 'SUPPORT',
                type: 'Flexible',
                desc: 'Assist with housekeeping, grocery shopping, and meal preparation for seniors living independently.',
                meta: ['Part-time', 'Sydney, NSW'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJC7Cm5kA84WvdQaf9J5_caozTdQ2LQxC7ceoDyGbHRYuQgjylMvSJQY5Dg-H7wWjhtyTNoPzPkUxQORgjebDAMd-Z0awmX95C4MhIMzvwlrnfWWSsj7VJ8ovWKPGD9efYPzHH_6AWbsnKAhvyfZNJMq9NA0-SbIvxpZUIVQyGb1K9ra2dOB8uHlrBR6-DeDarxCEuIc7ymUWvO8g1hiCIESWqVsdzb9pMiReUpbWgFr3gAY5HkleeT05eiUAbXysZ5MaztifC1vOz',
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
                      Apply Now
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
