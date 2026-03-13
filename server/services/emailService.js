import transporter from '../config/mail.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Service to send lead notification emails
 * @param {Object} leadData - { name, email, company, message }
 */
export const sendLeadEmail = async (leadData) => {
  const { name, email, company, message } = leadData;

  const mailOptions = {
    from: `"Rizzz Media - New Lead" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Send to yourself
    replyTo: email,
    subject: `🚀 New Lead: ${name} from ${company || 'N/A'}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #008080;">New Inquiry from Rizzz Media Website</h2>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br>') }
        </div>
        <hr />
        <p style="font-size: 10px; color: #999;">This email was sent from the Rizzz Media contact form.</p>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
};

/**
 * Service to send "Thank You" email to the lead
 * @param {Object} leadData - { name, email }
 */
export const sendAutoResponseEmail = async (leadData) => {
  const { name, email } = leadData;

  const mailOptions = {
    from: `"Rizzz Media" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `✨ We've received your request, ${name.split(' ')[0]}!`,
    html: `
      <div style="font-family: 'Helvetica', sans-serif; max-width: 600px; margin: 0 auto; background-color: #0d1117; color: #ffffff; padding: 40px; border-radius: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #00d2ff; font-size: 28px; font-weight: 900; margin: 0; letter-spacing: 2px;">RIZZZ MEDIA</h1>
          <p style="color: rgba(255,255,255,0.6); margin-top: 5px; font-size: 14px;">THE NEXT LEVEL OF DIGITAL GROWTH</p>
        </div>
        
        <div style="background-color: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; border: 1px solid rgba(0, 210, 255, 0.1);">
          <h2 style="font-size: 20px; margin-top: 0;">Hi ${name},</h2>
          <p style="line-height: 1.6; color: rgba(255,255,255,0.8);">
            Thank you for reaching out to **Rizzz Media**. We've successfully received your inquiry and our strategy team is already reviewing your details.
          </p>
          <p style="line-height: 1.6; color: rgba(255,255,255,0.8);">
            One of our growth specialists will analyze your project and get back to you with a <strong>customized audit</strong> within the next 24 hours.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="font-style: italic; color: #00d2ff; margin-bottom: 5px;">While you wait...</p>
            <p style="font-size: 14px; margin: 0; color: rgba(255,255,255,0.6);">
              Check out our latest case studies and growth frameworks on our official channels.
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: rgba(255,255,255,0.4);">
          <p>© 2026 Rizzz Media. All rights reserved.</p>
          <p>This is an automated response to your inquiry at rizzzmedia.com</p>
        </div>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
};
