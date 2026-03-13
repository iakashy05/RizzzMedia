import React from 'react';
import Card from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Build a powerful online presence and engage with your audience where they spend their time.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0-10.628a2.25 2.25 0 1 0 0-2.186m0 2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093" />
      </svg>
    )
  },
  {
    title: 'Performance Advertising',
    description: 'Data-backed ad campaigns that maximize your ROI and drive high-quality leads consistently.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0v1.125c0 1.125.507 2.097 1.303 2.577M3.75 3H5c1.125 0 2.097.507 2.577 1.303M15 21h6v-6M9 21h6v-6M9 13.5h3.375a1.125 1.125 0 0 1 1.125 1.125v4.875M9 13.5V8.625c0-1.125.507-2.097 1.303-2.577M9 13.5H10.125c1.125 0 2.097.507 2.577 1.303" />
      </svg>
    )
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher on search engines and attract organic traffic with our comprehensive SEO strategies.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    )
  }
];

const Services = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div ref={revealRef} className="container mx-auto px-6 reveal">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-rizz-accent mb-4 md:mb-6">Our Services</h2>
          <p className="text-rizz-text/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Comprehensive marketing solutions tailored to your business needs and growth objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-start p-10 h-full">
              <div className="w-16 h-16 bg-rizz-accent/10 rounded-2xl flex items-center justify-center text-rizz-accent mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-rizz-text mb-4 leading-tight">{service.title}</h3>
              <p className="text-rizz-text/60 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
