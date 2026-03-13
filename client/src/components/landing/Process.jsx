import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Audit & Strategy',
    description: 'We begin by analyzing your current marketing efforts and designing a custom roadmap for growth.',
    details: 'Our audit covers competitor analysis, SEO health, conversion leaks, and high-impact opportunities that most agencies miss.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Implementation',
    description: 'Our team executes the strategy with precision, launching high-performance campaigns and content.',
    details: 'From ad creative to technical SEO and funnel builds, we handle the heavy lifting while keeping you in the loop with transparent progress.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Optimization',
    description: 'We continuously monitor data and refine our approach to maximize results and efficiency.',
    details: 'We use A/B testing, heatmaps, and multivariate analysis to squeeze every drop of ROI from your budget. Success is a moving target.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Scaling',
    description: 'Once we find the winning formula, we scale your brand to reach new heights and markets.',
    details: 'We help you move into new channels, expand geographically, and increase volume without losing the efficiency we worked so hard to build.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const ProcessStep = ({ step, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasRevealed, setHasRevealed] = React.useState(false);
  const stepRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRevealed) {
          setTimeout(() => {
            setHasRevealed(true);
          }, index * 200);
        }
      });
    }, { threshold: 0.1 });

    const current = stepRef.current;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [index, hasRevealed]);

  return (
    <div 
      ref={stepRef} 
      onClick={() => setIsOpen(!isOpen)}
      className={`relative group p-8 rounded-[2rem] bg-rizz-bg border border-rizz-accent/10 hover:border-rizz-accent/30 transition-all duration-500 cursor-pointer reveal overflow-hidden ${hasRevealed ? 'reveal-active' : ''} ${isOpen ? 'ring-2 ring-rizz-accent/20' : ''}`}
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl font-black text-rizz-accent/20 group-hover:text-rizz-accent/40 transition-colors">
          {step.number}
        </span>
        <div className={`text-rizz-accent transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>

      <div className="mb-4 text-rizz-accent bg-rizz-accent/5 w-14 h-14 rounded-2xl flex items-center justify-center">
        {step.icon}
      </div>

      <h3 className="text-xl font-bold text-rizz-text mb-4 group-hover:text-rizz-accent transition-colors">
        {step.title}
      </h3>
      
      <p className="text-rizz-text/60 leading-relaxed mb-4">
        {step.description}
      </p>

      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="p-4 bg-rizz-accent/5 rounded-2xl border border-rizz-accent/10">
            <p className="text-rizz-text/80 text-sm leading-relaxed italic">
              {step.details}
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-rizz-accent/5 rounded-full blur-2xl transition-all duration-700 ${isOpen ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`}></div>
    </div>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-rizz-accent/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-rizz-accent mb-4 md:mb-6">How We Work</h2>
            <p className="text-rizz-text/60 text-base md:text-lg">
              A streamlined 4-step process designed to take your brand from where it is to where it needs to be.
            </p>
          </div>
          <div className="hidden md:block text-8xl font-black text-rizz-accent/5 select-none pointer-events-none">
            PROCESS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
