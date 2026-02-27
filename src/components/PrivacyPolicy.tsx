import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 prose prose-slate">
      <h1 className="text-4xl font-black text-slate-900 mb-8">Privacy Policy</h1>
      <p className="text-slate-500 mb-8 italic">Last updated: May 20, 2026</p>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
        <p>
          HealthJoy Home Care ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the website, or otherwise when you contact us.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name and contact data (email, phone, address)</li>
          <li>Health information (only as necessary for care planning)</li>
          <li>Employment history (for job applicants)</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of business purposes described below:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To facilitate account creation and logon process.</li>
          <li>To send administrative information to you.</li>
          <li>To fulfill and manage your service requests.</li>
          <li>To respond to user inquiries and offer support.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900">4. Disclosure of Your Information</h2>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">6. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us at info@healthjoy.com.au.
        </p>
      </section>
    </div>
  );
};
