'use client';

import React from 'react';
import BookCallButton from '@/src/components/common/BookCallButton';

interface NavigationProps {
  items: Array<{ name: string; href: string; }>;
  className?: string;
}

export const Navigation = ({ items, className = '' }: NavigationProps) => (
  <div className={className}>
    {items.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="text-primary-600 hover:text-secondary-500 transition-colors px-3 py-2 text-sm font-medium"
      >
        {item.name}
      </a>
    ))}
    <BookCallButton />
  </div>
);

export default Navigation;