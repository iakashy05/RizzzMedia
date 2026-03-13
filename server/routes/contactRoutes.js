import express from 'express';
import { handleContactForm } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Handle contact form submissions
 * @access  Public
 */
router.post('/', contactRateLimiter, handleContactForm);

export default router;
