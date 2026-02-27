import { Router, Request, Response } from 'express';
import { supabase } from '../supabase.js';
import { sendContactEmail } from '../email.js';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const { full_name, email, phone, subject, message } = req.body;

        // Validation
        if (!full_name || !email) {
            return res.status(400).json({ error: 'Full name and email are required.' });
        }

        const { data, error } = await supabase
            .from('contact_inquiries')
            .insert([{ full_name, email, phone, subject, message }])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ error: 'Failed to submit inquiry. Please try again.' });
        }

        // Send email notification (await for serverless)
        try {
            await sendContactEmail({ full_name, email, phone, subject, message });
            console.log('✅ Contact email sent successfully');
        } catch (err) {
            console.error('❌ Failed to send contact email:', err);
            // We don't fail the whole request if email fails, but we log it
        }

        return res.status(201).json({ message: 'Inquiry submitted successfully!', data });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

export default router;
