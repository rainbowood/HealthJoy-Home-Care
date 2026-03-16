import { Router, Request, Response } from 'express';
import multer from 'multer';
import { sendRobchatEmail } from '../email.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('audio'), async (req: Request, res: Response) => {
    try {
        const { message } = req.body;
        const file = req.file;

        if (!message && !file) {
            return res.status(400).json({ error: 'Message or audio is required.' });
        }

        const emailData: any = {};
        if (message) {
            emailData.message = message;
        }

        if (file) {
            emailData.audio = {
                filename: file.originalname || 'voice_message.webm',
                content: file.buffer,
                contentType: file.mimetype,
            };
        }

        await sendRobchatEmail(emailData);
        console.log('✅ Robchat email sent successfully');

        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (err) {
        console.error('❌ Failed to send Robchat message:', err);
        return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

export default router;
