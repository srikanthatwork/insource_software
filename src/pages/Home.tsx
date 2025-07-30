import React from 'react';
import Hero from '../components/home/Hero';
import KeyHighlights from '../components/home/KeyHighlights';
import Vision from '../components/home/Vision';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <KeyHighlights />
      <Vision />
    </div>
  );
};

export default Home;