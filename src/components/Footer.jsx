import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Mail, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

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

  const footerLinks = [
    { label: 'Why Clarity', href: '#why-clarity' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Impact', href: '#impact' },
    { label: 'Product', href: '#product' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Email Signup Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Join the Waitlist
            </h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Be first to get early bird pricing and exclusive updates on our progress.
            </p>
            {submitted ? (
              <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-white">
                ✓ Success! You're on the list. Check your email for confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
                  required
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="md"
                  className="bg-white text-primary hover:bg-white/90 whitespace-nowrap font-semibold"
                >
                  Join Waitlist
                </Button>
              </form>
            )}
            <p className="text-white/50 text-sm mt-4">
              No payment required • Expected shipping Q2 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-4 tracking-tight">
              Clarity
            </div>
            <p className="text-white/60 mb-8 leading-relaxed max-w-md text-sm">
              Real-time microplastic detection for your tap water. See the unseen. Drink safely.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@claritywater.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  hello@claritywater.com
                </a>
              </li>
              <li className="text-sm text-white/60">
                Mon-Fri, 9am-5pm EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Clarity. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-8">
            Built for the Conrad Challenge Innovation Competition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
