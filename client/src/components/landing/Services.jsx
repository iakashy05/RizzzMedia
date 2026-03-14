import React, { useState } from 'react';
import Card from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  {
    title: 'Branding solutions',
    description: 'Build a powerful online presence and engage with your audience where they spend their time.',
    details: [
      'Logo & Identity Design',
      'Brand Strategy & Positioning',
      'Brand Guidelines',
      'Corporate Storytelling'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0-10.628a2.25 2.25 0 1 0 0-2.186m0 2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093" />
      </svg>
    )
  },
  {
    title: 'Marketing solutions',
    description: 'Data-backed ad campaigns that maximize your ROI and drive high-quality leads consistently.',
    details: [
      'Social Media Management',
      'Performance Advertising (PPC)',
      'Search Engine Optimization (SEO)',
      'Content Marketing'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0v1.125c0 1.125.507 2.097 1.303 2.577M3.75 3H5c1.125 0 2.097.507 2.577 1.303M15 21h6v-6M9 21h6v-6M9 13.5h3.375a1.125 1.125 0 0 1 1.125 1.125v4.875M9 13.5V8.625c0-1.125.507-2.097 1.303-2.577M9 13.5H10.125c1.125 0 2.097.507 2.577 1.303" />
      </svg>
    )
  },
  {
    title: 'Tech Solutions',
    description: 'Build robust, scalable software and applications tailored to your business needs.',
    details: [
      'Web Application Development',
      'Mobile App Development',
      'E-commerce Solutions',
      'System Integrations & APIs'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  }
];

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card 
      onClick={() => setIsOpen(!isOpen)}
      className={`relative flex flex-col items-start p-10 h-full cursor-pointer transition-all duration-500 overflow-hidden group ${isOpen ? 'ring-2 ring-rizz-accent/20' : ''}`}
    >
      <div className="w-full flex justify-between items-start mb-8">
        <div className="w-16 h-16 bg-rizz-accent/10 rounded-2xl flex items-center justify-center text-rizz-accent">
          {service.icon}
        </div>
        <div className={`text-rizz-accent transition-transform duration-500 mt-2 ${isOpen ? 'rotate-45' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-rizz-text mb-4 leading-tight group-hover:text-rizz-accent transition-colors">{service.title}</h3>
      <p className="text-rizz-text/60 leading-relaxed">
        {service.description}
      </p>

      <div className={`w-full grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="p-5 bg-rizz-accent/5 rounded-2xl border border-rizz-accent/10">
            <ul className="space-y-3">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-start text-sm text-rizz-text/80">
                  <span className="text-rizz-accent mr-2 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-rizz-accent/5 rounded-full blur-2xl transition-all duration-700 pointer-events-none ${isOpen ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`}></div>
    </Card>
  );
};

const Services = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div ref={revealRef} className="container mx-auto px-6 reveal">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-rizz-accent mb-4 md:mb-6">Our Services</h2>
          <p className="text-rizz-text/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Comprehensive solutions tailored to your business needs and growth objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
