import React from 'react';
import BookCallButton from './BookCallButton';

const CallToAction = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-accent-50 via-primary-50 to-primary-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoMnYyaC0ydi0yem0tNCAwaDJ2LTJoLTJ2MnptMTYgMGgydi0yaC0ydjJ6bS0yIDJoMnYtMmgtMnYyem0tNCAwaDJ2LTJoLTJ2MnptLTggMGgydi0yaC0ydjJ6bS00LTRoMnYtMmgtMnYyem0xMi00aDJ2LTJoLTJ2MnptLTggMGgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-5xl font-bold text-primary-800 mb-8">
          Let's Build the Next Chapter of Your <span className="text-secondary-500">Legacy</span>
        </h2>
        
        <p className="text-xl text-primary-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Your business deserves a future that honors its past. At HavenRise Capital, we're here to
          guide you through a smooth and respectful transition, ensuring your values and vision live on.
        </p>
        
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <BookCallButton className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;