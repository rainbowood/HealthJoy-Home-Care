import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 prose prose-slate">
      <h1 className="text-4xl font-black text-slate-900 mb-8">Terms of Service</h1>
      <p className="text-slate-500 mb-8 italic">Last updated: May 20, 2026</p>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">1. Agreement to Terms</h2>
        <p>
          By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on HealthJoy Home Care's website for personal, non-commercial transitory viewing only.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">3. Disclaimer</h2>
        <p>
          The materials on HealthJoy Home Care's website are provided on an 'as is' basis. HealthJoy Home Care makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">4. Limitations</h2>
        <p>
          In no event shall HealthJoy Home Care or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HealthJoy Home Care's website.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of New South Wales, Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </section>
    </div>
  );
};
