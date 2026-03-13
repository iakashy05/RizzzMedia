import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import Process from '../components/landing/Process';
import Testimonials from '../components/landing/Testimonials';
import ContactForm from '../components/landing/ContactForm';
import Button from '../components/ui/Button';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />
        
        <Process />
        
        <Testimonials />
        
        {/* Call to Action Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="glass p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] text-center relative overflow-hidden border border-rizz-accent/10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rizz-accent/10 to-transparent"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-black text-rizz-text mb-6 md:mb-8">
                  Ready to ignite your <br className="hidden sm:block" /> <span className="text-gradient">digital presence?</span>
                </h2>
                <p className="text-rizz-text/60 text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join the cohort of successful brands that have scaled their revenue with Rizzz Media's proprietary marketing framework.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-[30px]">
                  <a href="#contact" className="w-full sm:w-auto">
                    <Button variant="primary" className="px-12 py-5 text-lg w-full">
                      Start Your Audit
                    </Button>
                  </a>
                  <Button variant="ghost" className="text-lg w-full sm:w-auto">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
