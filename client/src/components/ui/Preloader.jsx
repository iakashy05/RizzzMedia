import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800); // Wait for fade out animation
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-rizz-bg flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative mb-8">
        {/* Animated Rings */}
        <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 border-2 border-rizz-accent/20 rounded-full animate-ping"></div>
        <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-rizz-accent/40 rounded-full flex items-center justify-center relative overflow-hidden">
          {/* Logo Placeholder / Symbol */}
          <div className="text-4xl md:text-5xl font-black text-rizz-accent animate-pulse">R</div>
          
          {/* Liquid Fill Effect */}
          <div 
            className="absolute bottom-0 left-0 w-full bg-rizz-accent/20 transition-all duration-300 ease-out"
            style={{ height: `${percent}%` }}
          ></div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-black text-rizz-text mb-2 tracking-[0.2em] uppercase">
          Rizzz<span className="text-gradient">Media</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-48 h-1 bg-rizz-text/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-rizz-accent transition-all duration-300 ease-out"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <span className="text-rizz-accent font-bold text-sm min-w-[3ch]">{percent}%</span>
        </div>
        <p className="text-rizz-text/30 text-xs uppercase tracking-[0.4em] mt-6 font-bold animate-pulse">
          Initializing Growth
        </p>
      </div>

      {/* Background depth elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-rizz-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default Preloader;
