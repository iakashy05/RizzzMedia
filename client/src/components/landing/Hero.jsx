import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import heroImage from '../../assets/images/hero.png';

const Hero = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isBlinking, setIsBlinking] = useState(true);
  const [showEllipsis, setShowEllipsis] = useState(true);
  const fullText1 = 'Growth-Driven';
  const fullText2 = 'Digital Marketing';
  
  useEffect(() => {
    let i = 0;
    let j = 0;
    
    const type1 = setInterval(() => {
      if (i <= fullText1.length) {
        setText1(fullText1.slice(0, i));
        i++;
      } else {
        clearInterval(type1);
        const type2 = setInterval(() => {
          if (j <= fullText2.length) {
            setText2(fullText2.slice(0, j));
            j++;
          } else {
            clearInterval(type2);
            // Stop blinking and hide after 3 seconds of completion
            setTimeout(() => {
              setIsBlinking(false);
              setShowEllipsis(false);
            }, 3000);
          }
        }, 100);
      }
    }, 100);
    
    return () => {
      clearInterval(type1);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden px-6">
      {/* Background blobs for depth */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rizz-accent/10 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rizz-secondary/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0 opacity-15 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-rizz-dark via-transparent to-rizz-dark z-10"></div>
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-8 md:mb-12 leading-[1.05] tracking-tight min-h-[3.2em] sm:min-h-[2.2em] md:min-h-[2.1em]">
            <span className="text-rizz-text">{text1}</span> 
            {text1.length > 0 && text2.length === 0 && showEllipsis && <span className={`text-rizz-accent ml-1 ${isBlinking ? 'animate-blink' : ''}`}>.</span>}
            <br />
            <span className="text-gradient">{text2}</span>
            {text2.length > 0 && showEllipsis && <span className={`text-rizz-accent ml-1 ${isBlinking ? 'animate-blink' : ''}`}>.</span>}
          </h1>
          
          <p className="text-lg md:text-2xl text-rizz-text/70 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We help brands scale with data-driven marketing strategies that deliver measurable results and sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-[30px]">
            <Button variant="primary" className="text-lg px-12 py-5 w-full sm:w-auto" href="#contact">
              Get Free Marketing Audit
            </Button>
            <Button variant="ghost" className="text-lg group" href="https://www.instagram.com/rizzz.media/" target="_blank" rel="noopener noreferrer">
              View Our Work
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 inline transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
