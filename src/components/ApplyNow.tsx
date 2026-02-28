import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartPulse, Globe, FileText, Briefcase, Award, Upload, Phone, Mail, MapPin, Share2, Instagram, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { submitApplication } from '../api';
import { useTranslation } from 'react-i18next';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ApplyNow: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [driversLicense, setDriversLicense] = useState('');
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
      setStatusMessage(t('applyNow.status.missingFields'));
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
      setStatusMessage(t('applyNow.status.success'));
      // Reset form
      setFullName('');
      setGender('');
      setEmail('');
      setPhone('');
      setAddress('');
      setPosition('');
      setExperience('');
      setDriversLicense('');
      setCertificates([]);
      setLanguages([]);
      setSkills([]);
      setCoverLetter('');
      setResume(null);
    } catch (err: any) {
      setStatus('error');
      setStatusMessage(err.message || t('applyNow.status.error'));
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pt-12">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
            {t('applyNow.heroBadge')}
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">{t('applyNow.heroTitle')}</h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            {t('applyNow.heroDesc')}
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
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">{t('applyNow.sections.personalInfo')}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.fullName')}</label>
                  <input type="text" placeholder={t('applyNow.placeholders.fullName')} value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.gender')}</label>
                  <div className="flex items-center gap-6 h-[54px]">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 border-slate-200 focus:ring-blue-600/20" />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{t('applyNow.labels.male')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600 border-slate-200 focus:ring-blue-600/20" />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{t('applyNow.labels.female')}</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.email')}</label>
                  <input type="email" placeholder={t('applyNow.placeholders.email')} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.phone')}</label>
                  <input type="tel" placeholder={t('applyNow.placeholders.phone')} value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.address')}</label>
                  <input type="text" placeholder={t('applyNow.placeholders.address')} value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all" />
                </div>
              </div>
            </div>

            {/* 2. Professional Background */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <Briefcase size={18} />
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">{t('applyNow.sections.professionalBackground')}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.position')}</label>
                  <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none">
                    <option value="">{t('applyNow.placeholders.position')}</option>
                    <option value="Case Manager">{t('applyNow.options.positions.caseManager')}</option>
                    <option value="Registered Nurse">{t('applyNow.options.positions.nurse')}</option>
                    <option value="Support Worker">{t('applyNow.options.positions.supportWorker')}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.experience')}</label>
                  <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none">
                    <option value="">{t('applyNow.placeholders.experience')}</option>
                    <option value="0-1 years">{t('applyNow.options.experience.0-1')}</option>
                    <option value="1-3 years">{t('applyNow.options.experience.1-3')}</option>
                    <option value="3-5 years">{t('applyNow.options.experience.3-5')}</option>
                    <option value="5+ years">{t('applyNow.options.experience.5+')}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.license')}</label>
                  <select value={driversLicense} onChange={(e) => setDriversLicense(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none">
                    <option value="">{t('applyNow.placeholders.license')}</option>
                    <option value="Full License">{t('applyNow.options.license.full')}</option>
                    <option value="Provisional P2">{t('applyNow.options.license.p2')}</option>
                    <option value="Provisional P1">{t('applyNow.options.license.p1')}</option>
                    <option value="International">{t('applyNow.options.license.international')}</option>
                    <option value="No License">{t('applyNow.options.license.none')}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Qualifications & Skills */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <Award size={18} />
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">{t('applyNow.sections.qualifications')}</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.certificates')}</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: 'Individual Support III', label: t('applyNow.options.certificates.support3') },
                      { id: 'Individual Support IV', label: t('applyNow.options.certificates.support4') },
                      { id: 'Community Service', label: t('applyNow.options.certificates.community') },
                      { id: 'First Aid', label: t('applyNow.options.certificates.firstAid') },
                      { id: 'Others', label: t('applyNow.options.certificates.others') }
                    ].map(cert => (
                      <label key={cert.id} className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-4 py-3 cursor-pointer hover:border-blue-600/30 transition-all group">
                        <input
                          type="checkbox"
                          checked={certificates.includes(cert.id)}
                          onChange={() => toggleArrayItem(certificates, setCertificates, cert.id)}
                          className="w-4 h-4 rounded text-blue-600 border-slate-200 focus:ring-blue-600/20"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{cert.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.languages')}</label>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                    {[
                      { id: 'Mandarin', label: t('applyNow.options.languages.mandarin') },
                      { id: 'Cantonese', label: t('applyNow.options.languages.cantonese') },
                      { id: 'Shanghainese', label: t('applyNow.options.languages.shanghainese') },
                      { id: 'English', label: t('applyNow.options.languages.english') },
                      { id: 'Korean', label: t('applyNow.options.languages.korean') },
                      { id: 'Others', label: t('applyNow.options.languages.others') }
                    ].map(lang => (
                      <label key={lang.id} className="flex flex-col items-center justify-center gap-2 bg-white border border-slate-100 rounded-xl p-4 cursor-pointer hover:border-blue-600/30 transition-all group">
                        <input
                          type="checkbox"
                          checked={languages.includes(lang.id)}
                          onChange={() => toggleArrayItem(languages, setLanguages, lang.id)}
                          className="w-4 h-4 rounded text-blue-600 border-slate-200 focus:ring-blue-600/20"
                        />
                        <span className="text-[10px] text-center text-slate-600 group-hover:text-slate-900 leading-tight">{lang.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.skills')}</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: 'Cooking', label: t('applyNow.options.skills.cooking') },
                      { id: 'Cleaning', label: t('applyNow.options.skills.cleaning') },
                      { id: 'Personal Care', label: t('applyNow.options.skills.personalCare') },
                      { id: 'Others', label: t('applyNow.options.skills.others') }
                    ].map(skill => (
                      <label key={skill.id} className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-6 py-3 cursor-pointer hover:border-blue-600/30 transition-all group">
                        <input
                          type="checkbox"
                          checked={skills.includes(skill.id)}
                          onChange={() => toggleArrayItem(skills, setSkills, skill.id)}
                          className="w-4 h-4 rounded text-blue-600 border-slate-200 focus:ring-blue-600/20"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{skill.label}</span>
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
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">{t('applyNow.sections.materials')}</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.coverLetter')}</label>
                  <textarea rows={6} placeholder={t('applyNow.placeholders.coverLetter')} value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all resize-none"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">{t('applyNow.labels.resume')}</label>
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
                          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t('applyNow.upload.selected')}</p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: t('applyNow.upload.idle') }}></p>
                          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t('applyNow.upload.hint')}</p>
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
                    {t('applyNow.buttons.submitting')}
                  </>
                ) : (
                  t('applyNow.buttons.submit')
                )}
              </button>
              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                {i18n.language.startsWith('zh') || i18n.language === 'ja' || i18n.language === 'ko' ? (
                  <span>
                    {i18n.language === 'zh-TW' ? '提交申請即表示您同意我們的 ' :
                      i18n.language === 'ja' ? '応募を送信することで、当社の ' :
                        i18n.language === 'ko' ? '지원서를 제출함으로써 귀하는 당사의 ' : '提交申请即表示您同意我们的 '}
                    <Link to="/terms" className="text-slate-600 font-bold hover:underline">
                      {i18n.language === 'zh-TW' ? '服務條款' :
                        i18n.language === 'ja' ? '利用規約' :
                          i18n.language === 'ko' ? '이용 약관' : '服务条款'}
                    </Link>
                    {i18n.language === 'zh-TW' ? '和' :
                      i18n.language === 'ja' ? ' および ' :
                        i18n.language === 'ko' ? ' 및 ' : '和'}
                    <Link to="/privacy" className="text-slate-600 font-bold hover:underline">
                      {i18n.language === 'zh-TW' ? '隱私政策' :
                        i18n.language === 'ja' ? 'プライバシーポリシー' :
                          i18n.language === 'ko' ? '개인정보 처리방침' : '隐私政策'}
                    </Link>。
                  </span>
                ) : (
                  <span>By submitting, you agree to our <Link to="/terms" className="text-slate-600 font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-slate-600 font-bold hover:underline">Privacy Policy</Link>.</span>
                )}
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
