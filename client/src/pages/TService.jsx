import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-rizz-bg text-rizz-text">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-rizz-accent mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-rizz-text/80 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using the Rizzz Media website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">2. Use License</h2>
          <p>Permission is granted to temporarily view the materials on Rizzz Media's website for personal, non-commercial transitory viewing only.</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">3. Disclaimer</h2>
          <p>The materials on Rizzz Media's website are provided on an 'as is' basis. Rizzz Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">4. Limitations</h2>
          <p>In no event shall Rizzz Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Rizzz Media's website.</p>
          
          <h2 className="text-2xl font-semibold text-rizz-text mt-8">5. Contact</h2>
          <p>If you have any questions about these Terms, please contact us at contact.rizzzmedia@gmail.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
