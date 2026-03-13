import React from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  name, 
  value, 
  onChange, 
  required = false,
  textarea = false,
  className = '' 
}) => {
  const inputStyles = `
    w-full px-4 py-3 rounded-xl 
    bg-rizz-bg/50 border border-rizz-accent/20 
    text-rizz-text placeholder-rizz-text/40 
    focus:outline-none focus:border-rizz-accent/60 focus:ring-1 focus:ring-rizz-accent/60
    transition-all duration-300
    ${className}
  `;

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-rizz-accent text-sm font-medium mb-2 ml-1">
          {label} {required && <span className="text-rizz-secondary">*</span>}
        </label>
      )}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows="4"
          className={inputStyles}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputStyles}
        />
      )}
    </div>
  );
};

export default Input;
