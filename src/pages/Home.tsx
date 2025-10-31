import React from 'react';
import Hero from '../components/home/Hero';
import KeyHighlights from '../components/home/KeyHighlights';
import Vision from '../components/home/Vision';
import IndustriesServed from './IndustriesServed';
import Features from '../components/home/Features';
import ImagerySuggestions from '../components/home/ImagerySuggestions';
import KeyBenefits from '../components/home/KeyBenefits';
import Customers from '../components/Customers';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
        <KeyBenefits/>
      {/* <KeyHighlights /> */}
      {/* <Features/> */}
      <ImagerySuggestions />
       <Vision />
      
      <Customers />

    </div>
  );
};

export default Home;