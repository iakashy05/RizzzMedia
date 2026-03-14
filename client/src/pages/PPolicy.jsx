import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-rizz-bg text-rizz-text">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-rizz-accent mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-rizz-text/80 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as when you fill out a contact form, including your name, email address, company name, and project details.</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">2. How We Use Information</h2>
          <p>We use the information we collect to communicate with you, provide our services, and improve our website and marketing efforts.</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">3. Information Sharing</h2>
          <p>We do not share, sell, or rent your personal information to third parties. Your data is kept secure and confidential.</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">4. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access or disclosure.</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at contact.rizzzmedia@gmail.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
