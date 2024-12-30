import React from 'react';
import { HeartPulse, Shield, Zap } from 'lucide-react';
import GradientText from './ui/GradientText';

const Investment = () => {
  const industries = [
    {
      icon: HeartPulse,
      name: 'Healthcare',
      description: 'Innovative solutions improving patient care and medical services.',
    },
    {
      icon: Shield,
      name: 'Cybersecurity',
      description: 'Protecting digital assets and ensuring data privacy.',
    },
    {
      icon: Zap,
      name: 'Energy',
      description: 'Sustainable and efficient energy solutions for the future.',
    },
  ];

  return (
    <section id="investment" className="py-32 bg-gradient-to-br from-accent-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-primary-800 mb-4">
            What We're <GradientText>Looking For</GradientText>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Our goal is simple: to honor the legacy of your business while taking it to new heights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {industries.map((industry) => (
            <div 
              key={industry.name} 
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-accent-200 group"
            >
              <industry.icon className="h-12 w-12 text-secondary-500 mb-6 group-hover:text-secondary-600 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-primary-800 mb-4">{industry.name}</h3>
              <p className="text-primary-600">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-accent-200">
          <h3 className="text-2xl font-bold text-primary-800 mb-8">Target Businesses</h3>
          <ul className="space-y-6 text-primary-600">
            {[
              'Established small-scale businesses with a proven track record',
              'Entrepreneurs seeking a trusted partner to ensure a seamless transition',
              'Strong operational teams in place'
            ].map((item, index) => (
              <li key={index} className="flex items-center group">
                <div className="h-2 w-2 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Investment;