import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  id,
  children,
  className = '',
  background = 'white',
  ...props
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-primary text-white',
    light: 'bg-light'
  };

  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
