import React from 'react';
import Card from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Tanvi Kochhar',
    role: 'Owner, Brown Beans',
    content: 'Rizzz Media transformed our digital presence. Helped our brand grow exponentially.',
    avatar: 'TK'
  },
  {
    name: 'Ruchika Chhabra',
    role: 'Founder, English Finesse',
    content: 'The data-driven approach they take is refreshing. They don\'t just guess; they execute based on real market insights.',
    avatar: 'RC'
  },
  {
    name: 'Akash Yadav',
    role: 'Founder, SpydeX Tech',
    content: 'Communication is top-notch. It feels like they are an extension of our internal team rather than just an agency.',
    avatar: 'AY'
  }
];

const Testimonials = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div ref={revealRef} className="container mx-auto px-6 reveal">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-rizz-accent mb-4 md:mb-6">Client Stories</h2>
          <p className="text-rizz-text/60 max-w-2xl mx-auto text-base md:text-lg">
            Hear from the brands we've helped scale through strategic digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-10 flex flex-col justify-between">
              <div>
                <div className="flex text-rizz-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-rizz-text/80 text-lg italic leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rizz-accent/20 flex items-center justify-center font-bold text-rizz-accent">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-rizz-text">{testimonial.name}</h4>
                  <p className="text-rizz-text/40 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
