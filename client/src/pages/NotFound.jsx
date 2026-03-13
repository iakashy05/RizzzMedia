import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rizz-bg relative overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rizz-accent/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rizz-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="text-center relative z-10 max-w-2xl mx-auto">
        <h1 className="text-[10rem] md:text-[15rem] font-black text-rizz-accent/10 leading-none select-none">
          404
        </h1>
        <div className="mt-[-4rem] md:mt-[-6rem]">
          <h2 className="text-4xl md:text-6xl font-black text-rizz-text mb-6">
            Lost in <span className="text-gradient">Space?</span>
          </h2>
          <p className="text-rizz-text/60 text-lg md:text-xl mb-12 max-w-md mx-auto italic font-light">
            The page you are looking for has been moved or doesn't exist. Let's get you back to the growth zone.
          </p>
          
          <Link to="/">
            <Button variant="primary" className="px-12 py-5 text-lg uppercase tracking-widest font-black">
              Return Home
            </Button>
          </Link>
        </div>
        
        <div className="mt-20">
          <p className="text-rizz-text/30 text-xs uppercase tracking-[0.3em] font-bold">
            Rizzz Media © 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
