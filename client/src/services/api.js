const API_URL = 'http://localhost:5000/api/contact';

export const submitContactForm = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, message: 'Server connection failed' };
  }
};
