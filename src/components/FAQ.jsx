import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import Section from './Section';
import Accordion from './Accordion';

const FAQ = () => {
  const faqItems = [
    {
      title: 'Question',
      content: (
        <div>
          <p className="mb-3">
            Answer
          </p>
        </div>
      )
    },
    {
      title: 'Question',
      content: (
        <div>
          <p className="mb-3">
            Answer
          </p>
        </div>
      )
    },
    {
      title: 'Question',
      content: (
        <div>
          <p className="mb-3">
            Answer
          </p>
        </div>
      )
    },
  ];

  return (
    <Section id="faq" background="white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
            <HelpCircle className="w-5 h-5" />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Questions? We Have Answers.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Clarity, microplastic detection, and our mission.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Accordion items={faqItems} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Reach out to our team for personalized answers about Clarity,
            installation, or our mission.
          </p>
          <a
            href="mailto:hello@claritywater.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <HelpCircle className="w-5 h-5" />
            hello@claritywater.com
          </a>
        </div>
      </motion.div>
    </Section>
  );
};

export default FAQ;
