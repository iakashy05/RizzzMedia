import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-rizz-bg border-t border-rizz-accent/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-rizz-bg">
              <img 
                src="/RizzzLogoText.png" 
                alt="Rizzz" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold tracking-tight text-rizz-accent -ml-1">
                Media
              </span>
            </div>
            <p className="text-rizz-text/60 leading-relaxed">
              Scale your brand with data-driven marketing strategies and creative excellence.
            </p>
          </div>

          <div>
            <h4 className="text-rizz-accent font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-rizz-text/60">
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Performance Ads</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Content Creation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-rizz-accent font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-rizz-text/60">
              <li><a href="#" className="hover:text-rizz-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-rizz-accent font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-rizz-text/60">
              <li><a href="#" className="hover:text-rizz-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-rizz-accent transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rizz-accent/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-rizz-text/40 text-sm">
          <p>© {new Date().getFullYear()} Rizzz Media. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-rizz-accent">Privacy Policy</a>
            <a href="#" className="hover:text-rizz-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
