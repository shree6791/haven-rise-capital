import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className = '' }: GradientTextProps) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-secondary-500 ${className}`}>
    {children}
  </span>
);

export default GradientText;