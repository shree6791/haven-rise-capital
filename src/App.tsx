import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Investment from './components/Investment';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Investment />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;