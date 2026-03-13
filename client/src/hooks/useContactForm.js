import { useState } from 'react';
import { submitContactForm } from '../services/api';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '' // Honeypot field
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setStatus('success');
        setMessage(response.message);
        setFormData({ name: '', email: '', company: '', message: '', website: '' });
      } else {
        setStatus('error');
        setMessage(response.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return { formData, status, message, handleChange, handleSubmit };
};
