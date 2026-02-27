import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_PORT === '465',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

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

export async function sendApplicationEmail(data: {
    full_name: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    position: string;
    experience: string;
    drivers_license: string;
    certificates: string[];
    languages: string[];
    skills: string[];
    cover_letter: string;
    resume_url?: string | null;
}) {
    const html = `
        <h2>New Job Application</h2>
        <p><strong>Full Name:</strong> ${data.full_name}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Driver's License:</strong> ${data.drivers_license}</p>
        <p><strong>Certificates:</strong> ${data.certificates.join(', ')}</p>
        <p><strong>Languages:</strong> ${data.languages.join(', ')}</p>
        <p><strong>Skills:</strong> ${data.skills.join(', ')}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${data.cover_letter || 'No cover letter provided'}</p>
        ${data.resume_url ? `<p><strong>Resume URL:</strong> <a href="${data.resume_url}">${data.resume_url}</a></p>` : '<p><strong>Resume:</strong> No resume uploaded</p>'}
    `;

    return transporter.sendMail({
        from: FROM,
        to: DEFAULT_TO,
        subject: `[Job Application] ${data.position} from ${data.full_name}`,
        html,
    });
}
