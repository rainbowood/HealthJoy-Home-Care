import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_PORT === '465',
    auth: {
        user: process.env.EMAIL_USER || 'placeholder@example.com',
        pass: process.env.EMAIL_PASS || 'placeholder',
    },
});

// Check if credentials are missing but don't crash the process immediately
const hasEmailCreds = !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);
if (!hasEmailCreds) {
    console.warn('⚠️ EMAIL WARNING: EMAIL_USER or EMAIL_PASS is missing. Emails will fail to send.');
}

const DEFAULT_TO = process.env.EMAIL_TO || 'info@healthjoy.com.au';
const FROM = process.env.EMAIL_FROM || process.env.EMAIL_USER || 'healthjoyhomecare@gmail.com';

export async function sendContactEmail(data: {
    full_name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}) {
    const html = `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${data.full_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
    `;

    return transporter.sendMail({
        from: FROM,
        to: DEFAULT_TO,
        subject: `[Contact] ${data.subject || 'New Inquiry'} from ${data.full_name}`,
        html,
    });
}

export async function sendCareRequestEmail(data: {
    care_for: string;
    support_type: string;
    best_time: string;
    full_name: string;
    phone: string;
}) {
    const html = `
        <h2>New Care Request (Quick Start)</h2>
        <p><strong>Care For:</strong> ${data.care_for}</p>
        <p><strong>Support Type:</strong> ${data.support_type}</p>
        <p><strong>Best Time to Contact:</strong> ${data.best_time}</p>
        <p><strong>Client Name:</strong> ${data.full_name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
    `;

    return transporter.sendMail({
        from: FROM,
        to: DEFAULT_TO,
        subject: `[Care Request] New request from ${data.full_name}`,
        html,
    });
}

export async function sendApplicationEmail(data: any) {
    const html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #2563eb; color: white; padding: 24px;">
                <h1 style="margin: 0; font-size: 24px;">New Job Application</h1>
            </div>
            <div style="padding: 24px; color: #1e293b;">
                <p>Hello HealthJoy Team,</p>
                <p>A new job application has been submitted through the <strong>Apply Now</strong> page.</p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${data.full_name}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Position:</td><td>${data.position}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${data.email}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${data.phone}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Experience:</td><td>${data.experience}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Resume:</td><td>${data.resume_url ? `<a href="${data.resume_url}">Download Resume</a>` : 'Not provided'}</td></tr>
                </table>
            </div>
        </div>
    `;

    return transporter.sendMail({
        from: FROM,
        to: DEFAULT_TO,
        subject: `[JOB APPLICATION] ${data.position} - ${data.full_name}`,
        html,
    });
}

export async function sendSupportEmail(data: {
    full_name: string;
    email: string;
    phone: string;
    address?: string;
    service_type?: string;
    message?: string;
}) {
    const html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #2563eb; color: white; padding: 24px;">
                <h1 style="margin: 0; font-size: 24px;">New Support Enquiry</h1>
            </div>
            <div style="padding: 24px; color: #1e293b;">
                <p>Hello HealthJoy Team,</p>
                <p>A new enquiry has been submitted through the <strong>Support At Home</strong> page.</p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${data.full_name}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${data.email}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${data.phone}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Address:</td><td>${data.address || 'N/A'}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td>${data.service_type || 'N/A'}</td></tr>
                </table>
                ${data.message ? `<div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 4px;"><strong>Message:</strong><br>${data.message}</div>` : ''}
            </div>
        </div>
    `;

    return transporter.sendMail({
        from: FROM,
        to: DEFAULT_TO,
        subject: `[SUPPORT ENQUIRY] ${data.full_name}`,
        html,
    });
}
