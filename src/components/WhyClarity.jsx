import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Baby, Droplets, Heart, Home, Users } from 'lucide-react';
import Section from './Section';

const ScenarioCard = ({ icon: Icon, title, description, benefit, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid md:grid-cols-2 gap-6 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <div className={`${!isEven ? 'md:order-2' : ''}`}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center mb-3">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-primary mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
          {description}
        </p>
        <div className="bg-accent/5 border-l-4 border-accent px-3 py-2 rounded-r">
          <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
            The Clarity Difference
          </p>
          <p className="text-xs text-gray-700">
            {benefit}
          </p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className={`${!isEven ? 'md:order-1' : ''}`}>
        <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center p-4">
            <Icon className="w-10 h-10 mx-auto mb-2 text-gray-400" />
            <p className="text-xs text-gray-500">{image}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HealthDomain = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 border border-gray-200 hover:border-accent transition-all duration-300"
    >
      <h4 className="font-bold text-primary mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const WhyClarity = () => {
  const scenarios = [
    {
      icon: Coffee,
      title: 'Starting Your Day',
      description: 'Check your overnight water quality before making that morning coffee or filling your water bottle. Know if contamination spiked while you slept.',
      benefit: 'Real-time alerts mean you never drink contaminated water unknowingly.',
      image: 'Family checking app at breakfast'
    },
    {
      icon: Baby,
      title: 'Preparing Formula',
      description: "Your baby's developing immune system is especially vulnerable to microplastics. Clarity gives you confidence every time you prepare a bottle.",
      benefit: 'Automatic filter activation protects the most vulnerable members of your family.',
      image: 'Parent preparing baby bottle safely'
    },
    {
      icon: Droplets,
      title: 'After Heavy Rain',
      description: 'Storm runoff can spike microplastic contamination by 300%. Traditional filters have no idea. Clarity detects the surge and responds instantly.',
      benefit: 'Environmental monitoring triggers automatic protection when you need it most.',
      image: 'Contamination spike alert on phone'
    },
    {
      icon: Heart,
      title: 'Managing Health Conditions',
      description: 'If you have autoimmune disease, gut inflammation, or cancer risk factors, reducing microplastic exposure is critical. Track your daily exposure levels.',
      benefit: 'Long-term trend data helps you and your doctor make informed health decisions.',
      image: 'Health trends dashboard'
    },
    {
      icon: Home,
      title: 'Moving to a New Home',
      description: 'Different water sources have wildly different contamination levels. Get baseline readings in your new home within 24 hours.',
      benefit: 'Compare neighborhoods before you buy. Know what you\'re getting into.',
      image: 'Neighborhood comparison map'
    },
    {
      icon: Users,
      title: 'Protecting Your Community',
      description: 'Your monitoring data contributes to identifying pollution hotspots and building the case for local water treatment improvements.',
      benefit: 'Individual action drives collective change. Be part of the solution.',
      image: 'Community impact visualization'
    }
  ];

  const healthDomains = [
    {
      title: 'Reproductive Health',
      description: 'Microplastics linked to reduced fertility and hormonal disruption in both men and women.'
    },
    {
      title: 'Gut Health',
      description: 'Studies show microplastics cause inflammation and alter gut microbiome composition.'
    },
    {
      title: 'Cancer Risk',
      description: 'Certain plastic additives are known carcinogens that accumulate in body tissue.'
    },
    {
      title: 'Immune Function',
      description: 'Chronic exposure may weaken immune response and increase inflammation markers.'
    },
    {
      title: 'Cardiovascular Health',
      description: 'Recent research links microplastics to increased heart attack and stroke risk.'
    },
    {
      title: 'Childhood Development',
      description: 'Growing bodies are especially vulnerable to endocrine-disrupting plastic chemicals.'
    }
  ];

  return (
    <>
      <Section id="why-clarity" background="white">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">
              Why Clarity
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight max-w-4xl">
              Clarity gives your water{' '}
              <span className="text-gray-600">a voice</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Every glass of water tells a story. Clarity helps you hear it — and act on it —
              before your health pays the price.
            </p>
          </motion.div>
        </div>

        {/* Scenario-Based Stories */}
        <div className="space-y-16">
          {scenarios.map((scenario, index) => (
            <ScenarioCard
              key={index}
              icon={scenario.icon}
              title={scenario.title}
              description={scenario.description}
              benefit={scenario.benefit}
              image={scenario.image}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Health Domains Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
              Six Reasons Your Health Depends on This
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Microplastic exposure isn't just one health risk — it's a systemic threat affecting
              multiple body systems. Here's what the science shows.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthDomains.map((domain, index) => (
            <HealthDomain
              key={index}
              title={domain.title}
              description={domain.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto border border-gray-200">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide font-semibold">
              Peer-Reviewed Research
            </p>
            <p className="text-gray-600 leading-relaxed">
              All health claims based on published studies from WHO, EPA, National Institutes of Health,
              and leading environmental health journals. Full citations available upon request for
              Conrad Challenge judges.
            </p>
          </div>
        </motion.div>
      </Section>

    </>
  );
};

export default WhyClarity;
