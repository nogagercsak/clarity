import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WhyClarity from './components/WhyClarity';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Product from './components/Product';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <WhyClarity />
      <HowItWorks />
      <Impact />
      <Product />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
