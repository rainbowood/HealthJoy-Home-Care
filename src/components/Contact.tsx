import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import { Clock, Phone, Mail, MessageSquare, ChevronDown, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { submitContact } from '../api';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      setStatus('error');
      setStatusMessage('Please fill in your name and email.');
      return;
    }
    setStatus('submitting');
    try {
      const res = await submitContact({
        full_name: fullName,
        email,
        phone,
        subject,
        message,
      });
      setStatus('success');
      setStatusMessage(res.message || 'Inquiry submitted successfully!');
      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('General Inquiry');
      setMessage('');
    } catch (err: any) {
      setStatus('error');
      setStatusMessage(err.message || 'Failed to submit. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
          We're here to help you and your loved ones with professional home care services. Reach out to our team today for personalized support.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Office Hours Card */}
          <div className="lg:col-span-1 bg-white rounded-[32px] shadow-sm border border-slate-100 p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-3 text-blue-600 mb-10">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <Clock size={20} />
              </div>
              <h3 className="text-xl font-bold text-blue-600">Office Hours</h3>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Monday - Friday</span>
                <span className="text-slate-500">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Saturday</span>
                <span className="text-slate-500">By Appointment</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Sunday</span>
                <span className="font-bold text-red-500 uppercase">CLOSED</span>
              </div>
            </div>

            <div className="mt-12 bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50">
              <h4 className="text-sm font-bold text-blue-600 mb-2">Emergency Support:</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                For urgent care needs outside of regular hours, our phone line remains available 24/7.
              </p>
            </div>
          </div>

          {/* Inquiry Form Card */}
          <div className="lg:col-span-2 bg-white rounded-[32px] shadow-sm border border-slate-100 p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h3>

            {/* Status Toast */}
            {status === 'success' && (
              <div className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-5 py-4 text-sm font-medium animate-in">
                <CheckCircle size={20} />
                {statusMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm font-medium">
                <XCircle size={20} />
                {statusMessage}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="0493-334-910"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Subject</label>
                  <div className="relative">
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Support Services</option>
                      <option>Career Opportunities</option>
                      <option>Feedback</option>
                      <option>Complaint and dispute</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">Message</label>
                <textarea
                  placeholder="How can we help you?"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-10 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Phone size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Phone</h4>
            <p className="text-sm text-slate-500 mb-6">Available 24/7 for urgent care needs.</p>
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-black text-blue-600 hover:underline">
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-10 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Mail size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Email</h4>
            <p className="text-sm text-slate-500 mb-6">General inquiries and feedback.</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-blue-600 hover:underline">
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* WeChat Card */}
          <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-10 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <MessageSquare size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">WeChat</h4>
            <div className="w-24 h-24 bg-slate-50 rounded-xl p-1 border border-slate-100 mb-4">
              <img src={CONTACT_INFO.wechatQR} alt="WeChat QR" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <p className="text-sm font-bold text-slate-900">ID: <span className="text-slate-500 font-medium">HealthJoy_Care</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};
