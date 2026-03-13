import { validateContact } from '../utils/validateContact.js';
import { sendLeadEmail, sendAutoResponseEmail } from '../services/emailService.js';

/**
 * Controller for handling contact form submissions
 */
export const handleContactForm = async (req, res) => {
  try {
    const { name, email, company, message, website } = req.body;

    // 1. Validation & Honeypot Check
    const { isValid, error } = validateContact({ name, email, message, website });
    
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    // 2. Process Lead (Send Email AND Auto-Responder)
    await Promise.all([
      sendLeadEmail({ name, email, company, message }),
      sendAutoResponseEmail({ name, email })
    ]);

    // 3. Structured Success Response
    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });

  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
};
