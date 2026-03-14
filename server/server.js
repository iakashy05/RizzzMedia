import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import validateEnv from './utils/validateEnv.js';

// Load environment variables
dotenv.config();

// Validate environment on startup
validateEnv();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Rizzz Media API is running' });
});

// Export for Vercel
export default app;

// Start Server locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`
    🚀 Server is running!
    📡 Port: ${PORT}
    🔗 URL: http://localhost:${PORT}
    `);
  });
}
