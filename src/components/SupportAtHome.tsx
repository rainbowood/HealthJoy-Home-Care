import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Users, Home, ArrowRight } from 'lucide-react';

export const SupportAtHome: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest w-fit">
              Home Care Service Provider
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Empowering Your Independence with HealthJoy Home Care
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Navigating the home care policies can be complex, but you don't have to do it alone. HealthJoy Home Care is dedicated to simplifying the process, providing personalized plan management, coordination, and professional daily support tailored specifically to your unique life goals.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquire Now</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Have questions? Fill out the form below and one of our HealthJoy specialists will contact you within 24 hours.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="0493-334-910" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Home Address</label>
                  <input 
                    type="text" 
                    placeholder="123 Example St, Suburb" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Service Required</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all appearance-none">
                    <option>Plan Management</option>
                    <option>Support Coordination</option>
                    <option>Daily Living Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can HealthJoy help you today?" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  Send Enquiry
                </button>
                <p className="text-[10px] text-slate-400 text-center leading-relaxed px-4">
                  By submitting this form, you agree to the HealthJoy Home Care Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-6 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">How HealthJoy Home Care Supports You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Plan Management',
                description: 'Focus on your goals while HealthJoy Home Care handles the financial administration, provider payments, and budget tracking of your funding.',
                icon: Layout
              },
              {
                title: 'Support Coordination',
                description: 'Our specialists help you understand your plan, find the right local services, and coordinate your supports for maximum impact on your wellbeing.',
                icon: Users
              },
              {
                title: 'Daily Living Support',
                description: 'HealthJoy Home Care provides practical assistance with personal care, household tasks, and community participation to help you live life your way.',
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Getting Started with HealthJoy Home Care</h2>
          <div className="space-y-12">
            {[
              {
                step: 1,
                title: 'Initial Consultation',
                description: 'Reach out to the HealthJoy team for a friendly, no-obligation chat about your current home care plan and your personal aspirations.'
              },
              {
                step: 2,
                title: 'Tailored Service Plan',
                description: 'We work together to design a support schedule that perfectly fits your lifestyle and maximizes the value of your funding.'
              },
              {
                step: 3,
                title: 'Seamless Transition',
                description: 'HealthJoy Home Care manages the paperwork and coordination with existing providers to ensure a smooth start to your new support services.'
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
