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
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🚀 HealthJoy API server running at http://localhost:${PORT}`);
});
