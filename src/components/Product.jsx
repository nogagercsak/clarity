import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Smartphone, Map, FlaskConical, Check, X } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import Button from './Button';

const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ComparisonRow = ({ feature, traditional, labTesting, clarity }) => {
  const renderCell = (value) => {
    if (value === true) return <Check className="w-6 h-6 text-green-500 mx-auto" />;
    if (value === false) return <X className="w-6 h-6 text-red-500 mx-auto" />;
    return <span className="text-sm text-gray-700 text-center block">{value}</span>;
  };

  return (
    <tr className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
      <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
      <td className="py-4 px-4">{renderCell(traditional)}</td>
      <td className="py-4 px-4">{renderCell(labTesting)}</td>
      <td className="py-4 px-4 bg-primary/5">{renderCell(clarity)}</td>
    </tr>
  );
};

const Product = () => {
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

  return (
    <Section id="product" background="white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
            Product
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            One Device. Complete Peace of Mind.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to monitor, protect, and contribute to cleaner water for all.
          </p>
        </motion.div>
      </div>

      {/* Product Showcase */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 rounded-2xl gradient-water flex items-center justify-center shadow-2xl">
                <Eye className="w-32 h-32 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-700">Clarity Detection System</p>
              <p className="text-gray-500 mt-2">Compact inline design</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h3>
          <FeatureItem
            icon={Eye}
            title="Real-Time Detection"
            description="Continuous monitoring with results updated every 5 minutes via mobile app"
          />
          <FeatureItem
            icon={Shield}
            title="Smart Filter Activation"
            description="Automatically activates filtration when contamination exceeds safe thresholds"
          />
          <FeatureItem
            icon={Smartphone}
            title="Mobile App Alerts"
            description="Instant notifications, historical trends, and contamination insights"
          />
          <FeatureItem
            icon={Map}
            title="Community Contamination Map"
            description="See how your water compares to your neighborhood and nationwide"
          />
          <FeatureItem
            icon={FlaskConical}
            title="Contribution to Research"
            description="Your data helps scientists and policymakers protect public health"
          />
        </motion.div>
      </div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-16"
      >
        <Card className="text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-accent-purple/10 rounded-full text-accent font-semibold mb-6 border border-accent/20">
            Early Bird Pricing
          </div>
          <div className="mb-8">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              $299
              <span className="text-2xl text-gray-500 font-normal"> one-time</span>
            </div>
            <p className="text-gray-600">Clarity Detection Device</p>
          </div>
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              $25
              <span className="text-xl text-gray-500 font-normal"> /quarter</span>
            </div>
            <p className="text-gray-600">Replacement Filter Cartridges</p>
          </div>
          <div className="space-y-3 mb-8">
            {[
              'Free mobile app (iOS & Android)',
              'Unlimited data monitoring',
              'Access to community map',
              '2-year warranty',
              'Free shipping (US only)'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div id="waitlist">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                ✓ You're on the list! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Reserve Your Device
                </Button>
                <p className="text-sm text-gray-500">
                  Expected shipping: Q2 2026 • No payment required today
                </p>
              </form>
            )}
          </div>
        </Card>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          How We Compare
        </h3>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-4 text-left font-bold text-gray-900">Feature</th>
                <th className="py-4 px-4 text-center font-bold text-gray-900">Traditional Filters</th>
                <th className="py-4 px-4 text-center font-bold text-gray-900">Lab Testing</th>
                <th className="py-4 px-4 text-center font-bold text-primary bg-primary/5">Clarity</th>
              </tr>
            </thead>
            <tbody>
              <ComparisonRow
                feature="Detects Microplastics"
                traditional={false}
                labTesting={true}
                clarity={true}
              />
              <ComparisonRow
                feature="Real-Time Results"
                traditional={false}
                labTesting={false}
                clarity={true}
              />
              <ComparisonRow
                feature="Continuous Monitoring"
                traditional={false}
                labTesting={false}
                clarity={true}
              />
              <ComparisonRow
                feature="Smart Filtration"
                traditional={false}
                labTesting={false}
                clarity={true}
              />
              <ComparisonRow
                feature="Cost per Year"
                traditional="$50-200"
                labTesting="$800-2000"
                clarity="$100"
              />
              <ComparisonRow
                feature="Installation"
                traditional="Easy"
                labTesting="N/A"
                clarity="Easy"
              />
              <ComparisonRow
                feature="Data Contribution"
                traditional={false}
                labTesting={false}
                clarity={true}
              />
            </tbody>
          </table>
        </div>
      </motion.div>
    </Section>
  );
};

export default Product;
