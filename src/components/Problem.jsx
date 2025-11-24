import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Microscope, Scale } from 'lucide-react';
import Section from './Section';

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({ icon: Icon, stat, description, source, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-8 border border-gray-200 hover:border-accent transition-all duration-300"
    >
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center tracking-tight">
        {stat}
      </div>
      <p className="text-base text-gray-700 mb-3 text-center">
        {description}
      </p>
      <p className="text-xs text-gray-500 text-center">
        Source: {source}
      </p>
    </motion.div>
  );
};

const Problem = () => {
  return (
    <Section id="problem" background="gray">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight"
        >
          The Hidden Threat in Every Glass
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Microplastics are everywhere — in our water, food, and air. But without real-time monitoring,
          you're drinking blind.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <StatCard
          icon={Microscope}
          stat={
            <>
              <AnimatedCounter end={83} />%
            </>
          }
          description="of global tap water contains microplastics"
          source="Orb Media Study, 2017"
          delay={0}
        />
        <StatCard
          icon={AlertTriangle}
          stat="High Risk"
          description="Linked to cancer, hormonal disruption, and gut inflammation"
          source="WHO Health Report, 2022"
          delay={0.1}
        />
        <StatCard
          icon={Scale}
          stat={
            <>
              <AnimatedCounter end={0} />
            </>
          }
          description="EPA monitoring or regulation exists"
          source="Current EPA Standards"
          delay={0.2}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg p-10 md:p-16 border border-gray-200 max-w-4xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 tracking-tight">
          The Data Gap
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Without comprehensive monitoring data, the EPA can't establish safety standards or
          regulations for microplastics in drinking water. Traditional lab testing is expensive,
          slow, and impractical for widespread use. We need real-time, accessible monitoring
          that empowers individuals while building the scientific case for national action.
        </p>
      </motion.div>
    </Section>
  );
};

export default Problem;
