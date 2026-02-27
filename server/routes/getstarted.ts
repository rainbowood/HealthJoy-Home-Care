import { Router, Request, Response } from 'express';
import { supabase } from '../supabase.js';
import { sendCareRequestEmail } from '../email.js';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const { care_for, support_type, best_time, full_name, phone } = req.body;

        // Validation
        if (!full_name || !phone) {
            return res.status(400).json({ error: 'Full name and phone number are required.' });
        }

        const { data, error } = await supabase
            .from('care_requests')
            .insert([{ care_for, support_type, best_time, full_name, phone }])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ error: 'Failed to submit care request. Please try again.' });
        }

        // Send email notification (async)
        sendCareRequestEmail({ care_for, support_type, best_time, full_name, phone }).catch(err => {
            console.error('Failed to send care request email:', err);
        });

        return res.status(201).json({ message: 'Care request submitted successfully!', data });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

export default router;
