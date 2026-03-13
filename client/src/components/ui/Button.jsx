import { useMagnetic } from '../../hooks/useMagnetic';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '',
  disabled = false,
  magnetic = true
}) => {
  const magneticRef = useMagnetic();
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rizz-accent focus:ring-offset-2 focus:ring-offset-rizz-bg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-rizz-accent text-rizz-bg hover:bg-rizz-secondary hover:scale-105 shadow-lg shadow-rizz-accent/20',
    secondary: 'bg-rizz-bg text-rizz-accent border-2 border-rizz-accent hover:bg-rizz-accent hover:text-rizz-bg',
    ghost: 'bg-transparent text-rizz-accent hover:bg-rizz-accent/10',
  };

  return (
    <button
      ref={magnetic ? magneticRef : null}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
