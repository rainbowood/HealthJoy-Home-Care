import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import getStartedRoutes from './routes/getstarted';
import applyRoutes from './routes/apply';

dotenv.config();

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
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: {
            hasSupabaseUrl: !!process.env.SUPABASE_URL,
            hasSupabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
            hasEmailUser: !!process.env.EMAIL_USER,
            nodeEnv: process.env.NODE_ENV
        }
    });
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
