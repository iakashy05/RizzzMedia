import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'glass py-3 shadow-xl border-rizz-accent/10' : 'bg-transparent py-6 border-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/RizzzLogoText.png" 
              alt="Rizzz" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-rizz-accent -ml-1">
              Media
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-rizz-text/80 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-rizz-accent transition-colors">{link.name}</a>
            ))}
            <a href="#contact">
              <Button variant="secondary" className="px-5 py-2 text-sm">Contact Us</Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-rizz-accent p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay/Backdrop */}
      <div 
        className={`fixed inset-0 bg-rizz-dark/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[280px] glass z-50 md:hidden transition-transform duration-500 ease-in-out border-l border-rizz-accent/10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 gap-8">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <img 
                src="/RizzzLogoText.png" 
                alt="Rizzz" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-rizz-accent -ml-1">
                Media
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 text-lg font-medium text-rizz-text/90">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-rizz-accent transition-colors py-2 border-b border-rizz-accent/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pb-12">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" className="w-full py-4 text-rizz-bg font-bold">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
