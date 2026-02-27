import { Router, Request, Response } from 'express';
import { supabase } from '../supabase.js';
import { sendSupportEmail } from '../email.js';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const { full_name, email, phone, address, service_type, message } = req.body;

        // Validation
        if (!full_name || !email || !phone) {
            return res.status(400).json({ error: 'Full name, email, and phone number are required.' });
        }

        const { data, error } = await supabase
            .from('support_enquiries')
            .insert([{ full_name, email, phone, address, service_type, message }])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ error: 'Failed to submit enquiry. Please try again.' });
        }

        // Send email notification (await for serverless)
        try {
            await sendSupportEmail({ full_name, email, phone, address, service_type, message });
            console.log('✅ Support enquiry email sent successfully');
        } catch (err) {
            console.error('❌ Failed to send support enquiry email:', err);
        }

        return res.status(201).json({ message: 'Enquiry submitted successfully!', data });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

export default router;
