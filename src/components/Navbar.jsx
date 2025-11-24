import React, { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Why Clarity', href: '#why-clarity' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Impact', href: '#impact' },
    { label: 'Product', href: '#product' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-gray-200 py-4'
          : 'bg-white py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors tracking-tight"
          >
            Clarity
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-gray-600 hover:text-primary transition-colors uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={(e) => scrollToSection(e, '#waitlist')}
              className="text-sm text-primary hover:text-primary/80 transition-colors uppercase tracking-wide font-medium"
            >
              Join Waitlist →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-gray-200 pt-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-sm text-gray-600 hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={(e) => scrollToSection(e, '#waitlist')}
                className="text-sm text-primary hover:text-primary/80 transition-colors uppercase tracking-wide font-medium text-left"
              >
                Join Waitlist →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
