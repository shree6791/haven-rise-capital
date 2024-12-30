'use client';

import React, { useState } from 'react';
import { Menu, X, Sunrise } from 'lucide-react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Investment Criteria', href: '#investment' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Sunrise className="h-8 w-8 text-secondary-500" />
              <span className="ml-2 text-xl font-bold text-primary-800">HavenRise Capital</span>
            </div>
          </div>

          <Navigation 
            items={navigation} 
            className="hidden md:flex md:items-center md:space-x-8" 
          />

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-600 hover:text-secondary-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} items={navigation} />
      </nav>
    </header>
  );
};

export default Header;