import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useContactForm } from '../../hooks/useContactForm';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ContactForm = () => {
  const { formData, status, message, handleChange, handleSubmit } = useContactForm();
  const revealRef = useScrollReveal();

  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={revealRef} className="max-w-6xl mx-auto reveal">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
            
            {/* Left Side: Info & Heading */}
            <div className="lg:w-2/5">
              <h2 className="text-4xl md:text-6xl font-black text-rizz-text mb-6 leading-tight">
                Ready to <span className="text-gradient">Scale?</span>
              </h2>
              <p className="text-rizz-text/60 text-lg mb-10 max-w-md italic">
                Get a free customized growth roadmap in 24 hours. No strings attached.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="glass p-5 rounded-2xl border border-rizz-accent/10 flex items-center gap-4 hover:border-rizz-accent/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-rizz-accent/10 flex items-center justify-center text-rizz-accent group-hover:bg-rizz-accent group-hover:text-rizz-bg transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-rizz-text/40 text-xs uppercase tracking-widest font-bold">Email Us</p>
                    <p className="text-rizz-text font-bold">rizzzmedia@gmail.com</p>
                  </div>
                </div>

                <div className="glass p-5 rounded-2xl border border-rizz-accent/10 flex items-center gap-4 hover:border-rizz-accent/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-rizz-accent/10 flex items-center justify-center text-rizz-accent group-hover:bg-rizz-accent group-hover:text-rizz-bg transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H3.75A1.5 1.5 0 0 0 2.25 3.75v3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-rizz-text/40 text-xs uppercase tracking-widest font-bold">Call Us</p>
                    <p className="text-rizz-text font-bold">+91 94652 84868</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Form */}
            <div className="lg:w-3/5">
              <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2.5rem] border border-rizz-accent/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rizz-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                {status === 'success' ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-20 h-20 bg-rizz-accent/20 rounded-full flex items-center justify-center text-rizz-accent mb-6 shadow-xl shadow-rizz-accent/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-rizz-text mb-4">Message Sent!</h3>
                    <p className="text-rizz-text/60">We'll get back to you within 24 hours.</p>
                    <Button variant="ghost" className="mt-8" onClick={() => window.location.reload()}>
                      New Inquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-rizz-text mb-8">Send a Message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input 
                        label="Name" 
                        name="name" 
                        placeholder="John Doe" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <Input 
                        label="Email" 
                        type="email" 
                        name="email" 
                        placeholder="john@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <Input 
                      label="Company" 
                      name="company" 
                      placeholder="Your Company Name" 
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <Input 
                      label="Project Details" 
                      name="message" 
                      placeholder="What are your goals?" 
                      textarea 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                    />

                    {/* Honeypot field - Hidden from users */}
                    <div className="hidden">
                      <Input 
                        label="Website" 
                        name="website" 
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full mt-8 py-5 text-rizz-bg font-black tracking-wider uppercase"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Encrypting & Sending...' : 'Initiate Growth Audit'}
                    </Button>
                    
                    {status === 'error' && (
                      <p className="text-red-400 text-sm mt-4 text-center bg-red-400/10 py-2 rounded-xl">{message}</p>
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
