import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';
import getStartedRoutes from './routes/getstarted.js';
import applyRoutes from './routes/apply.js';

dotenv.config();

import { sendContactEmail } from './email.js';

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Debug logger
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - ${req.get('Content-Type')}`);
    next();
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/get-started', getStartedRoutes);
app.use('/api/apply', applyRoutes);

// Health check
app.get('/api/health', async (_req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: {
            hasSupabaseUrl: !!process.env.SUPABASE_URL,
            hasSupabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
            hasEmailUser: !!process.env.EMAIL_USER,
            hasEmailPass: !!process.env.EMAIL_PASS,
            nodeEnv: process.env.NODE_ENV
        }
    });
});

// Test Email Route
app.get('/api/test-email', async (_req, res) => {
    try {
        await sendContactEmail({
            full_name: 'Test Tester',
            email: 'test@example.com',
            phone: '123456789',
            subject: 'Vercel Diagnostic Test',
            message: 'If you see this, email sending is working!'
        });
        res.json({ status: 'success', message: 'Test email attempted. Check logs and inbox.' });
    } catch (err: any) {
        console.error('🚨 Test email route failed:', err);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('💥 Global Server Error:', err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
        path: req.path
    });
});

// For Vercel/Serverless: Export the app instead of calling app.listen()
// Only listen if not in a serverless environment
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`🚀 HealthJoy API server running at http://localhost:${PORT}`);
    });
}

export default app;
