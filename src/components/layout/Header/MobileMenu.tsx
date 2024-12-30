'use client';

import React from 'react';
import BookCallButton from '@/src/components/common/BookCallButton';

interface MobileMenuProps {
  isOpen: boolean;
  items: Array<{ name: string; href: string; }>;
}

export const MobileMenu = ({ isOpen, items }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="pt-2 pb-3 space-y-1">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-base font-medium text-primary-600 hover:text-secondary-500 hover:bg-primary-50"
          >
            {item.name}
          </a>
        ))}
        <div className="px-3 py-2">
          <BookCallButton className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;