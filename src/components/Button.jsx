import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    accent: 'bg-accent hover:bg-accent/90 text-white'
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
