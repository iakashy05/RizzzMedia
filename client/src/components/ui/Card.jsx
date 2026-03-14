import React from 'react';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <div 
      className={`
        glass p-6 rounded-3xl border border-rizz-accent/10
        ${hoverEffect ? 'hover:border-rizz-accent/30 hover:shadow-2xl hover:shadow-rizz-accent/10 transition-all duration-500 hover:-translate-y-2' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
