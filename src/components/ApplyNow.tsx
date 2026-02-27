import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartPulse, Globe, FileText, Briefcase, Award, Upload, Phone, Mail, MapPin, Share2, Instagram, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { submitApplication } from '../api';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ApplyNow: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('Select a position');
  const [experience, setExperience] = useState('Select experience level');
  const [driversLicense, setDriversLicense] = useState('Select license type');
  const [certificates, setCertificates] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const toggleArrayItem = (arr: string[], setArr: (v: string[]) => void, item: string) => {
    setArr(arr.includes(item) ? arr.filter(v => v !== item) : [...arr, item]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      setStatus('error');
      setStatusMessage('Please fill in your name, email, and phone number.');
      return;
    }
    setStatus('submitting');
    try {
      const formData = new FormData();
      formData.append('full_name', fullName);
      formData.append('gender', gender);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('address', address);
      formData.append('position', position);
      formData.append('experience', experience);
      formData.append('drivers_license', driversLicense);
      formData.append('certificates', JSON.stringify(certificates));
      formData.append('languages', JSON.stringify(languages));
      formData.append('skills', JSON.stringify(skills));
      formData.append('cover_letter', coverLetter);
      if (resume) {
        formData.append('resume', resume);
      }

      const res = await submitApplication(formData);
      setStatus('success');
      setStatusMessage(res.message || 'Application submitted successfully!');
      // Reset form
      setFullName('');
      setGender('');
      setEmail('');
      setPhone('');
      setAddress('');
      setPosition('Select a position');
      setExperience('Select experience level');
      setDriversLicense('Select license type');
      setCertificates([]);
      setLanguages([]);
      setSkills([]);
      setCoverLetter('');
      setResume(null);
    } catch (err: any) {
      setStatus('error');
      setStatusMessage(err.message || 'Failed to submit. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pt-12">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
            Join Our Team
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">Apply Now</h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Help us provide exceptional care. Join a team dedicated to making a real difference in people's lives every single day.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-sm border border-slate-100 p-8 lg:p-12">

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

          <form className="space-y-12" onSubmit={handleSubmit}>

            {/* 1. Personal Information */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <UserIcon size={18} />
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">Personal Information</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Gender</label>
                  <div className="flex items-center gap-6 h-[54px]">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 border-slate-200 focus:ring-blue-600/20" />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Male</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 border-slate-200 focus:ring-blue-600/20" />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Female</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="example@healthjoy.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="0400 000 000" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Home Address</label>
                  <input type="text" placeholder="123 Care Street, Suburb, State, Postcode" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all" />
                </div>
              </div>
            </div>

            {/* 2. Professional Background */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <Briefcase size={18} />
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">Professional Background</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Position Applied For</label>
                  <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none">
                    <option>Select a position</option>
                    <option>Case Manager</option>
                    <option>Registered Nurse</option>
                    <option>Support Worker</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Care Support Experience</label>
                  <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none">
                    <option>Select experience level</option>
                    <option>0-1 years</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Driver's License</label>
                  <select value={driversLicense} onChange={(e) => setDriversLicense(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none">
                    <option>Select license type</option>
                    <option>Full License</option>
                    <option>Provisional P2</option>
                    <option>Provisional P1</option>
                    <option>International</option>
                    <option>No License</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Qualifications & Skills */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <Award size={18} />
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">Qualifications & Skills</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Certificates (Multiple choice)</label>
                  <div className="flex flex-wrap gap-3">
                    {['Individual Support III', 'Individual Support IV', 'Community Service', 'First Aid', 'Others'].map(cert => (
                      <label key={cert} className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-4 py-3 cursor-pointer hover:border-blue-600/30 transition-all group">
                        <input
                          type="checkbox"
                          checked={certificates.includes(cert)}
                          onChange={() => toggleArrayItem(certificates, setCertificates, cert)}
                          className="w-4 h-4 rounded text-blue-600 border-slate-200 focus:ring-blue-600/20"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Languages (Multiple choice)</label>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                    {['Mandarin', 'Cantonese', 'Shanghainese', 'English', 'Korean', 'Others'].map(lang => (
                      <label key={lang} className="flex flex-col items-center justify-center gap-2 bg-white border border-slate-100 rounded-xl p-4 cursor-pointer hover:border-blue-600/30 transition-all group">
                        <input
                          type="checkbox"
                          checked={languages.includes(lang)}
                          onChange={() => toggleArrayItem(languages, setLanguages, lang)}
                          className="w-4 h-4 rounded text-blue-600 border-slate-200 focus:ring-blue-600/20"
                        />
                        <span className="text-xs text-slate-600 group-hover:text-slate-900">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Skills (Multiple choice)</label>
                  <div className="flex flex-wrap gap-3">
                    {['Cooking', 'Cleaning', 'Personal Care', 'Others'].map(skill => (
                      <label key={skill} className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-6 py-3 cursor-pointer hover:border-blue-600/30 transition-all group">
                        <input
                          type="checkbox"
                          checked={skills.includes(skill)}
                          onChange={() => toggleArrayItem(skills, setSkills, skill)}
                          className="w-4 h-4 rounded text-blue-600 border-slate-200 focus:ring-blue-600/20"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Application Materials */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <FileText size={18} />
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">Application Materials</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Cover Letter (Optional)</label>
                  <textarea rows={6} placeholder="Tell us why you'd be a great fit for HealthJoy..." value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all resize-none"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">Submit Resume</label>
                  <input
                    type="file"
                    id="resume-upload"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setResume(e.target.files[0]);
                      }
                    }}
                  />
                  <div
                    onClick={() => document.getElementById('resume-upload')?.click()}
                    className={`border-2 border-dashed rounded-[24px] p-12 text-center space-y-4 hover:border-blue-600/30 transition-all cursor-pointer bg-[#F8FAFC] ${resume ? 'border-blue-600/50 bg-blue-50/10' : 'border-slate-200'}`}
                  >
                    <div className={`w-12 h-12 rounded-xl shadow-sm flex items-center justify-center mx-auto ${resume ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}>
                      {resume ? <CheckCircle size={24} /> : <Upload size={24} />}
                    </div>
                    <div className="space-y-1">
                      {resume ? (
                        <>
                          <p className="text-sm text-blue-600 font-bold">{resume.name}</p>
                          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">File selected - click to change</p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-slate-600">Drag & drop your resume or <span className="text-blue-600 font-bold">browse files</span></p>
                          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">PDF, DOCX up to 10MB</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                By submitting, you agree to our <Link to="/terms" className="text-slate-600 font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-slate-600 font-bold hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const UserIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
