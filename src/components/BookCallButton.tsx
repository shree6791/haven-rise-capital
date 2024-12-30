import React from 'react';
import Button from './ui/Button';
import { useCalendly } from '../hooks/useCalendly';

interface BookCallButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const BookCallButton = ({ variant = 'primary', className = '' }: BookCallButtonProps) => {
  const { openCalendly } = useCalendly();

  return (
    <Button
      variant={variant}
      onClick={openCalendly}
      className={className}
    >
      Book a Call
    </Button>
  );
};

export default BookCallButton;