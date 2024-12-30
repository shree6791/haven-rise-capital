import React from 'react';
import { Sprout } from 'lucide-react';
import GradientText from './ui/GradientText';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-accent-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <Sprout className="h-16 w-16 text-secondary-500 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300" />
          <h2 className="text-4xl font-bold text-primary-800 mb-8">
            About <GradientText>Us</GradientText>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Handshake"
              className="relative rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-8">
            <p className="text-xl text-primary-600 leading-relaxed">
              At HavenRise Capital, we believe every business has a story worth preserving. Your life's
              work is more than just a business—it's a legacy built through years of dedication and vision.
            </p>
            
            <div className="border-l-4 border-secondary-500 pl-6 py-2 transform hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
              <p className="text-primary-600">
                We aim to build a network of thriving businesses in healthcare, cybersecurity, and energy,
                preserving their founders' values while adapting to tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;