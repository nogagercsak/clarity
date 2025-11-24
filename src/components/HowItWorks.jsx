import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Camera, Brain, Smartphone, Filter } from 'lucide-react';
import Section from './Section';
import Accordion from './Accordion';

const ProcessStep = ({ number, icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
            {number}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const technicalDetails = [
    {
      title: 'Multi-Modal Detection System',
      content: (
        <div className="space-y-3">
          <p>
            Answer
          </p>
        </div>
      )
    },
    {
      title: 'Why This Works Better',
      content: (
        <div className="space-y-3">
          <p>
            Answer
          </p>
        </div>
      )
    },
    {
      title: 'Proof of Concept',
      content: (
        <div className="space-y-3">
          <p>
            Answer
          </p>
        </div>
      )
    }
  ];

  return (
    <Section id="how-it-works" background="white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold mb-4">
            Technology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Advanced Technology, Simple Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five steps to complete peace of mind
          </p>
        </motion.div>
      </div>

      {/* Process Flow */}
      <div className="grid md:grid-cols-5 gap-8 mb-16">
        <ProcessStep
          number={1}
          icon={Droplets}
          title="Water Entry"
          description="Water flows through inline monitoring chamber"
          delay={0}
        />
        <ProcessStep
          number={2}
          icon={Camera}
          title="Capture"
          description="UV LED + camera capture microplastic particles"
          delay={0.1}
        />
        <ProcessStep
          number={3}
          icon={Brain}
          title="Analysis"
          description="AI analyzes images in real-time for particle detection"
          delay={0.2}
        />
        <ProcessStep
          number={4}
          icon={Smartphone}
          title="Data Sync"
          description="Results sent to mobile app dashboard"
          delay={0.3}
        />
        <ProcessStep
          number={5}
          icon={Filter}
          title="Protection"
          description="Smart filter activates when thresholds exceeded"
          delay={0.4}
        />
      </div>

      {/* Connection Lines (desktop only) */}
      <div className="hidden md:block relative -mt-8 mb-16">
        <svg className="w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
          <motion.line
            x1="10"
            y1="1"
            x2="90"
            y2="1"
            stroke="#0EA5E9"
            strokeWidth="0.5"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Technical Details Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Technical Details
        </h3>
        <Accordion items={technicalDetails} />
      </motion.div>
    </Section>
  );
};

export default HowItWorks;
