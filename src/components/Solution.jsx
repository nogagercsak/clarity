import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Globe } from 'lucide-react';
import Section from './Section';
import Card from './Card';

const FeatureCard = ({ icon: Icon, title, description, delay, color }) => {
  const colorClasses = {
    cyan: 'bg-accent hover:border-accent',
    purple: 'bg-accent-purple hover:border-accent-purple',
    emerald: 'bg-accent-emerald hover:border-accent-emerald'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-lg p-8 border border-gray-200 ${colorClasses[color]?.split(' ')[1] || 'hover:border-accent'} transition-all duration-300`}
    >
      <div className="mb-6">
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]?.split(' ')[0] || 'bg-accent'} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Solution = () => {
  return (
    <Section id="solution" background="white">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">
            Our Solution
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight max-w-4xl">
            See the Unseen. Drink Safely.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Clarity combines cutting-edge AI detection with smart filtration to give you real-time
            protection and contribute to nationwide change.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <FeatureCard
          icon={Eye}
          title="DETECT"
          description="Real-time microplastic monitoring using AI-powered optical analysis that identifies particles as small as 10 microns."
          delay={0}
          color="cyan"
        />
        <FeatureCard
          icon={Shield}
          title="PROTECT"
          description="Smart filter activates automatically when microplastic thresholds are exceeded, ensuring clean water on demand."
          delay={0.1}
          color="purple"
        />
        <FeatureCard
          icon={Globe}
          title="IMPACT"
          description="Your data helps build the first comprehensive microplastic contamination map, driving EPA regulation and protecting communities."
          delay={0.2}
          color="emerald"
        />
      </div>

      {/* Product Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-gray-100 rounded-lg p-16 text-center"
      >
        <div className="w-24 h-24 mx-auto mb-6 rounded-lg bg-accent flex items-center justify-center">
          <Eye className="w-12 h-12 text-white" />
        </div>
        <p className="text-lg font-semibold text-gray-700">Clarity Detection System</p>
        <p className="text-sm text-gray-500 mt-2">Product visualization</p>
      </motion.div>
    </Section>
  );
};

export default Solution;
