import React from 'react';
import Hero from './components/hero/Hero';
import HowWeHelp from './components/features/HowWeHelp';
import { Services } from './components/services/Services';
import { Testimonials } from './components/testimonials/Testimonials';
import { FAQ } from './components/faq/FAQ';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowWeHelp />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;