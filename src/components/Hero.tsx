import React from 'react';
import BookCallButton from './BookCallButton';
import GradientText from './ui/GradientText';
import { Building2, Handshake, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoMnYyaC0ydi0yem0tNCAwaDJ2LTJoLTJ2MnptMTYgMGgydi0yaC0ydjJ6bS0yIDJoMnYtMmgtMnYyem0tNCAwaDJ2LTJoLTJ2MnptLTggMGgydi0yaC0ydjJ6bS00LTRoMnYtMmgtMnYyem0xMi00aDJ2LTJoLTJ2MnptLTggMGgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <h1 className="font-bold tracking-tight">
                <span className="text-5xl sm:text-6xl lg:text-7xl text-white block mb-2">HAVENRISE</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl text-secondary-400">CAPITAL</span>
              </h1>
            </div>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-white/90">Preserving</span> <span className="text-secondary-400">Legacy</span>,<br/>
              <span className="text-white/90">Building</span> <span className="text-secondary-400">Tomorrow</span>
            </div>
            
            <p className="text-lg text-accent-300 leading-relaxed max-w-xl">
              Partnering with small-scale businesses and experienced entrepreneurs to preserve your life's work
              and ensure it thrives in the next chapter.
            </p>
            
            <div className="w-full max-w-md">
              <BookCallButton className="w-full" />
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-3xl" />
            <div className="relative p-8 grid gap-8">
              {/* Mission Visualization */}
              <div className="bg-primary-700/50 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 border border-primary-600/30 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <Building2 className="h-8 w-8 text-secondary-400" />
                  <h3 className="text-xl font-semibold text-white">Legacy Preservation</h3>
                </div>
                <p className="text-accent-300">Protecting and growing established businesses</p>
              </div>

              <div className="bg-primary-700/50 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 border border-primary-600/30 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <Handshake className="h-8 w-8 text-secondary-400" />
                  <h3 className="text-xl font-semibold text-white">Trusted Partnership</h3>
                </div>
                <p className="text-accent-300">Building lasting relationships with entrepreneurs</p>
              </div>

              <div className="bg-primary-700/50 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 border border-primary-600/30 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <LineChart className="h-8 w-8 text-secondary-400" />
                  <h3 className="text-xl font-semibold text-white">Sustainable Growth</h3>
                </div>
                <p className="text-accent-300">Driving innovation while preserving core values</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;