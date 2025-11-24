import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, FileCheck, Quote } from 'lucide-react';
import Section from './Section';
import Card from './Card';

const TimelineItem = ({ year, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex gap-6 items-start"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
          {year}
        </div>
        <div className="w-1 h-full bg-gradient-to-b from-primary to-transparent mt-4"></div>
      </div>
      <div className="pb-12">
        <h4 className="text-2xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ quote, author, role, organization, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full">
        <Quote className="w-10 h-10 text-primary/20 mb-4" />
        <p className="text-gray-700 leading-relaxed mb-6 italic">
          "{quote}"
        </p>
        <div className="border-t border-gray-200 pt-4">
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-primary">{organization}</p>
        </div>
      </Card>
    </motion.div>
  );
};

const Impact = () => {
  return (
    <Section id="impact" background="gray">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-4">
            Collective Impact
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Together, We Build the Data That Drives Change
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Individual protection meets collective action. Your monitoring contributes to the
            first nationwide microplastic contamination database.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Left: Explanation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Data Gap That Prevents Action
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The EPA cannot establish microplastic regulations without comprehensive monitoring
              data showing contamination levels across different regions and water sources.
              Current research is limited to expensive lab studies with small sample sizes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Clarity creates a crowdsourced monitoring network that generates real-world data
              at scale — making the invisible visible and the case for regulation undeniable.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Policy Implications</h4>
            <ul className="space-y-3">
              {[
                'Identify contamination hotspots requiring immediate intervention',
                'Establish baseline data for EPA safety standards',
                'Track effectiveness of water treatment improvements',
                'Provide evidence for microplastic reduction legislation'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right: Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
            <div className="bg-gradient-to-br from-primary to-secondary p-4">
              <h4 className="text-white font-bold text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Monitoring Coverage Map
              </h4>
            </div>
            <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <MapPin className="w-24 h-24 text-primary/40" />
                </div>
                <p className="text-gray-600 font-medium">Interactive US Map</p>
                <p className="text-sm text-gray-500 mt-2">
                  Showing device deployments and<br />real-time contamination levels
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">Low contamination</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <span className="text-sm text-gray-600">Moderate contamination</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <span className="text-sm text-gray-600">High contamination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          The Vision
        </h3>
        <div className="max-w-3xl mx-auto">
          <TimelineItem
            year="2027"
            title="10,000 Homes Monitoring"
            description="Widespread device adoption creates comprehensive contamination database across all 50 states, identifying regional patterns and pollution sources."
            delay={0}
          />
          <TimelineItem
            year="2028"
            title="Data Cited in EPA Proposals"
            description="Our dataset becomes the foundation for the first EPA microplastic safety standards, with congressional hearings citing Clarity monitoring results."
            delay={0.2}
          />
          <TimelineItem
            year="2030"
            title="National Microplastic Regulations"
            description="Federal regulations require water utilities to monitor and reduce microplastic contamination, protecting 330 million Americans."
            delay={0.4}
          />
        </div>
      </motion.div>

    </Section>
  );
};

export default Impact;
