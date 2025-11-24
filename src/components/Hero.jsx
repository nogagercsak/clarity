import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tight">
              See what's in your water.{' '}
              <span className="bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent">Protect what matters most.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
          >
            Real-time monitoring. Smart filtration. Peace of mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-20"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#how-it-works')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Learn How It Works
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#waitlist')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Join the Waitlist
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-sm text-gray-500 uppercase tracking-wider"
          >
            See the Unseen. Drink Safely.
          </motion.div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#problem')}
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
