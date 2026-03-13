/**
 * Validates the contact form input and checks for honeypot spam
 * @param {Object} data - { name, email, company, message, website }
 * @returns {Object} - { isValid: boolean, error: string | null }
 */
export const validateContact = (data) => {
  const { name, email, message, website } = data;

  // Honeypot check
  if (website) {
    return { isValid: false, error: 'Spam detected' };
  }

  if (!name || name.trim().length === 0) {
    return { isValid: false, error: 'Name is required' };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { isValid: false, error: 'A valid email is required' };
  }

  if (!message || message.trim().length === 0) {
    return { isValid: false, error: 'Message is required' };
  }

  return { isValid: true, error: null };
};
