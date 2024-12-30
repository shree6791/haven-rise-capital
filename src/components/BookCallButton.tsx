'use client';

import React from 'react';
import Button from './ui/Button';
import { CALENDLY_URL } from '@/src/lib/constants';

interface BookCallButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const BookCallButton = ({ variant = 'primary', className = '' }: BookCallButtonProps) => {
  return (
    <Button
      variant={variant}
      href={CALENDLY_URL}
      className={className}
    >
      Book a Call
    </Button>
  );
};

export default BookCallButton;