const API_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === 'production' ? '/api/contact' : 'http://localhost:5000/api/contact');

export const submitContactForm = async (data) => {
  console.log('Submitting to:', API_URL);
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Server Error (${response.status}):`, errorText);
      return { success: false, message: `Server error: ${response.status}` };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Network/Fetch Error:', error);
    return { success: false, message: 'Connection failed. Check console for details.' };
  }
};
