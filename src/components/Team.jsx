import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, User } from 'lucide-react';
import Section from './Section';
import Card from './Card';

const TeamMemberCard = ({ name, bio, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="text-center h-full">
        {/* Photo Placeholder */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center">
          <User className="w-16 h-16 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{bio}</p>
        <div className="flex justify-center gap-4">
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors flex items-center justify-center">
            <Linkedin className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </Card>
    </motion.div>
  );
};

const AdvisorCard = ({ name, title, organization }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <p className="font-bold text-gray-900">{name}</p>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-sm text-primary">{organization}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Noga Gercsak',
      bio: 'High School senior who...'
    },
    {
      name: 'Anushka Polapally',
      bio: 'High School senior who...'
    },
    {
      name: 'Gaathri Chakka',
      bio: 'High School junior who...'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Rebecca Martinez',
      title: 'Professor of Environmental Science',
      organization: 'MIT'
    },
    {
      name: 'David Chen',
      title: 'Water Quality Engineer',
      organization: 'EPA Region 5'
    },
    {
      name: 'Dr. Aisha Williams',
      title: 'Microplastics Researcher',
      organization: 'NOAA'
    },
    {
      name: 'Marcus Thompson',
      title: 'Product Design Mentor',
      organization: 'IDEO'
    }
  ];

  return (
    <Section id="team" background="gray">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold mb-4">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Built by Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate team of high school students combining engineering, computer science,
            and policy expertise to tackle a global health crisis.
          </p>
        </motion.div>
      </div>

      {/* Team Members */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            bio={member.bio}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16"
      >
        <Card>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Story
          </h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Our journey began when...
            </p>
          </div>
        </Card>
      </motion.div>

    </Section>
  );
};

export default Team;
