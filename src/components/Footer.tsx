import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MessageSquare, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-white"></div>
                  <div className="w-0.5 h-3 bg-white absolute"></div>
                </div>
              </div>
              <h2 className="text-xl font-black tracking-tight text-slate-900 uppercase">HealthJoy</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Compassionate home care services tailored to your needs. Empowering lives through professional support.
            </p>
            <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">ABN 626 886 163 55</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About HealthJoy</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Career Opportunities</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal & Quality Column */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8">Legal & Quality</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/compliance" className="hover:text-blue-600 transition-colors">Compliance</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Feedback & Complaints</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-slate-900 font-bold mb-8">Connect With Us</h4>
            <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100/50 flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-lg p-1 shadow-sm">
                <img src={CONTACT_INFO.wechatQR} alt="WeChat QR" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">WeChat Support</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-400">
          <p>© 2026 HealthJoy Home Care. All rights reserved.</p>
          <div className="flex gap-8">
            <button className="hover:text-blue-600 transition-colors">Cookies</button>
            <button className="hover:text-blue-600 transition-colors">Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
