import React from 'react';
import Hero from '../Hero/Hero';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Projects from '../Projects/Projects';
import We from '../We/We';
import Benefits from '../Benefits/Benefits';
import Faq from '../Faq/Faq';

function MainPage() {
  return (
    <>
      <Hero />
      <Slider />
      <About />
      <Projects />
      <We />
      <Benefits />
      <Faq />
    </>
  );
}

export default MainPage;