'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className = '', href, onClick }: ButtonProps) => {
  const baseStyles = 'relative overflow-hidden group px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-700 to-secondary-600 text-white hover:from-primary-800 hover:to-secondary-700',
    secondary: 'bg-white text-primary-700 border-2 border-primary-600 hover:bg-primary-50'
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <Component 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Component>
  );
};

export default Button;