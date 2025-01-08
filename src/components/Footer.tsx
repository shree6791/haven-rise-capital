import React from 'react';
import { Sunrise, Linkedin, Mail, Phone } from 'lucide-react';
import { CALENDLY_URL } from '../config/constants';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-800 to-primary-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Sunrise className="h-8 w-8 text-secondary-400" />
              <span className="ml-2 text-xl font-bold text-white">HavenRise Capital</span>
            </div>
            <p className="text-sm text-accent-200">Where Legacies Meet New Beginnings</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-200 hover:text-secondary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-accent-200 hover:text-secondary-400 transition-colors">About Us</a></li>
              <li><a href="#investment" className="text-accent-200 hover:text-secondary-400 transition-colors">Investment Criteria</a></li>
              <li>
                <a 
                  href={CALENDLY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-secondary-300 transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center group">
                <Mail className="h-5 w-5 mr-2 text-secondary-400 group-hover:text-secondary-300" />
                <a href="mailto:shreenidhi@havenrisecapital.com" className="text-accent-200 hover:text-secondary-400 transition-colors">
                  shreenidhi@havenrisecapital.com
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 mr-2 text-secondary-400 group-hover:text-secondary-300" />
                <a href="tel:(555)123-4567" className="text-accent-200 hover:text-secondary-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center group">
                <Linkedin className="h-5 w-5 mr-2 text-secondary-400 group-hover:text-secondary-300" />
                <a 
                  href="https://www.linkedin.com/in/shreenidhisudhakar/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-accent-200 hover:text-secondary-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700/50 text-center text-sm text-accent-300">
          <p>&copy; {new Date().getFullYear()} HavenRise Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;