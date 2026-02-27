import { Router, Request, Response } from 'express';
import multer from 'multer';
import { supabase } from '../supabase.js';
import { sendApplicationEmail } from '../email.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('resume'), async (req: Request, res: Response) => {
    try {
        console.log('Received Apply request body:', req.body);
        console.log('Received Apply file:', req.file);
        const {
            full_name,
            gender,
            email,
            phone,
            address,
            position,
            experience,
            drivers_license,
            certificates,
            languages,
            skills,
            cover_letter,
        } = req.body;

        // Validation
        if (!full_name || !email || !phone) {
            console.log('Validation failed:', { full_name, email, phone });
            const receivedKeys = Object.keys(req.body);
            return res.status(400).json({
                error: 'Full name, email, and phone are required.',
                debug: {
                    receivedKeys,
                    hasBody: !!req.body,
                    hasFile: !!req.file,
                    contentType: req.get('Content-Type')
                }
            });
        }

        let resume_url = null;

        if (req.file) {
            const file = req.file;
            const fileExt = file.originalname.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `resumes/${fileName}`;

            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('resumes')
                .upload(filePath, file.buffer, {
                    contentType: file.mimetype,
                    upsert: false
                });

            if (uploadError) {
                console.error('Supabase Storage error:', uploadError);
                return res.status(500).json({ error: 'Failed to upload resume.' });
            }

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('resumes')
                .getPublicUrl(filePath);

            resume_url = publicUrl;
        }

        const parsedCertificates = certificates ? JSON.parse(certificates) : [];
        const parsedLanguages = languages ? JSON.parse(languages) : [];
        const parsedSkills = skills ? JSON.parse(skills) : [];

        const { data, error } = await supabase
            .from('job_applications')
            .insert([{
                full_name,
                gender,
                email,
                phone,
                address,
                position,
                experience,
                drivers_license,
                certificates: parsedCertificates,
                languages: parsedLanguages,
                skills: parsedSkills,
                cover_letter,
                resume_url
            }])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ error: 'Failed to submit application. Please try again.' });
        }

        // Send email notification (await for serverless)
        try {
            await sendApplicationEmail({
                full_name,
                gender,
                email,
                phone,
                address,
                position,
                experience,
                drivers_license,
                certificates: parsedCertificates,
                languages: parsedLanguages,
                skills: parsedSkills,
                cover_letter,
                resume_url
            });
            console.log('✅ Application email sent successfully');
        } catch (err) {
            console.error('❌ Failed to send application email:', err);
        }

        return res.status(201).json({ message: 'Application submitted successfully!', data });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

export default router;
